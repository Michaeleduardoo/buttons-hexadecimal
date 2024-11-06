"use client";
import "@/sass/buttons.scss";

import { CRow, CCol } from "@coreui/react";

const Page = () => {
  return (
    <>
      <CRow xs={{ cols: 3 }} className="primeContainer">
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="orangeRed">rgb(255, 69, 0)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="darkOrange">rgb(255, 140, 0)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="orange">rgb(255, 165, 0)</span>
            </button>
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default Page;
