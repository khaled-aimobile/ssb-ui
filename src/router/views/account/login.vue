<script>
import Layout from "../../layouts/auth";
import { mapState, mapGetters } from "vuex";

import appConfig from "@/app.config";
import { required, email, helpers } from "@vuelidate/validators";
//import jsonData from '../../../../db.json';
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
      staff_id: "", // Add staff_id field
    password: "",
      isAuthError: false,
      rememberMe: false, 
    };
  },
  validations: {
    staff_id: {
    required: helpers.withMessage("Staff ID is required", required), // Add validation for staff_id
  },
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
  //   login() {
  //   const { user_details } = jsonData;
  //   const { staff_id, password } = user_details;

  //   if (this.staff_id === staff_id && this.password === password) {
  //     this.$store.dispatch('login', jsonData);
  //     this.$router.push('/');
  //   } else {
  //     console.error('Login failed: Invalid staff ID or password');
  //   }
  // },
  async login() {
  try {
    const formData = new FormData();
    formData.append('email', this.email);
    formData.append('password', this.password);

    const response = await fetch('http://54.169.164.7/ssb_users/public/api/login', {
      method: 'POST',
      body: formData, // Use the FormData object as the request body
    });

    if (response.ok) {
      const userData = await response.json();
      this.$store.dispatch('login', userData);
      this.$router.push('/');
    } else {
      // Log the error response
      console.error('Login failed:', response.status, response.statusText);
      this.isAuthError = true;
    }
    
//cookie
if (this.rememberMe) {
          this.$cookies.set('email', this.email, '7d'); // Store email for 7 days
          this.$cookies.set('password', this.password, '7d'); // Store password for 7 days
        } else {
          // Clear cookies if "Remember me" is not checked
          this.$cookies.remove('email');
          this.$cookies.remove('password');
        }

  } catch (error) {
    console.error('An error occurred during login:', error);
    this.isAuthError = true;
  }
}
  },
  mounted() { 
    this.email = this.$cookies.get('email') || '';
    this.password = this.$cookies.get('password') || '';
  },
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
                  <p>Sign in to continue to Sabah Softwoods Berhad ERP.</p>
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

            <b-form class="p-2">
              <label for="input-1" class="form-label d-block">Email/staffID</label>
              <input class="form-control mb-3" v-model="email" id="input-1" type="text" placeholder="Email/staffID">
              <label for="input-1" class="form-label d-block">Password</label>
              <input class="form-control mb-3" v-model="password" id="input-1" type="text" placeholder="Password">
              <b-form-checkbox class="form-check me-2" id="customControlInline" name="checkbox-1" value="accepted"
                unchecked-value="not_accepted">
                Remember me
              </b-form-checkbox>
              <div class="mt-3 d-grid">
                <b-button @click="login" variant="success" class="btn-block">Log In</b-button>
              </div>
              <div class="mt-4 text-center">
                <router-link to="/forgot-password" class="text-muted d-inline-block">
                  <i class="mdi mdi-lock me-1"></i> Forgot your password?
                </router-link>
              </div>
            </b-form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>