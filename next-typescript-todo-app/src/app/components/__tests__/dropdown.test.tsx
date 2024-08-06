import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "@app/store/store";
import { DropdownComponent } from "../index";

describe("Render DropdownComponent", () => {
  it("Order by button", () => {
    render(
      <Provider store={store}>
        <DropdownComponent />
      </Provider>,
    );
    const orderByBtn = screen.getByRole("button");

    expect(orderByBtn.textContent).toEqual("Order By");
  });
});
