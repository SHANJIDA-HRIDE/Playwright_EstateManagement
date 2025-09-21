const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class AddEditDeleteTowerPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;

        // Tower locators
        this.addTowerButton = page.getByRole('button', { name: 'Add Tower' });
        this.towerNameInput = page.locator('input[name="tower_name"]');
        this.descriptionInput = page.locator('textarea[name="description"]');
        this.numFloorsInput = page.locator('input[name="num_floors"]');
        this.numUnitsInput = page.locator('input[name="num_units"]');
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.okButton = page.getByRole('button', { name: 'OK' });
        this.towerCreatedMessage = page.locator('p:has-text("Tower created successfully.")');
        this.updatedSuccessMessage = page.locator('p:has-text("Updated successfully")');
        this.unitsPerFloorDifferentRadio = page.locator('input[id="units_per_floor-Different"]');
        this.addIcon = page.locator('svg.text-black');
        this.floorEditInput0 = page.locator('input[name="floor_edit_0"]');
        this.unitsEditInput0 = page.locator('input[name="units_edit_0"]');




    }

    async addAndEditTower(
        towerName, description, numFloors, numUnits,
        updatedTowerName, updatedDescription, updatedNumFloors
    ) {
        // Add Tower
        await this.addTowerButton.click();
        await this.towerNameInput.waitFor({ state: 'visible' });

        await this.towerNameInput.fill(`${towerName}`);
        await this.descriptionInput.fill(description);
        await this.numFloorsInput.fill(`${numFloors}`);
        await this.numUnitsInput.fill(`${numUnits}`);
        await this.saveButton.click();

        await expect(this.towerCreatedMessage).toBeVisible();
        await this.okButton.click();

        // Get last added tower's ID
        const editLink = this.page.locator('a[href*="/EditTower/"]').last();
        await editLink.waitFor({ state: 'visible' });
        const href = await editLink.getAttribute('href');
        const towerId = href.split('/').pop();
        console.log('Newly created Tower ID:', towerId);

        // Edit Tower (Name, Description, Floors)
        const editButton = this.page.locator(`a[href*="/EditTower/${towerId}"]`);
        await editButton.click();

        await this.towerNameInput.waitFor({ state: 'visible' });
        await this.towerNameInput.fill(updatedTowerName);
        await this.descriptionInput.fill(updatedDescription);
        await this.numFloorsInput.fill(`${updatedNumFloors}`);
        await this.saveButton.click();

        await expect(this.updatedSuccessMessage).toBeVisible();
        await this.okButton.click();
        console.log(`Tower updated to: ${updatedTowerName}, Floors: ${updatedNumFloors}`);

        return towerId;
    }

async addTowerDifferentUnit(towerName, description, numFloors, numUnits, floor, unit) {
    await this.addTowerButton.click();
    await this.towerNameInput.waitFor({ state: 'visible' });

    await this.towerNameInput.fill(towerName);
    await this.descriptionInput.fill(description);
    await this.numFloorsInput.fill(`${numFloors}`);
    await this.numUnitsInput.fill(`${numUnits}`);

    // Select "Different" option
    await this.unitsPerFloorDifferentRadio.check();
    await this.addIcon.click(); // Click the add icon to generate input fields

    // Fill just one floor and one unit (static way)
    await this.floorEditInput0.fill(`${floor}`);
    await this.unitsEditInput0.fill(`${unit}`);

    // Save tower
    await this.saveButton.click();
    await expect(this.towerCreatedMessage).toBeVisible();
    await this.okButton.click();

    console.log(`Tower '${towerName}' created with floor ${floor} and ${unit} units.`);
}
}

module.exports = { AddEditDeleteTowerPage };
