import LoginPage from '../../pageObjects/loginPage';
import MonitorPage from '../../pageObjects/monitorPage';

describe('Monitor Module', () => {

    let testData;

    before(() => {
        // Load fixture once before tests
        cy.fixture('monitorData').then((data) => {
            testData = data;
        });
    });
    beforeEach(() => {
        cy.visit('/');
        LoginPage.setToken();
        cy.contains('Dashboard', { timeout: 10000 }).should('be.visible');

    });

    it('should add new monitor', () => {
        MonitorPage.clickAddMonitor();
        MonitorPage.fillMonitorForm(testData.validMonitor);
        MonitorPage.addTag(testData.tag.tagName, testData.tag.color, testData.tag.tagValue)
        MonitorPage.saveMonitor();
        MonitorPage.verifyMessage('Monitor added successfully')
        cy.contains(testData.validMonitor.name, { timeout: 10000 }).should('exist');
    });

    it('should add monitor with same name negative test', () => {
        MonitorPage.clickAddMonitor();
        MonitorPage.fillMonitorForm(testData.validMonitor);
        MonitorPage.saveMonitor();
        MonitorPage.verifyMessage('Monitor name already exist')
    });



    it('should edit monitor name', () => {
        MonitorPage.editMonitor(testData.validMonitor.name, testData.updatedMonitor.name);
        MonitorPage.verifyMessage('Monitor updated successfully')
        cy.contains(testData.updatedMonitor.name, { timeout: 10000 }).should('exist');
    });

    it("should not allow empty name when editing a monitor", () => {
    MonitorPage.editMonitor(testData.updatedMonitor.name, ""); 
    // Verify validation error
    MonitorPage.VerifyError("Name is required");

  });

    it('should delete monitor', () => {
        MonitorPage.deleteMonitor(testData.updatedMonitor.name);
    });
});


