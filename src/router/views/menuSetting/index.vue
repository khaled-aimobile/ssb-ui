<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";
import Multiselect from '@vueform/multiselect'
import Table from "../../../components/common/Table.vue";
import { ref } from 'vue';

export default {
    page: {
        title: "Users",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    setup() {
    const isFormVisible = ref(false);
    const myInfo = ref(false);
    const data = ref([
      {
        id: 1,
        name: 'Parent',
        no: '1',
        position: "Search",
        actions: '',
      },
      {
        id: 2,
        name: 'Sub',
        no: '5',
        position: "Top",
        actions: '',
      },

    ]);

    return {
      data,
      isFormVisible,
      myInfo,
      fields: [
          { key: 'no', label: 'Order' },
          { key: 'position', label: 'Position' },
        { key: 'name', label: 'Name' },
        { key: 'actions', label: 'Actions' },
      ],
    };
  },
    components: {
        Layout,
        PageHeader,
        Multiselect,
        Table
    },
    data() {
        return {
            date: null,
            title: "Menu Setting",
            toggleUpload: true,
        };
    },
    methods: {
        handleImageUpload() {
            this.toggleUpload = false;
        },
    }
};
</script>

<template>
    <Layout class="dashboard-main">
        <div class="landing-main">
            <div class="landing-content">
                <div class="custom-container">
                    <PageHeader :title="title" :items="items" />
                    <b-row>
                        <b-col>
                            <b-card>
                                <h4>Parent Menu</h4>
                                <form>
                                    <div class="add-menu">
                                        <input v-if="toggleUpload" type="file" class="form-control mb-2">
                                        <b-form-input v-else placeholder="Icon Name" class="mb-2"></b-form-input>
                                        <div class="checkbox-toggle">
                                            <input type="checkbox" v-model="toggleUpload" id="toggleCheckbox">
                                            <label for="toggleCheckbox">
                                                {{ toggleUpload ? 'Upload Image' : 'Enter Icon Name' }}
                                            </label>
                                        </div>
                                    </div>
                                    <b-form-input placeholder="Menu Name" class="mb-2"></b-form-input>
                                    <div class="">
                                        <Multiselect class="multi-table mb-3" placeholder="Menu Position" track-by="name"
                                            label="name" :close-on-select="false" :searchable="true" :options="[
                                                { value: 'TopMenu', name: 'Top Menu' },
                                                { value: 'MainMenu', name: 'Main Menu' },
                                                { value: 'SearchMenu', name: 'Search Menu' },
                                                { value: 'UserMenu', name: 'User Menu' }
                                            ]">
                                            <template v-slot:option="{ option }">
                                                <div>{{ option.name }}</div>
                                            </template>
                                        </Multiselect>
                                    </div>
                                    <b-button variant="success">Add</b-button>
                                </form>
                            </b-card>
                        </b-col>
                        <b-col>
                            <b-card>
                                <h4>Sub Menu</h4>
                                <form>
                                    <div class="add-menu">
                                        <Multiselect class="multi-table mb-2" placeholder="Parent Menu" track-by="name"
                                            label="name" :close-on-select="false" :searchable="true" :options="[
                                                { value: 'Admin', name: 'Admin' },
                                            ]">
                                            <template v-slot:option="{ option }">
                                                <div>{{ option.name }}</div>
                                            </template>
                                        </Multiselect>
                                        <Multiselect class="multi-table mb-2 max-100" placeholder="Order" track-by="name"
                                            label="name" :close-on-select="false" :searchable="true" :options="[
                                                { value: '1', name: '1' },
                                                { value: '2', name: '2' },
                                                { value: '3', name: '3' },
                                                { value: '4', name: '4' },
                                                { value: '5', name: '5' },
                                                { value: '6', name: '6' },
                                                { value: '7', name: '7' },
                                                { value: '8', name: '8' },
                                            ]">
                                            <template v-slot:option="{ option }">
                                                <div>{{ option.name }}</div>
                                            </template>
                                        </Multiselect>
                                        <b-form-input placeholder="Sub Menu Name" class="mb-2"></b-form-input>
                                        <b-button variant="success" class="mb-2">Add</b-button>
                                    </div>
                                </form>
                            </b-card>
                        </b-col>
                    </b-row>
                    <b-card class="menu-table">
                        <Table :fields="fields" :tableData="data" :showSearchPagination="true" add-title="Add" add="Add Item"
    edit-title="Edit Menu" @delete-item="deleteItem" />
                    </b-card>
                </div>
            </div>
        </div>
    </Layout>
</template>
