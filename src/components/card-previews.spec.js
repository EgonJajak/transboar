import { render } from "@testing-library/svelte";
import CardPreviwes from "./card-previews.svelte";
import { getCardsByText } from "../database";

describe("card previews component", () => {
  class ObserveMock {
    observe() {
      return null;
    }
    unobserve() {
      return null;
    }
  }

  beforeEach(() => {
    window.IntersectionObserver = ObserveMock;
  });

  test("It should show Hills card", () => {
    let cards = getCardsByText("hills");
    const { container } = render(CardPreviwes, { cards });

    const previewElements = container.querySelectorAll('[data-test-card-previews="link"]');
    expect(previewElements.length).toEqual(1);

    const hillsPreview = previewElements[0].querySelector('img');
    expect(hillsPreview.getAttribute('alt')).toEqual('KOPCE');
  });
});
