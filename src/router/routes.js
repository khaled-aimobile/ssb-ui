//import store from "@/state/store";

const routes = [
  {
    path: "/menu-setting",
    name: "menuSetting",
    meta: { requiresAuth: true},
    component: () => import("./views/menuSetting"),
  },
  {
    path: "/users",
    name: "users",
    meta: { requiresAuth: true},
    component: () => import("./views/users"),
  },
  {
    path: "/add-user",
    name: "addUser",
    meta: { requiresAuth: true},
    component: () => import("./views/users/addUser"),
  },
    {
    path: "/",
    name: "default",
    meta: { requiresAuth: true},
    component: () => import("./views/landingPage"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: { requiresAuth: true},
    component: () => import("./views/dashboards/default"),
  },
  {
    path: "/bank-accounts",
    name: "bankaccount",
    meta: { requiresAuth: true},
    component: () => import("./views/home/bankAccounts"),
  },
  {
    path: "/budgets",
    name: "budgets",
    meta: { requiresAuth: true},
    component: () => import("./views/home/budgets"),
  },
  {
    path: "/charts-of-accounts",
    name: "chartsofaccounts",
    meta: { requiresAuth: true},
    component: () => import("./views/home/chartsOfAccount"),
  },
  {
    path: "/customers",
    name: "customers",
    meta: { requiresAuth: true},
    component: () => import("./views/home/customers"),
  },
  {
    path: "/finance-charge-memos",
    name: "financeChargeMemos",
    meta: { requiresAuth: true},
    component: () => import("./views/home/financeChargeMemos"),
  },
  {
    path: "/gst-statements",
    name: "gstStatements",
    meta: { requiresAuth: true},
    component: () => import("./views/home/gstStatements"),
  },
  {
    path: "/incoming-documents",
    name: "incomingDocuments",
    meta: { requiresAuth: true},
    component: () => import("./views/home/incomingDocuments"),
  },
  {
    path: "/items",
    name: "items",
    meta: { requiresAuth: true},
    component: () => import("./views/home/items"),
  },
  {
    path: "/purchase-orders",
    name: "purchaseOrders",
    meta: { requiresAuth: true},
    component: () => import("./views/home/purchaseOrders"),
  },
  {
    path: "/reminders",
    name: "reminders",
    meta: { requiresAuth: true},
    component: () => import("./views/home/reminders"),
  },
  {
    path: "/sales-orders",
    name: "salesorder",
    meta: { requiresAuth: true},
    component: () => import("./views/home/salesOrders"),
  },
  {
    path: "/vendors",
    name: "vendors",
    meta: { requiresAuth: true},
    component: () => import("./views/home/vendors"),
  },
  {
    path: "/ec-sales-list",
    name: "ecSalesList",
    meta: { requiresAuth: true},
    component: () => import("./views/home/ecSalesList.vue"),
  },
  //reports
  {
    path: "/gl-budget",
    name: "glBudget",
    meta: { requiresAuth: true},
    component: () => import("./views/reports/glBudget.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    meta: { requiresAuth: true},
    component: () => import("./views/reports/budget.vue"),
  },
  {
    path: "/balance-sheet",
    name: "balanceSheet",
    meta: { requiresAuth: true},
    component: () => import("./views/reports/balanceSheet.vue"),
  },
  {
    path: "/cash-flow-statement",
    name: "cashFlowStatement",
    meta: { requiresAuth: true},
    component: () => import("./views/reports/cashFlowStatement.vue"),
  },
  {
    path: "/trial-balance",
    name: "trialBalance",
    meta: { requiresAuth: true},
    component: () => import("./views/reports/trialBalance.vue"),
  },
  //general-ledger
  {
    path: "/general-ledger-charts-of-account",
    name: "generalLedgerChartsOfAccount",
    meta: { requiresAuth: true},
    component: () => import("./views/generalLedger/chartsOfAccount.vue"),
  },
  {
    path: "/general-ledger-gl-budget",
    name: "generalLedgerGlBudget",
    meta: { requiresAuth: true},
    component: () => import("./views/generalLedger/glBudget.vue"),
  },
  {
    path: "/general-ledger-account-schedule",
    name: "generalLedgerAccountSchedule",
    meta: { requiresAuth: true},
    component: () => import("./views/generalLedger/accountSchedule.vue"),
  },
  {
    path: "/general-ledger-analysis-dimension",
    name: "generalLedgerAnalysisDimension",
    meta: { requiresAuth: true},
    component: () => import("./views/generalLedger/analysisDimension.vue"),
  },
  {
    path: "/general-ledger-intercompany-general-journal",
    name: "intercompanyGeneralJournal",
    meta: { requiresAuth: true},
    component: () => import("./views/generalLedger/interCompany/intercompanyGeneralJournal.vue"),
  },
  {
    path: "/general-ledger-intercompany-inbox-transaction",
    name: "intercompanyInboxTransaction",
    meta: { requiresAuth: true},
    component: () => import("./views/generalLedger/interCompany/intercompanyInboxTransaction.vue"),
  },
  {
    path: "/general-ledger-intercompany-outbox-transaction",
    name: "intercompanyOutboxTransaction",
    meta: { requiresAuth: true},
    component: () => import("./views/generalLedger/interCompany/intercompanyOutboxTransaction.vue"),
  },
  {
    path: "/general-ledger-handled-intercompany-inbox-transaction",
    name: "handleIntercompanyInboxTransaction",
    meta: { requiresAuth: true},
    component: () => import("./views/generalLedger/interCompany/handledIntercompanyInboxTransaction.vue"),
  },
  {
    path: "/general-ledger-handled-intercompany-outbox-transaction",
    name: "handleIntercompanyOutboxTransaction",
    meta: { requiresAuth: true},
    component: () => import("./views/generalLedger/interCompany/handledIntercompanyOutboxTransaction.vue"),
  },
  //Consolidation
  {
    path: "/general-ledger-consolidation-business-units",
    name: "businessUnits",
    meta: { requiresAuth: true},
    component: () => import("./views/generalLedger/consolidation/businessUnits.vue"),
  },
  //Journals
  {
    path: "/general-ledger-journals-general-journal",
    name: "generalJournal",
    meta: { requiresAuth: true},
    component: () => import("./views/generalLedger/journals/generalJournal.vue"),
  },
  {
    path: "/general-ledger-journals-recurring-general-journal",
    name: "recurringGeneralJournal",
    meta: { requiresAuth: true},
    component: () => import("./views/generalLedger/journals/recurringGeneralJournal.vue"),
  },
  {
    path: "/general-ledger-journals-intrastat-journal",
    name: "intrastatJournal",
    meta: { requiresAuth: true},
    component: () => import("./views/generalLedger/journals/intrastatJournal.vue"),
  },
  {
    path: "/general-ledger-journals-intercompany-general-journal",
    name: "journalsintercompanyGeneralJournal",
    meta: { requiresAuth: true},
    component: () => import("./views/generalLedger/journals/intercompanyGeneralJournal.vue"),
  },
  //Register
  {
    path: "/general-ledger-register-gl-register",
    name: "registerGlRegister",
    meta: { requiresAuth: true},
    component: () => import("./views/generalLedger/register/glRegister.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./views/account/login"),
    meta: { requiresAuth: false},
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("./views/account/register"),
    meta: { requiresAuth: false},
  },
  {
    path: "/forgot-password",
    name: "Forgot password",
    component: () => import("./views/account/forgot-password"),
    meta: { requiresAuth: false},
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("./views/account/logout"),
    meta: { requiresAuth: false},
  }
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  // {
  //   path: "*",
  //   redirect: "404",
  // },
];


export default routes