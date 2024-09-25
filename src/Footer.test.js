import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders footer with correct year and text", () => {
  render(<Footer />);
  const footerText = screen.getByText(/Copyright ©/i);
  expect(footerText).toBeInTheDocument();

  const currentYear = new Date().getFullYear();
  expect(footerText.textContent).toContain(currentYear.toString());
});

afterAll(() => {
  console.log("Test completed successfully.");
});
