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
    { text: "rgb(0, 255, 255)", colorClass: "aqua-Cyan" },
    { text: "rgb(0, 206, 209)", colorClass: "darkTurquoise" },
    { text: "rgb(64, 224, 208)", colorClass: "turquoise" },
    { text: "rgb(72, 209, 204)", colorClass: "mediumTurquoise" },
    { text: "rgb(32, 178, 170)", colorClass: "lightSeaGreen" },
  ];

  const colors2 = [
    { text: "rgb(0, 139, 139)", colorClass: "darkCyan" },
    { text: "rgb(0, 128, 128)", colorClass: "teal" },
    { text: "rgb(127, 255, 212)", colorClass: "aquamarine" },
    { text: "rgb(102, 205, 170)", colorClass: "mediumAquamarine" },
    { text: "rgb(95, 158, 160)", colorClass: "cadetBlue" },
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
    </>
  );
};

export default Page;
