export const locales = [
    {
        id: 1,
        code: 'en',
        name: 'English',
        img: '/src/assets/flags/us.png'
    },
    {
        id: 2,
        code: 'ru',
        name: 'Russian',
        img: '/src/assets/flags/ru.png'
    },
    {
        id: 3,
        code: 'de',
        name: 'German',
        img: '/src/assets/flags/de.png'
    },
    {
        id: 4,
        code: 'it',
        name: 'Italian',
        img: '/src/assets/flags/it.png'
    },
    {
        id: 5,
        code: 'es',
        name: 'Spanish',
        img: '/src/assets/flags/es.png'
    },
]

export const notifications = [
    {
        id: 1,
        title: 'Your order is placed',
        description: 'If several languages coalesce the grammar',
        icon: 'fa fa-shopping-cart',
        color: "#59db83"
    },
    {
        id: 2,
        title: 'New Message received',
        description: 'You have 87 unread messages',
        icon: 'fas fa-comment',
        color: "#f5b225"
    },
    {
        id: 3,
        title: 'Your item is shipped',
        description: 'It is a long established fact that a reader will',
        icon: 'fas fa-cocktail',
        color: "#11caf0"
    },
    {
        id: 4,
        title: 'Your order is placed',
        description: 'Dummy text of the printing and typesetting industry.',
        icon: 'fas fa-shopping-cart',
        color: "#796fbe"
    },
    {
        id: 5,
        title: 'New Message received',
        description: 'You have 87 unread messages',
        icon: 'fas fa-comment',
        color: "#f5b225"
    }
]

export const accountMenuItems = [
    { label: "Profile", icon: "fas fa-user", href: "" },
    { label: "My Wallet", icon: "fas fa-wallet", href: "" },
    { label: "Settings", icon: "fas fa-cog", href: "" },
    { label: "Lock screen", icon: "fas fa-lock", href: "" },
    { label: "Logout", icon: "fas fa-power-off", href: "" },
];

export const navMenuItems = [
    { label: "Dashboard", icon: "fas fa-gauge-high", href: "", children: []},
    { label: "Email", icon: "far fa-envelope", href: "", children: [
            { label: "Inbox", href: "", children: [] },
            { label: "Read Email", href: "", children: [] },
            { label: "Email Compose", href: "", children: [] },
        ]
    },
    { label: "UI Elements", icon: "fas fa-palette", href: "", children: [
            { label: "Alerts", href: "", children: [] },
            { label: "Button", href: "", children: [] },
            { label: "Badge", href: "", children: [] },
            { label: "Cards", href: "", children: [] },
            { label: "Carousel", href: "", children: [] },
            { label: "Dropdowns", href: "", children: [] },
            { label: "Grid", href: "", children: [] },
            { label: "Images", href: "", children: [] },
            { label: "Lightbox", href: "", children: [] },
            { label: "Modals", href: "", children: [] },
            { label: "Pagination", href: "", children: [] },
            { label: "Popover & Tooltips", href: "", children: [] },
            { label: "Progress Bars", href: "", children: [] },
            { label: "Tabs & Accordions", href: "", children: [] },
            { label: "Typography", href: "", children: [] },
            { label: "Video", href: "", children: [] },
            { label: "Utilities", href: "", children: [] },
            { label: "Colors", href: "", children: [] },
            { label: "Offcanvas", href: "", children: [] },
        ]
    },
    { label: "Forms", icon: "fas fa-file-alt", href: "", children: [
            { label: "Form Elements", href: "", children: [] },
            { label: "Form Validation", href: "", children: [] },
            { label: "Form Advanced", href: "", children: [] },
            { label: "Form Editors", href: "", children: [] },
            { label: "Form File Upload", href: "", children: [] },
            { label: "Form Xeditable", href: "", children: [] },
        ]
    },
    { label: "More", icon: "fas fa-bars", href: "", children: [
            { label: "Calendat", href: "", children: [] },
            { label: "Chat", href: "", children: [] },
            { label: "Kanban", href: "", children: [] },
            { label: "Icons", href: "", children: [
                    { label: "Material Design", href: "", children: [] },
                    { label: "Ion icons", href: "", children: [] },
                    { label: "Font Awesome", href: "", children: [] },
                    { label: "Themify Icons", href: "", children: [] },
                    { label: "Dripicons", href: "", children: [] },
                    { label: "Typeicons Icons", href: "", children: [] },
                ]
            },
            { label: "Tables", href: "", children: [
                    { label: "Basic Tables", href: "", children: [] },
                    { label: "Data Tables", href: "", children: [] },
                    { label: "Responsive Table", href: "", children: [] },
                    { label: "Editable Table", href: "", children: [] },
                ]
            },
            { label: "Maps", href: "", children: [
                    { label: "Google Maps", href: "", children: [] },
                    { label: "Vector Maps", href: "", children: [] },
                ]
            },
            { label: "Range Slider", href: "", children: [] },
            { label: "Session Timeout", href: "", children: [] },
        ]
    },
    { label: "Charts", icon: "fas fa-chart-pie", href: "", children: [
            { label: "Apex Charts", href: "", children: [] },
            { label: "Chartjs Chart", href: "", children: [] },
            { label: "Sparkline chart", href: "", children: [] },
            { label: "C3 Chart", href: "", children: [] },
            { label: "Jquery Knob Chart", href: "", children: [] },
        ]
    },
    { label: "Pages", icon: "fas fa-briefcase", href: "", children: [
            { label: "Timeline", href: "", children: [] },
            { label: "Invoice", href: "", children: [] },
            { label: "Directory", href: "", children: [] },
            { label: "Login", href: "", children: [] },
            { label: "Register", href: "", children: [] },
            { label: "Recover Password", href: "", children: [] },
            { label: "Lock Screen", href: "", children: [] },
            { label: "Blank Page", href: "", children: [] },
            { label: "Error 404", href: "", children: [] },
            { label: "Error 500", href: "", children: [] },
        ]
    }
]
