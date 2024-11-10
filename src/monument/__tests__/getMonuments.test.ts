import getMonuments from "../getMonuments";

describe("Given the getMonuments function", () => {
  describe("When it's called", () => {
    test("Then it should return a monuments list", async () => {
      const monuments = await getMonuments();

      expect(monuments).toBeTruthy();
    }, 10000);
  });
});
