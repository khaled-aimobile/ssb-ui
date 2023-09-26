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
    pdf-format="a3" :pdf-margin="10" pdf-orientation="portrait" pdf-content-width="100%" @progress="onProgress($event)"
    ref="html2Pdf">
    <template v-slot:pdf-content>
      <Table :fields="visibleFields" :tableData="data" />
    </template>
  </vue3-html2pdf>
  <b-dropdown id="filter-column" variant="success" class="m-2 ms-0 filter-column" no-caret>
    <template #button-content>
      <i class="mdi mdi-filter"></i> Filter Column
    </template>
    <b-dropdown-item v-on:click.stop v-for="field in fields" :key="field.key"><b-form-checkbox
        v-model="showColumns[field.key]">
        {{ field.label }}
      </b-form-checkbox></b-dropdown-item>
  </b-dropdown>
  <Table :fields="visibleFields" :tableData="data" :showSearchPagination="true" add-title="Add" add="Add Item"
    edit-title="Edit Item" @delete-item="deleteItem" />
  <b-modal v-model="myInfo" id="modal-info" class="green-header" centered title-class="font-18" hide-footer
    title="Notes +">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
      card's content.</p>
  </b-modal>
</template>
    
<script>
import { ref, computed } from 'vue';
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
        posting_date: 'Posting Date',
        document_type: 'Document type',
        doc_account_type: 'Document NO. Account Type',
        no: 'Account NO.',
        name: 'Account Name Description',
        currency_code: 'Currency Code',
        gen_post_grp: 'EU-3 Party Trade Gen. Posting Type',
        bus_post_grp: 'Gen. Bus Posting Group.',
        includ_gst: 'Gen. Prod. Posting Group Account Including GST',
        amount: 'Amount',
        debit_amt: 'Debit Amount',
        credit_amt: 'Credit Amount',
        account_type: 'Bal. Account Type',
        account_no: 'Bal. Account No.',
        post_type: 'Bal. Gen. Posting Type',
        post_grp: 'Bal. Gen. Posting Group',
        deferral_grp: 'Bal. Gen. Prod. Posting Group Deferral Group',
        correction: 'Correction',
        comment: 'Comment',
        division_code: 'Division / Estate Code',
        planting_code: 'Business Group Code Year of Planting Code',
        cycle_code: 'Cycle/Spacing Code',
        store_code: 'Store Code',
        cash_flow_code: 'Cash Flow Code',

      },

    ]);
    const showColumns = ref({});
    const fields = [
    { key: 'posting_date', label: 'Posting Date' },
        { key: 'document_type', label: 'Document type' },
        { key: 'doc_account_type', label: 'Document NO. Account Type' },
        { key: 'no', label: 'Account NO.' },
        { key: 'name', label: 'Account Name Description' },
        { key: 'currency_code', label: 'Currency Code' },
        { key: 'gen_post_grp', label: 'EU-3 Party Trade Gen. Posting Type' },
        { key: 'bus_post_grp', label: 'Gen. Bus Posting Group.' },
        { key: 'includ_gst', label: 'Gen. Prod. Posting Group Account Including GST' },
        { key: 'amount', label: 'Amount' },
        { key: 'debit_amt', label: 'Debit Amount' },
        { key: 'credit_amt', label: 'Credit Amount' },
        { key: 'account_type', label: 'Bal. Account Type' },
        { key: 'account_no', label: 'Bal. Account No.' },
        { key: 'post_type', label: 'Bal. Gen. Posting Type' },
        { key: 'post_grp', label: 'Bal. Gen. Posting Group' },
        { key: 'deferral_grp', label: 'Bal. Gen. Prod. Posting Group Deferral Group' },
        { key: 'correction', label: 'Correction' },
        { key: 'comment', label: 'Comment' },
        { key: 'division_code', label: 'Division / Estate Code' },
        { key: 'planting_code', label: 'Business Group Code Year of Planting Code' },
        { key: 'cycle_code', label: 'Cycle/Spacing Code' },
        { key: 'store_code', label: 'Store Code' },
        { key: 'cash_flow_code', label: 'Cash Flow Code' },
    ];
    fields.forEach((field) => {
      showColumns.value[field.key] = true; // Set the initial value here based on your requirements.
    });
    const visibleFields = computed(() => {
      return fields.filter((field) => showColumns.value[field.key]);
    });
    return {
      data,
      isFormVisible,
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
    