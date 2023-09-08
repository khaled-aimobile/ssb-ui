<template>
    <div class="table-responsive">
      <table class="table table-light mb-0 table-hover">
        <thead>
          <tr>
            <th scope="col" @click="sortBy('id')">Customer No</th>
            <th scope="col" @click="sortBy('name')">Name</th>
            <th scope="col" @click="sortBy('number')">Phone No</th>
            <th scope="col" @click="sortBy('balance')">Balance ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in sortedUsers" :key="index">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.number }}</td>
            <td>{{ user.balance }}</td>
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
          { id: "1", name: 'Mark', number: '+911234567895', balance: '456'},
          { id: "2", name: 'Jacob', number: '+911234567895', balance: '456'},
          { id: "3", name: 'Larry', number: '+911234567895', balance: '456'},
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
  