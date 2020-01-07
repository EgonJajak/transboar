//index.spec.js
import { render } from "@testing-library/svelte";
import { getCardsByText } from "./index";

describe("database index", () => {
  test("Should find Hills card with `hills` query", () => {
    let cards = getCardsByText('hills').map(card => card.name);

    expect(cards).toContain('hills');
  });
});
