(window.webpackJsonp=window.webpackJsonp||[]).push([[7,18],{303:function(t,e,n){"use strict";var i=n(161),r=n(5),a=n(13),s=n(23),l=n(162),c=n(163);i("match",1,(function(t,e,n){return[function(e){var n=s(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var s=r(t),o=String(this);if(!s.global)return c(s,o);var u=s.unicode;s.lastIndex=0;for(var h,f=[],p=0;null!==(h=c(s,o));){var d=String(h[0]);f[p]=d,""===d&&(s.lastIndex=l(o,a(s.lastIndex),u)),p++}return 0===p?null:f}]}))},304:function(t,e,n){"use strict";var i=n(161),r=n(165),a=n(5),s=n(23),l=n(91),c=n(162),o=n(13),u=n(163),h=n(64),f=n(2),p=[].push,d=Math.min,v=!f((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(s(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,a);for(var l,c,o,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,v=new RegExp(t.source,f+"g");(l=h.call(v,i))&&!((c=v.lastIndex)>d&&(u.push(i.slice(d,l.index)),l.length>1&&l.index<i.length&&p.apply(u,l.slice(1)),o=l[0].length,d=c,u.length>=a));)v.lastIndex===l.index&&v.lastIndex++;return d===i.length?!o&&v.test("")||u.push(""):u.push(i.slice(d)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=s(this),a=null==e?void 0:e[t];return void 0!==a?a.call(e,r,n):i.call(String(r),e,n)},function(t,r){var s=n(i,t,this,r,i!==e);if(s.done)return s.value;var h=a(t),f=String(this),p=l(h,RegExp),g=h.unicode,_=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(v?"y":"g"),b=new p(v?h:"^(?:"+h.source+")",_),m=void 0===r?4294967295:r>>>0;if(0===m)return[];if(0===f.length)return null===u(b,f)?[f]:[];for(var y=0,C=0,x=[];C<f.length;){b.lastIndex=v?C:0;var k,$=u(b,v?f:f.slice(C));if(null===$||(k=d(o(b.lastIndex+(v?0:C)),f.length))===y)C=c(f,C,g);else{if(x.push(f.slice(y,C)),x.length===m)return x;for(var w=1;w<=$.length-1;w++)if(x.push($[w]),x.length===m)return x;C=y=k}}return x.push(f.slice(y)),x}]}),!v)},305:function(t,e,n){"use strict";n(90),n(62),n(303),n(304),n(166),n(63),n(92),n(93),n(44),n(89),n(164);var i=/#.*$/,r=/\.(md|html)$/,a=/\/$/,s=/^[a-z]+:/i;function l(t){return decodeURI(t).replace(i,"").replace(r,"")}function c(t){return s.test(t)}function o(t){if(c(t))return t;var e=t.match(i),n=e?e[0]:"",r=l(t);return a.test(r)?t:r+".html"+n}function u(t,e,n){if(c(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var l=a[s];".."===l?r.pop():"."!==l&&r.push(l)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=l(e),r=0;r<t.length;r++)if(l(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:o(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function h(t,e,n,i){var r=n.pages,a=n.themeConfig,s=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return f(t);var l=s.sidebar||a.sidebar;if(l){var c=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,l),o=c.base,h=c.config;return"auto"===h?f(t):h?h.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return u(n,e,i);if(Array.isArray(e))return Object.assign(u(n,e[0],i),{title:e[1]});var a=e.children||[];return 0===a.length&&e.path?Object.assign(u(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:a.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,o)})):[]}return[]}function f(t){var e=function(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}var p={name:"LayoutDocumentationMain",components:{},computed:{sidebarItems:function(){return h(this.$page,this.$page.regularPath,this.$site,this.$localePath)}},mounted:function(){}},d=n(43),v=Object(d.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[n("div",{staticClass:"sidebar__container"},[t._m(0),t._v(" "),n("div",{staticClass:"sidebar__body"},[n("ul",{staticClass:"sidebar__list"},t._l(t.sidebarItems[0].children,(function(e){return n("li",{staticClass:"sidebar__list-item"},[n("router-link",{staticClass:"sidebar__list-link",attrs:{to:e.path}},[t._v(t._s(e.title))])],1)})),0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar__head"},[e("span",{staticClass:"sidebar__ttl"},[this._v("ドキュメント")])])}],!1,null,null,null);e.a=v.exports},306:function(t,e,n){"use strict";n.r(e);var i={mounted:function(){},props:{responseData:{},category:String},layout:"documentation"},r=n(43),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"c-block-intro c-block-intro--half"},[n("div",{staticClass:"c-block-intro__inner c-block-intro__inner--half"},[n("h2",{staticClass:"c-block-intro__ttl"},[t._v(t._s(t.category))]),t._v(" "),n("div",{staticClass:"c-block-intro__link-area"},t._l(t.responseData,(function(e){return n("router-link",{key:e.key,staticClass:"c-block-intro__link",attrs:{to:e.path}},["その他"==t.category||e.frontmatter.category===t.category?[t._v("\n                    "+t._s(e.title)+"\n                ")]:t._e()],2)})),1)])])}),[],!1,null,null,null);e.default=a.exports},316:function(t,e,n){},336:function(t,e,n){"use strict";n(316)},353:function(t,e,n){"use strict";n.r(e);n(44),n(167);var i=n(305),r={data:function(){return{faq:null}},mounted:function(){var t=this.$site.pages.filter((function(t){return t.path.startsWith("/documentations/faq/")}));this.faq=t},layout:"documentation",components:{List:n(306).default,DocumentationSidebar:i.a}},a=(n(336),n(43)),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contents"},[n("div",{staticClass:"column"},[n("DocumentationSidebar"),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"c-chapter-docs"},[n("div",{staticClass:"c-chapter-docs__container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"c-block-intro-wrapper"},[n("List",{attrs:{responseData:t.faq,category:"kurocoについて"}}),t._v(" "),n("List",{attrs:{responseData:t.faq,category:"料金プランについて"}}),t._v(" "),n("List",{attrs:{responseData:t.faq,category:"その他"}})],1)])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"c-chapter-docs__head"},[e("h1",{staticClass:"c-ttl c-ttl--docs"},[this._v("FAQ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wysiwyg"},[e("p",[this._v("Kurocoの利用方法や設定について、困ったときはこちらをご覧ください。")]),this._v(" "),e("p",[this._v("FAQで解決しない場合は"),e("span",{staticClass:"c-txt-attention"},[e("a",{attrs:{href:"https://join.slack.com/t/kurocojp/shared_invite/zt-l6p3hkw0-vdqK5vjRdOEx9n_PoDXmzw"}},[this._v("Kuroco Slackコミュニティ")])]),this._v("へご参加ください。サポート担当者と直接やり取りすることができます。")])])}],!1,null,"5a5fd733",null);e.default=s.exports}}]);