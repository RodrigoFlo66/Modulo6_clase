const {test, expect} = require('@playwright/test');


test('Valida el titulo exacto', async ({page}) => {
    await page.goto('https://wikipedia.org');
    await sleep(3000);
    // Validar el titulo exacto
    await expect(page).toHaveTitle('Wikipedia');
});

test('Valida el titulo con regex', async ({page}) => {
    await page.goto('https://wikipedia.org');

    await sleep(3000);
    // Validar el titulo parcial
    await expect(page).toHaveTitle(/Wiki/);
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}