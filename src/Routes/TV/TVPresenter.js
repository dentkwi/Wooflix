import propTypes from "prop-types";
import styled from "styled-components";
import Message from "../../Components/Message";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              title={show.name}
              en_title={show.original_name}
              imageUrl={show.poster_path}
              rating={show.vote_average}
              year={show.first_air_date && show.first_air_date.substring(0, 4)} //해당 내용이 있는지 확인후 substring을 적용시켜야 에러 가능성이 없어진다.
            ></Poster>
          ))}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular TV Shows">
          {popular.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              title={show.name}
              en_title={show.original_name}
              imageUrl={show.poster_path}
              rating={show.vote_average}
              year={show.first_air_date && show.first_air_date.substring(0, 4)} //해당 내용이 있는지 확인후 substring을 적용시켜야 에러 가능성이 없어진다.
            ></Poster>
          ))}
        </Section>
      )}

      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              title={show.name}
              en_title={show.original_name}
              imageUrl={show.poster_path}
              rating={show.vote_average}
              year={show.first_air_date && show.first_air_date.substring(0, 4)} //해당 내용이 있는지 확인후 substring을 적용시켜야 에러 가능성이 없어진다.
            ></Poster>
          ))}
        </Section>
      )}

      {error && <Message text={error} color={"#e74c3c"} />}
    </Container>
  );
//위 삼중평가 식을 잘 살펴보자. short circuit evaluation/ 단축평가라 불리는 방식이다.
//앞에서부터 순서대로 검사하여 모두 true이면 마지막 값을 내보내고 중간에 하나라도 false면 중간에서 검사를
//중지하고 false값을 내보낸다. ||를 사용했을 경우에는 하나라도 true가 나오면 바로 그 값을 반환한다.

TVPresenter.propTypes = {
  topRated: propTypes.array,
  popular: propTypes.array,
  airingToday: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired,
};

export default TVPresenter;
