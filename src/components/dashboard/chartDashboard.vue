<script>

import appConfig from "@/app.config";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { VueEcharts } from "vue3-echarts";

import {
    pieChart,
    donutChart,
    mixedChart,
    columnDatalabelChart, line, pie, Doughnut, radar, bar, PolarArea,
    smilAnimationChart,
    simpleLineChart,
    polarBarChart,
    areaLineChart,
    lineSmoothingChart,
    overlappingBarChart,
    stackBarChart,
    horizontalBarChart,
    donutAnimateChart,
    simplePieChart,
    distributedSeries,
    labelPlacementChart,
    extremeConfiguration,
    lineAreaChart,
    polarChart,
    lineChart,
    pieChart1,
    bubbleChart,
    doughnutChart,
    mixedBarChart,
    guageChart,
    candleStickChart,
} from "./data";

/**
 * Apex-chart component
 */
export default {
    page: {
        title: "Apex Chart",
        meta: [{ name: "description", content: appConfig.description }]
    },
    components: {
        Vue3ChartJs,
        VueEcharts
    },
    data() {
        return {

            pieChart: pieChart,
            donutChart: donutChart,
            mixedChart: mixedChart,
            columnDatalabelChart: columnDatalabelChart,
            line: line,
            pie: pie,
            Doughnut: Doughnut,
            radar: radar,
            bar: bar,
            PolarArea: PolarArea,
            smilAnimationChart: smilAnimationChart,
            simpleLineChart: simpleLineChart,
            polarBarChart: polarBarChart,
            areaLineChart: areaLineChart,
            lineSmoothingChart: lineSmoothingChart,
            overlappingBarChart: overlappingBarChart,
            stackBarChart: stackBarChart,
            horizontalBarChart: horizontalBarChart,
            donutAnimateChart: donutAnimateChart,
            simplePieChart: simplePieChart,
            distributedSeries: distributedSeries,
            labelPlacementChart: labelPlacementChart,
            extremeConfiguration: extremeConfiguration,
            lineAreaChart: lineAreaChart,
            title: "Apex charts",
            items: [
                {
                    text: "Charts",
                    href: "/"
                },
                {
                    text: "Apex charts",
                    active: true
                }
            ]
        };
    },
    computed: {
        option() {
            return {
                polarChart: polarChart,
                lineChart: lineChart,
                pieChart1: pieChart1,
                bubbleChart: bubbleChart,
                doughnutChart: doughnutChart,
                mixedBarChart: mixedBarChart,
                candleStickChart: candleStickChart,
                guageChart: guageChart,
            };
        },
    },
};
</script>

<template>
    <div class="row chart-row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title mb-4">User Task</h4>
                    <!-- Pie Chart -->
                    <div class="card-body">
                        <apexchart class="apex-charts" height="320" type="pie" dir="ltr" :series="pieChart.series"
                        :options="pieChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body" dir="ltr">
                    <h4 class="card-title mb-4">Incoming Documents</h4>
                    <div class="card-body">
                    <!-- Simple line chart -->
                    <chartist ratio="ct-chart" :data="simpleLineChart.data" :options="simpleLineChart.options" type="Line">
                    </chartist>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body" dir="ltr">
                    <h4 class="card-title mb-4">Payments</h4>
                    <div class="card-body">
                    <!-- Overlapping bars on mobile -->
                    <chartist ratio="ct-chart" :data="overlappingBarChart.data" :options="overlappingBarChart.options"
                        type="Bar"></chartist>
                        </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title mb-4">Cash Management</h4>
                    <div class="card-body">
                    <vue-echarts :option="option.doughnutChart" style="height: 300px" />
                </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title mb-4">Documents Approvals</h4>
                    <!-- <div class="row text-center">
                        <div class="col-sm-4">
                            <h5 class="mb-0">86541</h5>
                            <p class="text-muted">Activated</p>
                        </div>
                        <div class="col-sm-4">
                            <h5 class="mb-0">2541</h5>
                            <p class="text-muted">Pending</p>
                        </div>
                        <div class="col-sm-4">
                            <h5 class="mb-0">102030</h5>
                            <p class="text-muted">Deactivated</p>
                        </div>
                    </div> -->
                    <!-- Line Chart -->

                    <vue3-chart-js class="chartjs-chart chart-padding" v-bind="{ ...line }"></vue3-chart-js>
                </div>
            </div>
        </div>
    </div>
</template>