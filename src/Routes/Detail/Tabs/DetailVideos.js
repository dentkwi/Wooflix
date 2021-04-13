import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import MovieLoader from "../../../Components/MovieLoader";

const NaviBar = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 10px 0px; */
  margin-bottom: 0px;
`;

const NaviButton = styled.button`
  background: unset;
  color: white;
  cursor: pointer;
`;

const DotContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Dots = styled.span`
  font-size: 15px;
  line-height: 20px;
  margin: 5px;
`;

const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 4:3 Aspect Ratio */
  /* 위 컨테이너를 이용한 코드는 aspect-ratio가 통하지 않는 브라우저가 아직 많기 때문에 이를 달성하게 해주는 일종의 핵이다. */
  /*https://web.dev/aspect-ratio/ 참고.  */


`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  /* width: 100%; */
  /* aspect-ratio: 1.68/1; */
  /* margin-bottom: 50px; */
`;

const DetailVideos = withRouter((props) => {
  const [index, setIndex] = useState(0);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [dots, setDots] = useState([]);

  const {
    props: { videos },
  } = props;
  const indexUp = () => {
    if (videos.length === 1) return;
    else if (videos.length - 1 === index) setIndex(0);
    else setIndex(index + 1);
    setLoading(true);
  };

  const indexDown = () => {
    if (videos.length === 1) return;
    if (index === 0) setIndex(videos.length - 1);
    else setIndex(index - 1);
    setLoading(true);
  };

  useEffect(() => {
    console.log(props);
    const makeingdots = [];
    for (let i = 0; i < videos.length; i++) {
      if (i === index) makeingdots.push("◆");
      else makeingdots.push("○");
      setDots(makeingdots);
    }
  }, [index]);

  useEffect(() => {
    setLoading(false);
  }, [index]);

  return videos.length === 0 ? (
    "No videos available"
  ) : loading ? (
    <MovieLoader />
  ) : (
    <>
      <IframeContainer>
        <Iframe
          className={"Video"}
          src={`https://www.youtube.com/embed/${videos[index].key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></Iframe>
      </IframeContainer>
      <NaviBar>
        <NaviButton key="left" onClick={indexDown}>
          ⫷
        </NaviButton>
        <DotContainer>
          {dots.map((dot, index) => (
            <Dots key={videos[index].key}> {dot} </Dots>
          ))}
        </DotContainer>
        <NaviButton key="right" onClick={indexUp}>
          ⫸
        </NaviButton>
      </NaviBar>
    </>
  );
});

export default DetailVideos;
