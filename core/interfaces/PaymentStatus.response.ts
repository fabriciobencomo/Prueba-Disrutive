export interface PaymentStatusResponse {
  data:      Data;
  timeStart: number;
  timeEnd:   number;
  timeDelta: number;
}

export interface Data {
  network:              string;
  address:              string;
  amountCaptured:       number;
  smartContractAddress: string;
  smartContractSymbol:  string;
  status:               string;
  fundStatus:           string;
  processStep:          number;
  processTotalSteps:    number;
  fundsGoal:            number;
  fundsExpirationAt:    number;
  currentBalance:       number;
  forwardAddresses:     unknown[];
}
