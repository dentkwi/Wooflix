import styled from "styled-components";

const ContainerForRatio = styled.div`
  width: 100%;
  padding-top: 59.7%;
  position: relative;
  /* @media screen and (max-height: 15cm) {
    padding-top: 0px;
    height: 72vh; */

  /* 이것 역시 ratio를 위한 container. padding-top을 변경하여 ratio를 맞출수 있다. */
`;
const Container = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  width: 100%;
  height: 100%;
  /* aspect-ratio: 1.27/1; */
  /* display: flex; */
  justify-content: center;
  align-items: center;
  font-size: 28px;
  /* @media screen and (max-width: 15cm){
    aspect-ratio: 1.15/1;
  } */
  /* margin-top: 20px; */
`;

const MovieLoader = () => (
  <ContainerForRatio>
    <Container>
      <span role="img" aria-label="Loading...">
        🕔
      </span>
    </Container>
  </ContainerForRatio>
);

//https://happycording.tistory.com/entry/HTML-Role-%EC%99%9C-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%95%BC%EB%A7%8C-%ED%95%98%EB%8A%94%EA%B0%80
//span role에 관한 내용

export default MovieLoader;
