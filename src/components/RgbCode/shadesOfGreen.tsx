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
    { text: "rgb(47, 79, 79)", colorClass: "darkSlateGray" },
    { text: "rgb(0, 250, 154)", colorClass: "mediumSpringGreen" },
    { text: "rgb(0, 255, 127)", colorClass: "springGreen" },
    { text: "rgb(152, 251, 152)", colorClass: "paleGreen" },
    { text: "rgb(144, 238, 144)", colorClass: "lightGreen" },
  ];

  const colors2 = [
    { text: "rgb(143, 188, 143)", colorClass: "darkSeaGreen" },
    { text: "rgb(60, 179, 113)", colorClass: "mediumSeaGreen" },
    { text: "rgb(46, 139, 87)", colorClass: "seaGreen" },
    { text: "rgb(0, 100, 0)", colorClass: "darkGreen" },
    { text: "rgb(0, 128, 0)", colorClass: "green" },
  ];

  const colors3 = [
    { text: "rgb(34, 139, 34)", colorClass: "forestGreen" },
    { text: "rgb(50, 205, 50)", colorClass: "limeGreen" },
    { text: "rgb(0, 255, 0)", colorClass: "lime" },
    { text: "rgb(124, 252, 0)", colorClass: "lawnGreen" },
    { text: "rgb(127, 255, 0)", colorClass: "chartreuse" },
  ];

  const colors4 = [
    { text: "rgb(173, 255, 47)", colorClass: "greenYellow" },
    { text: "rgb(154, 205, 50)", colorClass: "yellowGreen" },
    { text: "rgb(107, 142, 35)", colorClass: "oliveDrab" },
    { text: "rgb(85, 107, 47)", colorClass: "darkOliveGreen" },
    { text: "rgb(128, 128, 0)", colorClass: "olive" },
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
