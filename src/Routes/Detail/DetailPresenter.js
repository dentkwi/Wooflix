import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import DetailRoute from "./DetailRoute";

const Container = styled.div`
  /* height: 100vh; */
  height: 100%; //calc을 사용하여 계산식을 넣을수 있다.. 와우!
  width: 100%;
  position: static;
  padding: 40px;
  @media screen and (max-width: 15cm) {
    height: 100%;
    position: static;
  }
  @media screen and (max-height: 15cm) {
    height: 100%;
    position: static;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  background-image: url(${(props) => props.bgImage});
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Cover = styled.img`
  width: 30%;
  height: auto;
  object-fit: contain;
  border-radius: 5px;
  z-index: 1;
  @media screen and (max-width: 15cm) {
    width: 70%;
    margin-bottom: 30px;
  }
`;

const Content = styled.div`
  padding: 20px 10px;
  border-radius: 10px;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: black;
  /* overflow: hidden */

  @media screen and (max-width: 15cm) {
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  /* align-items:center; */
  z-index: 2;
  width: 60%;
  margin-left: 10px;
  @media screen and (max-width: 15cm) {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
  margin-right: 10px;
  @media screen and (max-width: 15cm) {
  }
`;

const EnTitle = styled.h2`
  font-size: 25px;
`;

const ItemContainer = styled.div`
  margin-top: 20px;
  max-height: 50%;
  margin-bottom: 30px;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  height: 100%;
  font-size: 13px;
  opacity: 0.6;
  margin-top: 20px;
  line-height: 20px;
  text-indent: 5px;
`;

const ContainerForContents = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;

const DetailPresenter = ({ result, error, loading, isMovie }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={
          result.backdrop_path &&
          `https://image.tmdb.org/t/p/original${result.backdrop_path}`
        }
      ></Backdrop>
      <Content>
        <Cover
          src={
            result.poster_path
              ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
              : require("../../assets/noimage.jpg").default
          }
        ></Cover>
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <EnTitle>
            {result.original_title
              ? result.original_title !== result.title
                ? result.original_title
                : ""
              : result.original_name !== result.name
              ? result.original_name
              : ""}
          </EnTitle>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substr(0, 4)
                : result.first_air_date &&
                  result.first_air_date.substr(0, 4)}{" "}
            </Item>
            <Divider>⨀</Divider>
            <Item>{result.runtime || result.episode_run_time} min</Item>
            <Divider>⨀</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name}/`
                )}
            </Item>
            <Overview>{result.overview}</Overview>
          </ItemContainer>
          <ContainerForContents>
            <DetailRoute
              production_countries={result.production_countries}
              production_companies={result.production_companies}
              id={result.id}
              videos={result.videos}
              isMovie={isMovie}
              imdb_id={result.imdb_id}
              seasons={result.seasons}
              belongs_to_collection={result.belongs_to_collection}
              homepage={result.homepage}
            />
          </ContainerForContents>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: propTypes.object,
  error: propTypes.string,
  loading: propTypes.bool.isRequired,
};

export default DetailPresenter;
