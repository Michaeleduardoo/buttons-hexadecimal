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

const ColorButton = ({ text, colorClass }) => (
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
    { text: "MediumSlateBlue", colorClass: "mediumSlateBlue" },
    { text: "MediumPurple", colorClass: "mediumPurple" },
    { text: "BlueViolet", colorClass: "blueViolet" },
    { text: "Indigo", colorClass: "indigo" },
    { text: "DarkViolet", colorClass: "darkViolet" },
  ];

  const colors2 = [
    { text: "DarkOrchid", colorClass: "darkOrchid" },
    { text: "MediumOrchid", colorClass: "mediumOrchid" },
    { text: "Purple", colorClass: "purple" },
    { text: "DarkMagenta", colorClass: "darkMagenta" },
    { text: "Fuchsia / Magenta", colorClass: "fuchsia" },
  ];

  const colors3 = [
    { text: "Violet", colorClass: "violet" },
    { text: "Orchid", colorClass: "orchid" },
    { text: "Plum", colorClass: "plum" },
    { text: "Cornflower", colorClass: "cornflower" },
    { text: "Palatinate", colorClass: "palatinate" },
  ];

  return (
    <>
      <CRow xs={{ cols: 5 }} className="primeContainer">
        {colors1.map((color) => (
          <ColorButton
            key={color.text}
            text={color.text}
            colorClass={color.colorClass}
          />
        ))}
      </CRow>

      <CRow xs={{ cols: 5 }} className="primeContainer">
        {colors2.map((color) => (
          <ColorButton
            key={color.text}
            text={color.text}
            colorClass={color.colorClass}
          />
        ))}
      </CRow>

      <CRow xs={{ cols: 5 }} className="primeContainer">
        {colors3.map((color) => (
          <ColorButton
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
