import React from "react";
import { movieApi } from "../../api";
import HomePresenter from "./HomePresenter";


class HomeContainer extends React.Component {
  //원래는 생성자를 통해 (constructor() {super(props); this.state ={}...) state초기값 property를
  //설정 하여야 하나, 최신 javascript의 class field시스템 덕분에 아래처럼 바로 state ={}어쩌구로 
  //생성자 없이 사용이 가능하다.
  
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null, //여기랑
    loading: true, //여기 잘 모르겠다.. state 공부를 하면 알게되나!
  }; 



  //두가지 옵션이 있다. 하나의 함수로 모든 api를 처리하든지,
  //아니면 nowPlaying, upcoming, popular 다른 함수로 각각 처리하든지.
  async componentDidMount() {
    //함수내에서 비동기 함수를 시행하려면 해당 함수에도 async가 붙어야 한다.
    try {
      const {
        data: { results: nowPlaying }, //data의 results를 nowPlaying이라는 이름으로 가져온다.
      } = await movieApi.nowPlaying(); //객체내 nowplaying 메소드가 완료될때까지 기다린다.

      const {
        data: { results: upcoming },
      } = await movieApi.upcoming();

      const {
        data: { results: popular },
      } = await movieApi.popular();

      this.setState({
        nowPlaying: nowPlaying,
        upcoming: upcoming,
        popular: popular,
      }); //이렇게 쓰는게 정석이나 자바스크립트에서는 이름이 같을경우 짧게 뒤쪽을 생략하여 
      //nowPlaying, upcoming, popular만 적어줘도 관계없다.


    } catch {
      this.setState({
        error: "Cant't find movie information",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  //위함수들로 모든 api데이터를 처리한다음...

  //이 아래쪽에서 Homepresenter로 보내서 보여주는 처리를 하게 된다!
  //이것이 container와 presenter의 분리이다.
  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default HomeContainer;
