import React, { useEffect, useState } from "react";
import styled,  {keyframes} from "styled-components";
import '../App.css'; //이거 써줘야 css적용됨.

import image from '../icon/image.jpeg';
import image1 from '../icon/image1.jpeg';


const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const  fadeInText= keyframes` {
  0% {
    opacity: 0;
    top: 60px;
  }
  100% {
    opacity: 1;
    top: 0px;
  }
}
`;

const MainArea = styled.div`
  @media only screen and (max-width: 1200px){
    padding: 130px 30px 0 30px;
  }
  @media only screen and (max-width: 767px ){
    background-image: none;
    padding: 180px 30px 0 30px;
  }

  background-image: url('https://i.pinimg.com/564x/25/2a/85/252a8531ff0b79234be74178758db6da.jpg');
  background-repeat : no-repeat;
  background-attachment: fixed;
  background-position: right;

  max-height: 850px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 130px 0px 0 0px;


  div.text{
    width: 1200px;
    margin : 0 auto;
    p{
      //애니메이션
      position: relative;
      opacity: 0;
      top: 60px;
      animation: ${fadeInText} 1s 0.5s forwards;
      width: 100%;
      height:auto;
      color: black;
      font-weight:600;
      font-size: 61px;
      letter-spacing: 6px;
      line-height: 1.4;
      @media only screen and (max-width: 767px ){
        font-size: 54px;
      }
      @media only screen and (max-width: 450px ){
        font-size: 36px;
      }
    }
    p.txt_sma{
      padding-top: 23px;
      letter-spacing: 0px;
      font-weight: 600;
      font-size: 22px;
      line-height: 1.5;
      color:black;
      opacity: 0;
      @media only screen and (max-width: 767px ){
        color:black;
        width: 260px;
      }
    }
  }
  
`;

const Page = styled.div`
  div.content_wrap{
    max-width: 1200px;
    padding: 150px 0 0 0;
    margin: 0 auto;
    height: 850px;
    overflow: hidden;
    @media only screen and (max-width: 1200px){
      width:100%;
      padding: 150px 20px 0 20px;
    }
    @media only screen and (max-width: 960px ){
      width:100%;
      padding: 80px 20px 0 20px;
    }
    
    >div.text{
      width: 600px;
      display: inline-block;
      @media only screen and (max-width: 1200px){
        width: 100%;
      }
      >div{
        font-size: 32px;
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: 1px;
        color: #191f28;
         //animation
        position: relative;
        opacity: 0;
        top: 60px;
        .hidden{
          display: none;
        }
        @media only screen and (max-width: 1200px){
          font-size: 24px;
          font-weight: 600;
          line-height: 1.7;
          letter-spacing: 1px;
          color: #191f28;
        }
        @media only screen and (max-width: 480px){
          font-size: 20px;
          .hidden{
            display: inline-block;
          }
        }
      }
      >div.img_two{
        padding:100px 0 0 100px;
        //animation
        opacity:0;
          position: relative;
          top: 60px;
        @media only screen and (max-width: 1200px){
          padding: 80px 0 0 0;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr ;
        }
        @media only screen and (max-width: 1000px){
          display: block;
          margin: 0 auto;
          width: 100%;
          text-align: center;
          img.page1_2{
            display: none;
          }
        }
        @media only screen and (max-width: 480px){
          padding:0;
          img.page1_1{
            width:260px;
          }
        }       
      }
    }
    div.img{
      display: inline-block;
      width: 600px;
      float: right;
      padding-left: 133px;
      //animation
      opacity:0;
      position: relative;
      top: 60px;
      @media only screen and (max-width: 1200px){
        display: none;
      }
    }  
  }
  

  //애니메이션
  div.content_wrap.change{
    >div.text{
      >div{
         //animation
         position: relative;
        opacity: 1;
        top: 0px;
        transition: all 1s ease 0.5s;
      }
      >div.img_two{
        //animation
        position: relative;
        opacity: 1;
        top: 0px;
        transition: all 1s ease 1.5s;
        @media only screen and (max-width: 1200px){
          
          padding: 80px 0 0 0;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr ;
           //animation
          position: relative;
          opacity: 1;
          top: 0px;
          transition: all 1s ease 1s;
        }
        @media only screen and (max-width: 1000px){
          display: block;
          margin: 0 auto;
          width: 100%;
          text-align: center;
          img.page1_2{
            display: none;
          }
        }       
      }
    }
    div.img{
      display: inline-block;
      width: 600px;
      float: right;
      padding-left: 133px;
      //animation
        position: relative;
        opacity: 1;
        top: 0px;
        transition: all 1s ease 1s;
      @media only screen and (max-width: 1200px){
        display: none;
      }
    }  
  }
 
`;


const Render = () => {
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    console.log(scrollPosition);
  });

  return (
    <>
      <MainArea>
        <div className='text'>
          <p>여러분들만의</p>
          <p>앱으로</p>
          <p>꾸며보세요</p>
          <p className='txt_sma'>배경화면을 <br/>적용하셔서 이쁘게 꾸며보세요</p>
        </div>
      </MainArea>
      <Page>
        <div className={scrollPosition < 300 ? 'content_wrap' : 'content_wrap change'}>
          <div className= 'text'>
            <div>어떻게 해야할지 <br className='hidden'/>잘 모르시겠다구요 ?
              <br/>CSS 애니메이션이나
              <br/>Canvas를 활용해보세요:D
            </div>
            <div className= 'img_two'>
              <img className='image' src={image} alt="page"/>
              <img className='image1' src={image1}/>
            </div>
          </div>
          <div className='img'>
            <img className='image1' src={image1}/>
          </div>
        </div>
      </Page>
    </>
  );
};

export default Render;