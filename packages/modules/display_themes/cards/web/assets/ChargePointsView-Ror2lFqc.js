import{u as B,C as ae,N as ie}from"./index-D9XpyQux.js";import{D as F}from"./DashBoardCard-BqIRnhnk.js";import{S as le,C as z}from"./ChargePointPlugBadge-3QTpVjN_.js";import{l as $,b as ne,c as oe,F as A,j as re,k as W,m as E,e as U,n as D,o as Z,p as R,q as j,r as K,s as O,t as J,u as G,v as ce,w as de,x as he,y as ge}from"./vendor-fortawesome-DhL64LM6.js";import{_ as x}from"./vendor-inkline-CqnuQ_Go.js";import{q as h,o as d,l as u,n as i,s as a,y as q,e as S,k as r,F as M,x as s,i as m,A as L,I as se,j as ue,p as me}from"./vendor-CFVb6_YQ.js";$.add(ne,oe);const H=x({name:"ChargePointLockButton",components:{FontAwesomeIcon:A},props:{chargePointId:{required:!0,type:Number},changesLocked:{required:!1,type:Boolean,default:!1}},data:()=>({mqttStore:B()}),computed:{locked(){return this.mqttStore.getChargePointManualLock(this.chargePointId)},stateIcon(){return this.locked?["fas","fa-lock"]:["fas","fa-lock-open"]},stateClass(){return this.locked?["_color:danger"]:"_color:success"}},methods:{toggleChargePointManualLock(){this.changesLocked||this.$root.sendTopicToBroker(`openWB/chargepoint/${this.chargePointId}/set/manual_lock`,!this.mqttStore.getValueBool(`openWB/chargepoint/${this.chargePointId}/set/manual_lock`))}}},[["render",function(l,e,n,p,t,c){const P=h("font-awesome-icon"),V=h("i-button");return d(),u(V,{size:"lg",disabled:n.changesLocked,outline:n.changesLocked},{default:i(()=>[a(P,{"fixed-width":"",icon:c.stateIcon,class:q(c.stateClass),onClick:e[0]||(e[0]=C=>c.toggleChargePointManualLock())},null,8,["icon","class"])]),_:1},8,["disabled","outline"])}]]);$.add(re);const Q=x({name:"ChargePointCodeButton",components:{FontAwesomeIcon:A,CodeInputModal:ae},props:{chargePointId:{type:Number,required:!0}},data:()=>({mqttStore:B(),modalIdTagEntryVisible:!1,modalIdTagEntryColor:"warning",code:""}),computed:{tagState(){return this.mqttStore.getChargepointTagState(this.chargePointId)},tagButtonColor(){switch(this.tagState){case 2:return"success";case 1:return"warning";default:return""}},tagClass(){switch(this.tagState){case 2:return"_color:success-80";case 1:return"_color:warning-80";default:return""}}},methods:{toggleIdTagModal(){this.modalIdTagEntryVisible=!this.modalIdTagEntryVisible},sendIdTag(l){this.$root.sendTopicToBroker(`openWB/chargepoint/${this.chargePointId}/get/rfid`,l),this.modalIdTagEntryVisible=!1}}},[["render",function(l,e,n,p,t,c){const P=h("FontAwesomeIcon"),V=h("i-button"),C=h("CodeInputModal");return d(),S(M,null,[a(V,{class:"_margin-right:1",size:"lg",color:c.tagButtonColor,disabled:c.tagState==2,onClick:e[0]||(e[0]=g=>c.toggleIdTagModal())},{default:i(()=>[a(P,{"fixed-width":"",icon:["fas","fa-calculator"],class:q(c.tagClass)},null,8,["class"])]),_:1},8,["color","disabled"]),a(C,{ref:"lockInput",modelValue:t.modalIdTagEntryVisible,"onUpdate:modelValue":e[1]||(e[1]=g=>t.modalIdTagEntryVisible=g),"min-length":4,"max-length":20,"onUpdate:inputValue":c.sendIdTag},{header:i(()=>e[2]||(e[2]=[r(" Bitte einen ID-Tag eingeben. ")])),_:1},8,["modelValue","onUpdate:inputValue"])],64)}]]);$.add(W,E,U,D,Z,R,j,K,O,J,G);const Ce={name:"ChargePointCard",components:{DashBoardCard:F,SparkLine:le,ChargePointPlugBadge:z,ChargePointLockButton:H,ChargePointCodeButton:Q,FontAwesomeIcon:A},props:{chargePointId:{type:Number,required:!0},changesLocked:{type:Boolean,required:!0}},emits:["vehicle-click","soc-click","charge-mode-click","toggle-charge-point-settings"],data:()=>({mqttStore:B()}),methods:{handleVehicleClick(l){this.$emit("vehicle-click",l)},handleSocClick(l){this.$emit("soc-click",l)},handleChargeModeClick(l){this.$emit("charge-mode-click",l)},toggleChargePointSettings(l){this.$emit("toggle-charge-point-settings",l)}}},Pe={key:0},pe=x(Ce,[["render",function(l,e,n,p,t,c){const P=h("charge-point-plug-badge"),V=h("charge-point-code-button"),C=h("charge-point-lock-button"),g=h("i-column"),I=h("i-row"),k=h("spark-line"),_=h("font-awesome-icon"),f=h("i-badge"),y=h("i-button"),b=h("i-container"),v=h("dash-board-card");return d(),u(v,{color:"primary"},{headerLeft:i(()=>[r(s(t.mqttStore.getChargePointName(n.chargePointId)),1)]),headerRight:i(()=>[a(P,{"charge-point-id":[n.chargePointId]},null,8,["charge-point-id"])]),default:i(()=>[a(b,null,{default:i(()=>[a(I,null,{default:i(()=>[a(g,null,{default:i(()=>[a(I,null,{default:i(()=>[a(g,{class:"_padding-left:0 _padding-right:0"},{default:i(()=>[t.mqttStore.getRfidEnabled?(d(),u(V,{key:0,"charge-point-id":n.chargePointId},null,8,["charge-point-id"])):m("",!0),a(C,{"charge-point-id":n.chargePointId,"changes-locked":n.changesLocked},null,8,["charge-point-id","changes-locked"])]),_:1}),a(g,{class:"_text-align:right _padding-left:0"},{default:i(()=>[r(s(t.mqttStore.getChargePointPower(n.chargePointId))+" "+s(t.mqttStore.getChargePointPhasesInUse(n.chargePointId))+" "+s(t.mqttStore.getChargePointSetCurrent(n.chargePointId)),1)]),_:1})]),_:1}),a(I,{class:"_padding-top:1"},{default:i(()=>[a(g,{class:"_padding-left:0"},{default:i(()=>[a(k,{color:"var(--color--primary)",data:t.mqttStore.getChargePointPowerChartData(n.chargePointId)},null,8,["data"])]),_:1})]),_:1})]),_:1}),a(g,{md:"6"},{default:i(()=>[a(I,{class:"_display:flex"},{default:i(()=>[a(g,{class:"_padding-left:0 _padding-right:0 _flex-grow:1"},{default:i(()=>[a(f,{size:"lg",class:q(["_width:100%",n.changesLocked?"":"clickable"]),onClick:e[0]||(e[0]=w=>c.handleVehicleClick(n.chargePointId))},{default:i(()=>[a(_,{"fixed-width":"",icon:["fas","fa-car"]}),r(" "+s(t.mqttStore.getChargePointConnectedVehicleName(n.chargePointId)),1)]),_:1},8,["class"])]),_:1}),t.mqttStore.getVehicleSocConfigured(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))||t.mqttStore.getVehicleFaultState(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))!=0?(d(),u(g,{key:0,class:"_flex-grow:0 _padding-right:0 _padding-left:1"},{default:i(()=>[a(y,{size:"sm",disabled:n.changesLocked,class:q(n.changesLocked?"":"clickable"),onClick:e[1]||(e[1]=w=>c.handleSocClick(n.chargePointId))},{default:i(()=>[t.mqttStore.getVehicleSocConfigured(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))?(d(),S("span",Pe,[a(_,{"fixed-width":"",icon:t.mqttStore.getVehicleSocIsManual(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))?["fas","fa-edit"]:["fas","fa-car-battery"]},null,8,["icon"]),r(" "+s(t.mqttStore.getChargePointConnectedVehicleSoc(n.chargePointId).soc)+"% ",1)])):m("",!0),t.mqttStore.getVehicleFaultState(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))!=0?(d(),u(_,{key:1,"fixed-width":"",icon:t.mqttStore.getVehicleFaultState(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))>0?t.mqttStore.getVehicleFaultState(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))>1?["fas","times-circle"]:["fas","exclamation-triangle"]:[],class:q(t.mqttStore.getVehicleFaultState(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))>0?t.mqttStore.getVehicleFaultState(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))>1?"_color:danger":"_color:warning":"")},null,8,["icon","class"])):m("",!0)]),_:1},8,["disabled","class"])]),_:1})):m("",!0)]),_:1}),a(I,{class:"_padding-top:1 _display:flex"},{default:i(()=>[a(g,{class:"_padding-left:0 _padding-right:0 _flex-grow:1"},{default:i(()=>[a(f,{size:"lg",class:q(["_width:100%",n.changesLocked?"":"clickable"]),color:t.mqttStore.getChargePointConnectedVehicleChargeMode(n.chargePointId).class,onClick:e[2]||(e[2]=w=>c.handleChargeModeClick(n.chargePointId))},{default:i(()=>[r(s(t.mqttStore.getChargePointConnectedVehicleChargeMode(n.chargePointId).label)+" ",1),a(_,{"fixed-width":"",icon:t.mqttStore.getChargePointConnectedVehiclePriority(n.chargePointId)?["fas","fa-star"]:["far","fa-star"],class:q(t.mqttStore.getChargePointConnectedVehiclePriority(n.chargePointId)?"_color:warning":"")},null,8,["icon","class"])]),_:1},8,["class","color"])]),_:1}),t.mqttStore.getChargePointConnectedVehicleTimeChargingActive(n.chargePointId)?(d(),u(g,{key:0,class:"_flex-grow:0 _padding-right:0 _padding-left:1"},{default:i(()=>[a(f,{size:"lg"},{default:i(()=>[t.mqttStore.getChargePointConnectedVehicleTimeChargingActive(n.chargePointId)?(d(),u(_,{key:0,"fixed-width":"",icon:t.mqttStore.getChargePointConnectedVehicleTimeChargingRunning(n.chargePointId)?["fas","fa-clock"]:["far","fa-clock"],class:q(t.mqttStore.getChargePointConnectedVehicleTimeChargingRunning(n.chargePointId)?"_color:success":"")},null,8,["icon","class"])):m("",!0)]),_:1})]),_:1})):m("",!0)]),_:1}),n.changesLocked?m("",!0):(d(),u(I,{key:0,class:"_padding-top:1"},{default:i(()=>[a(g,{class:"_padding-left:0 _padding-right:0"},{default:i(()=>[a(y,{block:"",onClick:e[3]||(e[3]=w=>c.toggleChargePointSettings(n.chargePointId))},{default:i(()=>[a(_,{"fixed-width":"",icon:["fas","fa-wrench"]})]),_:1})]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})}],["__scopeId","data-v-3c6489c4"]]);$.add(W,E,U,D,Z,R,j,K,O,J,G);const fe={name:"ChargePointCard",components:{DashBoardCard:F,ChargePointPlugBadge:z,ChargePointLockButton:H,ChargePointCodeButton:Q,FontAwesomeIcon:A},props:{chargePointId:{type:Number,required:!0},changesLocked:{type:Boolean,required:!0}},emits:["vehicle-click","soc-click","charge-mode-click","toggle-charge-point-settings","set-charge-point-connected-vehicle-charge-mode"],data:()=>({mqttStore:B(),simpleChargeModes:["instant_charging","pv_charging","stop"]}),computed:{filteredChargeModes(){return this.mqttStore.getSimpleChargePointView?this.mqttStore.chargeModeList().filter(l=>this.simpleChargeModes.includes(l.id)):this.mqttStore.chargeModeList()}},methods:{handleVehicleClick(l){this.$emit("vehicle-click",l)},handleSocClick(l){this.$emit("soc-click",l)},handleChargeModeClick(l){this.$emit("charge-mode-click",l)},toggleChargePointSettings(l){this.$emit("toggle-charge-point-settings",l)},setChargePointConnectedVehicleChargeMode(l,e){this.$emit("set-charge-point-connected-vehicle-charge-mode",l,e)}}},Se={key:0},Ve=x(fe,[["render",function(l,e,n,p,t,c){const P=h("charge-point-plug-badge"),V=h("charge-point-code-button"),C=h("charge-point-lock-button"),g=h("i-column"),I=h("i-row"),k=h("font-awesome-icon"),_=h("i-button"),f=h("i-button-group"),y=h("i-container"),b=h("dash-board-card");return d(),u(b,{color:"primary"},{headerLeft:i(()=>[r(s(t.mqttStore.getChargePointName(n.chargePointId)),1)]),headerRight:i(()=>[a(P,{"charge-point-id":[n.chargePointId]},null,8,["charge-point-id"])]),default:i(()=>[a(y,null,{default:i(()=>[a(I,null,{default:i(()=>[a(g,null,{default:i(()=>[a(I,null,{default:i(()=>[a(g,{class:"_padding-left:0 _padding-right:0"},{default:i(()=>[t.mqttStore.getRfidEnabled?(d(),u(V,{key:0,"charge-point-id":n.chargePointId},null,8,["charge-point-id"])):m("",!0),a(C,{"charge-point-id":n.chargePointId,"changes-locked":n.changesLocked},null,8,["charge-point-id","changes-locked"])]),_:1}),a(g,{class:"_text-align:right _padding-left:0"},{default:i(()=>[r(s(t.mqttStore.getChargePointPower(n.chargePointId))+" "+s(t.mqttStore.getChargePointPhasesInUse(n.chargePointId))+" "+s(t.mqttStore.getChargePointSetCurrent(n.chargePointId)),1)]),_:1})]),_:1}),a(I,{class:"_padding-top:1"},{default:i(()=>[a(g,{class:"_padding-left:0 button-group-wrapper"},{default:i(()=>[a(f,{class:"button-group main-button-group"},{default:i(()=>[a(_,{class:q(["large-button _flex-grow:1",n.changesLocked?"":"clickable"]),disabled:n.changesLocked,onClick:e[0]||(e[0]=v=>c.handleVehicleClick(n.chargePointId))},{default:i(()=>[a(k,{"fixed-width":"",icon:["fas","fa-car"]}),r(" "+s(t.mqttStore.getChargePointConnectedVehicleName(n.chargePointId))+" ",1),a(k,{class:q(["_padding-left:1",t.mqttStore.getChargePointConnectedVehiclePriority(n.chargePointId)?"_color:warning":""]),"fixed-width":"",icon:t.mqttStore.getChargePointConnectedVehiclePriority(n.chargePointId)?["fas","fa-star"]:["far","fa-star"]},null,8,["icon","class"])]),_:1},8,["class","disabled"]),t.mqttStore.getVehicleSocConfigured(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))||t.mqttStore.getVehicleFaultState(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))!=0?(d(),u(_,{key:0,class:q(["large-button _flex-grow:0",n.changesLocked?"":"clickable"]),disabled:n.changesLocked,onClick:e[1]||(e[1]=v=>c.handleSocClick(n.chargePointId))},{default:i(()=>[t.mqttStore.getVehicleSocConfigured(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))?(d(),S("span",Se,[a(k,{"fixed-width":"",icon:t.mqttStore.getVehicleSocIsManual(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))?["fas","fa-edit"]:["fas","fa-car-battery"]},null,8,["icon"]),r(" "+s(t.mqttStore.getChargePointConnectedVehicleSoc(n.chargePointId).soc)+"% ",1)])):m("",!0),t.mqttStore.getVehicleFaultState(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))!=0?(d(),u(k,{key:1,"fixed-width":"",icon:t.mqttStore.getVehicleFaultState(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))>0?t.mqttStore.getVehicleFaultState(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))>1?["fas","times-circle"]:["fas","exclamation-triangle"]:[],class:q(t.mqttStore.getVehicleFaultState(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))>0?t.mqttStore.getVehicleFaultState(t.mqttStore.getChargePointConnectedVehicleId(n.chargePointId))>1?"_color:danger":"_color:warning":"")},null,8,["icon","class"])):m("",!0)]),_:1},8,["disabled","class"])):m("",!0),a(_,{class:q(["large-button _flex-grow:0",n.changesLocked?"":"clickable"]),disabled:n.changesLocked,onClick:e[2]||(e[2]=v=>c.toggleChargePointSettings(n.chargePointId))},{default:i(()=>[a(k,{"fixed-width":"",icon:["fas","fa-wrench"]})]),_:1},8,["class","disabled"])]),_:1}),a(f,{class:"button-group _margin-top:1",disabled:n.changesLocked},{default:i(()=>[(d(!0),S(M,null,L(c.filteredChargeModes,v=>(d(),u(_,{key:v.id,outline:"",class:q(["large-button _flex-grow:1",n.changesLocked?"":"clickable"]),color:v.class!="dark"?v.class:"light",active:t.mqttStore.getChargePointConnectedVehicleChargeMode(n.chargePointId)!=null&&v.id==t.mqttStore.getChargePointConnectedVehicleChargeMode(n.chargePointId).mode,onClick:w=>c.setChargePointConnectedVehicleChargeMode(n.chargePointId,v.id)},{default:i(()=>[r(s(v.label),1)]),_:2},1032,["class","color","active","onClick"]))),128))]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}],["__scopeId","data-v-5e676b1f"]]),X=x({name:"ExtendedNumberInput",inheritAttrs:!1,props:{modelValue:{type:Number,required:!0,default:NaN},unit:{type:String,default:""},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},labels:{type:Array,default:void 0}},emits:["update:modelValue"],data(){return{minimum:this.labels?0:this.min,maximum:this.labels?this.labels.length-1:this.max,stepSize:this.labels?1:this.step}},computed:{label(){var l;return this.labels&&this.inputValue!=null?this.inputValue<this.labels.length&&(l=this.labels[this.inputValue].label):l=this.inputValue,typeof l=="number"&&(l=l.toLocaleString(void 0,{minimumFractionDigits:this.precision,maximumFractionDigits:this.precision})),l},precision(){if(!isFinite(this.stepSize))return 0;for(var l=1,e=0;Math.round(this.stepSize*l)/l!==this.stepSize;)l*=10,e++;return e},inputValue:{get(){if(this.labels){var l=void 0;for(let e=0;e<this.labels.length;e++)if(this.labels[e].value==this.modelValue){l=e;break}return l===void 0&&this.modelValue!==void 0?this.minimum:l}return this.modelValue},set(l){if(this.labels){var e=this.labels[l].value;this.$emit("update:modelValue",e)}else this.$emit("update:modelValue",l)}}},methods:{increment(){var l=Math.min(this.inputValue+this.stepSize,this.maximum);this.inputValue=Math.round(l*Math.pow(10,this.precision))/Math.pow(10,this.precision)},decrement(){var l=Math.max(this.inputValue-this.stepSize,this.minimum);this.inputValue=Math.round(l*Math.pow(10,this.precision))/Math.pow(10,this.precision)}}},[["render",function(l,e,n,p,t,c){const P=h("i-button"),V=h("i-input");return d(),u(V,{modelValue:c.label,"onUpdate:modelValue":e[0]||(e[0]=C=>c.label=C),plaintext:"",class:"_text-align:right",size:"lg"},{prepend:i(()=>[a(P,{onClick:c.decrement},{default:i(()=>e[1]||(e[1]=[r(" - ")])),_:1},8,["onClick"])]),suffix:i(()=>[r(s(n.unit),1)]),append:i(()=>[a(P,{onClick:c.increment},{default:i(()=>e[2]||(e[2]=[r(" + ")])),_:1},8,["onClick"])]),_:1},8,["modelValue"])}]]),Ie=x({name:"ManualSocInput",components:{ExtendedNumberInput:X,NumberPad:ie},props:{modelValue:{required:!0,type:Boolean,default:!1},vehicleId:{required:!0,type:Number,default:0}},emits:["update:modelValue"],data:()=>({mqttStore:B(),newSoc:0}),methods:{enter(l){let e=10*this.newSoc+parseInt(l);e>=0&&e<=100&&(this.newSoc=e)},removeDigit(){this.newSoc=Math.trunc(this.newSoc/10)},clear(){this.newSoc=0},close(){this.$emit("update:modelValue",!1),this.newSoc=0},updateManualSoc(){this.$root.sendTopicToBroker(`openWB/vehicle/${this.vehicleId}/soc_module/calculated_soc_state/manual_soc`,this.newSoc),this.close()}}},[["render",function(l,e,n,p,t,c){const P=h("extended-number-input"),V=h("i-column"),C=h("i-row"),g=h("NumberPad"),I=h("i-container"),k=h("i-button"),_=h("i-modal");return d(),u(se,{to:"body"},[a(_,{"model-value":n.modelValue,size:"sm","onUpdate:modelValue":e[6]||(e[6]=f=>l.$emit("update:modelValue",f))},{header:i(()=>[r(' SoC für Fahrzeug "'+s(t.mqttStore.getVehicleName(n.vehicleId))+'" ',1)]),footer:i(()=>[a(I,null,{default:i(()=>[a(C,null,{default:i(()=>[a(V,null,{default:i(()=>[a(k,{color:"danger",onClick:e[4]||(e[4]=f=>c.close())},{default:i(()=>e[7]||(e[7]=[r(" Zurück ")])),_:1})]),_:1}),a(V,{class:"_text-align:right"},{default:i(()=>[a(k,{color:"success",onClick:e[5]||(e[5]=f=>c.updateManualSoc())},{default:i(()=>e[8]||(e[8]=[r(" OK ")])),_:1})]),_:1})]),_:1})]),_:1})]),default:i(()=>[a(I,null,{default:i(()=>[a(C,{center:"",class:"_padding-bottom:1"},{default:i(()=>[a(V,null,{default:i(()=>[a(P,{modelValue:t.newSoc,"onUpdate:modelValue":e[0]||(e[0]=f=>t.newSoc=f),unit:"%",min:0,max:100,step:1,size:"lg",class:"_text-align:center"},null,8,["modelValue"])]),_:1})]),_:1}),a(g,{"onKey:digit":e[1]||(e[1]=f=>c.enter(f)),"onKey:clear":e[2]||(e[2]=f=>c.clear()),"onKey:delete":e[3]||(e[3]=f=>c.removeDigit())})]),_:1})]),_:1},8,["model-value"])])}]]);$.add(ce,de,he,ge);const _e={name:"ChargePointsView",components:{ChargePointCard:pe,SimpleChargePointCard:Ve,ExtendedNumberInput:X,ManualSocInput:Ie,FontAwesomeIcon:A},props:{changesLocked:{required:!1,type:Boolean,default:!1}},data:()=>({mqttStore:B(),modalChargeModeSettingVisible:!1,modalVehicleSelectVisible:!1,modalChargePointSettingsVisible:!1,modalChargePointId:0,modalVehicleId:0,modalActiveTab:"tab-general",modalManualSocInputVisible:!1,simpleChargeModes:["instant_charging","pv_charging","stop"]}),computed:{vehicleList(){let l=this.mqttStore.getVehicleList;var e=[];return Object.keys(l).forEach(n=>{let p=parseInt(n.match(/(?:\/)([0-9]+)(?=\/)*/g)[0].replace(/[^0-9]+/g,""));e.push({id:p,name:l[n]})}),e},filteredChargeModes(){return this.mqttStore.getSimpleChargePointView?this.mqttStore.chargeModeList().filter(l=>this.simpleChargeModes.includes(l.id)):this.mqttStore.chargeModeList()}},watch:{changesLocked(l,e){e!==!0&&l===!0&&(this.modalChargeModeSettingVisible=!1,this.modalVehicleSelectVisible=!1,this.modalChargePointSettingsVisible=!1,this.modalManualSocInputVisible=!1)}},methods:{toggleChargePointSettings(l){switch(this.mqttStore.getChargePointConnectedVehicleChargeMode(l).mode){case"pv_charging":this.modalActiveTab="tab-pv-charging";break;case"scheduled_charging":this.modalActiveTab="tab-scheduled-charging";break;default:this.modalActiveTab="tab-instant-charging"}this.modalChargePointId=l,this.modalChargePointSettingsVisible=!0},handleChargeModeClick(l){this.changesLocked||(this.modalChargePointId=l,this.modalChargeModeSettingVisible=!0)},handleVehicleClick(l){this.changesLocked||(this.modalChargePointId=l,this.modalVehicleSelectVisible=!0)},handleSocClick(l){let e=this.mqttStore.getChargePointConnectedVehicleId(l);if(this.mqttStore.getVehicleSocIsManual(e))return this.modalVehicleId=e,void(this.modalManualSocInputVisible=!0);this.$root.sendTopicToBroker(`openWB/set/vehicle/${e}/get/force_soc_update`,1)},setChargePointConnectedVehicle(l,e){e.id!=this.mqttStore.getChargePointConnectedVehicleId(l)&&this.$root.sendTopicToBroker(`openWB/chargepoint/${l}/config/ev`,e.id),this.modalVehicleSelectVisible&&(this.modalVehicleSelectVisible=!1)},setChargePointConnectedVehicleChargeMode(l,e){if(e.id!=this.mqttStore.getChargePointConnectedVehicleChargeMode(l)){var n=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${n}/chargemode/selected`,e)}},setChargePointConnectedVehiclePriority(l,e){if(e!=this.mqttStore.getChargePointConnectedVehiclePriority(l)){var n=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${n}/prio`,e)}},setChargePointConnectedVehicleTimeChargingActive(l,e){if(e!=this.mqttStore.getChargePointConnectedVehicleTimeChargingActive(l)){var n=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${n}/time_charging/active`,e)}},setChargePointConnectedVehicleInstantChargingCurrent(l,e){if(e&&e!=this.mqttStore.getChargePointConnectedVehicleInstantChargingCurrent(l)){var n=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${n}/chargemode/instant_charging/current`,parseFloat(e))}},setChargePointConnectedVehicleInstantChargingLimit(l,e){if(e&&e!=this.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(l).selected){var n=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${n}/chargemode/instant_charging/limit/selected`,e)}},setChargePointConnectedVehicleInstantChargingLimitSoc(l,e){if(e&&e!=this.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(l).soc){var n=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${n}/chargemode/instant_charging/limit/soc`,parseInt(e))}},setChargePointConnectedVehicleInstantChargingLimitAmount(l,e){if(e&&e!=this.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(l).amount){var n=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${n}/chargemode/instant_charging/limit/amount`,e)}},setChargePointConnectedVehiclePvChargingFeedInLimit(l,e){if(e!=this.mqttStore.getChargePointConnectedVehiclePvChargingFeedInLimit(l)){var n=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${n}/chargemode/pv_charging/feed_in_limit`,e)}},setChargePointConnectedVehiclePvChargingMinCurrent(l,e){let n=this.mqttStore.getChargePointConnectedVehiclePvChargingMinCurrent(l),p=parseInt(e);if(p!=n&&!isNaN(p)){var t=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${t}/chargemode/pv_charging/min_current`,p)}},setChargePointConnectedVehiclePvChargingMinSoc(l,e){let n=this.mqttStore.getChargePointConnectedVehiclePvChargingMinSoc(l),p=parseInt(e);if(p!=n&&!isNaN(p)){var t=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${t}/chargemode/pv_charging/min_soc`,p)}},setChargePointConnectedVehiclePvChargingMinSocCurrent(l,e){let n=this.mqttStore.getChargePointConnectedVehiclePvChargingMinSocCurrent(l),p=parseInt(e);if(p!=n&&!isNaN(p)){var t=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${t}/chargemode/pv_charging/min_soc_current`,p)}},setChargePointConnectedVehiclePvChargingMaxSoc(l,e){let n=this.mqttStore.getChargePointConnectedVehiclePvChargingMaxSoc(l),p=parseInt(e);if(p!=n&&!isNaN(p)){var t=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${t}/chargemode/pv_charging/max_soc`,p)}},setChargePointConnectedVehicleScheduledChargingPlanActive(l,e){this.$root.sendTopicToBroker(`${l}/active`,e)},setChargePointConnectedVehicleTimeChargingPlanActive(l,e){this.$root.sendTopicToBroker(`${l}/active`,e)}}},be={class:"charge-points-card-wrapper"},ke={key:0},ve={key:1},qe={key:2},ye={key:3},we={key:4},Me={key:0},Te={key:1},xe={key:0},Le={key:1},Be={key:2},$e={key:3},Ae={key:4},De=x(_e,[["render",function(l,e,n,p,t,c){const P=h("i-button"),V=h("i-button-group"),C=h("i-form-group"),g=h("i-form-label"),I=h("i-form"),k=h("i-modal"),_=h("i-tab-title"),f=h("extended-number-input"),y=h("i-tab"),b=h("font-awesome-icon"),v=h("i-alert"),w=h("i-row"),N=h("i-container"),Y=h("i-tabs"),ee=h("manual-soc-input");return d(),S(M,null,[ue("div",be,[(d(!0),S(M,null,L(t.mqttStore.getChargePointIds,o=>(d(),u(me(t.mqttStore.getSimpleChargePointView?"SimpleChargePointCard":"ChargePointCard"),{key:o,"charge-point-id":o,"changes-locked":n.changesLocked,onVehicleClick:c.handleVehicleClick,onSocClick:c.handleSocClick,onChargeModeClick:c.handleChargeModeClick,onToggleChargePointSettings:c.toggleChargePointSettings,onSetChargePointConnectedVehicleChargeMode:c.setChargePointConnectedVehicleChargeMode},null,40,["charge-point-id","changes-locked","onVehicleClick","onSocClick","onChargeModeClick","onToggleChargePointSettings","onSetChargePointConnectedVehicleChargeMode"]))),128))]),a(k,{modelValue:t.modalChargeModeSettingVisible,"onUpdate:modelValue":e[2]||(e[2]=o=>t.modalChargeModeSettingVisible=o),size:"lg"},{header:i(()=>[r(' Lademodus für "'+s(t.mqttStore.getChargePointConnectedVehicleName(t.modalChargePointId))+'" auswählen ',1)]),default:i(()=>[a(I,null,{default:i(()=>[a(C,null,{default:i(()=>[a(V,{block:"",vertical:""},{default:i(()=>[(d(!0),S(M,null,L(c.filteredChargeModes,o=>(d(),u(P,{key:o.id,size:"lg",class:"large-button",outline:"",color:o.class!="dark"?o.class:"light",active:t.mqttStore.getChargePointConnectedVehicleChargeMode(t.modalChargePointId)!=null&&o.id==t.mqttStore.getChargePointConnectedVehicleChargeMode(t.modalChargePointId).mode,onClick:T=>c.setChargePointConnectedVehicleChargeMode(t.modalChargePointId,o.id)},{default:i(()=>[r(s(o.label),1)]),_:2},1032,["color","active","onClick"]))),128))]),_:1})]),_:1}),a(C,null,{default:i(()=>[a(g,null,{default:i(()=>e[21]||(e[21]=[r("Priorität")])),_:1}),a(V,{block:""},{default:i(()=>[a(P,{size:"lg",class:"large-button",color:t.mqttStore.getChargePointConnectedVehiclePriority(t.modalChargePointId)!==!0?"danger":"",onClick:e[0]||(e[0]=o=>c.setChargePointConnectedVehiclePriority(t.modalChargePointId,!1))},{default:i(()=>e[22]||(e[22]=[r(" Nein ")])),_:1},8,["color"]),a(P,{color:t.mqttStore.getChargePointConnectedVehiclePriority(t.modalChargePointId)===!0?"success":"",onClick:e[1]||(e[1]=o=>c.setChargePointConnectedVehiclePriority(t.modalChargePointId,!0))},{default:i(()=>e[23]||(e[23]=[r(" Ja ")])),_:1},8,["color"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(k,{modelValue:t.modalVehicleSelectVisible,"onUpdate:modelValue":e[3]||(e[3]=o=>t.modalVehicleSelectVisible=o),class:"modal-vehicle-select",size:"lg"},{header:i(()=>[r(' Fahrzeug an "'+s(t.mqttStore.getChargePointName(t.modalChargePointId))+'" auswählen ',1)]),default:i(()=>[a(I,null,{default:i(()=>[a(C,null,{default:i(()=>[a(V,{vertical:"",block:""},{default:i(()=>[(d(!0),S(M,null,L(c.vehicleList,o=>(d(),u(P,{key:o.id,size:"lg",class:"large-button",active:t.mqttStore.getChargePointConnectedVehicleId(t.modalChargePointId)==o.id,color:t.mqttStore.getChargePointConnectedVehicleId(t.modalChargePointId)==o.id?"primary":"",onClick:T=>c.setChargePointConnectedVehicle(t.modalChargePointId,o)},{default:i(()=>[r(s(o.name),1)]),_:2},1032,["active","color","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(k,{modelValue:t.modalChargePointSettingsVisible,"onUpdate:modelValue":e[19]||(e[19]=o=>t.modalChargePointSettingsVisible=o),size:"lg"},{header:i(()=>[r(' Einstellungen für Fahrzeug "'+s(t.mqttStore.getChargePointConnectedVehicleName(t.modalChargePointId))+'" ',1)]),default:i(()=>[a(Y,{modelValue:t.modalActiveTab,"onUpdate:modelValue":e[18]||(e[18]=o=>t.modalActiveTab=o),stretch:""},{header:i(()=>[a(_,{for:"tab-instant-charging"},{default:i(()=>e[24]||(e[24]=[r(" Sofort ")])),_:1}),a(_,{for:"tab-pv-charging"},{default:i(()=>e[25]||(e[25]=[r(" PV ")])),_:1}),t.mqttStore.getSimpleChargePointView?m("",!0):(d(),u(_,{key:0,for:"tab-scheduled-charging"},{default:i(()=>e[26]||(e[26]=[r(" Zielladen ")])),_:1})),t.mqttStore.getSimpleChargePointView?m("",!0):(d(),u(_,{key:1,for:"tab-time-charging"},{default:i(()=>e[27]||(e[27]=[r(" Zeitladen ")])),_:1}))]),default:i(()=>[a(y,{name:"tab-instant-charging"},{default:i(()=>[a(I,null,{default:i(()=>[a(C,null,{default:i(()=>[a(g,null,{default:i(()=>e[28]||(e[28]=[r("Stromstärke")])),_:1}),a(f,{unit:"A",min:6,max:32,"model-value":t.mqttStore.getChargePointConnectedVehicleInstantChargingCurrent(t.modalChargePointId),"onUpdate:modelValue":e[4]||(e[4]=o=>c.setChargePointConnectedVehicleInstantChargingCurrent(t.modalChargePointId,o))},null,8,["model-value"])]),_:1}),a(C,null,{default:i(()=>[a(g,null,{default:i(()=>e[29]||(e[29]=[r("Begrenzung")])),_:1}),a(V,{block:""},{default:i(()=>[a(P,{color:t.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(t.modalChargePointId).selected=="none"?"primary":"",active:t.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(t.modalChargePointId).selected=="none",onClick:e[5]||(e[5]=o=>c.setChargePointConnectedVehicleInstantChargingLimit(t.modalChargePointId,"none"))},{default:i(()=>e[30]||(e[30]=[r(" Keine ")])),_:1},8,["color","active"]),a(P,{color:t.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(t.modalChargePointId).selected=="soc"?"primary":"",active:t.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(t.modalChargePointId).selected=="soc",onClick:e[6]||(e[6]=o=>c.setChargePointConnectedVehicleInstantChargingLimit(t.modalChargePointId,"soc"))},{default:i(()=>e[31]||(e[31]=[r(" EV-SoC ")])),_:1},8,["color","active"]),a(P,{color:t.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(t.modalChargePointId).selected=="amount"?"primary":"",active:t.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(t.modalChargePointId).selected=="amount",onClick:e[7]||(e[7]=o=>c.setChargePointConnectedVehicleInstantChargingLimit(t.modalChargePointId,"amount"))},{default:i(()=>e[32]||(e[32]=[r(" Energie ")])),_:1},8,["color","active"])]),_:1})]),_:1}),t.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(t.modalChargePointId).selected=="soc"?(d(),u(C,{key:0},{default:i(()=>[a(g,null,{default:i(()=>e[33]||(e[33]=[r("Max. SoC")])),_:1}),a(f,{unit:"%",min:5,max:100,step:5,"model-value":t.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(t.modalChargePointId).soc,"onUpdate:modelValue":e[8]||(e[8]=o=>c.setChargePointConnectedVehicleInstantChargingLimitSoc(t.modalChargePointId,o))},null,8,["model-value"])]),_:1})):m("",!0),t.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(t.modalChargePointId).selected=="amount"?(d(),u(C,{key:1},{default:i(()=>[a(g,null,{default:i(()=>e[34]||(e[34]=[r("Max. Energie")])),_:1}),a(f,{unit:"kWh",min:1,max:100,"model-value":t.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(t.modalChargePointId).amount/1e3,"onUpdate:modelValue":e[9]||(e[9]=o=>c.setChargePointConnectedVehicleInstantChargingLimitAmount(t.modalChargePointId,1e3*o))},null,8,["model-value"])]),_:1})):m("",!0)]),_:1})]),_:1}),a(y,{name:"tab-pv-charging"},{default:i(()=>[a(I,null,{default:i(()=>[a(C,null,{default:i(()=>[a(g,null,{default:i(()=>e[35]||(e[35]=[r("Einspeisegrenze beachten")])),_:1}),a(V,{block:""},{default:i(()=>[a(P,{color:t.mqttStore.getChargePointConnectedVehiclePvChargingFeedInLimit(t.modalChargePointId)!==!0?"danger":"",onClick:e[10]||(e[10]=o=>c.setChargePointConnectedVehiclePvChargingFeedInLimit(t.modalChargePointId,!1))},{default:i(()=>e[36]||(e[36]=[r(" Nein ")])),_:1},8,["color"]),a(P,{color:t.mqttStore.getChargePointConnectedVehiclePvChargingFeedInLimit(t.modalChargePointId)===!0?"success":"",onClick:e[11]||(e[11]=o=>c.setChargePointConnectedVehiclePvChargingFeedInLimit(t.modalChargePointId,!0))},{default:i(()=>e[37]||(e[37]=[r(" Ja ")])),_:1},8,["color"])]),_:1})]),_:1}),a(C,null,{default:i(()=>[a(g,null,{default:i(()=>e[38]||(e[38]=[r("Minimaler Dauerstrom")])),_:1}),a(f,{unit:"A",labels:[{label:"Aus",value:0},{label:6,value:6},{label:7,value:7},{label:8,value:8},{label:9,value:9},{label:10,value:10},{label:11,value:11},{label:12,value:12},{label:13,value:13},{label:14,value:14},{label:15,value:15},{label:16,value:16}],"model-value":t.mqttStore.getChargePointConnectedVehiclePvChargingMinCurrent(t.modalChargePointId),"onUpdate:modelValue":e[12]||(e[12]=o=>c.setChargePointConnectedVehiclePvChargingMinCurrent(t.modalChargePointId,o))},null,8,["model-value"])]),_:1}),a(C,null,{default:i(()=>[a(g,null,{default:i(()=>e[39]||(e[39]=[r("Mindest-SoC")])),_:1}),a(f,{unit:"%",labels:[{label:"Aus",value:0},{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:20,value:20},{label:25,value:25},{label:30,value:30},{label:35,value:35},{label:40,value:40},{label:45,value:45},{label:50,value:50},{label:55,value:55},{label:60,value:60},{label:65,value:65},{label:70,value:70},{label:75,value:75},{label:80,value:80},{label:85,value:85},{label:90,value:90},{label:95,value:95}],"model-value":t.mqttStore.getChargePointConnectedVehiclePvChargingMinSoc(t.modalChargePointId),"onUpdate:modelValue":e[13]||(e[13]=o=>c.setChargePointConnectedVehiclePvChargingMinSoc(t.modalChargePointId,o))},null,8,["model-value"])]),_:1}),a(C,null,{default:i(()=>[a(g,null,{default:i(()=>e[40]||(e[40]=[r("Mindest-SoC Strom")])),_:1}),a(f,{min:6,max:32,unit:"A","model-value":t.mqttStore.getChargePointConnectedVehiclePvChargingMinSocCurrent(t.modalChargePointId),"onUpdate:modelValue":e[14]||(e[14]=o=>c.setChargePointConnectedVehiclePvChargingMinSocCurrent(t.modalChargePointId,o))},null,8,["model-value"])]),_:1}),a(C,null,{default:i(()=>[a(g,null,{default:i(()=>e[41]||(e[41]=[r("SoC-Limit")])),_:1}),a(f,{unit:"%",labels:[{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:20,value:20},{label:25,value:25},{label:30,value:30},{label:35,value:35},{label:40,value:40},{label:45,value:45},{label:50,value:50},{label:55,value:55},{label:60,value:60},{label:65,value:65},{label:70,value:70},{label:75,value:75},{label:80,value:80},{label:85,value:85},{label:90,value:90},{label:95,value:95},{label:100,value:100},{label:"Aus",value:101}],"model-value":t.mqttStore.getChargePointConnectedVehiclePvChargingMaxSoc(t.modalChargePointId),"onUpdate:modelValue":e[15]||(e[15]=o=>c.setChargePointConnectedVehiclePvChargingMaxSoc(t.modalChargePointId,o))},null,8,["model-value"])]),_:1})]),_:1})]),_:1}),t.mqttStore.getSimpleChargePointView?m("",!0):(d(),u(y,{key:0,name:"tab-scheduled-charging"},{default:i(()=>[Object.keys(t.mqttStore.getChargePointConnectedVehicleScheduledChargingPlans(t.modalChargePointId)).length===0?(d(),u(v,{key:0},{icon:i(()=>[a(b,{"fixed-width":"",icon:["fas","fa-info-circle"]})]),default:i(()=>[e[42]||(e[42]=r(" Es wurden noch keine Zeitpläne für das Zielladen eingerichtet. "))]),_:1})):(d(),u(I,{key:1},{default:i(()=>[(d(!0),S(M,null,L(t.mqttStore.getChargePointConnectedVehicleScheduledChargingPlans(t.modalChargePointId),(o,T)=>(d(),u(C,{key:T},{default:i(()=>[a(N,null,{default:i(()=>[a(w,null,{default:i(()=>[a(g,null,{default:i(()=>[r(s(o.name),1)]),_:2},1024)]),_:2},1024),a(w,null,{default:i(()=>[a(P,{size:"lg",block:"",color:o.active?"success":"danger",onClick:te=>c.setChargePointConnectedVehicleScheduledChargingPlanActive(T,!o.active)},{default:i(()=>[o.frequency.selected=="once"?(d(),S("span",ke,[a(b,{"fixed-width":"",icon:["fas","calendar-day"]}),r(" "+s(t.mqttStore.formatDate(o.frequency.once)),1)])):m("",!0),o.frequency.selected=="daily"?(d(),S("span",ve,[a(b,{"fixed-width":"",icon:["fas","calendar-week"]}),e[43]||(e[43]=r(" täglich "))])):m("",!0),o.frequency.selected=="weekly"?(d(),S("span",qe,[a(b,{"fixed-width":"",icon:["fas","calendar-alt"]}),r(" "+s(t.mqttStore.formatWeeklyScheduleDays(o.frequency.weekly)),1)])):m("",!0),a(b,{"fixed-width":"",icon:["fas","clock"]}),r(" "+s(o.time)+" ",1),o.limit.selected=="soc"?(d(),S("span",ye,[a(b,{"fixed-width":"",icon:["fas","car-battery"]}),r(" "+s(o.limit.soc_scheduled)+" % ",1)])):m("",!0),o.limit.selected=="amount"?(d(),S("span",we,[a(b,{"fixed-width":"",icon:["fas","bolt"]}),r(" "+s(o.limit.amount/1e3)+" kWh ",1)])):m("",!0)]),_:2},1032,["color","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}))]),_:1})),t.mqttStore.getSimpleChargePointView?m("",!0):(d(),u(y,{key:1,name:"tab-time-charging"},{default:i(()=>[a(I,null,{default:i(()=>[a(C,null,{default:i(()=>[a(g,null,{default:i(()=>e[44]||(e[44]=[r("Zeitladen aktivieren")])),_:1}),a(V,{block:""},{default:i(()=>[a(P,{color:t.mqttStore.getChargePointConnectedVehicleTimeChargingActive(t.modalChargePointId)!==!0?"danger":"",onClick:e[16]||(e[16]=o=>c.setChargePointConnectedVehicleTimeChargingActive(t.modalChargePointId,!1))},{default:i(()=>e[45]||(e[45]=[r(" Nein ")])),_:1},8,["color"]),a(P,{color:t.mqttStore.getChargePointConnectedVehicleTimeChargingActive(t.modalChargePointId)===!0?"success":"",onClick:e[17]||(e[17]=o=>c.setChargePointConnectedVehicleTimeChargingActive(t.modalChargePointId,!0))},{default:i(()=>e[46]||(e[46]=[r(" Ja ")])),_:1},8,["color"])]),_:1})]),_:1}),t.mqttStore.getChargePointConnectedVehicleTimeChargingActive(t.modalChargePointId)===!0?(d(),S("div",Me,[Object.keys(t.mqttStore.getChargePointConnectedVehicleTimeChargingPlans(t.modalChargePointId)).length===0?(d(),u(v,{key:0,color:"warning",class:"_margin-top:2"},{icon:i(()=>[a(b,{"fixed-width":"",icon:["fas","fa-circle-info"]})]),default:i(()=>[e[47]||(e[47]=r(" Es wurden noch keine Zeitpläne für das Zeitladen eingerichtet. "))]),_:1})):(d(),S("div",Te,[(d(!0),S(M,null,L(t.mqttStore.getChargePointConnectedVehicleTimeChargingPlans(t.modalChargePointId),(o,T)=>(d(),u(C,{key:T},{default:i(()=>[a(N,null,{default:i(()=>[a(w,null,{default:i(()=>[a(g,null,{default:i(()=>[r(s(o.name),1)]),_:2},1024)]),_:2},1024),a(w,null,{default:i(()=>[a(P,{size:"lg",block:"",color:o.active?"success":"danger",onClick:te=>c.setChargePointConnectedVehicleTimeChargingPlanActive(T,!o.active)},{default:i(()=>[o.frequency.selected=="once"?(d(),S("span",xe,[a(b,{"fixed-width":"",icon:["fas","calendar-day"]}),r(" "+s(t.mqttStore.formatDateRange(o.frequency.once)),1)])):m("",!0),o.frequency.selected=="daily"?(d(),S("span",Le,[a(b,{"fixed-width":"",icon:["fas","calendar-week"]}),e[48]||(e[48]=r(" täglich "))])):m("",!0),o.frequency.selected=="weekly"?(d(),S("span",Be,[a(b,{"fixed-width":"",icon:["fas","calendar-alt"]}),r(" "+s(t.mqttStore.formatWeeklyScheduleDays(o.frequency.weekly)),1)])):m("",!0),a(b,{"fixed-width":"",icon:["fas","clock"]}),r(" "+s(o.time.join("-"))+" ",1),o.limit.selected=="soc"?(d(),S("span",$e,[a(b,{"fixed-width":"",icon:["fas","car-battery"]}),r(" "+s(o.limit.soc)+" % ",1)])):m("",!0),o.limit.selected=="amount"?(d(),S("span",Ae,[a(b,{"fixed-width":"",icon:["fas","bolt"]}),r(" "+s(o.limit.amount/1e3)+" kWh ",1)])):m("",!0)]),_:2},1032,["color","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]))])):m("",!0)]),_:1})]),_:1}))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),a(ee,{modelValue:t.modalManualSocInputVisible,"onUpdate:modelValue":e[20]||(e[20]=o=>t.modalManualSocInputVisible=o),"vehicle-id":t.modalVehicleId},null,8,["modelValue","vehicle-id"])],64)}],["__scopeId","data-v-76699ceb"]]);export{De as default};
