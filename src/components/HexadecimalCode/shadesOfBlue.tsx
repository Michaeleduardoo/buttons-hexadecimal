"use client";
import "@/sass/buttons.scss";

import { CRow, CCol } from "@coreui/react";

const colors = [
  { name: "slateBlue", code: "#6A5ACD" },
  { name: "slateBlue1", code: "#836FFF" },
  { name: "slateBlue3", code: "#6959CD" },
  { name: "darkSlateBlue", code: "#483D8B" },
  { name: "midnightBlue", code: "#191970" },
  { name: "navy", code: "#000080" },
  { name: "darkBlue", code: "#00008B" },
  { name: "mediumBlue", code: "#0000CD" },
  { name: "blue", code: "#0000FF" },
  { name: "CornflowerBlue", code: "#6495ED" },
  { name: "royalBlue", code: "#4169E1" },
  { name: "dodgerBlue", code: "#1E90FF" },
  { name: "deepSkyBlue", code: "#00BFFF" },
  { name: "lightSkyBlue", code: "#87CEFA" },
  { name: "skyBlue", code: "#87CEEB" },
  { name: "lightBlue", code: "#ADD8E6" },
  { name: "steelBlue", code: "#4682B4" },
  { name: "lightSteelBlue", code: "#B0C4DE" },
  { name: "slateGray", code: "#708090" },
  { name: "lightSlateGray", code: "#778899" },
];

const Page = () => {
  const renderButtons = (startIndex, endIndex) =>
    colors.slice(startIndex, endIndex).map((color) => (
      <CCol key={color.name}>
        <div className="buttons">
          <button className="btn btn-3 hover-border-2">
            <span className={color.name}>{color.code}</span>
          </button>
        </div>
      </CCol>
    ));

  return (
    <>
      <CRow xs={{ cols: 5 }} className="primeContainer">
        {renderButtons(0, 5)}
      </CRow>
      <CRow xs={{ cols: 5 }}>{renderButtons(5, 10)}</CRow>
      <CRow xs={{ cols: 5 }}>{renderButtons(10, 15)}</CRow>
      <CRow xs={{ cols: 5 }}>{renderButtons(15, 20)}</CRow>
    </>
  );
};

export default Page;
