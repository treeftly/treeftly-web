import React from "react";

import { render, screen } from "../../utils/test-utils";
import FormComponent from "../FormComponent";

describe("#FormComponent", () => {
  it("should render the component with the label", () => {
    render(
      <FormComponent id="name" label="Full Name">
        Some input
      </FormComponent>
    );

    expect(screen.getByText("Full Name")).toBeInTheDocument();
  });

  it("should render the error message", () => {
    const errorMessage = "Data is required";
    render(
      <FormComponent id="name" errors={{ name: { message: errorMessage } }}>
        Some Input component
      </FormComponent>
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
