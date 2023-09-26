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
        no: 'No',
        name: 'User Id',
        created: 'Creation Date',
        time: 'Creation Time',
        source_code: 'Source Code',
        batch_name: 'Journal Batch Name',
        from_entry: 'Form Entry No',
        to_entry: 'To Entry No',
        from_gst_entry: 'Form GST Entry No',
        to_gst_entry: 'To GST Entry No',
      },

    ]);
    const showColumns = ref({});
    const fields = [
      { key: 'no', label: 'No' },
      { key: 'name', label: 'User Id' },
      { key: 'created', label: 'Creation Date' },
      { key: 'time', label: 'Creation Time' },
      { key: 'source_code', label: 'Source Code' },
      { key: 'batch_name', label: 'Journal Batch Name' },
      { key: 'from_entry', label: 'Form Entry No' },
      { key: 'to_entry', label: 'To Entry No' },
      { key: 'from_gst_entry', label: 'Form GST Entry No' },
      { key: 'to_gst_entry', label: 'To GST Entry No' },
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
    