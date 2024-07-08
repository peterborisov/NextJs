import { render } from "@testing-library/react";
import Page from "../page";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("Render Page", () => {
  it("render component", () => {
    const wrapper = render(
      <Page
        params={{
          id: 1,
        }}
      />,
    );
    expect(wrapper).toBeDefined();
  });
});
