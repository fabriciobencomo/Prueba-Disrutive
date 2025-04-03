import { render } from "@testing-library/react";
import { fireEvent, screen } from "@testing-library/dom";
import { describe, it, expect } from "vitest";
import React from "react";
import InvestmentSimulator from '../../src/App';
import "@testing-library/jest-dom";

describe("InvestmentSimulator", () => {
  it("debería permitir ingresar un capital inicial", () => {
    render(<InvestmentSimulator />);
    const input = screen.getByLabelText(/capital/i);
    
    fireEvent.change(input, { target: { value: "5000" } });
    
    expect((input as HTMLInputElement).value).toBe("5000");
  });

  it("debería calcular el resultado al hacer clic en 'Simular'", () => {
    render(<InvestmentSimulator />);
    
    const input = screen.getByLabelText(/capital/i);
    fireEvent.change(input, { target: { value: "5000" } });

    const button = screen.getByText(/simular/i);
    fireEvent.click(button);

    expect(screen.getByText(/Total Neto/i)).toBeInTheDocument();
  });
});