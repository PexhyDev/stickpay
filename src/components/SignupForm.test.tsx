import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SignupForm } from "./SignupForm";

describe("SignupForm", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValueOnce({ json: async () => ({ token: "tok_test" }) })
        .mockResolvedValueOnce({ json: async () => ({ status: "approved" }) }),
    );
  });

  it("submits signup and calls mock checkout endpoints", async () => {
    render(<SignupForm />);

    fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: "Ana" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "ana@empresa.com" } });
    fireEvent.click(screen.getByRole("button", { name: /comece agora/i }));

    await waitFor(() => expect(screen.getByText(/sandbox acionado/i)).toBeInTheDocument());
    expect(fetch).toHaveBeenCalledWith("/api/tokenize", expect.any(Object));
    expect(fetch).toHaveBeenCalledWith("/api/transactions", expect.any(Object));
  });
});
