"use client";
import "@/sass/buttons.scss";

import { CRow, CCol } from "@coreui/react";

const Page = () => {
  return (
    <>
      <CRow xs={{ cols: 5 }} className="primeContainer">
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2 Black	">
              <span className="slateBlue">#6A5ACD </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="slateBlue1"> #836FFF </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="slateBlue3"> #6959CD </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="darkSlateBlue"> #483D8B </span>
            </button>
          </div>
        </CCol>

        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="midnightBlue"> #191970 </span>
            </button>
          </div>
        </CCol>
      </CRow>

      <CRow xs={{ cols: 5 }}>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="navy"> #000080 </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="darkBlue"> #00008B </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="mediumBlue"> #0000CD </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="blue"> #0000FF </span>
            </button>
          </div>
        </CCol>

        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="CornflowerBlue"> #6495ED </span>
            </button>
          </div>
        </CCol>
      </CRow>

      <CRow xs={{ cols: 5 }}>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="royalBlue"> #4169E1 </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="dodgerBlue"> #1E90FF </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="deepSkyBlue"> #00BFFF </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="lightSkyBlue"> #87CEFA </span>
            </button>
          </div>
        </CCol>

        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="skyBlue"> #87CEEB </span>
            </button>
          </div>
        </CCol>
      </CRow>

      <CRow xs={{ cols: 5 }}>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="lightBlue"> #ADD8E6 </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="steelBlue"> #4682B4 </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="lightSteelBlue"> #B0C4DE </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="slateGray"> #708090 </span>
            </button>
          </div>
        </CCol>

        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="lightSlateGray"> #778899 </span>
            </button>
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default Page;
