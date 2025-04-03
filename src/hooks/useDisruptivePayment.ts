import { useState } from "react";
import { postSinglePayment, getStatusPayment } from "../../core/actions";

interface OptionsApi{
  capital: number;
}
const SMART_CONTRACT= import.meta.env.VITE_DISRUPTIVE_PAYMENT_SMART_CONTRACT
const TOKEN_COIN='BSC'

export const useDisruptivePayment = ({capital}:OptionsApi) => {


  const [address, setAddress] = useState('')
  const [isPaid, setIsPaid] = useState<boolean | null>(null)

  const handleSinglePayment = async () => {
    try {
      const { address } = await postSinglePayment(TOKEN_COIN, capital, SMART_CONTRACT);
      setAddress(address)
      console.log(address)
    } catch (error) {
      console.error("Error in handleSinglePayment:", error);
      throw error;
    }
  };

  const handleCheckPayment = async () => {
    try {
      const {amountCaptured} = await getStatusPayment(TOKEN_COIN, address);
      setIsPaid(amountCaptured > 0 ? true : false)
      console.log(isPaid)
    } catch (error) {
      console.error("Error in handleCheckPayment:", error);
      throw error;
    }
  };

  return { handleSinglePayment, handleCheckPayment, isPaid, address, setAddress };
}