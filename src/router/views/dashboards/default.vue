<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";
// import VendorTable from '../../../components/dashboard/vendorTable.vue';
// import ReportInbox from '../../../components/dashboard/reportInbox.vue';
// import MyCutsomers from '../../../components/dashboard/myCutsomers.vue';
import {
  bitconinChart,
  ethereumChart,
  litecoinChart,
} from "../../../components/dashboard/data";
import CryptoContent from '../../../components/dashboard/cryptoContent.vue';
import ChartDashboard from '../../../components/dashboard/chartDashboard.vue';
/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Dashboard",
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
    CryptoContent,
    ChartDashboard,
    // VendorTable,
    // ReportInbox,
    // MyCutsomers
  },
  data() {
    return {
      title: "Dashboard",
      studentData: [
        { Vendor: "01", Name: "Abiola Esther", Gender: "Female", Phone: "+123456789" },
        { Vendor: "02", Name: "Robert V. Kratz", Gender: "Male", Phone: '+123456789' },
        { Vendor: "03", Name: "Kristen Anderson", Gender: "Female", Phone: '+123456789' },
        { Vendor: "04", Name: "Adam Simon", Gender: "Male", Phone: '+123456789' },
        { Vendor: "05", Name: "Daisy Katherine", Gender: "Female", Phone: '+123456789' },
      ],
      fields: [
        'Vendor', 'Phone', 'Name'
      ],
      items: [
        {
          text: "Dashboards",
          to: "/",
        },
        {
          text: "Default",
          active: true,
        },
      ],
      bitconinChart: bitconinChart,
      ethereumChart: ethereumChart,
      litecoinChart: litecoinChart,
    };
  },
};
</script>

<template>
  <Layout class="dashboard-main">
    <PageHeader :title="title" :items="items" />
    <div class="dashboard-content">
     <crypto-content />
     <chart-dashboard />
    </div>
  </Layout>
</template>
