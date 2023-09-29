<script>

export default {
    data() {
        return {
            // Input field for email
        };
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
            localStorage.removeItem('email');
    localStorage.removeItem('password');
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
    <b-card class="landing-head">
        <div class="landing-logo">
            <img src="@/assets/images/logo.jpg" />
            <h1>SABAH SOFTWOODS BERHAD</h1>
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
                <b-dropdown-item v-on:click.stop>
                    <router-link to="/menu-setting">
                        <span>
                            <i class="bx bx-sidebar font-size-16 align-middle me-1"></i>
                            Menu Setting
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
</template>