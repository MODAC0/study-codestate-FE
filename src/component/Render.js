import styled from "styled-components";
import "../App.css";

const Top = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 10vw;
  margin-top: 8vw;
  animation-name: delay;
  animation-duration: 2s;
  animation-iteration-count: 1;
  @keyframes delay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  > h1 {
    font-family: "SamsungSharpSans-Bold";
    font-size: 2.5vw;
  }
  > span {
    font-size: 1.2vw;
    margin-top: 1.4vw;
  }
  > .content_01 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    > a {
      margin-top: 3.51562vw;
      overflow: hidden;
      width: 100%;
      height: 100%;
      ::after {
        height: 0;
      }
      > img {
        width: 100%;
        height: 100%;
        transition: transform 1s;
        transform: scale(1);
      }
    }
    :hover > a > img {
      transform: scale(1.05);
    }
    > .infomation {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 50%;
      margin-top: 1.51562vw;
      > p {
        font-size: 1vw;
        line-height: 1.77778;
        letter-spacing: -0.015em;
      }
      > .date {
        padding-top: 1.3125vw;
        font-size: 1vw;
      }
    }
  }
`;
const Latest = styled.section`
  padding: 0 10vw;
  margin-top: 8vw;
  width: 100%;
  > .title {
    font-family: "SamsungSharpSans-Regular";
    font-size: 2vw;
    margin-top: 10.9375vw;
  }
  > hr {
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin-top: 2vw;
    margin-bottom: 4vw;
  }
`;
const Article = styled.article`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  & > :first-child {
    position: sticky;
    top: 0;
    bottom: auto;
    flex-basis: 40vw;
    margin-right: 1vw;
    @media screen and (max-width: 767.7px) {
      position: relative;
      border: none;
      padding: 0;
      margin-right: 0;
      flex-basis: 35vw;
      flex-grow: 0;
      margin-top: 3.90625vw;
    }
  }
  & > :not(:first-child) {
    flex-basis: 37vw;
    flex-grow: 0;
  }
  & > .rightLatest {
    & > :not(:last-child) {
      margin-bottom: 3.90625vw;
      padding-bottom: 2vw;
      border-bottom: 1px solid #333;
    }
  }
  @media screen and (max-width: 767.7px) {
    flex-direction: column;
  }
`;
const Figures = styled.figure`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  > a {
    overflow: hidden;
    > img {
      width: 100%;
      transition: transform 1s;
      transform: scale(1);
    }
    :hover > img {
      transform: scale(1.05);
    }
  }

  > figcaption {
    > h3 {
      margin-top: 3vw;
      font-family: "SamsungSharpSans-Bold";
      font-size: 2.5vw;
    }
    > span {
      font-size: 1vw;
      line-height: 1.77778;
      line-height: 2;
      color: #333;
    }
    > p {
      margin-top: 1.2vw;
      line-height: 1.77778;
      margin-bottom: 1.5vw;
      font-size: 1vw;
    }
  }
`;
const MidBanner = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 10vw;
  :hover {
    & > a > img {
      transform: scale(1.05);
      filter: brightness(50%);
    }
  }
  & > span {
    font-family: "SamsungSharpSans-Bold";
    letter-spacing: 0.1vw;
    font-size: 2vw;
    text-align: center;
    position: absolute;
    color: white;
    left: 40%;
    top: 50%;
    transition: 1s;
    transform: scale(1);
  }
  & > a {
    width: 100%;
    height: 100%;
    ::after {
      height: 0;
    }
    & > img {
      transition: 1s;
      transform: scale(1);
    }
  }
`;
export const LatestWrapper = ({ title, src }) => {
  return (
    <>
      <Figures>
        <a>
          <img src={src} />
        </a>

        <figcaption>
          <h3>{title}</h3>
          <span>삼성 UX Writing 가이드</span>
          <p>
            사용자 경험에 있어 그래픽이나 인터페이스 못지않게 매우 중요한 역할을
            담당하는 UX Writing. 사용자에게 보다 즐겁고 유익한 경험을 제공하기
            위해 삼성 디자인이 지키고자 하는 UX Writing의 철학과 원칙을
            소개합니다.
          </p>
          <span className="date">{`Carrer | ${new Date().toDateString()}`}</span>
        </figcaption>
      </Figures>
    </>
  );
};

const Render = () => {
  return (
    <>
      <Top>
        <h1>Opening a New Chapter</h1>
        <span>2022년 삼성전자 신입 디자이너 인터뷰</span>
        <div className="content_01">
          <a>
            <img src="../img/top_banner.jpg" />
          </a>
          <div className="infomation">
            <p>
              사람에 대한 따뜻한 시선과 세상을 향한 독특한 시각을 바탕으로 더
              나은 내일을 만들어 나가는 다섯 명의 신입 디자이너들. 이제 막
              삼성전자 디자이너로서 새로운 챕터를 연 이들의 이야기를 만나보세요.
            </p>
            <span className="date">{`Carrer | ${new Date().toDateString()}`}</span>
          </div>
        </div>
      </Top>
      <Latest>
        <span className="title">Latest</span>
        <hr />
        <Article>
          <LatestWrapper src="../img/Latest_1.jpg" title="Designing Words" />
          <div className="rightLatest">
            <LatestWrapper src="../img/Latest_2.jpg" title="Designing Words" />
            <LatestWrapper src="../img/Latest_3.jpg" title="Designing Words" />
            <LatestWrapper src="../img/Latest_4.jpg" title="Designing Words" />
          </div>
        </Article>
      </Latest>
      <MidBanner>
        <a>
          <img src="../img/mid_banner.jpg" />
        </a>
        <span>Design By Samsung</span>
      </MidBanner>
    </>
  );
};

export default Render;
