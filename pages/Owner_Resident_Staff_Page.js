const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class Owner_Resident_Staff_Page extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;

    // Add Owner locators
    this.unitOwnerButton = page.getByRole('button', { name: 'Unit Owner' });
    this.addOwnerButton = page.getByRole('button', { name: 'Add Owner' });
    this.addNewCommMemberButton = page.getByRole('button', { name: '+ Add New Comm Member' });
    this.fullNameInput = page.locator('input[name="full_name"]');
    this.generalEmailInput = page.locator('input[name="general_email"]');
    this.generalContactInput = page.locator('input[name="general_contact"]');
    this.nextButton = page.getByRole('button', { name: 'Next' });
    this.loginEmailRadio = page.locator('input[id="login-email"]');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.ownershipPercentageInput0 = page.locator('input[name="owners.0.ownershipPercentage"]');
    this.dateOfOwnershipInput0 = page.locator('input[name="owners.0.dateofOwnership"]');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.okButton = page.getByRole('button', { name: 'OK' });
    this.ownerCreatedMessage = page.locator('p:has-text("Owner created successfully")');

    // Change Ownership locators
    this.changeOwnershipButton = page.getByRole('button', { name: 'Change Ownership' });
    this.addButton = page.locator('button:has(svg)');
    this.addNewCompanyButton = page.getByRole('button', { name: '+ Add New Company' });
    this.companyNameInput = page.locator('input[name="company_name"]');

    //Add Resident locators
    this.residentsButton = page.getByRole('button', { name: 'Residents' });
    this.occupiedStatusRadio = page.locator('input[name="status"][value="Occupied"]');
    this.addResidentButton = page.getByRole('button', { name: 'Add Resident' });
   this.residentAddedMessage = page.locator('p:has-text("Resident added successfully!")');


    // Remove Resident locators
    this.firstHeaderCheckbox = page.locator('thead tr:first-child th input[type="checkbox"]');
    this.removeButton = page.getByRole('button', { name: 'Remove' });
    this.residentDeletedMessage = page.locator('p:has-text("1 Residents deleted successfully.")');

    // Unit Staff locators
    this.unitStaffBtn = page.getByRole('button', { name: 'Unit Staff' });
    this.addUnitStaffBtn = page.getByRole('button', { name: 'Add Unit Staff' });
    this.unitStaffAddedSuccessMsg = page.locator('p:text("Unit staff added successfully!")');
    this.selectAllCheckbox = page.locator('thead input[type="checkbox"]').first();
    this.staffRemovedSuccessMsg = page.locator('p:text("Staff removed successfully")');


    // Unit General Info
    this.editSpan = page.locator('span:has-text("Edit")');
    this.areaInput = page.locator('input[name="area"]');
    this.numberOfRoomsInput = page.locator('input[name="number_of_rooms"]');
    this.numberOfBathroomsInput = page.locator('input[name="number_of_bathrooms"]');
    this.numberOfBalconiesInput = page.locator('input[name="number_of_balconies"]');
    this.primaryContactButton = page.getByRole('button', { name: 'Primary Contact' });
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.primaryRelationshipInput = page.locator('input[name="primary_relationship"]');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.unitUpdateSuccessMessage = page.locator('p:has-text("Unit Update successful")');
  }

  /** pick a single random unit id and return its locator */
  async getRandomUnitLink() {
    const min = 11096;
    const max = 12395;
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`🔗 Using unit-details/${randomId}`);
    return this.page.locator(`a[href="/unit-details/${randomId}"]`);
  }

  async getAvailableLink() {
    const min = 6365;
    const max = 6370;
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`🔗 Using unit-details/${randomId}`);
    return this.page.locator(`a[href="/unit-details/${randomId}"]`);
  }

  async addNewOwner(fullName, email, contact) {
    // --- pick a random link ---
    const unitDetailsLink = await this.getRandomUnitLink();
    await unitDetailsLink.click();

    await this.unitOwnerButton.click();
    await this.addOwnerButton.click();
    await this.addNewCommMemberButton.click();

    await this.fullNameInput.waitFor({ state: 'visible' });
    await this.fullNameInput.fill(fullName);
    await this.generalEmailInput.fill(email);
    await this.generalContactInput.fill(contact);
    await this.nextButton.click();
    await this.loginEmailRadio.check();
    await this.submitButton.click();

    await this.ownershipPercentageInput0.fill('100');

    await this.dateOfOwnershipInput0.click();
    try {
      await this.dateOfOwnershipInput0.fill('2025-08-01');   // yyyy-mm-dd
    } catch {
      await this.dateOfOwnershipInput0.evaluate(el => el.value = '2025-08-01');
    }

    await this.saveButton.click();
    await expect(this.ownerCreatedMessage).toBeVisible();
    await this.okButton.click();
  }



     async addNewResident_removeResident(fullName, email, contact) {
    // --- pick a random link ---
    const unitDetailsLink = await this.getAvailableLink();
    await unitDetailsLink.click();
    await this.residentsButton.click();
    await this.occupiedStatusRadio.check();
    await this.addResidentButton.click();
    await this.fullNameInput.waitFor({ state: 'visible' });
    await this.fullNameInput.fill(fullName);
    await this.generalEmailInput.fill(email);
    await this.generalContactInput.fill(contact);
    await this.nextButton.click();
    await this.nextButton.click();
    //await this.loginEmailRadio.check();
    await this.submitButton.click();
    await expect(this.residentAddedMessage).toBeVisible();
    await this.okButton.click();
    await this.firstHeaderCheckbox.check();
    await this.removeButton.click();
    await expect(this.residentDeletedMessage).toBeVisible();
    await this.okButton.click();      
}

     async addNewStaff_removeStaff(fullName, email, contact) {
    // --- pick a random link ---
    const unitDetailsLink = await this.getAvailableLink();
    await unitDetailsLink.click();  
    await this.unitStaffBtn.click();
    await this.addUnitStaffBtn.click();
    await this.fullNameInput.waitFor({ state: 'visible' });
    await this.fullNameInput.fill(fullName);
    await this.generalEmailInput.fill(email);
    await this.generalContactInput.fill(contact);
    await this.nextButton.click();
    await this.nextButton.click();
    //await this.loginEmailRadio.check();
    await this.submitButton.click();
    await expect(this.unitStaffAddedSuccessMsg).toBeVisible();
    await this.okButton.click();
    await this.selectAllCheckbox.check();
    await this.removeButton.click();
    await expect(this.staffRemovedSuccessMsg).toBeVisible();
    await this.okButton.click();   
}

     async addUnitGeneralInfo(area, numberOfRooms, numberOfBathrooms, numberOfBalconies, primaryRelationship) {
    // --- pick a random link ---
    const unitDetailsLink = await this.getAvailableLink();
    await unitDetailsLink.click();  
    await this.editSpan.click(); 
    await this.areaInput.fill(area.toString());
    await this.numberOfRoomsInput.fill(numberOfRooms.toString());
    await this.numberOfBathroomsInput.fill(numberOfBathrooms.toString());
    await this.numberOfBalconiesInput.fill(numberOfBalconies.toString());
    await this.primaryContactButton.click();
    await this.addButton.click();
    await this.primaryRelationshipInput.fill(primaryRelationship);
    await this.saveButton.click();
    await expect(this.unitUpdateSuccessMessage).toBeVisible();
    await this.okButton.click();
}


}

module.exports = { Owner_Resident_Staff_Page };
