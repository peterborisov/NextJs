import { render } from "@testing-library/react";
import Page from "../page";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
  useSearchParams: () => ({
    get: () => {},
  }),
}));

describe("Render Page", () => {
  it("render component", () => {
    const wrapper = render(<Page />);
    expect(wrapper).toBeDefined();
  });
});
