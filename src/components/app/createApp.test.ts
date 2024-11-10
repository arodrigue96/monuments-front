import createApp from "./createApp";

const screen = document.createElement("div");

afterEach(() => {
  screen.innerHTML = "";
});

describe("Given the app component", () => {
  describe("When rendered", () => {
    test("Then it should show the 'Monuments' inside a heading", () => {
      const expectedTitle = /Monuments/i;
      const app = createApp();
      screen.appendChild(app);

      const header = screen.querySelector("h1");
      const title = header?.textContent;

      expect(title).toMatch(expectedTitle);
    });

    test("Then it should show the 'Monuments' and 'Add monuments inside a anchor each'", () => {
      const expectedMonumentsSelectionText = /Monuments/i;
      const expectedAddMonumentSelectionText = /Add Monument/i;

      const app = createApp();
      screen.appendChild(app);

      const navigationMenu = screen.querySelectorAll(
        ".selection-menu__anchor-container",
      );

      const monumentsSelection = navigationMenu[0];
      const addMonumentsSelection = navigationMenu[1];

      expect(monumentsSelection.textContent).toMatch(
        expectedMonumentsSelectionText,
      );
      expect(addMonumentsSelection.textContent).toMatch(
        expectedAddMonumentSelectionText,
      );
    });
  });
});
