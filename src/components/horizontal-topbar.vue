<script>
// import i18n from "../i18n";

import { SimpleBar } from "simplebar-vue3";
import { layoutComputed } from "@/state/helpers";

import i18n from "../i18n";
import { ref, computed } from 'vue';
/**
 * Horizontal-topbar component
 */
export default {
  setup() {
    const isOpen = ref(false);
    const searchText = ref('');
    const accordionItems = [
  {
    title: 'General Ledger (11)',
    isOpen: false,
    items: [
      { text: 'Chart of Accounts', link: '' },
      { text: 'G/L Budgets', link: '' },
      { text: 'Account Schedules', link: '' },
      { text: 'Analysis by Dimensions', link: '' },
      { text: 'GST (3)', link: '' },
      { text: 'Intercompany (6)', link: '' },
      { text: 'Consolidation (3)', link: '' },
      { text: 'Journals (4)', link: '' },
      { text: 'Register/Entries (8)', link: '' },
      { text: 'Reports (4)', link: '' },
      { text: 'Setup (6)', link: '' },
    ],
  },
  {
    title: 'Cash Management (9)',
    isOpen: false,
    items: [
      { text: 'Bank Accounts', link: '' },
      { text: 'Receivables-Payables', link: '' },
      { text: 'Payment Registration', link: '' },
      { text: 'Cash Flow (5)', link: '' },
      { text: 'Reconciliation (3)', link: '' },
      { text: 'Journals (3)', link: '' },
      { text: 'Ledger Entries (3)', link: '' },
      { text: 'Reports (8)', link: '' },
      { text: 'Setup (7)', link: '' },
    ],
  },
  {
    title: 'Cost Accounting (9)',
    isOpen: false,
    items: [
      { text: 'Chart of Cost Centers', link: '' },
      { text: 'Chart of Cost Objects', link: '' },
      { text: 'Chart of Cost Types', link: '' },
      { text: 'Cost Allocations', link: '' },
      { text: 'Cost Budgets', link: '' },
      { text: 'Cost Journals', link: '' },
      { text: 'Registers (2)', link: '' },
      { text: 'Reports (4)', link: '' },
      { text: 'Setup (2)', link: '' },
    ],
  },
  {
    title: 'Receivables (13)',
    isOpen: false,
    items: [
      { text: 'Customers', link: '' },
      { text: 'Sales Invoices', link: '' },
      { text: 'Sales Credit Memos', link: '' },
      { text: 'Direct Debit Collections', link: '' },
      { text: 'Create Recurring Sales Invoices', link: '' },
      { text: 'Register Customer Payments', link: '' },
      { text: 'Combine (2)', link: '' },
      { text: 'Collection (4)', link: '' },
      { text: 'Journals (2)', link: '' },
      { text: 'Posted Documents (4)', link: '' },
      { text: 'Registers/Entries (4)', link: '' },
      { text: 'Reports (20)', link: '' },
      { text: 'Setup (5)', link: '' },
    ],
  },
  {
    title: 'Payables (9)',
    isOpen: false,
    items: [
      { text: 'Vendors', link: '' },
      { text: 'Purchase Invoices', link: '' },
      { text: 'Purchase Credit Memos', link: '' },
      { text: 'Incoming Documents', link: '' },
      { text: 'Journals (2)', link: '' },
      { text: 'Posted Documents (4)', link: '' },
      { text: 'Registers/Entries (5)', link: '' },
      { text: 'Reports (16)', link: '' },
      { text: 'Setup (1)', link: '' },
    ],
  },
  {
    title: 'Fixed Assets (9)',
    isOpen: false,
    items: [
      { text: 'Fixed Assets', link: '' },
      { text: 'Insurance', link: '' },
      { text: 'Calculate Depreciation...', link: '' },
      { text: 'Index Fixed Assets...', link: '' },
      { text: 'Index Insurance...', link: '' },
      { text: 'Journals (6)', link: '' },
      { text: 'Reports (3)', link: '' },
      { text: 'Registers/Entries (5)', link: '' },
      { text: 'Setup (11)', link: '' },
    ],
  },
  {
    title: 'Setup (11)',
    isOpen: false,
    items: [
      { text: 'General Posting Setup', link: '' },
      { text: 'Incoming Documents Setup', link: '' },
      { text: 'Accounting Periods', link: '' },
      { text: 'Standard Text Codes', link: '' },
      { text: 'No. Series', link: '' },
      { text: 'GST (5)', link: '' },
      { text: 'Intrastat (8)', link: '' },
      { text: 'Intercompany (4)', link: '' },
      { text: 'Dimensions (4)', link: '' },
      { text: 'Trail Codes (3)', link: '' },
      { text: 'Posting Groups (9)', link: '' },
    ],
  },
];

    const filteredAccordion = computed(() => {
      const normalizedSearchText = searchText.value.toLowerCase().trim();
      return accordionItems.map((item) => {
        const items = item.items.map((subItem) => {
          const isHighlighted = subItem.text.toLowerCase().includes(normalizedSearchText);
          return { ...subItem, isHighlighted };
        });
        const isOpen = items.some((subItem) => subItem.isHighlighted);
        return { ...item, items, isOpen };
      });
    });
    

    // Toggle accordion item
    const toggleAccordionItem = (index) => {
      accordionItems[index].isOpen = !accordionItems[index].isOpen;
    };

    // Filter accordion items based on search text
    const filterAccordion = () => {
      filteredAccordion.value;
    };

    return {
      isOpen,
      searchText,
      filteredAccordion,
      toggleAccordionItem,
      filterAccordion,
    };
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...layoutComputed,
  },
  components: {
    SimpleBar,
  },
  data() {
    return {
      languages: [
        {
          flag: require("@/assets/images/flags/us.jpg"),
          language: "en",
          title: "English",
        },
        {
          flag: require("@/assets/images/flags/french.jpg"),
          language: "fr",
          title: "French",
        },
        {
          flag: require("@/assets/images/flags/spain.jpg"),
          language: "es",
          title: "spanish",
        },
        {
          flag: require("@/assets/images/flags/chaina.png"),
          language: "zh",
          title: "Chinese",
        },
        {
          flag: require("@/assets/images/flags/arabic.png"),
          language: "ar",
          title: "Arabic",
        },
      ],
      lang: "en",
      lan: i18n.locale,
      text: null,
      flag: null,
      value: null,
    };
  },
  mounted() {
    if (process.env.VUE_APP_I18N_LOCALE) {
      this.flag = this.$i18n.locale || process.env.VUE_APP_I18N_LOCALE;
      this.languages.forEach((item) => {
        if (item.language == this.flag) {
          document.getElementById("header-lang-img").setAttribute("src", item.flag);
        }
      });
    }
  },
  methods: {
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    toggleMenu() {
      let element = document.getElementById("topnav-menu-content");
      element.classList.toggle("show");
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    setLanguage(locale, country, flag) {
      this.lan = locale;
      this.text = country;
      this.flag = flag;
      document.getElementById("header-lang-img").setAttribute("src", flag);
      this.$i18n.locale = locale;
    },
  },
  watch: {
    type: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-topbar", "dark");
              document.body.removeAttribute("data-layout-scrollable");
              break;
            case "light":
              document.body.setAttribute("data-topbar", "light");
              document.body.removeAttribute("data-layout-size", "boxed");
              document.body.removeAttribute("data-layout-scrollable");
              break;
            case "colored":
              document.body.setAttribute("data-topbar", "colored");
              document.body.removeAttribute("data-layout-size", "boxed");
              break;
            default:
              document.body.setAttribute("data-topbar", "dark");
              break;
          }
        }
      },
    },
    width: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              document.body.setAttribute("data-layout-size", "boxed");
              document.body.removeAttribute("data-layout-scrollable");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-mode", "fluid");
              document.body.removeAttribute("data-layout-scrollable");
              document.body.removeAttribute("data-layout-size");
              break;
            case "scrollable":
              document.body.setAttribute("data-layout-scrollable", "true");
              document.body.removeAttribute("data-layout-mode");
              document.body.removeAttribute("data-layout-size");
              break;
            default:
              document.body.setAttribute("data-layout-mode", "fluid");
              break;
          }
        }
      },
    },
  },
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <router-link to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/logo.svg" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-dark.png" alt height="17" />
            </span>
          </router-link>

          <router-link to="/" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/logo.jpg" alt height="40" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo.jpg" alt height="26" />
              <span>Softwood</span>
            </span>
          </router-link>
        </div>

        <button id="toggle" type="button" class="btn btn-sm me-2 font-size-16 d-xl-none header-item" @click="toggleMenu">
          <i class="fa fa-fw fa-bars"></i>
        </button>

        <b-dropdown variant="black" class="dropdown-menu-end d-xl-block d-none" toggle-class="header-item">
          <template v-slot:button-content>
            General Ledger
            <i class="mdi mdi-chevron-down"></i>
          </template>

          <b-dropdown-item>Chart of Accounts </b-dropdown-item>
          <b-dropdown-item>G/L Budgets</b-dropdown-item>
          <b-dropdown-item>Account Schedules </b-dropdown-item>
          <b-dropdown-item>Analysis by Dimensions</b-dropdown-item>
          <b-dropdown-item>GST (3)</b-dropdown-item>
          <b-dropdown-item>Intercompany (6) </b-dropdown-item>
          <b-dropdown-item>Consolidation (3)</b-dropdown-item>
          <b-dropdown-item>Journals (4)</b-dropdown-item>
          <b-dropdown-item>Register/Entries (8)</b-dropdown-item>
          <b-dropdown-item>Reports (4)</b-dropdown-item>
          <b-dropdown-item>Setup (6)</b-dropdown-item>
        </b-dropdown>
        <b-dropdown variant="black" class="dropdown-menu-end d-xl-block d-none" toggle-class="header-item">
          <template v-slot:button-content>
            Cash Management
            <i class="mdi mdi-chevron-down"></i>
          </template>
          <b-dropdown-item>Bank Accounts</b-dropdown-item>
          <b-dropdown-item>Receivables-Payables</b-dropdown-item>
          <b-dropdown-item>Payment Registration</b-dropdown-item>
          <b-dropdown-item>Cash Flow (5)</b-dropdown-item>
          <b-dropdown-item>Reconciliation (3)</b-dropdown-item>
          <b-dropdown-item>Journals (3)</b-dropdown-item>
          <b-dropdown-item>Ledger Entries (3)</b-dropdown-item>
          <b-dropdown-item>Reports (8)</b-dropdown-item>
          <b-dropdown-item>Setup (7)</b-dropdown-item>

        </b-dropdown>
        <b-dropdown variant="black" class="dropdown-menu-end d-xl-block d-none" toggle-class="header-item">
          <template v-slot:button-content>
            Cost Accounting
            <i class="mdi mdi-chevron-down"></i>
          </template>
          <b-dropdown-item>Chart of Cost Centers</b-dropdown-item>
          <b-dropdown-item>Chart of Cost Objects</b-dropdown-item>
          <b-dropdown-item>Chart of Cost Types</b-dropdown-item>
          <b-dropdown-item>Cost Allocations</b-dropdown-item>
          <b-dropdown-item>Cost Budgets</b-dropdown-item>
          <b-dropdown-item>Cost Journals</b-dropdown-item>
          <b-dropdown-item>Registers (2)</b-dropdown-item>
          <b-dropdown-item>Reports (4)</b-dropdown-item>
          <b-dropdown-item>Setup (2)</b-dropdown-item>

        </b-dropdown>
        <b-dropdown variant="black" class="dropdown-menu-end d-xl-block d-none" toggle-class="header-item">
          <template v-slot:button-content>
            Receivables
            <i class="mdi mdi-chevron-down"></i>
          </template>
          <b-dropdown-item>Customers</b-dropdown-item>
          <b-dropdown-item>Sales Invoices</b-dropdown-item>
          <b-dropdown-item>Sales Credit Memos</b-dropdown-item>
          <b-dropdown-item>Direct Debit Collections</b-dropdown-item>
          <b-dropdown-item>Create Recurring Sales Invoices</b-dropdown-item>
          <b-dropdown-item>Register Customer Payments</b-dropdown-item>
          <b-dropdown-item>Combine (2)</b-dropdown-item>
          <b-dropdown-item>Collection (4)</b-dropdown-item>
          <b-dropdown-item>Journals (2)</b-dropdown-item>
          <b-dropdown-item>Posted Documents (4)</b-dropdown-item>
          <b-dropdown-item>Registers/Entries (4)</b-dropdown-item>
          <b-dropdown-item>Reports (20)</b-dropdown-item>
          <b-dropdown-item>Setup (5)</b-dropdown-item>

        </b-dropdown>
      </div>

      <div class="d-flex">
        <button @click="isOpen = true" class="btn btn-black btn-md header-item noti-icon dropdown-toggle show" type="button">
      <div class="btn-content"><i class="mdi mdi-magnify"></i></div>
    </button>
    <b-modal v-model="isOpen" id="modal-search" title-class="font-18" hide-footer title="Search">
      <div>
        <form class="app-search">
          <div class="position-relative">
            <input v-model="searchText" @input="filterAccordion" type="text" class="form-control" placeholder="Search..." />
            <span class="bx bx-search-alt"></span>
          </div>
        </form>
        <!-- Accordion -->
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item" v-for="(item, index) in filteredAccordion" :key="index">
            <h2 class="accordion-header" :id="'panelsStayOpen-heading-' + index">
              <button
                class="accordion-button"
                type="button"
                :class="{ 'collapsed': !item.isOpen }"
                data-bs-toggle="collapse"
                :data-bs-target="'#panelsStayOpen-collapse' + index"
                :aria-expanded="item.isOpen"
                :aria-controls="'panelsStayOpen-collapse' + index"
                @click="toggleAccordionItem(index)"
              >
                {{ item.title }}
              </button>
            </h2>
            <div :id="'panelsStayOpen-collapse' + index" class="accordion-collapse collapse" :class="{ 'show': item.isOpen }"
              :aria-labelledby="'panelsStayOpen-heading-' + index">
              <div class="accordion-body">
                <ul>
                  <li v-for="(subItem, subIndex) in item.items" :key="subIndex" :class="{ 'highlighted': searchText && subItem.isHighlighted }">
    <router-link :to="subItem.link">{{ subItem.text }}</router-link>
  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
        <div class="dropdown d-inline-block d-none">
          <button type="button" class="btn header-item" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <img id="header-lang-img" src="@/assets/images/flags/us.jpg" alt="Header Language" height="16" />
          </button>
          <div class="dropdown-menu dropdown-menu-end">
            <b-link href="#" v-for="(entry, i) in languages" :key="`Lang${i}`" :value="entry"
              @click="setLanguage(entry.language, entry.title, entry.flag)" :class="{ active: lan === entry.language }"
              class="dropdown-item notify-item language">
              <img :src="entry.flag" alt="user-image" class="me-1" height="12" />
              <span class="align-middle">{{ entry.title }}</span>
            </b-link>
          </div>
        </div>

        <b-dropdown class="d-none noti-icon" menu-class="dropdown-menu-lg dropdown-menu-end" right
          toggle-class="header-item" variant="black">
          <template v-slot:button-content>
            <i class="bx bx-customize"></i>
          </template>

          <div class="px-lg-2">
            <div class="row no-gutters">
              <div class="col">
                <a class="dropdown-icon-item" href="#">
                  <img src="@/assets/images/brands/github.png" alt="Github" />
                  <span>{{ $t("navbar.dropdown.site.list.github") }}</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="#">
                  <img src="@/assets/images/brands/bitbucket.png" alt="bitbucket" />
                  <span>{{ $t("navbar.dropdown.site.list.github") }}</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="#">
                  <img src="@/assets/images/brands/dribbble.png" alt="dribbble" />
                  <span>{{ $t("navbar.dropdown.site.list.dribbble") }}</span>
                </a>
              </div>
            </div>

            <div class="row no-gutters">
              <div class="col">
                <a class="dropdown-icon-item" href="#">
                  <img src="@/assets/images/brands/dropbox.png" alt="dropbox" />
                  <span>{{ $t("navbar.dropdown.site.list.dropbox") }}</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="#">
                  <img src="@/assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                  <span>{{ $t("navbar.dropdown.site.list.mailchimp") }}</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="#">
                  <img src="@/assets/images/brands/slack.png" alt="slack" />
                  <span>{{ $t("navbar.dropdown.site.list.slack") }}</span>
                </a>
              </div>
            </div>
          </div>
        </b-dropdown>

        <div class="dropdown d-none d-xl-inline-block ms-1">
          <button type="button" class="btn header-item noti-icon" @click="initFullScreen">
            <i class="bx bx-fullscreen"></i>
          </button>
        </div>

        <b-dropdown menu-class="dropdown-menu-lg p-0 dropdown-menu-end" class="d-none"
          toggle-class="header-item noti-icon" variant="black">
          <template v-slot:button-content>
            <i class="bx bx-bell bx-tada"></i>
            <span class="badge bg-danger rounded-pill">{{
              $t("navbar.dropdown.notification.badge")
            }}</span>
          </template>

          <div class="p-3">
            <div class="row align-items-center">
              <div class="col">
                <h6 class="m-0">
                  {{ $t("navbar.dropdown.notification.text") }}
                </h6>
              </div>
              <div class="col-auto">
                <a href="#" class="small">{{
                  $t("navbar.dropdown.notification.subtext")
                }}</a>
              </div>
            </div>
          </div>
          <SimpleBar style="max-height: 230px">
            <a href="#" class="text-reset notification-item">
              <div class="d-flex">
                <div class="avatar-xs me-3">
                  <span class="avatar-title bg-primary rounded-circle font-size-16">
                    <i class="bx bx-cart"></i>
                  </span>
                </div>
                <div class="flex-grow-1">
                  <h6 class="mt-0 mb-1">
                    {{ $t("navbar.dropdown.notification.order.title") }}
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      {{ $t("navbar.dropdown.notification.order.text") }}
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ $t("navbar.dropdown.notification.order.time") }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" class="text-reset notification-item">
              <div class="d-flex">
                <img src="@/assets/images/users/avatar-3.jpg" class="me-3 rounded-circle avatar-xs" alt="user-pic" />
                <div class="flex-grow-1">
                  <h6 class="mt-0 mb-1">
                    {{ $t("navbar.dropdown.notification.james.title") }}
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      {{ $t("navbar.dropdown.notification.james.text") }}
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ $t("navbar.dropdown.notification.james.time") }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" class="text-reset notification-item">
              <div class="d-flex">
                <div class="avatar-xs me-3">
                  <span class="avatar-title bg-success rounded-circle font-size-16">
                    <i class="bx bx-badge-check"></i>
                  </span>
                </div>
                <div class="flex-grow-1">
                  <h6 class="mt-0 mb-1">
                    {{ $t("navbar.dropdown.notification.item.title") }}
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      {{ $t("navbar.dropdown.notification.item.text") }}
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ $t("navbar.dropdown.notification.item.time") }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" class="text-reset notification-item">
              <div class="d-flex">
                <img src="@/assets/images/users/avatar-4.jpg" class="me-3 rounded-circle avatar-xs" alt="user-pic" />
                <div class="flex-grow-1">
                  <h6 class="mt-0 mb-1">
                    {{ $t("navbar.dropdown.notification.salena.title") }}
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      {{ $t("navbar.dropdown.notification.salena.text") }}
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ $t("navbar.dropdown.notification.salena.time") }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </SimpleBar>
          <div class="p-2 border-top d-grid">
            <a class="btn btn-sm btn-link font-size-14 text-center" href="#">
              <i class="mdi mdi-arrow-right-circle me-1"></i>
              <span key="t-view-more">
                {{ $t("navbar.dropdown.notification.button") }}</span>
            </a>
          </div>
        </b-dropdown>

        <b-dropdown right variant="black" toggle-class="header-item">
          <template v-slot:button-content>
            <img class="rounded-circle header-profile-user" src="@/assets/images/users/avatar-1.jpg"
              alt="Header Avatar" />
            <span class="d-none d-xl-inline-block ms-1">{{
              $t("navbar.dropdown.henry.text")
            }}</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </template>
          <!-- item-->
          <b-dropdown-item>
            <router-link to="/contacts/profile" v-slot="{ navigate }" custom>
              <span @click="navigate" @keypress.enter="navigate">
                <i class="bx bx-user font-size-16 align-middle me-1"></i>
                {{ $t("navbar.dropdown.henry.list.profile") }}
              </span>
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <i class="bx bx-wallet font-size-16 align-middle me-1"></i>
            {{ $t("navbar.dropdown.henry.list.mywallet") }}
          </b-dropdown-item>
          <b-dropdown-item class="d-block" href="#">
            <span class="badge bg-success float-end">11</span>
            <i class="bx bx-wrench font-size-16 align-middle me-1"></i>
            {{ $t("navbar.dropdown.henry.list.settings") }}
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <i class="bx bx-lock-open font-size-16 align-middle me-1"></i>
            {{ $t("navbar.dropdown.henry.list.lockscreen") }}
          </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <router-link to="/login" class="dropdown-item text-danger">
            <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
            {{ $t("navbar.dropdown.henry.list.logout") }}
          </router-link>
        </b-dropdown>

        <div class="dropdown d-inline-block d-none">
          <button type="button" class="btn header-item noti-icon right-bar-toggle toggle-right"
            @click="toggleRightSidebar">
            <i class="bx bx-cog bx-spin toggle-right"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.highlighted {
  background-color: yellow;
}
</style>