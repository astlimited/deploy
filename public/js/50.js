(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{13:function(t,e,a){"use strict";var s=a(56),r=a(55),i=a(57),n=a(68),l=a(77),o=a(78),u={props:{id:{type:String,required:!1},label:{type:String,required:!0},type:{type:String,default:function(){return"text"}},required:{type:Boolean,default:function(){return!1}},errors:{type:Array},helperText:{type:String},placeholder:{type:String},value:{required:!1,default:""},allowCopy:{required:!1,default:!1,type:Boolean},allowRandomString:{required:!1,default:!1,type:Boolean},loading:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},components:{FormGroup:s.a,Label:r.a,ErrorText:i.a,HelperText:n.a,IconClipboard:l.a,IconKey:o.a},data:function(){return{defaultClasses:"w-full border-medium-emphasis text-body h-10 px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary",copied:!1}},watch:{copied:function(){var t=this;this.copied&&setTimeout((function(){t.copied=!1}),1250)}},methods:{updateValue:function(t){this.$emit("input",t)},copy:function(){this.copied=!0,this.$copyText(this.value)},generateString:function(){this.$emit("input",this.randomString())}},computed:{copyText:function(){return this.copied?this.__("Copied to clipboard"):this.__("Copy")}}},c=a(0),d=Object(c.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("FormGroup",{staticClass:"relative max-w-lg"},[a("Label",{attrs:{errors:t.errors,forId:t.id}},[t._v(t._s(t.label))]),t._v(" "),t.allowCopy?a("button",{staticClass:"flex items-center right-0 absolute text-xs text-medium-emphasis",attrs:{type:"button"},on:{click:t.copy}},[a("IconClipboard",{staticClass:"mr-2"}),t._v("\n        "+t._s(t.copyText)+"\n    ")],1):t._e(),t._v(" "),t.allowRandomString?a("button",{staticClass:"flex items-center right-0 absolute text-xs text-medium-emphasis",attrs:{type:"button"},on:{click:t.generateString}},[a("IconKey",{staticClass:"mr-2"}),t._v("\n        "+t._s(t.__("Generate"))+"\n    ")],1):t._e(),t._v(" "),a("input",{class:[t.defaultClasses,t.disabled||t.loading?"opacity-50":"",t.loading?"cursor-wait":""],attrs:{id:t.id,type:t.type,required:t.required,disabled:t.loading||t.disabled,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.updateValue(e.target.value)}}}),t._v(" "),t.errors?a("ErrorText",[t._v(t._s(t.errors[0]))]):t._e(),t._v(" "),t.helperText&&!t.errors?a("HelperText",[t._v(t._s(t.helperText))]):t._e()],1)}),[],!1,null,null,null);e.a=d.exports},15:function(t,e,a){"use strict";var s={props:{items:{type:Array,required:!1}}},r=a(0),i=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid grid-cols-4 gap-8 md:gap-16"},[e("aside",{staticClass:"col-span-4 md:col-span-1"},[this._t("nav")],2),this._v(" "),e("section",{staticClass:"col-span-4 md:col-span-3"},[e("div",{staticClass:"space-y-16"},[this._t("segments")],2)])])}),[],!1,null,null,null);e.a=i.exports},152:function(t,e,a){"use strict";a.r(e);var s=a(17),r=a(1),i=a(6),n=a(7),l=a(8),o=a(9),u=a(10),c=a(2),d=a(11),p=a(12),m=a(4),h=a(5),_=a(3),f=a(15),v=a(16),b=a(31),x=a(19),g=a(13),y=a(61),T=a(20),C=a(22),k=a(23),w=a(24),B=a(25),S=a(21),$=a(91),O=a.n($),j=a(90),H=a.n(j),E={metaInfo:function(){return{title:"".concat(this.__("Users"))}},layout:_.a,components:{TopBar:s.default,Container:r.a,Content:i.a,Page:n.a,PageHeader:l.a,PageHeaderTitle:o.a,PageBody:u.a,Button:c.a,List:d.a,ListItem:p.a,StatusBubble:m.a,NotificationBadge:h.a,SettingsLayout:f.a,SettingsSegment:v.a,Pagination:b.a,Tabs:y.default,Table:T.a,TableHead:C.a,TableHeader:k.a,TableRow:w.a,TableBody:B.a,TableData:S.a,FormInput:g.a},props:{users:Object,filters:Object},data:function(){return{form:{search:this.filters.search}}},watch:{form:{handler:H()((function(){var t=O()(this.form);this.$inertia.replace(this.route("admin.users.index",Object.keys(t).length?t:{remember:"forget"}))}),500),deep:!0}},mounted:function(){this.$page.props.flash.success&&Object(x.a)({variant:"success",title:"Users",message:this.$page.props.flash.success})},methods:{useNotification:x.a}},L=a(0),q=Object(L.a)(E,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Page",[a("TopBar"),t._v(" "),a("Content",[a("Container",[a("PageHeader",{scopedSlots:t._u([{key:"start",fn:function(){return[a("PageHeaderTitle",[t._v(t._s(t.__("Users")))])]},proxy:!0}])}),t._v(" "),a("PageBody",[a("SettingsLayout",{scopedSlots:t._u([{key:"nav",fn:function(){return[a("Tabs")]},proxy:!0},{key:"segments",fn:function(){return[a("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("Overview")))]},proxy:!0},{key:"form",fn:function(){return[a("form",{staticClass:"space-y-4 pb-5 mb-5 border-b border-low-emphasis"},[a("FormInput",{attrs:{label:t.__("Search")},model:{value:t.form.search,callback:function(e){t.$set(t.form,"search",e)},expression:"form.search"}})],1)]},proxy:!0},{key:"content",fn:function(){return[a("div",[a("Table",{attrs:{caption:"User list overview"}},[a("TableHead",[a("TableRow",[a("TableHeader",[t._v(t._s(t.__("Name")))]),t._v(" "),a("TableHeader",[t._v(t._s(t.__("User name")))]),t._v(" "),a("TableHeader",[t._v(t._s(t.__("Role")))]),t._v(" "),a("TableHeader",[t._v(t._s(t.__("Package")))]),t._v(" "),a("TableHeader")],1)],1),t._v(" "),a("TableBody",t._l(t.users.data,(function(e){return a("TableRow",{key:e.id},[a("TableData",[t._v("\n                                                    "+t._s(e.name)+"\n\n                                                    "),a("p",{staticClass:"text-medium-emphasis"},[t._v(t._s(e.email))])]),t._v(" "),a("TableData",[t._v(t._s(e.user_name))]),t._v(" "),a("TableData",[t._v(t._s(e.role))]),t._v(" "),a("TableData",[t._v(t._s(e.package?e.package.name:"-"))]),t._v(" "),a("TableData",[a("inertia-link",{staticClass:"text-primary font-medium",attrs:{href:t.route("admin.users.edit",e.id)}},[t._v("\n                                                        "+t._s(t.__("Edit"))+"\n                                                    ")])],1)],1)})),1)],1)],1),t._v(" "),a("pagination",{attrs:{links:t.users}})]},proxy:!0}])})]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=q.exports},16:function(t,e,a){"use strict";var s=a(0),r=Object(s.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"px-8 pb-8 space-y-6 border rounded border-low-emphasis"},[e("header",{staticClass:"-mt-4"},[e("h2",{staticClass:"inline-flex px-4 -mx-4 font-medium bg-surface-1 text-title"},[this._t("title")],2),this._v(" "),e("p",{staticClass:"mt-1 text-small text-medium-emphasis"},[this._t("subtitle")],2)]),this._v(" "),e("div",{staticClass:"space-y-4"},[this._t("form"),this._v(" "),this._t("content")],2)])}),[],!1,null,null,null);e.a=r.exports},17:function(t,e,a){"use strict";a.r(e);var s=a(39),r=a(40),i=a(41),n=a(42),l={components:{TopBar:s.a,Breadcrumbs:r.a,TabBar:i.a,TopBarTabBarContainer:n.a},data:function(){return{tabBars:[{title:"Dashboard",to:this.route("admin.dashboard"),active:this.route().current("admin.dashboard")||this.route().current("admin.settings")||this.route().current("admin.system")},{title:this.__("Users"),to:this.route("admin.users.index"),active:this.route().current("admin.users.*")},{title:this.__("Packages"),to:this.route("admin.packages.index"),active:this.route().current("admin.packages.*")},this.$page.props.settings.support?{title:"".concat(this.__("Support")," (").concat(this.$page.props.openTickets,")"),to:this.route("admin.support.index"),active:this.route().current("admin.support.*")}:null,this.$page.props.settings.documentation?{title:this.__("Documentation"),to:this.route("admin.documentation.index"),active:this.route().current("admin.documentation.*")}:null,{title:"Services",to:this.route("admin.services.index"),active:this.route().current("admin.services.*")}],breadcrumbs:[{title:this.$page.props.settings.name,to:"/"},{title:this.__("Administration"),to:this.route("admin.dashboard")}]}}},o=a(0),u=Object(o.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("TopBar",{scopedSlots:t._u([{key:"breadcrumbs",fn:function(){return[a("Breadcrumbs",{attrs:{items:t.breadcrumbs}})]},proxy:!0},{key:"tab-bar",fn:function(){return[a("TopBarTabBarContainer",[a("TabBar",{attrs:{items:t.tabBars}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=u.exports},31:function(t,e,a){"use strict";var s={props:{links:Object},computed:{determineLinks:function(){return this.links.meta?this.links.meta:this.links}}},r=a(0),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.determineLinks.per_page<t.determineLinks.total?a("div",{staticClass:"mt-6 -mb-1 flex flex-wrap"},[t._l(t.determineLinks.links,(function(e,s){return[null===e.url?a("div",{key:s,staticClass:"mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400",class:{"ml-auto":"Next"===e.label}},[t._v(t._s(e.label))]):a("inertia-link",{key:s,staticClass:"mr-1 mb-1 px-2 py-1 text-sm rounded",class:{"shadow text-high-emphasis bg-surface-1":e.active,"ml-auto":"Next"===e.label},attrs:{href:e.url}},[t._v(t._s(e.label))])]}))],2):t._e()}),[],!1,null,null,null);e.a=i.exports},55:function(t,e,a){"use strict";var s={props:{forId:{type:String,required:!1},errors:{type:Array}}},r=a(0),i=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("label",{class:["text-small"],attrs:{for:this.forId}},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},56:function(t,e,a){"use strict";var s=a(0),r=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"flex flex-col space-y-1"},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},57:function(t,e,a){"use strict";var s=a(0),r=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"text-danger"},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},61:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{items:[{title:this.__("Overview"),to:this.route("admin.users.index"),active:this.route().current("admin.users.index")},{title:this.__("Create"),to:this.route("admin.users.create"),active:this.route().current("admin.users.create")}]}}},r=a(0),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"-ml-4 space-y-1"},t._l(t.items,(function(e){return a("li",[a("inertia-link",{staticClass:"flex items-center h-10 px-4 font-medium text-medium-emphasis",class:{"rounded shadow text-primary bg-surface-3":e.active},attrs:{href:e.to}},[t._v(t._s(e.title)+" "+t._s(e.route))])],1)})),0)}),[],!1,null,null,null);e.default=i.exports},68:function(t,e,a){"use strict";var s=a(0),r=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"text-medium-emphasis text-small"},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},77:function(t,e,a){"use strict";var s=a(0),r=Object(s.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-clipboard",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}}),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"}})])}),[],!1,null,null,null);e.a=r.exports},78:function(t,e,a){"use strict";var s=a(0),r=Object(s.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-key",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"}}),this._v(" "),e("path",{attrs:{d:"M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}})])}),[],!1,null,null,null);e.a=r.exports}}]);