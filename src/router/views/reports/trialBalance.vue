<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import Multiselect from '@vueform/multiselect'
import VueDatePicker from '@vuepic/vue-datepicker';
import Vue3Html2pdf from "vue3-html2pdf";
import TrialBalance from '../../../components/report/view/trialBalance.vue'

export default {
    setup() {

        return {

        };
    },
    page: {
        title: "Trail balance",
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
        TrialBalance
    },
    data() {
        return {
            date: null,
            title: "Trail balance",
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
            <h5>Filter G/L Account</h5>
            <b-row>
                <b-col sm="3">
                   No.
                   <Multiselect class="multi-table" v-model="value"  track-by="name" label="name"
                        :close-on-select="false" :searchable="true" :options="[
                            { value: '101', name: '1' },
                            { value: '102', name: '2' },
                            { value: '103', name: '3' },
                            { value: '104', name: '4' }
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
                <b-col sm="3">
                    Search Name
                    <Multiselect class="multi-table" v-model="value"  track-by="name" label="name"
                        :close-on-select="false" :searchable="true" :options="[
                            { value: '101', name: 'Albizia (AF)' },
                            { value: '102', name: 'Eyucaliptus (EP)' },
                            { value: '103', name: 'Gmelina (GA)' },
                            { value: '104', name: 'Acacia (AM)' }
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
                <b-col sm="3">
                    Income Balance
                    <Multiselect class="multi-table" v-model="value"  track-by="name" label="name"
                        :close-on-select="false" :searchable="true" :options="[
                            { value: '101', name: '1001 $' },
                            { value: '102', name: '1001 $' },
                            { value: '103', name: '1001 $' },
                            { value: '104', name: '1001 $' }
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
                <b-col sm="3">
                    Debit/Credit 
                    <Multiselect class="multi-table" v-model="value"  track-by="name" label="name"
                        :close-on-select="false" :searchable="true" :options="[
                            { value: '101', name: 'Debit Master' },
                            { value: '102', name: 'Debit Visa' },
                            { value: '103', name: 'Credit Master' },
                            { value: '104', name: 'Credit Visa' }
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
            <b-row>
                <b-col sm="3">
                    <h5>Filter Purchase Invoice</h5>
                    No.
                    <Multiselect class="multi-table" v-model="value"  track-by="name" label="name"
                        :close-on-select="false" :searchable="true" :options="[
                            { value: '101', name: '1' },
                            { value: '102', name: '2' },
                            { value: '103', name: '3' },
                            { value: '104', name: '4' }
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
                <b-col sm="3">
                    <h5>Filter totals by</h5>
                   Date Filter
                   <VueDatePicker v-model="date"></VueDatePicker>
                </b-col>
            </b-row>
            <div class="mt-3">
                <b-button variant="success" class="me-2">Send to..</b-button>
                <b-button variant="success" class="me-2" @click="generatePDF()">Preview</b-button>
                <b-button variant="success" class="me-2">Print</b-button>
            </div>
        </div>
        <div class="report-view">
            <trial-balance />
            <vue3-html2pdf :show-layout="false" :float-layout="true" :enable-download="true" :preview-modal="true"
                :paginate-elements-by-height="1400" filename="nightprogrammerpdf" :pdf-quality="2"
                :manual-pagination="false" pdf-format="a4" :pdf-margin="10" pdf-orientation="portrait"
                pdf-content-width="100%" @progress="onProgress($event)" ref="html2Pdf">
                <template v-slot:pdf-content>
                    <trial-balance />
                </template>
            </vue3-html2pdf>
        </div>
    </Layout> 
</template>