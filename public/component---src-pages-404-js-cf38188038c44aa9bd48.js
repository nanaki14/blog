(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{199:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return s});var a=n(0),o=n.n(a),i=n(205),r=n(204);var l=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return o.a.createElement(i.a,{location:this.props.location,title:t},o.a.createElement(r.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},a}(o.a.Component);e.default=l;var s="1097489062"},202:function(t,e,n){"use strict";var a=n(0),o=n.n(a),i=n(66),r=n.n(i);n.d(e,"a",function(){return r.a});n(203),n(9).default.enqueue,o.a.createContext({})},203:function(t,e,n){var a;t.exports=(a=n(206))&&a.default||a},204:function(t,e,n){"use strict";var a=n(207),o=n(0),i=n.n(o),r=n(212),l=n.n(r);function s(t){var e=t.description,n=t.lang,o=t.meta,r=t.title,s=a.data.site,p=e||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:r},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:p}].concat(o)})}s.defaultProps={lang:"en",meta:[],description:""},e.a=s},205:function(t,e,n){"use strict";var a=n(0),o=n.n(a),i=n(202),r=n(201),l=r.b.article.withConfig({displayName:"About__Wrapper",componentId:"sc-1m9qybp-0"})([""]),s=r.b.div.withConfig({displayName:"About__Inner",componentId:"sc-1m9qybp-1"})(["display:flex;justify-content:center;border:1px solid rgba(0,0,0,0.12);@media (max-width:767px){border-left:0;border-right:0;}"]),p=r.b.div.withConfig({displayName:"About__Content",componentId:"sc-1m9qybp-2"})(["padding:30px 0;@media (max-width:767px){padding:20px 10px;}"]),c=r.b.figure.withConfig({displayName:"About__Profile",componentId:"sc-1m9qybp-3"})(["padding:30px 0;@media (max-width:767px){padding:20px 10px;}"]),d=Object(r.c)(["0%{box-shadow:0 0 0 50px #000 inset;}30%{box-shadow:0 0 0 0 #000 inset;}98%{box-shadow:0 0 0 0 #000 inset;}100%{transform:translate(-3px,-2px);box-shadow:0 0 0 0 #000 inset;}"]),m=r.b.span.withConfig({displayName:"About__Avater",componentId:"sc-1m9qybp-4"})(['position:relative;display:inline-block;margin-bottom:10px;width:100px;height:100px;@media (max-width:767px){width:60px;height:60px;margin-bottom:5px;}&:after{content:"";position:absolute;top:0;left:0;box-shadow:0 0 0 50px #000 inset;animation:1.2s 0.6s cubic-bezier(0.77,0,0.175,1) '," both;width:100%;height:100%;border:1px solid #000;border-radius:50%;}"],d),u=r.b.span.withConfig({displayName:"About__AvaterThumb",componentId:"sc-1m9qybp-5"})(["display:inline-block;width:100%;height:100%;border-radius:50%;background:url(/avater.jpg) no-repeat center;background-size:cover;overflow:hidden;"]),h=r.b.p.withConfig({displayName:"About__Name",componentId:"sc-1m9qybp-6"})(["display:block;font-size:1.4rem;color:#000;line-height:",";text-align:left;@media (max-width:767px){text-align:center;}"],19/14),b=r.b.span.withConfig({displayName:"About__Position",componentId:"sc-1m9qybp-7"})(["display:block;font-size:1rem;color:#666666;line-height:",";text-align:left;@media (max-width:767px){text-align:center;}"],1.4),g=function(){return o.a.createElement(l,null,o.a.createElement(s,null,o.a.createElement(p,null,o.a.createElement(c,null,o.a.createElement(m,null,o.a.createElement(u,null)),o.a.createElement(h,null,"MasatoChiba"),o.a.createElement(b,null,"Frontend Developer")))))},f=(n(211),r.b.footer.withConfig({displayName:"Footer__Wrapper",componentId:"sc-64jjp6-0"})(["margin-top:80px;background-color:#000;@media (max-width:767px){margin-top:50px;}"])),x=r.b.footer.withConfig({displayName:"Footer__Inner",componentId:"sc-64jjp6-1"})(["display:flex;align-items:center;justify-content:center;width:96%;max-width:1040px;min-height:64px;margin:0 auto;padding:23px 0 13px;"]),y=r.b.small.withConfig({displayName:"Footer__Copy",componentId:"sc-64jjp6-2"})(["font-size:1rem;color:#fff;line-height:",";"],1.3),w=function(){return o.a.createElement(f,null,o.a.createElement(x,null,o.a.createElement(y,null,"© ",(new Date).getFullYear()," Masato Chiba")))};function _(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n  @import 'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css';\n  * {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n\n  * {\n    box-sizing: inherit;\n\n    &:before,\n    &:after {\n      box-sizing: border-box;\n    }\n  }\n}\n\nhtml,\nbody {\n  -webkit-text-size-adjust: 100%;\n  width: 100%;\n  height: 100%;\n  color: #333333;\n  font-family: -apple-system, \"Noto Sans Japanese\", sans-serif;\n  font-size: 62.5%;\n  font-weight: 300;\n  line-height:1;\n  letter-spacing: .5px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: unset;\n  @media only screen and(-webkit-min-device-pixel-ratio: 2),(min-resolution: 2dppx) {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n}\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nsection {\n  display: block;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nul {\n  list-style:none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  vertical-align: top;\n}\n\ntable {\n  border-collapse:collapse;\n  border-spacing:0;\n}\n\nth,\ntd {\n  padding: 0;\n  text-align: left;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\ninput, button, textarea, select {\n  margin: 0;\n  padding: 0;\n  background: none;\n  border: none;\n  border-radius: 0;\n  outline: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\niframe {\n  border: none;\n}\n\n"]);return _=function(){return t},t}var v=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/"===n.pathname?o.a.createElement("h1",null,o.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.a.createElement("div",null,o.a.createElement(E,null),o.a.createElement("header",null,t),o.a.createElement("main",null,r),o.a.createElement(g,null),o.a.createElement(w,null))},a}(o.a.Component),E=(e.a=v,Object(r.a)(_()))},206:function(t,e,n){"use strict";n.r(e);n(18);var a=n(0),o=n.n(a),i=n(99);e.default=function(t){var e=t.location,n=t.pageResources;return n?o.a.createElement(i.a,Object.assign({location:e,pageResources:n},n.json)):null}},207:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Starter Blog",description:"A starter blog demonstrating what Gatsby can do.",author:"Kyle Mathews"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-cf38188038c44aa9bd48.js.map