import{C as i}from"./HardwareInstallation-a0083e3a.js";import{_ as m,u as o,k as p,l as u,D as t,N as _,y as d}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceSunnyBoyBatSmartEnergy",mixins:[i]},l={class:"device-sunnyboy-bat-smart-energy"};function b(e,n,f,y,g,v){const s=o("openwb-base-heading"),a=o("openwb-base-number-input");return p(),u("div",l,[t(s,null,{default:_(()=>[d(" Einstellungen für SMA Sunny Boy Smart Energy Batteriespeicher ")]),_:1}),t(a,{title:"Modbus ID",required:"","model-value":e.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":n[0]||(n[0]=r=>e.updateConfiguration(r,"configuration.modbus_id"))},null,8,["model-value"])])}const D=m(c,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sma/sma_sunny_boy/bat_smart_energy.vue"]]);export{D as default};
