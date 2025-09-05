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
    { text: "rgb(123, 104, 238)", colorClass: "mediumSlateBlue" },
    { text: "rgb(147, 112, 219)", colorClass: "mediumPurple" },
    { text: "rgb(138, 43, 226)", colorClass: "blueViolet" },
    { text: "rgb(75, 0, 130)", colorClass: "indigo" },
    { text: "rgb(148, 0, 211)", colorClass: "darkViolet" },
  ];

  const colors2 = [
    { text: "rgb(153, 50, 204)", colorClass: "darkOrchid" },
    { text: "rgb(186, 85, 211)", colorClass: "mediumOrchid" },
    { text: "rgb(128, 0, 128)", colorClass: "purple" },
    { text: "rgb(139, 0, 139)", colorClass: "darkMagenta" },
    { text: "rgb(255, 0, 255)", colorClass: "fuchsia" },
  ];

  const colors3 = [
    { text: "rgb(238, 130, 238)", colorClass: "violet" },
    { text: "rgb(218, 112, 214)", colorClass: "orchid" },
    { text: "rgb(221, 160, 221)", colorClass: "plum" },
    { text: "rgb(62, 54, 119)", colorClass: "cornflower" },
    { text: "rgb(101, 39, 93)", colorClass: "palatinate" },
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
