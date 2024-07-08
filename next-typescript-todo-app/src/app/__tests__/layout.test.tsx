import { render } from "@testing-library/react";
import RootLayout from "../layout";

describe("Render RootLayout", () => {
  it("render component", () => {
    const wrapper = render(<RootLayout children={[]} />);
    expect(wrapper).toBeDefined();
  });
});
