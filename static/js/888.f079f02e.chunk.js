"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[888],{713:function(e,i,t){var n=t(388),s={Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzViOWVlYjgzZmM3OGExYWQ3OTczOGE4MTBjNTZkZiIsInN1YiI6IjYzOTMxNjc3Y2VlMmY2MDA5MzExM2M3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wM3pFCsG_9GXnQWlWqat3GMYp-exwI3OqqHu5fQeliY")},a={fetchMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return n.Z.get("https://api.themoviedb.org/3/trending/all/week?page=".concat(e,"?&language=ru-RU"),{headers:s})},fetchSerchMovie:function(e){return n.Z.get("https://api.themoviedb.org/3/search/movie?&language=ru-RU&query=".concat(e,"&page=1"),{headers:s})},fetchMovieDetails:function(e){return n.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?&language=ru-RU"),{headers:s})},fetchMovieCast:function(e){return n.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?&language=ru-RU"),{headers:s})},fetchReview:function(e){return n.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?&page=1"),{headers:s})}};i.Z=a},888:function(e,i,t){t.r(i),t.d(i,{default:function(){return v}});var n=t(861),s=t(885),a=t(757),r=t.n(a),c=t(87),l=t(689),o=t(713),h=t(791),u={container:"MovieDetails_container__o8VqJ",btn:"MovieDetails_btn__tCU2l",description:"MovieDetails_description__n2kBz",tags:"MovieDetails_tags__v6LSU",img:"MovieDetails_img__D3WH9",link:"MovieDetails_link__wf74g",linkBlock:"MovieDetails_linkBlock__-LL4r",links:"MovieDetails_links__WB7Lu"},d=t(184),v=function(){var e=(0,l.UO)().id,i=(0,l.s0)(),t=(0,h.useState)(null),a=(0,s.Z)(t,2),v=a[0],g=a[1];return(0,h.useEffect)((function(){function i(){return(i=(0,n.Z)(r().mark((function i(){var t;return r().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,o.Z.fetchMovieDetails(e.substring(1));case 2:return t=i.sent,i.abrupt("return",g(t.data));case 4:case"end":return i.stop()}}),i)})))).apply(this,arguments)}!function(){i.apply(this,arguments)}()}),[]),(0,d.jsx)(d.Fragment,{children:null!==v&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:u.btn,onClick:function(){return i(-1)},children:"\u041d\u0430\u0437\u0430\u0434"}),(0,d.jsxs)("div",{className:u.container,children:[(0,d.jsxs)("div",{className:u.imgTags,children:[(0,d.jsx)("img",{className:u.img,alt:v.id,src:"https://image.tmdb.org/t/p/w500/".concat(v.poster_path)}),(0,d.jsxs)("div",{className:u.linkBlock,children:[(0,d.jsx)("li",{className:u.link,children:(0,d.jsx)(c.OL,{to:"cast",replace:!0,children:"\u0410\u043a\u0442\u0451\u0440\u044b"})}),(0,d.jsx)("li",{className:u.link,children:(0,d.jsx)(c.OL,{to:"reviews",replace:!0,children:"\u041e\u0431\u0437\u043e\u0440\u044b"})})]})]}),(0,d.jsxs)("div",{className:u.description,children:[(0,d.jsx)("h1",{children:v.title}),(0,d.jsx)("p",{children:v.overview}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"\u041e\u0446\u0435\u043d\u043a\u0430:"})," ",v.vote_average]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"\u0413\u043e\u043b\u043e\u0441\u043e\u0432:"})," ",v.vote_count]}),(0,d.jsxs)("ul",{className:u.tags,children:[(0,d.jsx)("b",{children:"\u0416\u0430\u043d\u0440:"}),v.genres.map((function(e){return(0,d.jsx)("li",{className:u.tag,children:e.name.charAt(0).toUpperCase()+e.name.slice(1)},e.id)}))]})]})]})]}),(0,d.jsx)(l.j3,{})]})})}}}]);
//# sourceMappingURL=888.f079f02e.chunk.js.map