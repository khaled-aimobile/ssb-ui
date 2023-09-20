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
          { text: 'Chart of Accounts', class: 'green', link: '/general-ledger-charts-of-account' },
          { text: 'G/L Budgets', class: 'green', link: '/general-ledger-gl-budget' },
          { text: 'Account Schedules', class: 'green', link: '/general-ledger-account-schedule' },
          { text: 'Analysis by Dimensions', class: 'green', link: '/general-ledger-analysis-dimension' },
          { text: 'GST (3)', class: '', link: '' },
          {
            text: 'Intercompany (6)', class: '', link: '',
            isOpen: true,
            subItems: [
              { text: 'General Journal', class: 'green', link: '/general-ledger-intercompany-general-journal' },
              { text: 'Inbox Transactions', class: 'green', link: '/general-ledger-intercompany-inbox-transaction' },
              { text: 'Outbox Transactions', class: 'green', link: '/general-ledger-intercompany-outbox-transaction' },
              { text: 'Handled Intercompany Inbox Transactions', class: 'green', link: '/general-ledger-handled-intercompany-inbox-transaction' },
              { text: 'Handled Intercompany Outbox Transactions', class: 'green', link: '/general-ledger-handled-intercompany-outbox-transaction' }

            ]
          },
          {
            text: 'Consolidation (3)', class: 'green', link: '/general-ledger-consolidation-business-units',
            // isOpen: false,
            // subItems: [
            //     { text: 'Business Units', class: 'green', link: '/general-ledger-consolidation-business-units' },
            //   ]
          },
          {
            text: 'Journals (4)', class: '', link: '',
            isOpen: true,
            subItems: [
              { text: 'General Journal', class: 'green', link: '/general-ledger-journals-general-journal' },
              { text: 'Recurring General Journal', class: 'green', link: '/general-ledger-journals-recurring-general-journal' },
              { text: 'Intrastat Journal', class: 'green', link: '/general-ledger-journals-intrastat-journal' },
              { text: 'Intercompany General Journal', class: 'green', link: '/general-ledger-journals-intercompany-general-journal' },
            ]
          },
          { text: 'Register/Entries (8)', class: 'green', link: '/general-ledger-register-gl-register' },
          { text: 'Reports (4)', class: '', link: '' },
          { text: 'Setup (6)', class: '', link: '' },
        ],
      },
      {
        title: 'Cash Management (9)',
        isOpen: false,
        items: [
          { text: 'Bank Accounts', class: '', link: '' },
          { text: 'Receivables-Payables', class: '', link: '' },
          { text: 'Payment Registration', class: '', link: '' },
          { text: 'Cash Flow (5)', class: '', link: '/cash-flow-statement' },
          { text: 'Reconciliation (3)', class: '', link: '' },
          { text: 'Journals (3)', class: '', link: '' },
          { text: 'Ledger Entries (3)', class: '', link: '' },
          { text: 'Reports (8)', class: '', link: '' },
          { text: 'Setup (7)', class: '', link: '' },
        ],
      },
      {
        title: 'Cost Accounting (9)',
        isOpen: false,
        items: [
          { text: 'Chart of Cost Centers', class: '', link: '' },
          { text: 'Chart of Cost Objects', class: '', link: '' },
          { text: 'Chart of Cost Types', class: '', link: '' },
          { text: 'Cost Allocations', class: '', link: '' },
          { text: 'Cost Budgets', class: '', link: '' },
          { text: 'Cost Journals', class: '', link: '' },
          { text: 'Registers (2)', class: '', link: '' },
          { text: 'Reports (4)', class: '', link: '' },
          { text: 'Setup (2)', class: '', link: '' },
        ],
      },
      {
        title: 'Receivables (13)',
        isOpen: false,
        items: [
          { text: 'Customers', class: '', link: '' },
          { text: 'Sales Invoices', class: '', link: '' },
          { text: 'Sales Credit Memos', class: '', link: '' },
          { text: 'Direct Debit Collections', class: '', link: '' },
          { text: 'Create Recurring Sales Invoices', class: '', link: '' },
          { text: 'Register Customer Payments', class: '', link: '' },
          { text: 'Combine (2)', class: '', link: '' },
          { text: 'Collection (4)', class: '', link: '' },
          { text: 'Journals (2)', class: '', link: '' },
          { text: 'Posted Documents (4)', class: '', link: '' },
          { text: 'Registers/Entries (4)', class: '', link: '' },
          { text: 'Reports (20)', class: '', link: '' },
          { text: 'Setup (5)', class: '', link: '' },
        ],
      },
      {
        title: 'Payables (9)',
        isOpen: false,
        items: [
          { text: 'Vendors', class: '', link: '' },
          { text: 'Purchase Invoices', class: '', link: '' },
          { text: 'Purchase Credit Memos', class: '', link: '' },
          { text: 'Incoming Documents', class: '', link: '' },
          { text: 'Journals (2)', class: '', link: '' },
          { text: 'Posted Documents (4)', class: '', link: '' },
          { text: 'Registers/Entries (5)', class: '', link: '' },
          { text: 'Reports (16)', class: '', link: '' },
          { text: 'Setup (1)', class: '', link: '' },
        ],
      },
      {
        title: 'Fixed Assets (9)',
        isOpen: false,
        items: [
          { text: 'Fixed Assets', class: '', link: '' },
          { text: 'Insurance', class: '', link: '' },
          { text: 'Calculate Depreciation...', class: '', link: '' },
          { text: 'Index Fixed Assets...', class: '', link: '' },
          { text: 'Index Insurance...', class: '', link: '' },
          { text: 'Journals (6)', class: '', link: '' },
          { text: 'Reports (3)', class: '', link: '' },
          { text: 'Registers/Entries (5)', class: '', link: '' },
          { text: 'Setup (11)', class: '', link: '' },
        ],
      },
      {
        title: 'Setup (11)',
        isOpen: false,
        items: [
          { text: 'General Posting Setup', class: '', link: '' },
          { text: 'Incoming Documents Setup', class: '', link: '' },
          { text: 'Accounting Periods', class: '', link: '' },
          { text: 'Standard Text Codes', class: '', link: '' },
          { text: 'No. Series', class: '', link: '' },
          { text: 'GST (5)', class: '', link: '' },
          { text: 'Intrastat (8)', class: '', link: '' },
          { text: 'Intercompany (4)', class: '', link: '' },
          { text: 'Dimensions (4)', class: '', link: '' },
          { text: 'Trail Codes (3)', class: '', link: '' },
          { text: 'Posting Groups (9)', class: '', link: '' },
        ],
      },
      {
        title: 'Reports',
        isOpen: false,
        items: [
          { text: 'G/L Budgets', class: 'green', link: '/gl-budget' },
          { text: 'Trial Balance', class: 'green', link: '/trial-balance' },
          { text: 'Budget', class: 'green', link: '/budget' },
          { text: 'Balance Sheet', class: 'green', link: '/balance-sheet' },
          { text: 'Cash Flow Statement', class: 'green', link: '/cash-flow-statement' }
        ],
      },
    ];
    const menuItems = [
  {
    label: 'General Ledger',
    dropdownItems: [
      {
        class: 'green',
        label: 'Chart of Accounts',
        route: '/general-ledger-charts-of-account',
      },
      {
        class: 'green',
        label: 'G/L Budgets',
        route: '/general-ledger-gl-budget',
      },
      {
        class: 'green',
        label: 'Account Schedules',
        route: '/general-ledger-account-schedule',
      },
      {
        class: 'green',
        label: 'Analysis by Dimensions',
        route: '/general-ledger-analysis-dimension',
      },
      {
        label: 'GST (3)',
      },
      {
        class: 'green',
        submenu: {
          label: 'Intercompany (6)',
          items: [
            { label: 'General Journal',  route: '/general-ledger-intercompany-general-journal' },
            { label: 'Inbox Transactions',  route: '/general-ledger-intercompany-inbox-transaction' },
            { label: 'Outbox Transactions',  route: '/general-ledger-intercompany-outbox-transaction' },
            { label: 'Handled Intercompany Inbox Transactions',  route: '/general-ledger-handled-intercompany-inbox-transaction' },
            { label: 'Handled Intercompany Outbox Transactions',  route: '/general-ledger-handled-intercompany-outbox-transaction' }
          ],
        },
      },
      {
        class: 'green',
        submenu: {
          label: 'Consolidation (3)',
          items: [
            {
              label: 'Business Units',
              route: '/general-ledger-consolidation-business-units',
            },
          ],
        },
      },
      {
        class: 'green',
        submenu: {
          label: 'Journals (4)',
          items: [
            { label: 'General Journal', route: '/general-ledger-journals-general-journal' },
            { label: 'Recurring General Journal', route: '/general-ledger-journals-recurring-general-journal' },
            { label: 'Intrastat Journal', route: '/general-ledger-journals-intrastat-journal' },
            { label: 'Intercompany General Journal', route: '/general-ledger-journals-intercompany-general-journal' },
          ],
        },
      },
      {
        class: 'green',
        submenu: {
          label: 'Register/Entries (8)',
          items: [
            { label: 'G/L Register', route: '/general-ledger-register-gl-register' },
          ],
        },
      },
      { label: 'Reports (4)', class: '', route: '' },
      { label: 'Setup (6)', class: '', route: '' },
      // Add more dropdown items as needed
    ],
  },
  {
    label: 'Cash Management',
    dropdownItems: [
      {
        label: 'Bank Accounts',
        route: '',
      },
      {
        label: 'Receivables-Payables',
        route: '',
      },
      {
        label: 'Payment Registration',
        route: '',
      },
      {
        label: 'Cash Flow (5)',
        route: '',
      },
      {
        label: 'Reconciliation (3)',
        route: '',
      },
      {
        label: 'Journals (3)',
        route: '',
      },
      {
        label: 'Ledger Entries (3)',
        route: '',
      },
      {
        label: 'Reports (8)',
        route: '',
      },
      {
        label: 'Setup (7)',
        route: '',
      },
      // Add more dropdown items as needed
    ],
  },
  {
    label: 'Cost Accounting',
    dropdownItems: [
      {
        label: 'Chart of Cost Centers',
        route: '',
      },
      {
        label: 'Chart of Cost Objects',
        route: '',
      },
      {
        label: 'Chart of Cost Types',
        route: '',
      },
      {
        label: 'Cost Allocations',
        route: '',
      },
      {
        label: 'Cost Budgets',
        route: '',
      },
      {
        label: 'Cost Journals',
        route: '',
      },
      {
        label: 'Registers (2)',
        route: '',
      },
      {
        label: 'Reports (4)',
        route: '',
      },
      {
        label: 'Setup (2)',
        route: '',
      },
      // Add more dropdown items as needed
    ],
  },
  {
    label: 'Receivables',
    dropdownItems: [
      {
        label: 'Customers',
        route: '',
      },
      {
        label: 'Sales Invoices',
        route: '',
      },
      {
        label: 'Sales Credit Memos',
        route: '',
      },
      {
        label: 'Direct Debit Collections',
        route: '',
      },
      {
        label: 'Create Recurring Sales Invoices',
        route: '',
      },
      {
        label: 'Register Customer Payments',
        route: '',
      },
      {
        label: 'Combine (2)',
        route: '',
      },
      {
        label: 'Collection (4)',
        route: '',
      },
      {
        label: 'Journals (2)',
        route: '',
      },
      {
        label: 'Posted Documents (4)',
        route: '',
      },
      {
        label: 'Registers/Entries (4)',
        route: '',
      },
      {
        label: 'Reports (20)',
        route: '',
      },
      {
        label: 'Setup (5)',
        route: '',
      },
      // Add more dropdown items as needed
    ],
  },
  // Add more top-level menu items as needed
];

    const filteredAccordion = computed(() => {
      const normalizedSearchText = searchText.value.toLowerCase().trim();
      return accordionItems.map((item) => {
        const items = item.items.map((subItem) => {
          const isHighlighted = subItem.text.toLowerCase().includes(normalizedSearchText);
          if (isHighlighted) {
            return { ...subItem, isHighlighted };
          } else if (subItem.subItems && subItem.subItems.length > 0) {
            const subItems = subItem.subItems.map((innerSubItem) => {
              const isInnerHighlighted = innerSubItem.text.toLowerCase().includes(normalizedSearchText);
              return { ...innerSubItem, isHighlighted: isInnerHighlighted };
            });
            const isInnerHighlighted = subItems.some((innerSubItem) => innerSubItem.isHighlighted);
            return { ...subItem, subItems, isOpen: true, isHighlighted: isInnerHighlighted }; // Set isOpen to true here
          }
          return subItem;
        });
        const isOpen = items.some((subItem) => subItem.isHighlighted);
        return { ...item, items, isOpen };
      });
    });

    // Toggle accordion item
    const toggleAccordionItem = (index, subIndex = null) => {
      if (subIndex !== null) {
        accordionItems[index].items[subIndex].isOpen = !accordionItems[index].items[subIndex].isOpen;
      } else {
        accordionItems[index].isOpen = !accordionItems[index].isOpen;
      }
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
      menuItems
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
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
      this.email = ''; // Clear the email input field
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
        <div v-for="menuItem in menuItems" :key="menuItem.label">
      <b-dropdown
        variant="black"
        data-bs-auto-close="outside"
        class="dropdown-menu-end d-xl-block d-none dropdown-menu-top"
        toggle-class="header-item"
      >
        <template v-slot:button-content>
          {{ menuItem.label }}
          <i class="mdi mdi-chevron-down"></i>
        </template>

        <b-dropdown-item v-on:click.stop
          v-for="dropdownItem in menuItem.dropdownItems"
          :key="dropdownItem.label"
          :class="dropdownItem.class"
        >
          <template v-if="dropdownItem.submenu">
            <div class="btn-group">
              <button
                class="dropdown-inner-btn"
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {{ dropdownItem.submenu.label }} <i class="mdi mdi-chevron-down"></i>
              </button>
              <ul class="dropdown-menu">
                <li
                  class="dropdown-item"
                  v-for="subItem in dropdownItem.submenu.items"
                  :key="subItem.label"
                >
                  <router-link
                    :class="subItem.class"
                    v-if="subItem.route"
                    :to="subItem.route"
                  >
                    {{ subItem.label }}
                  </router-link>
                  <span v-else>{{ subItem.label }}</span>
                </li>
              </ul>
            </div>
          </template>
          <template v-else>
            <router-link :class="dropdownItem.class" v-if="dropdownItem.route" :to="dropdownItem.route">
              {{ dropdownItem.label }}
            </router-link>
            <span v-else>{{ dropdownItem.label }}</span>
          </template>
        </b-dropdown-item>
      </b-dropdown>
    </div>
      </div>

      <div class="d-flex">
        <button @click="isOpen = true" class="btn btn-black btn-md header-item noti-icon dropdown-toggle show"
          type="button">
          <div class="btn-content"><i class="mdi mdi-magnify"></i></div>
        </button>
        <b-modal v-model="isOpen" id="modal-search" title-class="font-18" hide-footer title="Search">
          <div>
            <form class="app-search">
              <div class="position-relative">
                <input v-model="searchText" @input="filterAccordion" type="text" class="form-control"
                  placeholder="Search..." />
                <span class="bx bx-search-alt"></span>
              </div>
            </form>
            <!-- Accordion -->
            <!-- Accordion -->
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item" v-for="(item, index) in filteredAccordion" :key="index">
                <h2 class="accordion-header" :id="'panelsStayOpen-heading-' + index">
                  <button class="accordion-button" type="button" :class="{ 'collapsed': !item.isOpen }"
                    data-bs-toggle="collapse" :data-bs-target="'#panelsStayOpen-collapse' + index"
                    :aria-expanded="item.isOpen" :aria-controls="'panelsStayOpen-collapse' + index"
                    @click="toggleAccordionItem(index)">
                    {{ item.title }}
                  </button>
                </h2>
                <div :id="'panelsStayOpen-collapse' + index" class="accordion-collapse collapse"
                  :class="{ 'show': item.isOpen }" :aria-labelledby="'panelsStayOpen-heading-' + index">
                  <div class="accordion-body">
                    <ul>
                      <li v-for="(subItem, subIndex) in item.items" :key="subIndex"
                        :class="{ 'highlighted': searchText && subItem.isHighlighted }">
                        <template v-if="subItem.subItems && subItem.subItems.length > 0">
                          <button class="accordion-button pt-0 ps-0" type="button"
                            :class="{ 'collapsed': !subItem.isOpen }" data-bs-toggle="collapse"
                            :data-bs-target="'#subitem-collapse-' + subIndex" :aria-expanded="subItem.isOpen"
                            :aria-controls="'subitem-collapse-' + subIndex" @click="toggleAccordionItem(subIndex)">
                            {{ subItem.text }}
                          </button>
                          <div :id="'subitem-collapse-' + subIndex" class="accordion-collapse collapse"
                            :class="{ 'show': subItem.isOpen }" :aria-labelledby="'subitem-heading-' + subIndex">
                            <div class="accordion-body pb-2">
                              <ul class="mb-0">
                                <li v-for="(innerSubItem, innerSubIndex) in subItem.subItems"
                                  :key="'innerSubItem-' + innerSubIndex"
                                  :class="{ 'highlighted': searchText && innerSubItem.isHighlighted }">
                                  <router-link :class="innerSubItem.class" :to="innerSubItem.link">{{ innerSubItem.text
                                  }}</router-link>
                                </li>
                              </ul>
                            </div>
                          </div>

                        </template>
                        <template v-else>
                          <router-link :to="subItem.link" :class="subItem.class">{{ subItem.text }}</router-link>
                        </template>
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
          <b-dropdown-item v-on:click.stop>
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
          <a @click="logout" class="dropdown-item text-danger cursor-pointer">
            <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
            {{ $t("navbar.dropdown.henry.list.logout") }}
          </a>
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