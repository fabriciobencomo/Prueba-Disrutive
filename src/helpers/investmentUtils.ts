import { SimulationResult } from "../InvestementSimulator";

export const calculateInvestment = (
  capital: number,
  months: number,
  rate: number,
  isCompound: boolean
): SimulationResult => {
  let total = capital;
  const decimalRate = rate / 100;

  if (isCompound) {
    total *= Math.pow(1 + decimalRate, months);
  } else {
    total += capital * decimalRate * months;
  }

  // Se calcula la tarifa basada en el total, no en el capital
  const fee = calculateFee(total);
  const benefit = isCompound ? "Compuesto" : "Simple";

  return {
    tiempo: months,
    rate,
    beneficio: benefit,
    totalNeto: parseFloat((total - fee).toFixed(2)), // Redondeo para evitar errores de precisión
  };
};

export const calculateFee = (amount: number): number => {
  if (amount <= 1000) return amount * 0.02;
  if (amount <= 10000) return amount * 0.01;
  if (amount <= 35000) return amount * 0.005;
  if (amount > 50000) return amount * 0.0025;
  return 0;
};
