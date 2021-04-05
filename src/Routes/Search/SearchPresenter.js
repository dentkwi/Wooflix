import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset; //모든 속성을 초기화.
  width: 100%;
  font-size: 28px;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  error,
  loading,
  handleSubmit,
  searchTerm,
  updateTerm,
  lastTerm,
  isenterkey,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV-Shows...."
        value={searchTerm}
        onChange={updateTerm}
        onKeyUp={isenterkey}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                en_title={movie.original_title}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)} //해당 내용이 있는지 확인후 substring을 적용시켜야 에러 가능성이 없어진다.
                isMovie={true}
              ></Poster>
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                en_title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.release_date && show.release_date.substring(0, 4)} //해당 내용이 있는지 확인후 substring을 적용시켜야 에러 가능성이 없어진다.
              ></Poster>
            ))}
          </Section>
        )}
      </>
    )}
    {error && <Message color={"#e74c3c"} text={error} />}
    {tvResults &&
      movieResults &&
      tvResults.length === 0 &&
      movieResults.length === 0 && (
        <Message color={"#95a5a6"} text={`Nothing found for: ${lastTerm}`} />
      )}
  </Container>
);
//input form에 value만 넣을 경우 해당 input은 read-only가 되어버린다.
//onChange를 넣어줌으로써 이를 막을수 있다.

SearchPresenter.propTypes = {
  movieResults: propTypes.array,
  tvResults: propTypes.array,
  searchTerm: propTypes.string,
  error: propTypes.string,
  loading: propTypes.bool.isRequired,
  handleSubmit: propTypes.func.isRequired,
  updateTerm: propTypes.func.isRequired,
  isenterkey: propTypes.func.isRequired,
};

export default SearchPresenter;
