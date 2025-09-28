import BasePage from "./commonFeatures/basePage";

const header = '[data-cy="header-navbar"]';
const dashboardButton = "button.MuiButtonBase-root";

class LoginPage extends BasePage {
  setToken() {
    const token = Cypress.env("TOKEN");
    const loggedUser = Cypress.env("USER");

    cy.window().then((win) => {
      win.localStorage.setItem("token", token);
      win.localStorage.setItem("loggedUser", loggedUser);
    });
  }

  verifyDashboardLoaded() {
    this.verifyElementContains(dashboardButton, "Dashboard");
  }

  verifyHeader() {
    cy.get(header).within(() => {
      this.verifyText("h1", "Mage Guard");
    });
  }
}

export default new LoginPage();
