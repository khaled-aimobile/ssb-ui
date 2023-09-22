<script>
import Layout from "../../layouts/main";
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
        Layout,
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
                    department: 'Backend',
                    date: '10-10-2023',
                    email: 'david@skote.com'
                },
                {
                    id: 2,
                    image: require('@/assets/images/users/avatar-2.jpg'),
                    name: 'Frank Kirk',
                    designation: 'Frontend Developer',
                    contact: '+919090909090',
                    department: 'Frontend',
                    date: '10-10-2023',
                    email: 'frank@skote.com'
                },
                {
                    id: 3,
                    image: require('@/assets/images/users/avatar-3.jpg'),
                    name: 'Rafael Morales',
                    designation: 'Backend Developer',
                    contact: '+919090909090',
                    department: 'Backend',
                    date: '10-10-2023',
                    email: 'Rafael@skote.com'
                },
                {
                    id: 4,
                    name: 'Mark Ellison',
                    designation: 'Full Stack Developer',
                    contact: '+919090909090',
                    department: 'Backend',
                    date: '10-10-2023',
                    email: 'mark@skote.com'
                },
                {
                    id: 5,
                    image: require('@/assets/images/users/avatar-4.jpg'),
                    name: 'Minnie Walter',
                    designation: 'Frontend Developer',
                    contact: '+919090909090',
                    department: 'Backend',
                    date: '10-10-2023',
                    email: 'minnie@skote.com'
                },
                {
                    id: 6,
                    image: require('@/assets/images/users/avatar-5.jpg'),
                    name: 'Shirley Smith',
                    designation: 'UI/UX Designer',
                    contact: '+919090909090',
                    department: 'Frontend',
                    date: '10-10-2023',
                    email: 'shirley@skote.com'
                },
                {
                    id: 7,
                    name: 'John Santiago',
                    designation: 'Full Stack Developer',
                    contact: '+919090909090',
                    department: 'Backend',
                    date: '10-10-2023',
                    email: 'john@skote.com'
                },
                {
                    id: 8,
                    image: require('@/assets/images/users/avatar-5.jpg'),
                    name: 'Colin Melton',
                    designation: 'Backend Developer',
                    contact: '+919090909090',
                    department: 'Frontend',
                    date: '10-10-2023',
                    email: 'colin@skote.com'
                },
            ]
        };
    },
    methods: {
       
       
        
    }
};
</script>

<template>
    <Layout class="dashboard-main">
    <div class="landing-main">
        <div class="landing-content">
            <div class="custom-container">
                <PageHeader :title="title" :items="items" />
                <div class="row">
                    <div v-for="user in userGridData" :key="user.id" class="col-xl-2 col-sm-6 col-md-4">
                        <div class="card text-center user-card">
                            <div class="card-body">
                                <div v-if="!user.image" class="avatar-sm mx-auto mb-4">
                                    <span class="
                                    avatar-title
                                    bg-soft bg-success
                                    text-success
                                    font-size-16
                                    ">
                                        {{ user.name.charAt(0) }}
                                    </span>
                                </div>
                                <div v-if="user.image" class="mb-4">
                                    <img class="avatar-sm" :src="`${user.image}`" alt />
                                </div>
                                <h5 class="font-size-15 mb-1">
                                    <a href="javascript: void(0);" class="text-dark">{{
                                        user.name
                                    }}</a>
                                </h5>
                                <p class="text-muted mb-1">{{ user.department }}</p>
                                <p class="text-muted mb-3">{{ user.designation }}</p>
                                <!-- <p class="text-muted">{{ user.contact }}</p> -->

                                <div>
                                    <router-link to="" class="badge user-dob bg-success bg-soft text-success font-size-11 m-1"><i class="bx bx-gift"></i> {{
                                        user.date }} </router-link>
                                </div>
                            </div>
                            <div class="card-footer bg-transparent border-top">
                                <div class="contact-links d-flex font-size-20">
                                    <div class="flex-fill">
                                        <router-link v-b-tooltip.hover.top title="Message" to="/" class="back-main">
                                            <div class="back-arrow">
                                                <i class="bx bx-undo"></i>
                                            </div>
                                            Go to HRM
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
    </Layout>
</template>
