import{_ as c,q as n,k as p,l as d,B as a,M as o,x as s,u,y as _}from"./vendor-c0ce7727.js";import"./vendor-sortablejs-4bc62cd6.js";const l={name:"DeviceVartaAPIBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-varta-bat"},m={class:"small"};function b(e,t,g,v,h,B){const i=n("openwb-base-heading"),r=n("openwb-base-alert");return p(),d("div",f,[a(i,null,{default:o(()=>[s(" Einstellungen für Varta API Batteriespeicher "),u("span",m,"(Modul: "+_(e.$options.name)+")",1)]),_:1}),a(r,{subtype:"info"},{default:o(()=>[s(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const x=c(l,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/varta/bat_api.vue"]]);export{x as default};