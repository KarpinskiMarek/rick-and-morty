import styled from "styled-components";

const HeaderStyle = styled.header`
  width: 100%;
  height: 95px;
  background: linear-gradient(121.489deg, #DAED49 0%, #DAED49 50%, #00BDD4 50%, #00BDD4 100%);
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const HeaderTextStyle = styled.p`
  font-family: Lato, sans-serif;
  font-size: 35px;
  font-weight: 700;
  line-height: 42px;
  margin: 2rem;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;

function Header() {

    return (
        <HeaderStyle>
            <HeaderTextStyle>
                LOREM IPSUM
            </HeaderTextStyle>
        </HeaderStyle>
    );
}
export default Header;