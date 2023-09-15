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
  <Table :fields="fields" :tableData="data" :showSearchPagination="true" add-title="Add" add="Add Item"
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
        no: 'Code',
        name: 'Company Name',
        currency_code: 'Currency Code',
        consolidate: 'Consolidate',
        consolidation: 'Consolidation %',
        starting_date: 'Starting Date',
        end_date: 'Ending Date',
        last_run: 'Last Run',
      },

    ]);

    return {
      data,
      isFormVisible,
      myInfo,
      fields: [
        { key: 'no', label: 'Code' },
        { key: 'name', label: 'Company Name' },
        { key: 'currency_code', label: 'Currency Code' },
        { key: 'consolidate', label: 'Consolidate' },
        { key: 'consolidation', label: 'Consolidation %' },
        { key: 'starting_date', label: 'Starting Date' },
        { key: 'end_date', label: 'Ending Date' },
        { key: 'last_run', label: 'Last Run' },
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
    