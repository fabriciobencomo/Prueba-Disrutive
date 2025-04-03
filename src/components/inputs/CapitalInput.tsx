interface CapitalInputProps {
  capital: number;
  setCapital: (value: number) => void;
}

export const CapitalInput = ({ capital, setCapital }: CapitalInputProps) => {
  const handleCapitalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "") {
      setCapital(0);
      return;
    }
    const numericValue = Number(value);
    setCapital(numericValue);
  };

  return (
    <div>
      <label className="text-gray-500 text-sm uppercase" htmlFor="capital">Capital</label>
      <input
        type="number"
        value={capital || ''}
        id="capital"
        onChange={handleCapitalChange}
        min="0"
        placeholder="Ingrese el capital"
        className="border-b border-gray-700 w-full focus:outline-none focus:border-green-500 transition duration-300 py-2"
      />
    </div>
  );
};
