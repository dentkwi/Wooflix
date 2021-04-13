import styled from "styled-components";

// const ContainerForRatio = styled.div`
//   height:inherit;
//   display:flex;
//   align-items: center;
//   justify-content: center;
//   display: flex;
// `;
const Container = styled.div`
  width: 100%;
  padding-top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  /* @media screen and (max-width: 15cm){
    aspect-ratio: 1.15/1;
  } */
  /* margin-top: 20px; */
`;

const Img = styled.img`
 opacity: 0.1;
 border-radius:50px;
`

const Loader = () => (
  <Container>
    <span role="img" aria-label="Loading...">
      <Img src="https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif" />
    </span>
  </Container>
);

//https://happycording.tistory.com/entry/HTML-Role-%EC%99%9C-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%95%BC%EB%A7%8C-%ED%95%98%EB%8A%94%EA%B0%80
//span role에 관한 내용

export default Loader;
