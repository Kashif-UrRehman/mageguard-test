class LoginPage {
  setToken() {
    const token = Cypress.env("TOKEN");
    const loggedUser = Cypress.env("USER");

    cy.window().then((win) => {
      win.localStorage.setItem("token", token);
      win.localStorage.setItem("loggedUser", loggedUser);
    });
  }

  verifyDashboardLoaded() {
    cy.contains("Dashboard").should("be.visible");
  }
}

export default new LoginPage();
