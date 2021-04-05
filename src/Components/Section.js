import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;
//위 표현에 유의하자. 일반 css라면 div:not:last-child{내용}식으로 나타냈겠지만..
//여기서는 그렇게 할 수 없으므로 위같이 사용한다.
//책의 일반 구조 선택자 파트를 다시한번 열어보자.

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 25px;
  display:grid;
  grid-template-columns:repeat(auto-fill,125px);
  grid-gap:25px;
  @media screen and (max-width: 15cm) {
    justify-content:center;}
`;

const Section = ({ title, children }) => (
  //여기서 children의 개념이 중요하다. 이 section이란 react component는
  //각 route presenter component에서 값을 받아 올텐데, childre은 <Section></Section>태그 사이에
  //입력한 값을 받아오는 역할을 한다!
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf(propTypes.node), //구글 검색 복사
  ]),
};

export default Section;
