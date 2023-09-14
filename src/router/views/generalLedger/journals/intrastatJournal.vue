<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import IntrastatJournal from '../../../../components/generalLedger/journals/intrastatJournal.vue';

export default {
  setup() {
    return {

    };
  },
  page: {
    title: "Intrastat Journal",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
    IntrastatJournal
  },
  data() {
    return {
      title: "Intrastat Journal",
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
          <intrastat-journal />
        </div>
      </div>
    </div>
  </Layout>
</template>