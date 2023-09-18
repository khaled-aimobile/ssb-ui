<template>
  <div>
    <!-- Display Table or Edit/Add Form -->
    <div v-if="isTableView">
      <!-- Table -->
      <div v-if="showSearchPagination">
        <b-form-input v-model="searchText" type="text" class="mb-2 mt-2 search-table" placeholder="Search here..."></b-form-input>
      </div>
      <button class="btn btn-success mb-2 export" @click="showAddForm" v-if="add">{{ add }}</button>
       <!-- <button class="btn btn-success mb-2 export">Add Item</button> -->
       <div class="custom-table">
    <b-table id="my-table" striped hover :fields="fields" :items="paginatedData" :per-page="perPage" :current-page="currentPage"
        class="table-green">
        <!-- Name Column -->
        <template #cell(name)="data">
          {{ data.item.name }}
        </template>

        <!-- Description Column -->
        <template #cell(directchange)="data">
          <input type="checkbox" v-model="data.item.directchange" :disabled="true">
        </template>

        <!-- Actions Column -->
        <template #cell(actions)="data">
          <div class="d-flex">
            <button @click="editItem(data.item)" class="btn btn-sm btn-primary me-2">Edit</button>
            <!-- <button class="btn btn-sm btn-primary me-2">Edit</button> -->
            <button @click="showDeleteConfirmation(data.item)" class="btn btn-sm btn-danger">Delete</button>
          </div>
        </template>
      </b-table>
    </div>
      <!-- Table Pagination -->
      <div class="custom-pagination" v-if="showSearchPagination">
    <pagination
      :pageCount="pageCount"
      @set-currentpage="setCurrentPage"
    />
  </div>
    </div>

    <!-- Edit Form -->
    <div v-if="isEditing" class="add-items">
      <h2>{{ editTitle }}</h2>
      <form @submit.prevent="saveItem">
        <div class="add-item">
        <div v-for="field in fields" :key="field.key" class="mb-3">
          <label :for="`edit-${field.key}`" class="form-label">{{ field.label }}</label>
          <input :id="`edit-${field.key}`" class="form-control" v-model="editedItem[field.key]" :required="field.required" />
        </div>
      </div>
      <div class="add-item-footer">
        <button type="submit" class="btn btn-primary me-2" @click="cancelEdit">Save</button>
        <button type="button" class="btn btn-secondary" @click="cancelEdit">Cancel</button>
      </div>
      </form>
    </div>

    <!-- Add Form -->
    <div v-if="isAdding" class="add-items">
      <h2>{{ addTitle }}</h2>
      <form @submit.prevent="addItem">
        <div class="add-item">
          <div v-for="field in fields" :key="field.key" class="mb-3">
            <label :for="`add-${field.key}`" class="form-label">{{ field.label }}</label>
            <input :id="`add-${field.key}`" class="form-control" v-model="addingItem[field.key]" :required="field.required" />
          </div>
        </div>
        <div class="add-item-footer">
          <button type="submit" class="btn btn-primary me-2" @click="cancelAdd">Add</button>
          <button type="button" class="btn btn-secondary" @click="cancelAdd">Cancel</button>
        </div>
      </form>
    </div>

    <!-- Delete Modal -->
    <b-modal v-model="showDeleteModal" title="Delete Item" class="delete-modal" centered hide-footer>
      <p>Are you sure you want to delete this item?</p>
      <div class="modal-footer pb-0 pe-0">
        <b-button variant="danger" class="float-left" @click="confirmDelete">Confirm Delete</b-button>
        <b-button variant="primary" class="float-right" @click="showDeleteModal = false">Cancel</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { ref, computed,  reactive,watch, toRefs, } from 'vue';
import Pagination from './pagination.vue'


export default {
  props: {
    tableData: Array,
    fields: Array,
    addTitle: String,  
    editTitle: String,
    add: String,
    showSearchPagination: Boolean,
  },
  setup(props) {

    const showDeleteModal = ref(false);
    const itemToDelete = ref(null);
    const searchText = ref('');
    const editedItem = ref(null);
    const editedItemOriginal = ref(null); 
    const addingItem = ref({}); 
    const isAdding = ref(false); 
  const isEditing = ref(false);
  const isTableView = ref(true); 

  const showAddForm = () => {
    isAdding.value = true;
    isEditing.value = false;
    isTableView.value = false;
  };

  const showEditForm = () => {
    isAdding.value = false;
    isEditing.value = true; 
  };

    const data = ref(props.tableData);
    const filteredData = computed(() => {
  const searchTextValue = searchText.value ? searchText.value.toLowerCase() : '';

  return state.data.filter((item) =>
    (item.no && item.no.toLowerCase().includes(searchTextValue)) ||
    (item.name && item.name.toLowerCase().includes(searchTextValue)) ||
    (item.customerno && item.customerno.toLowerCase().includes(searchTextValue))
  );
});
    const state = reactive({
      currentPage: 1,
      data: data,
      rowsPerPage: 5,
      pageCount: computed(() =>
      Math.ceil(state.data.length / state.rowsPerPage),
      ),
      paginatedData: computed(() =>
        filteredData.value.slice(
          (state.currentPage - 1) * state.rowsPerPage,
          state.currentPage * state.rowsPerPage
        )
      ),
    });
    function setCurrentPage(number) {
      state.currentPage = number;
    }

    const editItem = (item) => {
      editedItemOriginal.value = { ...item };
      editedItem.value = { ...item };
      isEditing.value = true;
      isTableView.value = false;
    };

    const showDeleteConfirmation = (item) => {
      itemToDelete.value = item;
      showDeleteModal.value = true;
    };

    const confirmDelete = () => {
      if (itemToDelete.value) {
        data.value = data.value.filter((item) => item !== itemToDelete.value);
      }
      itemToDelete.value = null;
      showDeleteModal.value = false;
    };

    const saveItem = () => {
      if (editedItem.value) {
        if (editedItem.value.id) {
          const index = data.value.findIndex((item) => item.id === editedItem.value.id);
          if (index !== -1) {
            data.value[index] = { ...editedItem.value };
          }
        } else {
          data.value.push({ ...editedItem.value });
        }
      }
      editedItem.value = null;
      isTableView.value = true;
    };

    const cancelEdit = () => {
  // if (editedItem.value !== null && typeof editedItem.value !== 'undefined') {
  //   if (JSON.stringify(editedItem.value) !== JSON.stringify(editedItemOriginal.value)) {
  //     if (confirm('Discard changes?')) {
  //       editedItem.value = null;
  //       isTableView.value = true;
  //     }
  //   } else {
  //     editedItem.value = null;
  //   }
  // } else {
  //   //
  // }
  isTableView.value = true;
  isEditing.value = false;
};
const cancelAdd = () => {
  // if (addingItem.value !== null && typeof addingItem.value !== 'undefined') {
  //   if (JSON.stringify(addingItem.value) !== JSON.stringify({})) {
  //     if (confirm('Discard changes?')) {
  //       addingItem.value = {};
  //     }
  //   } else {
  //     addingItem.value = {};
  //   }
  //   isTableView.value = true;
  //   isAdding.value = false;
  // } else {
  //   //
  // }
  isTableView.value = true;
    isAdding.value = false;
};
    const addItem = () => {
      data.value.push({ ...addingItem.value });
      addingItem.value = {};
    };

    const currentPage = ref(1);

    watch(searchText, () => {
      currentPage.value = 1;
    });

    return {
      editItem,
      searchText,
      currentPage,
      itemToDelete,
      saveItem,
      showDeleteModal,
      cancelEdit,
      cancelAdd,
      editedItem,
      isEditing,
      isAdding,
      showDeleteConfirmation,
      confirmDelete,
      addingItem,
      addItem,
      isTableView,
      showAddForm,
    showEditForm,
    ...toRefs(state),
      setCurrentPage,
    };
  },
  components:{
    Pagination,
  },
  methods: {
    onProgress(event) {
      console.log(`Processed: ${event} / 100`);
    },
    hasGenerated() {
      alert("PDF generated successfully!");
    },
    generatePDF() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>
