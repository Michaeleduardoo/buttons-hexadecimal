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
    { text: "DarkSlateGray", colorClass: "darkSlateGray" },
    { text: "MediumSpringGreen", colorClass: "mediumSpringGreen" },
    { text: "SpringGreen", colorClass: "springGreen" },
    { text: "PaleGreen", colorClass: "paleGreen" },
    { text: "LightGreen", colorClass: "lightGreen" },
  ];

  const colors2 = [
    { text: "DarkSeaGreen", colorClass: "darkSeaGreen" },
    { text: "MediumSeaGreen", colorClass: "mediumSeaGreen" },
    { text: "SeaGreen", colorClass: "seaGreen" },
    { text: "DarkGreen", colorClass: "darkGreen" },
    { text: "Green", colorClass: "green" },
  ];

  const colors3 = [
    { text: "ForestGreen", colorClass: "forestGreen" },
    { text: "LimeGreen", colorClass: "limeGreen" },
    { text: "Lime", colorClass: "lime" },
    { text: "LawnGreen", colorClass: "lawnGreen" },
    { text: "Chartreuse", colorClass: "chartreuse" },
  ];

  const colors4 = [
    { text: "GreenYellow", colorClass: "greenYellow" },
    { text: "YellowGreen", colorClass: "yellowGreen" },
    { text: "OliveDrab", colorClass: "oliveDrab" },
    { text: "DarkOliveGreen", colorClass: "darkOliveGreen" },
    { text: "Olive", colorClass: "olive" },
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
