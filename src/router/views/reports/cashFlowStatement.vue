<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import Multiselect from '@vueform/multiselect'
import VueDatePicker from '@vuepic/vue-datepicker';
import Vue3Html2pdf from "vue3-html2pdf";
import CashFlowStatement from '../../../components/report/view/cashFlowStatement.vue'

export default {
    setup() {

        return {

        };
    },
    page: {
        title: "Cash Flow Statement",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    components: {
        Layout,
        Multiselect,
        VueDatePicker,
        Vue3Html2pdf,
        CashFlowStatement
    },
    data() {
        return {
            date: null,
            title: "Cash Flow Statement",
            value: null,
            options: [
                'Batman',
                'Robin',
                'Joker',
            ]
        };
    },
    methods: {
        onProgress(event) {
            console.log(`Processed: ${event} / 100`);
        },
        hasGenerated() {
            alert("PDF generated successfully!");
        },
        generatePDF() {
            this.$refs.html2Pdf.generatePdf();
        },
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
            <!-- <h5>Print Settings</h5>
            <b-row class="mb-3">
                <b-col sm="3">
                    Selected Printer:
                    <Multiselect class="multi-table" v-model="value" track-by="name" label="name" :close-on-select="false"
                        :searchable="true" :options="[
                            { value: '12', name: 'Printer 1' },
                            { value: '13', name: 'Printer 2' },
                            { value: '13', name: 'Printer 3' },
                            { value: '14', name: 'Printer 4' }
                        ]">
                        <template v-slot:option="{ option }">
                            <div class="multiselect-tag is-user" :class="{
                                'is-disabled': disabled
                            }">
                                <table>
                                    <tr>
                                        <td>{{ option.name }}</td>
                                    </tr>
                                </table>
                            </div>
                        </template>
                    </Multiselect>
                </b-col>
            </b-row>
            <h5>Saved Settings</h5>
            <p class="mb-0">Change to the options and filters below will be saved only to: 'Last used options and filters'</p>
            <b-row class="mb-3">
                <b-col sm="3">
                    Use default values from:
                    <Multiselect class="multi-table" v-model="value" track-by="name" label="name" :close-on-select="false"
                        :searchable="true" :options="[
                            { value: '12', name: 'Purchasing & Supply' },
                            { value: '13', name: 'Corporate Comunications' },
                            { value: '13', name: 'Finance & Accounts Departnment' },
                            { value: '14', name: 'Management Office' }
                        ]">
                        <template v-slot:option="{ option }">
                            <div class="multiselect-tag is-user" :class="{
                                'is-disabled': disabled
                            }">
                                <table>
                                    <tr>
                                        <td>{{ option.name }}</td>
                                    </tr>
                                </table>
                            </div>
                        </template>
                    </Multiselect>
                </b-col>
            </b-row> -->
            <h5>Options</h5>
            <b-row class="mb-2">
                <b-col sm="3">
                    Starting Date
                    <VueDatePicker v-model="date"></VueDatePicker>
                </b-col>
                <b-col sm="3">
                    Ending Date
                    <VueDatePicker v-model="date"></VueDatePicker>
                </b-col>
                <b-col sm="3">
                    G/L Budget
                    <Multiselect class="multi-table" v-model="value" track-by="name" label="name" :close-on-select="false"
                        :searchable="true" :options="[
                            { value: '2010', name: 'Budget 2010' },
                            { value: '2011', name: 'Budget 2011' },
                            { value: '2012', name: 'Budget 2012' },
                            { value: '2013', name: 'Budget 2013' }
                        ]">
                        <template v-slot:option="{ option }">
                            <div class="multiselect-tag is-user" :class="{
                                'is-disabled': disabled
                            }">
                                <table>
                                    <tr>
                                        <td>{{ option.value }}</td>
                                        <td>{{ option.name }}</td>
                                    </tr>
                                </table>
                            </div>
                        </template>
                    </Multiselect>
                </b-col>
            </b-row>
            <div class="mt-3">
                <b-button variant="success" class="me-2">Send to..</b-button>
                <b-button variant="success" class="me-2" @click="generatePDF()">Preview</b-button>
                <b-button variant="success" class="me-2">Print</b-button>
                <!-- <b-button variant="secondary">Cancel</b-button> -->
            </div>
        </div>
        <div class="report-view">
            <cash-flow-statement />
            <vue3-html2pdf :show-layout="false" :float-layout="true" :enable-download="true" :preview-modal="true"
                :paginate-elements-by-height="1400" filename="nightprogrammerpdf" :pdf-quality="2"
                :manual-pagination="false" pdf-format="a4" :pdf-margin="10" pdf-orientation="portrait"
                pdf-content-width="800px" @progress="onProgress($event)" ref="html2Pdf">
                <template v-slot:pdf-content>
                    <cash-flow-statement />
                </template> 
            </vue3-html2pdf>
        </div>
    </Layout>
</template>