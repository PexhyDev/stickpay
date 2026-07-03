import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SignupForm } from "./SignupForm";

describe("SignupForm", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValueOnce({
        json: async () => ({
          pix: {
            copyPaste: "000201010212STICKPAYPIXMOCK",
          },
        }),
      }),
    );
  });

  it("submits signup and creates a mock Pix charge", async () => {
    render(<SignupForm />);

    fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: "Ana" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "ana@empresa.com" } });
    fireEvent.change(screen.getByLabelText(/cpf do pagador/i), { target: { value: "12345678909" } });
    fireEvent.change(screen.getByLabelText(/valor pix/i), { target: { value: "49.90" } });
    fireEvent.click(screen.getByRole("button", { name: /gerar pix de teste/i }));

    await waitFor(() => expect(screen.getByText(/cobrança pix mock gerada/i)).toBeInTheDocument());
    expect(screen.getByDisplayValue(/STICKPAYPIXMOCK/i)).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledWith("/api/pix/charges", expect.any(Object));
  });
});
