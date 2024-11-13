"use client";

import { CFooter, CLink } from "@coreui/react";

const Page = () => {
  return (
    <>
      <CFooter className="footer">
        <div>
          <CLink
            href="https://www.linkedin.com/in/michael-eduardo/"
            target="_blank"
            className="linkFooter"
          >
            Michael Eduardo Pereira
          </CLink>
        </div>
      </CFooter>
    </>
  );
};

export default Page;
