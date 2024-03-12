import styled from "styled-components"

const FooterStyle = styled.footer`
  width: 100%;
  height: 67.23px;
  background-color: #464646;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterTextStyle = styled.p`
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: #CCCCCC;
`;



const Footer = () =>{
    return (
        <FooterStyle>
            <FooterTextStyle>
                LOREM IPSUM ©2021
            </FooterTextStyle>
        </FooterStyle>
    )
}

export default Footer;