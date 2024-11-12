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
    { text: "#2F4F4F", colorClass: "darkSlateGray" },
    { text: "#00FA9A", colorClass: "mediumSpringGreen" },
    { text: "#00FF7F", colorClass: "springGreen" },
    { text: "#98FB98", colorClass: "paleGreen" },
    { text: "#90EE90", colorClass: "lightGreen" },
  ];

  const colors2 = [
    { text: "#8FBC8F", colorClass: "darkSeaGreen" },
    { text: "#3CB371", colorClass: "mediumSeaGreen" },
    { text: "#2E8B57", colorClass: "seaGreen" },
    { text: "#006400", colorClass: "darkGreen" },
    { text: "#008000", colorClass: "green" },
  ];

  const colors3 = [
    { text: "#228B22", colorClass: "forestGreen" },
    { text: "#32CD32", colorClass: "limeGreen" },
    { text: "#00FF00", colorClass: "lime" },
    { text: "#7CFC00", colorClass: "lawnGreen" },
    { text: "#7FFF00", colorClass: "chartreuse" },
  ];

  const colors4 = [
    { text: "#ADFF2F", colorClass: "greenYellow" },
    { text: "#9ACD32", colorClass: "yellowGreen" },
    { text: "#6B8E23", colorClass: "oliveDrab" },
    { text: "#556B2F", colorClass: "darkOliveGreen" },
    { text: "#808000", colorClass: "olive" },
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
