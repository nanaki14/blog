(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(201),r=n(207),l=n(205),p=(n(233),n(203)),c=n(211),s=n.n(c),m=o.b.article.withConfig({displayName:"Article__Wrapper",componentId:"sc-1onkw05-0"})(["position:relative;width:calc((100% - 30px) / 2);margin-bottom:30px;@media (max-width:767px){width:calc((100% - 10px) / 2);margin-bottom:20px;}&:nth-last-child(-n + 2){margin-bottom:0;}a{display:block;height:100%;}"]),d=o.b.figure.withConfig({displayName:"Article__Thumb",componentId:"sc-1onkw05-1"})(["background-color:#000;span{display:block;padding-bottom:calc(202 / 360 * 100%);background-position:center;background-repeat:no-repeat;background-size:cover;opacity:0.7;@media (max-width:767px){transition:0.2s ease-in;}}"]),h=o.b.div.withConfig({displayName:"Article__Detail",componentId:"sc-1onkw05-2"})(["padding:6.5px 0 10px;@media (max-width:767px){padding:7px 0 10px;}"]),u=o.b.h3.withConfig({displayName:"Article__Title",componentId:"sc-1onkw05-3"})(["margin-bottom:6.5px;font-size:1.4rem;line-height:1.5;@media (max-width:767px){margin-bottom:7px;font-size:1.2rem;}"]),f=o.b.span.withConfig({displayName:"Article__Date",componentId:"sc-1onkw05-4"})(["font-size:1.2rem;color:#666;font-style:italic;line-height:1;@media (max-width:767px){font-size:1rem;}"]),g=function(e){var t=e.title,n=e.link,a=e.date,o=e.thumb;return i.a.createElement(m,null,i.a.createElement(p.a,{to:n},i.a.createElement(d,null,i.a.createElement("span",{style:{backgroundImage:"url("+o+")"}})),i.a.createElement(h,null,i.a.createElement(u,null,t),i.a.createElement(f,null,s()(a).format("YYYY.MM.DD")))))};n.d(t,"pageQuery",function(){return w});var x=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.allMarkdownRemark.edges;return i.a.createElement(r.a,{location:this.props.location,title:t},i.a.createElement(l.a,null),i.a.createElement(b,null,n.map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return i.a.createElement(g,{key:t.fields.slug,title:n,date:t.frontmatter.date,link:t.frontmatter.category+"/"+t.fields.slug,thumb:t.frontmatter.thumb&&t.frontmatter.thumb.childImageSharp.fluid.src})})))},a}(i.a.Component),b=o.b.div.withConfig({displayName:"pages__Unit",componentId:"sc-1nbib7n-0"})(["display:flex;flex-wrap:wrap;justify-content:space-between;padding-top:50px;"]),w=(t.default=x,"259994889")},202:function(e,t,n){var a;e.exports=(a=n(204))&&a.default||a},203:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(66),r=n.n(o);n.d(t,"a",function(){return r.a});n(202),n(9).default.enqueue,i.a.createContext({})},204:function(e,t,n){"use strict";n.r(t);n(18);var a=n(0),i=n.n(a),o=n(94);t.default=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},205:function(e,t,n){"use strict";var a=n(206),i=n(0),o=n.n(i),r=n(210),l=n.n(r);function p(e){var t=e.description,n=e.lang,i=e.meta,r=e.title,p=a.data.site,c=t||p.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+p.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:r},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:p.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:c}].concat(i),link:[{rel:"icon",type:"image/png",sizes:"16x16",href:"favicon-16.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"favicon-32.png"}]})}p.defaultProps={lang:"en",meta:[],description:""},t.a=p},206:function(e){e.exports={data:{site:{siteMetadata:{title:"Mix Design",description:"nanakiのメモのようなブログ",author:"nanaki"}}}}},207:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(201),r=o.b.article.withConfig({displayName:"About__Wrapper",componentId:"sc-1m9qybp-0"})(["order:1;width:200px;@media (max-width:767px){width:100%;margin-top:48px;}"]),l=o.b.div.withConfig({displayName:"About__Inner",componentId:"sc-1m9qybp-1"})(["display:flex;justify-content:center;border:1px solid rgba(0,0,0,0.12);@media (max-width:767px){border-left:0;border-right:0;}"]),p=o.b.div.withConfig({displayName:"About__Content",componentId:"sc-1m9qybp-2"})(["padding:30px 0;@media (max-width:767px){padding:20px 10px;}"]),c=o.b.figure.withConfig({displayName:"About__Profile",componentId:"sc-1m9qybp-3"})(["padding:30px 0;@media (max-width:767px){padding:20px 10px;text-align:center;}"]),s=Object(o.c)(["0%{box-shadow:0 0 0 50px #000 inset;}30%{box-shadow:0 0 0 0 #000 inset;}98%{box-shadow:0 0 0 0 #000 inset;}100%{transform:translate(-3px,-2px);box-shadow:0 0 0 0 #000 inset;}"]),m=o.b.span.withConfig({displayName:"About__Avater",componentId:"sc-1m9qybp-4"})(['position:relative;display:inline-block;margin-bottom:10px;width:100px;height:100px;@media (max-width:767px){width:60px;height:60px;margin-bottom:5px;}&:after{content:"";position:absolute;top:0;left:0;box-shadow:0 0 0 50px #000 inset;animation:1.2s 0.6s cubic-bezier(0.77,0,0.175,1) '," both;width:100%;height:100%;border:1px solid #000;border-radius:50%;}"],s),d=o.b.span.withConfig({displayName:"About__AvaterThumb",componentId:"sc-1m9qybp-5"})(["display:inline-block;width:100%;height:100%;border-radius:50%;background:url(/avater.jpg) no-repeat center;background-size:cover;overflow:hidden;"]),h=o.b.p.withConfig({displayName:"About__Name",componentId:"sc-1m9qybp-6"})(["display:block;font-size:1.4rem;color:#000;line-height:",";text-align:left;@media (max-width:767px){text-align:center;}"],19/14),u=o.b.span.withConfig({displayName:"About__Position",componentId:"sc-1m9qybp-7"})(["display:block;font-size:1rem;color:#666666;line-height:",";text-align:left;@media (max-width:767px){text-align:center;}"],1.4),f=o.b.ul.withConfig({displayName:"About__Social",componentId:"sc-1m9qybp-8"})(["@media (max-width:767px){display:flex;align-items:center;justify-content:center;}"]),g=o.b.li.withConfig({displayName:"About__SocialItem",componentId:"sc-1m9qybp-9"})(['margin:0 0 10px -5px;@media (max-width:767px){margin:0 5px;}a{position:relative;display:inline-block;padding:2px 5px;font-size:1.4rem;color:#000;line-height:(20/14);text-transform:uppercase;@media (min-width:768px){transition:0.2s ease;&:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000;transform-origin:0 100%;transform:scaleY(0);transition:transform 0.2s ease;z-index:-1;}&:hover{color:#fff;&:after{transform-origin:0 0;transform:scaleY(1);}}}@media (max-width:767px){font-size:1.2rem;}}']),x=function(){return i.a.createElement(r,null,i.a.createElement(l,null,i.a.createElement(p,null,i.a.createElement(c,null,i.a.createElement(m,null,i.a.createElement(d,null)),i.a.createElement(h,null,"MasatoChiba"),i.a.createElement(u,null,"Frontend Developer")),i.a.createElement(f,null,i.a.createElement(g,null,i.a.createElement("a",{href:"https://twitter.com/nanaki14",target:"_blank","data-text":"twitter",rel:"noopener noreferrer"},"twitter")),i.a.createElement(g,null,i.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100003877097329",target:"_blank","data-text":"facebook",rel:"noopener noreferrer"},"facebook")),i.a.createElement(g,null,i.a.createElement("a",{href:"https://github.com/nanaki14",target:"_blank","data-text":"github",rel:"noopener noreferrer"},"github"))))))},b=n(203),w=o.b.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-5ltj5t-0"})(["border-bottom:1px solid #000;"]),y=o.b.div.withConfig({displayName:"Header__Inner",componentId:"sc-5ltj5t-1"})(["display:flex;align-items:center;justify-content:center;width:96%;max-width:1040px;min-height:64px;margin:0 auto;@media (max-width:767px){width:94%;min-height:50px;}h1,h2{font-size:3rem;color:#000;font-weight:200;letter-spacing:1px;@media (max-width:767px){font-size:2rem;}}"]),_=function(e){var t;return t="/"===e.location.pathname?i.a.createElement("h1",null,i.a.createElement(b.a,{to:"/"},"MixDesign")):i.a.createElement("h2",null,i.a.createElement(b.a,{to:"/"},"MixDesign")),i.a.createElement(w,null,i.a.createElement(y,null,t))},k=(n(209),o.b.footer.withConfig({displayName:"Footer__Wrapper",componentId:"sc-64jjp6-0"})(["margin-top:80px;background-color:#000;@media (max-width:767px){margin-top:50px;}"])),v=o.b.footer.withConfig({displayName:"Footer__Inner",componentId:"sc-64jjp6-1"})(["display:flex;align-items:center;justify-content:center;width:96%;max-width:1040px;min-height:64px;margin:0 auto;padding:23px 0 13px;"]),E=o.b.small.withConfig({displayName:"Footer__Copy",componentId:"sc-64jjp6-2"})(["font-size:1rem;color:#fff;line-height:",";"],1.3),C=function(){return i.a.createElement(k,null,i.a.createElement(v,null,i.a.createElement(E,null,"© ",(new Date).getFullYear()," Masato Chiba")))};function I(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  @import 'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css';\n  * {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n\n  * {\n    box-sizing: inherit;\n\n    &:before,\n    &:after {\n      box-sizing: border-box;\n    }\n  }\n}\n\nhtml,\nbody {\n  -webkit-text-size-adjust: 100%;\n  width: 100%;\n  height: 100%;\n  color: #333333;\n  font-family: -apple-system, \"Noto Sans Japanese\", sans-serif;\n  font-size: 62.5%;\n  font-weight: 300;\n  line-height:1;\n  letter-spacing: .5px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: unset;\n  @media only screen and(-webkit-min-device-pixel-ratio: 2),(min-resolution: 2dppx) {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n}\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nsection {\n  display: block;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nul {\n  list-style:none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  vertical-align: top;\n}\n\ntable {\n  border-collapse:collapse;\n  border-spacing:0;\n}\n\nth,\ntd {\n  padding: 0;\n  text-align: left;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\ninput, button, textarea, select {\n  margin: 0;\n  padding: 0;\n  background: none;\n  border: none;\n  border-radius: 0;\n  outline: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\niframe {\n  border: none;\n}\n\n"]);return I=function(){return e},e}var z=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.location,n=e.children;return i.a.createElement("div",null,i.a.createElement(A,null),i.a.createElement(_,{location:t}),i.a.createElement(N,null,i.a.createElement(j,null,n),i.a.createElement(x,null)),i.a.createElement(C,null))},a}(i.a.Component),N=o.b.div.withConfig({displayName:"layout__Container",componentId:"sc-1xvv2zr-0"})(["display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start;width:96%;max-width:1040px;min-height:calc(100% - 65px - 144px);margin:0 auto;@media (max-width:767px){display:block;width:94%;min-height:calc(100% - 51px - 114px);}"]),j=o.b.main.withConfig({displayName:"layout__Main",componentId:"sc-1xvv2zr-1"})(["order:2;width:calc(100% - 240px);margin-left:40px;@media (max-width:767px){width:100%;margin-left:0;}"]),A=(t.a=z,Object(o.a)(I()))},233:function(e,t,n){"use strict";n(212)("link",function(e){return function(t){return e(this,"a","href",t)}})}}]);
//# sourceMappingURL=component---src-pages-index-js-19bddca5968593dbc424.js.map