import QRCode from "qrcode";
import { useState, useEffect } from "react";

interface QRCodeProps {
  address: string;
  amount: number;
}

export const QRCodeAddress = ({ address, amount }: QRCodeProps) => {
  const [qrCodeURL, setQRCodeURL] = useState<string>("");

  useEffect(() => {
    if (!address || amount <= 0) {
      setQRCodeURL("");
      return;
    }
  
    const bscPaymentURL = `https://bscscan.com/address/${address}?amount=${amount}`;
  
    QRCode.toDataURL(bscPaymentURL)
      .then((url) => setQRCodeURL(url))
      .catch((err) => console.error(err));
  }, [address, amount]);

  return (
    <div className="flex flex-col items-center justify-center">
      {qrCodeURL ? (
        <div className="flex flex-col items-center justify-center w-10/12">
          <img src={qrCodeURL} alt="Código QR para BSC" />
          <p className="font-bold">Address</p>
          <p className="text-center mx-4 text-sm px-4 address-text">{address}</p>
          <p className="font-bold">Capital</p>
          <p className="text-center mx-4 text-sm px-4 address-text">{amount}</p>
        </div>
      ) : (
        "QR No Generado"
      )}
    </div>
  );
};
