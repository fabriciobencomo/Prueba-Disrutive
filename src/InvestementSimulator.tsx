import { useState } from "react"; 
import { options, OptionTime } from './data/options/optionsPlazo';
import { useExportAnObjectToCSV, useDisruptivePayment } from "./hooks";
import { calculateInvestment } from "./helpers/investmentUtils";

import { BenefitOptions, CapitalInput, InvestmentOptions} from "./components/inputs";
import PaymentModal from "./components/modals/PaymentModal";

import { ActionsButtons } from "./components/ActionsButtons";
import { TableResults } from "./components/TableResults";
import { QRCodeModal } from "./components/modals/QRCodeModal";
import { MessageFillForm } from "./components/MessageFillForm";


export interface SimulationResult {
  tiempo: number;
  rate: number;
  beneficio: string;
  totalNeto: number;
}


interface ModalPayload {
  status: boolean;
  type: 'NONE' | 'STATUS' | 'PAY'
}

const InvestmentSimulator = () => {
  const [capital, setCapital] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<OptionTime>(options[0]);
  const [isCompound, setIsCompound] = useState<boolean>(false);
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [validateForm, setValidateForm] = useState(false)
  
  const { handleSinglePayment, handleCheckPayment, isPaid, address, setAddress } = useDisruptivePayment({ capital });
  const { handleDownload } = useExportAnObjectToCSV(result!);
  
  const handleCalculate = () => {
    if (!capital || !selectedOption) {
      setValidateForm(true)
      return;
    }   
    setValidateForm(false)
    const simulation = calculateInvestment(capital, selectedOption.months, selectedOption.rate, isCompound);
    setResult(simulation);
  };
  
  const handleReset = () => {
    setCapital(0);
    setSelectedOption(options[0]);
    setIsCompound(false);
    setResult(null);
    closeModal()
  }

  const [isModalOpen, setIsModalOpen] = useState<ModalPayload>({status: false, type: 'NONE'});

  const openStatusModal = () => setIsModalOpen({status: true, type: 'STATUS'});

  const openPaymentModal = () => {
    setAddress('')
    setIsModalOpen({status: true, type: 'PAY'});
  }

  const closeModal = () => {
    setIsModalOpen({status: false, type: 'NONE'});
  }

  return (
    <div className="h-screen flex items-center justify-center poppins-light">
      <div className="hidden lg:block w-1/2 h-screen">
        <div className="bg-[url(./bghuman.png)] cover h-screen flex items-center justify-center"/>
      </div> 
      <div className="w-full lg:w-1/2 h-screen flex flex-col items-center justify-center bg-gray-100 gap-4 bg-[url(./fondo.png)] bg-cover">
        <h1 className="font-bold text-4xl text-white text-center poppins-extrabold">
          Invierte Tu Dinero <br/><span className="text-yellow-200">Con Nosotros</span>
        </h1>
        <div className="flex flex-col items-center justify-center p-8 relative bg-white rounded-lg shadow-lg w-auto lg:w-10/12 xl:w-2/3">
          <h2 className="font-bold text-2xl text-primary poppins-extrabold mb-4">Simulador de Inversión</h2>
          {validateForm ? <MessageFillForm /> : ''}
          <div className="flex flex-col gap-4">
            <CapitalInput capital={capital} setCapital={setCapital} />
            <InvestmentOptions options={options} selectedOption={selectedOption} onChange={setSelectedOption} />
            <BenefitOptions isCompound={isCompound} setIsCompound={setIsCompound} />
          </div>

          <ActionsButtons 
            onSimulate={handleCalculate} 
            onCheckPayment={handleCheckPayment} 
            onDeposit={handleSinglePayment} 
            onDownload={handleDownload} 
            onReset={handleReset} 
            onOpenStatusModal={openStatusModal} 
            onOpenPaymentModal={openPaymentModal} 
            address={address} 
            result={result} 
          />
          
          {isModalOpen.status && (
            <div className="flex items-center justify-center h-screen bg-gray-100">
              {isModalOpen.type == 'STATUS' ? <PaymentModal isOpen={isModalOpen.status} onClose={closeModal} isPaid={isPaid} /> : <QRCodeModal isOpen={isModalOpen.status} onClose={closeModal} address={address} amount={capital}/>}
            </div>
          )}
          
          {result && <TableResults tiempo={result.tiempo} rate={result.rate} beneficio={result.beneficio} totalNeto={result.totalNeto} />}
        </div>
      </div>
    </div>
  );
};

export default InvestmentSimulator;
