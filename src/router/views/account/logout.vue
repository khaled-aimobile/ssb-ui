<script>
import Layout from "../../layouts/auth";
import appConfig from "@/app.config";
// import route from "../../routes";
// import router from "vue-router";

/**
 * Login component
 */
export default {
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
  mounted() {
    this.$store.dispatch('logout');
  },
};
</script>

<template>
  <Layout>
  </Layout>
</template>