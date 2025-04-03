
interface TableResultsProps {
  tiempo: number;
  rate: number;
  beneficio: string;
  totalNeto: number;
}

export const TableResults = ({tiempo, rate, beneficio, totalNeto}: TableResultsProps) => {
  return (
        <div className="overflow-x-auto p-4">
          <h3 className="font-bold text-primary text-center">Resultado</h3>

            <table className="table-auto border-collapse border border-gray-300 w-full text-sm">

              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border border-gray-300 px-2 py-2">Tiempo</th>
                  <th className="border border-gray-300 px-2 py-2">Porcentaje</th>
                  <th className="border border-gray-300 px-2 py-2">Beneficio</th>
                  <th className="border border-gray-300 px-2 py-2">Total Neto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-2 py-2 text-center">{tiempo} Meses</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">{rate}%</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">{beneficio}</td>
                  <td className="border border-gray-300 px-2 py-2">${totalNeto.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
        </div>
  )
}
