import React from "react";

import { colors } from "../../../utils/constants";
import { render, screen } from "../../../utils/test-utils";
import ColorSwatch from "../ColorSwatch";

describe("#ColorSwatch", () => {
  it("should render the menu component with the color icons", () => {
    const onSelect = jest.fn();
    render(<ColorSwatch onSelect={onSelect} />);

    // Need to add + 1 since the menu selector is also an icon-button
    expect(screen.queryAllByTestId("icon-button").length).toEqual(
      colors.length + 1
    );
  });
});
