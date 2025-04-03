import { OptionTime } from "../../data/options/optionsPlazo";

interface InvestmentOptionsProps {
  options: OptionTime[],
  selectedOption: OptionTime,
  onChange: (option: OptionTime) => void;
}


export const InvestmentOptions = ({options, selectedOption, onChange}: InvestmentOptionsProps) => {
  return (
    <div>

    <label className='text-gray-500 text-sm uppercase'>Selecciona el Plazo</label>
    <select 
        className='border-b border-gray-700 w-full focus:outline-none focus:border-green-500 transition duration-300 py-2'
        onChange={(e) => {
          const selected = options.find(opt => opt.months === Number(e.target.value));
          if (selected) onChange(selected);
        }}
        value={selectedOption.months}
      >
        {options.map(opt => (
          <option key={opt.months} value={opt.months}>
            {opt.months} meses - {opt.rate}%
          </option>
        ))}
      </select>

  </div>
  )
}
