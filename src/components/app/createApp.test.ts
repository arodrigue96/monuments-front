import createApp from "./createApp";

const screen = document.createElement("div");

afterEach(() => {
  screen.innerHTML = "";
});

describe("Given the app component", () => {
  describe("When rendered", () => {
    test("Then it should show the main header in a header", () => {
      const app = createApp();
      screen.appendChild(app);

      const header = screen.querySelector("header");

      expect(header).toBeDefined();
    });

    test("Then it should show monuments card list", () => {
      const app = createApp();
      screen.appendChild(app);

      const monumentCardsList = screen.querySelector("ul");

      expect(monumentCardsList).toBeDefined();
    });
  });
});
