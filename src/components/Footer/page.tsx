"use client";

import { CFooter, CLink } from "@coreui/react";

const Page = () => {
  return (
    <>
      <CFooter>
        <div>
          <span>Linkedin: </span>
          <CLink
            href="https://www.linkedin.com/in/michael-eduardo/"
            target="_blank"
          >
            @MichaelEduardo
          </CLink>
        </div>
        <div>
          <CLink href="https://coreui.io/react/">CoreUI </CLink>
          <span>&copy; 2024 </span>
        </div>
      </CFooter>
    </>
  );
};

export default Page;
