import{C as d}from"./HardwareInstallation-a0083e3a.js";import{_ as u,u as l,k as p,l as m,D as o,N as a,y as r,x as g}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const f={name:"DeviceJsonBat",mixins:[d]},b={class:"device-json-bat"},c=g("br",null,null,-1);function w(e,t,_,v,j,h){const s=l("openwb-base-heading"),i=l("openwb-base-text-input");return p(),m("div",b,[o(s,null,{default:a(()=>[r(" Einstellungen für JSON Batteriespeicher ")]),_:1}),o(i,{title:"Abfrage für Leistung",subtype:"text",required:"","model-value":e.component.configuration.jq_power,"onUpdate:modelValue":t[0]||(t[0]=n=>e.updateConfiguration(n,"configuration.jq_power"))},{help:a(()=>[r(' Zur Analyse der Werte aus dem json-Objekt wird jq benutzt. Ist die Json Antwort z.B. {"PowerInstalledPeak":4655, "PowerProduced":132, "PowerOut":897.08172362555717, "PowerSelfSupplied":234.9182763744428} So muss hier .PowerOut eingetragen werden. '),c,r(" Es wird vom Server eine Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen erwartet, welche die aktuelle Leistung in Watt (positiv Ladung, negativ Entladung) darstellt. ")]),_:1},8,["model-value"]),o(i,{title:"Abfrage für Ladestand",subtype:"text",required:"","model-value":e.component.configuration.jq_soc,"onUpdate:modelValue":t[1]||(t[1]=n=>e.updateConfiguration(n,"configuration.jq_soc"))},null,8,["model-value"]),o(i,{title:"Abfrage für Zählerstand Ladung",subtype:"text","model-value":e.component.configuration.jq_imported,"onUpdate:modelValue":t[2]||(t[2]=n=>e.updateConfiguration(n,"configuration.jq_imported"))},{help:a(()=>[r(" Wird dieses Feld leer gelassen, dann werden Zählerstände intern simuliert. ")]),_:1},8,["model-value"]),o(i,{title:"Abfrage für Zählerstand Entladung",subtype:"text","model-value":e.component.configuration.jq_exported,"onUpdate:modelValue":t[3]||(t[3]=n=>e.updateConfiguration(n,"configuration.jq_exported"))},{help:a(()=>[r(" Wird dieses Feld leer gelassen, dann werden Zählerstände intern simuliert. ")]),_:1},8,["model-value"])])}const N=u(f,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/generic/json/bat.vue"]]);export{N as default};
