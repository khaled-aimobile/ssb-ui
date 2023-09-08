<template>
    <div>
      <!-- Display Table or Edit/Add Form -->
      <div v-if="isTableView">
        <!-- Table -->
        <b-form-input v-model="searchText" type="text" class="mb-2" placeholder="Search here..."></b-form-input>
        <b-table
          id="my-table"
          striped
          hover
          :fields="fields"
          :items="data"
          :per-page="perPage"
          :current-page="currentPage"
          class="table-green"
        >
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
            <button @click="editItem(data.item)" class="btn btn-sm btn-primary me-2">Edit</button>
            <button @click="showDeleteConfirmation(data.item)" class="btn btn-sm btn-danger">Delete</button>
          </template>
        </b-table>
        <!-- Table Pagination -->
        <!-- <b-pagination
          v-model="currentPage"
          :total-rows="data.length"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination> -->
      </div>
  
      <!-- Edit/Add Form -->
      <div v-else>
        <h2>{{ editedItem ? 'Edit' : 'Add' }} Form</h2>
        <form @submit.prevent="saveItem">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" v-model="editedItem.name" required>
          </div>
          <div class="mb-3">
            <label for="netchange" class="form-label">netchange</label>
            <input class="form-control" id="netchange" v-model="editedItem.netchange" required/>
        </div>
          <div class="mb-3">
            <label for="balance" class="form-label">balance</label>
            <input class="form-control" id="balance" v-model="editedItem.balance" required />
          </div>
          <button type="submit" class="btn btn-primary me-2">{{ editedItem ? 'Save' : 'Add' }}</button>
          <button type="button" class="btn btn-secondary" @click="cancelEdit">Cancel</button>
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
  import { ref, computed, watch } from 'vue';
  
  export default {
    props: {
      tableData: Array,
      fields: Array 
    },
    setup(props) {
      const showDeleteModal = ref(false); 
      const itemToDelete = ref(null);
      const searchText = ref('');
      const editedItem = ref(null);
  
      const data = ref(props.tableData);
  
      const filteredData = computed(() => {
        return data.value.filter((item) =>
          item.name.toLowerCase().includes(searchText.value.toLowerCase())
        );
      });
  
      const editItem = (item) => {
        editedItem.value = { ...item }; 
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
      };
  
      const cancelEdit = () => {
        editedItem.value = null;
      };
  
      const currentPage = ref(1);
      const perPage = ref(5); 
  
      const paginatedData = computed(() => {
        const start = (currentPage.value - 1) * perPage.value;
        const end = start + perPage.value;
        return filteredData.value.slice(start, end);
      });
  
      watch(searchText, () => {
        currentPage.value = 1; 
      });
  
      const isTableView = computed(() => !editedItem.value);
  
      return {
        data: paginatedData,
        editItem,
        searchText,
        currentPage,
        perPage,
        itemToDelete,
        saveItem,
        showDeleteModal, 
        cancelEdit,
        editedItem,
        isTableView,
        showDeleteConfirmation,
        confirmDelete,
      };
    },
    methods: {

  },
  };
  </script>
  