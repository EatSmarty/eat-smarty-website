describe("Route Navigation To Home Page", () => {
  // eslint-disable-next-line jest/expect-expect
  it("Should navigate to different routes", () => {
    // Visit the initial page (e.g., your application"s home page)
    // cy.visit("http://localhost:3000/");
    cy.customVisit("https://halalvar.vercel.app/");

    // check url is that true or not
    cy.url().should("include", "/");

    // check title page
    cy.headerTitle("Home");
  });
});

describe("Route Navigation To Additives Page", () => {
  // eslint-disable-next-line jest/expect-expect
  it("Should navigate to different routes", () => {
    // Visit the initial page (e.g., your application"s additives page)
    cy.customVisit("https://halalvar.vercel.app/additives");

    // check url is that true or not
    cy.url().should("include", "/additives");

    // check title page
    cy.headerTitle("Additives");
  });
});

describe("Route Navigation To Scan Page", () => {
  // eslint-disable-next-line jest/expect-expect
  it("Should navigate to different routes", () => {
    // Visit the initial page (e.g., your application"s scan page)
    cy.customVisit("https://halalvar.vercel.app/scan");

    // check url is that true or not
    cy.url().should("include", "/scan");

    // check title page
    cy.headerTitle("Scan");
  });
});

describe("Route Navigation To Setting Page", () => {
  // eslint-disable-next-line jest/expect-expect
  it("Should navigate to different routes", () => {
    // Visit the initial page (e.g., your application"s setting page)
    cy.customVisit("https://halalvar.vercel.app/setting");

    // check url is that true or not
    cy.url().should("include", "/setting");

    // check title page
    cy.headerTitle("Setting");
  });
});