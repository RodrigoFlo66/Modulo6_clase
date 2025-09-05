const {test, expect} = require('@playwright/test');

const casos = [
    { name: 'Caso 1', url: 'https://wikipedia.org', title: 'Wikipedia' },
    { name: 'Caso 2', url: 'https://wikipedia.org', title: /Wiki/ },
];

for (const { name, url, title } of casos) {
    test(`Valida el titulo correcto de ${name}`, async ({ page }) => {
        await page.goto(url);
        await sleep(3000);
        // Validar el titulo
        await expect(page).toHaveTitle(title);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
