import{C as p}from"./ChargePointInstallation-fba1b24e.js";import{_ as s,u as t,k as u,l as m,D as i,N as d,y as l}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const c={name:"ChargePointExternalOpenwb",mixins:[p]},_={class:"charge-point-external-openwb"};function g(e,n,b,f,h,w){const r=t("openwb-base-text-input"),a=t("openwb-base-number-input");return u(),m("div",_,[i(r,{title:"IP oder Hostname",subtype:"host",required:"","model-value":e.chargePoint.configuration.ip_address,"onUpdate:modelValue":n[0]||(n[0]=o=>e.updateConfiguration(o,"configuration.ip_address"))},null,8,["model-value"]),i(a,{title:"Ladepunkt-Nummer",required:"",min:1,max:2,"model-value":e.chargePoint.configuration.duo_num+1,"onUpdate:modelValue":n[1]||(n[1]=o=>e.updateConfiguration(o-1,"configuration.duo_num"))},{help:d(()=>[l(' Bei einfachen Ladepunkten ist hier immer eine "1" einzutragen. Lediglich bei einer openWB Duo kann mit "2" der zweite enthaltene Ladepunkt angesprochen werden. ')]),_:1},8,["model-value"])])}const $=s(c,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/external_openwb/chargePoint.vue"]]);export{$ as default};