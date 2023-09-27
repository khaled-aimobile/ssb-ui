<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";
import Multiselect from '@vueform/multiselect'
import VueDatePicker from '@vuepic/vue-datepicker';
import PictureInput from 'vue-picture-input'

export default {
    page: {
        title: "Add User",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    components: {
        Layout,
        PageHeader,
        Multiselect,
        VueDatePicker,
        PictureInput,
    },
    data() {
        return {
            date: null,
            title: "Add User",
            form: {
                email: '',
                name: '',
                food: null,
                checked: []
            },
            value: '',
            foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
            show: true,
            items: [
                {
                    text: "Add User",
                    to: "/",
                },
                {
                    text: "Users",
                    active: true,
                },
            ],
        };
    },
    computed: {
        countryData() {
            console.log(this.$store.getters.countryData)
            return this.$store.getters.countryData
        },
        maritalData() {
            console.log(this.$store.getters.maritalData)
            return this.$store.getters.maritalData
        },
        nationalityData() {
            console.log(this.$store.getters.nationalityData)
            return this.$store.getters.nationalityData
        },
       raceData() {
            console.log(this.$store.getters.raceData)
            return this.$store.getters.raceData
        },
        religionData() {
            console.log(this.$store.getters.religionData)
            return this.$store.getters.religionData
        },
        stateData() {
            console.log(this.$store.getters.stateData)
            return this.$store.getters.stateData
        },
    },
    mounted() {
        this.$store.dispatch('fetchCountryData');
        this.$store.dispatch('fetchMaritalData');
        this.$store.dispatch('fetchNationalityData');
        this.$store.dispatch('fetchRaceData');
        this.$store.dispatch('fetchReligionData');
        this.$store.dispatch('fetchStateData');
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.staffID = ''
            this.form.staffName = ''
            this.form.food = null
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        onChange(image) {
            console.log('New picture selected!')
            if (image) {
                console.log('Picture loaded.')
                this.image = image
            } else {
                console.log('FileReader API not supported: use the <form>, Luke!')
            }
        }
    }
};
</script>

<template>
    <Layout class="dashboard-main">
        <div class="landing-main">
            <div class="landing-content">
                <PageHeader :title="title" :items="items" />
                <div class="users-list">
                    <b-card>
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-row>
                                <b-col md="12">
                                    <h6><i class="mdi mdi-account-box"></i> PERSONAL DETAILS</h6>
                                </b-col>
                                <b-col lg="3" md="12">
                                    <picture-input ref="pictureInput" width="80" height="80" margin="16" :removable="true"
                                        accept="image/jpeg,image/png" size="10" button-class="btn" :custom-strings="{
                                            drag: 'Profile Photo',
                                            aspect: 'Portrait',
                                            change: 'Change Photo',
                                            remove: 'Remove Photo',
                                        }" @change="onChange">
                                    </picture-input>
                                </b-col>
                                <b-col lg="9" md="12">
                                    <b-row>
                                        <b-col md="4" sm="6">
                                            <b-form-group id="form-staffID" label="Staff ID:" label-for="staffID">
                                                <b-form-input id="staffID" v-model="form.staffID" placeholder="Staff ID"
                                                    required></b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4" sm="6">
                                            <b-form-group id="form-staffName" label="Staff Name:" label-for="staffName">
                                                <b-form-input id="staffName" v-model="form.staffName"
                                                    placeholder="Staff Name" required></b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4" sm="6">
                                            <b-form-group id="form-ReferenceID" label="Reference ID:"
                                                label-for="ReferenceID">
                                                <b-form-input id="ReferenceID" v-model="form.ReferenceID"
                                                    placeholder="Reference ID" required></b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4" sm="6">
                                            <b-form-group id="form-Nationality" label="Nationality:"
                                                label-for="Nationality">
                                                <Multiselect class="multi-table" placeholder="Please Select" track-by="name"
                                                    label="name" :close-on-select="false" :searchable="true"
                                                    :options="nationalityData">
                                                    <template v-slot:option="{ option }">
                                                        <div>{{ option.name }}</div>
                                                    </template>
                                                </Multiselect>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4" sm="6">
                                            <b-form-group id="form-MaritalStatus" label="Marital Status:"
                                                label-for="MaritalStatus">
                                                <Multiselect class="multi-table" placeholder="Please Select" track-by="name"
                                                    label="name" :close-on-select="false" :searchable="true"
                                                    :options="maritalData">
                                                    <template v-slot:option="{ option }">
                                                        <div>{{ option.name }}</div>
                                                    </template>
                                                </Multiselect>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4" sm="6">
                                            <b-form-group id="form-Gender" label="Gender:" label-for="Gender">
                                                <Multiselect class="multi-table" placeholder="Please Select" track-by="name"
                                                    label="name" :close-on-select="false" :searchable="true" :options="[
                                                        { value: 'Male', name: 'Male' },
                                                        { value: 'Female', name: 'Female' },
                                                    ]">
                                                    <template v-slot:option="{ option }">
                                                        <div>{{ option.name }}</div>
                                                    </template>
                                                </Multiselect>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                </b-col>


                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-PassportNo" label="Passport No:" label-for="PassportNo">
                                        <b-form-input id="PassportNo" v-model="form.PassportNo" placeholder="Passport No"
                                            required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-PermitNo" label="Permit No:" label-for="PermitNo">
                                        <b-form-input id="PermitNo" v-model="form.PassportNo" placeholder="Permit No"
                                            required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-ICNoOld" label="IC No. (Old):" label-for="ICNoOld">
                                        <b-form-input id="ICNoOld" v-model="form.ICNoOld" placeholder="IC No. (Old)"
                                            required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-PassportExpiry" label="Passport Expiry:"
                                        label-for="PassportExpiry">
                                        <VueDatePicker v-model="date"></VueDatePicker>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-PermitExpiry" label="Permit Expiry:" label-for="PermitExpiry">
                                        <VueDatePicker v-model="date"></VueDatePicker>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-example-datepicker" label="Permit Expiry:"
                                        label-for="example-datepicker">
                                        <VueDatePicker v-model="date"></VueDatePicker>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-Race" label="Race:" label-for="Race">
                                        <Multiselect class="multi-table" placeholder="Please Select" track-by="name"
                                                    label="name" :close-on-select="false" :searchable="true"
                                                    :options="raceData">
                                                    <template v-slot:option="{ option }">
                                                        <div>{{ option.name }}</div>
                                                    </template>
                                                </Multiselect>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-Religion" label="Religion:" label-for="Religion">
                                        <Multiselect class="multi-table" placeholder="Please Select" track-by="name"
                                                    label="name" :close-on-select="false" :searchable="true"
                                                    :options="religionData">
                                                    <template v-slot:option="{ option }">
                                                        <div>{{ option.name }}</div>
                                                    </template>
                                                </Multiselect>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="12">
                                    <h6><i class="mdi mdi-map-outline"></i> ADDRESS</h6>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-CurrentStreet" label="Current Street:" label-for="CurrentStreet">
                                        <b-form-input id="CurrentStreet" v-model="form.CurrentStreet"
                                            placeholder="Current Street" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-CurrentTown" label="Current Town:" label-for="CurrentTown">
                                        <b-form-input id="CurrentTown" v-model="form.CurrentTown" placeholder="Current Town"
                                            required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-CurrentPostcode" label="Current Postcode:"
                                        label-for="CurrentPostcode">
                                        <b-form-input id="CurrentPostcode" v-model="form.CurrentPostcode"
                                            placeholder="Current Postcode" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-CurrentCountry" label="Current Country:"
                                        label-for="CurrentCountry">
                                        <Multiselect class="multi-table" placeholder="Please Select" track-by="name"
                                                    label="name" :close-on-select="false" :searchable="true"
                                                    :options="countryData">
                                                    <template v-slot:option="{ option }">
                                                        <div>{{ option.name }}</div>
                                                    </template>
                                                </Multiselect>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-CurrentState" label="Current State:" label-for="CurrentState">
                                        <Multiselect class="multi-table" placeholder="Please Select" track-by="name"
                                                    label="name" :close-on-select="false" :searchable="true"
                                                    :options="stateData">
                                                    <template v-slot:option="{ option }">
                                                        <div>{{ option.name }}</div>
                                                    </template>
                                                </Multiselect>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-PermanentStreet" label="Permanent Street:"
                                        label-for="PermanentStreet">
                                        <b-form-input id="PermanentStreet" v-model="form.PermanentStreet"
                                            placeholder="Permanent Street" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-PermanentTown" label="Permanent Town:" label-for="PermanentTown">
                                        <b-form-input id="PermanentTown" v-model="form.PermanentTown"
                                            placeholder="Permanent Town" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-PermanentPostcode" label="Permanent Postcode:"
                                        label-for="PermanentPostcode">
                                        <b-form-input id="PermanentPostcode" v-model="form.PermanentPostcode"
                                            placeholder="Permanent Postcode" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-PermanentCountry" label="Permanent Country:"
                                        label-for="PermanentCountry">
                                        <Multiselect class="multi-table" placeholder="Please Select" track-by="name"
                                                    label="name" :close-on-select="false" :searchable="true"
                                                    :options="countryData">
                                                    <template v-slot:option="{ option }">
                                                        <div>{{ option.name }}</div>
                                                    </template>
                                                </Multiselect>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-PermanentState" label="Permanent State:"
                                        label-for="PermanentState">
                                        <Multiselect class="multi-table" placeholder="Please Select" track-by="name"
                                                    label="name" :close-on-select="false" :searchable="true"
                                                    :options="stateData">
                                                    <template v-slot:option="{ option }">
                                                        <div>{{ option.name }}</div>
                                                    </template>
                                                </Multiselect>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6" class="d-flex align-items-center">
                                    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Same as current
                                        address</b-form-checkbox>
                                </b-col>

                            </b-row>
                            <b-row>
                                <b-col md="12">
                                    <h6><i class="mdi mdi-card-account-phone"></i> CONTACT DETAILS</h6>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                                        <b-form-input id="input-1" v-model="form.email" type="email"
                                            placeholder="Enter email" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-MobilePhoneNo" label="Mobile Phone No:"
                                        label-for="MobilePhoneNo">
                                        <b-form-input id="MobilePhoneNo" v-model="form.MobilePhoneNo"
                                            placeholder="Mobile Phone No" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-TelephoneNo" label="Telephone No:" label-for="TelephoneNo">
                                        <b-form-input id="TelephoneNo" v-model="form.TelephoneNo" placeholder="Telephone No"
                                            required></b-form-input>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <div class="text-end">
                                <b-button type="submit" variant="success" class="me-2">Submit</b-button>
                            </div>
                        </b-form>
                    </b-card>

                </div>
            </div>
        </div>
    </Layout>
</template>
