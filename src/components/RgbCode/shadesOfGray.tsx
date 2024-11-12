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
    { text: "rgb(0, 0, 0)", colorClass: "black" },
    { text: "rgb(28, 28, 28)", colorClass: "grey11" },
    { text: "rgb(54, 54, 54)", colorClass: "grey21" },
    { text: "rgb(79, 79, 79)", colorClass: "grey31" },
    { text: "rgb(105, 105, 105)", colorClass: "dimGray" },
  ];

  const colors2 = [
    { text: "rgb(128, 128, 128)", colorClass: "gray" },
    { text: "rgb(169, 169, 169)", colorClass: "darkGray" },
    { text: "rgb(192, 192, 192)", colorClass: "silver" },
    { text: "rgb(211, 211, 211)", colorClass: "lightGrey" },
    { text: "rgb(220, 220, 220)", colorClass: "gainsboro" },
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
