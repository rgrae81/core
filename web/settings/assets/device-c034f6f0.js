import{D as a}from"./HardwareInstallation-a0083e3a.js";import{_ as p,u as o,k as c,l as d,D as t,N as l,y as u}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const m={name:"DeviceBenning",mixins:[a]},_={class:"device-benning"};function f(e,n,b,g,v,x){const i=o("openwb-base-heading"),s=o("openwb-base-text-input");return c(),d("div",_,[t(i,null,{default:l(()=>[u("Einstellungen für Benning")]),_:1}),t(s,{title:"IP oder Hostname",subtype:"host",required:"","model-value":e.device.configuration.url,"onUpdate:modelValue":n[0]||(n[0]=r=>e.updateConfiguration(r,"configuration.url"))},null,8,["model-value"])])}const y=p(m,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/benning/benning/device.vue"]]);export{y as default};
