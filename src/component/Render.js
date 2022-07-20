import styled from 'styled-components';
import '../App.css';

const MainArea = styled.div`
  background-image: url('https://i.pinimg.com/564x/25/2a/85/252a8531ff0b79234be74178758db6da.jpg');
  background-repeat: no-repeat;
  background-position: right;

  max-height: 864px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 128px 0px 0 0px;

  div.text {
    width: 1200px;
    margin: 0 auto;
    p {
      position: relative;
      top: 60px;
      width: 100%;
      height: auto;
      color: black;
      font-weight: 600;
      font-size: 60px;
      letter-spacing: 6px;
      line-height: 1.4;
    }
  }
`;

const Render = () => {
  return (
    <>
      <MainArea>
        <div className="text">
          <p>여러분들만의</p>
          <p>앱으로</p>
          <p>꾸며보세요</p>
        </div>
      </MainArea>
    </>
  );
};

export default Render;
