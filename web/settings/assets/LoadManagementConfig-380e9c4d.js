import{l as z,O as C,N as x,F as L}from"./vendor-fortawesome-71546160.js";import{C as V}from"./index-88a2073c.js";import{S as $}from"./OpenwbSortableList-641f6bb4.js";import{_ as Z,u as l,k as u,l as m,x as d,D as s,N as i,y as r,J as _,K as w,A as v,z as W}from"./vendor-f2b8aa6f.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";z.add(C,x);const q={name:"OpenwbLoadManagementConfigView",mixins:[V],emits:["sendCommand"],components:{SortableList:$,FontAwesomeIcon:L},props:{installAssistantActive:{type:Boolean,required:!1,default:!1}},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/counter/config/home_consumption_source_id","openWB/counter/config/consider_less_charging","openWB/counter/get/hierarchy","openWB/system/device/+/component/+/config","openWB/counter/+/config/max_currents","openWB/counter/+/config/max_total_power","openWB/pv/+/config/max_ac_out","openWB/chargepoint/+/config"]}},computed:{componentConfigurations(){return this.getWildcardTopics("openWB/system/device/+/component/+/config")},counterConfigs:{get(){let e=this.getWildcardTopics("openWB/system/device/+/component/+/config");return Object.keys(e).filter(t=>e[t].type.includes("counter")).reduce((t,o)=>({...t,[o]:e[o]}),{})}},counterOptions(){var e=[];for(const t of Object.values(this.componentConfigurations))this.isComponentType(t.type,"counter")&&e.push({value:t.id,text:t.name});return e.sort((t,o)=>t.text==o.text?0:t.text>o.text?1:-1)},inverterConfigs:{get(){let e=this.getWildcardTopics("openWB/system/device/+/component/+/config");return Object.keys(e).filter(t=>e[t].type.includes("inverter")).reduce((t,o)=>({...t,[o]:e[o]}),{})}},hierarchyLabels:{get(){let e={};for(const t of Object.values(this.$store.state.mqtt["openWB/counter/get/hierarchy"]))e={...e,...this.getElementTreeNames(t)};return e}},getHcSourceIdOptions(){let e=[{value:null,text:"von openWB berechnen"}],t=[{label:"Eingerichtete Zähler-Komponenten",options:[...this.counterOptions]}];return{options:e,groups:t}}},methods:{getElementTreeNames(e){let t={};if(e.type=="cp"){let o=this.getChargePoint(e.id);o&&(t[e.id]=o.name)}else{let o=this.getComponent(e.id);o&&(t[e.id]=o.name)}return e.children.forEach(o=>{t={...t,...this.getElementTreeNames(o)}}),t},getComponent(e){let t;return Object.keys(this.$store.state.mqtt).forEach(o=>{o.match("^openWB/system/device/[0-9]+/component/"+e+"/config$")&&(t=this.$store.state.mqtt[o])}),t},getChargePoint(e){let t;return Object.keys(this.$store.state.mqtt).forEach(o=>{o.match("^openWB/chargepoint/"+e+"/config$")&&(t=this.$store.state.mqtt[o])}),t},isComponentType(e,t){return e.split("_").includes(t)}}},M={class:"loadManagementConfig"},A={name:"loadManagementConfigForm"},U={key:0},D={key:1},E=d("p",null," Wenn angesteckte Fahrzeuge, die nicht oder nicht mit der Sollstromstärke laden, im Lastmanagement berücksichtigt werden, wird für diese der Sollstrom reserviert. Dadurch können bei Eingreifen des Lastmanagements andere Fahrzeuge möglicherweise nur mit reduzierter Stromstärke laden und der reservierte Strom wird nicht genutzt. Wenn die Fahrzeuge wieder Leistung beziehen, z.B. um vorzuklimatisieren, nutzen sie den für sie reservierten Strom. ",-1),O=d("p",null," Wenn angesteckte Fahrzeuge, die nicht oder nicht mit der Sollstromstärke laden, nicht im Lastmanagement berücksichtigt werden, wird für diese auch kein Strom bei vorliegender Ladefreigabe reserviert bzw. es wird nur der tatsächlich genutzte Strom im Lastmanagement berücksichtigt. Andere Fahrzeuge können dadurch mit höherer Stromstärke laden. Wenn die maximalen Lastmanagement-Grenzen fast erreicht sind und die Fahrzeuge wieder Leistung beziehen, z.B. um vorzuklimatisieren, kann es zu einer kurzzeitigen Überschreitung der Lastmanagement-Grenzen kommen, bis im nächsten Zyklus die Stromstärken aller Ladepunkte an die neue Situation angepasst wurden. Das kurzzeitige Überschreiten der Maximal-Werte stellt für die Sicherungen in der Regel kein Problem dar. ",-1),F=d("a",{href:"https://github.com/openWB/core/wiki/Hausverbrauchs-Zähler",target:"_blank",rel:"noopener noreferrer"}," Wiki ",-1),H=d("br",null,null,-1),N={key:0},P={key:1},T=d("br",null,null,-1),j=d("br",null,null,-1),K=d("br",null,null,-1);function I(e,t,o,R,G,c){const h=l("openwb-base-alert"),k=l("openwb-base-button-group-input"),B=l("openwb-base-select-input"),f=l("openwb-base-heading"),b=l("font-awesome-icon"),p=l("openwb-base-number-input"),g=l("openwb-base-card"),S=l("sortable-list"),y=l("openwb-base-submit-buttons");return u(),m("div",M,[d("form",A,[s(g,{title:"Einstellungen",collapsible:!0,collapsed:!1},{default:i(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(u(),m("div",U,[s(h,{subtype:"info"},{default:i(()=>[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(u(),m("div",D,[s(k,{title:"Fahrzeuge, die nicht mit Sollstrom laden",buttons:[{buttonValue:!1,text:"nicht berücksichtigen",class:"btn-outline-danger"},{buttonValue:!0,text:"berücksichtigen",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/counter/config/consider_less_charging"],"onUpdate:modelValue":t[0]||(t[0]=n=>e.updateState("openWB/counter/config/consider_less_charging",n))},{help:i(()=>[E,O]),_:1},8,["model-value"]),s(B,{title:"Hausverbrauch",options:c.getHcSourceIdOptions.options,groups:c.getHcSourceIdOptions.groups,"model-value":e.$store.state.mqtt["openWB/counter/config/home_consumption_source_id"],"onUpdate:modelValue":t[1]||(t[1]=n=>e.updateState("openWB/counter/config/home_consumption_source_id",n))},{help:i(()=>[r(" Meist ist der Zähler am EVU-Punkt installiert, dann muss hier 'von openWB berechnen' ausgewählt werden. Wenn der Zähler im Hausverbrauchszweig installiert ist, die Struktur wie im "),F,r(" beschrieben anordnen und hier den Hausverbrauchszähler auswählen. Dann wird dieser Wert abzüglich der Ladeleistung als Hausverbrauch erfasst. ")]),_:1},8,["options","groups","model-value"]),s(f,null,{default:i(()=>[r(" Vorhandene Zählermodule ")]),_:1}),s(h,{subtype:"info"},{default:i(()=>[r(" Die maximale Leistung wird nur für den EVU-Zähler berücksichtigt. Bei Zwischenzählern begrenzt das Lastmanagement rein anhand der maximalen Phasenströme."),H,r(" Überlicherweise sind Hausanschlüsse mit 24kW und 3*35A bzw. 43kW und 3*63A abgesichert. ")]),_:1}),(u(!0),m(_,null,w(c.counterConfigs,n=>(u(),v(g,{key:n.id,collapsible:!0,collapsed:!0,subtype:"danger"},{header:i(()=>[s(b,{"fixed-width":"",icon:["fas","gauge-high"]}),r(" "+W(n.name),1)]),default:i(()=>[s(p,{title:"Maximale Leistung",min:1,step:1,unit:"kW","model-value":e.$store.state.mqtt["openWB/counter/"+n.id+"/config/max_total_power"]/1e3,"onUpdate:modelValue":a=>e.updateState("openWB/counter/"+n.id+"/config/max_total_power",a*1e3)},{help:i(()=>[r(" Maximal zulässige Leistung für diesen (Zwischen-)Zähler. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),s(p,{title:"Maximaler Strom L1",min:16,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/counter/"+n.id+"/config/max_currents"][0],"onUpdate:modelValue":a=>e.updateState("openWB/counter/"+n.id+"/config/max_currents",a,"0")},{help:i(()=>[r(" Maximal zulässiger Strom für die Phase 1 dieses (Zwischen-)Zählers. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),s(p,{title:"Maximaler Strom L2",min:16,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/counter/"+n.id+"/config/max_currents"][1],"onUpdate:modelValue":a=>e.updateState("openWB/counter/"+n.id+"/config/max_currents",a,"1")},{help:i(()=>[r(" Maximal zulässiger Strom für die Phase 2 dieses (Zwischen-)Zählers. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),s(p,{title:"Maximaler Strom L3",min:16,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/counter/"+n.id+"/config/max_currents"][2],"onUpdate:modelValue":a=>e.updateState("openWB/counter/"+n.id+"/config/max_currents",a,"2")},{help:i(()=>[r(" Maximal zulässiger Strom für die Phase 3 dieses (Zwischen-)Zählers. ")]),_:2},1032,["model-value","onUpdate:modelValue"])]),_:2},1024))),128)),s(f,null,{default:i(()=>[r(" Vorhandene Wechselrichtermodule ")]),_:1}),(u(!0),m(_,null,w(c.inverterConfigs,n=>(u(),v(g,{key:n.id,collapsible:!0,collapsed:!0,subtype:"success"},{header:i(()=>[s(b,{"fixed-width":"",icon:["fas","solar-panel"]}),r(" "+W(n.name),1)]),default:i(()=>[s(p,{title:"Maximale Ausgangsleistung des Wechselrichters",min:0,step:.1,unit:"kW","model-value":e.$store.state.mqtt["openWB/pv/"+n.id+"/config/max_ac_out"]/1e3,"onUpdate:modelValue":a=>e.updateState("openWB/pv/"+n.id+"/config/max_ac_out",a*1e3)},{help:i(()=>[r(" Relevant bei Hybrid-Systemen mit DC-Speicher. ")]),_:2},1032,["model-value","onUpdate:modelValue"])]),_:2},1024))),128))]))]),_:1}),s(g,{title:"Struktur",collapsible:!0,collapsed:!0},{default:i(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(u(),m("div",N,[s(h,{subtype:"info"},{default:i(()=>[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(u(),m("div",P,[s(S,{title:"Anordnung der Komponenten","model-value":e.$store.state.mqtt["openWB/counter/get/hierarchy"],"onUpdate:modelValue":t[2]||(t[2]=n=>e.updateState("openWB/counter/get/hierarchy",n)),labels:c.hierarchyLabels},{help:i(()=>[r(" Durch die Anordnung der Komponenten werden Abhängigkeiten abgebildet."),T,r(" An erster Stelle muss eine Zählerkomponente stehen, die den Netzanschlusspunkt erfasst. Dafür kann auch ein virtueller Zähler genutzt werden."),j,r(" Die weiteren Komponenten müssen hierarchisch so angeordnet werden, wie sie auch physisch im Stromnetz angeschlossen werden."),K,r(" Bei DC-gekoppelten Speichern sind diese hinter dem zugehörigen Wechselrichter zu platzieren, damit die Abhängigkeit in der Regelung berücksichtigt werden kann. ")]),_:1},8,["model-value","labels"])]))]),_:1}),s(y,{formName:"loadManagementConfigForm",onSave:t[3]||(t[3]=n=>e.$emit("save")),onReset:t[4]||(t[4]=n=>e.$emit("reset")),onDefaults:t[5]||(t[5]=n=>e.$emit("defaults"))})])])}const ie=Z(q,[["render",I],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/LoadManagementConfig.vue"]]);export{ie as default};