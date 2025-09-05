"use client";
import "@/sass/buttons.scss";
import { CRow, CCol } from "@coreui/react";
import { toast } from "react-toastify";

const copyToClipboard = (text: string) => {
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

const ColorButton = ({ text, colorClass }: { text: string; colorClass: string }) => (
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
    { text: "#7B68EE", colorClass: "mediumSlateBlue" },
    { text: "#9370DB", colorClass: "mediumPurple" },
    { text: "#8A2BE2", colorClass: "blueViolet" },
    { text: "#4B0082", colorClass: "indigo" },
    { text: "#9400D3", colorClass: "darkViolet" },
  ];

  const colors2 = [
    { text: "#9932CC", colorClass: "darkOrchid" },
    { text: "#BA55D3", colorClass: "mediumOrchid" },
    { text: "#A020F0", colorClass: "purple" },
    { text: "#8B008B", colorClass: "darkMagenta" },
    { text: "#FF00FF", colorClass: "fuchsia" },
  ];

  const colors3 = [
    { text: "#EE82EE", colorClass: "violet" },
    { text: "#DA70D6", colorClass: "orchid" },
    { text: "#DDA0DD", colorClass: "plum" },
    { text: "#3E3677", colorClass: "cornflower" },
    { text: "#65275D", colorClass: "palatinate" },
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
