(window.webpackJsonp=window.webpackJsonp||[]).push([[11,70],{0:function(t,e,r){"use strict";function s(t,e,r,s,a,n,i,o){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=r,u._compiled=!0),s&&(u.functional=!0),n&&(u._scopeId="data-v-"+n),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):a&&(l=o?function(){a.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}r.d(e,"a",(function(){return s}))},127:function(t,e,r){"use strict";r.r(e);var s=r(17),a=r(1),n=r(6),i=r(7),o=r(8),l=r(9),u=r(10),c=r(2),d=r(11),p=r(12),h=r(4),m=r(5),f=r(3),_=r(15),v=r(16),g=r(13),b=r(30),x=r(26),y=r(18),w=r(14),C=r(27),$=r(59),S={metaInfo:function(){return{title:"".concat(this.__("Edit alert"))}},layout:f.a,components:{TopBar:s.default,Container:a.a,Content:n.a,Page:i.a,PageHeader:o.a,PageHeaderTitle:l.a,PageBody:u.a,Button:c.a,List:d.a,ListItem:p.a,StatusBubble:h.a,NotificationBadge:m.a,FormInput:g.a,FormSelect:x.a,SettingsLayout:_.a,SettingsSegment:v.a,Form:y.a,FormTextarea:b.a,FormActions:w.a,Tabs:$.default},data:function(){return{sending:!1,form:{type:"info",message:this.alert.message,expires_at:this.alert.expires_at}}},props:{alert:Object},methods:{submit:function(){var t=this;this.$inertia.patch(this.route("admin.alerts.update",this.alert.id),this.form,{onStart:function(){return t.sending=!0},onFinish:function(){return t.sending=!1}})},confirmDelete:function(){var t=this;Object(C.a)({title:this.__("Are you sure?"),message:this.__("Are you sure you want to delete this alert?"),onConfirm:function(){return t.delete()}})},delete:function(){var t=this;this.$inertia.delete(this.route("admin.alerts.delete",this.alert.id),{onStart:function(){return t.sending=!0},onFinish:function(){return t.sending=!1}})}}},k=r(0),E=Object(k.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Page",[r("TopBar"),t._v(" "),r("Content",[r("Container",[r("PageHeader",{scopedSlots:t._u([{key:"start",fn:function(){return[r("PageHeaderTitle",[t._v(t._s(t.__("Edit alert")))])]},proxy:!0}])}),t._v(" "),r("PageBody",[r("SettingsLayout",{scopedSlots:t._u([{key:"nav",fn:function(){return[r("Tabs")]},proxy:!0},{key:"segments",fn:function(){return[r("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("Edit")))]},proxy:!0},{key:"form",fn:function(){return[r("form",{staticClass:"space-y-4",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("FormTextarea",{attrs:{label:t.__("Message"),errors:t.$page.props.errors.message},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}}),t._v(" "),r("FormInput",{attrs:{label:t.__("Expires at"),placeholder:"2020-01-01 00:00:00",errors:t.$page.props.errors.expires_at},model:{value:t.form.expires_at,callback:function(e){t.$set(t.form,"expires_at",e)},expression:"form.expires_at"}}),t._v(" "),r("FormSelect",{attrs:{errors:t.$page.props.errors.type,label:t.__("Type")},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[r("option",{attrs:{value:"info"}},[t._v(t._s(t.__("Informational")))]),t._v(" "),r("option",{attrs:{value:"warning"}},[t._v(t._s(t.__("Warning")))]),t._v(" "),r("option",{attrs:{value:"danger"}},[t._v(t._s(t.__("Danger")))])]),t._v(" "),r("FormActions",[r("Button",[t._v(t._s(t.__("Save changes")))]),t._v(" "),r("Button",{attrs:{variant:"danger",type:"button"},on:{click:t.confirmDelete}},[t._v("\n                                            "+t._s(t.__("Delete"))+"\n                                        ")])],1)],1)]},proxy:!0}])})]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=E.exports},13:function(t,e,r){"use strict";var s=r(56),a=r(55),n=r(57),i=r(68),o=r(77),l=r(78),u={props:{id:{type:String,required:!1},label:{type:String,required:!0},type:{type:String,default:function(){return"text"}},required:{type:Boolean,default:function(){return!1}},errors:{type:Array},helperText:{type:String},placeholder:{type:String},value:{required:!1,default:""},allowCopy:{required:!1,default:!1,type:Boolean},allowRandomString:{required:!1,default:!1,type:Boolean},loading:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},components:{FormGroup:s.a,Label:a.a,ErrorText:n.a,HelperText:i.a,IconClipboard:o.a,IconKey:l.a},data:function(){return{defaultClasses:"w-full border-medium-emphasis text-body h-10 px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary",copied:!1}},watch:{copied:function(){var t=this;this.copied&&setTimeout((function(){t.copied=!1}),1250)}},methods:{updateValue:function(t){this.$emit("input",t)},copy:function(){this.copied=!0,this.$copyText(this.value)},generateString:function(){this.$emit("input",this.randomString())}},computed:{copyText:function(){return this.copied?this.__("Copied to clipboard"):this.__("Copy")}}},c=r(0),d=Object(c.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("FormGroup",{staticClass:"relative max-w-lg"},[r("Label",{attrs:{errors:t.errors,forId:t.id}},[t._v(t._s(t.label))]),t._v(" "),t.allowCopy?r("button",{staticClass:"flex items-center right-0 absolute text-xs text-medium-emphasis",attrs:{type:"button"},on:{click:t.copy}},[r("IconClipboard",{staticClass:"mr-2"}),t._v("\n        "+t._s(t.copyText)+"\n    ")],1):t._e(),t._v(" "),t.allowRandomString?r("button",{staticClass:"flex items-center right-0 absolute text-xs text-medium-emphasis",attrs:{type:"button"},on:{click:t.generateString}},[r("IconKey",{staticClass:"mr-2"}),t._v("\n        "+t._s(t.__("Generate"))+"\n    ")],1):t._e(),t._v(" "),r("input",{class:[t.defaultClasses,t.disabled||t.loading?"opacity-50":"",t.loading?"cursor-wait":""],attrs:{id:t.id,type:t.type,required:t.required,disabled:t.loading||t.disabled,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.updateValue(e.target.value)}}}),t._v(" "),t.errors?r("ErrorText",[t._v(t._s(t.errors[0]))]):t._e(),t._v(" "),t.helperText&&!t.errors?r("HelperText",[t._v(t._s(t.helperText))]):t._e()],1)}),[],!1,null,null,null);e.a=d.exports},14:function(t,e,r){"use strict";var s={props:{justify:{type:String,default:"justify-start"}}},a=r(0),n=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"flex items-center space-x-2",class:[this.justify]},[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},15:function(t,e,r){"use strict";var s={props:{items:{type:Array,required:!1}}},a=r(0),n=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid grid-cols-4 gap-8 md:gap-16"},[e("aside",{staticClass:"col-span-4 md:col-span-1"},[this._t("nav")],2),this._v(" "),e("section",{staticClass:"col-span-4 md:col-span-3"},[e("div",{staticClass:"space-y-16"},[this._t("segments")],2)])])}),[],!1,null,null,null);e.a=n.exports},16:function(t,e,r){"use strict";var s=r(0),a=Object(s.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"px-8 pb-8 space-y-6 border rounded border-low-emphasis"},[e("header",{staticClass:"-mt-4"},[e("h2",{staticClass:"inline-flex px-4 -mx-4 font-medium bg-surface-1 text-title"},[this._t("title")],2),this._v(" "),e("p",{staticClass:"mt-1 text-small text-medium-emphasis"},[this._t("subtitle")],2)]),this._v(" "),e("div",{staticClass:"space-y-4"},[this._t("form"),this._v(" "),this._t("content")],2)])}),[],!1,null,null,null);e.a=a.exports},17:function(t,e,r){"use strict";r.r(e);var s=r(39),a=r(40),n=r(41),i=r(42),o={components:{TopBar:s.a,Breadcrumbs:a.a,TabBar:n.a,TopBarTabBarContainer:i.a},data:function(){return{tabBars:[{title:"Dashboard",to:this.route("admin.dashboard"),active:this.route().current("admin.dashboard")||this.route().current("admin.settings")||this.route().current("admin.system")},{title:this.__("Users"),to:this.route("admin.users.index"),active:this.route().current("admin.users.*")},{title:this.__("Packages"),to:this.route("admin.packages.index"),active:this.route().current("admin.packages.*")},this.$page.props.settings.support?{title:"".concat(this.__("Support")," (").concat(this.$page.props.openTickets,")"),to:this.route("admin.support.index"),active:this.route().current("admin.support.*")}:null,this.$page.props.settings.documentation?{title:this.__("Documentation"),to:this.route("admin.documentation.index"),active:this.route().current("admin.documentation.*")}:null,{title:"Services",to:this.route("admin.services.index"),active:this.route().current("admin.services.*")}],breadcrumbs:[{title:this.$page.props.settings.name,to:"/"},{title:this.__("Administration"),to:this.route("admin.dashboard")}]}}},l=r(0),u=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("TopBar",{scopedSlots:t._u([{key:"breadcrumbs",fn:function(){return[r("Breadcrumbs",{attrs:{items:t.breadcrumbs}})]},proxy:!0},{key:"tab-bar",fn:function(){return[r("TopBarTabBarContainer",[r("TabBar",{attrs:{items:t.tabBars}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=u.exports},18:function(t,e,r){"use strict";var s=r(0),a=Object(s.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{staticClass:"space-y-4",on:{submit:function(e){return e.preventDefault(),t.$emit("submit")}}},[t._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},26:function(t,e,r){"use strict";var s=r(56),a=r(55),n=r(57),i=r(68),o={props:{id:{type:String,required:!1},label:{type:String,required:!0},type:{type:String,default:function(){return"text"}},required:{type:Boolean,default:function(){return!1}},helperText:{type:String},errors:{type:Array},placeholder:{type:String},value:{required:!1,default:""},loading:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},components:{FormGroup:s.a,Label:a.a,ErrorText:n.a,HelperText:i.a},data:function(){return{defaultClasses:"w-full border-medium-emphasis text-body h-10 max-w-lg px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary",selected:this.value}},methods:{updateValue:function(t){this.$emit("input",t)}}},l=r(0),u=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("FormGroup",[r("Label",{attrs:{errors:t.errors,forId:t.id}},[t._v(t._s(t.label))]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],class:[t.defaultClasses,t.disabled||t.loading?"opacity-50":"",t.loading?"cursor-wait":""],attrs:{disabled:t.loading||t.disabled,id:t.id,required:t.required,placeholder:t.placeholder},on:{input:function(e){return t.updateValue(e.target.value)},change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.value=e.target.multiple?r:r[0]}}},[t._t("default")],2),t._v(" "),t.errors?r("ErrorText",[t._v(t._s(t.errors[0]))]):t._e(),t._v(" "),t.helperText&&!t.errors?r("HelperText",[t._v(t._s(t.helperText))]):t._e()],1)}),[],!1,null,null,null);e.a=u.exports},27:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var s=r(66);function a(t){var e=t.title,r=t.message,a=t.onConfirm;return s.a.dispatch("confirmDelete/open",{title:e,message:r,onConfirm:function(){a(),s.a.dispatch("confirmDelete/close")}})}},30:function(t,e,r){"use strict";var s=r(56),a=r(55),n=r(57),i={props:{id:{type:String,required:!1},label:{type:String,required:!0},required:{type:Boolean,default:function(){return!1}},errors:{type:Array},placeholder:{type:String},value:{required:!1,default:""},rows:{default:3,required:!1}},components:{FormGroup:s.a,Label:a.a,ErrorText:n.a},data:function(){return{defaultClasses:"w-full border-medium-emphasis text-body max-w-lg px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary"}},methods:{updateValue:function(t){this.$emit("input",t)}}},o=r(0),l=Object(o.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("FormGroup",[r("Label",{attrs:{errors:t.errors,forId:t.id}},[t._v(t._s(t.label))]),t._v(" "),r("textarea",{class:[t.defaultClasses],attrs:{id:t.id,required:t.required,rows:t.rows,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.updateValue(e.target.value)}}}),t._v(" "),t.errors?r("ErrorText",[t._v(t._s(t.errors[0]))]):t._e()],1)}),[],!1,null,null,null);e.a=l.exports},39:function(t,e,r){"use strict";var s=r(1),a=r(48),n=r(49),i=r(50),o=r(0),l=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-moon",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"}})])}),[],!1,null,null,null).exports,u=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-sun",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"}}),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"}})])}),[],!1,null,null,null).exports,c=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-search",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}}),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"}})])}),[],!1,null,null,null).exports,d=r(51),p={components:{Container:s.a,Dropdown:a.a,DropdownList:n.a,DropdownListItem:i.a,IconMoon:l,IconSearch:c,IconSun:u,IconButton:d.a},data:function(){return{themeMode:this.$page.props.auth.user.theme}},mounted:function(){this.setDarkMode()},methods:{toggleTheme:function(){var t=this;window.axios.post("/profile/toggle-theme").then((function(e){t.themeMode=e.data,t.setDarkMode()}))},setDarkMode:function(){"auto"===this.themeMode?this.checkDarkMode()?document.documentElement.classList.add("theme--dark"):document.documentElement.classList.remove("theme--dark"):"dark"===this.themeMode?document.documentElement.classList.add("theme--dark"):document.documentElement.classList.remove("theme--dark")},checkDarkMode:function(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches},triggerSearch:function(){window.eventBus.$emit("openSearch")}}},h=Object(o.a)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"sticky top-0 border-b border-low-emphasis bg-top-bar z-30"},[r("div",{staticClass:"w-full px-4 sm:px-8 mx-auto max-w-top-bar-container"},[r("div",{staticClass:"flex flex-col"},[r("nav",{staticClass:"flex flex-col items-center justify-between py-4 space-y-4 md:space-y-0 md:flex-row text-top-bar"},[r("div",{staticClass:"flex items-center space-x-5"},[t.$page.props.settings.logo?r("img",{staticClass:"h-top-bar-logo",attrs:{src:t.$page.props.settings.logo}}):t._e(),t._v(" "),t._t("breadcrumbs")],2),t._v(" "),r("ul",{staticClass:"flex items-center space-x-4"},[r("li",{attrs:{"aria-label":t.__("Search"),"data-balloon-blunt":"","data-balloon-pos":"down"}},[r("IconButton",{on:{click:t.triggerSearch}},[r("IconSearch",{staticClass:"text-top-bar"})],1)],1),t._v(" "),r("li",{attrs:{"aria-label":"light"===t.themeMode?t.__("Enable dark mode"):t.__("Enable light mode"),"data-balloon-blunt":"","data-balloon-pos":"down"}},[r("IconButton",{on:{click:t.toggleTheme}},["light"===t.themeMode?r("IconMoon",{staticClass:"text-top-bar"}):t._e(),t._v(" "),"dark"===t.themeMode?r("IconSun",{staticClass:"text-top-bar"}):t._e()],1)],1),t._v(" "),r("li",[r("Dropdown",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.toggle,a=e.isOpen;return[r("button",{staticClass:"flex h-auto m-0 appearance-none items-center",on:{click:s}},[r("span",[t._v(t._s(t.$page.props.auth.user.name))]),t._v(" "),r("img",{staticClass:"ml-2 inline w-8 h-8 rounded-avatar bg-surface-2",attrs:{src:t.$page.props.auth.user.avatar,alt:t.$page.props.auth.user.name}})]),t._v(" "),a?r("DropdownList",[t.$page.props.settings.support?r("DropdownListItem",{attrs:{to:"/support"}},[t._v(t._s(t.__("Support"))+"\n                                ")]):t._e(),t._v(" "),t.$page.props.settings.documentation?r("DropdownListItem",{attrs:{to:"/documentation"}},[t._v(t._s(t.__("Documentation")))]):t._e(),t._v(" "),r("DropdownListItem",{attrs:{to:t.route("profile.index")}},[t._v(t._s(t.__("Profile"))+"\n                                ")]),t._v(" "),t.$page.props.settings.billing?r("DropdownListItem",{attrs:{to:t.route("profile.billing.index")}},[t._v(t._s(t.__("Billing"))+"\n                                ")]):t._e(),t._v(" "),"admin"===t.$page.props.auth.user.role?r("DropdownListItem",{staticClass:"text-danger",attrs:{to:t.route("admin.dashboard")}},[t._v(t._s(t.__("Administration"))+"\n                                ")]):t._e(),t._v(" "),r("DropdownListItem",{attrs:{to:t.route("logout"),method:"post"}},[t._v(t._s(t.__("Sign out"))+"\n                                ")])],1):t._e()]}}])})],1)])]),t._v(" "),t._t("tab-bar")],2)])])}),[],!1,null,null,null);e.a=h.exports},40:function(t,e,r){"use strict";var s={props:{to:{type:String,required:!0}}},a=r(0),n={components:{BreadcrumbsItem:Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("inertia-link",{staticClass:"font-medium text-body text-breadcrumbs",attrs:{href:this.to}},[this._t("default")],2)}),[],!1,null,null,null).exports},props:{items:{type:Array,required:!0}}},i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"flex items-center space-x-2"},t._l(t.items,(function(e,s){return r("li",{key:e.title},[r("BreadcrumbsItem",{attrs:{to:e.to}},[t._v(t._s(e.title))]),t._v(" "),s<t.items.length-1?r("span",{staticClass:"ml-2 text-low-emphasis"},[t._v("/")]):t._e()],1)})),0)}),[],!1,null,null,null);e.a=i.exports},41:function(t,e,r){"use strict";var s={props:{to:{type:String,required:!0},active:{type:Boolean,default:!1}},data:function(){return{baseClasses:"inline-flex items-center justify-center h-10 px-6 font-medium rounded text-small text-tab-bar",activeClasses:"shadow text-tab-bar-active bg-tab-bar-item",transitionClasses:"transition duration-fast hover:text-high-emphasis focus:text-high-emphasis"}}},a=r(0),n={components:{TabBarItem:Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("inertia-link",{class:[this.baseClasses,this.transitionClasses,this.active?this.activeClasses:null],attrs:{href:this.to}},[this._t("default")],2)],1)}),[],!1,null,null,null).exports},props:{items:{type:Array,required:!0}}},i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"inline-flex flex-row p-1 overflow-hidden overflow-x-auto whitespace-no-wrap rounded bg-tab-bar"},t._l(t.items,(function(e){return e?r("TabBarItem",{key:e.title,attrs:{to:e.to,active:e.active}},[t._v("\n        "+t._s(e.title)+"\n    ")]):t._e()})),1)}),[],!1,null,null,null);e.a=i.exports},42:function(t,e,r){"use strict";var s=r(0),a=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("nav",{staticClass:"flex items-center justify-center pb-4"},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},48:function(t,e,r){"use strict";var s={data:function(){return{isOpen:!1,position:"top"}},methods:{open:function(){this.isOpen=!0,this.calculatePosition()},close:function(){this.isOpen=!1,this.calculatePosition()},toggle:function(){this.isOpen=!this.isOpen,this.calculatePosition()},outsideClickListener:function(t){this.$refs.dropdown!==t.target.closest(this.$refs.dropdown.tagName)&&this.close()},calculatePosition:function(){this.$refs.dropdown.getBoundingClientRect().top>.75*window.innerHeight?this.position="bottom":this.position="top"}},mounted:function(){window.addEventListener("click",this.outsideClickListener)},beforeDestroy:function(){window.removeEventListener("click",this.outsideClickListener)}},a=r(0),n=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:this.close,expression:"close"}],ref:"dropdown",staticClass:"relative"},[this._t("default",null,null,{isOpen:this.isOpen,open:this.open,close:this.close,toggle:this.toggle,position:this.position})],2)}),[],!1,null,null,null);e.a=n.exports},49:function(t,e,r){"use strict";var s={top:"right-0 top-0 mt-8",bottom:"right-0 bottom-0 mb-8"},a={props:{position:{type:String,default:function(){return"top"},validator:function(t){return Object.keys(s).includes(t)}}},computed:{positionClasses:function(){return s[this.position]}}},n=r(0),i=Object(n.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["absolute flex flex-col py-1 overflow-hidden rounded shadow-2xl z-20 bg-surface-1",this.positionClasses]},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},50:function(t,e,r){"use strict";var s={props:{to:{type:String,required:!0},method:{required:!1,default:"get"}}},a=r(0),n=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("inertia-link",{staticClass:"flex items-center w-full h-10 px-6 whitespace-no-wrap text-medium-emphasis text-small focus:bg-primary focus:text-on-primary hover:text-high-emphasis focus:outline-none",attrs:{href:this.to,method:this.method}},[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},51:function(t,e,r){"use strict";var s=r(0),a=Object(s.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"inline-flex items-center justify-center w-10 h-10 text-medium-emphasis rounded-circle focus:outline-none focus:text-high-emphasis",on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},55:function(t,e,r){"use strict";var s={props:{forId:{type:String,required:!1},errors:{type:Array}}},a=r(0),n=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("label",{class:["text-small"],attrs:{for:this.forId}},[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},56:function(t,e,r){"use strict";var s=r(0),a=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"flex flex-col space-y-1"},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},57:function(t,e,r){"use strict";var s=r(0),a=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"text-danger"},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},59:function(t,e,r){"use strict";r.r(e);var s={data:function(){return{items:[{title:this.__("&laquo; Back"),to:this.route("admin.dashboard")},{title:this.__("Overview"),to:this.route("admin.alerts.index"),active:this.route().current("admin.alerts.index")},{title:this.__("Create"),to:this.route("admin.alerts.create"),active:this.route().current("admin.alerts.create")}]}}},a=r(0),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"-ml-4 space-y-1"},t._l(t.items,(function(e){return r("li",[r("inertia-link",{staticClass:"flex items-center h-10 px-4 font-medium text-medium-emphasis",class:{"rounded shadow text-primary bg-surface-3":e.active},attrs:{href:e.to},domProps:{innerHTML:t._s(e.title)}})],1)})),0)}),[],!1,null,null,null);e.default=n.exports},68:function(t,e,r){"use strict";var s=r(0),a=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"text-medium-emphasis text-small"},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},77:function(t,e,r){"use strict";var s=r(0),a=Object(s.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-clipboard",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}}),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"}})])}),[],!1,null,null,null);e.a=a.exports},78:function(t,e,r){"use strict";var s=r(0),a=Object(s.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-key",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"}}),this._v(" "),e("path",{attrs:{d:"M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}})])}),[],!1,null,null,null);e.a=a.exports}}]);