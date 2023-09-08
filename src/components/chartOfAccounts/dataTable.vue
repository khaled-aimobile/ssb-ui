<template>
    <div class="table-responsive mb-0">
      <table class="table table-light mb-0 table-hover table-green">
        <thead>
          <tr>
            <th scope="col" @click="sortBy('no')">No</th>
            <th scope="col" @click="sortBy('no2')">No. 2</th>
            <th scope="col" @click="sortBy('name')">Name</th>
            <th scope="col" @click="sortBy('netchange')">Net Change</th>
            <th scope="col" @click="sortBy('balance')">Balance</th>
            <th scope="col" @click="sortBy('directchange')">Allow Direct Change</th>
            <th scope="col" @click="sortBy('incomebalance')">Income Balance</th>
            <th scope="col" @click="sortBy('subcategory')">Account Subcategory</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in sortedUsers" :key="index">
            <td scope="row" class="text-theme semi-bold">{{ user.no }}</td>
            <td scope="row" class="text-theme semi-bold">{{ user.no2 || '-' }}</td>
            <td>{{ user.name || '-'}}</td>
            <td class="text-theme semi-bold">{{ user.netchange || '-' }}</td>
            <td class="text-theme semi-bold">{{ user.balance || '-'}}</td>
            <td>
            <input type="checkbox" v-model="user.directchange" :disabled="true">
          </td>
            <td>{{ user.incomebalance || '-'}}</td>
            <td>{{ user.subcategory || '-'}}</td>
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
          { no: "1", no2: "", name: 'Mark', netchange: '17,895', balance: '17,895', incomebalance: 'Balance Sheet', directchange: true},
          { no: "2", no2: "", name: 'Jacob', netchange: '7,895', balance: '19,895', incomebalance: 'Balance Sheet', directchange: false},
          { no: "3", no2: "", name: 'Larry', netchange: '19,895', balance: '20,895', incomebalance: 'Balance Sheet', directchange: false},
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
  