import { render } from "@testing-library/react";
import Error from "../error";

describe("Render Page", () => {
  it("render component", () => {
    const wrapper = render(<Error error={[]} />);
    expect(wrapper).toBeDefined();
  });
});
