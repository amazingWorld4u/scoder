(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,r){"use strict";r("0mN4");var a=r("7oKc"),n=r("q1tI"),i=r.n(n),o=r("Wbzz"),s=r("9eSz"),l=r.n(s),c=r("vOnD"),d=r("p3AD");var u="4007731267",f=c.a.div.withConfig({displayName:"bio__Container",componentId:"zkkkmj-0"})(["display:flex;"]);t.a=function(){return i.a.createElement(o.StaticQuery,{query:u,render:function(e){var t=e.site.siteMetadata,r=t.author,a=t.social;return i.a.createElement(f,null,i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:r,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,r)," who lives and works in San Francisco building useful things."," ",i.a.createElement("a",{href:"https://twitter.com/"+a.twitter},"You should follow him on Twitter")))},data:a})}},"7oKc":function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABA//aAAwDAQACEAMQAAABtTuWpVlGVPBk0HAFf//EABsQAAICAwEAAAAAAAAAAAAAAAECAxMAESMk/9oACAEBAAEFAnOlgZ7cvIZnEYuxj6ZjxjOh/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEiH/2gAIAQMBAT8BwqOP/8QAGREAAQUAAAAAAAAAAAAAAAAAAAEQEiEx/9oACAECAQE/AbJCY3//xAAgEAABAgUFAAAAAAAAAAAAAAABABECAxASITFBYYGR/9oACAEBAAY/Ai2qYx3A0tPifYlsLBBT8qX3T//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExQVH/2gAIAQEAAT8hRVcZF9KXnJkRaRWsbCd3oQNMD6x1eoRshVw76T//2gAMAwEAAgADAAAAENvoAP/EABkRAAIDAQAAAAAAAAAAAAAAAAABESExUf/aAAgBAwEBPxCEpsj00xYf/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEQESExUf/aAAgBAgEBPxBNs0X5A9n/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV0whQo4lO/wAzyyrjkGw+cZbkILxecbfXBH7zSeBntAmta2n5uEBbXZ4N/9k=","width":50,"height":50,"src":"/static/4f27694bd7811d13157e5e488ad64f43/9b664/profile-pic.jpg","srcSet":"/static/4f27694bd7811d13157e5e488ad64f43/9b664/profile-pic.jpg 1x,\\n/static/4f27694bd7811d13157e5e488ad64f43/06a10/profile-pic.jpg 1.5x,\\n/static/4f27694bd7811d13157e5e488ad64f43/f1b5a/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":"Kyle Matthews","social":{"twitter":"kylemathews"}}}}}')},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("0mN4");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),o=a(r("VbXa")),s=a(r("8OQS")),l=a(r("pVnL")),c=a(r("q1tI")),d=a(r("17x9")),u=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,r=e.fixed;return(t&&t[0]||r&&r[0]).src},A=Object.create({}),p=function(e){var t=u(e),r=f(t);return A[r]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),c.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function v(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function S(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function w(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),b.set(e,t)),function(){r.unobserve(e),b.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+c+o+s+r+a+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},B=function(e){var t=e.src,r=e.imageVariants,a=e.generateSources,n=e.spreadProps,i=c.default.createElement(x,(0,l.default)({src:t},n));return r.length>1?c.default.createElement("picture",null,a(r),i):i},x=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,A=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:r,srcSet:a,src:n},A,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));x.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var R=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=m&&p(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!g&&h&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||m&&(g||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=f(t),A[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,A=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,E=e.itemProp,w=e.loading,O=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,l.default)({opacity:R?1:0,transition:I?"opacity "+h+"ms":"none"},s),C="boolean"==typeof m?"lightgray":m,L={transitionDelay:h+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&L,{},s,{},f),N={title:t,alt:this.state.isVisible?"":r,style:k,className:A,itemProp:E};if(p){var Q=p,V=Q[0];return c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),C&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&L)}),V.base64&&c.default.createElement(B,{src:V.base64,spreadProps:N,imageVariants:Q,generateSources:S}),V.tracedSVG&&c.default.createElement(B,{src:V.tracedSVG,spreadProps:N,imageVariants:Q,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,y(Q),c.default.createElement(x,{alt:r,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:r,title:t,loading:w},V,{imageVariants:Q}))}}))}if(g){var D=g,z=D[0],M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},i);return"inherit"===i.display&&delete M.display,c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},C&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:C,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},I&&L)}),z.base64&&c.default.createElement(B,{src:z.base64,spreadProps:N,imageVariants:D,generateSources:S}),z.tracedSVG&&c.default.createElement(B,{src:z.tracedSVG,spreadProps:N,imageVariants:D,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,y(D),c.default.createElement(x,{alt:r,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:r,title:t,loading:w},z,{imageVariants:D}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),P=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});R.propTypes={resolutions:I,sizes:P,fixed:d.default.oneOfType([I,d.default.arrayOf(I)]),fluid:d.default.oneOfType([P,d.default.arrayOf(P)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var C=R;t.default=C},"A2+M":function(e,t,r){var a=r("X8hv");e.exports={MDXRenderer:a}},X8hv:function(e,t,r){function a(e,t,r){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return r&&n(i,r.prototype),i}).apply(null,arguments)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r("jm62"),r("yt8O"),r("RW0V"),r("XfO3"),r("HEwt"),r("rE2o"),r("ioFf"),r("rGqo"),r("/SS/"),r("a1Th"),r("Btvt"),r("I5cv"),r("I5cv"),r("/SS/"),r("XfO3"),r("HEwt"),r("a1Th"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var c=r("q1tI"),d=r("E/Ix"),u=d.useMDXComponents,f=d.mdx,A=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,n=e.children,o=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["scope","components","children"]),l=u(r),d=A(t),p=c.useMemo((function(){if(!n)return null;var e=s({React:c,mdx:f},d),t=Object.keys(e),r=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(i(t),[""+n])).apply(void 0,[{}].concat(i(r)))}),[n,t]);return c.createElement(p,s({components:l},o))}},yZlL:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return g}));r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var a=r("q1tI"),n=r.n(a),i=r("Wbzz"),o=r("A2+M"),s=r("6Gk8"),l=r("Bl7J"),c=r("vrFN"),d=r("p3AD");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props.data.mdx,t=this.props.data.site.siteMetadata.title,r=this.props.pageContext,a=r.previous,u=r.next;return n.a.createElement(l.a,{location:this.props.location,title:t},n.a.createElement(c.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),n.a.createElement("h1",null,e.frontmatter.title),n.a.createElement("p",{style:f({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1),marginTop:Object(d.a)(-1)})},e.frontmatter.date),n.a.createElement(o.MDXRenderer,null,e.body),n.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),n.a.createElement(s.a,null),n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null,a&&n.a.createElement(i.Link,{to:"blog"+a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),n.a.createElement("li",null,u&&n.a.createElement(i.Link,{to:"blog"+u.fields.slug,rel:"next"},u.frontmatter.title," →"))))},a}(n.a.Component);t.default=p;var g="3460203138"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d3f81e23703fe524bd1d.js.map