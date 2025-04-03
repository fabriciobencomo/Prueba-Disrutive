interface BenefitOptionsProps {
  isCompound: boolean;
  setIsCompound: (value: boolean) => void;
}

export const BenefitOptions = ({ isCompound, setIsCompound }: BenefitOptionsProps) =>{
  return (
    <div>
      <label className="text-gray-500 text-sm uppercase">Tipo de Beneficio</label>
      <div className="flex gap-4 mt-4">
        <div className="flex items-center mb-2 gap-2">
          <input 
            type="radio" 
            id="simple" 
            name="benefit" 
            checked={!isCompound} 
            onChange={() => setIsCompound(false)} 
          />
          <label htmlFor="simple">Interés Simple</label>
        </div>
        <div className="flex items-center mb-2 gap-2">
          <input 
            type="radio" 
            id="compuesto" 
            name="benefit" 
            checked={isCompound} 
            onChange={() => setIsCompound(true)} 
          />
          <label htmlFor="compuesto">Interés Compuesto</label>
        </div>
      </div>
    </div>
  );
};
