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
  const colors = [
    { text: "rgb(240, 248, 255)", colorClass: "aliceBlue" },
    { text: "rgb(248, 248, 255)", colorClass: "ghostWhite" },
    { text: "rgb(255, 250, 250)", colorClass: "snow" },
    { text: "rgb(255, 245, 238)", colorClass: "seashell" },
    { text: "rgb(255, 250, 240)", colorClass: "floralWhite" },
    { text: "rgb(245, 245, 245)", colorClass: "whiteSmoke" },
    { text: "rgb(245, 245, 220)", colorClass: "beige" },
    { text: "rgb(253, 245, 230)", colorClass: "oldLace" },
    { text: "rgb(255, 255, 240)", colorClass: "ivory" },
    { text: "rgb(250, 240, 230)", colorClass: "linen" },
    { text: "rgb(255, 248, 220)", colorClass: "cornsilk" },
    { text: "rgb(250, 235, 215)", colorClass: "antiqueWhite" },
    { text: "rgb(255, 235, 205)", colorClass: "blanchedAlmond" },
    { text: "rgb(255, 228, 196)", colorClass: "bisque" },
    { text: "rgb(255, 255, 224)", colorClass: "lightYellow" },
    { text: "rgb(255, 250, 205)", colorClass: "lemonChiffon" },
    { text: "rgb(250, 250, 210)", colorClass: "lightGoldenrodYellow" },
    { text: "rgb(255, 239, 213)", colorClass: "papayaWhip" },
    { text: "rgb(255, 218, 185)", colorClass: "peachPuff" },
    { text: "rgb(255, 228, 181)", colorClass: "moccasin" },
    { text: "rgb(238, 232, 170)", colorClass: "paleGoldenrod" },
    { text: "rgb(255, 228, 225)", colorClass: "mistyRose" },
    { text: "rgb(255, 240, 245)", colorClass: "lavenderBlush" },
    { text: "rgb(230, 230, 250)", colorClass: "lavender" },
    { text: "rgb(216, 191, 216)", colorClass: "thistle" },
    { text: "rgb(240, 255, 255)", colorClass: "azure" },
    { text: "rgb(224, 255, 255)", colorClass: "lightCyan" },
    { text: "rgb(176, 224, 230)", colorClass: "powderBlue" },
    { text: "rgb(175, 238, 238)", colorClass: "paleTurquoise" },
    { text: "rgb(240, 255, 240)", colorClass: "honeydew" },
    { text: "rgb(245, 255, 250)", colorClass: "mintCream" },
    { text: "rgb(242, 242, 240)", colorClass: "dyrup" },
    { text: "rgb(238, 230, 220)", colorClass: "whiteChocolate" },
    { text: "rgb(250, 246, 243)", colorClass: "cultured" },
    { text: "rgb(255, 255, 255)", colorClass: "white" },
  ];

  return (
    <>
      {Array.from({ length: Math.ceil(colors.length / 5) }).map(
        (_, rowIndex) => (
          <CRow xs={{ cols: 5 }} className="primeContainer" key={rowIndex}>
            {colors.slice(rowIndex * 5, rowIndex * 5 + 5).map((color) => (
              <ColorButton
                key={color.text}
                text={color.text}
                colorClass={color.colorClass}
              />
            ))}
          </CRow>
        )
      )}
    </>
  );
};

export default Page;
