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
            href="https://www.linkedin.com/in/michael-eduardo/"
            target="_blank"
            className="textNav"
          >
            @MichaelEduardo
          </CNavbarBrand>
        </CContainer>
      </CNavbar>
    </>
  );
};

export default Page;
