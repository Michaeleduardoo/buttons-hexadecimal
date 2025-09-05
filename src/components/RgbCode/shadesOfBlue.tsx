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
    { text: "rgb(106, 90, 205)", colorClass: "slateBlue" },
    { text: "rgb(131, 111, 255)", colorClass: "slateBlue1" },
    { text: "rgb(105, 89, 205)", colorClass: "slateBlue3" },
    { text: "rgb(72, 61, 139)", colorClass: "darkSlateBlue" },
    { text: "rgb(25, 25, 112)", colorClass: "midnightBlue" },
  ];

  const colors2 = [
    { text: "rgb(0, 0, 128)", colorClass: "navy" },
    { text: "rgb(0, 0, 139)", colorClass: "darkBlue" },
    { text: "rgb(0, 0, 205)", colorClass: "mediumBlue" },
    { text: "rgb(0, 0, 255)", colorClass: "blue" },
    { text: "rgb(100, 149, 237)", colorClass: "cornflowerBlue" },
  ];

  const colors3 = [
    { text: "rgb(65, 105, 225)", colorClass: "royalBlue" },
    { text: "rgb(30, 144, 255)", colorClass: "dodgerBlue" },
    { text: "rgb(0, 191, 255)", colorClass: "deepSkyBlue" },
    { text: "rgb(135, 206, 250)", colorClass: "lightSkyBlue" },
    { text: "rgb(135, 206, 235)", colorClass: "skyBlue" },
  ];

  const colors4 = [
    { text: "rgb(173, 216, 230)", colorClass: "lightBlue" },
    { text: "rgb(70, 130, 180)", colorClass: "steelBlue" },
    { text: "rgb(176, 196, 222)", colorClass: "lightSteelBlue" },
    { text: "rgb(112, 128, 144)", colorClass: "slateGray" },
    { text: "rgb(119, 136, 153)", colorClass: "lightSlateGray" },
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
