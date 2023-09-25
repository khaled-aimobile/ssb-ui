<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";
import CustomPagination from "../../../components/common/pagination.vue";

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
        CustomPagination
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
            ],
            searchValue: '',
            selectedDepartment: '',
            selectedDesignation: '',
            currentPage: 1,
            itemsPerPage: 12,
        };
    },
    computed: {
        searchResult() {
            let users = this.userGridData;

            if ((this.searchValue || this.selectedDepartment || this.selectedDesignation) && (this.searchValue !== '' || this.selectedDepartment !== '' || this.selectedDesignation !== '')) {
                users = users.filter((item) => {
                    const nameMatches = item.name.toUpperCase().includes(this.searchValue.toUpperCase());
                    const departmentMatches = this.selectedDepartment === '' || item.department === this.selectedDepartment;
                    const designationMatches = this.selectedDesignation === '' || item.designation === this.selectedDesignation;
                    return nameMatches && departmentMatches && designationMatches;
                });
            }
            return users;
        },
        pageCount() {
            const filteredDataCount = this.searchResult.length;
            return Math.ceil(filteredDataCount / this.itemsPerPage);
        },
        paginatedUsers() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.searchResult.slice(startIndex, endIndex);
        },
    },
    methods: {
        onPageChange(newPage) {
            this.currentPage = newPage;
        },
    },

};
</script>

<template>
    <Layout class="dashboard-main">
        <div class="landing-main">
            <div class="landing-content">
                <div class="custom-container">
                    <PageHeader :title="title" :items="items" />
                    <div class="user-search">
                        <input type="text" class="form-control mb-3" v-model="searchValue" placeholder="Search User"
                            id="search-input">
                        <div class="filter-dropdown">
                            <select v-model="selectedDepartment" class="form-select mb-3">
                                <option value="">All Departments</option>
                                <option value="Frontend">Frontend</option>
                                <option value="Backend">Backend</option>
                            </select>
                            <select v-model="selectedDesignation" class="form-select mb-3">
                                <option value="">Designations</option>
                                <option value="Frontend Developer">Frontend Developer</option>
                                <option value="Backend Developer">Backend Developer</option>
                                <option value="UI/UX Designer">UI/UX Designer</option>
                                <option value="Full Stack Developer">Full Stack Developer</option>
                            </select>
                            <select class="form-select mb-3">
                                <option value="">State</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div v-for="user in paginatedUsers" :key="user.id" class="col-xl-2 col-sm-6 col-md-4">
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
                                        <router-link to="" class="text-dark justify-content-center">{{
                                            user.name
                                        }}</router-link>
                                    </h5>
                                    <p class="text-muted mb-1">{{ user.department }}</p>
                                    <p class="text-muted mb-3">{{ user.designation }}</p>
                                    <!-- <p class="text-muted">{{ user.contact }}</p> -->

                                    <div>
                                        <router-link to=""
                                            class="badge user-dob bg-success bg-soft text-success font-size-11 m-1"><i
                                                class="bx bx-gift"></i> {{
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
                    <custom-pagination :page-count="pageCount" @set-currentpage="onPageChange"></custom-pagination>
                </div>
            </div>
        </div>
    </Layout>
</template>
