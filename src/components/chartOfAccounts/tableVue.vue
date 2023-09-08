<template>
  <div>
    <div class="action-buttons text-end">
      <b-dropdown id="exportDropdown" variant="success" class="export-btn">
        <template #button-content>
          <i class="mdi mdi-file-export"></i> Export
        </template>
        <b-dropdown-item><download-excel :data="data">
          Excel
</download-excel></b-dropdown-item>
        <b-dropdown-item @click="exportToExcel">PDF</b-dropdown-item>
      </b-dropdown>
      <button @click="toggleForm" class="btn btn-success mb-2 me-2">Add Item</button>
      <button class="btn btn-success btn-md mb-2" @click="myInfo = true">Info</button>
    </div>
    <!-- Table Component -->
    <Table :fields="fields" :tableData="data" @edit-item="editItem" @delete-item="deleteItem" />

    <!-- Display the form when isFormVisible is true -->
    <div v-if="isFormVisible">
      <h2>Add New Item</h2>
      <form @submit.prevent="addItem">
        <!-- Your form input fields here -->
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" v-model="formData.name" required>
        </div>
        <!-- Add other form fields here -->
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-secondary" @click="cancelAdd">Cancel</button>
      </form>
    </div>

    <b-modal v-model="myInfo" id="modal-info" class="green-header" centered title-class="font-18" hide-footer
      title="Notes +">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
        card's content.</p>
    </b-modal>
  </div>
</template>

<script>
import { ref } from 'vue';
import Table from "../common/Table.vue"; // Update the import path
import JsonExcel from "vue-json-excel3";
export default {
  components: {
    Table,
    downloadExcel:JsonExcel
  },
  setup() {
    const isFormVisible = ref(false);
    const myInfo = ref(false);
    const data = ref([
      { id: 1, no: "1", no2: "", name: 'Mark', netchange: '17,895', balance: '17,895', incomebalance: 'Balance Sheet', directchange: true, actions: '' },
      { id: 2, no: "2", no2: "", name: 'Jacob', netchange: '7,895', balance: '19,895', incomebalance: 'Balance Sheet', directchange: false, actions: '' },
      { id: 3, no: "3", no2: "", name: 'Larry', netchange: '19,895', balance: '20,895', incomebalance: 'Balance Sheet', directchange: false, actions: '' },
      
    ]);

    const formData = ref({
      id: data.value.length + 1,
      name: ``,
      no: ``,
      no2: ``,
      netchange: ``,
      balance: ``,
      incomebalance: `Balance Sheet`,
      directchange: false,
    });

    const toggleForm = () => {
      isFormVisible.value = !isFormVisible.value;
      if (!isFormVisible.value) {
        // Reset the form data when hiding the form
        formData.value = {
          name: '', // Reset to default values
          no: ``,
          no2: ``,
          netchange: ``,
          balance: ``,
          incomebalance: ``,
          directchange: false,
        };
      }
    };

    // const addItem = () => {
    //   // Implement logic to add a new item
    //   const newItem = {
    //     id: data.value.length + 1,
    //     name: `Item ${data.value.length + 1}`,
    //     no: `${data.value.length + 1}`,
    //     no2: `${data.value.length + 1}`,
    //     netchange: `19,895 ${data.value.length + 1}`,
    //     balance: `19,895 ${data.value.length + 1}`,
    //     incomebalance: `Balance Sheet`,
    //     directchange: false,
    //   };
    //   data.value.push(newItem);
    // };

    const addItem = () => {
      // Validate the form data if needed
      if (formData.value.name.trim() === '') {
        alert('Please fill in the required fields.');
        return;
      }

      // Create a new item and push it to the data array
      const newItem = {
        id: data.value.length + 1,
        name: formData.value.name,
        // Assign other form data fields here
      };

      data.value.push(newItem);

      // Hide the form after adding the item
      isFormVisible.value = false;

      // Reset the form data for future use
      formData.value = {
        name: '', // Reset to default values
        // Reset other form fields here
      };
    };

    const editItem = (item) => {
      // Implement your edit logic here
      alert(`Editing item: ${item.name}`);
    };

    return {
      data,
      addItem,
      editItem,
      isFormVisible,
      toggleForm,
      myInfo,
      fields: [
        { key: 'no', label: 'No' },
        { key: 'no2', label: 'No.2' },
        { key: 'name', label: 'Name' },
        { key: 'netchange', label: 'Net Change' },
        { key: 'balance', label: 'Balance' },
        { key: 'directchange', label: 'Allow Direct Change' },
        { key: 'incomebalance', label: 'Income Balance' },
        { key: 'actions', label: 'Actions' },
        { key: 'accountsubcategory', label: 'Account Subcategory' },
      ],
    };
  },
  methods: {

  },
};
</script>
