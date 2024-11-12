"use client";
import "@/sass/buttons.scss";
import { CRow, CCol } from "@coreui/react";
import { toast } from "react-toastify";

const copyToClipboard = (text) => {
  const loadingToast = toast.info("Carregando...", {
    autoClose: 3000,
    isLoading: true,
  });

  setTimeout(() => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.dismiss(loadingToast);
        toast.success(`${text} Copiado.`, {
          autoClose: 3000,
        });
      })
      .catch((error) => {
        toast.dismiss(loadingToast);
        toast.error("Falha ao copiar para a área de transferência", {
          autoClose: 3000,
        });
        console.error(error);
      });
  }, 2000);
};

const CopyButton = ({ text, colorClass }) => (
  <CCol>
    <div className="buttons">
      <button
        className="btn btn-3 hover-border-2"
        onClick={() => copyToClipboard(text)}
      >
        <span className={colorClass}>{text}</span>
      </button>
    </div>
  </CCol>
);

const Page = () => {
  const colors1 = [
    { text: "rgb(199, 21, 133)", colorClass: "mediumVioletRed" },
    { text: "rgb(255, 20, 147)", colorClass: "deepPink" },
    { text: "rgb(255, 105, 180)", colorClass: "hotPink" },
    { text: "rgb(219, 112, 147)", colorClass: "paleVioletRed" },
    { text: "rgb(255, 182, 193)", colorClass: "lightPink" },
  ];

  const colors2 = [
    { text: "rgb(255, 192, 203)", colorClass: "pink" },
    { text: "rgb(240, 128, 128)", colorClass: "lightCoral" },
    { text: "rgb(205, 92, 92)", colorClass: "indianRed" },
    { text: "rgb(220, 20, 60)", colorClass: "crimson" },
    { text: "rgb(251, 154, 172)", colorClass: "bakerMille" },
  ];

  return (
    <>
      <CRow xs={{ cols: 5 }} className="primeContainer">
        {colors1.map((color) => (
          <CopyButton
            key={color.text}
            text={color.text}
            colorClass={color.colorClass}
          />
        ))}
      </CRow>

      <CRow xs={{ cols: 5 }} className="primeContainer">
        {colors2.map((color) => (
          <CopyButton
            key={color.text}
            text={color.text}
            colorClass={color.colorClass}
          />
        ))}
      </CRow>
    </>
  );
};

export default Page;
