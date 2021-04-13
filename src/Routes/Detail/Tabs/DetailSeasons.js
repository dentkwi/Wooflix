import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import Loader from "../../../Components/Loader";

const Container = styled.div`
  display: grid;
  @media screen and (max-width: 20cm) {
    grid-template-columns: 1fr 1fr 1fr}
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-auto-flow: row dense; */
  gap: 2%;

  animation-name: display;
  animation-duration: 200ms;
  animation-timing-function:linear;
  position:relative;
  overflow:hidden;
  

  
  @keyframes display {
    0% {
      top:-100px;
      opacity:0%;
    }

    50% {
      top:-50px;
      opacity:5%;
    }
    100%{
      top:0px;
      opacity:100%;
    }
  }
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-color: rgba(150, 150, 150, 0.25);
  border-radius: 10px;
  padding: 10px;
  padding-bottom: 10px;
`;

const PosterContainer = styled.div`
  /* aspect-ratio: 1/1.2; */
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  object-fit: contain;
`;

const Poster = styled.img`
  min-width: 60px;
  width: 100%;
  object-fit: contain;
`;

const Name = styled.div`
  font-size: 10px;
  opacity: 0.7;
  margin-top: 10px;
`;

const Airing = styled.div`
 font-size: 10px;
 opacity: 0.7;
 margin-top:2px;
`

const DetailSeasons = withRouter((props) => {
  const [loading, setLoading] = useState(true);
  const { seasons } = props.props;

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? (
    <Loader />
  ) : !seasons || seasons.length === 0 ? (
    "No season data available..."
  ) : (
    <Container>
      {seasons.map((season) => (
        <ItemContainer>
          <PosterContainer>
            <Poster
              src={
                season.poster_path
                  ? `https://image.tmdb.org/t/p/w300${season.poster_path}`
                  : require("../../../assets/noimagetrans.png").default
              }
            />
          </PosterContainer>
          <Name>{season.name}</Name>
          <Airing>{season.air_date && season.air_date.substr(0,4)}</Airing>
        </ItemContainer>
      ))}
    </Container>
  );
});

export default DetailSeasons;
