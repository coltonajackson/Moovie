(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){var n={"./alien.png":77,"./avatar.png":78,"./avengers-end-game.png":79,"./avengers-infinity-war.png":80,"./avengers.png":81,"./baixados.png":82,"./black-panther.png":83,"./black-widow.png":84,"./captain-marvel.png":85,"./dark-sky-background.png":86,"./friends.png":87,"./justice-league.png":88,"./moon-knight.png":89,"./obi-wan-kenobi.png":90,"./star-wars-return-of-the-jedi.png":91,"./star-wars-rogue-one.png":92,"./star-wars-the-last-jedi.png":93,"./the-batman.png":94,"./the-dark-knight.png":95,"./the-mandalorian.png":96,"./wanda-vision.png":97};function i(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=35},40:function(e,t,a){e.exports=a(98)},50:function(e,t,a){},77:function(e,t,a){e.exports=a.p+"static/media/alien.d9178ba7.png"},78:function(e,t,a){e.exports=a.p+"static/media/avatar.c2fa0f97.png"},79:function(e,t,a){e.exports=a.p+"static/media/avengers-end-game.dbd66f01.png"},80:function(e,t,a){e.exports=a.p+"static/media/avengers-infinity-war.ccbb76d1.png"},81:function(e,t,a){e.exports=a.p+"static/media/avengers.fc7a998b.png"},82:function(e,t,a){e.exports=a.p+"static/media/baixados.0b778315.png"},83:function(e,t,a){e.exports=a.p+"static/media/black-panther.bcbdb83a.png"},84:function(e,t,a){e.exports=a.p+"static/media/black-widow.c06732e9.png"},85:function(e,t,a){e.exports=a.p+"static/media/captain-marvel.1c670b7e.png"},86:function(e,t,a){e.exports=a.p+"static/media/dark-sky-background.3722c953.png"},87:function(e,t,a){e.exports=a.p+"static/media/friends.a111afc3.png"},88:function(e,t,a){e.exports=a.p+"static/media/justice-league.46f8f406.png"},89:function(e,t,a){e.exports=a.p+"static/media/moon-knight.dd32a6e3.png"},90:function(e,t,a){e.exports=a.p+"static/media/obi-wan-kenobi.f49687d7.png"},91:function(e,t,a){e.exports=a.p+"static/media/star-wars-return-of-the-jedi.d4cf89ec.png"},92:function(e,t,a){e.exports=a.p+"static/media/star-wars-rogue-one.24976c7b.png"},93:function(e,t,a){e.exports=a.p+"static/media/star-wars-the-last-jedi.088ce6d0.png"},94:function(e,t,a){e.exports=a.p+"static/media/the-batman.f51c9fad.png"},95:function(e,t,a){e.exports=a.p+"static/media/the-dark-knight.0d1851af.png"},96:function(e,t,a){e.exports=a.p+"static/media/the-mandalorian.e9469873.png"},97:function(e,t,a){e.exports=a.p+"static/media/wanda-vision.fa4f2322.png"},98:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(36),c=(a(48),a(50),a(9)),l=a(1),o=a(2),s=a.n(o);var m=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement("main",null,t))},d=a(5),u=a(3),g=a(105);var p=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)({moovie:!1,link_a:!1,link_b:!1,link_c:!1,link_d:!1}),o=Object(u.a)(l,2),m=o[0],p=o[1];return i.a.createElement("nav",null,i.a.createElement("div",{className:s()("p-2","ms-2","d-none","d-lg-flex")},i.a.createElement("button",{className:s()("nav-btn","open-btn"),onClick:function(){return r(!a)}},i.a.createElement("i",{className:s()("fas","fa-bars","text-light")}))),i.a.createElement("div",{className:s()("nav","d-none","d-lg-flex",a?"visible":"")},i.a.createElement("button",{className:s()("nav-btn","close-btn"),onClick:function(){r(!a),p({moovie:!1,link_a:!1,link_b:!1,link_c:!1,link_d:!1})}},i.a.createElement("i",{className:s()("fas","fa-times","text-light")})),i.a.createElement("div",{className:s()("d-flex","justify-content-center","my-4","bd-highlight"),id:"moovie-home-container"},i.a.createElement(c.b,{to:"/",className:s()("rounded","px-3","py-1","btn","btn-transparent","text-light","text-center",m.moovie?"btn-light":s()("btn-transparent","text-white")),id:"moovie-home",onMouseOver:function(){return p(Object(d.a)({},m,{moovie:!0}))},onMouseOut:function(){return p(Object(d.a)({},m,{moovie:!1}))},onClick:function(){return r(!a)}},i.a.createElement("h1",{className:s()("display-1"),id:"moovie-home-text"},"Moovie"))),i.a.createElement("div",{className:s()("d-flex","justify-content-center","w-100"),id:"nav-list"},i.a.createElement("ul",{className:s()("list","w-90")},i.a.createElement("li",null,i.a.createElement(c.b,{className:s()("menu-item","btn","w-100",m.link_a?s()("btn-dark","text-white"):"btn-light"),to:"#",onMouseOver:function(){return p(Object(d.a)({},m,{link_a:!0}))},onMouseOut:function(){return p(Object(d.a)({},m,{link_a:!1}))}},"Movies")),i.a.createElement("li",null,i.a.createElement(c.b,{className:s()("menu-item","btn","w-100",m.link_b?s()("btn-dark","text-white"):"btn-light"),to:"#",onMouseOver:function(){return p(Object(d.a)({},m,{link_b:!0}))},onMouseOut:function(){return p(Object(d.a)({},m,{link_b:!1}))}},"Reviews")),i.a.createElement("li",null,i.a.createElement(c.b,{className:s()("menu-item","btn","w-100",m.link_c?s()("btn-dark","text-white"):"btn-light"),to:"#",onMouseOver:function(){return p(Object(d.a)({},m,{link_c:!0}))},onMouseOut:function(){return p(Object(d.a)({},m,{link_c:!1}))}},"Pricing")),i.a.createElement("li",null,i.a.createElement(g.a,null,i.a.createElement(g.a.Toggle,{id:"dropdown-basic",className:s()("menu-item","btn","btn-light","w-100",m.link_d?s()("btn-dark","text-white"):"btn-light"),onMouseOver:function(){return p(Object(d.a)({},m,{link_d:!0}))},onMouseOut:function(){return p(Object(d.a)({},m,{link_d:!1}))}},"More Info"),i.a.createElement(g.a.Menu,{className:"w-100"},i.a.createElement(g.a.Item,{href:"#"},"Action"),i.a.createElement(g.a.Item,{href:"#"},"Another action"),i.a.createElement(g.a.Item,{href:"#"},"Something else"))))))))};var f=function(){var e=Object(n.useState)(window.innerWidth),t=Object(u.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(window.innerHeight),c=Object(u.a)(r,2),l=c[0],o=c[1];return Object(n.useEffect)(function(){var e=function(){i(window.innerWidth),o(window.innerHeight)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),{width:a,height:l}};var v=function(e){var t=e.isIndexPage,a=e.img,n=e.movie,r=f(),c=r.width,l=r.height;return t?i.a.createElement("div",{className:s()(c<=992&&l<=1050?"image-container-mobile":"image-container","bg-light","rounded"),id:n.id},i.a.createElement("img",{className:s()("image","rounded"),src:a.substring(1),alt:n.title}),i.a.createElement("div",{className:s()("overlay","overlay-fade","d-flex","align-items-center","row","rounded",c<=992&&"mt-auto")},i.a.createElement("div",{className:"col"},i.a.createElement("h1",{className:s()("overlay-text","movie-title")},n.title),i.a.createElement("div",{className:s()("d-flex","align-items-center","justify-content-center","stars-div",c>992&&"mt-2")},i.a.createElement("div",{className:s()("rating")},n.rating.toFixed(1)),i.a.createElement("div",{className:s()("stars-outer")},i.a.createElement("div",{className:s()("stars-inner"),style:{width:"".concat(20*n.rating,"%")}})))))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:s()(c<=992&&l<=1050?"image-container-mobile":"image-container","bg-light","rounded")},i.a.createElement("img",{src:a.substring(1),alt:n.title,className:s()("image","rounded")})),i.a.createElement("div",{className:s()("d-flex","align-items-center","justify-content-center","mt-2","stars-div")},i.a.createElement("div",{className:s()("rating","pt-1")},n.rating.toFixed(1)),i.a.createElement("div",{className:s()("stars-outer")},i.a.createElement("div",{className:s()("stars-inner"),style:{width:"".concat(20*n.rating,"%")}}))))};a(14),a(10),a(12),a(38),Object(n.createContext)();var b=function(e){var t=e.item,n=a(35)("./".concat(t.img));return i.a.createElement(c.b,{className:s()("movie-link","m-2"),to:"/details/"+t.id+"/"},i.a.createElement(v,{isIndexPage:!0,img:n,movie:t}))};var h=function(e){var t=e.movies;return t&&0!==t.length?i.a.createElement("div",{className:s()("d-flex","flex-wrap","justify-content-center","text-center"),id:"movie-index"},t.map(function(e){return i.a.createElement(b,{key:e.id,item:e})})):i.a.createElement("p",null,"No Movies Yet")},E=[{id:1,title:"Alien",img:"alien.png",rating:4.2},{id:2,title:"Avatar",img:"avatar.png",rating:4.7},{id:3,title:"Avengers End Game",img:"avengers-end-game.png",rating:3.8},{id:4,title:"Avengers Infinity War",img:"avengers-infinity-war.png",rating:4.3},{id:5,title:"Avengers",img:"avengers.png",rating:3.4},{id:6,title:"Baixados",img:"baixados.png",rating:2.7},{id:7,title:"Black Panther",img:"black-panther.png",rating:4.6},{id:8,title:"Black Widow",img:"black-widow.png",rating:4.1},{id:9,title:"Captain Marvel",img:"captain-marvel.png",rating:3.7},{id:10,title:"Friends",img:"friends.png",rating:4.6},{id:11,title:"Justice League",img:"justice-league.png",rating:3.4},{id:12,title:"Moon Knight",img:"moon-knight.png",rating:4.4},{id:13,title:"Obi-Wan Kenobi",img:"obi-wan-kenobi.png",rating:4.9},{id:14,title:"Star Wars Return of the Jedi",img:"star-wars-return-of-the-jedi.png",rating:3.9},{id:15,title:"Star Wars Rogue One",img:"star-wars-rogue-one.png",rating:4.4},{id:16,title:"Star Wars The Last Jedi",img:"star-wars-the-last-jedi.png",rating:3.5},{id:17,title:"The Batman",img:"the-batman.png",rating:5},{id:18,title:"The Dark Knight",img:"the-dark-knight.png",rating:4.2},{id:19,title:"The Mandalorian",img:"the-mandalorian.png",rating:4.5},{id:20,title:"Wanda Vision",img:"wanda-vision.png",rating:3.7}];var x=function(){var e=Object(n.useState)(E),t=Object(u.a)(e,2),a=t[0];return t[1],Object(n.useEffect)(function(){window.scrollTo(0,0)},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{movies:a}))};var w=function(){var e=Object(l.g)(),t=f(),r=t.width,c=(t.height,E.find(function(t){return t.id.toString()===e.id})),o=a(35)("./".concat(c.img)),m=[s()("d-block","d-lg-none mt-3"),s()("mx-auto"),s()("mx-auto","text-light","mt-2")],d=[s()("d-none","d-lg-flex","justify-content-center","mt-5"),s()("col-6","text-center"),s()("col-6","ms-5","text-light")];return Object(n.useEffect)(function(){window.scrollTo(0,0)},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:s()("container","my-3","pb-2",r>500?"max-width-80":"")},i.a.createElement("div",{className:s()("d-block","justify-content-center","text-center","bd-highlight")},i.a.createElement("h1",{className:s()("movie-title","display-3")},c.title),i.a.createElement("div",{className:s()(r>992?d[0]:m[0])},i.a.createElement("div",{className:s()(r>992?d[1]:m[1]),id:"detail-img-rating"},i.a.createElement(v,{isIndexPage:!1,img:o,movie:c})),i.a.createElement("div",{className:r>992?d[2]:m[2],id:"movie-details"},i.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quidem alias quasi aperiam voluptatibus nobis natus porro eum quo nesciunt nemo, laudantium, totam consequatur vero obcaecati facere pariatur soluta in eveniet? Laudantium, blanditiis voluptate nostrum molestias, praesentium labore porro eius, consequatur rerum adipisci molestiae error! Qui, quam nemo. Fugit, quo."))))))};var k=function(){var e=f(),t=e.width,a=e.height;return i.a.createElement("div",{className:s()("footer-nav","fixed-bottom","d-flex","d-lg-none","justify-content-center","align-items-center","bd-highlight"),style:{fontSize:a>1050?"40px":"30px",height:a>1050?"80px":"60px"}},i.a.createElement("div",null,i.a.createElement(c.b,{className:s()("nav-icon","h-100","w-25",(t>350&&t<=500?"mx-3":t>500&&"mx-4")||"mx-2"),to:"/"},i.a.createElement("i",{className:s()("fa-solid","fa-house")})),i.a.createElement(c.b,{className:s()("nav-icon","h-100","w-25",(t>350&&t<=500?"mx-3":t>500&&"mx-4")||"mx-2"),to:"#"},i.a.createElement("i",{className:s()("fa-solid","fa-clapperboard")})),i.a.createElement(c.b,{className:s()("nav-icon","h-100","w-25",(t>350&&t<=500?"mx-3":t>500&&"mx-4")||"mx-2"),to:"#"},i.a.createElement("i",{className:s()("fa-solid","fa-star")})),i.a.createElement(c.b,{className:s()("nav-icon","h-100","w-25",(t>350&&t<=500?"mx-3":t>500&&"mx-4")||"mx-2"),to:"#"},i.a.createElement("i",{className:s()("fa-solid","fa-user")}))))};var N=function(){var e=f().width;return i.a.createElement(c.a,null,i.a.createElement(m,null,i.a.createElement(p,null),i.a.createElement("div",{className:s()("container","max-width-90","pb-5",e<=992?s()("my-4","mb-5"):"mt-5")},i.a.createElement(l.c,null,i.a.createElement(l.a,{exact:!0,path:"/",element:i.a.createElement(x,null)}),i.a.createElement(l.a,{path:"/details/:id/",element:i.a.createElement(w,null)}))),i.a.createElement(k,null),i.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",integrity:"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",crossorigin:"anonymous"})))};r.createRoot(document.getElementById("root")).render(i.a.createElement(N,null))}},[[40,2,1]]]);
//# sourceMappingURL=main.a6d6cec4.chunk.js.e94a8cbb8abf.map