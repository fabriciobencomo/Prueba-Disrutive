import { SimulationResult } from "../InvestementSimulator";

interface ActionButtonsProps {
  result: SimulationResult | null;
  address: string | null;
  onSimulate: () => void;
  onDownload: () => void;
  onDeposit: () => void;
  onCheckPayment: () => void;
  onReset: () => void;
  onOpenStatusModal: () => void;
  onOpenPaymentModal: () => void;
}

export const ActionsButtons = ({
  onSimulate,
  onDownload,
  onDeposit,
  onCheckPayment,
  onReset,
  onOpenStatusModal,
  onOpenPaymentModal,
  result,
  address,
}: ActionButtonsProps) => {

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {/* Botón Simular */}
      <button onClick={onSimulate} className="button-primary">
        Simular
      </button>

      {/* Condiciones para mostrar botones adicionales solo si `result` está presente */}
      {result && (
        <>
          <button onClick={onDownload} className="button-primary">
            Exportar CSV
          </button>
          <button onClick={() => {
            onDeposit()
            onOpenPaymentModal()
          }}
            className="button-primary">
            Depositar Ahora
          </button>
        </>
      )}

      {/* Mostrar el botón de Verificar Pago solo si `address` y `result` están presentes */}
      {address && result && (
        <button
          onClick={() => {
            onCheckPayment();
            onOpenStatusModal();
          }}
          className="button-primary"
        >
          Verificar Pago
        </button>
      )}

      {/* Botón Resetear */}
      <button onClick={onReset} className="button-primary">
        Resetear
      </button>
    </div>
  );
};
