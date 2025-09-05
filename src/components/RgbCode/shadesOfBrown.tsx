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
    { text: "rgb(189, 183, 107)", colorClass: "darkKhaki" },
    { text: "rgb(218, 165, 32)", colorClass: "goldenrod" },
    { text: "rgb(184, 134, 11)", colorClass: "darkGoldenrod" },
    { text: "rgb(139, 69, 19)", colorClass: "saddleBrown" },
    { text: "rgb(160, 82, 45)", colorClass: "sienna" },
  ];

  const colors2 = [
    { text: "rgb(188, 143, 143)", colorClass: "rosyBrown" },
    { text: "rgb(205, 133, 63)", colorClass: "peru" },
    { text: "rgb(210, 105, 30)", colorClass: "chocolate" },
    { text: "rgb(244, 164, 96)", colorClass: "sandyBrown" },
    { text: "rgb(255, 222, 173)", colorClass: "navajoWhite" },
  ];

  const colors3 = [
    { text: "rgb(245, 222, 179)", colorClass: "wheat" },
    { text: "rgb(222, 184, 135)", colorClass: "burlyWood" },
    { text: "rgb(210, 180, 140)", colorClass: "tan" },
    { text: "rgb(75, 47, 40)", colorClass: "brown" },
    { text: "rgb(163, 128, 104)", colorClass: "cafe" },
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
