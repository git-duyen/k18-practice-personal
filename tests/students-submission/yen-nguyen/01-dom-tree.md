form#registrationForm
├── div.form-group#parent
│   ├── label#preceding[for="username"]
│   └── input#username[type="text"]
│
├── div.form-group#child
│   ├── label[for="email"]
│   └── input#email[type="email"]
│
├── div.form-group
│   ├── label[for="gender"]
│   └── div
│       ├── div
│       │   ├── input#male[type="radio"]
│       │   └── label[for="male"]
│       └── div
│           ├── input#female[type="radio"]
│           └── label[for="female"]
│
├── div.form-group
│   ├── label[for="hobbies"]
│   └── div
│       ├── div
│       │   ├── input#reading[type="checkbox"]
│       │   └── label[for="reading"]
│       ├── div
│       │   ├── input#traveling[type="checkbox"]
│       │   └── label[for="traveling"]
│       └── div
│           ├── input#cooking[type="checkbox"]
│           └── label[for="cooking"]
│
└── div.form-group
    └── button[type="submit"]