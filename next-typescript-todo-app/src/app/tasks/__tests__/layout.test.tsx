import { render } from "@testing-library/react";

import TasksLayout from "../layout";

describe("Render TasksLayout", () => {
  it("render component", () => {
    const wrapper = render(<TasksLayout children={[]} />);
    expect(wrapper).toBeDefined();
  });
});
