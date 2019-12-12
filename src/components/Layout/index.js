import React from "react";
import Helmet from "react-helmet";

import Wrapper from "../Wrapper/Wrapper";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import "../../styles/index.scss";

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Khairul Bahri: Developer of all things web"
      meta={[
        {
          name: "description",
          content:
            "Khairul Bahri is a fullstack web developer based in Jakarta, Indonesia"
        },
        {
          name: "keywords",
          content:
            "web development, software engineering, react.js, javascript, node.js"
        },
        // {
        //   name: "google-site-verification",
        //   content: "ZQKLQAaGhOabXPhA_kdXgKHw3hOlbjkGImQAAVD_uG0"
        // }
      ]}
    />
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  </div>
);

export default Layout;
