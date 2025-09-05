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
const CopyButton = ({ text, colorClass }: { text: string; colorClass: string }) => (
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
    { text: "SlateBlue", colorClass: "slateBlue" },
    { text: "SlateBlue1", colorClass: "slateBlue1" },
    { text: "SlateBlue3", colorClass: "slateBlue3" },
    { text: "DarkSlateBlue", colorClass: "darkSlateBlue" },
    { text: "MidnightBlue", colorClass: "midnightBlue" },
  ];

  const colors2 = [
    { text: "Navy", colorClass: "navy" },
    { text: "DarkBlue", colorClass: "darkBlue" },
    { text: "MediumBlue", colorClass: "mediumBlue" },
    { text: "Blue", colorClass: "blue" },
    { text: "CornflowerBlue", colorClass: "cornflowerBlue" },
  ];

  const colors3 = [
    { text: "RoyalBlue", colorClass: "royalBlue" },
    { text: "DodgerBlue", colorClass: "dodgerBlue" },
    { text: "DeepSkyBlue", colorClass: "deepSkyBlue" },
    { text: "LightSkyBlue", colorClass: "lightSkyBlue" },
    { text: "SkyBlue", colorClass: "skyBlue" },
  ];

  const colors4 = [
    { text: "LightBlue", colorClass: "lightBlue" },
    { text: "SteelBlue", colorClass: "steelBlue" },
    { text: "LightSteelBlue", colorClass: "lightSteelBlue" },
    { text: "SlateGray", colorClass: "slateGray" },
    { text: "LightSlateGray", colorClass: "lightSlateGray" },
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

      <CRow xs={{ cols: 5 }} className="primeContainer">
        {colors3.map((color) => (
          <CopyButton
            key={color.text}
            text={color.text}
            colorClass={color.colorClass}
          />
        ))}
      </CRow>

      <CRow xs={{ cols: 5 }} className="primeContainer">
        {colors4.map((color) => (
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
