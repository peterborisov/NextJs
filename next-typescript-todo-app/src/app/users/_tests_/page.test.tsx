import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Page from "../page";
import { store } from "@app/store/store";

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
    const wrapper = render(
      <Provider store={store}>
        <Page />
      </Provider>,
    );
    expect(wrapper).toBeDefined();
  });
});
