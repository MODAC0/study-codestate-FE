import logo from "../static/images/logo_white.png";
import styled from "styled-components";
const HeaderDiv = styled.div`
  font-size: 2.2rem;
  color: white;
`;
const HeaderImg = styled.img`
  width: 120px;
`;
const Header = () => {
  return (
    <header>
      <HeaderImg src={logo} />
      <HeaderDiv>웹 표준 & 웹 접근성</HeaderDiv>
    </header>
  );
};

export default Header;
