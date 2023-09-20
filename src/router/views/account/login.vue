<script>
import Layout from "../../layouts/auth";
import { mapState, mapGetters } from "vuex";

import appConfig from "@/app.config";
import { required, email, helpers } from "@vuelidate/validators";
import jsonData from '../../../../db.json';
/**
 * Login component
 */
export default {
  setup() {
    return { 

     };
  },
  page: {
    title: "Login",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
  },
  data() {
    return {
      email: "",
      isAuthError: false,
    };
  },
  validations: {
    email: {
      required: helpers.withMessage("Email is required", required),
      email: helpers.withMessage("Please enter valid email", email),
    },
    password: {
      required: helpers.withMessage("Password is required", required),
    },
  },
  computed: {
    ...mapState("authfack", ["status"]),
    ...mapGetters(['isAuthenticated', 'currentUser']),
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    login() {
      const { user_details } = jsonData;
      const { email } = user_details;

      if (this.email === email) {
        this.$store.dispatch('login', jsonData);
        this.$router.push('/');
      } else {
        console.error('Login failed: Invalid email');
      }
    },
//     async login() {
//       const apiUrl = 'http://localhost:8081/login';
//     try {
//       const response = await fetch(apiUrl, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: this.email,
//             password: this.password,
//           }),
//         });
// console.log(response);
//       if (response.ok) {
//         const data = await response.json();
//         const { access_token, user_details } = data;

//         // Store the access token in Vuex and local storage
//         this.$store.dispatch('login', { access_token, user_details });
//         this.$router.push('/');
//       } else {
//         console.error('Login failed: Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   },
  },
  mounted() { },
};
</script>

<template>
  <Layout>
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-5">
        <div class="card overflow-hidden">
          <div class="bg-soft bg-success">
            <div class="row">
              <div class="col-7">
                <div class="text-success p-4">
                  <h5 class="text-success">Welcome Back !</h5>
                  <p>Sign in to continue to Skote.</p>
                </div>
              </div>
              <div class="col-5 align-self-end">
                <img src="@/assets/images/profile-img.png" alt class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="card-body pt-0">
            <div>
              <router-link to="/">
                <div class="avatar-md profile-user-wid mb-4">
                  <span class="avatar-title rounded-circle bg-light">
                    <img src="@/assets/images/logo.jpg" alt height="34" />
                  </span>
                </div>
              </router-link>
            </div>
            <b-alert v-model="isAuthError" variant="danger" class="mt-3" dismissible>{{ authError }}</b-alert>
            <div v-if="notification.message" :class="'alert ' + notification.type">
              {{ notification.message }}
            </div>

            <b-form class="p-2">
              <label for="input-1" class="form-label d-block">Email</label>
              <input class="form-control mb-3" v-model="email" id="input-1" type="text" placeholder="Email">
              <b-form-checkbox class="form-check me-2" id="customControlInline" name="checkbox-1" value="accepted"
                unchecked-value="not_accepted">
                Remember me
              </b-form-checkbox>
              <div class="mt-3 d-grid">
                <b-button @click="login" variant="success" class="btn-block">Log In</b-button>
              </div>
              <div class="mt-4 text-center">
                <router-link to="/forgot-password" class="text-muted">
                  <i class="mdi mdi-lock me-1"></i> Forgot your password?
                </router-link>
              </div>
            </b-form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="mt-5 text-center">
          <p>
            Don't have an account ?
            <router-link to="/register" class="fw-medium text-success">Signup now</router-link>
          </p>
          <p>
            © {{ new Date().getFullYear() }} Skote. Crafted with
            <i class="mdi mdi-heart text-danger"></i> by Themesbrand
          </p>
        </div>
        <!-- end row -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>