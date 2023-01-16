import styled from 'styled-components';
import '../App.css';
import logo_svg from '../icon/codestates2.png';
import { ReactComponent as TopIcon } from '../icon/top_icon.svg';

const TopButton = styled.div`
  position: fixed;
  width: 48px;
  height: 48px;
  border-radius: 999px;
  background-color: #bfd780;
  box-shadow: 2px 4px 7px 1px #00000012;
  bottom: 24px;
  right: 16px;
  padding-top: 3px;
  z-index: 10;
  display: block;
  &.hidden {
    display: none;
  }
  svg {
    padding: 12px 18px;
    opacity: 0.9;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 8px;
  margin: auto;

  .logo {
    height: 100%;
    padding: 12px;
    float: left;
    .logo_icon {
      margin-top: 5px;
      height: 24px;
    }
  }
`;

const Nav = () => {
  return (
    <>
      <TopButton>
        <TopIcon></TopIcon>
      </TopButton>
      <div className="header">
        <Wrapper>
          <div className="logo">
            <img src={logo_svg} className="logo_icon" alt="logo_icon" />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Nav;
