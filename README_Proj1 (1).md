#  Proj1 – Playwright + Cucumber + TypeScript Test Automation Framework

A scalable, maintainable test automation framework built with Playwright, Cucumber (BDD), and TypeScript—featuring comprehensive test coverage, CI integration (GitHub Actions), and modular architecture designed for enterprise-grade testing.

---

##  Table of Contents

1. [Overview](#overview)  
2. [Built With](#built-with)  
3. [Architecture & Code Structure](#architecture--code-structure)  
4. [Getting Started](#getting-started)  
   - Prerequisites  
   - Setup  
   - Executing Tests  
5. [Key Features](#key-features)  
6. [Framework Highlights](#framework-highlights)  
7. [CI Integration (GitHub Actions)](#ci-integration-github-actions)  
8. [Future Enhancements](#future-enhancements)  
9. [Contact](#contact)

---

### Overview
This repository demonstrates a robust automation framework built from scratch using a modular design, TypeScript & Playwright, in a BDD style with Cucumber. It is designed for scalability, maintainability, and seamless CI/CD integration.

---

### Built With
- **Playwright** – for reliable cross-browser UI automation  
- **Cucumber (BDD)** – human-readable feature definitions  
- **TypeScript** – for strong typing and robust code  
- **GitHub Actions** – scheduled and on-demand test execution  
- **Allure / HTML Reports** – clear, visual results  

---

### Architecture & Code Structure
```
/
├── .github/workflows/     # CI pipelines
├── MainTest/
│   ├── features/          # .feature BDD scenarios
│   ├── steps/             # Step definitions in TS
│   ├── support/           # Hooks and custom World
│   └── pages/             # Page Objects for UI abstraction
├── cucumber.js            # Cucumber configuration
├── tsconfig.json          # TS compiler settings
├── package.json           # Dependencies & scripts
└── reports/               # Cucumber/Allure report outputs
```

---

### Getting Started

#### Prerequisites
- Node.js (>=16)
- npm
- Valid browser installation (Chromium, Firefox, WebKit via Playwright)

#### Setup
```bash
git clone https://github.com/suyashjoshi270786/Proj1.git
cd Proj1
npm install
```

#### Running Tests
- **Run all tests locally**  
  ```bash
  npm test
  ```

- **Run a specific feature**  
  ```bash
  npx cucumber-js MainTest/tests/features/productsTab.feature
  ```

---

### Key Features
| Feature | Benefit |
|--------|---------|
| BDD (Cucumber) | Stakeholder-readable test flow |
| TS + Page Object Model | Clean, DRY, reusable code |
| Hooks & World | Centralized context (e.g., browser, data) |
| Modular test suite | Easy onboarding & minimal coupling |
| Enhanced reporting | HTML/Allure outputs for visibility |
| CI Integration | Automatic test runs on schedule/merge |

---

### Framework Highlights
- **CI Safety**: Each change triggers a clean test run with full report generation  
- **Scalability**: New features can be added by dropping in new page objects, steps, and feature specs  
- **Maintainability**: Consistent naming, TS typing, and modular design lower future development cost  
- **Resilience**: Auto-handled waits, retry logic, and clean hooks minimize flaky failures  
- **Visibility**: Extensive logging built into steps/tests for quick debugging  

---

### CI Integration (GitHub Actions)
- Located in `.github/workflows/playwright-cucumber.yml`  
- Supports:
  - Scheduled daily runs (cron)  
  - Manual workflow dispatch via GitHub UI  
- Artifacts:  
  - HTML test results  
  - Cucumber JSON report for future aggregation  

---

### Future Enhancements (Roadmap)
- Visual regression testing & screenshot baseline comparison  
- Parallel test execution across multiple browser contexts  
- Integration with dashboard (e.g., Allure Server, TestOps)  
- Data-driven testing with parameterized feature suites  

---

### Contact
**Suyash Joshi**, Automation Engineer  
- GitHub: [suyashjoshi270786](https://github.com/suyashjoshi270786)  
- I’m excited to walk you through this framework in detail, discuss architectural choices, or explore enhancements!