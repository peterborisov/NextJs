import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { SidebarComponent } from "../index";

describe("Render SidebarComponent", () => {
  it("Order by button", () => {
    const sidebar = render(<SidebarComponent />);

    expect(sidebar).toBeDefined();
  });
});
