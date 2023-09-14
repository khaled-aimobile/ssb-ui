<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import GlRegister from '../../../../components/generalLedger/register/glRegister.vue';

export default {
    setup() {
        return {
            
        };
    },
    page: {
        title: "G/L Register",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    components: {
        Layout,
        GlRegister
    },
    data() {
        return {
            title: "G/L Register",
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
                        <gl-register/>
                    </div>
                </div>
        </div>
</Layout></template>