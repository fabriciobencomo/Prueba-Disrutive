import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import QRCode from "qrcode";
import { vi } from "vitest";
import {QRCodeAddress} from '../../../src/components/QrCodeAddress'

vi.mock("qrcode", async () => {
  return {
    default: {
      toDataURL: vi.fn(() => Promise.resolve("mocked_qr_url")),
    },
  };
});

describe("QRCodeComponent", () => {
  beforeEach(() => {
    vi.clearAllMocks(); 
  });


  it("debe generar y mostrar un código QR con la dirección", async () => {
    render(<QRCodeAddress address="0x123456789" amount={1} />);
    
    await waitFor(() => expect(QRCode.toDataURL).toHaveBeenCalled());

    expect(screen.getByAltText("Código QR para BSC")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
    expect(screen.getByText("0x123456789")).toBeInTheDocument();
  });

  it("no debe generar un QR si el amount es 0", async () => {
    render(<QRCodeAddress address="0x123456789" amount={0} />);
    
    await waitFor(() => {
      expect(QRCode.toDataURL).not.toHaveBeenCalled();
    });

    expect(screen.getByText("QR No Generado")).toBeInTheDocument();
  });
})