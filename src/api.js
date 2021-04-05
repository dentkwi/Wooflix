import axios from "axios";

//axios란 http비동기 통신 라이브러리로 api 데이터를 요청하는데 도움을 주는
//라이브러리 입니다.
//아래 코드는 axios 환경설정을 통해 기초 정보를 입력하여 api객체를 생성하는 역할을 한다.
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/", //api 요청 주소의 동일한 기초 url주소를 입력해줍니다.
  params: {
    api_key: "0d8610c6e6d2fe61811da428334a29e0",
    language: "ko-KR",
  },
});

// api.get("tv/popular"); //앞에 /를 붙이지 않도록 주의하자. /를 붙이지 않아야 상대경로로 가져올수 있다.

// movieApi와 tvApi 객체를 각각 만들어 axios를 통해 생성한 api 객체에서 property data를 가져와 입력해준다.
export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"), //객체의 프로퍼티에 함수를 넣을수도 있다. 이를 메소드라고 한다.
  upcoming: () => api.get("movie/upcoming"), // 이는 upcoming: function() {api.get("movie/upcoming") }과 같은 의미를 가진다.
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos", //api에서 append_to_reponse를 지원해야... id에 페러미터를 덧붙여서 해당 자료를 추가로 가져온다.
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: (term), //사용자가 입력하는 query를 URI로 인코딩 해야한다. (documentation 참조!) 근데 이거 하면 한글검색 안되서 지워버림 ㅋㅋ
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
