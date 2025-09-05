const {test, expect} = require('@playwright/test');


test('Valida el titulo exacto', async ({page}) => {
    await page.goto('https://example.com');

    // Validar el titulo exacto
    await expect(page).toHaveTitle('Example Domain');
});

test('Valida el titulo con regex', async ({page}) => {
    await page.goto('https://example.com');

    // Validar el titulo parcial
    await expect(page).toHaveTitle(/Example/);
});
