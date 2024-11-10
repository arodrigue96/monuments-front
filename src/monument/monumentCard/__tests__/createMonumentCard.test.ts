import getMonuments from "../../getMonuments";
import createMonumentCard from "../createMonumentCard";

describe("Given the monument card component", () => {
  describe("Whent rendered", () => {
    test("Then it should show Colisseum in a heading", async () => {
      const { monuments } = await getMonuments();
      const screen = document.createElement("div");

      const card = createMonumentCard(monuments[1]);
      screen.appendChild(card);

      const cardTitle = screen.querySelector("h2");

      expect(cardTitle?.textContent).toBe("Colosseum");
    });
  });
});
