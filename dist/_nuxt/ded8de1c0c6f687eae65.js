(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{230:function(t,e,n){"use strict";var r={name:"PageTitle",props:{pageTitle:{type:String,required:!0}}},o=n(34),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.pageTitle))])])}),[],!1,null,"19351ce8",null);e.a=component.exports},231:function(t,e,n){var content=n(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("1ea9b9fa",content,!0,{sourceMap:!1})},235:function(t,e,n){"use strict";var r=n(231);n.n(r).a},236:function(t,e,n){(e=n(42)(!1)).push([t.i,"",""]),t.exports=e},243:function(t,e,n){"use strict";n.r(e);var r={components:{PageTitle:n(230).a},data:function(){return{pageTitle:"NOVICE"}},computed:{novice:function(){return this.$store.state.drupal["node--novica"]}},fetch:function(t){var e=t.store,n=(t.params,{sort:"-field_datum","filter[field_leto.name][value]":"2020","filter[datefilter][condition][path]":"field_datum","filter[datefilter][condition][operator]":"<","filter[datefilter][condition][value]":new Date});return e.dispatch("drupal/get",["node/novica",{params:n}])}},o=(n(235),n(34)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PageTitle",{staticClass:"mb-4",attrs:{pageTitle:t.pageTitle}}),t._v(" "),t._l(t.novice,(function(e){return n("b-row",{key:"novica",staticClass:"novica"},[n("b-col",[n("h3",{staticClass:"mt-1"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),n("p",{staticClass:"datum"},[t._v("\n        "+t._s(t._f("dateFormat")(e.field_datum))+"\n      ")]),t._v(" "),n("p",{staticClass:"body",domProps:{innerHTML:t._s(e.body.value)}}),t._v(" "),n("hr")])],1)}))],2)}),[],!1,null,"979f6870",null);e.default=component.exports}}]);