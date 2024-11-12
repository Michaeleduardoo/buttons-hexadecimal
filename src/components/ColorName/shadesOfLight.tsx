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
    { text: "AliceBlue", colorClass: "aliceBlue" },
    { text: "GhostWhite", colorClass: "ghostWhite" },
    { text: "Snow", colorClass: "snow" },
    { text: "Seashell", colorClass: "seashell" },
    { text: "FloralWhite", colorClass: "floralWhite" },
    { text: "WhiteSmoke", colorClass: "whiteSmoke" },
    { text: "Beige", colorClass: "beige" },
    { text: "OldLace", colorClass: "oldLace" },
    { text: "Ivory", colorClass: "ivory" },
    { text: "Linen", colorClass: "linen" },
    { text: "Cornsilk", colorClass: "cornsilk" },
    { text: "AntiqueWhite", colorClass: "antiqueWhite" },
    { text: "BlanchedAlmond", colorClass: "blanchedAlmond" },
    { text: "Bisque", colorClass: "bisque" },
    { text: "LightYellow", colorClass: "lightYellow" },
    { text: "LemonChiffon", colorClass: "lemonChiffon" },
    { text: "LightGoldenrodYellow", colorClass: "lightGoldenrodYellow" },
    { text: "PapayaWhip", colorClass: "papayaWhip" },
    { text: "PeachPuff", colorClass: "peachPuff" },
    { text: "Moccasin", colorClass: "moccasin" },
    { text: "PaleGoldenrod", colorClass: "paleGoldenrod" },
    { text: "MistyRose", colorClass: "mistyRose" },
    { text: "LavenderBlush", colorClass: "lavenderBlush" },
    { text: "Lavender", colorClass: "lavender" },
    { text: "Thistle", colorClass: "thistle" },
    { text: "Azure", colorClass: "azure" },
    { text: "LightCyan", colorClass: "lightCyan" },
    { text: "PowderBlue", colorClass: "powderBlue" },
    { text: "PaleTurquoise", colorClass: "paleTurquoise" },
    { text: "Honeydew", colorClass: "honeydew" },
    { text: "MintCream", colorClass: "mintCream" },
    { text: "Dyrup", colorClass: "dyrup" },
    { text: "White Chocolate", colorClass: "whiteChocolate" },
    { text: "White", colorClass: "white" },
    { text: "Transparent", colorClass: "transparent" },
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
