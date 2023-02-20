import React from "react";

import { render, screen } from "../../utils/test-utils";
import PageHeader from "../PageHeader";

describe("#PageHeader", () => {
  it("should render the page header", () => {
    render(<PageHeader>Header</PageHeader>);

    expect(screen.getByTestId("page-header")).toBeInTheDocument();
  });
});
