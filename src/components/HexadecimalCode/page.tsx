"use client";
import "@/sass/buttons.scss";

import { CRow, CCol, CCardBody, CCardText } from "@coreui/react";

import ShadesOfGray from "../ColorName/shadesOfGray";
import ShadesOfBlue from "../ColorName/shadesOfBlue";
import ShadesOfCyan from "../ColorName/shadesOfCyan";
import ShadesOfGreen from "../ColorName/shadesOfGreen";
import ShadesOfBrown from "../ColorName/shadesOfBrown";
import ShadesOfPurple from "../ColorName/shadesOfPurple";
import ShadesOfPink from "../ColorName/shadesOfPink";
import ShadesOfRed from "../ColorName/shadesOfRed";
import ShadesOfOrange from "../ColorName/shadesOfOrange";
import ShadesOfYellow from "../ColorName/shadesOfYellow";
import ShadesOfLight from "../ColorName/shadesOfLight";

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
