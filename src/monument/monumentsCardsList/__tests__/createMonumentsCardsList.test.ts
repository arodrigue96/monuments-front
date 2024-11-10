import { type Monument } from "../../types";
import createMonumentCardsList from "../createMonumentsCardsList";

describe("Given the monuments card list component", () => {
  describe("When rendered", () => {
    test("Thent it should show 'Angkor Wat' and 'Colosseum' in a heading", () => {
      const monuments: Monument[] = [
        {
          id: "1",
          name: "Angkor Wat",
          description: "",
          imageUrl: "",
          country: "Cambodja",
          city: "Siem Reap",
        },
        {
          id: "2",
          name: "Colosseum",
          description: "",
          imageUrl: "",
          country: "Italy",
          city: "Rome",
        },
      ];
      const expectedAngkorWatTitle = /Angkor Wat/i;
      const expectedColosseumTitle = /Colosseum/i;

      const screen = document.createElement("div");

      const monumentsCardList = createMonumentCardsList(monuments);
      screen.appendChild(monumentsCardList);

      const titles = screen.querySelectorAll("h2");

      expect(titles[0].textContent).toMatch(expectedAngkorWatTitle);
      expect(titles[1].textContent).toMatch(expectedColosseumTitle);
    });
  });
});
