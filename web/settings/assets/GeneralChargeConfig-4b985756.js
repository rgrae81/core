import{_ as g,C}from"./index-b0e5e618.js";import{_ as T}from"./dynamic-import-helper-be004503.js";import{_ as b,u as o,k as l,l as s,D as n,N as a,y as r,z as h,x as d,a2 as E,A as k,a3 as V,J as P,B as W}from"./vendor-f2b8aa6f.js";const L={emits:["update:configuration"],props:{electricityTariff:{type:Object,required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},q=b(L,[["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/ElectricityTariffConfigMixin.vue"]]),M={name:"ElectricityTariffConfigFallback",mixins:[q]},O={class:"backup-cloud-fallback"};function A(e,t,c,v,y,p){const u=o("openwb-base-alert"),f=o("openwb-base-textarea");return l(),s("div",O,[n(u,{subtype:"warning"},{default:a(()=>[r(' Es wurde keine Konfigurationsseite für den Anbieter "'+h(e.electricityTariff.name)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(f,{title:"Konfiguration",subtype:"json","model-value":e.electricityTariff.configuration,"onUpdate:modelValue":t[0]||(t[0]=m=>e.updateConfiguration(m,"configuration"))},{help:a(()=>[r(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")]),_:1},8,["model-value"]),n(u,{subtype:"info"},{default:a(()=>[d("pre",null,h(JSON.stringify(e.electricityTariff.configuration,void 0,2)),1)]),_:1})])}const U=b(M,[["render",A],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/OpenwbElectricityTariffConfigFallback.vue"]]),F={name:"OpenwbElectricityTariffProxy",emits:["update:configuration"],props:{electricityTariff:{type:Object,required:!0}},computed:{myComponent(){return console.debug(`loading electricity tariff cloud: ${this.electricityTariff.type}`),E({loader:()=>T(Object.assign({"./awattar/electricity_tariff.vue":()=>g(()=>import("./electricity_tariff-c641235d.js"),["assets/electricity_tariff-c641235d.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/index-b0e5e618.js","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/dynamic-import-helper-be004503.js"]),"./energycharts/electricity_tariff.vue":()=>g(()=>import("./electricity_tariff-8c65c060.js"),["assets/electricity_tariff-8c65c060.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/index-b0e5e618.js","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/dynamic-import-helper-be004503.js"]),"./rabot/electricity_tariff.vue":()=>g(()=>import("./electricity_tariff-bc229946.js"),["assets/electricity_tariff-bc229946.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/index-b0e5e618.js","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/dynamic-import-helper-be004503.js"]),"./tibber/electricity_tariff.vue":()=>g(()=>import("./electricity_tariff-86994943.js"),["assets/electricity_tariff-86994943.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/index-b0e5e618.js","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/dynamic-import-helper-be004503.js"]),"./voltego/electricity_tariff.vue":()=>g(()=>import("./electricity_tariff-921487ff.js"),["assets/electricity_tariff-921487ff.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/index-b0e5e618.js","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/dynamic-import-helper-be004503.js"])}),`./${this.electricityTariff.type}/electricity_tariff.vue`),errorComponent:U})}},methods:{updateConfiguration(e){this.$emit("update:configuration",e)}}};function D(e,t,c,v,y,p){const u=o("openwb-base-heading");return l(),s(P,null,[n(u,null,{default:a(()=>[r(' Einstellungen für Modul "'+h(c.electricityTariff.name)+'" ',1)]),_:1}),(l(),k(V(p.myComponent),{electricityTariff:c.electricityTariff,"onUpdate:configuration":t[0]||(t[0]=f=>p.updateConfiguration(f))},null,40,["electricityTariff"]))],64)}const N=b(F,[["render",D],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/OpenwbElectricityTariffProxy.vue"]]),I={name:"OpenwbGeneralChargeConfigView",mixins:[C],components:{OpenwbElectricityTariffProxy:N},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/phase_switch_delay","openWB/general/chargemode_config/retry_failed_phase_switches","openWB/general/chargemode_config/unbalanced_load","openWB/general/chargemode_config/unbalanced_load_limit","openWB/general/prices/bat","openWB/general/prices/grid","openWB/general/prices/pv","openWB/optional/et/provider","openWB/system/configurable/electricity_tariffs"]}},computed:{electricityTariffList(){return this.$store.state.mqtt["openWB/system/configurable/electricity_tariffs"]}},methods:{getElectricityTariffDefaultConfiguration(e){const t=this.electricityTariffList.find(c=>c.value==e);return Object.prototype.hasOwnProperty.call(t,"defaults")?{...t.defaults}:(console.warn("no default configuration found for electricity tariff type!",e),{})},updateSelectedElectricityTariff(e){this.updateState("openWB/optional/et/provider",e,"type"),this.updateState("openWB/optional/et/provider",this.getElectricityTariffDefaultConfiguration(e))},updateConfiguration(e,t){console.debug("updateConfiguration",e,t),this.updateState(e,t.value,t.object)}}},j={class:"generalChargeConfig"},R={name:"generalChargeConfigForm"},Z={key:0},G={key:1},x=d("br",null,null,-1),J=d("br",null,null,-1),K=d("br",null,null,-1),H=d("hr",null,null,-1),Q=d("br",null,null,-1),X={key:1},Y={key:2},ee={key:0},te={key:1},ne=d("br",null,null,-1),ie={key:0};function re(e,t,c,v,y,p){const u=o("openwb-base-alert"),f=o("openwb-base-button-group-input"),m=o("openwb-base-range-input"),w=o("openwb-base-heading"),_=o("openwb-base-number-input"),B=o("openwb-base-card"),z=o("openwb-base-select-input"),S=o("openwb-electricity-tariff-proxy"),$=o("openwb-base-submit-buttons");return l(),s("div",j,[d("form",R,[n(B,{title:"Allgemein"},{default:a(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(l(),s("div",Z,[n(u,{subtype:"info"},{default:a(()=>[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(l(),s("div",G,[n(f,{title:"Begrenzung der Schieflast",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load"],"onUpdate:modelValue":t[0]||(t[0]=i=>e.updateState("openWB/general/chargemode_config/unbalanced_load",i))},{help:a(()=>[r(" Wenn diese Option aktiviert ist, werden nicht-dreiphasige Ladevorgänge so geregelt, dass am Netzanschlusspunkt (EVU-Zähler) die eingestellte Grenze für die Schieflast nicht überschritten wird. Hierfür muss der EVU-Zähler einzelne Phasenströme bereitstellen!"),x,r(' Weiterhin müssen bei den Ladepunkten sowie Fahrzeugen sämtliche Angaben zur Anzahl angeschlossener/unterstützter Phasen und der Phasenrotation hinterlegt werden, damit der Regelung bekannt ist, welcher Ladevorgang welche Phase am Netzanschluss beeinflusst. siehe "Konfiguration - Ladepunkte -> elektrischer Anschluss - Phase 1" und "Konfiguration - Fahrzeuge -> Fahrzeug-Profile" ')]),_:1},8,["model-value"]),e.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load"]?(l(),k(m,{key:0,title:"Erlaubte Schieflast",min:10,max:32,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load_limit"],"onUpdate:modelValue":t[1]||(t[1]=i=>e.updateState("openWB/general/chargemode_config/unbalanced_load_limit",i))},{help:a(()=>[r(" Hiermit wird festgelegt, welche Schieflast am Netzanschlusspunkt erlaubt ist. Bei Überschreitung werden gezielt einzelne Ladevorgänge in der Leistung begrenzt. ")]),_:1},8,["model-value"])):W("",!0),n(f,{title:"Phasenumschaltung wiederholt anstoßen",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/retry_failed_phase_switches"],"onUpdate:modelValue":t[2]||(t[2]=i=>e.updateState("openWB/general/chargemode_config/retry_failed_phase_switches",i))},{help:a(()=>[r(" Wenn diese Option aktiviert ist, werden bis zu drei Umschaltversuche vorgenommen, wenn die vorgegebene und genutzte Phasenzahl nicht übereinstimmen. Wird die Option deaktiviert, wird nur eine Umschaltung durchgeführt."),J,r(" Die gezählten Fehlversuche werden mit dem Abstecken zurückgesetzt. ")]),_:1},8,["model-value"]),n(m,{title:"Verzögerung automat. Phasenumschaltung",min:0,max:14,step:1,labels:[{label:"1⇑ 15⇓ Min.",value:1},{label:"2⇑ 14⇓ Min.",value:2},{label:"3⇑ 13⇓ Min.",value:3},{label:"4⇑ 12⇓ Min.",value:4},{label:"5⇑ 11⇓ Min.",value:5},{label:"6⇑ 10⇓ Min.",value:6},{label:"7⇑ 9⇓ Min.",value:7},{label:"8⇑ 8⇓ Min.",value:8},{label:"9⇑ 7⇓ Min.",value:9},{label:"10⇑ 6⇓ Min.",value:10},{label:"11⇑ 5⇓ Min.",value:11},{label:"12⇑ 4⇓ Min.",value:12},{label:"13⇑ 3⇓ Min.",value:13},{label:"14⇑ 2⇓ Min.",value:14},{label:"15⇑ 1⇓ Min.",value:15}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/phase_switch_delay"],"onUpdate:modelValue":t[3]||(t[3]=i=>e.updateState("openWB/general/chargemode_config/phase_switch_delay",i))},{help:a(()=>[r(" Um zu viele Umschaltungen zu vermeiden, wird Anhand dieses Wertes definiert, wann die Umschaltung erfolgen soll. Ist für durchgehend x Minuten die Maximalstromstärke erreicht, wird auf mehrphasige Ladung ⇑ umgestellt. Ist die Ladung nur für ein Intervall unterhalb der Maximalstromstärke, beginnt das Intervall für die Umschaltung erneut. Ist die Ladung im mehrphasigen Modus für 16 - x Minuten auf der Minimalstromstärke, wird wieder auf einphasige Ladung ⇓ gewechselt."),K,r(" Ist ausreichend Überschuss vorhanden, wird beim Ladestart die Umschaltverzögerung nicht abgewartet, sondern direkt mit mehrphasiger Ladung begonnen. ")]),_:1},8,["model-value"]),H,n(w,null,{help:a(()=>[r(" Zur Berechnung der Ladekosten im Lade-Log werden stundenweise die Anteile der Stromquellen (Speicher, Netz, PV) berechnet und mit den hier angegebenen Preisen multipliziert."),Q,r(" Ist die Abrechnung über das Ladeprotokoll, z.B. mit dem Arbeitgeber, vereinbart, ist bei allen drei Feldern der vereinbarte Preis einzutragen. ")]),default:a(()=>[r(" Berechnung der Ladekosten ")]),_:1}),e.$store.state.mqtt["openWB/optional/et/provider"]&&e.$store.state.mqtt["openWB/optional/et/provider"].type?(l(),s("div",X,[n(u,{subtype:"info"},{default:a(()=>[r(" Für den Netzbezug wird der dynamische Strompreis des Anbieters für variable Stromtarife verwendet (stündliche Aktualisierung durch den Anbieter). ")]),_:1})])):(l(),s("div",Y,[n(_,{title:"Preis für Netzbezug",step:.001,precision:3,unit:"ct/kWh",required:"","model-value":e.$store.state.mqtt["openWB/general/prices/grid"]*1e5,"onUpdate:modelValue":t[4]||(t[4]=i=>e.updateState("openWB/general/prices/grid",parseFloat((i/1e5).toFixed(7))))},null,8,["model-value"])])),n(_,{title:"Preis für Speicherentladung",step:.001,precision:3,unit:"ct/kWh",required:"","model-value":e.$store.state.mqtt["openWB/general/prices/bat"]*1e5,"onUpdate:modelValue":t[5]||(t[5]=i=>e.updateState("openWB/general/prices/bat",parseFloat((i/1e5).toFixed(7))))},null,8,["model-value"]),n(_,{title:"Preis für PV-Strom",step:.001,precision:3,unit:"ct/kWh",required:"","model-value":e.$store.state.mqtt["openWB/general/prices/pv"]*1e5,"onUpdate:modelValue":t[6]||(t[6]=i=>e.updateState("openWB/general/prices/pv",parseFloat((i/1e5).toFixed(7))))},null,8,["model-value"])]))]),_:1}),n(B,{title:"Optional"},{default:a(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(l(),s("div",ee,[n(u,{subtype:"info"},{default:a(()=>[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(l(),s("div",te,[n(w,null,{default:a(()=>[r(" Variable Stromtarife ")]),_:1}),n(u,{subtype:"info"},{default:a(()=>[r(" Bei Sofort- und Zeitladen wird nur geladen, wenn der Strompreis unter dem maximalen angegeben Strompreis liegt. Für Zielladen wird die Ladedauer ermittelt und dann zu den günstigsten Stunden geladen."),ne,r(" Wenn keine Preise abgefragt werden können, wird bei Sofort- und Zeitladen immer geladen und bei Zielladen zunächst mit PV-Überschuss und zum Erreichen des Zieltermins mit Netzstrom. ")]),_:1}),n(z,{class:"mb-2",title:"Anbieter",options:p.electricityTariffList,"model-value":e.$store.state.mqtt["openWB/optional/et/provider"]?e.$store.state.mqtt["openWB/optional/et/provider"].type:"","onUpdate:modelValue":t[7]||(t[7]=i=>p.updateSelectedElectricityTariff(i))},null,8,["options","model-value"]),e.$store.state.mqtt["openWB/optional/et/provider"]&&e.$store.state.mqtt["openWB/optional/et/provider"].type?(l(),s("div",ie,[n(S,{electricityTariff:e.$store.state.mqtt["openWB/optional/et/provider"],"onUpdate:configuration":t[8]||(t[8]=i=>p.updateConfiguration("openWB/optional/et/provider",i))},null,8,["electricityTariff"])])):W("",!0)]))]),_:1}),n($,{formName:"generalChargeConfigForm",onSave:t[9]||(t[9]=i=>e.$emit("save")),onReset:t[10]||(t[10]=i=>e.$emit("reset")),onDefaults:t[11]||(t[11]=i=>e.$emit("defaults"))})])])}const ae=b(I,[["render",re],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/GeneralChargeConfig.vue"]]),ue=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));export{q as E,ue as G};
