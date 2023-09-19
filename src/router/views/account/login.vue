<script>
import axios from "axios";

import Layout from "../../layouts/auth";
import {
  authMethods,
  authFackMethods,
  notificationMethods,
} from "@/state/helpers";
import { mapState } from "vuex";

import appConfig from "@/app.config";
import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

/**
 * Login component
 */
export default {
  setup() {
    return { v$: useVuelidate() };
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
      email: '',
      password: '',
      submitted: false,
      authError: null,
      tryingToLogIn: false,
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
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  methods: {
    ...authMethods,
    ...authFackMethods,
    ...notificationMethods,
    tryToLogIn() {
      this.submitted = true;
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      }

      this.authError = null;
      this.tryingToLogIn = true;

      const loginData = {
        email: this.email,
        password: this.password,
      };

      // Make an API request to fetch user data for authentication
      axios.get("http://localhost:8081/login")
        .then((response) => {
          // Assuming the API returns an array of user objects
          const usersData = response.data;
          // Find a user with matching email and password
          const matchedUser = usersData.find(
            (user) =>
              user.email === loginData.email && user.password === loginData.password
          );

          if (matchedUser) {
            // Authentication was successful
            // You may want to store user information in your Vue.js app here
            this.tryingToLogIn = false;
            this.isAuthError = false;
            this.$router.push(this.$route.query.redirectFrom || { name: "landing" });
          } else {
            // Authentication failed, display error message
            this.tryingToLogIn = false;
            this.authError = "These credentials do not match our records.";
            this.isAuthError = true;
          }
        })
        .catch((error) => {
          this.tryingToLogIn = false;
          this.authError = "An error occurred while trying to log in.";
          this.isAuthError = true;
          console.error("Login Error:", error);
        });
    },
  },
  mounted() {},
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
                <img
                  src="@/assets/images/profile-img.png"
                  alt
                  class="img-fluid"
                />
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
            <b-alert
              v-model="isAuthError"
              variant="danger"
              class="mt-3"
              dismissible
              >{{ authError }}</b-alert
            >
            <div
              v-if="notification.message"
              :class="'alert ' + notification.type"
            >
              {{ notification.message }}
            </div>

            <b-form class="p-2">
              <b-form-group
                class="mb-3"
                id="input-group-1"
                label="Email"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="email"
                  type="text"
                  placeholder="Enter email"
                  :class="{
                    'is-invalid': submitted && v$.email.$error,
                  }"
                ></b-form-input>
                <div
                  v-for="(item, index) in v$.email.$errors"
                  :key="index"
                  class="invalid-feedback"
                >
                  <span v-if="item.$message">{{ item.$message }}</span>
                </div>
              </b-form-group>

              <b-form-group
                class="mb-3"
                id="input-group-2"
                label="Password"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="password"
                  type="password"
                  placeholder="Enter password"
                  :class="{
                    'is-invalid': submitted && v$.password.$error,
                  }"
                ></b-form-input>
                <div
                  v-if="submitted && v$.password.$error"
                  class="invalid-feedback"
                >
                  <span v-if="v$.password.required.$message">{{
                    v$.password.required.$message
                  }}</span>
                </div>
              </b-form-group>
              <b-form-checkbox
                class="form-check me-2"
                id="customControlInline"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Remember me
              </b-form-checkbox>
              <div class="mt-3 d-grid">
                <!-- <b-button type="submit" variant="success" class="btn-block"
                  >Log In</b-button
                > -->
                <router-link class="btn btn-success btn-md btn-block" to="/landing"><!----><div class="btn-content">Log In</div></router-link>
              </div>
              <div class="mt-4 text-center">
                <h5 class="font-size-14 mb-3">Sign in with</h5>

                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a
                      href="#"
                      class="
                        social-list-item
                        bg-primary
                        text-white
                        border-primary
                      "
                    >
                      <i class="mdi mdi-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="#"
                      class="social-list-item bg-info text-white border-info"
                    >
                      <i class="mdi mdi-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="#"
                      class="
                        social-list-item
                        bg-danger
                        text-white
                        border-danger
                      "
                    >
                      <i class="mdi mdi-google"></i>
                    </a>
                  </li>
                </ul>
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
            <router-link to="/register" class="fw-medium text-success"
              >Signup now</router-link
            >
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