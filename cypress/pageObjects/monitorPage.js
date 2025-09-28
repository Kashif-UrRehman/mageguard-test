import BasePage from "./commonFeatures/basePage";

const typeField = '[data-cy="MonitorType-MonitorType"] .MuiSelect-select'
const nameField = '[data-cy="nameUser-AddNewMonitor"] [name="name"]';
const urlField = 'input[name="url"]';
const unitField = '[data-cy="heartbeatUnitUser-AddNewMonitor"] .MuiSelect-select';
const heartbeatField = 'input[name="heartbeat"]';
const retriesField = 'input[name="retries"]';
const resendField = 'input[name="resendTimes"]';
const statusCodeField = '[data-cy="acceptedStatus-AcceptedCodes"] .MuiSelect-select';
const tagNameField = '[data-cy="name-AddTag"] input[name="name"]';
const tagValueField = '[data-cy="dValue-AddTag"] input[name="dValue"]';
const tagColor = '[data-cy="color-AddTag"] .MuiSelect-select';
const selectPaltform = '[data-cy="addPaltform"] .MuiSelect-select'
const monitors = 'p.MuiTypography-root'
const toast = 'div.Toastify__toast-body'

class MonitorPage extends BasePage {
  clickAddMonitor() {
    this.clickButton("Add New Monitor")
  }

  fillMonitorForm({ type, name, url, unit, interval, retries, resend, statusCode }) {
    this.selectDropdownByValue(typeField, type)
    this.getInputFieldAndTypeValue(nameField, name)
    this.getInputFieldAndTypeValue(urlField, url)
    this.selectDropdownByValue(unitField, unit);
    this.getInputFieldAndTypeValue(heartbeatField, interval)
    this.getInputFieldAndTypeValue(retriesField, retries)
    this.getInputFieldAndTypeValue(resendField, resend)
    this.selectDropdownByValue(statusCodeField, statusCode)
    this.selectDropdownByText(selectPaltform, "test platform 1")

  }

  addTag(tagName, color, tagValue) {
    this.clickButton("Add Tags")
    this.getInputFieldAndTypeValue(tagNameField, tagName)
    this.selectDropdownByText(tagColor, color)
    this.getInputFieldAndTypeValue(tagValueField, tagValue)
    this.clickButton("add")
  }

  saveMonitor() {
    this.clickButton("save")
  }

  verifyMessage(message) {
    this.waitForElement(toast)
    this.verifyToastMessage(toast, message);
  }

  editMonitor(oldName, newName) {
    this.clickItemByLabel(monitors, oldName);
    this.clickButton("Edit")
    this.getInputFieldAndTypeValue(nameField, newName)
    this.clickButton("Update")
  }

  VerifyError(error) {
    this.verifyValidationError(error);

  }


  deleteMonitor(name) {
    this.clickItemByLabel(monitors, name);
    this.clickButton("Delete")
    this.clickButton("Yes")
    this.verifyMessage('Monitor deleted successfully')
  }

}

export default new MonitorPage();

