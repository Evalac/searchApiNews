!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var a=function(){"use strict";function r(){e(t)(this,r),this.searchForm="",this.page=1}return e(n)(r,[{key:"fetchArticles",value:function(){var e=this;console.log("before",this);var t={headers:{Authorization:"59ea23f33abe45d5ae23b6a2a5f58a36"}},n=encodeURIComponent("".concat("https://newsapi.org/v2","/everything?q=").concat(this.searchForm,"&language=en&pageSize=4&page=").concat(this.page)),r="".concat("https://corsproxy.io/?","+").concat(n);return fetch(r,t).then((function(e){return e.json()})).then((function(t){var n=t.articles;return e.incrementPage(),n}))}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchForm},set:function(e){this.searchForm=e}}]),r}();function o(e,t){var n=e.map((function(e){var t=e.author,n=e.content,r=e.description,a=e.publishedAt,o=e.title,c=e.url,i=e.urlToImage;return'<article class="news-article">\n        <header class="article-header">\n    <img src="'.concat(i,'" alt="">\n          <h2 class="article-title">\n            <a href="').concat(c,'" target="_blank">').concat(o,'</a>\n          </h2>\n          <p class="article-author">Автор:').concat(t,'</p>\n          <p class="article-date">Опубліковано:').concat(a,'</p>\n        </header>\n        <section class="article-description">\n          <p>').concat(r,'</p>\n        </section>\n        <section class="article-content">\n          <p>').concat(n,"</p>\n        </section>\n      </article>")})).join("");return t.insertAdjacentHTML("beforeend",n)}var c=function(){"use strict";function r(n){var a=n.selector,o=n.hidden,c=void 0!==o&&o;e(t)(this,r),console.log(a),this.refs=this.getRefs(a),c&&this.hide()}return e(n)(r,[{key:"getRefs",value:function(e){var t={};return t.button=document.querySelector(e),t.label=t.button.querySelector(".label"),t.spiner=t.button.querySelector(".spinner"),t}},{key:"enable",value:function(){this.refs.button.disabled=!1,this.refs.label.textContent="Показати ще",this.refs.spiner.classList.add("is-hidden")}},{key:"disabled",value:function(){this.refs.button.disabled=!0,this.refs.label.textContent="Завантажуєм",this.refs.spiner.classList.remove("is-hidden")}},{key:"show",value:function(){this.refs.button.classList.remove("is-hidden")}},{key:"hide",value:function(){this.refs.button.classList.add("is-hidden")}}]),r}(),i={searchForm:document.querySelector(".search-form"),loadMoreBtn:document.querySelector('  [data-action="load-more"]'),containerNews:document.querySelector(".contentNews")},s=new c({selector:'[data-action="load-more"]',hidden:!0}),l=new a;i.searchForm.addEventListener("submit",(function(e){e.preventDefault(),l.query=e.currentTarget.elements.qwery.value,l.resetPage(),s.disabled(),s.show(),l.fetchArticles().then((function(e){i.containerNews.innerHTML="",o(e,i.containerNews),s.enable(),s.show()}))})),i.loadMoreBtn.addEventListener("click",(function(e){s.disabled(),s.show(),l.fetchArticles().then((function(e){o(e,i.containerNews),s.enable(),s.show()}))}))}();
//# sourceMappingURL=index.4bda9814.js.map
