import createHeader from "./createHeader";

describe("Given the header component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Monuments' inside a heading", () => {
      const screen = document.createElement("div");
      const expectedTitle = /Monuments/i;

      const header = createHeader();
      screen.appendChild(header);
      const title = screen.querySelector("h1");

      expect(title).not.toBeNull();
      expect(title?.textContent).toMatch(expectedTitle);
    });
  });
});
