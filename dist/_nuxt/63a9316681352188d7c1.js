(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{230:function(t,e,n){"use strict";var r={name:"PageTitle",props:{pageTitle:{type:String,required:!0}}},o=n(34),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.pageTitle))])])}),[],!1,null,"19351ce8",null);e.a=component.exports},233:function(t,e,n){var content=n(240);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("e31d7110",content,!0,{sourceMap:!1})},239:function(t,e,n){"use strict";var r=n(233);n.n(r).a},240:function(t,e,n){(e=n(42)(!1)).push([t.i,".dogodek[data-v-1c07c35e]{margin-top:2rem}",""]),t.exports=e},248:function(t,e,n){"use strict";n.r(e);var r={components:{PageTitle:n(230).a},data:function(){return{title:"POGOVORI"}},computed:{dogodki:function(){return this.$store.getters["drupal/get"]("node--koncert")}},fetch:function(t){var e=t.store;t.params;return e.dispatch("drupal/get",["node/koncert",{params:{sort:"field_datum","filter[field_leto.name][value]":"2020","filter[field_tip_dogodka.name][value]":"pogovor"}}])}},o=(n(239),n(34)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PageTitle",{attrs:{title:t.title}}),t._v(" "),t._l(t.dogodki,(function(e){return n("div",{staticClass:"row dogodek"},[n("div",{staticClass:"col-12"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"datum"},[t._v("\n        "+t._s(t._f("dateFormat")(e.field_datum))+"\n      ")])])])}))],2)}),[],!1,null,"1c07c35e",null);e.default=component.exports}}]);