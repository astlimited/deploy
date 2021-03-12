(window.webpackJsonp=window.webpackJsonp||[]).push([[64,73],{0:function(t,e,s){"use strict";function a(t,e,s,a,i,n,r,o){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=s,u._compiled=!0),a&&(u.functional=!0),n&&(u._scopeId="data-v-"+n),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=l):i&&(l=o?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var _=u.beforeCreate;u.beforeCreate=_?[].concat(_,l):[l]}return{exports:t,options:u}}s.d(e,"a",(function(){return a}))},139:function(t,e,s){"use strict";s.r(e);var a=s(17),i=s(1),n=s(6),r=s(7),o=s(8),l=s(9),u=s(10),c=s(2),_=s(11),d=s(12),v=s(4),p=s(5),m=s(3),b=s(15),f=s(16),h=s(31),T=s(19),x=s(38),y=s(20),g=s(22),k=s(23),C=s(24),S=s(25),B=s(21),w={layout:m.a,metaInfo:function(){return{title:"".concat(this.__("Services"))}},components:{TopBar:a.default,Container:i.a,Content:n.a,Page:r.a,PageHeader:o.a,PageHeaderTitle:l.a,PageBody:u.a,Button:c.a,List:_.a,ListItem:d.a,StatusBubble:v.a,NotificationBadge:p.a,SettingsLayout:b.a,SettingsSegment:f.a,Pagination:h.a,Tabs:x.default,Table:y.a,TableHead:g.a,TableHeader:k.a,TableRow:C.a,TableBody:S.a,TableData:B.a},props:{servers:Object,sites:Object,providers:Object},mounted:function(){},methods:{useNotification:T.a}},H=s(0),$=Object(H.a)(w,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Page",[s("TopBar"),t._v(" "),s("Content",[s("Container",[s("PageHeader",{scopedSlots:t._u([{key:"start",fn:function(){return[s("PageHeaderTitle",[t._v(t._s(t.__("Services")))])]},proxy:!0}])}),t._v(" "),s("PageBody",[s("SettingsLayout",{scopedSlots:t._u([{key:"nav",fn:function(){return[s("Tabs")]},proxy:!0},{key:"segments",fn:function(){return[s("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("Servers")))]},proxy:!0},{key:"content",fn:function(){return[s("div",[s("Table",{attrs:{caption:"Server list overview"}},[s("TableHead",[s("TableRow",[s("TableHeader",[t._v(t._s(t.__("Name")))]),t._v(" "),s("TableHeader",[t._v(t._s(t.__("Usage")))]),t._v(" "),s("TableHeader")],1)],1),t._v(" "),s("TableBody",t._l(t.servers.data,(function(e){return s("TableRow",{key:e.id},[s("TableData",[t._v("\n                                                    "+t._s(e.name)+"\n\n                                                    "),s("p",{staticClass:"text-medium-emphasis"},[t._v(t._s(e.ip))]),t._v(" "),s("a",{tag:"Button",staticClass:"text-small text-primary",attrs:{size:"sm",target:"_blank",href:"https://ploi.io/panel/servers/"+e.ploi_id}},[t._v("\n                                                        "+t._s(t.__("View in ploi.io"))+"\n                                                    ")])],1),t._v(" "),s("TableData",[t._v(t._s(e.sites_count)+"/"+t._s(e.maximum_sites))]),t._v(" "),s("TableData",[s("inertia-link",{staticClass:"text-primary font-medium",attrs:{href:t.route("admin.services.servers.edit",e.id)}},[t._v("\n                                                        "+t._s(t.__("Edit"))+"\n                                                    ")])],1)],1)})),1)],1)],1),t._v(" "),s("pagination",{attrs:{links:t.servers}})]},proxy:!0}])}),t._v(" "),s("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("Sites")))]},proxy:!0},{key:"content",fn:function(){return[s("div",[s("Table",{attrs:{caption:"Site list overview"}},[s("TableHead",[s("TableRow",[s("TableHeader",[t._v(t._s(t.__("Name")))]),t._v(" "),s("TableHeader",[t._v(t._s(t.__("Server")))]),t._v(" "),s("TableHeader")],1)],1),t._v(" "),s("TableBody",t._l(t.sites.data,(function(e){return s("TableRow",{key:e.id},[s("TableData",[t._v("\n                                                    "+t._s(e.domain)+"\n                                                ")]),t._v(" "),s("TableData",[t._v("\n                                                    "+t._s(e.server?e.server.name:"-")+"\n                                                ")]),t._v(" "),s("TableData",[s("inertia-link",{staticClass:"text-primary font-medium",attrs:{href:t.route("admin.services.sites.edit",e.id)}},[t._v("\n                                                        "+t._s(t.__("Edit"))+"\n                                                    ")])],1)],1)})),1)],1)],1),t._v(" "),s("pagination",{attrs:{links:t.sites}})]},proxy:!0}])}),t._v(" "),s("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("Providers")))]},proxy:!0},{key:"content",fn:function(){return[s("div",[s("Table",{attrs:{caption:"Provider list overview"}},[s("TableHead",[s("TableRow",[s("TableHeader",[t._v(t._s(t.__("Name")))]),t._v(" "),s("TableHeader",[t._v(t._s(t.__("Regions")))]),t._v(" "),s("TableHeader",[t._v(t._s(t.__("Plans")))]),t._v(" "),s("TableHeader",[t._v(t._s(t.__("Attached servers")))]),t._v(" "),s("TableHeader")],1)],1),t._v(" "),s("TableBody",t._l(t.providers.data,(function(e){return s("TableRow",{key:e.id},[s("TableData",[t._v(t._s(e.name))]),t._v(" "),s("TableData",[t._v(t._s(e.regions_count))]),t._v(" "),s("TableData",[t._v(t._s(e.plans_count))]),t._v(" "),s("TableData",[t._v(t._s(e.servers_count))]),t._v(" "),s("TableData",[s("inertia-link",{staticClass:"text-primary font-medium",attrs:{href:t.route("admin.services.providers.edit",e.id)}},[t._v("\n                                                        "+t._s(t.__("Edit"))+"\n                                                    ")])],1)],1)})),1)],1)],1),t._v(" "),s("pagination",{attrs:{links:t.sites}})]},proxy:!0}])})]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=$.exports},15:function(t,e,s){"use strict";var a={props:{items:{type:Array,required:!1}}},i=s(0),n=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid grid-cols-4 gap-8 md:gap-16"},[e("aside",{staticClass:"col-span-4 md:col-span-1"},[this._t("nav")],2),this._v(" "),e("section",{staticClass:"col-span-4 md:col-span-3"},[e("div",{staticClass:"space-y-16"},[this._t("segments")],2)])])}),[],!1,null,null,null);e.a=n.exports},16:function(t,e,s){"use strict";var a=s(0),i=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"px-8 pb-8 space-y-6 border rounded border-low-emphasis"},[e("header",{staticClass:"-mt-4"},[e("h2",{staticClass:"inline-flex px-4 -mx-4 font-medium bg-surface-1 text-title"},[this._t("title")],2),this._v(" "),e("p",{staticClass:"mt-1 text-small text-medium-emphasis"},[this._t("subtitle")],2)]),this._v(" "),e("div",{staticClass:"space-y-4"},[this._t("form"),this._v(" "),this._t("content")],2)])}),[],!1,null,null,null);e.a=i.exports},17:function(t,e,s){"use strict";s.r(e);var a=s(39),i=s(40),n=s(41),r=s(42),o={components:{TopBar:a.a,Breadcrumbs:i.a,TabBar:n.a,TopBarTabBarContainer:r.a},data:function(){return{tabBars:[{title:"Dashboard",to:this.route("admin.dashboard"),active:this.route().current("admin.dashboard")||this.route().current("admin.settings")||this.route().current("admin.system")},{title:this.__("Users"),to:this.route("admin.users.index"),active:this.route().current("admin.users.*")},{title:this.__("Packages"),to:this.route("admin.packages.index"),active:this.route().current("admin.packages.*")},this.$page.props.settings.support?{title:"".concat(this.__("Support")," (").concat(this.$page.props.openTickets,")"),to:this.route("admin.support.index"),active:this.route().current("admin.support.*")}:null,this.$page.props.settings.documentation?{title:this.__("Documentation"),to:this.route("admin.documentation.index"),active:this.route().current("admin.documentation.*")}:null,{title:"Services",to:this.route("admin.services.index"),active:this.route().current("admin.services.*")}],breadcrumbs:[{title:this.$page.props.settings.name,to:"/"},{title:this.__("Administration"),to:this.route("admin.dashboard")}]}}},l=s(0),u=Object(l.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("TopBar",{scopedSlots:t._u([{key:"breadcrumbs",fn:function(){return[s("Breadcrumbs",{attrs:{items:t.breadcrumbs}})]},proxy:!0},{key:"tab-bar",fn:function(){return[s("TopBarTabBarContainer",[s("TabBar",{attrs:{items:t.tabBars}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=u.exports},31:function(t,e,s){"use strict";var a={props:{links:Object},computed:{determineLinks:function(){return this.links.meta?this.links.meta:this.links}}},i=s(0),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.determineLinks.per_page<t.determineLinks.total?s("div",{staticClass:"mt-6 -mb-1 flex flex-wrap"},[t._l(t.determineLinks.links,(function(e,a){return[null===e.url?s("div",{key:a,staticClass:"mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400",class:{"ml-auto":"Next"===e.label}},[t._v(t._s(e.label))]):s("inertia-link",{key:a,staticClass:"mr-1 mb-1 px-2 py-1 text-sm rounded",class:{"shadow text-high-emphasis bg-surface-1":e.active,"ml-auto":"Next"===e.label},attrs:{href:e.url}},[t._v(t._s(e.label))])]}))],2):t._e()}),[],!1,null,null,null);e.a=n.exports},38:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{items:[{title:this.__("Overview"),to:this.route("admin.services.index"),active:this.route().current("admin.services.index")},{title:this.__("Synchronize servers"),to:this.route("admin.services.servers.index"),active:this.route().current("admin.services.servers.index")},{title:this.__("Synchronize providers"),to:this.route("admin.services.providers.index"),active:this.route().current("admin.services.providers.index")}]}}},i=s(0),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"-ml-4 space-y-1"},t._l(t.items,(function(e){return s("li",[s("inertia-link",{staticClass:"flex items-center h-10 px-4 font-medium text-medium-emphasis",class:{"rounded shadow text-primary bg-surface-3":e.active},attrs:{href:e.to}},[t._v(t._s(e.title)+" "+t._s(e.route))])],1)})),0)}),[],!1,null,null,null);e.default=n.exports}}]);