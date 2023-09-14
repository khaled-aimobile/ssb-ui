<template>
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
      </div>
      <!-- Table Component -->
      <vue3-html2pdf :show-layout="false" :float-layout="true" :enable-download="true" :preview-modal="true"
        :paginate-elements-by-height="1400" filename="nightprogrammerpdf" :pdf-quality="2" :manual-pagination="false"
        pdf-format="a3" :pdf-margin="10" pdf-orientation="portrait" pdf-content-width="800px" @progress="onProgress($event)"
        ref="html2Pdf">
        <template v-slot:pdf-content>
          <Table :fields="fields" :tableData="data" />
        </template>
      </vue3-html2pdf>
      <Table :fields="fields" :tableData="data" :showSearchPagination="true" add-title="Add Item" add="Add Item"
        edit-title="Edit Item" @delete-item="deleteItem" />
      <b-modal v-model="myInfo" id="modal-info" class="green-header" centered title-class="font-18" hide-footer
        title="Notes +">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
          card's content.</p>
      </b-modal>
  </template>
  
  <script>
  import { ref } from 'vue';
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
        {
          id: 1,
          no: "1",
          name: 'Mark',
          description: '17,895',
          global_1: '17,895',
          global_2: 'Balance Sheet',
          budget_1: true,
          budget_2: '',
          budget_3: '',
          budget_4: '',
          blocked: '',
        },
  
      ]);
  
      return {
        data,
        isFormVisible,
        myInfo,
        fields: [
          { key: 'no', label: 'No' },
          { key: 'name', label: 'Name' },
          { key: 'description', label: 'Description' },
          { key: 'global_1', label: 'Global Dimension Code 1' },
          { key: 'global_2', label: 'Global Dimension Code 2' },
          { key: 'budget_1', label: 'Budget Dimension Code 1' },
          { key: 'budget_2', label: 'Budget Dimension Code 2' },
          { key: 'budget_3', label: 'Budget Dimension Code 3' },
          { key: 'budget_4', label: 'Budget Dimension Code 4' },
          { key: 'blocked', label: 'Blocked' },
        ],
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
  