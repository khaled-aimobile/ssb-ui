import {
    graphic
} from "echarts";

const walletRadialChart = {
    series: [76, 67, 61],
    chartOptions: {
        chart: {
            height: 300,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                    margin: 5,
                    size: '35%',
                    background: 'transparent',
                    image: undefined,
                },
                track: {
                    show: true,
                    startAngle: undefined,
                    endAngle: undefined,
                    background: '#f2f2f2',
                    strokeWidth: '97%',
                    opacity: 1,
                    margin: 12,
                    dropShadow: {
                        enabled: false,
                        top: 0,
                        left: 0,
                        blur: 3,
                        opacity: 0.5
                    }
                },
                dataLabels: {
                    name: {
                        show: true,
                        fontSize: '16px',
                        fontWeight: 600,
                        offsetY: -10
                    },
                    value: {
                        show: true,
                        fontSize: '14px',
                        offsetY: 4,
                        formatter: function (val) {
                            return val + '%'
                        }
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        color: '#373d3f',
                        fontSize: '16px',
                        fontFamily: undefined,
                        fontWeight: 600,
                        formatter: function (w) {
                            return w.globals.seriesTotals.reduce(function (a, b) {
                                return a + b;
                            }, 0) + '%';
                        }
                    }
                }
            }
        },
        stroke: {
            lineCap: 'round'
        },
        colors: ['#3452e1', '#f1b44c', '#50a5f1'],
        labels: ['Ethereum', 'Bitcoin', 'Ethereum'],
        legend: {
            show: false,
        },
    }
};

const overviewChart = {
    series: [{
        name: 'BTC',
        data: [
            [1327359600000, 30.95],
            [1327446000000, 31.34],
            [1327532400000, 31.18],
            [1327618800000, 31.05],
            [1327878000000, 31.00],
            [1327964400000, 30.95],
            [1328050800000, 31.24],
            [1328137200000, 31.29],
            [1328223600000, 31.85],
            [1328482800000, 31.86],
            [1328569200000, 32.28],
            [1328655600000, 32.10],
            [1328742000000, 32.65],
            [1328828400000, 32.21],
            [1329087600000, 32.35],
            [1329174000000, 32.44],
            [1329260400000, 32.46],
            [1329346800000, 32.86],
            [1329433200000, 32.75],
            [1329778800000, 32.54],
            [1329865200000, 32.33],
            [1329951600000, 32.97],
            [1330038000000, 33.41],
            [1330297200000, 33.27],
            [1330383600000, 33.27],
            [1330470000000, 32.89],
            [1330556400000, 33.10],
            [1330642800000, 33.73],
            [1330902000000, 33.22],
            [1330988400000, 31.99],
            [1331074800000, 32.41],
            [1331161200000, 33.05],
            [1331247600000, 33.64],
            [1331506800000, 33.56],
            [1331593200000, 34.22],
            [1331679600000, 33.77],
            [1331766000000, 34.17],
            [1331852400000, 33.82],
            [1332111600000, 34.51],
            [1332198000000, 33.16],
            [1332284400000, 33.56],
            [1332370800000, 33.71],
            [1332457200000, 33.81],
            [1332712800000, 34.40],
            [1332799200000, 34.63],
            [1332885600000, 34.46],
            [1332972000000, 34.48],
            [1333058400000, 34.31],
            [1333317600000, 34.70],
            [1333404000000, 34.31],
            [1333490400000, 33.46],
            [1333576800000, 33.59],
            [1333922400000, 33.22],
            [1334008800000, 32.61],
            [1334095200000, 33.01],
            [1334181600000, 33.55],
            [1334268000000, 33.18],
            [1334527200000, 32.84],
            [1334613600000, 33.84],
            [1334700000000, 33.39],
            [1334786400000, 32.91],
            [1334872800000, 33.06],
            [1335132000000, 32.62],
            [1335218400000, 32.40],
            [1335304800000, 33.13],
            [1335391200000, 33.26],
            [1335477600000, 33.58],
            [1335736800000, 33.55],
            [1335823200000, 33.77],
            [1335909600000, 33.76],
            [1335996000000, 33.32],
            [1336082400000, 32.61],
            [1336341600000, 32.52],
            [1336428000000, 32.67],
            [1336514400000, 32.52],
            [1336600800000, 31.92],
            [1336687200000, 32.20],
            [1336946400000, 32.23],
            [1337032800000, 32.33],
            [1337119200000, 32.36],
            [1337205600000, 32.01],
            [1337292000000, 31.31],
            [1337551200000, 32.01],
            [1337637600000, 32.01],
            [1337724000000, 32.18],
            [1337810400000, 31.54],
            [1337896800000, 31.60],
            [1338242400000, 32.05],
            [1338328800000, 31.29],
            [1338415200000, 31.05],
            [1338501600000, 29.82],
            [1338760800000, 30.31],
            [1338847200000, 30.70],
            [1338933600000, 31.69],
            [1339020000000, 31.32],
            [1339106400000, 31.65],
            [1339365600000, 31.13],
            [1339452000000, 31.77],
            [1339538400000, 31.79],
            [1339624800000, 31.67],
            [1339711200000, 32.39],
            [1339970400000, 32.63],
            [1340056800000, 32.89],
            [1340143200000, 31.99],
            [1340229600000, 31.23],
            [1340316000000, 31.57],
            [1340575200000, 30.84],
            [1340661600000, 31.07],
            [1340748000000, 31.41],
            [1340834400000, 31.17],
            [1340920800000, 32.37],
            [1341180000000, 32.19],
            [1341266400000, 32.51],
            [1341439200000, 32.53],
            [1341525600000, 31.37],
            [1341784800000, 30.43],
            [1341871200000, 30.44],
            [1341957600000, 30.20],
            [1342044000000, 30.14],
            [1342130400000, 30.65],
            [1342389600000, 30.40],
            [1342476000000, 30.65],
            [1342562400000, 31.43],
            [1342648800000, 31.89],
            [1342735200000, 31.38],
            [1342994400000, 30.64],
            [1343080800000, 30.02],
            [1343167200000, 30.33],
            [1343253600000, 30.95],
            [1343340000000, 31.89],
            [1343599200000, 31.01],
            [1343685600000, 30.88],
            [1343772000000, 30.69],
            [1343858400000, 30.58],
            [1343944800000, 32.02],
            [1344204000000, 32.14],
            [1344290400000, 32.37],
            [1344376800000, 32.51],
            [1344463200000, 32.65],
            [1344549600000, 32.64],
            [1344808800000, 32.27],
            [1344895200000, 32.10],
            [1344981600000, 32.91],
            [1345068000000, 33.65],
            [1345154400000, 33.80],
            [1345413600000, 33.92],
            [1345500000000, 33.75],
            [1345586400000, 33.84],
            [1345672800000, 33.50],
            [1345759200000, 32.26],
            [1346018400000, 32.32],
            [1346104800000, 32.06],
            [1346191200000, 31.96],
            [1346277600000, 31.46],
            [1346364000000, 31.27],
            [1346709600000, 31.43],
            [1346796000000, 32.26],
            [1346882400000, 32.79],
            [1346968800000, 32.46],
            [1347228000000, 32.13],
            [1347314400000, 32.43],
            [1347400800000, 32.42],
            [1347487200000, 32.81],
            [1347573600000, 33.34],
            [1347832800000, 33.41],
            [1347919200000, 32.57],
            [1348005600000, 33.12],
            [1348092000000, 34.53],
            [1348178400000, 33.83],
            [1348437600000, 33.41],
            [1348524000000, 32.90],
            [1348610400000, 32.53],
            [1348696800000, 32.80],
            [1348783200000, 32.44],
            [1349042400000, 32.62],
            [1349128800000, 32.57],
            [1349215200000, 32.60],
            [1349301600000, 32.68],
            [1349388000000, 32.47],
            [1349647200000, 32.23],
            [1349733600000, 31.68],
            [1349820000000, 31.51],
            [1349906400000, 31.78],
            [1349992800000, 31.94],
            [1350252000000, 32.33],
            [1350338400000, 33.24],
            [1350424800000, 33.44],
            [1350511200000, 33.48],
            [1350597600000, 33.24],
            [1350856800000, 33.49],
            [1350943200000, 33.31],
            [1351029600000, 33.36],
            [1351116000000, 33.40],
            [1351202400000, 34.01],
            [1351638000000, 34.02],
            [1351724400000, 34.36],
            [1351810800000, 34.39],
            [1352070000000, 34.24],
            [1352156400000, 34.39],
            [1352242800000, 33.47],
            [1352329200000, 32.98],
            [1352415600000, 32.90],
            [1352674800000, 32.70],
            [1352761200000, 32.54],
            [1352847600000, 32.23],
            [1352934000000, 32.64],
            [1353020400000, 32.65],
            [1353279600000, 32.92],
            [1353366000000, 32.64],
            [1353452400000, 32.84],
            [1353625200000, 33.40],
            [1353884400000, 33.30],
            [1353970800000, 33.18],
            [1354057200000, 33.88],
            [1354143600000, 34.09],
            [1354230000000, 34.61],
            [1354489200000, 34.70],
            [1354575600000, 35.30],
            [1354662000000, 35.40],
            [1354748400000, 35.14],
            [1354834800000, 35.48],
            [1355094000000, 35.75],
            [1355180400000, 35.54],
            [1355266800000, 35.96],
            [1355353200000, 35.53],
            [1355439600000, 37.56],
            [1355698800000, 37.42],
            [1355785200000, 37.49],
            [1355871600000, 38.09],
            [1355958000000, 37.87],
            [1356044400000, 37.71],
            [1356303600000, 37.53],
            [1356476400000, 37.55],
            [1356562800000, 37.30],
            [1356649200000, 36.90],
            [1356908400000, 37.68],
            [1357081200000, 38.34],
            [1357167600000, 37.75],
            [1357254000000, 38.13],
            [1357513200000, 37.94],
            [1357599600000, 38.14],
            [1357686000000, 38.66],
            [1357772400000, 38.62],
            [1357858800000, 38.09],
            [1358118000000, 38.16],
            [1358204400000, 38.15],
            [1358290800000, 37.88],
            [1358377200000, 37.73],
            [1358463600000, 37.98],
            [1358809200000, 37.95],
            [1358895600000, 38.25],
            [1358982000000, 38.10],
            [1359068400000, 38.32],
            [1359327600000, 38.24],
            [1359414000000, 38.52],
            [1359500400000, 37.94],
            [1359586800000, 37.83],
            [1359673200000, 38.34],
            [1359932400000, 38.10],
            [1360018800000, 38.51],
            [1360105200000, 38.40],
            [1360191600000, 38.07],
            [1360278000000, 39.12],
            [1360537200000, 38.64],
            [1360623600000, 38.89],
            [1360710000000, 38.81],
            [1360796400000, 38.61],
            [1360882800000, 38.63],
            [1361228400000, 38.99],
            [1361314800000, 38.77],
            [1361401200000, 38.34],
            [1361487600000, 38.55],
            [1361746800000, 38.11],
            [1361833200000, 38.59],
            [1361919600000, 39.60],
        ]
    }],
    chartOptions: {
        chart: {
            type: 'area',
            height: 240,
            toolbar: 'false'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        markers: {
            size: 0,
            style: 'hollow',
        },
        xaxis: {
            type: 'datetime',
            min: new Date('01 Mar 2012').getTime(),
            tickAmount: 6,
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            }
        },
        colors: ['#f1b44c'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.6,
                opacityTo: 0.05,
                stops: [42, 100, 100, 100]
            }
        },
    }
};

const bitconinChart = {
    series: [{
        name: 'BTC',
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
    }],
    chartOptions: {
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        colors: ['#f1b44c'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [25, 100, 100, 100]
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            marker: {
                show: false
            }
        }
    }
};
const SalesChart = {
    series: [{
        name: 'BTC',
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
    }],
    chartOptions: {
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        colors: ['#ffffff'],    
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [25, 100, 100, 100]
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            marker: {
                show: false
            }
        }
    }
};

const ethereumChart = {
    series: [{
        name: 'ETH',
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    chartOptions: {
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        colors: ['#ffffff'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [25, 100, 100, 100]
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            marker: {
                show: false
            }
        }
    }
};

const purchaseOrder = {
    series: [{
        name: 'ETH',
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    chartOptions: {
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        colors: ['#ffffff'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [25, 100, 100, 100]
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            marker: {
                show: false
            }
        }
    }
};

const litecoinChart = {
    series: [{
        name: 'LTC',
        data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14]
    }],
    chartOptions: {
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        colors: ['#ffffff'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [25, 100, 100, 100]
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            marker: {
                show: false
            }
        }
    }
};

const transactionsData = [
    {
        id: 1,
        color: 'primary',
        name: 'Buy BTC',
        date: '14 Mar, 2020',
        text: '0.016 BTC',
        price: '$125.20',
    },
    {
        id: 2,
        color: 'danger',
        name: 'Sell ETH',
        date: '15 Mar, 2020',
        text: '0.56 ETH',
        price: '$112.34',
    },
    {
        id: 3,
        color: 'primary',
        name: 'Buy LTC',
        date: '16 Mar, 2020',
        text: '1.88 LTC',
        price: '$94.22',
    },
    {
        id: 4,
        color: 'primary',
        name: 'Buy ETH',
        date: '17 Mar, 2020',
        text: '0.42 ETH',
        price: '$84.32',
    },
    {
        id: 5,
        color: 'danger',
        name: 'Sell BTC',
        date: '18 Mar, 2020',
        text: '0.018 BTC',
        price: '$145.80',
    },
    {
        id: 6,
        color: 'primary',
        name: 'Buy BTC',
        date: '14 Mar, 2020',
        text: '0.016 BTC',
        price: '$125.20',
    },
    {
        id: 7,
        color: 'danger',
        name: 'Sell ETH',
        date: '14 Mar, 2020',
        text: '0.56 ETH',
        price: '$112.34',
    },
];

const linewithDataChart = {
    chartOptions: {
        chart: {
            height: 380,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#556ee6', '#34c38f'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [3, 3],
            curve: 'straight'
        },
        title: {
            text: 'Average High & Low Temperature',
            align: 'left',
            style: {
                fontWeight: '500',
            },
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2
            },
            borderColor: '#f1f1f1'
        },
        markers: {
            style: 'inverted',
            size: 6
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: 'Month'
            }
        },
        yaxis: {
            title: {
                text: 'Temperature'
            },
            min: 5,
            max: 40
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    toolbar: {
                        show: false
                    }
                },
                legend: {
                    show: false
                },
            }
        }],
    },
    series: [{
        name: "High - 2018",
        data: [26, 24, 32, 36, 33, 31, 33]
    },
    {
        name: "Low - 2018",
        data: [14, 11, 16, 12, 17, 13, 12]
    }
    ],
};

const dashedLineChart = {
    series: [{
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
        name: "Page Views",
        data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
        name: 'Total Visits',
        data: [89, 56, 74, 98, 72, 38, 64, 46, 84, 58, 46, 49]
    }],
    chartOptions: {
        chart: {
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            }
        },
        colors: ['#556ee6', '#f46a6a', '#34c38f'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [3, 4, 3],
            curve: 'straight',
            dashArray: [0, 8, 5]
        },
        title: {
            text: 'Page Statistics',
            align: 'left',
            style: {
                fontWeight: '500',
            },
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                '10 Jan', '11 Jan', '12 Jan'
            ],
        },
        tooltip: {
            y: [{
                title: {
                    formatter: function (val) {
                        return val + " (mins)"
                    }
                }
            }, {
                title: {
                    formatter: function (val) {
                        return val + " per session"
                    }
                }
            }, {
                title: {
                    formatter: function (val) {
                        return val;
                    }
                }
            }]
        },
        grid: {
            borderColor: '#f1f1f1',
        }
    }
};

const splineAreaChart = {
    series: [{
        name: 'series1',
        data: [34, 40, 28, 52, 42, 109, 100]
    }, {
        name: 'series2',
        data: [32, 60, 34, 46, 34, 52, 41]
    }],
    chartOptions: {
        chart: {
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        colors: ['#556ee6', '#34c38f'],
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
        },
        grid: {
            borderColor: '#f1f1f1',
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        }
    }
};

const columnChart = {
    series: [{
        name: 'Net Profit',
        data: [46, 57, 59, 54, 62, 58, 64, 60, 66]
    }, {
        name: 'Revenue',
        data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
    }, {
        name: 'Free Cash Flow',
        data: [37, 42, 38, 26, 47, 50, 54, 55, 43]
    }],
    chartOptions: {
        chart: {
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        colors: ['#34c38f', '#556ee6', '#f46a6a'],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)',
                style: {
                    fontWeight: '500',
                },
            },
        },
        grid: {
            borderColor: '#f1f1f1',
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    }
};

const columnDatalabelChart = {
    series: [{
        name: 'Inflation',
        data: [2.5, 3.2, 5.0, 10.1, 4.2, 3.8, 3, 2.4, 4.0, 1.2, 3.5, 0.8]
    }],
    chartOptions: {
        chart: {
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
            offsetY: -22,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },
        colors: ['#556ee6'],
        grid: {
            borderColor: '#f1f1f1',
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: 'top',
            labels: {
                offsetY: -18,

            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                }
            },
            tooltip: {
                enabled: true,
                offsetY: -35,
            }
        },
        fill: {
            gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100]
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val + "%";
                }
            }
        },
        title: {
            text: 'Monthly Inflation in Argentina, 2002',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
                color: '#444',
                fontWeight: '500',
            }
        },
    }
};

const barChart = {
    series: [{
        data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365]
    }],
    chartOptions: {
        chart: {
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#34c38f'],
        grid: {
            borderColor: '#f1f1f1',
        },
        xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
        }
    }
};

const mixedChart = {
    series: [{
        name: 'Team A',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: 'Team B',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'Team C',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    chartOptions: {
        chart: {
            stacked: false,
            toolbar: {
                show: false
            }
        },
        stroke: {
            width: [0, 2, 4],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '50%'
            }
        },
        colors: ['#f46a6a', '#556ee6', '#34c38f'],
        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            title: {
                text: 'Points',
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " points";
                    }
                    return y;

                }
            }
        },
        grid: {
            borderColor: '#f1f1f1'
        }
    }
};

const radialChart = {
    series: [44, 55, 67, 83],
    chartOptions: {
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        // eslint-disable-next-line no-unused-vars
                        formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 249
                        }
                    }
                }
            }
        },
        labels: ['Computer', 'Tablet', 'Laptop', 'Mobile'],
        colors: ['#556ee6', '#34c38f', '#f46a6a', '#f1b44c'],
    }
};

const pieChart = {
    series: [44, 55, 41, 17, 15],
    chartOptions: {
        labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
        colors: ["#34c38f", "#556ee6", "#f46a6a", "#50a5f1", "#f1b44c"],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            floating: false,
            fontSize: '14px',
            offsetX: 0
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    height: 240
                },
                legend: {
                    show: false
                },
            }
        }]
    }
};

const donutChart = {
    series: [44, 55, 41, 17, 15],
    chartOptions: {
        labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
        colors: ["#34c38f", "#556ee6", "#f46a6a", "#50a5f1", "#f1b44c"],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            floating: false,
            fontSize: '14px',
            offsetX: 0
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    height: 240
                },
                legend: {
                    show: false
                },
            }
        }]
    }
};

const line = {
    type: "line",
    data: {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
        ],
        datasets: [{
            label: "Sales Analytics",
            fill: true,
            lineTension: 0.5,
            backgroundColor: "rgba(85, 110, 230, 0.2)",
            borderColor: "#556ee6",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#556ee6",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#556ee6",
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80],
        },
        {
            label: "Monthly Earnings",
            fill: true,
            lineTension: 0.5,
            backgroundColor: "rgba(235, 239, 242, 0.2)",
            borderColor: "#ebeff2",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#ebeff2",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#ebeff2",
            pointHoverBorderColor: "#eef0f2",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36],
        },
        ],
    },
    options: {
        defaultFontColor: "#8791af",
        responsive: true,
        maintainAspectRatio: false,

        xAxes: [{
            gridLines: {
                color: "rgba(166, 176, 207, 0.1)",
            },
        },],
        yAxes: [{
            ticks: {
                max: 100,
                min: 20,
                stepSize: 10,
            },
            gridLines: {
                color: "rgba(166, 176, 207, 0.1)",
            },
        },],
    },

};

const pie = {
    type: "pie",
    data: {
        labels: ["Desktops", "Tablets"],
        datasets: [
            {
                data: [300, 180],
                backgroundColor: ["#34c38f", "#ebeff2"],
                hoverBackgroundColor: ["#34c38f", "#ebeff2"],
                hoverBorderColor: "#fff",
            },
        ],
    },
    options: {
        maintainAspectRatio: true,
        responsive: true,
    },
};

const Doughnut = {
    type: "doughnut",
    data: {
        labels: ["Desktops", "Tablets"],
        datasets: [
            {
                data: [300, 210],
                backgroundColor: ["#556ee6", "#ebeff2"],
                hoverBackgroundColor: ["#556ee6", "#ebeff2"],
                hoverBorderColor: "#fff",
                borderWidth: 0,
                radius: "90%",
                innerRadius: "75%",
            },
        ],
    },
    options: {
        maintainAspectRatio: true,
    },
};

const radar = {
    type: 'radar',
    data: {
        labels: [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running',
        ],
        datasets: [
            {
                label: 'Desktops',
                backgroundColor: 'rgba(52, 195, 143, 0.2)',
                borderColor: '#34c38f',
                pointBackgroundColor: '#34c38f',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#34c38f',
                data: [65, 59, 90, 81, 56, 55, 40],
            },
            {
                label: 'Tablets',
                backgroundColor: 'rgba(85, 110, 230, 0.2)',
                borderColor: '#556ee6',
                pointBackgroundColor: '#556ee6',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#556ee6',
                data: [28, 48, 40, 19, 96, 27, 100],
            },
        ],
    },
    options: {
        maintainAspectRatio: true,
        legend: {
            position: 'top',
        },
    }
}

const bar = {
    type: "bar",
    data: {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
        ],
        datasets: [
            {
                barPercentage: 0.4,
                label: "Sales Analytics",
                backgroundColor: "rgba(52, 195, 143, 0.8)",
                borderColor: "rgba(52, 195, 143, 0.8)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(52, 195, 143, 0.9)",
                hoverBorderColor: "rgba(52, 195, 143, 0.9)",
                data: [65, 59, 81, 45, 56, 80, 50, 20],
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        xAxes: [
            {
                gridLines: {
                    color: "rgba(166, 176, 207, 0.1)",
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    color: "rgba(166, 176, 207, 0.1)",
                },
            },
        ],
    },
};

const PolarArea = {
    type: "polarArea",
    data: {
        labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
        datasets: [
            {
                data: [11, 16, 7, 18],
                backgroundColor: ["#f46a6a", "#34c38f", "#f1b44c", "#556ee6"],
                label: "My dataset", // for legend
                hoverBorderColor: "#fff",
            },
        ],
    },
    options: {
        maintainAspectRatio: true,
        legend: {
            position: "top",
        },
    },
};

const smilAnimationChart = {
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        series: [
            [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
            [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
            [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
            [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
        ]
    },
    options: {
        height: 300
    }
};

const simpleLineChart = {
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
        ]
    },
    options: {
        height: 300,
        fullWidth: true,
    }
};

const polarBarChart = {
    data: {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [
            [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
        ]
    },
    options: {
        height: 300,
        high: 10,
        low: -10,
        axisX: {
            labelInterpolationFnc: function (value, index) {
                return index % 2 === 0 ? value : null;
            }
        },
    },
};

const areaLineChart = {
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [5, 9, 7, 8, 5, 3, 5, 4]
        ]
    },
    options: {
        low: 0,
        showArea: true,
        height: 300,
    }
};

const lineSmoothingChart = {
    data: {
        labels: [1, 2, 3, 4, 5],
        series: [
            [1, 5, 10, 0, 1],
            [10, 15, 0, 1, 2]
        ]
    },
    options: {
        height: 300,
        low: 0,
        fullWidth: true,
        chartPadding: {
            right: 20
        },
    },
};

const overlappingBarChart = {
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
    },
    options: {
        seriesBarDistance: 10,
        height: 300,
        responsiveOptions: [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: (value) => {
                        return value[0];
                    }
                }
            }]
        ]
    },
};
const stackBarChart = {
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
        series: [
            [800000, 1200000, 1400000, 1300000, 1520000, 1400000],
            [200000, 400000, 500000, 300000, 452000, 500000],
            [160000, 290000, 410000, 600000, 588000, 410000]
        ]
    },
    options: {
        stackBars: true,
        axisY: {
            labelInterpolationFnc: (value) => {
                return (value / 1000) + 'k';
            }
        },
        height: 300
    }
};

const horizontalBarChart = {
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [
            [5, 4, 3, 7, 5, 10, 3],
            [3, 2, 9, 5, 4, 6, 4]
        ]
    },
    options: {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 70
        },
        height: 300
    }
};

const donutAnimateChart = {
    data: {
        series: [10, 20, 50, 20, 5, 50, 15],
        labels: [1, 2, 3, 4, 5, 6, 7]
    },
    options: {
        donut: true,
        showLabel: false,
        height: 300,
    },
};

const simplePieChart = {
    data: {
        series: [5, 3, 4]
    },
    options: {
        height: 300,
        showLabel: false
    }
};

const distributedSeries = {
    data: {
        labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        series: [20, 60, 120, 200, 180, 20, 10]
    },
    options: {
        height: 300,
        distributeSeries: true,
    }
};

const labelPlacementChart = {
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
            [5, 4, 3, 7, 5, 10, 3],
            [3, 2, 9, 5, 4, 6, 4]
        ]
    },
    options: {
        height: 300,
        axisX: {
            // On the x-axis start means top and end means bottom
            position: 'start'
        },
        axisY: {
            // On the y-axis start means left and end means right
            position: 'end'
        }
    }
};

const extremeConfiguration = {
    data: {
        labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
        series: [
            [5, 4, 3, 7],
            [3, 2, 9, 5],
            [1, 5, 8, 4],
            [2, 3, 4, 6],
            [4, 1, 2, 1]
        ]
    },
    options: {
        height: 300,
        axisX: {
            labelInterpolationFnc: function (value) {
                return value.split(/\s+/).map(function (word) {
                    return word[0];
                }).join('');
            }
        },
        axisY: {
            offset: 20
        },
        responsiveOptions: [
            // Options override for media > 400px
            ['screen and (min-width: 400px)', {
                reverseData: true,
                horizontalBars: true,

                axisY: {
                    offset: 60
                }
            }],
            // Options override for media > 800px
            ['screen and (min-width: 800px)', {
                stackBars: false,
                seriesBarDistance: 10
            }],
            // Options override for media > 1000px
            ['screen and (min-width: 1000px)', {
                reverseData: false,
                horizontalBars: false,
                seriesBarDistance: 15
            }]
        ]
    },
};

const lineAreaChart = {
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [1, 2, 3, 1, -2, 0, 1, 0],
            [-2, -1, -2, -1, -2.5, -1, -2, -1],
            [0, 0, 0, 1, 2, 2.5, 2, 1],
            [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
        ]
    },
    options: {
        height: 300,
        high: 3,
        low: -3,
        showArea: true,
        showLine: false,
        showPoint: false,
        fullWidth: true,
        axisX: {
            showLabel: false,
            showGrid: false
        },

    }
}

let data1 = [];
for (let i = 0; i <= 360; i++) {
    let t = (i / 180) * Math.PI;
    let r = Math.sin(2 * t) * Math.cos(2 * t);
    data1.push([r, i]);
}

const polarChart = {
    polar: {
        legend: {
            data: ["line"],
            textStyle: {
                color: '#999'
            }
        },
        polar: {
            center: ["50%", "54%"]
        },
        color: ['#34c38f'],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross"
            }
        },
        angleAxis: {
            type: "value",
            startAngle: 0
        },
        radiusAxis: {
            min: 0
        },
        series: [{
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            showSymbol: false,
            data: data1
        }],
        animationDuration: 2000
    }
};

const mixedBarChart = {
    // Setup grid
    grid: {
        zlevel: 0,
        x: 80,
        x2: 50,
        y: 30,
        y2: 30,
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        orient: 'center',
        left: 0,
        top: 20,
        feature: {
            dataView: {
                readOnly: false,
                title: "Data View"
            },
            magicType: {
                type: ['line', 'bar'],
                title: {
                    line: "For line chart",
                    bar: "For bar chart"
                }
            },
            restore: {
                title: "restore"
            },
            saveAsImage: {
                title: "Download Image"
            }
        }
    },
    color: ['#34c38f', '#556ee6', '#f46a6a'],
    legend: {
        data: ['Evaporation', 'Precipitation', 'Average temperature'],
        textStyle: {
            color: '#8791af'
        }
    },
    xAxis: [{
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        axisPointer: {
            type: 'shadow'
        },
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
    }],
    yAxis: [{
        type: 'value',
        name: 'Water volume',
        min: 0,
        max: 250,
        interval: 50,
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(166, 176, 207, 0.1)"
            }
        },
        axisLabel: {
            formatter: '{value} ml'
        }
    },
    {
        type: 'value',
        name: 'Temperature',
        min: 0,
        max: 25,
        interval: 5,
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(166, 176, 207, 0.1)"
            }
        },
        axisLabel: {
            formatter: '{value} Ã‚Â°C'
        }
    }
    ],
    series: [{
        name: 'Evaporation',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2]
    },
    {
        name: 'Precipitation',
        type: 'bar',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2]
    },
    {
        name: 'Average temperature',
        type: 'line',
        yAxisIndex: 1,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4]
    }
    ]
};

const guageChart = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {
                title: "Refresh"
            },
            saveAsImage: {
                title: "Download Image"
            }
        }
    },
    series: [{
        name: 'Business indicator',
        type: 'gauge',
        detail: {
            formatter: '{value}%'
        },
        axisLine: {
            lineStyle: {
                color: [
                    [0.2, '#34c38f'],
                    [0.8, '#556ee6'],
                    [1, '#f46a6a']
                ],
                width: 20
            }
        },
        data: [{
            value: 50,
            name: 'Completion rate'
        }]
    }]
};

const lineChart = {
    // Setup grid
    grid: {
        zlevel: 0,
        x: 50,
        x2: 50,
        y: 30,
        y2: 30,
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(166, 176, 207, 0.1)"
            }
        }
    },
    legend: {
        data: ['Desktops', 'Laptops', 'Tablets'],
        textStyle: {
            color: '#999'
        }
    },
    series: [{
        name: 'Desktops',
        type: 'line',
        stack: 'yes',
        data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
        name: 'Laptops',
        type: 'line',
        stack: 'yes',
        data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
        name: 'Tablets',
        type: 'line',
        stack: 'yes',
        data: [150, 232, 201, 154, 190, 330, 410]
    },
    ]
};

const pieChart1 = {
    visualMap: {
        show: false,
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Laptop', 'Tablet', 'Mobile', 'Others', 'Desktop'],
        textStyle: {
            color: '#999'
        }
    },
    color: ['#556ee6', '#f1b44c', '#f46a6a', '#50a5f1', '#34c38f'],
    series: [{
        name: 'Total sales',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [{
            value: 335,
            name: 'Laptop'
        },
        {
            value: 310,
            name: 'Tablet'
        },
        {
            value: 234,
            name: 'Mobile'
        },
        {
            value: 135,
            name: 'Others'
        },
        {
            value: 1548,
            name: 'Desktop'
        }
        ],
        // itemStyle: {
        //     emphasis: {
        //         shadowBlur: 10,
        //         shadowOffsetX: 0,
        //         shadowColor: 'rgba(0, 0, 0, 0.5)'
        //     }
        // }
    }]
};

var data = [
    [
        [28604, 77, 17096869, 'Australia', 1990],
        [31163, 77.4, 27662440, 'Canada', 1990],
        [1516, 68, 1154605773, 'China', 1990],
        [13670, 74.7, 10582082, 'Cuba', 1990],
        [28599, 75, 4986705, 'Finland', 1990],
        [29476, 77.1, 56943299, 'France', 1990],
        [31476, 75.4, 78958237, 'Germany', 1990],
        [28666, 78.1, 254830, 'Iceland', 1990],
        [1777, 57.7, 870601776, 'India', 1990],
        [29550, 79.1, 122249285, 'Japan', 1990],
        [2076, 67.9, 20194354, 'North Korea', 1990],
        [12087, 72, 42972254, 'South Korea', 1990],
        [24021, 75.4, 3397534, 'New Zealand', 1990],
        [43296, 76.8, 4240375, 'Norway', 1990],
        [10088, 70.8, 38195258, 'Poland', 1990],
        [19349, 69.6, 147568552, 'Russia', 1990],
        [10670, 67.3, 53994605, 'Turkey', 1990],
        [26424, 75.7, 57110117, 'United Kingdom', 1990],
        [37062, 75.4, 252847810, 'United States', 1990]
    ],
    [
        [44056, 81.8, 23968973, 'Australia', 2015],
        [43294, 81.7, 35939927, 'Canada', 2015],
        [13334, 76.9, 1376048943, 'China', 2015],
        [21291, 78.5, 11389562, 'Cuba', 2015],
        [38923, 80.8, 5503457, 'Finland', 2015],
        [37599, 81.9, 64395345, 'France', 2015],
        [44053, 81.1, 80688545, 'Germany', 2015],
        [42182, 82.8, 329425, 'Iceland', 2015],
        [5903, 66.8, 1311050527, 'India', 2015],
        [36162, 83.5, 126573481, 'Japan', 2015],
        [1390, 71.4, 25155317, 'North Korea', 2015],
        [34644, 80.7, 50293439, 'South Korea', 2015],
        [34186, 80.6, 4528526, 'New Zealand', 2015],
        [64304, 81.6, 5210967, 'Norway', 2015],
        [24787, 77.3, 38611794, 'Poland', 2015],
        [23038, 73.13, 143456918, 'Russia', 2015],
        [19360, 76.5, 78665830, 'Turkey', 2015],
        [38225, 81.4, 64715810, 'United Kingdom', 2015],
        [53354, 79.1, 321773631, 'United States', 2015]
    ]
];
const bubbleChart = {
    grid: {
        zlevel: 0,
        x: 50,
        x2: 50,
        y: 30,
        y2: 30,
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
    },
    legend: {
        right: 10,
        data: ['2018', '2019'],
        textStyle: {
            color: '#999'
        }
    },
    xAxis: {
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: "rgba(166, 176, 207, 0.1)"
            }
        },
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: "rgba(166, 176, 207, 0.1)"
            }
        },
        scale: true
    },
    series: [{
        name: '2018',
        data: data[0],
        type: 'scatter',
        symbolSize(data) {
            return Math.sqrt(data[2]) / 5e2
        },

        emphasis: {
            label: {
                show: true,
                formatter({
                    data
                }) {
                    return data[3]
                },
                position: 'top'
            }
        },
        itemStyle: {

            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: new graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: 'rgb(134, 204, 255)'
            },
            {
                offset: 1,
                color: 'rgb(85, 110, 230)'
            }
            ])

        }
    },
    {
        name: '2019',
        data: data[1],
        type: 'scatter',
        symbolSize(data) {
            return Math.sqrt(data[2]) / 5e2
        },

        emphasis: {
            label: {
                show: true,
                formatter({
                    data
                }) {
                    return data[3]
                },
                position: 'top'
            }
        },
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(52, 195, 143, 0.5)',
            shadowOffsetY: 5,
            color: new graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: 'rgb(111, 255, 203)'
            },
            {
                offset: 1,
                color: 'rgb(52, 195, 143)'
            }
            ])

        }
    }
    ]
};

const doughnutChart = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['Laptop', 'Tablet', 'Mobile', 'Others', 'Desktop'],
        textStyle: {
            color: '#999'
        }
    },
    color: ['#556ee6', '#f1b44c', '#f46a6a', '#50a5f1', '#34c38f'],
    series: [{
        name: 'Total sales',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        emphasis: {
            label: {
                show: true,

            }
        },

        normal: {
            show: false
        },
        data: [{
            value: 335,
            name: 'Laptop'
        },
        {
            value: 310,
            name: 'Tablet'
        },
        {
            value: 234,
            name: 'Mobile'
        },
        {
            value: 135,
            name: 'Others'
        },
        {
            value: 1548,
            name: 'Desktop'
        }
        ]
    }]
};

const candleStickChart = {
    // Setup grid
    grid: {
        zlevel: 0,
        x: 50,
        x2: 50,
        y: 30,
        y2: 30,
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
    },
    xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'],
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(166, 176, 207, 0.1)"
            }
        },
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(166, 176, 207, 0.1)"
            }
        },
    },
    series: [{
        type: 'k',
        data: [
            [20, 30, 10, 35],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [40, 40, 32, 42]
        ],
        itemStyle: {
            color: '#556ee6',
            color0: '#34c38f',
            borderColor: '#556ee6',
            borderColor0: '#34c38f'

        }
    }]
};

export {
    walletRadialChart, overviewChart, bitconinChart, ethereumChart, litecoinChart, transactionsData, linewithDataChart, dashedLineChart, splineAreaChart, columnChart, columnDatalabelChart, barChart, mixedChart, radialChart, pieChart, donutChart, line,
    pie,
    Doughnut,
    radar,
    bar,
    PolarArea,
    smilAnimationChart, simpleLineChart, polarBarChart, areaLineChart, lineSmoothingChart, overlappingBarChart,
    stackBarChart, horizontalBarChart, donutAnimateChart, simplePieChart, distributedSeries, labelPlacementChart, extremeConfiguration, lineAreaChart, 
    polarChart,
    mixedBarChart,
    guageChart,
    lineChart,
    pieChart1,
    bubbleChart,
    doughnutChart,
    candleStickChart,
    SalesChart,
    purchaseOrder
};