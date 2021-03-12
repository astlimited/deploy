(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{178:function(t,e,n){"use strict";n.r(e);var s=n(36),r=n(1),o=n(6),a=n(7),i=n(8),l=n(9),u=n(10),c=n(2),d=n(11),p=n(12),m=n(4),f=n(5),h=n(3),_=n(35),v=n(33),b=n(28),g=n(29),x=n(51),w=n(65),y=n(32),C=n(34),k=n(13),I=n(26),B=n(14),S=n(48),$=n(49),O=n(50),D=n(64),L=n(27),M={metaInfo:function(){return{title:"".concat(this.__("Sites"))}},layout:h.a,components:{TopBar:s.default,Container:r.a,Content:o.a,Page:a.a,PageHeader:i.a,PageHeaderTitle:l.a,PageBody:u.a,Button:c.a,List:d.a,IconButton:x.a,IconMore:w.a,ListItem:p.a,StatusBubble:m.a,NotificationBadge:f.a,EmptyImage:_.a,IconBox:v.a,IconGlobe:b.a,IconStorage:g.a,Modal:y.a,ModalContainer:C.a,FormInput:k.a,FormActions:B.a,FormSelect:I.a,Dropdown:S.a,DropdownList:$.a,DropdownListItem:O.a,DropdownListItemButton:D.a},props:{sites:Object,availableServers:[Array,Object]},computed:{shouldBePolling:function(){return!!this.sites.data.filter((function(t){return"busy"===t.status})).length}},mounted:function(){if(this.shouldBePolling&&this.startPollingInterval(),window.location.search.includes("create=true")&&(this.modalIsOpen=!0),window.location.search.includes("server=")){var t=new URLSearchParams(window.location.search);this.form.server_id=t.get("server")}},watch:{shouldBePolling:function(t){t?this.pollingInterval||this.startPollingInterval():this.clearPollingInterval()}},data:function(){return{form:{domain:null,server_id:null},pollingInterval:null,modalIsOpen:!1,breadcrumbs:[{title:this.$page.props.settings.name,to:"/"},{title:this.__("Sites"),to:this.route("sites.index")}]}},methods:{startPollingInterval:function(){this.pollingInterval=setInterval(function(){this.poll()}.bind(this),3e3)},clearPollingInterval:function(){clearTimeout(this.pollingInterval),this.pollingInterval=null},poll:function(){this.$inertia.replace(this.route("sites.index"),{only:["sites"],preserveScroll:!0})},closeModal:function(){this.modalIsOpen=!1,this.form.domain=null,this.$page.props.errors=[]},submit:function(){var t=this;this.$inertia.post(this.route("sites.store"),this.form,{only:["errors","flash","sites"],onFinish:function(){Object.keys(t.$page.props.errors).length||(t.form.domain=null,t.form.server_id=null,t.modalIsOpen=!1)}})},confirmDelete:function(t){var e=this;Object(L.a)({title:this.__("Are you sure?"),message:this.__("Your site will be deleted completely, this action is irreversible."),onConfirm:function(){return e.delete(t)}})},delete:function(t){this.$inertia.delete(this.route("sites.delete",t.id))}},beforeDestroy:function(){this.clearPollingInterval()}},E=n(0),P=Object(E.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Page",[t.can("sites","create")?n("Portal",{attrs:{to:"modals"}},[n("ModalContainer",[t.modalIsOpen?n("Modal",{on:{close:t.closeModal,submit:t.submit},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("Create a site")))]},proxy:!0},{key:"form",fn:function(){return[n("FormInput",{attrs:{label:t.__("Domain"),errors:t.$page.props.errors.domain},model:{value:t.form.domain,callback:function(e){t.$set(t.form,"domain",e)},expression:"form.domain"}}),t._v(" "),Object.keys(t.availableServers).length?n("FormSelect",{attrs:{label:t.__("Select server")},model:{value:t.form.server_id,callback:function(e){t.$set(t.form,"server_id",e)},expression:"form.server_id"}},[n("option",{domProps:{value:"null"}},[t._v(t._s(t.__("Select random server")))]),t._v(" "),t._l(t.availableServers,(function(e,s){return n("option",{domProps:{value:s,textContent:t._s(e)}})}))],2):t._e()]},proxy:!0},{key:"form-actions",fn:function(){return[n("Button",{domProps:{textContent:t._s(t.__("Create"))}})]},proxy:!0}],null,!1,3563348956)}):t._e()],1)],1):t._e(),t._v(" "),n("TopBar",{attrs:{breadcrumbs:t.breadcrumbs}}),t._v(" "),n("Content",[n("Container",[n("PageHeader",{scopedSlots:t._u([{key:"start",fn:function(){return[n("PageHeaderTitle",[t._v(t._s(t.__("Sites")))])]},proxy:!0},t.can("sites","create")?{key:"end",fn:function(){return[n("Button",{on:{click:function(e){t.modalIsOpen=!0}}},[t._v(t._s(t.__("Create site")))])]},proxy:!0}:null],null,!0)}),t._v(" "),n("PageBody",[t.sites.meta.total?t._e():n("EmptyImage"),t._v(" "),n("List",t._l(t.sites.data,(function(e){return n("ListItem",{key:e.id,scopedSlots:t._u([{key:"prefix",fn:function(){return[n("StatusBubble",{attrs:{variant:"busy"===e.status?"gray":"success"}})]},proxy:!0},{key:"title",fn:function(){return[n("inertia-link",{staticClass:"text-primary font-medium",attrs:{href:t.route("sites.show",e.id)}},[t._v("\n                                "+t._s(e.domain)+"\n                            ")])]},proxy:!0},"wordpress"===e.project?{key:"subtitle",fn:function(){return[t._v("WordPress installed")]},proxy:!0}:null,{key:"suffix",fn:function(){return[n("Dropdown",{scopedSlots:t._u([{key:"default",fn:function(s){var r=s.isOpen,o=s.toggle,a=s.position;return[n("IconButton",{on:{click:o}},[n("IconMore",{staticClass:"w-5 h-5"})],1),t._v(" "),r?n("DropdownList",{attrs:{position:a}},[n("DropdownListItem",{attrs:{to:t.route("sites.show",e.id)}},[t._v(t._s(t.__("View")))]),t._v(" "),t.can("sites","delete")?n("DropdownListItemButton",{staticClass:"text-danger",on:{click:function(n){return t.confirmDelete(e)}}},[t._v(t._s(t.__("Delete")))]):t._e()],1):t._e()]}}],null,!0)})]},proxy:!0}],null,!0)})})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=P.exports},26:function(t,e,n){"use strict";var s=n(56),r=n(55),o=n(57),a=n(68),i={props:{id:{type:String,required:!1},label:{type:String,required:!0},type:{type:String,default:function(){return"text"}},required:{type:Boolean,default:function(){return!1}},helperText:{type:String},errors:{type:Array},placeholder:{type:String},value:{required:!1,default:""},loading:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},components:{FormGroup:s.a,Label:r.a,ErrorText:o.a,HelperText:a.a},data:function(){return{defaultClasses:"w-full border-medium-emphasis text-body h-10 max-w-lg px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary",selected:this.value}},methods:{updateValue:function(t){this.$emit("input",t)}}},l=n(0),u=Object(l.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FormGroup",[n("Label",{attrs:{errors:t.errors,forId:t.id}},[t._v(t._s(t.label))]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],class:[t.defaultClasses,t.disabled||t.loading?"opacity-50":"",t.loading?"cursor-wait":""],attrs:{disabled:t.loading||t.disabled,id:t.id,required:t.required,placeholder:t.placeholder},on:{input:function(e){return t.updateValue(e.target.value)},change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.value=e.target.multiple?n:n[0]}}},[t._t("default")],2),t._v(" "),t.errors?n("ErrorText",[t._v(t._s(t.errors[0]))]):t._e(),t._v(" "),t.helperText&&!t.errors?n("HelperText",[t._v(t._s(t.helperText))]):t._e()],1)}),[],!1,null,null,null);e.a=u.exports},27:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var s=n(66);function r(t){var e=t.title,n=t.message,r=t.onConfirm;return s.a.dispatch("confirmDelete/open",{title:e,message:n,onConfirm:function(){r(),s.a.dispatch("confirmDelete/close")}})}},36:function(t,e,n){"use strict";n.r(e);var s=n(39),r=n(40),o=n(41),a=n(42),i={components:{TopBar:s.a,Breadcrumbs:r.a,TabBar:o.a,TopBarTabBarContainer:a.a},props:{breadcrumbs:Array},data:function(){return{tabBars:[{title:this.__("Dashboard"),to:this.route("dashboard"),active:this.route().current("dashboard")},{title:this.__("Sites"),to:this.route("sites.index"),active:this.route().current("sites.*")},{title:"Servers",to:this.route("servers.index")}]}}},l=n(0),u=Object(l.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("TopBar",{scopedSlots:t._u([{key:"breadcrumbs",fn:function(){return[n("Breadcrumbs",{attrs:{items:t.breadcrumbs}})]},proxy:!0},{key:"tab-bar",fn:function(){return[n("TopBarTabBarContainer",[n("TabBar",{attrs:{items:t.tabBars}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=u.exports},39:function(t,e,n){"use strict";var s=n(1),r=n(48),o=n(49),a=n(50),i=n(0),l=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-moon",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"}})])}),[],!1,null,null,null).exports,u=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-sun",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"}}),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"}})])}),[],!1,null,null,null).exports,c=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-search",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}}),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"}})])}),[],!1,null,null,null).exports,d=n(51),p={components:{Container:s.a,Dropdown:r.a,DropdownList:o.a,DropdownListItem:a.a,IconMoon:l,IconSearch:c,IconSun:u,IconButton:d.a},data:function(){return{themeMode:this.$page.props.auth.user.theme}},mounted:function(){this.setDarkMode()},methods:{toggleTheme:function(){var t=this;window.axios.post("/profile/toggle-theme").then((function(e){t.themeMode=e.data,t.setDarkMode()}))},setDarkMode:function(){"auto"===this.themeMode?this.checkDarkMode()?document.documentElement.classList.add("theme--dark"):document.documentElement.classList.remove("theme--dark"):"dark"===this.themeMode?document.documentElement.classList.add("theme--dark"):document.documentElement.classList.remove("theme--dark")},checkDarkMode:function(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches},triggerSearch:function(){window.eventBus.$emit("openSearch")}}},m=Object(i.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"sticky top-0 border-b border-low-emphasis bg-top-bar z-30"},[n("div",{staticClass:"w-full px-4 sm:px-8 mx-auto max-w-top-bar-container"},[n("div",{staticClass:"flex flex-col"},[n("nav",{staticClass:"flex flex-col items-center justify-between py-4 space-y-4 md:space-y-0 md:flex-row text-top-bar"},[n("div",{staticClass:"flex items-center space-x-5"},[t.$page.props.settings.logo?n("img",{staticClass:"h-top-bar-logo",attrs:{src:t.$page.props.settings.logo}}):t._e(),t._v(" "),t._t("breadcrumbs")],2),t._v(" "),n("ul",{staticClass:"flex items-center space-x-4"},[n("li",{attrs:{"aria-label":t.__("Search"),"data-balloon-blunt":"","data-balloon-pos":"down"}},[n("IconButton",{on:{click:t.triggerSearch}},[n("IconSearch",{staticClass:"text-top-bar"})],1)],1),t._v(" "),n("li",{attrs:{"aria-label":"light"===t.themeMode?t.__("Enable dark mode"):t.__("Enable light mode"),"data-balloon-blunt":"","data-balloon-pos":"down"}},[n("IconButton",{on:{click:t.toggleTheme}},["light"===t.themeMode?n("IconMoon",{staticClass:"text-top-bar"}):t._e(),t._v(" "),"dark"===t.themeMode?n("IconSun",{staticClass:"text-top-bar"}):t._e()],1)],1),t._v(" "),n("li",[n("Dropdown",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.toggle,r=e.isOpen;return[n("button",{staticClass:"flex h-auto m-0 appearance-none items-center",on:{click:s}},[n("span",[t._v(t._s(t.$page.props.auth.user.name))]),t._v(" "),n("img",{staticClass:"ml-2 inline w-8 h-8 rounded-avatar bg-surface-2",attrs:{src:t.$page.props.auth.user.avatar,alt:t.$page.props.auth.user.name}})]),t._v(" "),r?n("DropdownList",[t.$page.props.settings.support?n("DropdownListItem",{attrs:{to:"/support"}},[t._v(t._s(t.__("Support"))+"\n                                ")]):t._e(),t._v(" "),t.$page.props.settings.documentation?n("DropdownListItem",{attrs:{to:"/documentation"}},[t._v(t._s(t.__("Documentation")))]):t._e(),t._v(" "),n("DropdownListItem",{attrs:{to:t.route("profile.index")}},[t._v(t._s(t.__("Profile"))+"\n                                ")]),t._v(" "),t.$page.props.settings.billing?n("DropdownListItem",{attrs:{to:t.route("profile.billing.index")}},[t._v(t._s(t.__("Billing"))+"\n                                ")]):t._e(),t._v(" "),"admin"===t.$page.props.auth.user.role?n("DropdownListItem",{staticClass:"text-danger",attrs:{to:t.route("admin.dashboard")}},[t._v(t._s(t.__("Administration"))+"\n                                ")]):t._e(),t._v(" "),n("DropdownListItem",{attrs:{to:t.route("logout"),method:"post"}},[t._v(t._s(t.__("Sign out"))+"\n                                ")])],1):t._e()]}}])})],1)])]),t._v(" "),t._t("tab-bar")],2)])])}),[],!1,null,null,null);e.a=m.exports},40:function(t,e,n){"use strict";var s={props:{to:{type:String,required:!0}}},r=n(0),o={components:{BreadcrumbsItem:Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("inertia-link",{staticClass:"font-medium text-body text-breadcrumbs",attrs:{href:this.to}},[this._t("default")],2)}),[],!1,null,null,null).exports},props:{items:{type:Array,required:!0}}},a=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"flex items-center space-x-2"},t._l(t.items,(function(e,s){return n("li",{key:e.title},[n("BreadcrumbsItem",{attrs:{to:e.to}},[t._v(t._s(e.title))]),t._v(" "),s<t.items.length-1?n("span",{staticClass:"ml-2 text-low-emphasis"},[t._v("/")]):t._e()],1)})),0)}),[],!1,null,null,null);e.a=a.exports},41:function(t,e,n){"use strict";var s={props:{to:{type:String,required:!0},active:{type:Boolean,default:!1}},data:function(){return{baseClasses:"inline-flex items-center justify-center h-10 px-6 font-medium rounded text-small text-tab-bar",activeClasses:"shadow text-tab-bar-active bg-tab-bar-item",transitionClasses:"transition duration-fast hover:text-high-emphasis focus:text-high-emphasis"}}},r=n(0),o={components:{TabBarItem:Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("inertia-link",{class:[this.baseClasses,this.transitionClasses,this.active?this.activeClasses:null],attrs:{href:this.to}},[this._t("default")],2)],1)}),[],!1,null,null,null).exports},props:{items:{type:Array,required:!0}}},a=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"inline-flex flex-row p-1 overflow-hidden overflow-x-auto whitespace-no-wrap rounded bg-tab-bar"},t._l(t.items,(function(e){return e?n("TabBarItem",{key:e.title,attrs:{to:e.to,active:e.active}},[t._v("\n        "+t._s(e.title)+"\n    ")]):t._e()})),1)}),[],!1,null,null,null);e.a=a.exports},42:function(t,e,n){"use strict";var s=n(0),r=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("nav",{staticClass:"flex items-center justify-center pb-4"},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},48:function(t,e,n){"use strict";var s={data:function(){return{isOpen:!1,position:"top"}},methods:{open:function(){this.isOpen=!0,this.calculatePosition()},close:function(){this.isOpen=!1,this.calculatePosition()},toggle:function(){this.isOpen=!this.isOpen,this.calculatePosition()},outsideClickListener:function(t){this.$refs.dropdown!==t.target.closest(this.$refs.dropdown.tagName)&&this.close()},calculatePosition:function(){this.$refs.dropdown.getBoundingClientRect().top>.75*window.innerHeight?this.position="bottom":this.position="top"}},mounted:function(){window.addEventListener("click",this.outsideClickListener)},beforeDestroy:function(){window.removeEventListener("click",this.outsideClickListener)}},r=n(0),o=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:this.close,expression:"close"}],ref:"dropdown",staticClass:"relative"},[this._t("default",null,null,{isOpen:this.isOpen,open:this.open,close:this.close,toggle:this.toggle,position:this.position})],2)}),[],!1,null,null,null);e.a=o.exports},49:function(t,e,n){"use strict";var s={top:"right-0 top-0 mt-8",bottom:"right-0 bottom-0 mb-8"},r={props:{position:{type:String,default:function(){return"top"},validator:function(t){return Object.keys(s).includes(t)}}},computed:{positionClasses:function(){return s[this.position]}}},o=n(0),a=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["absolute flex flex-col py-1 overflow-hidden rounded shadow-2xl z-20 bg-surface-1",this.positionClasses]},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},50:function(t,e,n){"use strict";var s={props:{to:{type:String,required:!0},method:{required:!1,default:"get"}}},r=n(0),o=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("inertia-link",{staticClass:"flex items-center w-full h-10 px-6 whitespace-no-wrap text-medium-emphasis text-small focus:bg-primary focus:text-on-primary hover:text-high-emphasis focus:outline-none",attrs:{href:this.to,method:this.method}},[this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},51:function(t,e,n){"use strict";var s=n(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"inline-flex items-center justify-center w-10 h-10 text-medium-emphasis rounded-circle focus:outline-none focus:text-high-emphasis",on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,null,null);e.a=r.exports}}]);