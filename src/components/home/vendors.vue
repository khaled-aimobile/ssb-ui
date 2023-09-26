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
        <b-dropdown-item @click="generatePDF()">PDF</b-dropdown-item>
      </b-dropdown>
      <!-- <button @click="toggleForm" class="btn btn-success mb-2 me-2">Add Item</button> -->
      <!-- <button class="btn btn-success btn-md mb-2" @click="myInfo = true">Info</button> -->
    </div>
    <!-- Table Component -->
    <vue3-html2pdf :show-layout="false" :float-layout="true" :enable-download="true" :preview-modal="true"
      :paginate-elements-by-height="1400" filename="nightprogrammerpdf" :pdf-quality="2" :manual-pagination="false"
      pdf-format="a3"  :pdf-margin="10" pdf-orientation="portrait" pdf-content-width="100%"  @progress="onProgress($event)"
      ref="html2Pdf">
      <template v-slot:pdf-content>
        <Table :fields="visibleFields" :tableData="data" />
      </template>
    </vue3-html2pdf>
    <b-dropdown id="filter-column" variant="success" class="m-2 ms-0 filter-column" no-caret>
      <template #button-content>
      <i class="mdi mdi-filter"></i>  Filter Column
    </template>
      <b-dropdown-item v-on:click.stop v-for="field in fields" :key="field.key"><b-form-checkbox v-model="showColumns[field.key]">
          {{ field.label }}
        </b-form-checkbox></b-dropdown-item>
    </b-dropdown>
    <!-- <b-form-checkbox-group id="checkbox-group-1" :aria-describedby="ariaDescribedby">
    <b-form-checkbox
      v-model="showColumns[field.key]"
      v-for="field in fields"
      :key="field.key"
    >
      {{ field.label }}
    </b-form-checkbox>
  </b-form-checkbox-group> -->
    <Table :fields="visibleFields" :tableData="data" :showSearchPagination="true" add-title="Add" add="Add Item"
      edit-title="Edit Item" @delete-item="deleteItem" />
    <b-modal v-model="myInfo" id="modal-info" class="green-header" centered title-class="font-18" hide-footer
      title="Notes +">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
        card's content.</p>
    </b-modal>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import Table from "../common/Table.vue";
import JsonExcel from "vue-json-excel3";
import Vue3Html2pdf from "vue3-html2pdf";
export default {
  components: {
    Table,
    downloadExcel: JsonExcel,
    Vue3Html2pdf,
  },
  setup() {

    const isFormVisible = ref(false);
    const myInfo = ref(false);
    const data = ref([
      { id: 1, no: "IPH00001", phone: "", name: 'PERTUBUHAN KESELAMATAN SOSIAL', responsibility: '17,895', gstdatechecked: "", gstdatechecked1: "", locationcode: "", contact: "", lastmodify: "12/07/21 14:50:47", searchname: "PERTUBUHAN KESELAMATAN SOSIAL", balance: '-12,348.30' },
      { id: 2, no: "IPH00002", phone: "", name: '', responsibility: '7,895', gstdatechecked: "0.00", gstdatechecked1: "", locationcode: "", contact: "", lastmodify: "", searchname: "", balance: '19,895', },
      { id: 3, no: "IPH00003", phone: "", name: '', responsibility: '19,895', gstdatechecked: "0.00", gstdatechecked1: "", locationcode: "", contact: "", lastmodify: "", searchname: "", balance: '20,895' },
      { id: 4, no: "IPH00004", phone: "", name: 'CHECKROLL - TIMBER OPERATION	', responsibility: '17,895', gstdatechecked: "", gstdatechecked1: "", locationcode: "", contact: "", lastmodify: "", searchname: "CHECKROLL - TIMBER OPERATION", balance: '-944,124.81' },
      { id: 5, no: "IPH00005", phone: "", name: 'CHECKROLL - AGRICROPS', responsibility: '7,895', gstdatechecked: "", gstdatechecked1: "", locationcode: "", contact: "", lastmodify: "", searchname: "CHECKROLL - AGRICROPS", balance: '-7,613,695.74', }
    ]);
    const showColumns = ref({});


    const fields = [
      { key: 'no', label: 'No', visible: true },
      { key: 'name', label: 'Name', visible: false },
      { key: 'responsibility', label: 'Responsibility Center', visible: true },
      { key: 'gstdatechecked', label: 'Date GST Status Last Checked', visible: true },
      { key: 'gstdatechecked1', label: 'Date GST Status Last Checked1', visible: true },
      { key: 'locationcode', label: 'Location Code', visible: false },
      { key: 'phone', label: 'Phone No.', visible: true },
      { key: 'contact', label: 'Contact', visible: false },
      { key: 'lastmodify', label: 'Last Modified Date Time', visible: true },
      { key: 'searchname', label: 'Search Name', visible: true },
      { key: 'balance', label: 'Balance ($)', visible: false },
    ];
    fields.forEach((field) => {
      showColumns.value[field.key] = true; // Set the initial value here based on your requirements.
    });
    const visibleFields = computed(() => {
      return fields.filter((field) => showColumns.value[field.key]);
    });

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
      fields,
      showColumns,
      visibleFields,
    };
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
