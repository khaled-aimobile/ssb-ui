<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";
import Multiselect from '@vueform/multiselect'

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
    components: {
        Layout,
        PageHeader,
        Multiselect,
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
                                <h4>Add Menu</h4>
                                <form>
                                    <div class="add-menu">
                                        <b-form-input placeholder="Menu Name" class="mb-2"></b-form-input>
                                        <input v-if="toggleUpload" type="file" class="form-control mb-2" >
                                        <b-form-input v-else placeholder="Icon Name" class="mb-2"></b-form-input>
                                    </div>
                                    <div class="checkbox-toggle">
                                        <input type="checkbox" v-model="toggleUpload" id="toggleCheckbox">
                                        <label for="toggleCheckbox">
                                            {{ toggleUpload ? 'Upload Image' : 'Enter Icon Name' }}
                                        </label>
                                    </div>
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
                                <h4>Manage Menu</h4>
                                <form>
                                    <div class="add-menu">
                                        <b-form-input placeholder="Sub Menu Name" class="mb-2"></b-form-input>
                                        <Multiselect class="multi-table mb-2" placeholder="Parent Menu" track-by="name"
                                            label="name" :close-on-select="false" :searchable="true" :options="[
                                                { value: 'Admin', name: 'Admin' },
                                            ]">
                                            <template v-slot:option="{ option }">
                                                <div>{{ option.name }}</div>
                                            </template>
                                        </Multiselect>
                                    </div>
                                    <b-button variant="success">Add</b-button>
                                </form>

                                <form class="mt-4">
                                    <div class="add-menu">
                                        <Multiselect class="multi-table mb-2" placeholder="Sub Menu" track-by="name"
                                            label="name" :close-on-select="false" :searchable="true" :options="[
                                                { value: 'SubAdmin', name: 'Sub Admin' },
                                            ]">
                                            <template v-slot:option="{ option }">
                                                <div>{{ option.name }}</div>
                                            </template>
                                        </Multiselect>
                                        <Multiselect class="multi-table mb-2" placeholder="Parent Menu" track-by="name"
                                            label="name" :close-on-select="false" :searchable="true" :options="[
                                                { value: 'Admin', name: 'Admin' },
                                            ]">
                                            <template v-slot:option="{ option }">
                                                <div>{{ option.name }}</div>
                                            </template>
                                        </Multiselect>
                                    </div>
                                    <b-button variant="success">Save</b-button>
                                </form>
                            </b-card>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </div>
    </Layout>
</template>
