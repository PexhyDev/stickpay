import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders headline and primary CTAs", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { name: /aceite pix/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /teste grátis/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ver demo/i })).toBeInTheDocument();
  });
});
