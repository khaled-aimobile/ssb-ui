<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import GeneralJournal from '../../../../components/generalLedger/journals/generalJournal.vue';

export default {
  setup() {
    return {

    };
  },
  page: {
    title: "General Journal",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
    GeneralJournal
  },
  data() {
    return {
      title: "General Journal",
      value: null,
    };
  },
  methods: {

  }
};
</script>

<template>
  <Layout>
    <div class="page-filters page-heading">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <a class="navbar-brand" href="#">{{ title }}</a>
      </nav>
    </div>
    <div class="custom-layout">
      <div class="card mb-0 h-100">
        <div class="card-body">
          <general-journal />
        </div>
      </div>
    </div>
  </Layout>
</template>