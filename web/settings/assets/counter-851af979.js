import{C as s}from"./HardwareInstallation-a0083e3a.js";import{_ as d,u as r,k as m,l as g,D as t,N as l,y as a}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceVZLoggerCounter",mixins:[s]},f={class:"device-vzlogger-counter"};function _(e,n,b,v,w,Z){const u=r("openwb-base-heading"),p=r("openwb-base-alert"),i=r("openwb-base-number-input");return m(),g("div",f,[t(u,null,{default:l(()=>[a(" Einstellungen für VZLogger Zähler ")]),_:1}),t(p,{subtype:"info"},{default:l(()=>[a(' Bitte auf der Shell ausführen: "curl -s IPdesVZLogger:Port | jq .|cat -n" Zählen, in welcher Zeile der gesuchte Wert steht. Bei der ersten Zeile mit 1 anfangen zu zählen. ')]),_:1}),t(i,{title:"Zeile der Leistung",required:"",min:0,"model-value":e.component.configuration.line_power,"onUpdate:modelValue":n[0]||(n[0]=o=>e.updateConfiguration(o,"configuration.line_power"))},null,8,["model-value"]),t(i,{title:"Zeile der Einspeisung",min:0,"model-value":e.component.configuration.line_exported,"onUpdate:modelValue":n[1]||(n[1]=o=>e.updateConfiguration(o,"configuration.line_exported"))},null,8,["model-value"]),t(i,{title:"Zeile des Bezugs",min:0,"model-value":e.component.configuration.line_imported,"onUpdate:modelValue":n[2]||(n[2]=o=>e.updateConfiguration(o,"configuration.line_imported"))},null,8,["model-value"])])}const E=d(c,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/vzlogger/vzlogger/counter.vue"]]);export{E as default};
