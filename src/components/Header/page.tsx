"use client";
import "@/sass/header.scss";
import Buttom from "../TabsButtons/page";

import { CCard, CCardBody, CHeader, CHeaderBrand } from "@coreui/react";

const Page = () => {
  return (
    <div className="cardTitle">
      <CHeader className="cardHeader">
        <CHeaderBrand href="#">Buttons de Cores</CHeaderBrand>
      </CHeader>
      <CCard>
        <CCardBody>Tabela de Cores HTML (nome, hexadecimal e RGB)</CCardBody>

        <Buttom />
      </CCard>
    </div>
  );
};

export default Page;
