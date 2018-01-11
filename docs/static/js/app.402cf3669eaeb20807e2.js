webpackJsonp([1],{"2Py1":function(t,e){},B8MA:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={};a.d(r,"heroDelete",function(){return M}),a.d(r,"heroMove",function(){return S}),a.d(r,"heroDraw",function(){return E});var s={};a.d(s,"draw",function(){return R}),a.d(s,"move",function(){return U}),a.d(s,"del",function(){return V});var n={};a.d(n,"mapGetter",function(){return A});var i=a("7+uW"),o=a("NYxO"),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},u=a("VU/8")({name:"app"},c,!1,function(t){a("sj/G")},null,null).exports,l=a("/ocq"),h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section"},[e("h2",{staticClass:"text-big text-gray"},[this._v("Maze Adventures")]),this._v(" "),e("div",[e("router-link",{staticClass:"button button-huge block-mobile",attrs:{to:"/game"}},[this._v("New Game")])],1),this._v(" "),e("div",[e("router-link",{staticClass:"button button-huge block-mobile",attrs:{to:"/save"}},[this._v("Save Game")])],1),this._v(" "),e("div",[e("router-link",{staticClass:"button button-huge block-mobile",attrs:{to:"/load"}},[this._v("Load Game")])],1)])},staticRenderFns:[]},d=a("VU/8")({name:"MainMenu"},h,!1,function(t){a("B8MA")},"data-v-8bd31ab6",null).exports,v={created:function(){var t=this;window.addEventListener("keyup",function(e){var a=t.$store.state.hero;switch(e.keyCode){case 40:if(" "!==t.$store.state.terran[a.x+1][a.y])return;t.$store.dispatch("heroDelete"),t.$store.dispatch("heroMove",{x:a.x+1,y:a.y}),t.$store.dispatch("heroDraw");break;case 38:if(" "!==t.$store.state.terran[a.x-1][a.y])return;t.$store.dispatch("heroDelete"),t.$store.dispatch("heroMove",{x:a.x-1,y:a.y}),t.$store.dispatch("heroDraw");break;case 39:if(" "!==t.$store.state.terran[a.x][a.y+1])return;t.$store.dispatch("heroDelete"),t.$store.dispatch("heroMove",{x:a.x,y:a.y+1}),t.$store.dispatch("heroDraw");break;case 37:if(" "!==t.$store.state.terran[a.x][a.y-1])return;t.$store.dispatch("heroDelete"),t.$store.dispatch("heroMove",{x:a.x,y:a.y-1}),t.$store.dispatch("heroDraw")}}),this.$store.dispatch("heroDraw")},computed:{drawMap:function(){return this.$store.getters.mapGetter}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",t._l(t.drawMap,function(e){return a("div",t._l(e,function(t){return a("li",{class:t.class,attrs:{id:t.id}})}))}))},staticRenderFns:[]},f={name:"GameScreen",components:{GameTerran:a("VU/8")(v,m,!1,function(t){a("bCFa")},"data-v-b6383c40",null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section"},[e("div",{staticClass:"section background-dark"},[e("div",{staticClass:"container text-center"},[e("h3",{staticClass:"text-huge text-white text-with-subtitle"},[this._v("We can be heroes")]),this._v(" "),e("h4",{staticClass:"text-big text-gray"},[this._v("just for one day")]),this._v(" "),e("GameTerran")],1)])])},staticRenderFns:[]},x=a("VU/8")(f,p,!1,function(t){a("2Py1")},"data-v-7acb890c",null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section"},[e("h2",{staticClass:"text-medium text-gray"},[this._v("Save Game")]),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-md-6"},[e("table",{staticClass:"table"},[e("thead",[e("tr",{staticClass:"text-small align-left"},[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Date")])])]),this._v(" "),e("tbody",[e("tr",[e("td",[this._v(" Dummy ")]),this._v(" "),e("td",[this._v(" 12.15.1256 ")])])])])]),this._v(" "),e("div",{staticClass:"col-xs-12 col-md-6"},[e("button",{staticClass:"button block-mobile"},[this._v("Save")])])])])}]},y=a("VU/8")({name:"SaveScreen"},_,!1,function(t){a("ddx/")},"data-v-1a022e0f",null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section"},[e("h2",{staticClass:"text-medium text-gray"},[this._v("Load Game")]),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-md-6"},[e("table",{staticClass:"table"},[e("thead",[e("tr",{staticClass:"text-small align-left"},[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Date")])])]),this._v(" "),e("tbody",[e("tr",{staticClass:"text-small align-left"},[e("td",[this._v(" Dummy ")]),this._v(" "),e("td",[this._v(" 12.15.1256 ")])])])])]),this._v(" "),e("div",{staticClass:"col-xs-12 col-md-6"},[e("button",{staticClass:"button block-mobile"},[this._v("Load")])])])])}]},w=a("VU/8")({name:"SaveScreen"},b,!1,function(t){a("NXQr")},"data-v-314904a2",null).exports;i.a.use(l.a);var C=new l.a({routes:[{path:"/",name:"MainMenu",component:d},{path:"/game",name:"GameScreen",component:x},{path:"/save",name:"SaveScreen",component:y},{path:"/load",name:"LoadScreen",component:w}]}),$=a("Xxa5"),g=a.n($),k=a("exGp"),D=a.n(k),G=this,M=function(){var t=D()(g.a.mark(function t(e){var a=e.state,r=e.commit;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r("del",{type:"terran",xy:a.hero});case 1:case"end":return t.stop()}},t,G)}));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=D()(g.a.mark(function t(e,a){var r=e.commit;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r("move",{type:"hero",xy:{x:a.x,y:a.y}});case 1:case"end":return t.stop()}},t,G)}));return function(e,a){return t.apply(this,arguments)}}(),E=function(){var t=D()(g.a.mark(function t(e){var a=e.state,r=e.commit;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r("draw",{type:"terran",xy:a.hero});case 1:case"end":return t.stop()}},t,G)}));return function(e){return t.apply(this,arguments)}}(),F=a("Gu7T"),N=a.n(F),R=function(t,e){var a=e.type,r=e.xy;t[a][r.x][r.y]="3",t[a]=[].concat(N()(t[a]))},U=function(t,e){var a=e.type,r=e.xy;t[a]={x:r.x,y:r.y}},V=function(t,e){var a=e.type,r=e.xy;t[a][r.x][r.y]=" ",t[a]=[].concat(N()(t[a]))},A=function(t){return t.terran.map(function(t,e){return t.map(function(t,a){return{id:"x="+e+"-y="+a,class:function(t){switch(t){case"0":return"tree";case"1":return"wall";case"2":return"monster";case"3":return"hero"}}(t)}})})},L={strict:!0,state:function(){return{cells:[{text:"foo"},{text:"bazz"},{text:"bar"}],hero:{x:1,y:1},terran:[["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1"," ","0","0","0","0","0","0","0","0","0","0"," ","1"," "," "," ","0"," ","1"],["1"," "," "," "," "," "," "," "," "," "," "," "," ","1"," ","0"," ","0"," ","1"],["1"," ","1"," "," "," "," "," "," "," "," "," "," ","1"," ","0"," ","0"," ","1"],["1"," ","1"," "," "," "," ","1","1","1","0","0"," ","1"," ","0"," ","0"," ","1"],["1","2","1"," "," "," "," "," "," "," "," "," "," ","1"," ","0"," ","0"," ","1"],["1"," ","0"," ","2"," "," "," "," "," "," ","0"," "," "," ","0"," "," "," ","1"],["1"," ","0"," "," "," ","0"," "," ","0"," ","0"," ","1","1","1","1","1","1","1"],["1"," ","0"," "," "," ","0"," ","1"," "," ","0"," "," "," "," "," "," "," ","1"],["1"," ","1"," "," "," ","0"," ","1","2"," ","0"," "," "," "," "," "," "," ","1"],["1"," ","0"," "," "," ","0"," ","1"," "," ","0"," ","0"," "," "," "," "," ","1"],["1"," ","1"," "," "," ","0"," ","1"," "," ","0"," ","0"," "," ","2"," "," ","1"],["1"," ","1","1","1","1","1","1","1","1","1","0"," ","0"," "," ","2"," "," ","1"],["1"," "," "," ","0"," ","0"," ","1"," "," ","0"," ","0"," "," "," "," "," ","1"],["1"," "," "," "," "," "," "," ","1"," "," ","0"," ","0"," "," "," "," "," ","1"],["1","1","1","1","1","1","1"," ","1"," "," ","0"," ","0"," "," "," "," "," ","1"],["1"," "," "," "," "," ","1"," ","1"," "," ","0"," ","0"," "," "," "," "," ","1"],["1","1","1","1","1"," ","1"," ","1","1","1","1","1","1","1","1"," "," "," ","1"],["1"," "," "," "," "," "," "," ","1"," "," "," "," "," "," "," "," "," "," ","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]]}},mutations:s,actions:r,getters:n};i.a.config.productionTip=!1,i.a.use(o.a);var j=new o.a.Store(L);new i.a({el:"#app",router:C,store:j,template:"<App/>",components:{App:u}})},NXQr:function(t,e){},bCFa:function(t,e){},"ddx/":function(t,e){},"sj/G":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.402cf3669eaeb20807e2.js.map