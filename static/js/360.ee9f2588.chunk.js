"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[360],{6360:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var r,i,a,c,s=t(9439),o=t(7689),u=t(2791),p=t(8543),d=t(7762),l=t(1087),h=t(9135),v=t(168),f=t(7402),x=(0,f.Z)(l.rU)(r||(r=(0,v.Z)(["\n  display: inline-flex;\n  border: 1px solid;\n  border-radius: 10px;\n  padding: 2px 10px;\n  margin-bottom: 5px;\n  gap: 5px;\n  align-items: center;\n  color: black;\n  text-decoration: none;\n  :hover {\n    color: orange;\n  }\n"]))),g=f.Z.div(i||(i=(0,v.Z)(["\n  display: flex;\n  gap: 25px;\n"]))),m=f.Z.div(a||(a=(0,v.Z)(["\n  margin-bottom: 10px;\n"]))),j=f.Z.div(c||(c=(0,v.Z)(["\n  padding: 20px;\n"]))),w=t(2007),y=t.n(w),b=t(2393),Z=t(184),_=function(e){var n,t,r,i=e.movie,a=(0,o.TH)(),c=(0,u.useRef)(null!==(n=null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/"),s=i.poster_path?"https://image.tmdb.org/t/p/w300".concat(i.poster_path):b,p=[],v=(0,d.Z)(i.genres);try{for(v.s();!(r=v.n()).done;){var f=r.value;p.push(f.name)}}catch(w){v.e(w)}finally{v.f()}return(0,Z.jsx)(Z.Fragment,{children:i.title&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(x,{to:c.current,children:[(0,Z.jsx)(h.O18,{}),"Go back"]}),(0,Z.jsxs)(g,{children:[(0,Z.jsx)("img",{src:s,alt:i.title}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(m,{children:[(0,Z.jsx)("h2",{children:i.title}),(0,Z.jsxs)("p",{children:["Rating: ",i.vote_average.toFixed(1)]})]}),(0,Z.jsxs)(m,{children:[(0,Z.jsx)("h3",{children:"Overview"}),(0,Z.jsx)("p",{children:i.overview})]}),(0,Z.jsxs)(m,{children:[(0,Z.jsx)("h3",{children:"Genres"}),(0,Z.jsx)("p",{children:p.join(", ")})]})]})]}),(0,Z.jsxs)(j,{children:[(0,Z.jsx)("h3",{children:"Additional Information"}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,Z.jsx)(u.Suspense,{fallback:(0,Z.jsx)("div",{children:"Loading..."}),children:(0,Z.jsx)(o.j3,{})})]})})};_.propType={movie:y().shape({title:y().string.isRequired,vote_average:y().number.isRequired,backdrop_path:y().string.isRequired,overview:y().string.isRequired,genres:y().string.isRequired})};var k=_,R=(0,p.Z)().fetchMovie,q=function(){var e=(0,o.UO)().movieId,n=(0,u.useState)({}),t=(0,s.Z)(n,2),r=t[0],i=t[1];return(0,u.useEffect)((function(){R(e).then((function(e){var n=e.poster_path,t=e.genres,r=e.title,a=e.overview,c=e.vote_average;i({poster_path:n,genres:t,title:r,overview:a,vote_average:c})})).catch((function(e){console.error(e)}))}),[e]),(0,Z.jsx)(Z.Fragment,{children:r.title&&(0,Z.jsx)(k,{movie:r})})}},8543:function(e,n,t){var r=t(5861),i=t(4687),a=t.n(i),c=t(1243);n.Z=function(){var e="bf6a0fae11fd4c107d4af2168346d5c6",n="https://api.themoviedb.org/3/";function t(){return(t=(0,r.Z)(a().mark((function t(r){var i,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("".concat(n,"movie/").concat(r,"?api_key=").concat(e));case 2:return i=t.sent,s=i.data,t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(){return(i=(0,r.Z)(a().mark((function t(r){var i,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("".concat(n,"movie/").concat(r,"/credits?api_key=").concat(e));case 2:return i=t.sent,s=i.data,t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function t(r){var i,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("".concat(n,"movie/").concat(r,"/reviews?api_key=").concat(e));case 2:return i=t.sent,s=i.data,t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function t(){var r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("".concat(n,"/trending/movie/day?api_key=").concat(e,"&page=1"));case 2:return r=t.sent,i=r.data,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function t(r){var i,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("".concat(n,"search/movie?query=").concat(r,"&api_key=").concat(e,"&page=1"));case 2:return i=t.sent,s=i.data,t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{fetchMovie:function(e){return t.apply(this,arguments)},fetchCast:function(e){return i.apply(this,arguments)},fetchReviews:function(e){return s.apply(this,arguments)},fetchPopularMovie:function(){return o.apply(this,arguments)},querySearch:function(e){return u.apply(this,arguments)}}}},2393:function(e,n,t){e.exports=t.p+"static/media/dummy-poster.37637fb1d22e9cf9bbec.jpg"}}]);
//# sourceMappingURL=360.ee9f2588.chunk.js.map