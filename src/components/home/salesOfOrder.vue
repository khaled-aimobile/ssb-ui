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
      pdf-format="a3" :pdf-margin="10" pdf-orientation="portrait" pdf-content-width="100%" @progress="onProgress($event)"
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
      { id: 1, no: "SM10/0001", customerno: "IPLB0007", name: 'KUNAK REFINERY SDN BHD (BSSB)', externaldoc: '17,895', documentdate: "16/06/2010", assign: "", locationcode: "", status: "Open", completeshipped: "", amountshipped: "0", amountshippednot: '0.00', amount: "0.00", amountgst: "0.00" },
      { id: 2, no: "SM10/0002", customerno: "IPLB0008", name: 'KUNAK REFINERY SDN BHD (BSSB)', externaldoc: '7,895', documentdate: "16/06/2010", assign: "", locationcode: "", status: "Open", completeshipped: "", amountshipped: "0", amountshippednot: '0.00', amount: "0.00", amountgst: "0.00" },
      { id: 3, no: "SM10/0003", customerno: "IPLB0009", name: 'KUNAK REFINERY SDN BHD (BSSB)', externaldoc: '19,895', documentdate: "16/06/2010", assign: "", locationcode: "", status: "Open", completeshipped: "", amountshipped: "0", amountshippednot: '0.00', amount: "0.00", amountgst: "0.00" },
      { id: 4, no: "SM10/0004", customerno: "IPLB0010", name: 'KUNAK REFINERY SDN BHD (BSSB)', externaldoc: '17,895', documentdate: "16/06/2010", assign: "", locationcode: "", status: "Open", completeshipped: "", amountshipped: "0", amountshippednot: '0.00', amount: "0.00", amountgst: "0.00" },
      { id: 5, no: "SM10/0005", customerno: "IPLB0011", name: 'NUNAK REFINERY SDN BHD (BSSB)', externaldoc: '7,895', documentdate: "16/06/2010", assign: "", locationcode: "", status: "Open", completeshipped: "", amountshipped: "0", amountshippednot: '0.00', amount: "0.00", amountgst: "0.00" }
    ]);
    const showColumns = ref({});


const fields = [
{ key: 'no', label: 'No' },
        { key: 'customerno', label: 'Sell-to Customer No.' },
        { key: 'name', label: 'Sell-to Customer Name' },
        { key: 'externaldoc', label: 'External Document No.' },
        { key: 'locationcode', label: 'Location Code' },
        { key: 'assign', label: 'Assigned User ID' },
        { key: 'documentdate', label: 'Document Date' },
        { key: 'status', label: 'Status' },
        { key: 'completeshipped', label: 'Completely Shipped' },
        { key: 'amountshipped', label: 'Amount Shipped Not Invoiced ($)' },
        { key: 'amountshippednot', label: 'Amount Shipped Not Invoiced ($) Incl. GST' },
        { key: 'amount', label: 'Amount' },
        { key: 'amountgst', label: 'Amount Including GST' },
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
      customerno: ``,
      name: ``,
      externaldoc: ``,
      documentdate: ``,
      assign: ``,
      locationcode: ``,
      status: ``,
      completeshipped: ``,
      amountshipped: ``,
      amountshippednot: ``,
      amount: ``,
      amountgst: `$`,
    });

    const toggleForm = () => {
      isFormVisible.value = !isFormVisible.value;
      if (!isFormVisible.value) {
        formData.value = {
          no: ``,
          customerno: ``,
          name: ``,
          externaldoc: ``,
          documentdate: ``,
          assign: ``,
          locationcode: ``,
          status: ``,
          completeshipped: ``,
          amountshipped: ``,
          amountshippednot: ``,
          amount: ``,
          amountgst: `$`,
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
