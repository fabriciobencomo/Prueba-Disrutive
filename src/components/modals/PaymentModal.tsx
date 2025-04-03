
interface ModalProps {
  isOpen: boolean;
  isPaid: boolean | null;
  onClose: () => void;
}

const PaymentModal = ({ isOpen, onClose, isPaid }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm lg:w-1/4 w-10/12">
        <div className="flex justify-end items-center">
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div>
          {
            isPaid ? (
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-16 bg-green-300 rounded-full p-4 mb-2 text-green-600">
                  <path d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <h2 className="text-lg font-semibold">Estatus de Pago</h2>
                <p className="text-sm">
                  Su Pago Ha Sido Comprobado.
                </p>
              </div>
            ) 
            :
            (
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-16 bg-red-300 rounded-full p-4 mb-2 text-red-600">
                  <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                <h2 className="text-lg font-semibold">Estatus de Pago</h2>
                <p className="text-sm">
                  Tu pago está pendiente.
                </p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;