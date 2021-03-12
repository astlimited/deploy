(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{15:function(t,e,s){"use strict";var a={props:{items:{type:Array,required:!1}}},r=s(0),n=Object(r.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid grid-cols-4 gap-8 md:gap-16"},[e("aside",{staticClass:"col-span-4 md:col-span-1"},[this._t("nav")],2),this._v(" "),e("section",{staticClass:"col-span-4 md:col-span-3"},[e("div",{staticClass:"space-y-16"},[this._t("segments")],2)])])}),[],!1,null,null,null);e.a=n.exports},16:function(t,e,s){"use strict";var a=s(0),r=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"px-8 pb-8 space-y-6 border rounded border-low-emphasis"},[e("header",{staticClass:"-mt-4"},[e("h2",{staticClass:"inline-flex px-4 -mx-4 font-medium bg-surface-1 text-title"},[this._t("title")],2),this._v(" "),e("p",{staticClass:"mt-1 text-small text-medium-emphasis"},[this._t("subtitle")],2)]),this._v(" "),e("div",{staticClass:"space-y-4"},[this._t("form"),this._v(" "),this._t("content")],2)])}),[],!1,null,null,null);e.a=r.exports},172:function(t,e,s){"use strict";s.r(e);var a=s(62),r=s(1),n=s(6),i=s(7),o=s(8),l=s(9),u=s(10),c=s(2),d=s(11),p=s(12),m=s(4),_=s(5),b=s(3),h=s(33),v=s(28),f=s(29),y=s(51),x=s(65),g=s(35),T=s(32),k=s(34),B=s(13),w=s(14),C=s(48),S=s(49),I=s(50),L=s(64),j=s(15),O=s(16),D=s(31),H=s(70),P=s(20),E=s(22),$=s(23),M=s(24),A=s(25),N=s(21),R={metaInfo:function(){return{title:"".concat(this.__("Servers"))}},layout:b.a,components:{TopBar:a.default,Container:r.a,Content:n.a,Page:i.a,PageHeader:o.a,PageHeaderTitle:l.a,PageBody:u.a,Button:c.a,List:d.a,IconButton:y.a,IconMore:x.a,ListItem:p.a,StatusBubble:m.a,NotificationBadge:_.a,IconBox:h.a,IconGlobe:v.a,IconStorage:f.a,EmptyImage:g.a,Modal:T.a,ModalContainer:k.a,FormInput:B.a,FormActions:w.a,Dropdown:C.a,DropdownList:S.a,DropdownListItem:I.a,DropdownListItemButton:L.a,SettingsSegment:O.a,SettingsLayout:j.a,Tabs:H.default,Table:P.a,TableHead:E.a,TableHeader:$.a,TableRow:M.a,TableBody:A.a,TableData:N.a,Pagination:D.a},props:{server:Object,sites:Object},data:function(){return{breadcrumbs:[{title:this.$page.props.settings.name,to:"/"},{title:this.server.name,to:this.route("servers.show",this.server.id)}]}},methods:{}},F=s(0),G=Object(F.a)(R,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Page",[s("TopBar",{attrs:{breadcrumbs:t.breadcrumbs}}),t._v(" "),s("Content",[s("Container",[s("PageHeader",{scopedSlots:t._u([{key:"start",fn:function(){return[s("PageHeaderTitle",[t._v(t._s(t.server.name))])]},proxy:!0},t.can("sites","create")?{key:"end",fn:function(){return[s("Button",{attrs:{as:"inertia-link",href:t.route("sites.index",{create:!0,server:t.server.id})}},[t._v(t._s(t.__("Create site")))])]},proxy:!0}:null],null,!0)}),t._v(" "),s("PageBody",[s("SettingsLayout",{scopedSlots:t._u([{key:"nav",fn:function(){return[s("Tabs",{attrs:{server:t.server}})]},proxy:!0},{key:"segments",fn:function(){return[s("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("Sites")))]},proxy:!0},{key:"content",fn:function(){return[s("div",[s("Table",{attrs:{caption:"Site list overview"}},[s("TableHead",[s("TableRow",[s("TableHeader",[t._v(t._s(t.__("Domain")))]),t._v(" "),s("TableHeader")],1)],1),t._v(" "),s("TableBody",t._l(t.sites.data,(function(e){return s("TableRow",{key:e.id},[s("TableData",[t._v("\n                                                    "+t._s(e.domain)+"\n                                                ")]),t._v(" "),s("TableData",[s("inertia-link",{staticClass:"text-primary font-medium",attrs:{href:t.route("sites.show",e.id)}},[t._v("\n                                                        "+t._s(t.__("Manage"))+"\n                                                    ")])],1)],1)})),1)],1)],1),t._v(" "),s("pagination",{attrs:{links:t.sites}})]},proxy:!0}])})]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=G.exports},31:function(t,e,s){"use strict";var a={props:{links:Object},computed:{determineLinks:function(){return this.links.meta?this.links.meta:this.links}}},r=s(0),n=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.determineLinks.per_page<t.determineLinks.total?s("div",{staticClass:"mt-6 -mb-1 flex flex-wrap"},[t._l(t.determineLinks.links,(function(e,a){return[null===e.url?s("div",{key:a,staticClass:"mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400",class:{"ml-auto":"Next"===e.label}},[t._v(t._s(e.label))]):s("inertia-link",{key:a,staticClass:"mr-1 mb-1 px-2 py-1 text-sm rounded",class:{"shadow text-high-emphasis bg-surface-1":e.active,"ml-auto":"Next"===e.label},attrs:{href:e.url}},[t._v(t._s(e.label))])]}))],2):t._e()}),[],!1,null,null,null);e.a=n.exports},62:function(t,e,s){"use strict";s.r(e);var a=s(39),r=s(40),n=s(41),i=s(42),o={components:{TopBar:a.a,Breadcrumbs:r.a,TabBar:n.a,TopBarTabBarContainer:i.a},props:{breadcrumbs:Array},data:function(){return{tabBars:[{title:this.__("Dashboard"),to:this.route("dashboard"),active:this.route().current("dashboard")},{title:this.__("Sites"),to:this.route("sites.index"),active:this.route().current("sites.*")},{title:"Servers",to:this.route("servers.index"),active:this.route().current("servers.*")}]}}},l=s(0),u=Object(l.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("TopBar",{scopedSlots:t._u([{key:"breadcrumbs",fn:function(){return[s("Breadcrumbs",{attrs:{items:t.breadcrumbs}})]},proxy:!0},{key:"tab-bar",fn:function(){return[s("TopBarTabBarContainer",[s("TabBar",{attrs:{items:t.tabBars}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=u.exports},70:function(t,e,s){"use strict";s.r(e);var a={props:{server:Object},data:function(){return{items:[{title:this.__("General"),to:this.route("servers.show",this.server.id),active:this.route().current("servers.show")},{title:this.__("Settings"),to:this.route("servers.settings.show",this.server.id),active:this.route().current("servers.settings.show")}]}}},r=s(0),n=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"-ml-4 space-y-1"},t._l(t.items,(function(e){return e?s("li",[s(e.type&&"a"===e.type?"a":"inertia-link",{tag:"component",staticClass:"flex items-center h-10 px-4 font-medium text-medium-emphasis",class:{"rounded shadow text-primary bg-surface-3":e.active},attrs:{target:e.type&&"a"===e.type?"_blank":"_self",href:e.to}},[t._v(t._s(e.title)+" "+t._s(e.route))])],1):t._e()})),0)}),[],!1,null,null,null);e.default=n.exports}}]);