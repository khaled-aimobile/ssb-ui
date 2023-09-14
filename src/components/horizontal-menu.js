export const menuItems = [
    {
        id: 221,
        label: 'Home',
        icon: 'bx-home',
        isUiElement: true,
        subItems: [
            {
                id: 222,
                label: 'Charts of Accounts',
                link: '/charts-of-accounts',
                class: 'green',
                parentId: 221
            },
            {
                id: 223,
                label: 'Vendors',
                link: '/vendors',
                class: 'green',
                parentId: 221
            },
            {
                id: 224,
                label: 'Purchase Orders',
                //link: '/purchase-orders',
                link: '/',
                class: '',
                parentId: 221
            },
            {
                id: 225,
                label: 'Budgets',
                //link: '/budgets',
                link: '/',
                class: '',
                parentId: 221
            },
            {
                id: 226,
                label: 'Bank Accounts',
                //link: '/bank-accounts',
                link: '/',
                class: '',
                parentId: 221
            },
            {
                id: 227,
                label: 'GST Statements',
                //link: '/gst-statements',
                link: '/',
                class: '',
                parentId: 221
            },
            {
                id: 228,
                label: 'Items',
                //link: '/items',
                link: '/',
                class: '',
                parentId: 221
            },
            {
                id: 229,
                label: 'Customers',
                //link: '/customers',
                link: '/',
                class: '',
                parentId: 221
            },
            {
                id: 230,
                label: 'Sales Orders',
                link: '/sales-orders',
                class: 'green',
                parentId: 221
            },
            {
                id: 231,
                label: 'Reminders',
                //link: '/reminders',
                link: '/',
                class: '',
                parentId: 221
            },
            {
                id: 232,
                label: 'Finance Charge Memos',
                //link: '/finance-charge-memos',
                link: '/',
                class: '',
                parentId: 221
            },
            {
                id: 233,
                label: 'Incoming Documents',
                //link: '/incoming-documents',
                link: '/',
                class: '',
                parentId: 221
            },
            {
                id: 234,
                label: 'EC Sales List',
                //link: '/ec-sales-list',
                link: '/',
                class: '',
                parentId: 221
            },
            {
                id: 235,
                label: '',
                class: '',
                parentId: 221
            },
            {
                id: 235,
                label: '',
                class: '',
                parentId: 221
            },
        ]
    },
    {
        id: 1,
        label: 'menuitems.journals.text',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 2,
                label: 'Purchase Journals',
                link: '',
                class: '',
                parentId: 1
            },
            {
                id: 3,
                label: 'Sales Journals',
                link: '',
                class: '',
                parentId: 1
            },
            {
                id: 4,
                label: 'Cash Receipt Journals',
                link: '',
                class: '',
                parentId: 1
            },
            {
                id: 5,
                label: 'Payment Journals',
                link: '',
                class: '',
                parentId: 1
            },
            {
                id: 6,
                label: 'IC General Journals',
                link: '',
                class: '',
                parentId: 1
            },
            {
                id: 7,
                label: 'General Journals',
                link: '',
                class: '',
                parentId: 1
            },
            {
                id: 8,
                label: 'Intrastat Journals',
                link: '',
                class: '',
                parentId: 1
            },
        ]
    },
    {
        id: 6,
        label: 'Fixed Assets',
        icon: 'bx-tone',
        isUiElement: true,
        subItems: [
            {
                id: 7,
                label: 'Fixed Assets',
                link: '',
                class: '',
                parentId: 6
            },
            {
                id: 8,
                label: 'Fixed Assets G/L Journals',
                link: '',
                class: '',
                parentId: 6
            },
            {
                id: 9,
                label: 'Fixed Assets Reclass. Journals',
                link: '',
                class: '',
                parentId: 6
            },
            {
                id: 10,
                label: 'Recurring General Journals',
                link: '',
                class: '',
                parentId: 6
            },
            {
                id: 11,
                label: 'Insurance',
                link: '',
                class: '',
                parentId: 6
            },
            {
                id: 12,
                label: 'Fixed Assets Journals',
                link: '',
                class: '',
                parentId: 6
            },
            {
                id: 13,
                label: 'Insurance Journals',
                link: '',
                class: '',
                parentId: 6
            },
            {
                id: 14,
                label: 'Recurring Fixed Assets Journals',
                link: '',
                class: '',
                parentId: 6
            },
        ]
    },
    {
        id: 25,
        label: 'Cash Flow',
        icon: 'bx-money',
        subItems: [
            {
                id: 26,
                label: 'Cash Flow Forecast',
                link: '',
                class: '',
                parentId: 25
            },
            {
                id: 27,
                label: 'Chart of Cash Flow Accounts',
                link: '',
                class: '',
                parentId: 25
            },
            {
                id: 28,
                label: "Cash Flow Manual Revenues",
                link: "#",
                class: '',
                parentId: 25
            },
            {
                id: 29,
                label: 'Cash Flow Manual Expenses',
                link: '',
                class: '',
                parentId: 25
            },
        ]
    },
    {
        id: 70,
        icon: 'bx-collection',
        label: 'Cost Accounting',
        subItems: [
            {
                id: 72,
                label: 'Cost Types',
                link: '',
                class: '',
                parentId: 70
            },
            {
                id: 73,
                label: 'Cost Centers',
                link: '',
                class: '',
                parentId: 70
            },
            {
                id: 74,
                label: 'Cost Objects',
                link: '',
                class: '',
                parentId: 70
            },
            {
                id: 75,
                label: 'Cost Allocations',
                link: '',
                class: '',
                parentId: 70
            },
            {
                id: 76,
                label: 'Cost Budgets',
                link: '',
                class: '',
                parentId: 70
            },
        ]
    },
    {
        id: 97,
        label: 'Posted Documents',
        icon: 'bx-file',
        subItems: [
            {
                id: 98,
                label: 'Posted Sales Invoices',
                link: '',
                icon: 'bx-file',
                class: '',
                parentId: 97
            },
            {
                id: 101,
                label: 'Posted Purchase Invoices',
                link: '',
                icon: 'bx-file',
                class: '',
                parentId: 97
            },
            {
                id: 102,
                label: 'Issued Reminders',
                link: '',
                icon: 'bx-file',
                class: '',
                parentId: 97
            },
            {
                id: 103,
                label: 'G/L Registers',
                link: '',
                icon: 'bx-file',
                class: '',
                parentId: 97
            },
            {
                id: 104,
                label: 'Cost Accounting Budget Registers',
                link: '',
                icon: 'bx-file',
                class: '',
                parentId: 97
            },
            {
                id: 105,
                label: 'Posted Sales Credit Memos',
                link: '',
                icon: 'bx-file',
                class: '',
                parentId: 97
            },
            {
                id: 106,
                label: 'Posted Purchase Credit Memos',
                link: '',
                icon: 'bx-file',
                class: '',
                parentId: 97
            },
            {
                id: 107,
                label: 'Issues Fin. Charge Memos',
                link: '',
                icon: 'bx-file',
                class: '',
                parentId: 97
            },
            {
                id: 116,
                label: 'Cost Accounting Registers',
                link: '',
                icon: 'bx-file',
                class: '',
                parentId: 97
            },
        ]
    },
    {
        id: 117,
        label: 'Administration',
        icon: 'bx-grid-alt',
        subItems: [
            {
                id: 118,
                label: 'Currencies',
                link: '',
                icon: 'bx-file',
            },
            {
                id: 119,
                label: 'Accounting Periods',
                link: '',
                icon: 'bx-file',
            },
            {
                id: 120,
                label: 'Number Series',
                link: '',
                icon: 'bx-file',
            },
            {
                id: 121,
                label: 'Analysis Views',
                link: '',
                icon: 'bx-file',
            },
            {
                id: 122,
                label: 'Account Schedules',
                link: '',
                icon: 'bx-file',
            },
            {
                id: 123,
                label: 'Dimensions',
                link: '',
                icon: 'bx-file',
            },
            {
                id: 124,
                label: 'Bank Account Posting Groups',
                link: '',
                icon: 'bx-file',
            },
        ]
    },

];

