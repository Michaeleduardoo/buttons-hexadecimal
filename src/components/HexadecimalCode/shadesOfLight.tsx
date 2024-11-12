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
    { text: "#F0F8FF", colorClass: "aliceBlue" },
    { text: "#F8F8FF", colorClass: "ghostWhite" },
    { text: "#FFFAFA", colorClass: "snow" },
    { text: "#FFF5EE", colorClass: "seashell" },
    { text: "#FFFAF0", colorClass: "floralWhite" },
    { text: "#F5F5F5", colorClass: "whiteSmoke" },
    { text: "#F5F5DC", colorClass: "beige" },
    { text: "#FDF5E6", colorClass: "oldLace" },
    { text: "#FFFFF0", colorClass: "ivory" },
    { text: "#FAF0E6", colorClass: "linen" },
    { text: "#FFF8DC", colorClass: "cornsilk" },
    { text: "#FAEBD7", colorClass: "antiqueWhite" },
    { text: "#FFEBCD", colorClass: "blanchedAlmond" },
    { text: "#FFE4C4", colorClass: "bisque" },
    { text: "#FFFFE0", colorClass: "lightYellow" },
    { text: "#FFFACD", colorClass: "lemonChiffon" },
    { text: "#FAFAD2", colorClass: "lightGoldenrodYellow" },
    { text: "#FFEFD5", colorClass: "papayaWhip" },
    { text: "#FFDAB9", colorClass: "peachPuff" },
    { text: "#FFE4B5", colorClass: "moccasin" },
    { text: "#EEE8AA", colorClass: "paleGoldenrod" },
    { text: "#FFE4E1", colorClass: "mistyRose" },
    { text: "#FFF0F5", colorClass: "lavenderBlush" },
    { text: "#E6E6FA", colorClass: "lavender" },
    { text: "#D8BFD8", colorClass: "thistle" },
    { text: "#F0FFFF", colorClass: "azure" },
    { text: "#E0FFFF", colorClass: "lightCyan" },
    { text: "#B0E0E6", colorClass: "powderBlue" },
    { text: "#E0FFFF", colorClass: "paleTurquoise" },
    { text: "#F0FFF0", colorClass: "honeydew" },
    { text: "#F5FFFA", colorClass: "mintCream" },
    { text: "#F2F2F0", colorClass: "dyrup" },
    { text: "#EEE6DC", colorClass: "whiteChocolate" },
    { text: "#FAF6F3", colorClass: "cultured" },
    { text: "#FFFFFF", colorClass: "white" },
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
