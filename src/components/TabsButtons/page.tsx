"use client";
import ColorName from "../ColorName/page";
import HexadecimalCode from "../HexadecimalCode/page";
import RgbCode from "../RgbCode/page";
import {
  CCardText,
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarText,
  CAvatar,
  CTabs,
  CTabList,
  CTab,
  CTabContent,
  CTabPanel,
  CCard,
  CCardBody,
} from "@coreui/react";

import "@/sass/tabsbuttons.scss";

const Page = () => {
  return (
    <CCard className="tabsButton">
      <CCardBody>
        <CTabs activeItemKey={1}>
          <CTabList variant="tabs" layout="justified">
            <CTab aria-controls="home-tab-pane" itemKey={1}>
              Nome da Cor
            </CTab>
            <CTab aria-controls="profile-tab-pane" itemKey={2}>
              Código hexadecimal
            </CTab>
            <CTab aria-controls="contact-tab-pane" itemKey={3}>
              Código RGB
            </CTab>
          </CTabList>
          <CTabContent>
            <CTabPanel
              className="py-3"
              aria-labelledby="home-tab-pane"
              itemKey={1}
            >
              <CCard className="cashie">
                <CCardBody>
                  <ColorName />
                </CCardBody>
              </CCard>
            </CTabPanel>
            <CTabPanel
              className="py-3"
              aria-labelledby="home-tab-pane"
              itemKey={2}
            >
              <CCard className="cashie">
                <CCardBody>
                  <HexadecimalCode />
                </CCardBody>
              </CCard>
            </CTabPanel>
            <CTabPanel
              className="py-3"
              aria-labelledby="home-tab-pane"
              itemKey={3}
            >
              <CCard className="cashie">
                <CCardBody>
                  <RgbCode />
                </CCardBody>
              </CCard>
            </CTabPanel>
          </CTabContent>
        </CTabs>
      </CCardBody>
    </CCard>
  );
};

export default Page;
