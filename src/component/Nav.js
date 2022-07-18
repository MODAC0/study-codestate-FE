import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../App.css'; //이거 써줘야 css적용됨.


import logo_svg from '../icon/codestates2.png';
import { ReactComponent as TopIcon } from '../icon/top_icon.svg';

const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const TopButton = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: #bfd780;
  box-shadow: 2px 4px 7px 1px #00000012;
  bottom: 25px;
  right: 16px;
  padding-top: 3px;
  z-index: 10;
  display: block;
  &.hidden{
    display: none;
  }
  svg {
    padding: 12px 18px;
    opacity: 0.9;
  }
`;

const Wrapper = styled.div`
  //( 기본적용 )모바일 : 768px 이하 ::  @media only제외한 모든 사이즈 적용
  width: 100%;
  height: 100%;
  padding: 0 10px;
  margin: auto;

  .logo {
    height: 100%;
    padding: 12px;
    /* border: 1px solid black; */
    float: left;
    .logo_icon {
      margin-top: 5px;
      height: 25px;
    }
  }
  
  @media only screen and (max-width: 768px) {
    .search_box1 {
      display: none;
    }
  }
  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    .logo {
      padding: 12px 14px 12px 0;
      .logo_icon {
        margin-top: 5px;
        height: 28px;
      }
    }
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: 1200px;
    padding: 0;

    .logo {
      padding: 12px 14px 12px 0;
      .logo_icon {
        margin-top: 5px;
        height: 28px;
      }
    }
  }
`;

const Nav = () => {
  // 스크롤 페이지 상단으로 이동 함수
  const toTheTop = () => {
    window.scrollTo(0, 0);
  };

  // 스크롤 내릴 때 헤더 변화주기
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
  });


  return (
    <>
      <TopButton className={scrollPosition > 400? '' : 'hidden'} onClick={toTheTop}>
        <TopIcon ></TopIcon>
      </TopButton>
      <div className={scrollPosition < 50 ? "header" : "header change_header"}>
        <Wrapper>
            <div
              className="logo"
              onClick={() => {
                toTheTop();
                console.log('상단이동');
              }}
            >
              <img src={logo_svg} className="logo_icon" />
            </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Nav;