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
  import Table from "../../common/Table.vue";
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
          no: 'Transaction No',
          posting_date: 'IC Partner Code',
          name: 'Source Type',
          document_no: 'Document Type',
          document_type: 'Document No',
          transaction_source: 'Transaction Source',
          document_date: 'Document Date',
        },
  
      ]);
  
      return {
        data,
        isFormVisible,
        myInfo,
        fields: [
          { key: 'no', label: 'No' },
          { key: 'posting_date', label: 'Posting Date' },
          { key: 'name', label: 'Source Type' },
          { key: 'document_no', label: 'Document No' },
          { key: 'document_type', label: 'Document Type' },
          { key: 'transaction_source', label: 'Transaction Source' },
          { key: 'document_date', label: 'Document Date' },
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
    