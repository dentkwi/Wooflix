import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { apigetCollection } from "../../../api";
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

const Airing = styled.div`
  font-size: 10px;
  opacity: 0.7;
  margin-top: 2px;
`;

const DetailCollection = withRouter((props) => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  const { belongs_to_collection: collection } = props.props;

  useEffect(() => {
   
    
    const getCollection = async () => {
      const id = collection.id;
      try {
        const movieresult = await apigetCollection(id);
        setResult(movieresult);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    if(collection) getCollection();
  }, []);

  return !collection ? (
    "No collection available"
  ) : loading ? (
    <Loader />
  ) : (
    <Container>
      {result.data.parts.map((movie) => (
        <Link to={`/movie/${movie.id}`}>
          <ItemContainer>
            <PosterContainer>
              <Poster
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : require("../../../assets/noimagetrans.png").default
                }
              />
            </PosterContainer>
            <Name>{movie.title}</Name>
            <Airing>
              {movie.release_date && movie.release_date.substr(0, 4)}
            </Airing>
          </ItemContainer>
        </Link>
      ))}
    </Container>
  );
});

export default DetailCollection;
