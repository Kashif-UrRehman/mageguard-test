class BasePage {
  waitForElement(selector, timeout = 10000) {
    cy.get(selector, { timeout }).should("be.visible");
  }

  clickButton(label) {
    cy.contains("button", label).click();
  }
  getInputFieldAndTypeValue(inputFieldElem, value) {
    cy.get(inputFieldElem).clear();
    if (value) {
      cy.get(inputFieldElem).type(value);
    } else {
      cy.get(inputFieldElem).blur();
    }
  }

  selectDropdownByValue(dropdownSelector, value) {
    cy.get(dropdownSelector).click();
    cy.get(`li[data-value="${value}"]`).click();
  }

  selectDropdownByText(dropdownSelector, optionText) {
    cy.get(dropdownSelector).click();
    cy.contains('li', optionText).click();
  }

  verifyToastMessage(selector, expectedMessage) {
    cy.get(selector, { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        const cleanText = text.trim().replace(/\s+/g, ' ');
        expect(cleanText).to.contains(expectedMessage);
      });
  }

  clickItemByLabel(selector, label) {
    cy.contains(selector, label, { timeout: 10000 })
      .should('be.visible')
      .click();
  }

  verifyValidationError(expectedMessage) {
    cy.get("p.MuiFormHelperText-root", { timeout: 10000 })
      .should("exist")
      .invoke("text")
      .should("contain", expectedMessage);
  }


}

export default BasePage;
