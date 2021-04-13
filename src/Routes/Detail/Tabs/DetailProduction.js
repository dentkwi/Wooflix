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
  /* grid-template-columns: repeat(auto-fill, minmax(22%, 1fr)); */
  /* grid-auto-flow: row dense; */
  /* gap: 15px; */

  animation-name: display;
  animation-duration: 200ms;
  animation-timing-function:linear;
  overflow:hidden;
  position:relative;

  
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

const DetailProduction = withRouter((props) => {
  const [loading, setLoading] = useState(true);
  const { production_companies, production_countries } = props.props;

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? (
    <Loader />
  ) : production_companies.length === 0 ? (
    "No production company data available..."
  ) : (
    <Container>
      {production_companies.map((company) => (
        <ItemContainer>
          <PosterContainer>
            <Poster
              src={
                company.logo_path
                  ? `https://image.tmdb.org/t/p/w300${company.logo_path}`
                  : require("../../../assets/noimagemini.png").default
              }
            />
          </PosterContainer>
          <Name>{company.name}</Name>
        </ItemContainer>
      ))}
    </Container>
  );
});

export default DetailProduction;
