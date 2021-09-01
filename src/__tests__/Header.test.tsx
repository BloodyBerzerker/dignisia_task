import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/header/Header";

test("Header contains correct text", () => {
  render(<Header />);
  const text = screen.getByText("Dignisia Task");
  expect(text).toBeInTheDocument();
});
