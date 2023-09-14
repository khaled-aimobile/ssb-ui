<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import GlBudget from '../../../components/generalLedger/glBudget.vue';
//import table1Vue from '../../../components/common/Table1.vue';

export default {
    setup() {

        return {
            
        };
    },
    page: {
        title: "Gl Budget",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    components: {
        Layout,
        GlBudget
    },
    data() {
        return {
            title: "Gl Budget",
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
                        <gl-budget />
                    </div>
                </div>
        </div>
</Layout></template>