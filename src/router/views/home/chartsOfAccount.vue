<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import tableVue from '../../../components/chartOfAccounts/tableVue.vue';
//import table1Vue from '../../../components/common/Table1.vue';

export default {
    setup() {

        return {
            
        };
    },
    page: {
        title: "Charts Of Accounts",
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
        //table1Vue
    },
    data() {
        return {
            title: "Charts Of Accounts",
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
                        <table1Vue />
                        <tableVue />
                    </div>
                </div>
            </div>
        </div>
</Layout></template>