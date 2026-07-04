import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders headline and primary CTAs", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { name: /pagamento via pix/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /solicitar acesso/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ver funcionamento/i })).toBeInTheDocument();
  });
});
