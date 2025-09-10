
describe('Mi primer test case', () => {
    it('prueba de ejemplo para validar titulo', () => {
        cy.visit('https://example.com');
        cy.title().should('include', 'Example Domain');
    });
});
