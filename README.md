# MageGuard Cypress Automation

This repository contains Cypress end-to-end (E2E) automation tests for the **MageGuard** application.

---

## 🚀 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 16.x recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/mageguard.git
cd mageguard
npm install
```

## Environment Variables

This project uses an environment file for user authentication and token management.
Create a file named cypress.env.json in the project root with the following structure:

```bash
{
  "USER": "sqa1",
  "TOKEN": "your-auth-token-here"
}
```

---

## ▶️ Running Tests

### Open Cypress Test Runner (GUI mode)

```bash
npm run cy:open
```

### Run tests in headless mode

```bash
npm run cy:run
```

### Run tests in Chrome (headed)

```bash
npm run cy:run:headed
```

### Run a specific test file

```bash
npm run cy:spec -- --spec "cypress/e2e/monitor.spec.js"
```

---

## 📂 Project Structure

```
mageguard/
├── cypress/
│   ├── e2e/            # Test files
│   ├── fixtures/       # Test data
│   ├── pageObjects/    # Page Object Model classes
│   └── support/        # Custom commands, helpers
├── cypress.config.js   # Cypress config
├── cypress.env.json    # Environment variables (not tracked in git)
├── package.json
└── README.md
```

---
