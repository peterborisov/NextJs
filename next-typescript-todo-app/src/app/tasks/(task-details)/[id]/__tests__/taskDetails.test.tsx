import { render } from "@testing-library/react";

import { TaskDetails } from "../taskDetails";
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

describe("Render TaskDetails", () => {
  it("render component", () => {
    const form = render(
      <Provider store={store}>
        <TaskDetails taskId={1} />
      </Provider>,
    );
    expect(form).toBeDefined();
  });
});
