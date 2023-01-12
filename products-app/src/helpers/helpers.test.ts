import { buildUrl } from "./buildUrl";

describe("Helpers", () => {
  test("build url", () => {
    const url = buildUrl("https://localhost:3000", "test=test");
    const expectedUrl = "https://localhost:3000?test=test";

    expect(url).toEqual(expectedUrl);
  });
});
