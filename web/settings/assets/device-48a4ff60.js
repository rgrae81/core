import{_ as r,q as u,l,m as c,A as n,K as p,v as m,u as f,x as v}from"./vendor-2323dc6c.js";import"./vendor-sortablejs-43c17404.js";const _={name:"DeviceDiscovergy",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},g={class:"device-discovergy"},b={class:"small"};function w(o,e,s,y,x,a){const d=u("openwb-base-heading"),i=u("openwb-base-text-input");return l(),c("div",g,[n(d,null,{default:p(()=>[m(" Einstellungen für Discovergy "),f("span",b,"(Modul: "+v(o.$options.name)+")",1)]),_:1}),n(i,{title:"Benutzername",subtype:"user",required:"","model-value":s.configuration.user,"onUpdate:modelValue":e[0]||(e[0]=t=>a.updateConfiguration(t,"configuration.user"))},null,8,["model-value"]),n(i,{title:"Passwort",subtype:"password",required:"","model-value":s.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=t=>a.updateConfiguration(t,"configuration.password"))},null,8,["model-value"])])}const V=r(_,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/discovergy/device.vue"]]);export{V as default};