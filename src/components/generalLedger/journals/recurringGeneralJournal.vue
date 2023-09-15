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
        recurring_method: 'Recurring Method',
        posting_date: 'Recurring Frequency Posting Date',
        doc_type: 'Document type',
        no: 'Document NO.',
        name: 'Account No Gen Posting Type',
        bus_post_grp: 'Gen. Bus Posting Group.',
        gen_post_grp: 'Gen Prod. Posting Group',
        amount: 'Amount Amount(S)',
        debit_amt: 'Debit Amount',
        credit_amt: 'Credit Amount Allocated Amount',
        expir_date: 'Expiration Date',
        divison_code: 'Division/Estate Code',
        business_code: 'Business Group Code',
        planting_code: 'Year of Planting code',
        cycle_flow_code: 'Cycle/Spacing code Store Code/Cash Flow Code',
        cash_flow_code: 'Store Code/Cash Flow Code',
      },

    ]);

    return {
      data,
      isFormVisible,
      myInfo,
      fields: [
        { key: 'recurring_method', label: 'Recurring Method' },
        { key: 'posting_date', label: 'Recurring Frequency Posting Date' },
        { key: 'doc_type', label: 'Document type' },
        { key: 'no', label: 'Document NO.' },
        { key: 'name', label: 'Account No Gen Posting Type' },
        { key: 'bus_post_grp', label: 'Gen. Bus Posting Group.' },
        { key: 'gen_post_grp', label: 'Gen Prod. Posting Group' },
        { key: 'amount', label: 'Amount Amount(S)' },
        { key: 'debit_amt', label: 'Debit Amount' },
        { key: 'credit_amt', label: 'Credit Amount Allocated Amount' },
        { key: 'expir_date', label: 'Expiration Date' },
        { key: 'divison_code', label: 'Division/Estate Code' },
        { key: 'business_code', label: 'Business Group Code' },
        { key: 'planting_code', label: 'Year of Planting code' },
        { key: 'cycle_flow_code', label: 'Cycle/Spacing code Store Code/Cash Flow Code' },
        { key: 'cash_flow_code', label: 'Store Code/Cash Flow Code' },
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
    