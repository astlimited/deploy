(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{13:function(t,e,a){"use strict";var r=a(56),l=a(55),s=a(57),n=a(68),i=a(77),o=a(78),u={props:{id:{type:String,required:!1},label:{type:String,required:!0},type:{type:String,default:function(){return"text"}},required:{type:Boolean,default:function(){return!1}},errors:{type:Array},helperText:{type:String},placeholder:{type:String},value:{required:!1,default:""},allowCopy:{required:!1,default:!1,type:Boolean},allowRandomString:{required:!1,default:!1,type:Boolean},loading:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},components:{FormGroup:r.a,Label:l.a,ErrorText:s.a,HelperText:n.a,IconClipboard:i.a,IconKey:o.a},data:function(){return{defaultClasses:"w-full border-medium-emphasis text-body h-10 px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary",copied:!1}},watch:{copied:function(){var t=this;this.copied&&setTimeout((function(){t.copied=!1}),1250)}},methods:{updateValue:function(t){this.$emit("input",t)},copy:function(){this.copied=!0,this.$copyText(this.value)},generateString:function(){this.$emit("input",this.randomString())}},computed:{copyText:function(){return this.copied?this.__("Copied to clipboard"):this.__("Copy")}}},c=a(0),d=Object(c.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("FormGroup",{staticClass:"relative max-w-lg"},[a("Label",{attrs:{errors:t.errors,forId:t.id}},[t._v(t._s(t.label))]),t._v(" "),t.allowCopy?a("button",{staticClass:"flex items-center right-0 absolute text-xs text-medium-emphasis",attrs:{type:"button"},on:{click:t.copy}},[a("IconClipboard",{staticClass:"mr-2"}),t._v("\n        "+t._s(t.copyText)+"\n    ")],1):t._e(),t._v(" "),t.allowRandomString?a("button",{staticClass:"flex items-center right-0 absolute text-xs text-medium-emphasis",attrs:{type:"button"},on:{click:t.generateString}},[a("IconKey",{staticClass:"mr-2"}),t._v("\n        "+t._s(t.__("Generate"))+"\n    ")],1):t._e(),t._v(" "),a("input",{class:[t.defaultClasses,t.disabled||t.loading?"opacity-50":"",t.loading?"cursor-wait":""],attrs:{id:t.id,type:t.type,required:t.required,disabled:t.loading||t.disabled,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.updateValue(e.target.value)}}}),t._v(" "),t.errors?a("ErrorText",[t._v(t._s(t.errors[0]))]):t._e(),t._v(" "),t.helperText&&!t.errors?a("HelperText",[t._v(t._s(t.helperText))]):t._e()],1)}),[],!1,null,null,null);e.a=d.exports},14:function(t,e,a){"use strict";var r={props:{justify:{type:String,default:"justify-start"}}},l=a(0),s=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"flex items-center space-x-2",class:[this.justify]},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},160:function(t,e,a){"use strict";a.r(e);var r=a(72),l=a(1),s=a(6),n=a(7),i=a(8),o=a(9),u=a(10),c=a(2),d=a(35),p=a(11),f=a(12),m=a(4),h=a(5),v=a(3),_=a(33),x=a(28),b=a(29),g=a(32),w=a(34),y=a(13),C=a(30),z=a(14),$={metaInfo:function(){return{title:"".concat(this.__("Documentation"))}},layout:v.a,components:{TopBar:r.default,Container:l.a,Content:s.a,Page:n.a,PageHeader:i.a,PageHeaderTitle:o.a,PageBody:u.a,Button:c.a,List:p.a,ListItem:f.a,StatusBubble:m.a,NotificationBadge:h.a,IconBox:_.a,IconGlobe:x.a,IconStorage:b.a,Modal:g.a,ModalContainer:w.a,FormInput:y.a,FormTextarea:C.a,FormActions:z.a,EmptyImage:d.a},props:{items:Object},data:function(){return{breadcrumbs:[{title:this.$page.props.settings.name,to:"/"},{title:this.__("Documentation"),to:this.route("documentation.index")}]}}},A=a(0),E=Object(A.a)($,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Page",[a("TopBar",{attrs:{breadcrumbs:t.breadcrumbs}}),t._v(" "),a("Content",[a("Container",[a("PageHeader",{scopedSlots:t._u([{key:"start",fn:function(){return[a("PageHeaderTitle",[t._v(t._s(t.__("Documentation")))])]},proxy:!0}])}),t._v(" "),a("PageBody",[t.items.meta.total?t._e():a("EmptyImage"),t._v(" "),a("List")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=E.exports},18:function(t,e,a){"use strict";var r=a(0),l=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{staticClass:"space-y-4",on:{submit:function(e){return e.preventDefault(),t.$emit("submit")}}},[t._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},28:function(t,e,a){"use strict";var r=a(0),l=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M1.018 7.5h2.49c.037-1.07.189-2.087.437-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5zM3.05 3.049c.362.184.763.349 1.198.49.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-.5 1.077c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.473.257 2.282.287V1.077zm0 4.014c-.91-.03-1.783-.145-2.591-.332a12.344 12.344 0 0 0-.4 2.741H7.5V5.091zm1 2.409V5.091c.91-.03 1.783-.145 2.591-.332.223.827.364 1.754.4 2.741H8.5zm-1 1H4.51c.035.987.176 1.914.399 2.741A13.596 13.596 0 0 1 7.5 10.91V8.5zm1 2.409V8.5h2.99a12.343 12.343 0 0 1-.399 2.741A13.596 13.596 0 0 0 8.5 10.91zm-1 1c-.81.03-1.577.13-2.282.287.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91zm-2.173 2.563a6.695 6.695 0 0 1-.597-.933 8.857 8.857 0 0 1-.481-1.078 8.356 8.356 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.52zM2.38 12.175c.47-.258.995-.482 1.565-.667A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.964 6.964 0 0 0 1.362 3.675zm8.293 2.297a7.01 7.01 0 0 0 2.275-1.521 8.353 8.353 0 0 0-1.197-.49 8.859 8.859 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zm.11-2.276A12.63 12.63 0 0 0 8.5 11.91v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872zm1.272-.688c.57.185 1.095.409 1.565.667A6.964 6.964 0 0 0 14.982 8.5h-2.49a13.355 13.355 0 0 1-.437 3.008zm.437-4.008h2.49a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zm-.74-3.96a8.854 8.854 0 0 0-.482-1.079 6.692 6.692 0 0 0-.597-.933c.857.355 1.63.875 2.275 1.521a8.368 8.368 0 0 1-1.197.49zm-.97.264c-.705.157-1.473.257-2.282.287V1.077c.67.204 1.335.82 1.887 1.855.143.268.276.56.395.872z"}})])}),[],!1,null,null,null);e.a=l.exports},29:function(t,e,a){"use strict";var r=a(0),l=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M14 9H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM2 8a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z"}}),this._v(" "),e("path",{attrs:{d:"M5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"}}),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M4.094 4a.5.5 0 0 0-.44.26l-2.47 4.532A1.5 1.5 0 0 0 1 9.51v.99H0v-.99c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198v.99h-1v-.99a1.5 1.5 0 0 0-.183-.718L12.345 4.26a.5.5 0 0 0-.439-.26H4.094z"}})])}),[],!1,null,null,null);e.a=l.exports},30:function(t,e,a){"use strict";var r=a(56),l=a(55),s=a(57),n={props:{id:{type:String,required:!1},label:{type:String,required:!0},required:{type:Boolean,default:function(){return!1}},errors:{type:Array},placeholder:{type:String},value:{required:!1,default:""},rows:{default:3,required:!1}},components:{FormGroup:r.a,Label:l.a,ErrorText:s.a},data:function(){return{defaultClasses:"w-full border-medium-emphasis text-body max-w-lg px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary"}},methods:{updateValue:function(t){this.$emit("input",t)}}},i=a(0),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("FormGroup",[a("Label",{attrs:{errors:t.errors,forId:t.id}},[t._v(t._s(t.label))]),t._v(" "),a("textarea",{class:[t.defaultClasses],attrs:{id:t.id,required:t.required,rows:t.rows,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.updateValue(e.target.value)}}}),t._v(" "),t.errors?a("ErrorText",[t._v(t._s(t.errors[0]))]):t._e()],1)}),[],!1,null,null,null);e.a=o.exports},32:function(t,e,a){"use strict";var r=a(69),l=a(14),s=a(18),n={components:{IconClose:r.a,FormActions:l.a,Form:s.a}},i=a(0),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){return t.$emit("close")},expression:"() => $emit('close')"}],staticClass:"relative w-full h-full max-w-lg p-8 rounded shadow-2xl pointer-events-auto bg-overlay bf-blur"},[a("button",{staticClass:"absolute top-0 right-0 flex items-center justify-center w-12 h-12",on:{click:function(e){return t.$emit("close")}}},[a("IconClose",{staticClass:"w-8 h-8 text-low-emphasis"})],1),t._v(" "),a("Form",{on:{submit:function(e){return t.$emit("submit")}}},[a("div",[a("h2",{staticClass:"font-medium text-title"},[t._t("title")],2),t._v(" "),a("p",{staticClass:"text-medium-emphasis"},[t._t("subtitle")],2)]),t._v(" "),t._t("form"),t._v(" "),a("FormActions",[t._t("form-actions")],2)],2)],1)}),[],!1,null,null,null);e.a=o.exports},33:function(t,e,a){"use strict";var r=a(0),l=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"}})])}),[],!1,null,null,null);e.a=l.exports},34:function(t,e,a){"use strict";var r=a(0),l=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fixed inset-0 z-50 flex flex-col items-end w-full h-screen p-6 pointer-events-none"},[e("Transition",{attrs:{"enter-active-class":"transition ease-out transform duration-slow","enter-class":"scale-95 translate-x-full","enter-to-class":"scale-100 translate-x-0","leave-active-class":"transition ease-out transform duration-slow","leave-class":"scale-95 translate-x-0","leave-to-class":"scale-95 translate-x-full"}},[this._t("default")],2)],1)}),[],!1,null,null,null);e.a=l.exports},35:function(t,e,a){"use strict";var r=a(0),l=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"w-32 md:w-48 m-auto",attrs:{src:"/images/empty.png"}})}),[],!1,null,null,null);e.a=l.exports},55:function(t,e,a){"use strict";var r={props:{forId:{type:String,required:!1},errors:{type:Array}}},l=a(0),s=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("label",{class:["text-small"],attrs:{for:this.forId}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},56:function(t,e,a){"use strict";var r=a(0),l=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"flex flex-col space-y-1"},[this._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},57:function(t,e,a){"use strict";var r=a(0),l=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"text-danger"},[this._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},68:function(t,e,a){"use strict";var r=a(0),l=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"text-medium-emphasis text-small"},[this._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},69:function(t,e,a){"use strict";var r=a(0),l=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"}}),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"}})])}),[],!1,null,null,null);e.a=l.exports},77:function(t,e,a){"use strict";var r=a(0),l=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-clipboard",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}}),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"}})])}),[],!1,null,null,null);e.a=l.exports},78:function(t,e,a){"use strict";var r=a(0),l=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-key",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"}}),this._v(" "),e("path",{attrs:{d:"M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}})])}),[],!1,null,null,null);e.a=l.exports}}]);