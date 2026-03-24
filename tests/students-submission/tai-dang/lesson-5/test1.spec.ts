import { test, expect, Page } from '@playwright/test';

let gender = "Male";
let hobbies = "Traveling";
let interest = "Music";
let country = "United Kingdom";

//1.
test('Register Page Test', async ({ page }) => {
  await test.step('Go to Register Page', async () => {
    await goToRegisterPage(page);
  });

  await test.step('Input information and verify in table', async () => {
    await fillRegistrationForm(page);
  });

  await test.step('Verify information added', async () => {
    await verifyTableData(page);
  });
  await page.close();
});

async function goToRegisterPage(page: Page) {
  await page.goto('https://material.playwrightvn.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Bài học 1: Register Page (có đủ các element)' }).click();

  // Expects page to have a heading with the name of User Registration.
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
}

async function fillRegistrationForm(page: Page) {
  await page.locator('#username').fill('Nguyen');
  await page.locator('#email').fill('taidang@gmail.com');
  await page.locator(`//label[text()='${gender}']/preceding-sibling::input[@name='gender']`).check();
  await page.locator(`//label[text()='${hobbies}']/preceding-sibling::input[@name='hobbies']`).check();
  await page.locator(`//select[@name='interests']`).selectOption({ label: interest });
  await page.locator(`//select[@name='country']`).selectOption({ label: country });
  await page.locator('#dob').fill('2026-06-07');
  await page.locator('#profile').setInputFiles('tests/students-submission/tai-dang/lesson-5/a.png');
  await page.locator('//textarea[@name="bio"]').fill('I am a an automation QA engineer with a passion for web development.');
  // Interact with Rate Us slider - set to 7
  await page.locator('#rating').fill('7');
  // Interact with Favorite Color - set to #ee2f2f
  await page.locator('#favcolor').fill('#ee2f2f');
  await page.locator('#newsletter').check();
  await page.locator('//span[@class="slider round"]').click();

  // Interact with Star Rating - set to 5 stars by clicking on the right edge
  const starRating = page.locator('#starRating');
  const starBox = await starRating.boundingBox();
  if (starBox) {
    await page.mouse.click(starBox.x + starBox.width - 2, starBox.y + starBox.height / 2);
  }

  await page.locator('//button[@type="submit"]').click();
}

async function verifyTableData(page: Page) {
  // Verify information in table
  await expect(page.locator('table')).toBeVisible();

  // Get the table row with username "Nguyen"
  const tableRow = page.locator('//td[contains(text(), "Nguyen")]/parent::tr');

  // Extract data dynamically from table cells
  const sttText = await tableRow.locator('//td[1]').textContent();
  const usernameText = await tableRow.locator('//td[2]').textContent();
  const emailText = await tableRow.locator('//td[3]').textContent();
  const informationText = await tableRow.locator('//td[4]').textContent();

  // Log extracted data
  console.log('=== Extracted Table Data ===');
  console.log(`STT: ${sttText}}`);
  console.log(`Username: ${usernameText}`);
  console.log(`Email: ${emailText}`);
  console.log(`Information:\n${informationText}`);

  // Verify data is not empty
  expect(usernameText).not.toBe('');
  expect(emailText).not.toBe('');
  expect(informationText).not.toBe('');

  // Verify specific fields exist in the information
  expect(informationText).toContain(`Gender: ${gender.toLowerCase()}`);
  expect(informationText).toContain(`Hobbies: ${hobbies.toLowerCase()}`);
  expect(informationText).toContain(`Country: ${country === "United Kingdom" ? "uk" : country}`);
  expect(informationText).toContain('Rating:');
  expect(informationText).toContain('Favorite Color:');
  expect(informationText).toContain('Star Rating:');
}
