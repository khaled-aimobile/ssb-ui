<template>
    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
  
      <p class="mt-3">Current Page: {{ currentPage }}</p>
  
      <b-table
        id="my-table"
        :items="displayedItems"
        :per-page="perPage"
        :current-page="currentPage"
        small
      ></b-table>
    </div>
  </template>
  
  <script>
  import { BTable, BPagination } from 'bootstrap-vue-next'; // Import BootstrapVue components
  import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS (if not already imported)
  
  export default {
    components: {
      BTable,
      BPagination,
    },
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' },
        ],
      };
    },
    computed: {
      rows() {
        return this.items.length;
      },
      displayedItems() {
        // Calculate the items to display on the current page
        const startIndex = (this.currentPage - 1) * this.perPage;
        const endIndex = startIndex + this.perPage;
        return this.items.slice(startIndex, endIndex);
      },
    },
  };
  </script>
  