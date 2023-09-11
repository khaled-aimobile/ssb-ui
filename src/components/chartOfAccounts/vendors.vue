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
    <Table :fields="fields" :tableData="data" add-title="Add Item"
      edit-title="Edit Item" @delete-item="deleteItem" />

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
    downloadExcel:JsonExcel
  },
  setup() {
    const isFormVisible = ref(false);
    const myInfo = ref(false);
    const data = ref([
      { id: 1, no: "IPH00001", phone: "", name: 'PERTUBUHAN KESELAMATAN SOSIAL', responsibility: '17,895', gstdatechecked: "", gstdatechecked1: "", locationcode: "", contact: "", lastmodify: "12/07/21 14:50:47", searchname: "PERTUBUHAN KESELAMATAN SOSIAL", balance: '-12,348.30'},
      { id: 2, no: "IPH00002", phone: "", name: '', responsibility: '7,895',  gstdatechecked: "0.00", gstdatechecked1: "", locationcode: "", contact: "", lastmodify: "", searchname: "",balance: '19,895',},
      { id: 3, no: "IPH00003", phone: "", name: '', responsibility: '19,895', gstdatechecked: "0.00", gstdatechecked1: "", locationcode: "", contact: "", lastmodify: "", searchname: "", balance: '20,895'},
      { id: 4, no: "IPH00004", phone: "", name: 'CHECKROLL - TIMBER OPERATION	', responsibility: '17,895', gstdatechecked: "", gstdatechecked1: "", locationcode: "", contact: "", lastmodify: "", searchname: "CHECKROLL - TIMBER OPERATION", balance: '-944,124.81'},
      { id: 5, no: "IPH00005", phone: "", name: 'CHECKROLL - AGRICROPS', responsibility: '7,895',  gstdatechecked: "", gstdatechecked1: "", locationcode: "", contact: "", lastmodify: "", searchname: "CHECKROLL - AGRICROPS",balance: '-7,613,695.74',}
    ]);

    const formData = ref({
      id: data.value.length + 1,
      no: ``,
      name: ``,
      phone: ``,
      responsibility: ``,
      netchange: ``,
      gstdatechecked: ``,
      gstdatechecked1: ``,
      searchname: ``,
      contact: ``,
      locationcode: ``,
      lastmodify: ``,
      balance: `$`,
    });

    const toggleForm = () => {
      isFormVisible.value = !isFormVisible.value;
      if (!isFormVisible.value) {
        formData.value = {
          no: ``,
      name: ``,
      responsibility: ``,
      gstdatechecked: ``,
      gstdatechecked1: ``,
      locationcode: ``,
      phone: ``,
      contact: ``,
      lastmodify: ``,
      searchname: ``,
      balance: `$`,
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
        { key: 'name', label: 'Name' },
        { key: 'responsibility', label: 'Responsibility Center' },
        { key: 'gstdatechecked', label: 'Date GST Status Last Checked' },
        { key: 'gstdatechecked1', label: 'Date GST Status Last Checked1' },
        { key: 'locationcode', label: 'Location Code' },
        { key: 'phone', label: 'Phone No.' },
        { key: 'contact', label: 'Contact' },
        { key: 'lastmodify', label: 'Last Modified Date Time' },
        { key: 'searchname', label: 'Search Name' },
        { key: 'balance', label: 'Balance ($)' },
      ],
    };
  },
  methods: {

  },
};
</script>
