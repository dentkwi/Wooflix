import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

const Mobile = isMobile;

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl}); //이부분도 중요합니다!!
  height: 180px;
  background-size: contain; //요부분 다시 공부필요~
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear; //transition에 :속성을 넣어서 한가지 속성만 조절할수 있다.
`;

const Rating = styled.div`
  position: absolute;
  top: 160px;
  right: 5px;
  opacity: 0;
  transition: opacity 0.1s linear;
  &[color="true"] {
    opacity: 1;
    z-index: 2;
    background-color: rgba(20, 20, 20, 0.8);
  }
`;

const ImageContainer = styled.div`
  //Image 요소에 접근하려면 Imagecontainer가 Image보다 더 뒤에 있어야 한다.
  margin-bottom: 5px;
  :hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
  position: relative;
`;

const Title = styled.div`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 13px;
`;

const EnTitle = styled.div`
  margin-bottom: 3px;
`;

const Year = styled.div`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({
  id,
  imageUrl,
  en_title,
  title,
  rating,
  year,
  isMovie = false,
  isMobile = Mobile,
}) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../assets/noimageblack.png").default
          }
        ></Image>
        <Rating color={`${isMobile}`}>
          <span role="img" aria-label="rating">
            ⭐
          </span>
          {rating}/10{" "}
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <EnTitle>{title === en_title ? "" : en_title}</EnTitle>
      <Year>{year}</Year>
    </Container>
  </Link>
);
//require문법 공부해야함!
//require로 이미지를 object의 형태로 가져오기때문에 .default로 해야 이미지에 접근됨.

//콘솔의 네트워크를 살펴보면 components끼리 전달되는 내용을 확인할 수 있다.

Poster.propTypes = {
  id: propTypes.number.isRequired,
  imageUrl: propTypes.string,
  title: propTypes.string.isRequired,
  rating: propTypes.number,
  year: propTypes.string,
  isMovie: propTypes.bool,
};

export default Poster;
