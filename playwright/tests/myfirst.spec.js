const {test, expect} = require('@playwright/test');

test('My first test', async ({page}) => {
    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google');
});

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByText('$29.99').click();
  await expect(page.locator('#item_4_img_link')).toBeVisible();
  await expect(page.locator('#contents_wrapper')).toContainText('$29.99');
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});

