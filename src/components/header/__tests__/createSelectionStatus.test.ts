import createHeader, { createSelectionStatus } from "../createHeader";

describe("Given the createSelectionStatus function", () => {
  describe("When it's called and the header is rendered", () => {
    test("Then it should add 'anchor-container--current-page' class into Monuments selection menu container", () => {
      const screen = document.createElement("div");
      const header = createHeader();
      screen.appendChild(header);

      createSelectionStatus();

      const anchorContainer = screen.querySelector(
        ".anchor-container--current-page",
      );

      expect(anchorContainer).toBeDefined();
    });
  });
});
