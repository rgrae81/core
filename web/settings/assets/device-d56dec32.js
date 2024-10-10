import{D as m}from"./HardwareInstallation-9c1cfe5a.js";import{_ as v,u as t,k as i,l as f,G as a,E as c,y as b,z as u,B as s}from"./vendor-88a3d381.js";import"./vendor-fortawesome-2ab93053.js";import"./index-d7731c53.js";import"./vendor-bootstrap-6598ffd1.js";import"./vendor-jquery-536f4487.js";import"./vendor-axios-29ac7e52.js";import"./vendor-sortablejs-f1eda7cf.js";import"./dynamic-import-helper-be004503.js";const g={name:"DeviceAlphaess",mixins:[m]},_={class:"device-alphaess"};function w(e,o,V,C,k,B){const d=t("openwb-base-heading"),r=t("openwb-base-select-input"),p=t("openwb-base-text-input"),l=t("openwb-base-number-input");return i(),f("div",_,[a(d,null,{default:c(()=>o[5]||(o[5]=[b(" Einstellungen für Alpha ESS ")])),_:1}),a(r,{title:"Ausleseart","not-selected":"Bitte auswählen",required:"",options:[{value:0,text:"Alpha ESS-Kit"},{value:1,text:"Hi 5/10"}],"model-value":e.device.configuration.source,"onUpdate:modelValue":o[0]||(o[0]=n=>e.updateConfiguration(n,"configuration.source"))},null,8,["model-value"]),e.device.configuration.source==1?(i(),u(p,{key:0,title:"IP oder Hostname",subtype:"host",required:"","model-value":e.device.configuration.ip_address,"onUpdate:modelValue":o[1]||(o[1]=n=>e.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"])):s("",!0),e.device.configuration.source==1?(i(),u(l,{key:1,title:"Port",subtype:"host",required:"",min:1,max:65535,"model-value":e.device.configuration.port,"onUpdate:modelValue":o[2]||(o[2]=n=>e.updateConfiguration(n,"configuration.port"))},null,8,["model-value"])):s("",!0),e.device.configuration.source==1?(i(),u(l,{key:2,title:"Modbus ID",required:"","model-value":e.device.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":o[3]||(o[3]=n=>e.updateConfiguration(n,"configuration.modbus_id"))},null,8,["model-value"])):s("",!0),a(r,{title:"Firmware Version","not-selected":"Bitte auswählen",required:"",options:[{value:0,text:"EMS älter als 1.23V"},{value:1,text:"EMS 1.23V oder neuer"}],"model-value":e.device.configuration.version,"onUpdate:modelValue":o[4]||(o[4]=n=>e.updateConfiguration(n,"configuration.version"))},null,8,["model-value"])])}const h=v(g,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/alpha_ess/alpha_ess/device.vue"]]);export{h as default};