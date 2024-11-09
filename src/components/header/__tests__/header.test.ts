import createHeader from "../createHeader";

const screen = document.createElement("div");
afterEach(() => {
  screen.innerHTML = "";
});

describe("Given the header component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Monuments' inside a heading", () => {
      const expectedTitle = /Monuments/i;

      const header = createHeader();
      screen.appendChild(header);
      const title = screen.querySelector("h1");

      expect(title).not.toBeNull();
      expect(title?.textContent).toMatch(expectedTitle);
    });

    test("Then it should show a menu selection with 'Monuments' and 'Add Monument' inside a anchor each", () => {
      const expectedAddMonumentAnchorText = /Add Monument/i;
      const expectedMonumentsAnchorText = /Monuments/i;

      const header = createHeader();
      screen.appendChild(header);

      const menuSelectionContent = screen.querySelectorAll(
        ".selection-menu__anchor-container",
      );

      const monumentsAnchor = menuSelectionContent[0];
      const addMonumentAnchor = menuSelectionContent[1];

      expect(monumentsAnchor.textContent).toMatch(expectedMonumentsAnchorText);
      expect(addMonumentAnchor.textContent).toMatch(
        expectedAddMonumentAnchorText,
      );
    });
  });
});
