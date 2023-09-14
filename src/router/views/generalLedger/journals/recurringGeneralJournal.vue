<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import RecurringGeneralJournal from '../../../../components/generalLedger/journals/recurringGeneralJournal.vue';

export default {
    setup() {
        return {
            
        };
    },
    page: {
        title: "Recurring General Journal",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    components: {
        Layout,
        RecurringGeneralJournal
    },
    data() {
        return {
            title: "Recurring General Journal",
            value: null,
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
                        <recurring-general-journal/>
                    </div>
                </div>
        </div>
</Layout></template>