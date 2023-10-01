describe('Route Navigation To Home Page', () => {
  it('Should navigate to different routes', () => {
    // Visit the initial page (e.g., your application's home page)
    // cy.visit('http://localhost:3000/');
    cy.customVisit('https://eatsmarty.github.io/eat-smarty-website');

    // Perform actions that trigger route navigation
    // Click a link to navigate to the 'home' page
    // cy.clickNavigate('[data-testid="naviagate-to-home"]')

    // check title page
    cy.headerTitle('Home')
  });
});

describe('Route Navigation To Additives Page', () => {
  it('Should navigate to different routes', () => {
    // Visit the initial page (e.g., your application's additives page)
    cy.customVisit('https://eatsmarty.github.io/eat-smarty-website/additives');

    // Perform actions that trigger route navigation
    // Click a link to navigate to the 'additives' page
    cy.clickNavigate('[data-testid="naviagate-to-additives"]')

    // check title page
    cy.headerTitle('Additives')
  });
});

describe('Route Navigation To Scan Page', () => {
  it('Should navigate to different routes', () => {
    // Visit the initial page (e.g., your application's scan page)
    cy.customVisit('https://eatsmarty.github.io/eat-smarty-website//scan');

    // Perform actions that trigger route navigation
    // Click a link to navigate to the 'scan' page
    cy.clickNavigate('[data-testid="naviagate-to-scan"]')

    // check title page
    cy.headerTitle('Scan')
  });
});

describe('Route Navigation To Setting Page', () => {
  it('Should navigate to different routes', () => {
    // Visit the initial page (e.g., your application's setting page)
    cy.customVisit('https://eatsmarty.github.io/eat-smarty-website/setting');

    // Perform actions that trigger route navigation
    // Click a link to navigate to the 'setting' page
    cy.clickNavigate('[data-testid="naviagate-to-setting"]')

    // check title page
    cy.headerTitle('Setting')
  });
});