<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import Multiselect from '@vueform/multiselect'
import VueDatePicker from '@vuepic/vue-datepicker';

export default {
    setup() {

        return {

        };
    },
    page: {
        title: "Budget",
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
        VueDatePicker
    },
    data() {
        return {
            date: null,
            title: "Budget",
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
            <h5>Print Settings</h5>
            <b-row class="mb-3">
                <b-col sm="3">
                    Selected Printer:
                    <Multiselect class="multi-table" v-model="value"  track-by="name" label="name"
                        :close-on-select="false" :searchable="true" :options="[
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
                    <Multiselect class="multi-table" v-model="value"  track-by="name" label="name"
                        :close-on-select="false" :searchable="true" :options="[
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
            </b-row>
            <h5>Options</h5>
            <b-row class="mb-2">
                <b-col sm="3">
                   Starting Date
                   <VueDatePicker v-model="date"></VueDatePicker>
                </b-col>
                <b-col sm="3">
                   Period Length
                   <Multiselect class="multi-table mb-3" v-model="value"  track-by="name" label="name"
                        :close-on-select="false" :searchable="true" :options="[
                            { value: '100', name: 'Year' },
                            { value: '101', name: 'Month' },
                            { value: '102', name: 'Week' },
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
                   Amounts in whole 1000s
                   <b-form-checkbox v-model="checked" size="lg" class="report-switch" name="check-button" switch>
      
    </b-form-checkbox>
                </b-col>
            </b-row>
            <h5>Filter G/L Account</h5>
            <b-row class="mb-2">
                <b-col sm="3">
                   No.
                   <Multiselect class="multi-table mb-3" v-model="value"  track-by="name" label="name"
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
                   Account Type
                   <Multiselect class="multi-table mb-3" v-model="value"  track-by="name" label="name"
                        :close-on-select="false" :searchable="true" :options="[
                            { value: '101', name: 'Vendor' },
                            { value: '102', name: 'Customer' },
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
            <h5>Filter totals by</h5>
            <b-row>
                <b-col sm="3">
                   Budget Filter
                   <Multiselect class="multi-table" v-model="value"  track-by="name" label="name"
                        :close-on-select="false" :searchable="true" :options="[
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
                <b-col sm="3">
                   Division/Estate Filter
                   <Multiselect class="multi-table" v-model="value"  track-by="name" label="name"
                        :close-on-select="false" :searchable="true" :options="[
                            { value: '12', name: 'Purchasing & Supply' },
                            { value: '13', name: 'Corporate Comunications' },
                            { value: '14', name: 'Finance & Accounts Departnment' },
                            { value: '15', name: 'Management Office' }
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
                <b-col sm="3">
                   Business Filter
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
                <b-button variant="success" class="me-2">Preview</b-button>
                <b-button variant="success" class="me-2">Print</b-button>
                <!-- <b-button variant="secondary">Cancel</b-button> -->
            </div>
        </div>
    </Layout>
</template>