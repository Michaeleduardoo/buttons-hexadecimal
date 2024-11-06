"use client";
import "@/sass/buttons.scss";
import { CRow, CCol } from "@coreui/react";
import { ToastContainer, toast } from "react-toastify";

const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast.success(`${text} Copiado.`, {
        autoClose: 3000,
      });
    })
    .catch((error) => {
      toast.error("Falha ao copiar para a área de transferência", {
        autoClose: 3000,
      });
      console.error(error);
    });
};

const Page = () => {
  return (
    <>
      <CRow xs={{ cols: 5 }} className="primeContainer">
        <CCol>
          <div className="buttons">
            <button
              className="btn btn-3 hover-border-2"
              onClick={() => copyToClipboard("Gold")}
            >
              <span className="gold">Gold</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button
              className="btn btn-3 hover-border-2"
              onClick={() => copyToClipboard("Yellow")}
            >
              <span className="yellow">Yellow</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button
              className="btn btn-3 hover-border-2"
              onClick={() => copyToClipboard("Khaki")}
            >
              <span className="khaki">Khaki</span>
            </button>
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default Page;
