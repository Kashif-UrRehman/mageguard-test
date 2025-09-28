import LoginPage from "../../pageObjects/loginPage";

describe("Login with token", () => {
  it("should access dashboard with stored token", () => {
    cy.visit("/");
    LoginPage.setToken();

    LoginPage.verifyDashboardLoaded();
    LoginPage.verifyHeader();
  });
});
