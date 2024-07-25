import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "@app/store/store";
import { TableComponent } from "@components/index";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe("Render TasksList", () => {
  it("render component", () => {
    const taskTable = render(
      <Provider store={store}>
        <TableComponent data={[]} />
      </Provider>,
    );
    expect(taskTable).toBeDefined();
  });
});
