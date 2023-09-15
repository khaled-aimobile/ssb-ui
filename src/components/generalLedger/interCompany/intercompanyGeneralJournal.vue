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
        no: 'No',
        posting_date: 'Posting Date',
        name: 'Document Type',
        document_no: 'Document No',
        account_type: 'Account Type',
        account_no: 'Account No',
        desrciption: 'Description',
        gen_posting_type: 'Gen. Posting Type',
        gen_bus_type: 'Gen. Bus. Type',
        gen_prod_grp: 'Gen. Prod Posting Group',
        amount: 'Amount',
        bal_account_type: 'Bal. Accounts Type',
        bal_account_no: 'Bal. Accounts No',
        bal_gen_post_type: 'Bal. Gen. Posting Type',
        bal_bus_post_group: 'Bal. Gen. Bus Posting Group',
        bal_prod_post_group: 'Bal. Gen. Prod Posting Group',
        ic_partner: 'IC Partner G/L Acc No.',
        division_code: 'Division East Code',
        business_grp_code: 'Business Group Code',
        planting_code: 'Year Of Planting Code',
        cycle_spacing_code: 'Cycle/Spacing Code',
        store_code: 'Store Code',
        cash_flow_code: 'Cash Flow Code',
        //actions: '',
      },

    ]);

    return {
      data,
      isFormVisible,
      myInfo,
      fields: [
        { key: 'no', label: 'No' },
        { key: 'posting_date', label: 'Posting Date' },
        { key: 'name', label: 'Document Type' },
        { key: 'document_no', label: 'Document No' },
        { key: 'account_type', label: 'Account Type' },
        { key: 'account_no', label: 'Account No' },
        { key: 'desrciption', label: 'Description' },
        { key: 'gen_posting_type', label: 'Gen. Posting Type' },
        { key: 'gen_bus_type', label: 'Gen. Bus. Type' },
        { key: 'gen_prod_grp', label: 'Gen. Prod Posting Group' },
        { key: 'amount', label: 'Amount' },
        { key: 'bal_account_type', label: 'Bal. Accounts Type' },
        { key: 'bal_account_no', label: 'Bal. Accounts No' },
        { key: 'bal_gen_post_type', label: 'Bal. Gen. Posting Type' },
        { key: 'bal_bus_post_group', label: 'Bal. Gen. Bus Posting Group' },
        { key: 'bal_prod_post_group', label: 'Bal. Gen. Prod Posting Group' },
        { key: 'ic_partner', label: 'IC Partner G/L Acc No.' },
        { key: 'division_code', label: 'Division East Code' },
        { key: 'business_grp_code', label: 'Business Group Code' },
        { key: 'planting_code', label: 'Year Of Planting Code' },
        { key: 'cycle_spacing_code', label: 'Cycle/Spacing Code' },
        { key: 'store_code', label: 'Store Code' },
        { key: 'cash_flow_code', label: 'Cash Flow Code' },
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
  