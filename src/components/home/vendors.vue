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
import Image from '../../assets/images/users/avatar-1.jpg'
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
      { id: 1, no: "IPH00001", contact: "", date: "", img: Image, address: 'PERTUBUHAN KESELAMATAN SOSIAL', description: '17,895',referance: "", status: "", actions: "" },
      { id: 2, no: "IPH00002", contact: "", date: "", img: Image, address: '', description: '7,895', referance: "0.00", status: "", actions: "", },
      { id: 3, no: "IPH00003", contact: "", date: "", img: Image, address: '', description: '19,895', referance: "0.00", status: "", actions: "", },
      { id: 4, no: "IPH00004", contact: "", date: "", img: Image, address: 'CHECKROLL - TIMBER OPERATION	', description: '17,895', referance: "", status: "", actions: "", },
      { id: 5, no: "IPH00005", contact: "", date: "", img: Image, address: 'CHECKROLL - AGRICROPS', description: '7,895', referance: "", status: "", actions: "",  }
    ]);
    const showColumns = ref({});


    const fields = [
      //{ key: 'no', label: 'No', visible: true },
      { key: 'name', label: 'Name', visible: false },
      { key: 'contact', label: 'Contact', visible: false },
      { key: 'address', label: 'Address', visible: true },
      { key: 'description', label: 'Description', visible: true },
      { key: 'referance', label: 'Referance', visible: true },
      { key: 'date', label: 'Date', visible: false },
      { key: 'img', label: 'Image', visible: false },
      { key: 'status', label: 'Status', visible: false },
      { key: 'actions', label: 'Actions', visible: true },
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
