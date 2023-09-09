describe('Route Navigation To Home Page', () => {
  it('Should navigate to different routes', () => {
    // Visit the initial page (e.g., your application's home page)
    cy.visit('http://localhost:3000/');

    // Perform actions that trigger route navigation
    cy.get('[data-testid="naviagate-to-home"]').click(); // Click a link to navigate to the 'home' page

  });
});

describe('Route Navigation To Additives Page', () => {
  it('Should navigate to different routes', () => {
    // Visit the initial page (e.g., your application's additives page)
    cy.visit('http://localhost:3000/additives');

    // Perform actions that trigger route navigation
    cy.get('[data-testid="naviagate-to-additives"]').click(); // Click a link to navigate to the 'additives' page

  });
});

describe('Route Navigation To Scan Page', () => {
  it('Should navigate to different routes', () => {
    // Visit the initial page (e.g., your application's scan page)
    cy.visit('http://localhost:3000/scan');

    // Perform actions that trigger route navigation
    cy.get('[data-testid="naviagate-to-scan"]').click(); // Click a link to navigate to the 'scan' page

  });
});

describe('Route Navigation To Setting Page', () => {
  it('Should navigate to different routes', () => {
    // Visit the initial page (e.g., your application's setting page)
    cy.visit('http://localhost:3000/setting');

    // Perform actions that trigger route navigation
    cy.get('[data-testid="naviagate-to-setting"]').click(); // Click a link to navigate to the 'setting' page

  });
});