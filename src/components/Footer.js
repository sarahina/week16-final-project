import React from "react";
import styled from "styled-components";

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: magenta;
  color: white;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  position: absolute;
  right: 0;bottom:0;left:0;
`;


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterInfo>
      
    <footer style={{ textAlign: "center" }}>
      Coded by
      <a href="https://github.com/sarahina">
        {" "}
        May Saidi
        <span role="img" aria-label="copyright">
          ©️
        </span>
        {year}
      </a>
      <br></br>
    </footer>
    </FooterInfo>
   
  );
};

export default Footer;
