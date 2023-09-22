<script>
import axios from 'axios';
import subMenu from '@/components/subMenu'

export default {
    data() {
        return {
            // Input field for email
        };
    },
    components:{
        subMenu
    },
    methods: {
        async sendDataToServer() {
            try {
                const currentUserData = {
                    id: this.currentUser.id,
                    name: this.currentUser.name,
                    email: this.currentUser.email,
                    token: this.$store.state.token
                };

                const response = await axios.post('https://54.254.141.79/login/auth.php', currentUserData);

                // Handle the response here
                console.log('Response:', response.data);
            } catch (error) {
                // Handle errors here
                console.error('Error:', error);
            }
        },
        logout() {
            this.$store.dispatch('logout');
            this.$router.push('/login');
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
                            <!-- <div v-if="isAuthenticated">
                                <h2 v-if="currentUser">{{ currentUser.name }}</h2>
                                <p v-if="currentUser">Email: {{ currentUser.email }}</p>
                            </div> -->
                        </b-col>
                        <b-col lg="3" sm="6">
                            <div class="card">
                                <a v-if="currentUser.email === 'kishansa1s1@gmail.com'" href="https://54.254.141.79/login"
                                    target="_blank" @click="sendDataToServer">
                                    <div class="card-body">
                                        <i class="mdi mdi-tree-outline"></i>
                                        <h4 class="card-title">HRM</h4>
                                    </div>
                                </a>
                                <router-link to="/" v-else>
                                    <div class="card-body">
                                        <i class="mdi mdi-tree-outline"></i>
                                        <h4 class="card-title">HRM</h4>
                                    </div>
                                </router-link>
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