import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import jest-dom
import Footer from "./components/layout/Footer";

describe("Footer", () => {
  test("renders footer with correct year and text", () => {
    render(<Footer />);

    const footerText = screen.getByText(/Copyright ©/i);
    expect(footerText).toBeInTheDocument(); // Check if the footer text is in the document

    const currentYear = new Date().getFullYear();
    expect(footerText.textContent).toContain(currentYear.toString()); // Check if the footer contains the current year
  });
});
