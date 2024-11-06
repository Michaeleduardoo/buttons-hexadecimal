"use client";
import "@/sass/buttons.scss";

import { CRow, CCol, CCardBody, CCardText } from "@coreui/react";

import ShadesOfGray from "../RgbCode/shadesOfGray";
import ShadesOfBlue from "../RgbCode/shadesOfBlue";
import ShadesOfCyan from "../RgbCode/shadesOfCyan";
import ShadesOfGreen from "../RgbCode/shadesOfGreen";
import ShadesOfBrown from "../RgbCode/shadesOfBrown";
import ShadesOfPurple from "../RgbCode/shadesOfPurple";
import ShadesOfPink from "../RgbCode/shadesOfPink";
import ShadesOfRed from "../RgbCode/shadesOfRed";
import ShadesOfOrange from "../RgbCode/shadesOfOrange";
import ShadesOfYellow from "../RgbCode/shadesOfYellow";
import ShadesOfLight from "../RgbCode/shadesOfLight";

const Page = () => {
  return (
    <>
      <CCardBody className="ContCores">
        <CCardBody className="titleCores ">
          <CCardText>Tons de Cinza - Gray Colors</CCardText>
        </CCardBody>

        <ShadesOfGray />
      </CCardBody>

      <CCardBody className="ContCores">
        <CCardBody className="titleCores ">
          <CCardText>Tons de Azul - Blue Colors</CCardText>
        </CCardBody>
        <ShadesOfBlue />
      </CCardBody>

      <CCardBody className="ContCores">
        <CCardBody className="titleCores ">
          <CCardText>Tons de Ciano - Cyan Colors</CCardText>
        </CCardBody>
        <ShadesOfCyan />
      </CCardBody>

      <CCardBody className="ContCores">
        <CCardBody className="titleCores ">
          <CCardText>Tons de Verde - Green Colors</CCardText>
        </CCardBody>
        <ShadesOfGreen />
      </CCardBody>

      <CCardBody className="ContCores">
        <CCardBody className="titleCores ">
          <CCardText>Tons de Marrom - Brown Colors</CCardText>
        </CCardBody>
        <ShadesOfBrown />
      </CCardBody>

      <CCardBody className="ContCores">
        <CCardBody className="titleCores ">
          <CCardText>Tons de Roxo - Purple Colors</CCardText>
        </CCardBody>
        <ShadesOfPurple />
      </CCardBody>

      <CCardBody className="ContCores">
        <CCardBody className="titleCores ">
          <CCardText>Tons de Rosa - Pink Colors</CCardText>
        </CCardBody>
        <ShadesOfPink />
      </CCardBody>

      <CCardBody className="ContCores">
        <CCardBody className="titleCores ">
          <CCardText>Tons de Vermelho - Red Colors</CCardText>
        </CCardBody>
        <ShadesOfRed />
      </CCardBody>

      <CCardBody className="ContCores">
        <CCardBody className="titleCores ">
          <CCardText>Tons de Laranja - Orange Colors</CCardText>
        </CCardBody>
        <ShadesOfOrange />
      </CCardBody>

      <CCardBody className="ContCores">
        <CCardBody className="titleCores ">
          <CCardText>Tons de Amarelo - Yellow Colors</CCardText>
        </CCardBody>
        <ShadesOfYellow />
      </CCardBody>

      <CCardBody className="ContCores">
        <CCardBody className="titleCores ">
          <CCardText>Tons Pastel - Light Colors</CCardText>
        </CCardBody>
        <ShadesOfLight />
      </CCardBody>
    </>
  );
};

export default Page;
