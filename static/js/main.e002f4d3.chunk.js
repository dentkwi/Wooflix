(this.webpackJsonpwooflix=this.webpackJsonpwooflix||[]).push([[0],{73:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noimageblack.8b220d79.png"},74:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noimage.7a6d492e.jpg"},75:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,l,d,u,p,b,j,h,g,x,m,f,v,O,y,_,w,k=n(1),T=n.n(k),S=n(35),R=n.n(S),z=n(17),M=n(4),U=n(6),C=n.n(U),I=n(11),V=n(12),A=n(13),N=n(15),P=n(14),D=n(36),E=n.n(D).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"0d8610c6e6d2fe61811da428334a29e0",language:"ko-KR"}}),q=function(){return E.get("movie/now_playing")},B=function(){return E.get("movie/upcoming")},F=function(){return E.get("movie/popular")},J=function(e){return E.get("movie/".concat(e),{params:{append_to_response:"videos"}})},K=function(e){return E.get("search/movie",{params:{query:e}})},L=function(){return E.get("tv/top_rated")},H=function(){return E.get("tv/popular")},G=function(){return E.get("tv/airing_today")},Q=function(e){return E.get("tv/".concat(e),{params:{append_to_response:"videos"}})},W=function(e){return E.get("search/tv",{params:{query:encodeURIComponent(e)}})},X=n(3),Y=n(2),Z=n(0),$=Y.c.div(r||(r=Object(X.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items:center;\n  font-size: 28px;\n  margin-top: 20px;\n"]))),ee=function(){return Object(Z.jsx)($,{children:Object(Z.jsx)("span",{role:"img","aria-label":"Loading...",children:"\ud83d\udd54"})})},te=Y.c.div(a||(a=Object(X.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]))),ne=Y.c.span(i||(i=Object(X.a)(["\n  font-size: 16px;\n  font-weight: 600;\n"]))),re=Y.c.div(c||(c=Object(X.a)(["\n  margin-top: 25px;\n  display:grid;\n  grid-template-columns:repeat(auto-fill,125px);\n  grid-gap:25px;\n  @media screen and (max-width: 15cm) {\n    justify-content:center;}\n"]))),ae=function(e){var t=e.title,n=e.children;return Object(Z.jsxs)(te,{children:[Object(Z.jsx)(ne,{children:t}),Object(Z.jsx)(re,{children:n})]})},ie=Y.c.div(o||(o=Object(X.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  \n"]))),ce=Y.c.span(s||(s=Object(X.a)(["\n  color: ",";\n  //\uc774\ubd80\ubd84\uc5d0 \uc720\uc758... props \ubd80\uc704\uc5d4 \ubb58 \ub123\uc5b4\ub3c4 \uc0c1\uad00\uc774 \uc5c6\uace0, \ud574\ub2f9 \ud638\ucd9c \uac1d\uccb4\uc758 color\uac12\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uac8c \ud574\uc900\ub2e4!\n  //\ub2e4\ub978 \uac12\uc5d0\ub3c4 \uc811\uadfc\ud560\uc218 \uc788\uc744\uac83\uc73c\ub85c \ubcf4\uc778\ub2e4. \ud654\uc0b4\ud45c \ud568\uc218\uc640 styled component\ub77c \uac00\ub2a5\ud55c css\ubb38\ubc95\uc778\uac70 \uac19\ub2e4.\n"])),(function(e){return e.color})),oe=function(e){var t=e.text,n=e.color;return Object(Z.jsx)(ie,{children:Object(Z.jsx)(ce,{color:n,children:t})})},se=Y.c.div(l||(l=Object(X.a)(["\n  font-size: 12px;\n"]))),le=Y.c.div(d||(d=Object(X.a)(["\n  background-image: url(","); //\uc774\ubd80\ubd84\ub3c4 \uc911\uc694\ud569\ub2c8\ub2e4!!\n  height: 180px;\n  background-size: contain; //\uc694\ubd80\ubd84 \ub2e4\uc2dc \uacf5\ubd80\ud544\uc694~\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear; //transition\uc5d0 :\uc18d\uc131\uc744 \ub123\uc5b4\uc11c \ud55c\uac00\uc9c0 \uc18d\uc131\ub9cc \uc870\uc808\ud560\uc218 \uc788\ub2e4.\n"])),(function(e){return e.bgUrl})),de=Y.c.div(u||(u=Object(X.a)(['\n  position: absolute;\n  top: 160px;\n  right: 5px;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n  &[color="true"]{ opacity:1; z-index:2}\n  \n']))),ue=Y.c.div(p||(p=Object(X.a)(["\n  //Image \uc694\uc18c\uc5d0 \uc811\uadfc\ud558\ub824\uba74 Imagecontainer\uac00 Image\ubcf4\ub2e4 \ub354 \ub4a4\uc5d0 \uc788\uc5b4\uc57c \ud55c\ub2e4.\n  margin-bottom: 5px;\n  :hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n      \n    }\n    \n  }\n  position: relative;\n\n"])),le,de),pe=Y.c.div(b||(b=Object(X.a)(["\n  display: block;\n  margin-bottom: 5px;\n  font-weight: bold;\n  font-size: 13px;\n"]))),be=Y.c.div(j||(j=Object(X.a)(["\n  margin-bottom: 3px;\n"]))),je=Y.c.div(h||(h=Object(X.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]))),he=function(e){var t=e.id,r=e.imageUrl,a=e.en_title,i=e.title,c=e.rating,o=e.year,s=e.isMovie,l=void 0!==s&&s,d=e.isMobile,u=void 0===d?"undefined"!==typeof window.orientation||-1!==navigator.userAgent.indexOf("IEMobile"):d;return Object(Z.jsx)(z.b,{to:l?"/wooflix/movie/".concat(t):"/wooflix/show/".concat(t),children:Object(Z.jsxs)(se,{children:[Object(Z.jsxs)(ue,{children:[Object(Z.jsx)(le,{bgUrl:r?"https://image.tmdb.org/t/p/w300".concat(r):n(73).default}),Object(Z.jsxs)(de,{color:"".concat(u),children:[Object(Z.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50"}),c,"/10"," "]})]}),Object(Z.jsx)(pe,{children:i}),Object(Z.jsx)(be,{children:i===a?"":a}),Object(Z.jsx)(je,{children:o})]})})},ge=Y.c.div(g||(g=Object(X.a)(["\n  padding: 20px;\n"]))),xe=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error;return e.loading?Object(Z.jsx)(ee,{}):Object(Z.jsxs)(ge,{children:[t&&t.length>0&&Object(Z.jsx)(ae,{title:"Now playing",children:t.map((function(e){return Object(Z.jsx)(he,{id:e.id,en_title:e.original_title,title:e.title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(Z.jsx)(ae,{title:"Upcoming Movies",children:n.map((function(e){return Object(Z.jsx)(he,{id:e.id,en_title:e.original_title,title:e.title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),r&&r.length>0&&Object(Z.jsx)(ae,{title:"Popular Movies",children:r.map((function(e){return Object(Z.jsx)(he,{id:e.id,en_title:e.original_title,title:e.title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),a&&Object(Z.jsx)(oe,{text:a,color:"#e74c3c"})]})},me=function(e){Object(N.a)(n,e);var t=Object(P.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=Object(I.a)(C.a.mark((function e(){var t,n,r,a,i,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q();case 3:return t=e.sent,n=t.data.results,e.next=7,B();case 7:return r=e.sent,a=r.data.results,e.next=11,F();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Cant't find movie information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(Z.jsx)(xe,{nowPlaying:t,upcoming:n,popular:r,error:a,loading:i})}}]),n}(T.a.Component),fe=Y.c.div(x||(x=Object(X.a)(["\n  padding: 0 20px;\n"]))),ve=Y.c.form(m||(m=Object(X.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]))),Oe=Y.c.input(f||(f=Object(X.a)(["\n  all: unset; //\ubaa8\ub4e0 \uc18d\uc131\uc744 \ucd08\uae30\ud654.\n  width: 100%;\n  font-size: 28px;\n"]))),ye=function(e){var t=e.movieResults,n=e.tvResults,r=e.error,a=e.loading,i=e.handleSubmit,c=e.searchTerm,o=e.updateTerm,s=e.lastTerm,l=e.isenterkey;return Object(Z.jsxs)(fe,{children:[Object(Z.jsx)(ve,{onSubmit:i,children:Object(Z.jsx)(Oe,{placeholder:"Search Movies or TV-Shows....",value:c,onChange:o,onKeyUp:l})}),a?Object(Z.jsx)(ee,{}):Object(Z.jsxs)(Z.Fragment,{children:[t&&t.length>0&&Object(Z.jsx)(ae,{title:"Movie Results",children:t.map((function(e){return Object(Z.jsx)(he,{id:e.id,en_title:e.original_title,title:e.title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(Z.jsx)(ae,{title:"TV Show Results",children:n.map((function(e){return Object(Z.jsx)(he,{id:e.id,title:e.name,en_title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))})]}),r&&Object(Z.jsx)(oe,{color:"#e74c3c",text:r}),n&&t&&0===n.length&&0===t.length&&Object(Z.jsx)(oe,{color:"#95a5a6",text:"Nothing found for: ".concat(s)})]})},_e=function(e){Object(N.a)(n,e);var t=Object(P.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1,lastTerm:""},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchbyTerm()},e.isenterkey=function(){var t=Object(I.a)(C.a.mark((function t(n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Enter"!==n.key){t.next=3;break}return t.next=3,e.setState({lastTerm:n.target.value});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchbyTerm=Object(I.a)(C.a.mark((function t(){var n,r,a,i,c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,t.prev=1,e.setState({loading:!0}),t.next=5,K(n);case 5:return r=t.sent,a=r.data.results,t.next=9,W(n);case 9:i=t.sent,c=i.data.results,e.setState({movieResults:a,tvResults:c}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),e.setState({error:"Can't find results."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[1,14,17,20]])}))),e}return Object(A.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading,c=e.lastTerm;return Object(Z.jsx)(ye,{error:a,loading:i,movieResults:t,tvResults:n,searchTerm:r,lastTerm:c,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm,isenterkey:this.isenterkey})}}]),n}(T.a.Component),we=Y.c.div(v||(v=Object(X.a)(["\n  padding: 0 20px;\n"]))),ke=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,a=e.error;return e.loading?Object(Z.jsx)(ee,{}):Object(Z.jsxs)(we,{children:[t&&t.length>0&&Object(Z.jsx)(ae,{title:"Top Rated Shows",children:t.map((function(e){return Object(Z.jsx)(he,{id:e.id,title:e.name,en_title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(Z.jsx)(ae,{title:"Popular TV Shows",children:n.map((function(e){return Object(Z.jsx)(he,{id:e.id,title:e.name,en_title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(Z.jsx)(ae,{title:"Airing Today",children:r.map((function(e){return Object(Z.jsx)(he,{id:e.id,title:e.name,en_title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),a&&Object(Z.jsx)(oe,{text:a,color:"#e74c3c"})]})},Te=function(e){Object(N.a)(n,e);var t=Object(P.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},e}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=Object(I.a)(C.a.mark((function e(){var t,n,r,a,i,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L();case 3:return t=e.sent,n=t.data.results,e.next=7,H();case 7:return r=e.sent,a=r.data.results,e.next=11,G();case 11:i=e.sent,c=i.data.results,this.setState({topRated:n,popular:a,airingToday:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Cant't find TV information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,r=e.airingToday,a=e.error,i=e.loading;return Object(Z.jsx)(ke,{topRated:t,popular:n,airingToday:r,error:a,loading:i})}}]),n}(T.a.Component),Se=Y.c.header(O||(O=Object(X.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0px 10px;\n  background-color: rgba(20, 20, 20, 0.8);\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n  z-index: 2;\n"]))),Re=Y.c.ul(y||(y=Object(X.a)(["\n  display: flex;\n"]))),ze=Y.c.li(_||(_=Object(X.a)(["\n  height: 50px;\n  width: 50px;\n  text-align: center;\n  border-bottom: 5px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"])),(function(e){return e.current?"#3498db":"transparent"})),Me=Object(Y.c)(z.b)(w||(w=Object(X.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));var Ue,Ce,Ie,Ve,Ae,Ne,Pe,De,Ee,qe,Be,Fe=Object(M.g)((function(e){var t=e.location.pathname;return Object(Z.jsx)(Se,{children:Object(Z.jsxs)(Re,{children:[Object(Z.jsx)(ze,{current:"/wooflix"===t,children:Object(Z.jsx)(Me,{to:"/wooflix",children:"Movie"})}),Object(Z.jsx)(ze,{current:"/wooflix/TV"===t,children:Object(Z.jsx)(Me,{to:"/wooflix/TV",children:"TV"})}),Object(Z.jsx)(ze,{current:"/wooflix/Search"===t,children:Object(Z.jsx)(Me,{to:"/wooflix/Search",children:"Search"})})]})})})),Je=Y.c.div(Ue||(Ue=Object(X.a)(["\n  height: calc(100vh - 50px); //calc\uc744 \uc0ac\uc6a9\ud558\uc5ec \uacc4\uc0b0\uc2dd\uc744 \ub123\uc744\uc218 \uc788\ub2e4.. \uc640\uc6b0!\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]))),Ke=Y.c.div(Ce||(Ce=Object(X.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-position: center center;\n  background-size: cover;\n  background-image: url(",");\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"])),(function(e){return e.bgImage})),Le=Y.c.img(Ie||(Ie=Object(X.a)(["\n  width: 30%;\n\n\n  height: auto;\n  /* display:block; */\n  object-fit: contain;\n  /* background-position: center center;\n  background-size: contain;\n  background-repeat:no-repeat;\n  background-image: url(","); */\n  /* border: 5px solid white; */\n  border-radius: 5px;\n  z-index: 1;\n  @media screen and (max-width: 15cm) {\n    width:70%;\n    margin-bottom:30px;\n  }\n  \n"])),(function(e){return e.bgUrl})),He=Y.c.div(Ve||(Ve=Object(X.a)(["\n  display: flex;\n\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  align-items: center;\n  justify-content:center;\n  background-color:black;\n\n  @media screen and (max-width: 15cm) {\n    flex-direction: column;\n  }\n"]))),Ge=Y.c.div(Ae||(Ae=Object(X.a)(["\n  width: 50%;\n  margin-left: 10px; \n   @media screen and (max-width: 15cm) {\n    width:100%;\n  }\n"]))),Qe=Y.c.h3(Ne||(Ne=Object(X.a)(["\n  font-size: 32px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n"]))),We=Y.c.h2(Pe||(Pe=Object(X.a)(["\n  font-size: 25px;\n"]))),Xe=Y.c.div(De||(De=Object(X.a)(["\n  margin-top: 20px;\n"]))),Ye=Y.c.span(Ee||(Ee=Object(X.a)([""]))),Ze=Y.c.span(qe||(qe=Object(X.a)(["\n  margin: 0 10px;\n"]))),$e=Y.c.p(Be||(Be=Object(X.a)(["\n  font-size: 13px;\n  opacity: 0.6;\n  margin-top:20px;\n  line-height:20px;\n  text-indent: 5px;\n"]))),et=function(e){var t=e.result;e.error;return e.loading?Object(Z.jsx)(ee,{}):Object(Z.jsxs)(Je,{children:[Object(Z.jsx)(Ke,{bgImage:t.backdrop_path&&"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(Z.jsxs)(He,{children:[Object(Z.jsx)(Le,{src:t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):n(74).default}),Object(Z.jsxs)(Ge,{children:[Object(Z.jsx)(Qe,{children:t.title?t.title:t.name}),Object(Z.jsx)(We,{children:t.original_title?t.original_title!==t.title?t.original_title:"":t.original_name!==t.name?t.original_name:""}),Object(Z.jsxs)(Xe,{children:[Object(Z.jsxs)(Ye,{children:[t.release_date?t.release_date.substr(0,4):t.first_air_date.substr(0,4)," "]}),Object(Z.jsx)(Ze,{children:"\u2a00"}),Object(Z.jsxs)(Ye,{children:[t.runtime||t.episode_run_time," min"]}),Object(Z.jsx)(Ze,{children:"\u2a00"}),Object(Z.jsx)(Ye,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name,"/")}))}),Object(Z.jsx)($e,{children:t.overview})]})]})]})]})},tt=function(e){Object(N.a)(n,e);var t=Object(P.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={result:null,error:null,loading:!0},e}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=Object(I.a)(C.a.mark((function e(){var t,n,r,a,i,c,o,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=t.location.pathname,this.isMovie=a.includes("/movie"),i=Number(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(c=null,e.prev=6,!this.isMovie){e.next=14;break}return e.next=10,J(i);case 10:o=e.sent,c=o.data,e.next=18;break;case 14:return e.next=16,Q(i);case 16:s=e.sent,c=s.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything"});case 23:return e.prev=23,this.setState({loading:!1,result:c}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return Object(Z.jsx)(et,{result:t,error:n,loading:r})}}]),n}(T.a.Component);var nt,rt=function(){return Object(Z.jsxs)(z.a,{children:[Object(Z.jsx)(Fe,{})," ",Object(Z.jsxs)(M.d,{children:[Object(Z.jsx)(M.b,{path:"/wooflix",exact:!0,component:me}),Object(Z.jsx)(M.b,{path:"/wooflix/TV",component:Te}),Object(Z.jsx)(M.b,{path:"/wooflix/Search",component:_e}),Object(Z.jsx)(M.b,{path:"/wooflix/movie/:id",component:tt}),"  ",Object(Z.jsx)(M.b,{path:"/wooflix/show/:id",component:tt}),"  ",Object(Z.jsx)(M.a,{from:"*",to:"/wooflix"}),"   "]})]})},at=n(40),it=Object(Y.a)(nt||(nt=Object(X.a)(["\n    ",";\n    a{\n        text-decoration: none;\n        color: inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size: 12px;\n        background-color:rgba(20,20,20,1);\n        color:white;\n        padding-top:50px;\n    }\n\n"])),at.a);var ct=function(){return Object(Z.jsxs)("div",{className:"App",children:[Object(Z.jsx)(rt,{}),Object(Z.jsx)(it,{})]})};R.a.render(Object(Z.jsx)(T.a.StrictMode,{children:Object(Z.jsx)(ct,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.e002f4d3.chunk.js.map