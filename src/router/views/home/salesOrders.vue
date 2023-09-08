<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import tableVue from '../../../components/chartOfAccounts/tableVue.vue';

export default {
    setup() {

        return {
            
        };
    },
    page: {
        title: "Sales of Orders",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    components: {
        Layout,
        tableVue,
    },
    data() {
        return {
            title: "Sales of Orders",
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
        <div class="page-filters">

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <a class="navbar-brand" href="#">{{ title }}</a>
            </nav>
        </div>
        <div class="custom-layout">
            <div class="table-content">
                <div class="card">
                    <div class="card-body">
                        <tableVue />
                    </div>
                </div>
            </div>
            
        </div>
</Layout></template>