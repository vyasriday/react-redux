(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,n){e.exports=n(63)},47:function(e,t,n){},52:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),o=n.n(i),c=(n(47),n(15)),u=n(10),s=n(8),l=n(2),p=n(34),d=(n(52),n(35)),m=n.n(d),v=n(36),b=n(26),f=n(12),h=n(20),g=n(21),y=n(24),E=n(22),O=n(23),j=n(13),w=n(3),k=n.n(w);function x(){var e=Object(f.a)(["\n  box-shadow: 0 0 35px black;\n  margin: 20px auto;\n"]);return x=function(){return e},e}var M=function(e){var t=e.movie;return r.a.createElement(c.b,{to:"".concat(t.id)},r.a.createElement(_,{src:"".concat("https://image.tmdb.org/t/p/w154").concat(t.poster_path),alt:t.title}))};M.propTyoes={movie:k.a.shape({title:k.a.string.isRequired}).isRequired};var L=M,_=j.a.img(x()),V=n(17),A=n.n(V),C=n(30),I="GET_MOVIES",T="GET_MOVIE",D="EMPTY_MOVIE";function S(){return function(){var e=Object(C.a)(A.a.mark(function e(t){var n,a;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/discover/movie?api_key=4e062be51f8b55a66259160103b5f870&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",t({type:I,data:a.results}));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}function G(e){return function(){var t=Object(C.a)(A.a.mark(function t(n){var a,r;return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=4e062be51f8b55a66259160103b5f870&language=en-US"));case 2:return a=t.sent,t.next=5,a.json();case 5:return r=t.sent,t.abrupt("return",n({type:T,data:r}));case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}function R(){return{type:D}}function W(){var e=Object(f.a)(["\n  display: grid;\n  padding: 1rem;\n  grid-template-columns: repeat(5, 1fr);\n  grid-row-gap: 1rem;\n  @media(max-width:900px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  @media(max-width:700px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media(max-width:550px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media(max-width:380px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]);return W=function(){return e},e}var P=function(e){function t(){return Object(h.a)(this,t),Object(y.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.isLoaded,n=e.getMovies;t||n()}},{key:"render",value:function(){var e=this.props,t=e.movies;return e.isLoaded?r.a.createElement(q,null,t.map(function(e){return r.a.createElement(L,{key:e.id,movie:e})})):r.a.createElement("h3",null,"Loading !!!")}}]),t}(a.PureComponent),U=Object(s.b)(function(e){return{movies:e.movies.movies,isLoaded:e.movies.moviesLoaded}},function(e){return Object(l.bindActionCreators)({getMovies:S},e)})(P),q=j.a.div(W());function z(){var e=Object(f.a)(["\n  position: relative;\n  padding-top: 50vh;\n  height: 50vh;\n  background: url(",") no-repeat;\n  background-size: cover;\n  background-position: center;\n  > p {\n    text-align: justify;\n    color: #fdfdfd;\n    font-size: 1rem;\n    line-height: 1.5;\n    padding: 4px 1rem;\n    background: #00000087;\n  }\n  > h2 {\n    font-sie: 3rem;\n    letter-spacing: 4px;\n    font-weight: bolder;\n    background: rgba(0,0,0 0.4);\n    padding: 0 2rem; \n  }\n"]);return z=function(){return e},e}var B=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(y.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).movieID="",n.backdrop_path="https://image.tmdb.org/t/p/w1280",n}return Object(O.a)(t,e),Object(g.a)(t,[{key:"componentWillMount",value:function(){this.movieID=this.props.match.params.id}},{key:"componentDidMount",value:function(){var e=this.props,t=e.getMovie;e.isLoaded||t(this.movieID)}},{key:"componentWillUnmount",value:function(){(0,this.props.resetMovie)()}},{key:"render",value:function(){var e=this.props.movie;return r.a.createElement(N,{backdrop:"".concat(this.backdrop_path,"/").concat(e.backdrop_path)},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.overview))}}]),t}(a.PureComponent),J=Object(s.b)(function(e){return{movie:e.movies.movie,isLoaded:e.movies.movieLoaded}},function(e){return Object(l.bindActionCreators)({getMovie:G,resetMovie:R},e)})(B),N=j.a.div(z(),function(e){return e.backdrop}),Y=n(40),$="TOGGLE_MESSAGE";function F(){return{type:$}}var H={movies:[],moviesLoaded:!1,movie:{},movieLoaded:!1},K={messageVisibility:!1};var Q=Object(l.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(Y.a)({},e,{movies:t.data,moviesLoaded:!0});case T:return{movie:t.data,movieLoaded:!0};case D:return{movie:{},movieLoaded:!1};default:return e}},toggle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K;switch((arguments.length>1?arguments[1]:void 0).type){case $:return{messageVisibility:!e.messageVisibility};default:return e}}}),X=(Object(s.b)(function(e){return{messageVisibility:e.toggle.messageVisibility}},function(e){return Object(l.bindActionCreators)({getMovies:S,messageVisibility:F},e)})(function(e){var t=e.getMovies,n=e.messageVisibility;return r.a.createElement("div",null,n&&r.a.createElement("p",null,"Redux Magic"),r.a.createElement("button",{onClick:n,type:"button"},"Toggle"),r.a.createElement("button",{onClick:t,type:"button"},"Load Movies"))}),[m.a,v.a]),Z=Object(l.createStore)(Q,Object(b.load)(),Object(p.composeWithDevTools)(l.applyMiddleware.apply(void 0,X.concat([Object(b.save)()])))),ee=function(){return r.a.createElement(s.a,{store:Z},r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(c.b,{to:"/"},r.a.createElement("h3",null," React App "))),r.a.createElement("main",null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/:id",component:J}),r.a.createElement(u.a,{exact:!0,path:"/",component:U}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.c34ebcc6.chunk.js.map