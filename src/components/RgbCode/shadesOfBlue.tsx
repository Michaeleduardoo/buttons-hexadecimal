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
              <span className="slateBlue">SlateBlue </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="slateBlue1"> SlateBlue1 </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="slateBlue3"> SlateBlue3 </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="darkSlateBlue"> DarkSlateBlue </span>
            </button>
          </div>
        </CCol>

        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="midnightBlue"> MidnightBlue </span>
            </button>
          </div>
        </CCol>
      </CRow>

      <CRow xs={{ cols: 5 }}>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="navy"> Navy </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="darkBlue"> DarkBlue </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="mediumBlue"> MediumBlue </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="blue"> Blue </span>
            </button>
          </div>
        </CCol>

        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="CornflowerBlue"> CornflowerBlue </span>
            </button>
          </div>
        </CCol>
      </CRow>

      <CRow xs={{ cols: 5 }}>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="royalBlue"> RoyalBlue </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="dodgerBlue"> DodgerBlue </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="deepSkyBlue"> DeepSkyBlue </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="lightSkyBlue"> LightSkyBlue </span>
            </button>
          </div>
        </CCol>

        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="skyBlue"> SkyBlue </span>
            </button>
          </div>
        </CCol>
      </CRow>

      <CRow xs={{ cols: 5 }}>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="lightBlue"> LightBlue </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="steelBlue"> SteelBlue </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="lightSteelBlue"> LightSteelBlue </span>
            </button>
          </div>
        </CCol>
        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="slateGray"> SlateGray </span>
            </button>
          </div>
        </CCol>

        <CCol>
          <div className="buttons">
            <button className="btn btn-3 hover-border-2">
              <span className="lightSlateGray"> LightSlateGray </span>
            </button>
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default Page;
