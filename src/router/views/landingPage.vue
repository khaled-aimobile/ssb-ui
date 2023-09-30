<script>
import axios from 'axios';
import subMenu from '@/components/subMenu'

export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    components: {
        subMenu
    },
    methods: {

        async sendData() {
            // const email = localStorage.getItem('email');
            //const password = localStorage.getItem('password');
            const token = localStorage.getItem('access_token');
            //const encodedEmail = btoa(email);
            //const encodedToken = btoa(token);
            //const encodedPassword = btoa(password);
            try {
                const response = await axios.post(process.env.VUE_APP_API_URL + '/v1/token_verification', {
                    email: localStorage.getItem('email'),
                    password: localStorage.getItem('password')
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                console.log(response);
                if (response.status === 201) {
                    window.location.href = `https://54.254.141.79/login?email=${token}`;
                }
            } catch (error) {
                console.error(error);
            }
        },
        logout() {
            this.$store.dispatch('logout');
            this.$router.push('/login');
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            this.email = '';
        },
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        },
        currentUser() {
            return this.$store.getters.currentUser;
        },
    },
};
</script>

<template>
    <div class="landing-main">
        <div class="landing-content">
            <sub-menu />

            <div class="landing-body">
                <b-container>
                    <b-row>
                        <b-col lg="12" class="text-center mb-5">
                            <h1>Welcome</h1>
                        </b-col>
                        <b-col lg="3" sm="6">
                            <div class="card">
                                <a @click="sendData" class="cursor-pointer">
                                    <div class="card-body">
                                        <i class="mdi mdi-tree-outline"></i>
                                        <h4 class="card-title">HRM</h4>
                                    </div>
                                </a>
                            </div>
                        </b-col>
                        <b-col lg="3" sm="6">
                            <div class="card">
                                <router-link to="/dashboard">
                                    <div class="card-body">
                                        <i class="mdi mdi-gate-arrow-right"></i>
                                        <h4 class="card-title">Finance</h4>
                                    </div>
                                </router-link>
                            </div>
                        </b-col>
                        <b-col lg="3" sm="6">
                            <div class="card">
                                <router-link to="/dashboard">
                                    <div class="card-body">
                                        <i class="mdi mdi-gas-station-outline"></i>
                                        <h4 class="card-title">Palm Oil</h4>
                                    </div>
                                </router-link>
                            </div>
                        </b-col>
                        <b-col lg="3" sm="6">
                            <div class="card">
                                <router-link to="/dashboard">
                                    <div class="card-body">
                                        <i class="mdi mdi-palm-tree"></i>
                                        <h4 class="card-title">Tree Plant</h4>
                                    </div>
                                </router-link>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
    </div>
</template>