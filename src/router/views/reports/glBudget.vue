<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import Multiselect from '@vueform/multiselect'

export default {
    setup() {

        return {

        };
    },
    page: {
        title: "G/L Budget",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    components: {
        Layout,
        Multiselect
    },
    data() {
        return {
            title: "G/L Budget",
            value: null,
            options: [
                'Batman',
                'Robin',
                'Joker',
            ]
        };
    },
    methods: {

    }
};
</script>

<template>
    <Layout>
        <div class="page-filters page-heading">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <a class="navbar-brand" href="#">{{ title }}</a>
            </nav>
        </div>
        <div class="filters">
            <h5>Filter G/L Account</h5>
            <b-row>
                <b-col sm="3">
                    No.
                    <Multiselect class="mb-3" v-model="value" :options="options" />
                </b-col>
                <b-col sm="3">
                    Search Name
                    <Multiselect class="mb-3" v-model="value" :options="options" />
                </b-col>
                <b-col sm="3">
                    Income Balance
                    <Multiselect class="mb-3" v-model="value" :options="options" />
                </b-col>
                <b-col sm="3">
                    Debit/Credit
                    <Multiselect v-model="value" mode="tags" placeholder="Select employees" track-by="name" label="name"
                        :close-on-select="false" :searchable="true" :options="[
                            { value: 'judy', name: 'Judy' },
                            { value: 'jane', name: 'Jane' },
                            { value: 'john', name: 'John' },
                            { value: 'joe', name: 'Joe' }
                        ]">
                        <template v-slot:tag="{ option, handleTagRemove, disabled }">
                            <div class="multiselect-tag is-user" :class="{
                                'is-disabled': disabled
                            }">
                                <img :src="option.image">
                                {{ option.name }}
                                <span v-if="!disabled" class="multiselect-tag-remove"
                                    @click="handleTagRemove(option, $event)">
                                    <span class="multiselect-tag-remove-icon"></span>
                                </span>
                            </div>
                        </template>
                    </Multiselect>
                </b-col>
            </b-row>
            <b-row>
                <b-col sm="3">
                    <h5>Filter Purchase Invoice</h5>
                    No.
                    <Multiselect class="mb-3" v-model="value" :options="options" />
                </b-col>
                <b-col sm="3">
                    <h5>Filter totals by</h5>
                    Date Filter
                    <Multiselect class="mb-3" v-model="value" :options="options" />
                </b-col>
            </b-row>
            <div>
                <b-button variant="success" class="me-2">Send to..</b-button>
                <b-button variant="success" class="me-2">Preview</b-button>
                <b-button variant="success" class="me-2">Print</b-button>
            </div>
        </div>
    </Layout>
</template>