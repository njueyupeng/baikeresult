(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9747],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8002:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={slug:"cssprint",title:"\u5229\u7528CSS\u5b9e\u73b0\u5206\u9875\u6253\u5370",author:"Yu Peng",author_title:"FE Developer",author_url:"https://github.com/njueyupeng",author_image_url:"https://avatars.githubusercontent.com/u/13177502?s=60&v=4",tags:["css"]},l={permalink:"/blog/cssprint",editUrl:"http://how2js.cn/blog/2018-09-16-print.md",source:"@site/blog/2018-09-16-print.md",title:"\u5229\u7528CSS\u5b9e\u73b0\u5206\u9875\u6253\u5370",description:"\u6700\u8fd1\u78b0\u5230\u4e00\u4e2a\u9700\u6c42\uff0c\u9700\u8981\u524d\u7aef\u5c06\u5728\u4e00\u4e2a\u9875\u9762\u5185\u8c03\u7528\u6d4f\u89c8\u5668\u7684 window.print()\u65b9\u6cd5\uff0c\u6253\u5370\u5f53\u524d\u9875\u9762\u3002\u4f46\u662f\u5462\uff0c\u9700\u8981\u5c06\u4e09\u4e2a DIV \u5206\u9875\u6253\u5370\uff1a",date:"2018-09-16T00:00:00.000Z",formattedDate:"September 16, 2018",tags:[{label:"css",permalink:"/blog/tags/css"}],readingTime:.19,truncated:!1,prevItem:{title:"Hola",permalink:"/blog/hola"}},c=[],p={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6700\u8fd1\u78b0\u5230\u4e00\u4e2a\u9700\u6c42\uff0c\u9700\u8981\u524d\u7aef\u5c06\u5728\u4e00\u4e2a\u9875\u9762\u5185\u8c03\u7528\u6d4f\u89c8\u5668\u7684 window.print()\u65b9\u6cd5\uff0c\u6253\u5370\u5f53\u524d\u9875\u9762\u3002\u4f46\u662f\u5462\uff0c\u9700\u8981\u5c06\u4e09\u4e2a DIV \u5206\u9875\u6253\u5370\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div style="height:290mm">\u6211\u662f\u5c01\u9762</div>\n<div style="height:290mm">\u6211\u662f\u76ee\u5f55\uff0c\u4f60\u4e0d\u77e5\u9053\u6211\u7684\u5185\u5bb9\u6709\u591a\u957f</div>\n<div>\u6211\u662f\u6b63\u6587\uff0c\u6211\u9700\u8981\u4ece\u4e00\u4e2a\u65b0\u9875\u9762\u5f00\u59cb\u5c55\u793a</div>\n')),(0,o.kt)("p",null,"\u5f00\u59cb\u6211\u60f3\u5230\u7684\u529e\u6cd5\u662f\uff0c\u5c06\u524d\u4e24\u4e2a div \u7684\u9ad8\u5ea6\u8bbe\u7f6e\u4e3a 290mm(A4 \u7eb8\u7684\u9ad8\u5ea6)\uff0c\u5982\u4e0a\u8ff0\u4ee3\u7801\u3002\u8fd9\u6837\u7684\u8bdd\uff0c\u4ed6\u4eec\u6b63\u597d\u5404\u5360\u636e\u4e00\u9762\uff0c\u6b63\u6587\u81ea\u52a8\u5728\u65b0\u9875\u9762\u5f00\u59cb\uff0c\u4f46\u8fd9\u53ea\u9002\u7528\u4e8e\u76ee\u5f55\u4e0d\u8d85\u8fc7\u4e00\u9875\u7684\u60c5\u51b5\uff0c\u800c\u4e14\u5fc5\u987b\u662f A4 \u7eb8\u6253\u5370\uff0c\u800c\u4e14\uff0c290mm \u662f A4 \u7eb8\u7684\u9ad8\u5ea6\uff0c\u4f60\u4e0d\u77e5\u9053\u7528\u6237\u4f1a\u4e0d\u4f1a\u8bbe\u7f6e\u9875\u8fb9\u8ddd\uff0c\u9875\u8fb9\u8ddd\u4f1a\u8bbe\u7f6e\u591a\u5c11\u3002\u663e\u7136\u8fd9\u79cd\u65b9\u5f0f\u6cbb\u6807\u4e0d\u6cbb\u672c\u3002"),(0,o.kt)("p",null,"\u540e\u6765\uff0c\u6211\u53d1\u73b0\u53ef\u4ee5\u4f7f\u7528 css \u7684 ",(0,o.kt)("strong",{parentName:"p"},"page-break-after:always")," \u6765\u63a7\u5236\u5728\u67d0\u4e2a DIV \u4e4b\u540e\u65b0\u5f00\u4e00\u4e2a\u9875\u9762\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div style="page-break-after:always">\u6211\u662f\u5c01\u9762</div>\n<div style="page-break-after:always">\u6211\u662f\u76ee\u5f55\uff0c\u4f60\u4e0d\u77e5\u9053\u6211\u7684\u5185\u5bb9\u6709\u591a\u957f</div>\n<div>\u6211\u662f\u6b63\u6587\uff0c\u6211\u9700\u8981\u4ece\u4e00\u4e2a\u65b0\u9875\u9762\u5f00\u59cb\u5c55\u793a</div>\n')),(0,o.kt)("p",null,"\u8fd9\u6837\u7684\u8bdd\uff0c\u65e0\u8bba div \u6709\u591a\u957f\uff0c\u5728\u5b83\u4e4b\u540e\u4e00\u5b9a\u4f1a\u65b0\u5f00\u4e00\u4e2a\u9875\u9762\u518d\u6253\u5370\u3002\u5c31\u907f\u514d\u4e86\u8ba1\u7b97\u9ad8\u5ea6\u7684\u95ee\u9898\u3002\u5b8c\u7f8e\u89e3\u51b3\u6211\u7684\u95ee\u9898\u3002"))}u.isMDXComponent=!0}}]);