import { disruptiveApi } from "../api/disruptive-payment-api";
import { SinglePaymentResponse } from "../interfaces/SinglePaymentResponse";

export const postSinglePayment = async (network: string = "", fundsGoal: number = 0, smartContractAdress: string = "") => {
  try{

    const {data} = await disruptiveApi.post<SinglePaymentResponse>(`/single`, {
      "network": network,
      "fundsGoal": fundsGoal,
      "smartContractAddress": smartContractAdress
    })
    
    return data.data

  } catch(error){
    console.log(error)
    throw new Error;

  }
}