import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@app/store/store";
import Page from "../page";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {},
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
