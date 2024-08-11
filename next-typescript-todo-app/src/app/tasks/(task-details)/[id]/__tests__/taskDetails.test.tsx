import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { TaskDetails } from "../TaskDetails";
import { Provider } from "react-redux";
import { store } from "@app/store/store";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: () => jest.fn(),
    };
  },
}));

describe("Render TaskDetails", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("render component", () => {
    const form = render(
      <Provider store={store}>
        <TaskDetails taskId={1} />
      </Provider>,
    );
    expect(form).toBeDefined();
  });

  it("Task data", async () => {});
});
