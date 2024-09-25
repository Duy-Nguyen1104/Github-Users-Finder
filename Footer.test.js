// Footer.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/layout/Footer";

test("renders the Footer component with the correct text", () => {
  render(<Footer text="GitHub Finder © 2024" />);

  // Check if the footer text is in the document
  const footerElement = screen.getByText(/GitHub Finder © 2024/i);
  expect(footerElement).toBeInTheDocument();
});
