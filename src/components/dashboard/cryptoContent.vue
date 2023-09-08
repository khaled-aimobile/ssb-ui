<script>
import appConfig from "@/app.config";
import {
  bitconinChart,
  ethereumChart,
  litecoinChart,
  SalesChart,
  purchaseOrder
} from "./data";
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
      SalesChart: SalesChart,
      purchaseOrder:purchaseOrder
    };
  },
};
</script>

<template>
      <div class="row bitcoin-row">
          <div class="col-sm-2">
            <div class="card bg-white">
              <div class="card-body">
                <p class="text-theme mb-4">
                  <i
                    class="mdi mdi-currency-usd-circle h2 text-theme align-middle mb-0 me-3"
                  ></i>
                  Profit lost
                </p>

                <div class="row">
                  <div class="col-12">
                    <div>
                      <h5 class="text-theme">RM 34.39</h5>
                    </div>
                  </div>
                  <div class="col-6 charts">
                    <div>
                      <apexchart
                        class="apex-charts"
                        height="40"
                        type="area"
                        dir="ltr"
                        :series="SalesChart.series"
                        :options="SalesChart.chartOptions"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card bg-white">
              <div class="card-body">
                <p class="text-theme mb-4">
                  <i
                    class="mdi mdi-podium-silver h2 text-theme align-middle mb-0 me-3"
                  ></i>
                  Sales
                </p>

                <div class="row">
                  <div class="col-12">
                    <div>
                      <h5 class="text-theme">RM 45.44</h5>
                    </div>
                  </div>
                  <div class="col-6 charts">
                    <div>
                      <apexchart
                        class="apex-charts"
                        height="40"
                        type="area"
                        dir="ltr"
                        :series="ethereumChart.series"
                        :options="ethereumChart.chartOptions"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card bg-white">
              <div class="card-body">
                <p class="text-theme mb-4">
                  <i
                    class="mdi mdi-home-import-outline h2 text-theme align-middle mb-0 me-3"
                  ></i>
                  Purchase
                </p>

                <div class="row">
                  <div class="col-12">
                    <div>
                      <h5 class="text-theme">RM 63.61</h5>
                    </div>
                  </div>
                  <div class="col-6 charts">
                    <div>
                      <apexchart
                        class="apex-charts"
                        height="40"
                        type="area"
                        dir="ltr"
                        :series="litecoinChart.series"
                        :options="litecoinChart.chartOptions"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card bg-white">
              <div class="card-body">
                <p class="text-theme mb-4">
                  <i
                    class="mdi mdi-chart-areaspline h2 text-theme align-middle mb-0 me-3"
                  ></i>
                  Sales order
                </p>

                <div class="row">
                  <div class="col-12">
                    <div>
                      <h5 class="text-theme">9134</h5>
                    </div>
                  </div>
                  <div class="col-6 charts">
                    <div>
                      <apexchart
                        class="apex-charts"
                        height="40"
                        type="area"
                        dir="ltr"
                        :series="SalesChart.series"
                        :options="SalesChart.chartOptions"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card bg-white">
              <div class="card-body">
                <p class="text-theme mb-4">
                  <i
                    class="mdi mdi-chart-histogram h2 text-theme align-middle mb-0 me-3"
                  ></i>
                  Purchase order
                </p>

                <div class="row">
                  <div class="col-12">
                    <div>
                      <h5 class="text-theme">245</h5>
                    </div>
                  </div>
                  <div class="col-6 charts">
                    <div>
                      <apexchart
                        class="apex-charts"
                        height="40"
                        type="area"
                        dir="ltr"
                        :series="purchaseOrder.series"
                        :options="purchaseOrder.chartOptions"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card bg-white">
              <div class="card-body">
                <p class="text-theme mb-4">
                  <i
                    class="mdi mdi-message-text-clock h2 text-theme align-middle mb-0 me-3"
                  ></i>
                  Order pending
                </p>

                <div class="row">
                  <div class="col-12">
                    <div>
                      <h5 class="text-theme">63</h5>
                    </div>
                  </div>
                  <div class="col-6 charts">
                    <div>
                      <apexchart
                        class="apex-charts"
                        height="40"
                        type="area"
                        dir="ltr"
                        :series="litecoinChart.series"
                        :options="litecoinChart.chartOptions"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
</template>
