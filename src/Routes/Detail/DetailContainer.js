import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

class DetailContainer extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
    isMovie: false,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push }, //push는 해당 url로 보내는 메소드다. 자바스크립트는 메소드도 프로퍼티로 설정 가능하다는점 기억.
      location: { pathname },
    } = this.props;
    //console.log(this.props)를 실행하면 React Router가 어떤 정보를 같이 전달했는지 확인할 수 있다.

    //const parseID = parseInt(id);
    //parseInt는 입력된 내용을 숫자만 남긴다. (parsing 개념). 문자만 있거나 문자가 앞에 있다면 NaN을 반환. 숫자 뒤에 문자가 있다면 숫자를 반환.
    //Number()와도 비슷하지만 약간 다르다. Number는 정말 숫자만 있을경우 숫자를 반환. 문자가 조금이라도 있으면 NaN 반환.

    this.state.isMovie = pathname.includes("/movie"); //this를 붙여 전역변수처럼 쓰이도록 한다.
    //이 isMovie는 업데이트하여 렌더링을 다시 할 일이 없기 때문에 이렇게 쓸수 있다.
    //물론 isMovie를 state에 넣는 방식도 가능하다. 강의 참조.
    //지금은 state에 넣는것으로 수정했음...

    const parsedID = Number(id); //난 이게 더 맞는거 같아서 이거 쓰련다.
    if (isNaN(parsedID)) {
      return push("/");
      //여기 retrun을 넣어줘야 함수가 그냥 종료하게 된다. 안그러면 뒤쪽 함수가 계속 실행되므로.
    }

    let result = null;
    try {
      if (this.state.isMovie) {
        ({ data: result } = await movieApi.movieDetail(parsedID)); //뭐지... 이게 되네?? ()는 const=와 같다...?
      } else {
        const request = await tvApi.showDetail(parsedID);
        result = request.data;
      }
    } catch {
      this.setState({ error: "Can't find anything" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  async componentDidUpdate(props) {
    if (props.match.params.id !== this.props.match.params.id) {
 
      const {
        match: {
          params: { id },
        },
        history: { push },
        location: { pathname },
      } = this.props;

      this.state.isMovie = pathname.includes("/movie");

      const parsedID = Number(id);
      if (isNaN(parsedID)) {
        return push("/");
      }

      let result = null;

      try {
        if (this.state.isMovie) {
          const request = await movieApi.movieDetail(parsedID);
          result = await request.data;
        } else {
          const request = await tvApi.showDetail(parsedID);
          result = request.data;
        }
      } catch {
        this.setState({ error: "Can't find anything" });
      } finally {
        this.setState({ loading: false, result });
      }
    }
  }

  render() {
    const { result, error, loading, isMovie } = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        isMovie={isMovie}
      />
    );
  }
}

export default DetailContainer;
