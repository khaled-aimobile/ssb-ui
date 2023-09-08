<template>
    <table id="tableComponent" class="table table-light table-hover mb-0">
      <thead>
        <tr>
          <!-- loop through each value of the fields to get the table header -->
          <th v-for="field in fields" :key="field" @click="sortTable(field)">
            {{ field }}
            <i
              v-if="sort.field === field && sort.direction === 'asc'"
              class="dripicons-arrow-thin-up"
              aria-label="Sort Icon"
            ></i>
            <i
              v-else-if="sort.field === field && sort.direction === 'desc'"
              class="dripicons-arrow-thin-down"
              aria-label="Sort Icon"
            ></i>
          </th>
        </tr>
      </thead>
      <tbody v-if="updatedList.length > 0">
        <!-- Loop through the list to get each student's data -->
  
        <tr v-for="item in updatedList" :key="item.id">
          <td v-for="field in fields" :key="field">{{ item[field] }}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr class="no-data">
            <td colspan>No data available</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { sortBy } from 'lodash'; // Import sortBy from lodash
  
  export default {
    name: 'TableComponent',
    props: {
      studentData: {
        type: Array,
      },
      fields: {
        type: Array,
      },
    },
    setup(props) {
      const sort = ref({
        field: null, // Currently sorted column
        direction: 'asc', // Sorting direction (asc or desc)
      });
      const updatedList = ref([]);
  
      const sortTable = (col) => {
        if (sort.value.field === col) {
          // If already sorting by the same column, toggle direction
          sort.value.direction = sort.value.direction === 'asc' ? 'desc' : 'asc';
          updatedList.value.reverse(); // Reverse the list
        } else {
          // If sorting by a new column, set the column and default to ascending
          sort.value.field = col;
          sort.value.direction = 'asc';
  
          // Use lodash to sort the list based on the selected column and direction
          updatedList.value = sortBy(props.studentData, [col], [sort.value.direction]);
        }
      };
  
      onMounted(() => {
        updatedList.value = [...props.studentData];
      });
  
      return {
        sort,
        updatedList,
        sortTable,
      };
    },
  };
  </script>
  