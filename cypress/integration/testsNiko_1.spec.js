describe('', () => {

//Log in

  it('', () => {
    cy.visit('http://localhost:1667/#/');
    cy.get(':nth-child(2) > .nav-link')
      .click();
    cy.get(':nth-child(1) > .form-control')
      .type('Cypress@mail.com');
    cy.get(':nth-child(2) > .form-control')
      .type('12345Qwert!');
    cy.get('.btn')
      .click();
    cy.get('.navbar')
      .contains('Cypress')
      .should('exist');
  })
})

//Sign Up & log out

  let user;

  before(() => {
    cy.task('newUser').then((newUser) => {
      user = newUser;
    });
  });

  it('', () => {
    cy.visit('http://localhost:1667/#/');
    cy.get(':nth-child(3) > .nav-link')
      .click();
    cy.get(':nth-child(1) > .form-control')
      .type(user.username);
      cy.get(':nth-child(2) > .form-control')
      .type(user.email);
      cy.get(':nth-child(3) > .form-control')
      .type(user.password);
      cy.get('.btn')
        .click();

      cy.get('.swal-text')
        .should('contain', 'Your registration was successful!');
      cy.get('.swal-button')
        .click();

      cy.get(':nth-child(4) > .nav-link')
        .should('contain', user.username);

      cy.get(':nth-child(3) > .nav-link')
        .click();
      cy.get(':nth-child(1) > .form-control')
        .should('exist');
      cy.get(':nth-child(2) > .form-control')
        .should('exist');
      cy.get(':nth-child(3) > .form-control')
        .should('exist');
      cy.get(':nth-child(4) > .form-control')
        .should('exist');
      cy.get(':nth-child(5) > .form-control')
        .should('exist');
      cy.get('.btn-outline-danger')
        .click();
  })
