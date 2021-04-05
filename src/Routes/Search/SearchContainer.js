import React from "react";
import { movieApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false, //사용자가 검색하기를 기다렸다 로딩하기 위함.
    lastTerm: "",
  };

  handleSubmit = (event) => {
    event.preventDefault(); //원래 enter를 치면 search내용이 submit되나, 이때 화면을 refresh한다. 이를 막기위해 넣는다.
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchbyTerm();
    }
  };

  isenterkey = async (event) => {
    if (event.key === "Enter")
      await this.setState({ lastTerm: event.target.value });
  };

  updateTerm = (event) => {
    //이 event를 console.log 해서 어떠한 정보가 전달되는지 확인하고 그에 맞춰 로직을 설계한다.
    const {
      target: { value },
    } = event;
    this.setState({ searchTerm: value }); //이부분은 그냥 공식처럼 외워주는게 좋겠다..
  };

  searchbyTerm = async () => {
    const { searchTerm } = this.state;
    try {
      this.setState({ loading: true });
      const {
        data: { results: movieResults },
      } = await movieApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      this.setState({ movieResults, tvResults });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      movieResults,
      tvResults,
      searchTerm,
      error,
      loading,
      lastTerm,
    } = this.state;
    return (
      <SearchPresenter
        error={error}
        loading={loading}
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        lastTerm={lastTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        isenterkey={this.isenterkey}
      />
    );
  }
}

export default SearchContainer;
