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
    { text: "#6A5ACD", colorClass: "slateBlue" },
    { text: "#836FFF", colorClass: "slateBlue1" },
    { text: "#6959CD", colorClass: "slateBlue3" },
    { text: "#483D8B", colorClass: "darkSlateBlue" },
    { text: "#191970", colorClass: "midnightBlue" },
  ];

  const colors2 = [
    { text: "#000080", colorClass: "navy" },
    { text: "#00008B", colorClass: "darkBlue" },
    { text: "#0000CD", colorClass: "mediumBlue" },
    { text: "#0000FF", colorClass: "blue" },
    { text: "#6495ED", colorClass: "cornflowerBlue" },
  ];

  const colors3 = [
    { text: "#4169E1", colorClass: "royalBlue" },
    { text: "#1E90FF", colorClass: "dodgerBlue" },
    { text: "#00BFFF", colorClass: "deepSkyBlue" },
    { text: "#87CEFA", colorClass: "lightSkyBlue" },
    { text: "#87CEEB", colorClass: "skyBlue" },
  ];

  const colors4 = [
    { text: "#ADD8E6", colorClass: "lightBlue" },
    { text: "#4682B4", colorClass: "steelBlue" },
    { text: "#B0C4DE", colorClass: "lightSteelBlue" },
    { text: "#708090", colorClass: "slateGray" },
    { text: "#778899", colorClass: "lightSlateGray" },
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

      <CRow xs={{ cols: 5 }} className="primeContainer">
        {colors4.map((color) => (
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
