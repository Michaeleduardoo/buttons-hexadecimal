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
    { text: "#BDB76B", colorClass: "darkKhaki" },
    { text: "#DAA520", colorClass: "goldenrod" },
    { text: "#B8860B", colorClass: "darkGoldenrod" },
    { text: "#8B4513", colorClass: "saddleBrown" },
    { text: "#A0522D", colorClass: "sienna" },
  ];

  const colors2 = [
    { text: "#BC8F8F", colorClass: "rosyBrown" },
    { text: "#CD853F", colorClass: "peru" },
    { text: "#D2691E", colorClass: "chocolate" },
    { text: "#F4A460", colorClass: "sandyBrown" },
    { text: "#FFDEAD", colorClass: "navajoWhite" },
  ];

  const colors3 = [
    { text: "#F5DEB3", colorClass: "wheat" },
    { text: "#DEB887", colorClass: "burlyWood" },
    { text: "#D2B48C", colorClass: "tan" },
    { text: "#4B2F28", colorClass: "brown" },
    { text: "#A38068", colorClass: "cafe" },
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
