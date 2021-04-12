import { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Link,
  Route,
  withRouter,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import DetailProduction from "./Tabs/DetailProduction";
import DetailSeasons from "./Tabs/DetailSeasons";
import DetailVideos from "./Tabs/DetailVideos";
import DetailCollection from "./Tabs/DetailCollection";

const TabContainer = styled.ul`
  display: flex;
  float: left;
  /* margin-top: 10px; */
  height: 30px;
  width: 200px;
  margin-bottom: 5px;
`;

const Tabs = styled.button`
  all: unset;
  width: 80px;
  font-size: 12px;
  text-align: center;
  color: white;
  text-shadow: 0.5px 0.5px 10px black;
  height: 20px;
  z-index: 100;
  border: ${(props) => (props.color ? "2px solid #F58E85" : "2px solid wheat")};
  background: ${(props) => (props.color ? "rgb(250,65,32,0.5)" : "none")};
  box-shadow: ${(props) =>
    props.color ? "0px 0px 2px red" : "0px 0px 10px black"};
`;


const TabContainer2 = styled.ul`
  display: grid;
  /* margin-top: 10px; */
  height: 30px;
  /* width: 200px; */
  margin-bottom: 5px;
  margin-bottom: 20px;
  grid-template-columns:50% 50%;
`;

const Tabs2 = styled.button`
  all: unset;
  width: 100%;
  color: white;
  text-align: center;
  border: 2px solid wheat;
  z-index: 100;
  height: 25px;
  margin-top: 10px;
  white-space: nowrap;
`;

const SLink = styled(Link)`
  margin-right: 10px;
  z-index: 100;
`;

const DetailRoute = withRouter((props) => {
  const {
    match: { url },
    videos: { results: videos },
    production_countries,
    production_companies,
    imdb_id,
    seasons,
    isMovie,
    belongs_to_collection,
    homepage,
  } = props;

  const [selected, changeselected] = useState();

  useEffect(() => {}, [selected]);

  return (
    <>
      <TabContainer>
        <SLink to={`${url}/videos`}>
          <Tabs onClick={() => changeselected(0)} color={selected === 0}>
            Videos
          </Tabs>
        </SLink>
        <SLink to={`${url}/production`}>
          <Tabs onClick={() => changeselected(1)} color={selected === 1}>
            Production
          </Tabs>
        </SLink>
        {!isMovie && (
          <SLink to={`${url}/seasons`}>
            <Tabs onClick={() => changeselected(2)} color={selected === 2}>
              Seasons
            </Tabs>
          </SLink>
        )}
        {isMovie && (
          <SLink to={`${url}/collections`}>
            <Tabs onClick={() => changeselected(3)} color={selected === 3}>
              Collections
            </Tabs>
          </SLink>
        )}
      </TabContainer>
      <Route path={"/"}>
        <Switch>
          <Route
            path={`${url}/videos`}
            exact
            render={() => <DetailVideos props={{ videos: videos }} />}
          />
          {/* Route에 custom prop을 넘기는 방법! 참고하자.. 여기서 component에 render를 쓰면 조금더 성능 향상이 있다고 한다. 왜냐하면 컴포넌트의 prop이 바뀔때마다 재생성이 일어나기 때문이다!*/}
          <Route
            path={`${url}/production`}
            render={() => (
              <DetailProduction
                props={{
                  production_companies: production_companies,
                  production_countries: production_countries,
                }}
              />
            )}
          />
          <Route
            path={`${url}/seasons`}
            exact
            render={() => <DetailSeasons props={{ seasons: seasons }} />}
          />
          <Route
            exact
            path={`${url}/collections`}
            render={() => (
              <DetailCollection
                props={{
                  belongs_to_collection: belongs_to_collection,
                  ...props,
                }}
              />
            )}
          />
        </Switch>
      </Route>
      <TabContainer2>
        {imdb_id ? (
          <a
            rel={"noreferrer"}
            href={`https://www.imdb.com/title/${imdb_id}`}
            target={"_blank"}
          >
            <Tabs2>Link to IMDb</Tabs2>
          </a>
        ) : (
          <Tabs2>No database in IMDb</Tabs2>
        )}
        {homepage ? (
          <a rel={"noreferrer"} href={homepage} target={"_blank"}>
            <Tabs2>Link to Homepage</Tabs2>
          </a>
        ) : (
          <Tabs2>No Homepage data</Tabs2>
        )}
      </TabContainer2>
    </>
  );
});

export default DetailRoute;
