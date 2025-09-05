"use client";
import "@/sass/buttons.scss";

import { CCardBody, CCardText } from "@coreui/react";

import ShadesOfGray from "../HexadecimalCode/shadesOfGray";
import ShadesOfBlue from "../HexadecimalCode/shadesOfBlue";
import ShadesOfCyan from "../HexadecimalCode/shadesOfCyan";
import ShadesOfGreen from "../HexadecimalCode/shadesOfGreen";
import ShadesOfBrown from "../HexadecimalCode/shadesOfBrown";
import ShadesOfPurple from "../HexadecimalCode/shadesOfPurple";
import ShadesOfPink from "../HexadecimalCode/shadesOfPink";
import ShadesOfRed from "../HexadecimalCode/shadesOfRed";
import ShadesOfOrange from "../HexadecimalCode/shadesOfOrange";
import ShadesOfYellow from "../HexadecimalCode/shadesOfYellow";
import ShadesOfLight from "../HexadecimalCode/shadesOfLight";

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
