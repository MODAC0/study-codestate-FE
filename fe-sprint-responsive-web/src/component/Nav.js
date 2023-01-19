import styled from "styled-components";
import "../App.css";
import "./Nav.css";

const NavContainer = styled.ul`
  &> li {
    margin: 0 1vw;
    &> a {
    font-family: "SamsungSharpSans-Regular";
  }
  }
`

const Nav = () => {
  return (
    <>
      <header className="header">
        <div className="header-container d-block-pc">
          <div className="nav-container">
            <h1 className="logo">
              <img src="../img/logo.svg" className="logo_icon" alt="logo_icon" />
            </h1>
            <nav>
                <NavContainer>
                  <li>
                    <a href="">Our Stories</a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Career</a>
                  </li>
                  <li>
                    <a href="">News</a>
                  </li>
                </NavContainer> 
            </nav>
          </div>
          <div className="nav-widget">
            <div className="widget-hash">
              <div className="hash-rolling-wrapper">
                <ul>
                  <li>
                    <a href="">#A_Sense_of_Color</a>
                  </li>
                  <li>
                    <a href="">#Expanding_the_World</a>
                  </li>
                  <li>
                    <a href="">#Living_Smarter</a>
                  </li>
                  <li>
                    <a href="">#Inspire_for_the_Better</a>
                  </li>
                  <li>
                    <a href="">#Design_for_All</a>
                  </li>
                  <li>
                    <a href="">#A_Sense_of_Color</a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="" className="widget-search">
              <img src="../img/icon_search.svg" alt="search" />
            </a>
            <div className="widget-lang">
              <a href="" className="lang-btn">
                <img src="../img/icon_language.svg" alt="language" />
              </a>
            </div>
          </div>
        </div>
        <div className="header-container d-block-m">
          <h1 className="logo">
            <img src="../img/logo.svg" className="logo_icon" alt="logo_icon" />
          </h1>
          <div className="nav-widget">
            <a href="" className="widget-search">
              <img src="../img/icon_search.svg" alt="search" />
            </a>
            <a href="#" className="widget-nav-btn"></a>
          </div>
        </div>
      </header> 
    </>
  );
};

export default Nav;
