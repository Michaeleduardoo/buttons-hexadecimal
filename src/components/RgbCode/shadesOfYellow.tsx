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
  const colors = [
    { text: "rgb(255, 215, 0)", colorClass: "gold" },
    { text: "rgb(255, 255, 0)", colorClass: "yellow" },
    { text: "rgb(240, 230, 140)", colorClass: "khaki" },
    { text: "rgb(238, 173, 45)", colorClass: "burntYellow" },
    { text: "rgb(255, 218, 41)", colorClass: "pantone" },
  ];

  return (
    <CRow xs={{ cols: 5 }} className="primeContainer">
      {colors.map((color) => (
        <CopyButton
          key={color.text}
          text={color.text}
          colorClass={color.colorClass}
        />
      ))}
    </CRow>
  );
};

export default Page;
