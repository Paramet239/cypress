describe("Login & Logout", () => {
  it("Visit first time find website", () => {
    cy.visit("opensource-demo.orangehrmlive.com");
    cy.title().should("eq", "OrangeHRM");
  });

  it("Login success", () => {
    cy.visit("opensource-demo.orangehrmlive.com");
    cy.get('.oxd-input[name="username"]').type("TEST");
  });
});
