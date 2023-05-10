import{_ as c,q as d,l as p,m,A as o,K as t,v as a,u as f,x as _}from"./vendor-b78ff8c0.js";import"./vendor-sortablejs-116030fd.js";const g={name:"VehicleSocSkodaconnect",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},vehicleId:{required:!0}},data(){return{}},methods:{updateConfiguration(i,e=void 0){this.$emit("update:configuration",{value:i,object:e})}}},v={class:"vehicle-soc-skodaconnect"},b={class:"small"};function h(i,e,r,w,C,s){const l=d("openwb-base-heading"),u=d("openwb-base-text-input");return p(),m("div",v,[o(l,null,{default:t(()=>[a(" Einstellungen für Skoda iV SoC "),f("span",b,"(Modul: "+_(i.$options.name)+")",1)]),_:1}),o(u,{title:"Benutzername",required:"",subtype:"user","model-value":r.configuration.user_id,"onUpdate:modelValue":e[0]||(e[0]=n=>s.updateConfiguration(n,"configuration.user_id"))},{help:t(()=>[a(" Der Benutzername für die Anmeldung an den SkodaConnect-Servern. ")]),_:1},8,["model-value"]),o(u,{title:"Kennwort",required:"",subtype:"password","model-value":r.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=n=>s.updateConfiguration(n,"configuration.password"))},{help:t(()=>[a(" Das Passwort für die Anmeldung an den SkodaConnect-Servern. ")]),_:1},8,["model-value"]),o(u,{title:"VIN",required:"","model-value":r.configuration.vin,"onUpdate:modelValue":e[2]||(e[2]=n=>s.updateConfiguration(n,"configuration.vin"))},{help:t(()=>[a(" Die Fahrgestellnummer des Fahrzeugs. ")]),_:1},8,["model-value"])])}const k=c(g,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/skodaconnect/vehicle.vue"]]);export{k as default};
