(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{0:function(e,t,i){"use strict";function n(e,t,i,n,r,s,o,a){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=i,d._compiled=!0),n&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=c):r&&(c=a?function(){r.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(d.functional){d._injectStyles=c;var u=d.render;d.render=function(e,t){return c.call(t),u(e,t)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:d}}i.d(t,"a",(function(){return n}))},38:function(e,t,i){"use strict";i.r(t);var n={data:function(){return{items:[{title:this.__("Overview"),to:this.route("admin.services.index"),active:this.route().current("admin.services.index")},{title:this.__("Synchronize servers"),to:this.route("admin.services.servers.index"),active:this.route().current("admin.services.servers.index")},{title:this.__("Synchronize providers"),to:this.route("admin.services.providers.index"),active:this.route().current("admin.services.providers.index")}]}}},r=i(0),s=Object(r.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",{staticClass:"-ml-4 space-y-1"},e._l(e.items,(function(t){return i("li",[i("inertia-link",{staticClass:"flex items-center h-10 px-4 font-medium text-medium-emphasis",class:{"rounded shadow text-primary bg-surface-3":t.active},attrs:{href:t.to}},[e._v(e._s(t.title)+" "+e._s(t.route))])],1)})),0)}),[],!1,null,null,null);t.default=s.exports}}]);