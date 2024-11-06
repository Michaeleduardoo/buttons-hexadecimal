"use client";
import "@/sass/buttons.scss";

import { CRow, CCol } from "@coreui/react";

const Page = () => {
  return (
    <>
      <CRow xs={{ cols: 5 }} className="primeContainer">
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="mediumVioletRed">rgb(199, 21, 133)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="deepPink">rgb(255, 20, 147)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="hotPink">rgb(255, 105, 180)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="paleVioletRed">rgb(219, 112, 147)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="lightPink">rgb(255, 182, 193)</span>
            </button>
          </div>
        </CCol>
      </CRow>

      <CRow xs={{ cols: 5 }}>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="pink">rgb(255, 192, 203)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="lightCoral">rgb(240, 128, 128)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="indianRed">rgb(205, 92, 92)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="crimson">rgb(220, 20, 60)</span>
            </button>
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default Page;
