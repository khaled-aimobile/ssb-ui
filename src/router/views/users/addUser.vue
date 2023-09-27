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
            formData: {
                email: '',
                name: '',
                password: '',
                nationality_id: '1',
                passport_no: '123123',
                permit_no: '2',
                passport_expiry: '1974-09-09',
                permit_expiry: '1974-09-09',
                dob: '1974-09-09',
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
            formErrors: {},
        };
    },
    computed: {
        countryData() {
            return this.$store.getters.countryData
        },
        maritalData() {
            return this.$store.getters.maritalData
        },
        nationalityData() {
            return this.$store.getters.nationalityData
        },
        raceData() {
            return this.$store.getters.raceData
        },
        religionData() {
            return this.$store.getters.religionData
        },
        stateData() {
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
        async onSubmit(event) {
            event.preventDefault();

            // Reset form errors
            this.formErrors = {};

            // Perform form validation
            let isValid = true;

            // Define validation rules for each field
            const validationRules = {
                email: 'Email is required',
                password: 'Password is required',
                name: 'Name is required',
                passport_no: 'Passport No is required',
                passport_expiry: 'Passport Expiry is required',
                permit_no: 'Permit No is required',
                permit_expiry: 'Permit Expiry is required',
                dob:"DOB is required"
                // Define validation rules for other fields here
            };

            // Loop through form fields and validate
            for (const field in validationRules) {
    if (!this.formData[field]) {
      this.formErrors[field] = validationRules[field];
      isValid = false;
    }
  }
  if (isValid) {
    try {
      // Call the registerUser action from Vuex
      await this.$store.dispatch('registerUser', this.formData);

      // Registration successful, handle it (e.g., show a success message or redirect)
    } catch (error) {
      // Handle registration error (display error message)
      console.error('Registration error:', error);
    }
  }
        },
        onReset(event) {
            event.preventDefault();
            // Reset form data and errors
            this.formData = {
                email: '',
                name: '',
                password: '',
                nationality_id: null,
                passport_no: null,
                permit_no: null,
                passport_expiry: null,
                permit_expiry: null,
                dob: null
                // Reset other form fields here
            };
            this.formErrors = {};
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
                                                <b-form-input id="staffID" v-model="formData.staffID" placeholder="Staff ID"
                                                    ></b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4" sm="6">
                                            <b-form-group id="form-staffName" label="Staff Name:" label-for="staffName">
                                                <b-form-input id="staffName" v-model="formData.name"
                                                    placeholder="Staff Name" ></b-form-input>
                                                    <div v-if="formErrors.name" class="text-danger">{{ formErrors.name }}</div>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4" sm="6">
                                            <b-form-group id="form-ReferenceID" label="Reference ID:"
                                                label-for="ReferenceID">
                                                <b-form-input id="ReferenceID" v-model="formData.ReferenceID"
                                                    placeholder="Reference ID" ></b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4" sm="6">
                                            <b-form-group id="form-Nationality" label="Nationality:"
                                                label-for="Nationality">
                                                <Multiselect class="multi-table" placeholder="Please Select" track-by="name"
                                                    label="name" :close-on-select="false" :searchable="true"
                                                    :options="countryData">
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
                                        <b-form-input id="PassportNo" v-model="formData.passport_no"
                                            placeholder="Passport No" ></b-form-input>
                                            <div v-if="formErrors.passport_no" class="text-danger">{{ formErrors.passport_no }}</div>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-PermitNo" label="Permit No:" label-for="PermitNo">
                                        <b-form-input id="PermitNo" v-model="formData.permit_no" placeholder="Permit No"
                                            ></b-form-input>
                                            <div v-if="formErrors.permit_no" class="text-danger">{{ formErrors.permit_no }}</div>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-ICNoOld" label="IC No. (Old):" label-for="ICNoOld">
                                        <b-form-input id="ICNoOld" v-model="formData.ICNoOld" placeholder="IC No. (Old)"
                                            ></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-PassportExpiry" label="Passport Expiry:"
                                        label-for="PassportExpiry">
                                        <VueDatePicker v-model="formData.passport_expiry"></VueDatePicker>
                                        <div v-if="formErrors.passport_expiry" class="text-danger">{{ formErrors.passport_expiry }}</div>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-PermitExpiry" label="Permit Expiry:" label-for="PermitExpiry">
                                        <VueDatePicker v-model="formData.permit_expiry"></VueDatePicker>
                                        <div v-if="formErrors.permit_expiry" class="text-danger">{{ formErrors.permit_expiry }}</div>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-example-datepicker"  label="DOB:"
                                        label-for="example-datepicker">
                                        <VueDatePicker v-model="formData.dob"></VueDatePicker>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-Race" label="Race:" label-for="Race">
                                        <Multiselect class="multi-table" placeholder="Please Select" track-by="name"
                                            label="name" :close-on-select="false" :searchable="true" :options="raceData">
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
                                        <b-form-input id="CurrentStreet" v-model="formData.CurrentStreet"
                                            placeholder="Current Street" ></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-CurrentTown" label="Current Town:" label-for="CurrentTown">
                                        <b-form-input id="CurrentTown" v-model="formData.CurrentTown"
                                            placeholder="Current Town" ></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-CurrentPostcode" label="Current Postcode:"
                                        label-for="CurrentPostcode">
                                        <b-form-input id="CurrentPostcode" v-model="formData.CurrentPostcode"
                                            placeholder="Current Postcode" ></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-CurrentCountry" label="Current Country:"
                                        label-for="CurrentCountry">
                                        <Multiselect class="multi-table" placeholder="Please Select" track-by="name"
                                            label="name" :close-on-select="false" :searchable="true" :options="countryData">
                                            <template v-slot:option="{ option }">
                                                <div>{{ option.name }}</div>
                                            </template>
                                        </Multiselect>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-CurrentState" label="Current State:" label-for="CurrentState">
                                        <Multiselect class="multi-table" placeholder="Please Select" track-by="name"
                                            label="name" :close-on-select="false" :searchable="true" :options="stateData">
                                            <template v-slot:option="{ option }">
                                                <div>{{ option.name }}</div>
                                            </template>
                                        </Multiselect>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-PermanentStreet" label="Permanent Street:"
                                        label-for="PermanentStreet">
                                        <b-form-input id="PermanentStreet" v-model="formData.PermanentStreet"
                                            placeholder="Permanent Street" ></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-PermanentTown" label="Permanent Town:" label-for="PermanentTown">
                                        <b-form-input id="PermanentTown" v-model="formData.PermanentTown"
                                            placeholder="Permanent Town" ></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-PermanentPostcode" label="Permanent Postcode:"
                                        label-for="PermanentPostcode">
                                        <b-form-input id="PermanentPostcode" v-model="formData.PermanentPostcode"
                                            placeholder="Permanent Postcode" ></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-PermanentCountry" label="Permanent Country:"
                                        label-for="PermanentCountry">
                                        <Multiselect class="multi-table" placeholder="Please Select" track-by="name"
                                            label="name" :close-on-select="false" :searchable="true" :options="countryData">
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
                                            label="name" :close-on-select="false" :searchable="true" :options="stateData">
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
                                        <b-form-input id="input-1" v-model="formData.email" type="email"
                                            placeholder="Enter email" ></b-form-input>
                                            <div v-if="formErrors.email" class="text-danger">{{ formErrors.email }}</div>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="input-group-1" label="Password:" label-for="input-1">
                                        <b-form-input id="input-1" v-model="formData.password" type="password"
                                            placeholder="Enter Password" ></b-form-input>
                                            <div v-if="formErrors.password" class="text-danger">{{ formErrors.password }}</div>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-MobilePhoneNo" label="Mobile Phone No:"
                                        label-for="MobilePhoneNo">
                                        <b-form-input id="MobilePhoneNo" v-model="formData.MobilePhoneNo"
                                            placeholder="Mobile Phone No" ></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="3" md="4" sm="6">
                                    <b-form-group id="form-TelephoneNo" label="Telephone No:" label-for="TelephoneNo">
                                        <b-form-input id="TelephoneNo" v-model="formData.TelephoneNo"
                                            placeholder="Telephone No" ></b-form-input>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <div class="text-end">
                                <b-button type="submit" variant="success" class="me-2">Submit</b-button>
                                <b-button type="reset" variant="success" class="me-2">Reset</b-button>
                            </div>
                        </b-form>
                    </b-card>

                </div>
            </div>
        </div>
    </Layout>
</template>
