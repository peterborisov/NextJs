import { render } from "@testing-library/react";

import { TaskForm } from "@app/tasks/components";
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
  it("renders a component", () => {
    const form = render(
      <Provider store={store}>
        <TaskForm />
      </Provider>,
    );
    expect(form).toBeDefined();
  });
});
