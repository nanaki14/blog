(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return y});var a=n(0),i=n.n(a),o=n(211),r=n.n(o),l=n(201),p=n(207),c=n(205);var s=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title;return i.a.createElement(p.a,{location:this.props.location,title:t},i.a.createElement(c.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("div",null,i.a.createElement(h,null,i.a.createElement(g,null,i.a.createElement(b,{style:{backgroundImage:"url("+(e.frontmatter.thumb&&e.frontmatter.thumb.childImageSharp.fluid.src)+")"}}),i.a.createElement(u,null,i.a.createElement(x,null,i.a.createElement("span",null,i.a.createElement("span",null,e.frontmatter.title))),i.a.createElement(f,null,i.a.createElement("span",null,r()(e.frontmatter.date).format("YYYY.MM.DD"))))))),i.a.createElement(w,{dangerouslySetInnerHTML:{__html:e.html}}))},a}(i.a.Component),d=Object(l.c)(["0%{width:1px;height:0;}35%{width:1px;height:100%;}40%{width:1px;height:100%;}70%{width:100%;height:100%;transform:scaleX(1);}100%{width:100%;height:100%;transform:scaleX(0);}"]),m=Object(l.c)(["0%{opacity:0;}77%{opacity:0;}78%{opacity:1;}100%{opacity:1;}}"]),h=l.b.div.withConfig({displayName:"blog-post__Inner",componentId:"sc-1993m0e-0"})(["padding-bottom:50px;@media (max-width:767px){padding-bottom:30px;}"]),g=l.b.div.withConfig({displayName:"blog-post__Head",componentId:"sc-1993m0e-1"})(["position:relative;margin-bottom:30px;background-color:#151820;@media (max-width:767px){margin-left:-3vw;margin-right:-3vw;}"]),b=l.b.div.withConfig({displayName:"blog-post__HeadImage",componentId:"sc-1993m0e-2"})(["padding-bottom:calc(336 / 600 * 100%);background-position:center;background-repeat:no-repeat;background-size:cover;opacity:0.7;"]),u=l.b.div.withConfig({displayName:"blog-post__HeadInner",componentId:"sc-1993m0e-3"})(["position:absolute;top:50%;left:0;width:100%;transform:translate(0,-50%);text-align:center;"]),x=l.b.h1.withConfig({displayName:"blog-post__Title",componentId:"sc-1993m0e-4"})(["margin-bottom:10px;font-size:1.8rem;color:#fff;line-height:",';> span{position:relative;display:inline-block;margin:0 8px;padding:0 5px;&:after{content:"";position:absolute;top:0;left:0;width:1px;height:0;background-color:#333;transform-origin:100% 0;animation:1.5s 0.3s '," cubic-bezier(0.77,0,0.175,1) both;}span{display:inline-block;opacity:0;animation:1.5s 0.3s "," cubic-bezier(0.77,0,0.175,1) both;}}"],1.5,d,m),f=l.b.span.withConfig({displayName:"blog-post__Info",componentId:"sc-1993m0e-5"})(['position:relative;display:inline-block;padding:1px 5px 3px;font-size:1rem;color:rgba(255,255,255,0.7);letter-spacing:2px;line-height:1;&:after{content:"";position:absolute;top:0;right:0;width:1px;height:0;background-color:#333;transform-origin:0 0;animation:1.5s 0.3s '," cubic-bezier(0.77,0,0.175,1) both;}span{display:inline-block;opacity:0;animation:1.5s 0.3s "," cubic-bezier(0.77,0,0.175,1) both;}"],d,m),w=l.b.div.withConfig({displayName:"blog-post__Content",componentId:"sc-1993m0e-6"})(["> *:last-child{margin-bottom:0;}h2{margin:50px 0 20px;font-size:1.6rem;color:$black100;line-height:",';text-align:center;&:after{content:"";display:block;width:40px;height:2px;margin:10px auto 0;background-color:currentColor;}}p{margin-bottom:20px;font-size:1.4rem;line-height:',';}a{text-decoration:underline;&:hover{text-decoration:none;}}img{display:block;max-width:100%;margin:0 auto 20px;}pre{margin-bottom:20px;}p > code{color:#424242;vertical-align:2px;font-size:88%;border:1px solid #e0e0e0;background-color:#f1f1f1;padding:2px 4px;border-radius:2px;line-height:1;margin-left:2px;margin-right:2px;}pre > code{margin:auto;position:relative;box-sizing:border-box;background-color:#394034;color:#f8f8f2;display:block;line-height:1.4;padding:40px 24px;text-align:left;overflow:auto;resize:horizontal;z-index:2;border:0;border-radius:8px;font-family:Menlo,Consolas,"DejaVu Sans Mono",monospace;font-size:14px;font-weight:700;}'],27/16,2);t.default=s;var y="2745896918"},202:function(e,t,n){var a;e.exports=(a=n(204))&&a.default||a},203:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(66),r=n.n(o);n.d(t,"a",function(){return r.a});n(202),n(9).default.enqueue,i.a.createContext({})},204:function(e,t,n){"use strict";n.r(t);n(18);var a=n(0),i=n.n(a),o=n(94);t.default=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},205:function(e,t,n){"use strict";var a=n(206),i=n(0),o=n.n(i),r=n(210),l=n.n(r);function p(e){var t=e.description,n=e.lang,i=e.meta,r=e.title,p=a.data.site,c=t||p.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+p.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:r},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:p.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:c}].concat(i),link:[{rel:"icon",type:"image/png",sizes:"16x16",href:"favicon-16.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"favicon-32.png"}]})}p.defaultProps={lang:"en",meta:[],description:""},t.a=p},206:function(e){e.exports={data:{site:{siteMetadata:{title:"Mix Design",description:"nanakiのメモのようなブログ",author:"nanaki"}}}}},207:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(201),r=o.b.article.withConfig({displayName:"About__Wrapper",componentId:"sc-1m9qybp-0"})(["order:1;width:200px;@media (max-width:767px){width:100%;order:3;}"]),l=o.b.div.withConfig({displayName:"About__Inner",componentId:"sc-1m9qybp-1"})(["display:flex;justify-content:center;border:1px solid rgba(0,0,0,0.12);@media (max-width:767px){border-left:0;border-right:0;}"]),p=o.b.div.withConfig({displayName:"About__Content",componentId:"sc-1m9qybp-2"})(["padding:30px 0;@media (max-width:767px){padding:20px 10px;}"]),c=o.b.figure.withConfig({displayName:"About__Profile",componentId:"sc-1m9qybp-3"})(["padding:30px 0;@media (max-width:767px){padding:20px 10px;text-align:center;}"]),s=Object(o.c)(["0%{box-shadow:0 0 0 50px #000 inset;}30%{box-shadow:0 0 0 0 #000 inset;}98%{box-shadow:0 0 0 0 #000 inset;}100%{transform:translate(-3px,-2px);box-shadow:0 0 0 0 #000 inset;}"]),d=o.b.span.withConfig({displayName:"About__Avater",componentId:"sc-1m9qybp-4"})(['position:relative;display:inline-block;margin-bottom:10px;width:100px;height:100px;@media (max-width:767px){width:60px;height:60px;margin-bottom:5px;}&:after{content:"";position:absolute;top:0;left:0;box-shadow:0 0 0 50px #000 inset;animation:1.2s 0.6s cubic-bezier(0.77,0,0.175,1) '," both;width:100%;height:100%;border:1px solid #000;border-radius:50%;}"],s),m=o.b.span.withConfig({displayName:"About__AvaterThumb",componentId:"sc-1m9qybp-5"})(["display:inline-block;width:100%;height:100%;border-radius:50%;background:url(/avater.jpg) no-repeat center;background-size:cover;overflow:hidden;"]),h=o.b.p.withConfig({displayName:"About__Name",componentId:"sc-1m9qybp-6"})(["display:block;font-size:1.4rem;color:#000;line-height:",";text-align:left;@media (max-width:767px){text-align:center;}"],19/14),g=o.b.span.withConfig({displayName:"About__Position",componentId:"sc-1m9qybp-7"})(["display:block;font-size:1rem;color:#666666;line-height:",";text-align:left;@media (max-width:767px){text-align:center;}"],1.4),b=o.b.ul.withConfig({displayName:"About__Social",componentId:"sc-1m9qybp-8"})(["@media (max-width:767px){display:flex;align-items:center;justify-content:center;}"]),u=o.b.li.withConfig({displayName:"About__SocialItem",componentId:"sc-1m9qybp-9"})(['margin:0 0 10px -5px;@media (max-width:767px){margin:0 5px;}a{position:relative;display:inline-block;padding:2px 5px;font-size:1.4rem;color:#000;line-height:(20/14);text-transform:uppercase;@media (min-width:768px){transition:0.2s ease;&:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000;transform-origin:0 100%;transform:scaleY(0);transition:transform 0.2s ease;z-index:-1;}&:hover{color:#fff;&:after{transform-origin:0 0;transform:scaleY(1);}}}@media (max-width:767px){font-size:1.2rem;}}']),x=function(){return i.a.createElement(r,null,i.a.createElement(l,null,i.a.createElement(p,null,i.a.createElement(c,null,i.a.createElement(d,null,i.a.createElement(m,null)),i.a.createElement(h,null,"MasatoChiba"),i.a.createElement(g,null,"Frontend Developer")),i.a.createElement(b,null,i.a.createElement(u,null,i.a.createElement("a",{href:"https://twitter.com/nanaki14",target:"_blank","data-text":"twitter",rel:"noopener noreferrer"},"twitter")),i.a.createElement(u,null,i.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100003877097329",target:"_blank","data-text":"facebook",rel:"noopener noreferrer"},"facebook")),i.a.createElement(u,null,i.a.createElement("a",{href:"https://github.com/nanaki14",target:"_blank","data-text":"github",rel:"noopener noreferrer"},"github"))))))},f=n(203),w=o.b.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-5ltj5t-0"})(["border-bottom:1px solid #000;"]),y=o.b.div.withConfig({displayName:"Header__Inner",componentId:"sc-5ltj5t-1"})(["display:flex;align-items:center;justify-content:center;width:96%;max-width:1040px;min-height:64px;margin:0 auto;@media (max-width:767px){width:94%;min-height:50px;}h1,h2{font-size:3rem;color:#000;font-weight:200;letter-spacing:1px;@media (max-width:767px){font-size:2rem;}}"]),_=function(e){var t;return t="/"===e.location.pathname?i.a.createElement("h1",null,i.a.createElement(f.a,{to:"/"},"MixDesign")):i.a.createElement("h2",null,i.a.createElement(f.a,{to:"/"},"MixDesign")),i.a.createElement(w,null,i.a.createElement(y,null,t))},v=(n(209),o.b.footer.withConfig({displayName:"Footer__Wrapper",componentId:"sc-64jjp6-0"})(["margin-top:80px;background-color:#000;@media (max-width:767px){margin-top:50px;}"])),k=o.b.footer.withConfig({displayName:"Footer__Inner",componentId:"sc-64jjp6-1"})(["display:flex;align-items:center;justify-content:center;width:96%;max-width:1040px;min-height:64px;margin:0 auto;padding:23px 0 13px;"]),E=o.b.small.withConfig({displayName:"Footer__Copy",componentId:"sc-64jjp6-2"})(["font-size:1rem;color:#fff;line-height:",";"],1.3),z=function(){return i.a.createElement(v,null,i.a.createElement(k,null,i.a.createElement(E,null,"© ",(new Date).getFullYear()," Masato Chiba")))};function C(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  @import 'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css';\n  * {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n\n  * {\n    box-sizing: inherit;\n\n    &:before,\n    &:after {\n      box-sizing: border-box;\n    }\n  }\n}\n\nhtml,\nbody {\n  -webkit-text-size-adjust: 100%;\n  width: 100%;\n  height: 100%;\n  color: #333333;\n  font-family: -apple-system, \"Noto Sans Japanese\", sans-serif;\n  font-size: 62.5%;\n  font-weight: 300;\n  line-height:1;\n  letter-spacing: .5px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: unset;\n  @media only screen and(-webkit-min-device-pixel-ratio: 2),(min-resolution: 2dppx) {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n}\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nsection {\n  display: block;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nul {\n  list-style:none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  vertical-align: top;\n}\n\ntable {\n  border-collapse:collapse;\n  border-spacing:0;\n}\n\nth,\ntd {\n  padding: 0;\n  text-align: left;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\ninput, button, textarea, select {\n  margin: 0;\n  padding: 0;\n  background: none;\n  border: none;\n  border-radius: 0;\n  outline: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\niframe {\n  border: none;\n}\n\n"]);return C=function(){return e},e}var I=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.location,n=e.children;return i.a.createElement("div",null,i.a.createElement(M,null),i.a.createElement(_,{location:t}),i.a.createElement(N,null,i.a.createElement(x,null),i.a.createElement(j,null,n)),i.a.createElement(z,null))},a}(i.a.Component),N=o.b.div.withConfig({displayName:"layout__Container",componentId:"sc-1xvv2zr-0"})(["display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start;width:96%;max-width:1040px;min-height:calc(100% - 65px - 144px);margin:0 auto;padding-top:50px;@media (max-width:767px){display:block;width:94%;min-height:calc(100% - 51px - 114px);}"]),j=o.b.main.withConfig({displayName:"layout__Main",componentId:"sc-1xvv2zr-1"})(["order:2;width:calc(100% - 240px);margin-left:40px;@media (max-width:767px){width:100%;margin-left:0;}"]),M=(t.a=I,Object(o.a)(C()))}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-3fefe81f2961e440c023.js.map