import { QRCodeAddress } from "../QrCodeAddress";

interface ModalProps {
  isOpen: boolean;
  address: string | null;
  amount: number;
  onClose: () => void;
}

export const QRCodeModal = ({ isOpen, onClose, address, amount}: ModalProps) => {
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
            address ? (
              <QRCodeAddress address={address} amount={amount}/>
            ) 
            :
            (
              <div className="flex flex-col items-center">
                <div className="flex flex-row gap-2 h-10 py-4">
                  <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:.7s]"></div>
                  <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:.3s]"></div>
                  <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:.7s]"></div>
                </div>
                <h2 className="text-lg font-semibold">Generando QR...</h2>
                <p className="text-sm">
                  Por Favor Espere
                </p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

