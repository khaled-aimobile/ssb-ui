<script>
//import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

export default {
    page: {
        title: "Users",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    components: {
        //Layout,
        PageHeader,
    },
    data() {
        return {
            date: null,
            title: "Users",
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
                    text: "Users",
                    to: "/",
                },
                {
                    text: "Default",
                    active: true,
                },
            ],
            userGridData: [
                {
                    id: 1,
                    name: 'David McHenry',
                    designation: 'UI/UX Designer',
                    contact: '+919090909090',
                    date: '10-10-2023',
                    email: 'david@skote.com'
                },
                {
                    id: 2,
                    image: require('@/assets/images/users/avatar-2.jpg'),
                    name: 'Frank Kirk',
                    designation: 'Frontend Developer',
                    contact: '+919090909090',
                    date: '10-10-2023',
                    email: 'frank@skote.com'
                },
                {
                    id: 3,
                    image: require('@/assets/images/users/avatar-3.jpg'),
                    name: 'Rafael Morales',
                    designation: 'Backend Developer',
                    contact: '+919090909090',
                    date: '10-10-2023',
                    email: 'Rafael@skote.com'
                },
                {
                    id: 4,
                    name: 'Mark Ellison',
                    designation: 'Full Stack Developer',
                    contact: '+919090909090',
                    date: '10-10-2023',
                    email: 'mark@skote.com'
                },
                {
                    id: 5,
                    image: require('@/assets/images/users/avatar-4.jpg'),
                    name: 'Minnie Walter',
                    designation: 'Frontend Developer',
                    contact: '+919090909090',
                    date: '10-10-2023',
                    email: 'minnie@skote.com'
                },
                {
                    id: 6,
                    image: require('@/assets/images/users/avatar-5.jpg'),
                    name: 'Shirley Smith',
                    designation: 'UI/UX Designer',
                    contact: '+919090909090',
                    date: '10-10-2023',
                    email: 'shirley@skote.com'
                },
                {
                    id: 7,
                    name: 'John Santiago',
                    designation: 'Full Stack Developer',
                    contact: '+919090909090',
                    date: '10-10-2023',
                    email: 'john@skote.com'
                },
                {
                    id: 8,
                    image: require('@/assets/images/users/avatar-5.jpg'),
                    name: 'Colin Melton',
                    designation: 'Backend Developer',
                    contact: '+919090909090',
                    date: '10-10-2023',
                    email: 'colin@skote.com'
                },
            ]
        };
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
    <!-- <Layout class="dashboard-main"> -->
    <div class="landing-main">
        <div class="landing-content">
            <b-card class="landing-head">
                <div class="landing-logo">
                    <img src="@/assets/images/logo.jpg" />
                    <h1>Sabah Softwood Berhad</h1>
                </div>
                <div class="landing-dropdown">
                    <b-dropdown right variant="black" toggle-class="header-item">
                        <template v-slot:button-content>
                            <img class="rounded-circle header-profile-user" src="@/assets/images/users/avatar-1.jpg"
                                alt="Header Avatar" />
                            <span class="d-none d-xl-inline-block ms-1">{{
                                $t("navbar.dropdown.henry.text")
                            }}</span>
                            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                        </template>
                        <!-- item-->
                        <b-dropdown-item v-on:click.stop>
                            <router-link to="/add-user">
                                <span>
                                    <i class="bx bx-user-plus font-size-16 align-middle me-1"></i>
                                    Add User
                                </span>
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item v-on:click.stop>
                            <router-link to="/users">
                                <span>
                                    <i class="mdi mdi-account-group font-size-16 align-middle me-1"></i>
                                    Users
                                </span>
                            </router-link>
                        </b-dropdown-item>
                        <a @click="logout" class="dropdown-item text-danger cursor-pointer">
                            <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
                            {{ $t("navbar.dropdown.henry.list.logout") }}
                        </a>
                    </b-dropdown>
                </div>
            </b-card>
            <div class="custom-container">
                <PageHeader :title="title" :items="items" />
                <div class="row">
                    <div v-for="user in userGridData" :key="user.id" class="col-xl-3 col-sm-6 col-md-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <div v-if="!user.image" class="avatar-sm mx-auto mb-4">
                                    <span class="
                                    avatar-title
                                    rounded-circle
                                    bg-soft bg-primary
                                    text-primary
                                    font-size-16
                                    ">
                                        {{ user.name.charAt(0) }}
                                    </span>
                                </div>
                                <div v-if="user.image" class="mb-4">
                                    <img class="rounded-circle avatar-sm" :src="`${user.image}`" alt />
                                </div>
                                <h5 class="font-size-15 mb-1">
                                    <a href="javascript: void(0);" class="text-dark">{{
                                        user.name
                                    }}</a>
                                </h5>
                                <p class="text-muted mb-1">{{ user.designation }}</p>
                                <p class="text-muted">{{ user.contact }}</p>

                                <div>
                                    <a href="javascript: void(0);" class="badge bg-success font-size-11 m-1">{{
                                        user.date }}</a>
                                </div>
                            </div>
                            <div class="card-footer bg-transparent border-top">
                                <div class="contact-links d-flex font-size-20">
                                    <div class="flex-fill">
                                        <router-link v-b-tooltip.hover.top title="Message" to="/">
                                            <i class="bx bx-arrow-back"></i>
                                        </router-link>
                                    </div>
                                    <div class="flex-fill">
                                        <router-link v-b-tooltip.hover.top title="Profile" to="/">
                                            <i class="bx bx-user-circle"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end col -->
                </div>
            </div>
        </div>
    </div>
    <!-- </Layout> -->
</template>
