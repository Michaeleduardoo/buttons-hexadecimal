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
              <span className="aqua-Cyan">rgb(0, 255, 255)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="darkTurquoise">rgb(0, 206, 209)</span>
            </button>
          </div>
        </CCol>

        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="turquoise">rgb(64, 224, 208)</span>
            </button>
          </div>
        </CCol>

        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="mediumTurquoise">rgb(72, 209, 204)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="lightSeaGreen">rgb(32, 178, 170)</span>
            </button>
          </div>
        </CCol>
      </CRow>

      <CRow xs={{ cols: 5 }}>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="darkCyan">rgb(0, 139, 139)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="teal">rgb(0, 128, 128)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="aquamarine">rgb(127, 255, 212)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="mediumAquamarine">rgb(102, 205, 170)</span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="cadetBlue">rgb(95, 158, 160)</span>
            </button>
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default Page;
