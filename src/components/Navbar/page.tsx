"use client";
import "@/sass/navbar.scss";

import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarText,
  CAvatar,
} from "@coreui/react";

const Page = () => {
  return (
    <>
      <CNavbar className="bg-body-tertiary navFundo">
        <CContainer fluid>
          <CNavbarBrand>
            <CAvatar
              size="md"
              src="https://www.color-hex.com/palettes/33993.png"
            />
          </CNavbarBrand>
          <CNavbarBrand
            href="https://coreui.io/react/"
            target="_blank"
            className=""
          >
            CoreUI &copy;2024
          </CNavbarBrand>
        </CContainer>
      </CNavbar>
    </>
  );
};

export default Page;
