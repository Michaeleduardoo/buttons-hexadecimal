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
              <span className="black">#000000 </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="grey11"> #1C1C1C </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="grey21"> #363636 </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="grey31	"> #4F4F4F </span>
            </button>
          </div>
        </CCol>

        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="dimGray"> #696969 </span>
            </button>
          </div>
        </CCol>
      </CRow>

      <CRow xs={{ cols: 5 }}>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="gray"> #808080 </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="darkGray"> #A9A9A9 </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="silver"> #C0C0C0 </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="lightGrey"> #D3D3D3 </span>
            </button>
          </div>
        </CCol>

        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="gainsboro"> #DCDCDC </span>
            </button>
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default Page;
