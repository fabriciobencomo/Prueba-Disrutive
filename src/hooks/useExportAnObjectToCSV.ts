import { SimulationResult } from "../InvestementSimulator";

export const useExportAnObjectToCSV = (result: SimulationResult) => {
  const convertObjectToCSV = (obj: object) => {
    const headers = Object.keys(obj).join(","); // Encabezados
    const values = Object.values(obj).join(","); // Valores
    return `${headers}\n${values}`;
  };

  const downloadCSV = (csvData: string, fileName: string) => {
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  const changeValueForCsv = () => {
    const newResult = {
      Tiempo: `${result.tiempo} Meses`,
      Rate: `${result.rate}% `,
      Beneficio: `${result.beneficio}`,
      Total_Neto: `${result.totalNeto.toFixed(2)}USD`,
    };
    return newResult;
  }

  const handleDownload = () => {
    const result = changeValueForCsv();
    const csvData = convertObjectToCSV(result);
    downloadCSV(csvData, "simulador.csv");
  };

  return {handleDownload}
}