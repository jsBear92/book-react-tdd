describe('Book Application', () => {
    it('Visits the Book', () => {
        cy.visit('http://localhost:3000/');
        cy.get('h2[data-test="heading"]').contains('Book')
    })
})