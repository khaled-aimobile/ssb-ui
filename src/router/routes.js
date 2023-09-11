import store from "@/state/store";

export default [
  {
    path: "/",
    name: "default",
    meta: { authRequired: true},
    component: () => import("./views/dashboards/default"),
  },
  {
    path: "/bank-accounts",
    name: "bankaccount",
    meta: { authRequired: true},
    component: () => import("./views/home/bankAccounts"),
  },
  {
    path: "/budgets",
    name: "budgets",
    meta: { authRequired: true},
    component: () => import("./views/home/budgets"),
  },
  {
    path: "/charts-of-accounts",
    name: "chartsofaccounts",
    meta: { authRequired: true},
    component: () => import("./views/home/chartsOfAccount"),
  },
  {
    path: "/customers",
    name: "customers",
    meta: { authRequired: true},
    component: () => import("./views/home/customers"),
  },
  {
    path: "/finance-charge-memos",
    name: "financeChargeMemos",
    meta: { authRequired: true},
    component: () => import("./views/home/financeChargeMemos"),
  },
  {
    path: "/gst-statements",
    name: "gstStatements",
    meta: { authRequired: true},
    component: () => import("./views/home/gstStatements"),
  },
  {
    path: "/incoming-documents",
    name: "incomingDocuments",
    meta: { authRequired: true},
    component: () => import("./views/home/incomingDocuments"),
  },
  {
    path: "/items",
    name: "items",
    meta: { authRequired: true},
    component: () => import("./views/home/items"),
  },
  {
    path: "/purchase-orders",
    name: "purchaseOrders",
    meta: { authRequired: true},
    component: () => import("./views/home/purchaseOrders"),
  },
  {
    path: "/reminders",
    name: "reminders",
    meta: { authRequired: true},
    component: () => import("./views/home/reminders"),
  },
  {
    path: "/sales-orders",
    name: "salesorder",
    meta: { authRequired: true},
    component: () => import("./views/home/salesOrders"),
  },
  {
    path: "/vendors",
    name: "vendors",
    meta: { authRequired: true},
    component: () => import("./views/home/vendors"),
  },
  {
    path: "/ec-sales-list",
    name: "ecSalesList",
    meta: { authRequired: true},
    component: () => import("./views/home/ecSalesList.vue"),
  },
  //reports
  {
    path: "/gl-budget",
    name: "glBudget",
    meta: { authRequired: true},
    component: () => import("./views/reports/glBudget.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./views/account/login"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("./views/account/register"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot password",
    component: () => import("./views/account/forgot-password"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("./views/account/logout"),
    meta: {
      authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          store.dispatch("auth/logOut");
        } else {
          store.dispatch("authfack/logout");
        }
        const authRequiredOnPreviousRoute = routeFrom.matched.some((route) =>
          route.push("/login")
        );
        // Navigate back to previous page, or home as a fallback
        next(
          authRequiredOnPreviousRoute ? { name: "default" } : { ...routeFrom }
        );
      },
    },
  }
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  // {
  //   path: "*",
  //   redirect: "404",
  // },
];