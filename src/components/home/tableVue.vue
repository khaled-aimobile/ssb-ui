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
        <!-- <b-dropdown-item @click="exportToExcel">PDF</b-dropdown-item> -->
      </b-dropdown>
      <!-- <button @click="toggleForm" class="btn btn-success mb-2 me-2">Add Item</button> -->
      <!-- <button class="btn btn-success btn-md mb-2" @click="myInfo = true">Info</button> -->
    </div>
    <!-- Table Component -->
    <Table :fields="fields" :tableData="data" add-title="Add Item for Page 1" edit-title="Edit Item for Page 1"
      @delete-item="deleteItem" />

    <b-modal v-model="myInfo" id="modal-info" class="green-header" centered title-class="font-18" hide-footer
      title="Notes +">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
        card's content.</p>
    </b-modal>
  </div>
</template>

<script>
import { ref } from 'vue';
import Table from "../common/Table.vue";
import JsonExcel from "vue-json-excel3";
export default {
  components: {
    Table,
    downloadExcel: JsonExcel
  },
  setup() {
    const isFormVisible = ref(false);
    const myInfo = ref(false);
    const data = ref([
      { id: 1, no: "1", no2: "", name: 'Mark', netchange: '17,895', balance: '17,895', incomebalance: 'Balance Sheet', directchange: true, actions: '' },
      { id: 2, no: "2", no2: "", name: 'Jacob', netchange: '7,895', balance: '19,895', incomebalance: 'Balance Sheet', directchange: false, actions: '' },
      { id: 3, no: "3", no2: "", name: 'Larry', netchange: '19,895', balance: '20,895', incomebalance: 'Balance Sheet', directchange: false, actions: '' },
      { id: 4, no: "4", no2: "", name: 'Mark', netchange: '17,895', balance: '17,895', incomebalance: 'Balance Sheet', directchange: true, actions: '' },
      { id: 5, no: "5", no2: "", name: 'Jacob', netchange: '7,895', balance: '19,895', incomebalance: 'Balance Sheet', directchange: false, actions: '' },
      { id: 6, no: "6", no2: "", name: 'Larry', netchange: '19,895', balance: '20,895', incomebalance: 'Balance Sheet', directchange: false, actions: '' },
      { id: 7, no: "7", no2: "", name: 'Mark', netchange: '17,895', balance: '17,895', incomebalance: 'Balance Sheet', directchange: true, actions: '' },
      { id: 8, no: "8", no2: "", name: 'Jacob', netchange: '7,895', balance: '19,895', incomebalance: 'Balance Sheet', directchange: false, actions: '' },
      { id: 9, no: "9", no2: "", name: 'Larry', netchange: '19,895', balance: '20,895', incomebalance: 'Balance Sheet', directchange: false, actions: '' },
      { id: 10, no: "10", no2: "", name: 'Mark', netchange: '17,895', balance: '17,895', incomebalance: 'Balance Sheet', directchange: true, actions: '' },
      { id: 11, no: "11", no2: "", name: 'Jacob', netchange: '7,895', balance: '19,895', incomebalance: 'Balance Sheet', directchange: false, actions: '' },
      { id: 12, no: "12", no2: "", name: 'Larry', netchange: '19,895', balance: '20,895', incomebalance: 'Balance Sheet', directchange: false, actions: '' },
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
        formData.value = {
          name: '',
          no: ``,
          no2: ``,
          netchange: ``,
          balance: ``,
          incomebalance: ``,
          directchange: false,
        };
      }
    };

    return {
      data,
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
