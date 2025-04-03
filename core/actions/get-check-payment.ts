import { disruptiveApi } from "../api/disruptive-payment-api";
import { PaymentStatusResponse } from "../interfaces/PaymentStatus.response";

export const getStatusPayment = async (network: string = "", address: string = '') => {
  try{

    const {data} = await disruptiveApi.get<PaymentStatusResponse>(`/status`, {
      params: {
        network: network,
        address: address
      }
    })
    
    return data.data

  } catch(error){
    console.log(error)
    throw new Error;

  }
}