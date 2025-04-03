import { describe, it, expect } from "vitest";
import { calculateInvestment, calculateFee } from "../../../src/helpers/investmentUtils";

describe("calculateInvestment", () => {
  it("debería calcular correctamente el beneficio con interés simple", () => {
    const result = calculateInvestment(1000, 6, 2, false);
    expect(result.totalNeto).toBeCloseTo(1108.8, 1); 
  });

  it("debería calcular correctamente el beneficio con interés compuesto", () => {
    const result = calculateInvestment(1000, 6, 2, true);
    console.log("Resultado Interés Compuesto:", result.totalNeto); 
    expect(result.totalNeto).toBeCloseTo(1114.9, 1); 
  });
});

describe("calculateFee", () => {
  it("debería aplicar un fee del 2% para montos de hasta 1000", () => {
    expect(calculateFee(1000)).toBe(20);
  });

  it("debería aplicar un fee del 1% para montos entre 1001 y 10000", () => {
    expect(calculateFee(5000)).toBe(50);
  });

  it("debería aplicar un fee del 0.5% para montos entre 10001 y 35000", () => {
    expect(calculateFee(20000)).toBe(100);
  });

  it("debería aplicar un fee del 0.25% para montos mayores a 50000", () => {
    expect(calculateFee(60000)).toBe(150);
  });
});