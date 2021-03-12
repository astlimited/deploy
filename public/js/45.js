(window.webpackJsonp=window.webpackJsonp||[]).push([[45,80],{0:function(t,e,s){"use strict";function a(t,e,s,a,i,n,r,o){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=s,u._compiled=!0),a&&(u.functional=!0),n&&(u._scopeId="data-v-"+n),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=l):i&&(l=o?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}s.d(e,"a",(function(){return a}))},13:function(t,e,s){"use strict";var a=s(56),i=s(55),n=s(57),r=s(68),o=s(77),l=s(78),u={props:{id:{type:String,required:!1},label:{type:String,required:!0},type:{type:String,default:function(){return"text"}},required:{type:Boolean,default:function(){return!1}},errors:{type:Array},helperText:{type:String},placeholder:{type:String},value:{required:!1,default:""},allowCopy:{required:!1,default:!1,type:Boolean},allowRandomString:{required:!1,default:!1,type:Boolean},loading:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},components:{FormGroup:a.a,Label:i.a,ErrorText:n.a,HelperText:r.a,IconClipboard:o.a,IconKey:l.a},data:function(){return{defaultClasses:"w-full border-medium-emphasis text-body h-10 px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary",copied:!1}},watch:{copied:function(){var t=this;this.copied&&setTimeout((function(){t.copied=!1}),1250)}},methods:{updateValue:function(t){this.$emit("input",t)},copy:function(){this.copied=!0,this.$copyText(this.value)},generateString:function(){this.$emit("input",this.randomString())}},computed:{copyText:function(){return this.copied?this.__("Copied to clipboard"):this.__("Copy")}}},c=s(0),d=Object(c.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("FormGroup",{staticClass:"relative max-w-lg"},[s("Label",{attrs:{errors:t.errors,forId:t.id}},[t._v(t._s(t.label))]),t._v(" "),t.allowCopy?s("button",{staticClass:"flex items-center right-0 absolute text-xs text-medium-emphasis",attrs:{type:"button"},on:{click:t.copy}},[s("IconClipboard",{staticClass:"mr-2"}),t._v("\n        "+t._s(t.copyText)+"\n    ")],1):t._e(),t._v(" "),t.allowRandomString?s("button",{staticClass:"flex items-center right-0 absolute text-xs text-medium-emphasis",attrs:{type:"button"},on:{click:t.generateString}},[s("IconKey",{staticClass:"mr-2"}),t._v("\n        "+t._s(t.__("Generate"))+"\n    ")],1):t._e(),t._v(" "),s("input",{class:[t.defaultClasses,t.disabled||t.loading?"opacity-50":"",t.loading?"cursor-wait":""],attrs:{id:t.id,type:t.type,required:t.required,disabled:t.loading||t.disabled,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.updateValue(e.target.value)}}}),t._v(" "),t.errors?s("ErrorText",[t._v(t._s(t.errors[0]))]):t._e(),t._v(" "),t.helperText&&!t.errors?s("HelperText",[t._v(t._s(t.helperText))]):t._e()],1)}),[],!1,null,null,null);e.a=d.exports},14:function(t,e,s){"use strict";var a={props:{justify:{type:String,default:"justify-start"}}},i=s(0),n=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"flex items-center space-x-2",class:[this.justify]},[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},15:function(t,e,s){"use strict";var a={props:{items:{type:Array,required:!1}}},i=s(0),n=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid grid-cols-4 gap-8 md:gap-16"},[e("aside",{staticClass:"col-span-4 md:col-span-1"},[this._t("nav")],2),this._v(" "),e("section",{staticClass:"col-span-4 md:col-span-3"},[e("div",{staticClass:"space-y-16"},[this._t("segments")],2)])])}),[],!1,null,null,null);e.a=n.exports},16:function(t,e,s){"use strict";var a=s(0),i=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"px-8 pb-8 space-y-6 border rounded border-low-emphasis"},[e("header",{staticClass:"-mt-4"},[e("h2",{staticClass:"inline-flex px-4 -mx-4 font-medium bg-surface-1 text-title"},[this._t("title")],2),this._v(" "),e("p",{staticClass:"mt-1 text-small text-medium-emphasis"},[this._t("subtitle")],2)]),this._v(" "),e("div",{staticClass:"space-y-4"},[this._t("form"),this._v(" "),this._t("content")],2)])}),[],!1,null,null,null);e.a=i.exports},173:function(t,e,s){"use strict";s.r(e);var a=s(36),i=s(1),n=s(6),r=s(7),o=s(8),l=s(9),u=s(10),c=s(2),d=s(11),p=s(12),_=s(4),h=s(5),f=s(3),v=s(15),m=s(16),y=s(13),b=s(18),x=s(14),g=s(37),C=s(20),S=s(22),w=s(23),k=s(24),B=s(25),T=s(21),$={metaInfo:function(){return{title:this.__("Apps")}},layout:f.a,components:{TopBar:a.default,Container:i.a,Content:n.a,Page:r.a,PageHeader:o.a,PageHeaderTitle:l.a,PageBody:u.a,Button:c.a,List:d.a,ListItem:p.a,StatusBubble:_.a,NotificationBadge:h.a,FormInput:y.a,SettingsLayout:v.a,SettingsSegment:m.a,Form:b.a,FormActions:x.a,Tabs:g.default,Table:C.a,TableHead:S.a,TableHeader:w.a,TableRow:k.a,TableBody:B.a,TableData:T.a},data:function(){return{sending:!1,type:null,options:{create_database:!1},breadcrumbs:[{title:this.$page.props.settings.name,to:"/"},{title:this.__("Sites"),to:this.route("sites.index")},{title:this.site.domain,to:this.route("sites.show",this.site.id)},{title:this.__("Apps"),to:this.route("sites.apps.index",this.site.id)}]}},props:{site:Object},methods:{prepareInstall:function(t){this.type=t},install:function(){var t=this;this.$inertia.post(this.route("sites.apps.store",this.site.id),{type:this.type,options:this.options}).then((function(){t.type=null}))},uninstall:function(){this.$inertia.delete(this.route("sites.apps.delete",this.site.id))}}},j=s(0),O=Object(j.a)($,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Page",[s("TopBar",{attrs:{breadcrumbs:t.breadcrumbs}}),t._v(" "),s("Content",[s("Container",[s("PageHeader",{scopedSlots:t._u([{key:"start",fn:function(){return[s("PageHeaderTitle",[t._v(t._s(t.__("Apps")))])]},proxy:!0}])}),t._v(" "),s("PageBody",[s("SettingsLayout",{scopedSlots:t._u([{key:"nav",fn:function(){return[s("Tabs",{attrs:{site:t.site}})]},proxy:!0},{key:"segments",fn:function(){return[t.site.project?s("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("Overview")))]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("\n                                "+t._s(t.__("You currently have a application installed."))+"\n                            ")]},proxy:!0},{key:"content",fn:function(){return[s("Button",{attrs:{variant:"danger"},on:{click:t.uninstall}},[t._v(t._s(t.__("Uninstall")))])]},proxy:!0}],null,!1,844471627)}):t._e(),t._v(" "),t.site.project?t._e():s("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("Overview")))]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("\n                                "+t._s(t.__("You have the ability here to directly install one of these applications on the fly."))+"\n                            ")]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"grid grid-cols-1 md:grid-cols-3 gap-4"},[s("Button",{attrs:{variant:"wordpress"===t.type?"primary":"secondary"},on:{click:function(e){return t.prepareInstall("wordpress")}}},[t._v(t._s(t.__("Install WordPress"))+"\n                                    ")]),t._v(" "),s("Button",{attrs:{variant:"nextcloud"===t.type?"primary":"secondary"},on:{click:function(e){return t.prepareInstall("nextcloud")}}},[t._v(t._s(t.__("Install Nextcloud"))+"\n                                    ")]),t._v(" "),s("Button",{attrs:{variant:"october-cms"===t.type?"primary":"secondary"},on:{click:function(e){return t.prepareInstall("october-cms")}}},[t._v(t._s(t.__("Install October CMS"))+"\n                                    ")])],1)]},proxy:!0}],null,!1,2122003405)}),t._v(" "),"wordpress"===t.type?s("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("WordPress")))]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(t._s(t.__("WordPress is open source software you can use to create a beautiful website, blog, or app.")))]},proxy:!0},{key:"content",fn:function(){return[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.options.create_database,expression:"options.create_database"}],staticClass:"form-checkbox",attrs:{id:"create_database",type:"checkbox"},domProps:{checked:Array.isArray(t.options.create_database)?t._i(t.options.create_database,null)>-1:t.options.create_database},on:{change:function(e){var s=t.options.create_database,a=e.target,i=!!a.checked;if(Array.isArray(s)){var n=t._i(s,null);a.checked?n<0&&t.$set(t.options,"create_database",s.concat([null])):n>-1&&t.$set(t.options,"create_database",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.options,"create_database",i)}}}),t._v(" "),s("label",{staticClass:"ml-2 text-sm",attrs:{for:"create_database"}},[t._v(t._s(t.__("Create database & attach to WordPress")))]),t._v(" "),s("p",{staticClass:"text-small mt-1 text-medium-emphasis"},[t._v("\n                                        "+t._s(t.__("This will also create a database and attach it directly for you so you have a easy start."))+"\n                                    ")])]),t._v(" "),s("Button",{on:{click:t.install}},[t._v(t._s(t.__("Start installation")))]),t._v(" "),s("Button",{attrs:{variant:"secondary"},on:{click:function(e){t.type=null}}},[t._v(t._s(t.__("Cancel")))])]},proxy:!0}],null,!1,3556974044)}):t._e(),t._v(" "),"nextcloud"===t.type?s("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("Nextcloud")))]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(t._s(t.__("Nextcloud is a suite of client-server software for creating and using file hosting services, it is comparable to Dropbox.")))]},proxy:!0},{key:"content",fn:function(){return[s("Button",{on:{click:t.install}},[t._v(t._s(t.__("Start installation")))]),t._v(" "),s("Button",{attrs:{variant:"secondary"},on:{click:function(e){t.type=null}}},[t._v(t._s(t.__("Cancel")))])]},proxy:!0}],null,!1,1381597720)}):t._e(),t._v(" "),"october-cms"===t.type?s("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("October CMS")))]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(t._s(t.__("October is a free, open-source and self-hosted content management system (CMS) based on the PHP programming language and Laravel web application framework.")))]},proxy:!0},{key:"content",fn:function(){return[s("Button",{on:{click:t.install}},[t._v(t._s(t.__("Start installation")))]),t._v(" "),s("Button",{attrs:{variant:"secondary"},on:{click:function(e){t.type=null}}},[t._v(t._s(t.__("Cancel")))])]},proxy:!0}],null,!1,3703760645)}):t._e()]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=O.exports},18:function(t,e,s){"use strict";var a=s(0),i=Object(a.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{staticClass:"space-y-4",on:{submit:function(e){return e.preventDefault(),t.$emit("submit")}}},[t._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},36:function(t,e,s){"use strict";s.r(e);var a=s(39),i=s(40),n=s(41),r=s(42),o={components:{TopBar:a.a,Breadcrumbs:i.a,TabBar:n.a,TopBarTabBarContainer:r.a},props:{breadcrumbs:Array},data:function(){return{tabBars:[{title:this.__("Dashboard"),to:this.route("dashboard"),active:this.route().current("dashboard")},{title:this.__("Sites"),to:this.route("sites.index"),active:this.route().current("sites.*")},{title:"Servers",to:this.route("servers.index")}]}}},l=s(0),u=Object(l.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("TopBar",{scopedSlots:t._u([{key:"breadcrumbs",fn:function(){return[s("Breadcrumbs",{attrs:{items:t.breadcrumbs}})]},proxy:!0},{key:"tab-bar",fn:function(){return[s("TopBarTabBarContainer",[s("TabBar",{attrs:{items:t.tabBars}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=u.exports},37:function(t,e,s){"use strict";s.r(e);var a={props:{site:Object},data:function(){return{items:[{title:this.__("General"),to:this.route("sites.show",this.site.id),active:this.route().current("sites.show")},{title:this.__("Apps"),to:this.route("sites.apps.index",this.site.id),active:this.route().current("sites.apps.index")},{title:this.__("Databases"),to:this.route("sites.databases.index",this.site.id),active:this.route().current("sites.databases.index")},{title:this.__("Cronjobs"),to:this.route("sites.cronjobs.index",this.site.id),active:this.route().current("sites.cronjobs.index")},{title:this.__("Redirects"),to:this.route("sites.redirects.index",this.site.id),active:this.route().current("sites.redirects.index")},{title:this.__("Certificates"),to:this.route("sites.certificates.index",this.site.id),active:this.route().current("sites.certificates.index")},this.site.dns_id?{title:this.__("DNS"),to:this.route("sites.dns.index",this.site.id),active:this.route().current("sites.dns.index")}:null,this.can("sites","update")?{title:this.__("Settings"),to:this.route("sites.settings.show",this.site.id),active:this.route().current("sites.settings.show")}:null,{title:this.__("View site"),to:"http://".concat(this.site.domain),type:"a"}]}}},i=s(0),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"md:-ml-4 space-y-1"},t._l(t.items,(function(e){return e?s("li",[s(e.type&&"a"===e.type?"a":"inertia-link",{tag:"component",staticClass:"flex items-center h-10 px-4 font-medium text-medium-emphasis",class:{"rounded shadow text-primary bg-surface-3":e.active},attrs:{target:e.type&&"a"===e.type?"_blank":"_self",href:e.to}},[t._v(t._s(e.title)+" "+t._s(e.route))])],1):t._e()})),0)}),[],!1,null,null,null);e.default=n.exports},55:function(t,e,s){"use strict";var a={props:{forId:{type:String,required:!1},errors:{type:Array}}},i=s(0),n=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("label",{class:["text-small"],attrs:{for:this.forId}},[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},56:function(t,e,s){"use strict";var a=s(0),i=Object(a.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"flex flex-col space-y-1"},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},57:function(t,e,s){"use strict";var a=s(0),i=Object(a.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"text-danger"},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},68:function(t,e,s){"use strict";var a=s(0),i=Object(a.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"text-medium-emphasis text-small"},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},77:function(t,e,s){"use strict";var a=s(0),i=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-clipboard",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}}),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"}})])}),[],!1,null,null,null);e.a=i.exports},78:function(t,e,s){"use strict";var a=s(0),i=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-key",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"}}),this._v(" "),e("path",{attrs:{d:"M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}})])}),[],!1,null,null,null);e.a=i.exports}}]);