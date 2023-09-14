<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import IntercompanyGeneralJournal from '../../../../components/generalLedger/interCompany/intercompanyGeneralJournal.vue';
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
        IntercompanyGeneralJournal
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
        <div class="page-filters page-heading">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <a class="navbar-brand" href="#">{{ title }}</a>
            </nav>
        </div>
        <div class="custom-layout">
            <div class="card mb-0 h-100">
                    <div class="card-body">
                        <intercompany-general-journal />
                    </div>
                </div>
        </div>
</Layout></template>