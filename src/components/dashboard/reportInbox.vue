<template>
    <div class="table-responsive">
      <table class="table table-light mb-0 table-hover">
        <thead>
          <tr>
            <th scope="col" @click="sortBy('date')">Created Date-Time</th>
            <th scope="col" @click="sortBy('description')">Description</th>
            <th scope="col" @click="sortBy('output')">Output Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in sortedUsers" :key="index">
            <th scope="row">{{ user.date }}</th>
            <td>{{ user.description }}</td>
            <td>{{ user.output }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        users: [
          { date: "1", output: 'Mark', description: '+911234567895'},
          { date: "2", output: 'Jacob', description: '+911234567895'},
          { date: "3", output: 'Larry', description: '+911234567895'},
        ],
        sortKey: '', 
        sortAsc: true, 
      };
    },
    computed: {
      sortedUsers() {
        const usersCopy = [...this.users];
        if (this.sortKey) {
          usersCopy.sort((a, b) => {
            const modifier = this.sortAsc ? 1 : -1;
            const aValue = a[this.sortKey];
            const bValue = b[this.sortKey];
            return aValue.localeCompare(bValue) * modifier;
          });
        }
  
        return usersCopy;
      },
    },
    methods: {
      sortBy(key) {
        if (this.sortKey === key) {
          this.sortAsc = !this.sortAsc;
        } else {
          this.sortKey = key;
          this.sortAsc = true;
        }
      },
    },
  };
  </script>
  