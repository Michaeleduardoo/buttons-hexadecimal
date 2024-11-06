"use client";
import "@/sass/buttons.scss";
import { CRow, CCol } from "@coreui/react";
import { ToastContainer, toast } from "react-toastify";

const copyToClipboard = (text) => {
  // Exibe o toast de carregamento com autoClose
  const loadingToast = toast.info("Carregando...", {
    autoClose: 3000,
    isLoading: true,
  });

  // Atraso para garantir que o toast de carregamento seja visível
  setTimeout(() => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Fecha o toast de carregamento
        toast.dismiss(loadingToast);

        // Exibe o toast de sucesso
        toast.success(`${text} Copiado.`, {
          autoClose: 3000,
        });
      })
      .catch((error) => {
        // Fecha o toast de carregamento em caso de erro
        toast.dismiss(loadingToast);

        // Exibe o toast de erro
        toast.error("Falha ao copiar para a área de transferência", {
          autoClose: 3000,
        });
        console.error(error);
      });
  }, 2000); // Atraso de 2 segundos
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
