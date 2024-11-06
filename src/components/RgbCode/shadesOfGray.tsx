"use client";
import "@/sass/buttons.scss";

import { CRow, CCol } from "@coreui/react";

const Page = () => {
  return (
    <>
      <CRow xs={{ cols: 5 }} className="primeContainer">
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2 Black">
              <span className="black">rgb(0, 0, 0)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="grey11">rgb(28, 28, 28)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="grey21">rgb(54, 54, 54)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="grey31">rgb(79, 79, 79)</span>
            </button>
          </div>
        </CCol>

        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="dimGray">rgb(105, 105, 105)</span>
            </button>
          </div>
        </CCol>
      </CRow>

      <CRow xs={{ cols: 5 }}>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="gray">rgb(128, 128, 128)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="darkGray">rgb(169, 169, 169)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="silver">rgb(192, 192, 192)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="lightGrey">rgb(211, 211, 211)</span>
            </button>
          </div>
        </CCol>

        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="gainsboro">rgb(220, 220, 220)</span>
            </button>
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default Page;
