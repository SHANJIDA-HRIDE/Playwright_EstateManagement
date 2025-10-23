# 🏡 Playwright_EstateManagement

A complete Playwright-based **test automation framework** for validating core functionalities of the **Estate Management web application** — covering login, dashboard, property management, tenants, and payments.

This repository demonstrates **modern Playwright testing practices**, clean structure using the **Page Object Model (POM)**, and scalable automation design.


## 🎯 Overview

This repository automates end-to-end testing for an **Estate Management System**, ensuring the stability and accuracy of all major workflows.  
It includes reusable page objects, utility functions, and pre-login setup scripts to streamline testing and reduce redundancy.

---

## ✨ Features

- ✅ End-to-end UI test automation using **Playwright Test**
- ✅ **Page Object Model (POM)** design for maintainability
- ✅ Global setup for authentication (`global-setup.js`)
- ✅ Pre-login configuration via `login.setup.js`
- ✅ Cross-browser testing (Chromium, Firefox, WebKit)
- ✅ Parallel test execution
- ✅ Screenshot and trace capture for debugging
- ✅ Environment and auth configuration using JSON files
- ✅ Detailed HTML reports

---

## 🔧 Prerequisites

Before you start, make sure you have:
- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- Access credentials for the Estate Management system

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SHANJIDA-HRIDE/Playwright_EstateManagement.git
   cd Playwright_EstateManagement
2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 🚀 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run specific test file
```bash
npx playwright test tests/Assertions.spec.js
```

### Run tests in a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests with tags
```bash
npx playwright test --grep @smoke
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### View test report
```bash
npx playwright show-report
```

### Run tests in UI mode
```bash
npx playwright test --ui
```
## 📁 Project Structure
```bash
Playwright_EstateManagement/
├── pages/                 # Page Object files
│   ├── AddEditDeleteTowerPage.js
│   ├── AddNewRolePage.js
│   └── AddOrgMemberPage.js
│   └── BasePage.js
│   └── EditOrgMemberGenInfoPage.js
│   └── EditOrgMemberLoginCrePage.js
│   └── EditOrgMemberOrgInfoPage.js
│   └── LoginPage.js
│   └── OrgMemberListPage.js
│   └── Owner_Resident_Staff_Page.js
│   └── RoleListPage.js
│   └── TowerListPage.js
├── tests/                 # Automated test scripts
│   ├── OrgMemberTest.spec.js
│   ├── RoleTest.spec.js
│   └── Tower&UnitManagementTest.spec.js
│   ├── loginTest.spec.js
├── utils/                 # Reusable helper functions
│   └── config.js
├── auth.json              # Authentication & environment data
├── global-setup.js        # Pre-test setup configuration
├── login.setup.js         # Login setup handling
├── playwright.config.js   # Playwright configuration
├── package.json           # Dependencies and scripts
└── README.md
```




# Test Coverage

#### Comprehensive automated tests are designed following the Page Object Model (POM) structure to ensure modularity and maintainability.

## 🔹 Authentication

#### File: tests/loginTest.spec.js
#### Coverage:

- Valid and invalid login scenarios

- Empty field validation

- Password visibility toggle check

- Remember me option functionality

- Successful redirection after login

- Logout validation and session expiry

## 🔹 Organization Member Management

#### File: tests/OrgMemberTest.spec.js
#### Pages Used:
##### AddOrgMemberPage.js, OrgMemberListPage.js, EditOrgMemberGenInfoPage.js, EditOrgMemberLoginCrePage.js, EditOrgMemberOrgInfoPage.js

#### Coverage:

- Add new organization member

- Edit general, login, and organizational info of a member

- Validate required field errors and input formats

- Delete existing member and verify removal

- Filter/search member list functionality

- Verify page navigation and UI consistency

## 🔹 Role Management

#### File: tests/RoleTest.spec.js
#### Pages Used:
##### AddNewRolePage.js, RoleListPage.js

#### Coverage:

- Create new role with valid and invalid data

- Edit existing role details

- Delete role and validate confirmation messages

- Validate duplicate role name restriction

- Check permission assignment accuracy

## 🔹 Tower & Unit Management

#### File: tests/Tower&UnitManagementTest.spec.js
#### Pages Used:
##### AddEditDeleteTowerPage.js, TowerListPage.js, Owner_Resident_Staff_Page.js

#### Coverage:

- Add a new tower/unit with required details

- Edit existing tower or unit information

- Delete tower/unit and verify confirmation

- Validate mandatory field checks and error messages

- Verify search and filter options

- Validate owner, resident, and staff associations per tower

## 🔹 Base Page Functionalities

#### File: pages/BasePage.js
#### Usage: Shared utilities for:

- Navigation handling

- Common UI actions (click, fill, wait)

- Alert and toast message validation

- Element visibility and loading synchronization

## 🧰 Tech Stack

- Language: JavaScript (ES6)

- Framework: Playwright

- Test Runner: Playwright Test

- Design Pattern: Page Object Model (POM)

- Reporting: Playwright HTML Reporter

## 👩‍💻 Author

#### Shanjida Hride
#### 🎯 Software Quality Assurance Engineer
#### 📧 shanjidahride1997@gmail.com


## 🏁 Future Improvements

- Add CI/CD pipeline integration

- Integrate API-level test coverage

- Add environment-based configuration support

- Include cross-browser and mobile viewport testing
