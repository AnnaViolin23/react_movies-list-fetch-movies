(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(7),a=c.n(i),s=(c(13),c(8)),n=c(2),r=c(1),l=(c(14),c(15),c(16),c(0)),d=function(e){var t=e.movie,c=t.imgUrl,i=t.imdbUrl,a=t.description,s=t.title,n="N/A"===c?"https://via.placeholder.com/360x270.png?text=no%20preview":c;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:n,alt:s})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:s})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[a,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:i,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(d,{movie:e},e.imdbId)}))})},j=(c(18),c(6)),m=c.n(j);var b=function(e){var t=e.addMovie,c=Object(r.useState)(""),i=Object(n.a)(c,2),a=i[0],s=i[1],o=Object(r.useState)(null),j=Object(n.a)(o,2),b=j[0],u=j[1],h=Object(r.useState)(!1),v=Object(n.a)(h,2),O=v[0],x=v[1],f=Object(r.useState)(!1),p=Object(n.a)(f,2),N=p[0],g=p[1],y=function(e){var t;g(!0),(t=e.toLowerCase(),fetch("".concat(" https://www.omdbapi.com/?i=tt3896198&apikey=9b92b38f","&t=").concat(t)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))).then((function(e){"Title"in e?u({title:e.Title,description:e.Plot,imgUrl:e.Poster,imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID),imdbId:e.imdbID}):x(!0)})).catch((function(){x(!0)})).finally((function(){return g(!1)}))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),y(a)},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:m()("input",{"is-danger":O}),value:a,onChange:function(e){s(e.target.value),x(!1)}})}),O&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button is-light",{"is-loading":N}),disabled:!a,children:b?"Search again":"Find a movie"})}),b&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){b&&t(b),s(""),u(null)},children:"Add to the list"})})]})]}),b&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(d,{movie:b})]})]})},u=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(b,{addMovie:function(e){!c.some((function(t){return t.imdbId===e.imdbId}))&&i((function(t){return[].concat(Object(s.a)(t),[e])}))}})})]})};a.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1d245257.chunk.js.map