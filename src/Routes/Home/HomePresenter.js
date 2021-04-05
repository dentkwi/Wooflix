import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader /> //loading이 true인지 false인지 먼저 검사한다. 왜냐하면 loading이 끝나기 전에는 해당 값들이 들어와 있지 않기 때문이다.
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now playing">
          {nowPlaying.map((movie) => (
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
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
          {upcoming.map((movie) => (
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
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((movie) => (
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
      {error && <Message text={error} color={"#e74c3c"} />}
    </Container>
  );
//3중으로 체크한다. nowPlying이 있는지, 0보다 길이가 긴지, 제대로 렌더링 되었는지. 모두 true면 마지막 값을 return 한다.
//<Section>aaaa</Section>에서 aaaa에 해당하는 부분이 Section component의 childre으로 전달된다.

HomePresenter.propTypes = {
  nowPlaying: propTypes.array,
  upcoming: propTypes.array,
  popular: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired,
};

export default HomePresenter;
