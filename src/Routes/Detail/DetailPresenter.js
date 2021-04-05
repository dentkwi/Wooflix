import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px); //calc을 사용하여 계산식을 넣을수 있다.. 와우!
  width: 100%;
  position: relative;
  padding: 50px;
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
  /* display:block; */
  object-fit: contain;
  /* background-position: center center;
  background-size: contain;
  background-repeat:no-repeat;
  background-image: url(${(props) => props.bgUrl}); */
  /* border: 5px solid white; */
  border-radius: 5px;
  z-index: 1;
  @media screen and (max-width: 15cm) {
    width:70%;
    margin-bottom:30px;
  }
  
`;

const Content = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content:center;
  background-color:black;

  @media screen and (max-width: 15cm) {
    flex-direction: column;
  }
`;

const Data = styled.div`
  width: 50%;
  margin-left: 10px; 
   @media screen and (max-width: 15cm) {
    width:100%;
  }
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const EnTitle = styled.h2`
  font-size: 25px;
`;

const ItemContainer = styled.div`
  margin-top: 20px;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 13px;
  opacity: 0.6;
  margin-top:20px;
  line-height:20px;
  text-indent: 5px;
`;

const DetailPresenter = ({ result, error, loading }) =>
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
                : result.first_air_date.substr(0, 4)}{" "}
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
