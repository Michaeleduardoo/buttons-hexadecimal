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
              <span className="gold">rgb(255, 215, 0)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="yellow">rgb(255, 255, 0)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="khaki">rgb(240, 230, 140)</span>
            </button>
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default Page;
