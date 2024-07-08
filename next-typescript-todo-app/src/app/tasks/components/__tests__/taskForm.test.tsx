import { render } from "@testing-library/react";

import { TaskForm } from "../task-form";
import { Provider } from "react-redux";
import { store } from "@app/store/store";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("Render TaskForm", () => {
  it("render component", () => {
    const form = render(
      <Provider store={store}>
        <TaskForm />
      </Provider>,
    );
    expect(form).toBeDefined();
  });
});
