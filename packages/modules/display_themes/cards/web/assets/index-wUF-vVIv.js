import{o as f,e as S,k as p,x as V,j as T,F as D,H as N,l as u,n as _,p as a,f as y,i as B,s,I as M,z as O,R as F,J as R,K as U,L as A,M as z,N as j,O as H,P as G}from"./vendor-xCcLvHvG.js";import{_ as v,I as K,c as J}from"./vendor-inkline-F2zxVbzD.js";import{l as $,f as L,a as I,F as E,b as Z,c as Y}from"./vendor-fortawesome-S-qqChZo.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const Q={name:"DateTime",props:{separator:{String,default:"<br />"}},data(){return{dateTimeInterval:"",date:"",time:""}},methods:{update(){const e=new Date,t={weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"},o={hour:"2-digit",minute:"2-digit",second:"2-digit"};this.date=e.toLocaleDateString(void 0,t),this.time=e.toLocaleTimeString(void 0,o)}},mounted(){this.update(),this.dateTimeInterval=setInterval(this.update,1e3)},beforeUnmount(){clearInterval(this.dateTimeInterval)}},X=["innerHTML"];function ee(e,t,o,c,r,n){return f(),S(D,null,[p(V(r.time),1),T("span",{innerHTML:o.separator},null,8,X),p(V(r.date),1)],64)}const te=v(Q,[["render",ee]]),w=N("mqtt",{state:()=>({settings:{parentChargePoint1:void 0,parentChargePoint2:void 0},topics:{},chartData:{}}),getters:{getChargePointFilter:e=>{let t=[];return e.settings.parentChargePoint1!==void 0&&t.push(e.settings.parentChargePoint1),e.settings.parentChargePoint2!==void 0&&t.push(e.settings.parentChargePoint2),t},getWildcardIndexList:e=>(t,o=!1)=>{let c=t;o||(c="^"+t.replaceAll("/","\\/").replaceAll("+","[^+/]+").replaceAll("#","[^#/]+")+"$");let r=Object.keys(e.topics).filter(n=>n.match(c));return r.forEach((n,i,l)=>{l[i]=parseInt(n.match(/(?:\/)([0-9]+)(?=\/)*/g)[0].replace(/[^0-9]+/g,""))}),r},getWildcardTopics:e=>(t,o=!1)=>{let c=t;return o||(c="^"+t.replaceAll("/","\\/").replaceAll("+","[^+/]+").replaceAll("#","[^#/]+")+"$"),Object.keys(e.topics).filter(r=>r.match(c)).reduce((r,n)=>({...r,[n]:e.topics[n]}),{})},getObjectIds:e=>t=>{function o(c){let r=[];return c!==void 0&&c.forEach(n=>{n.type==t&&r.push(n.id),r=[...r,...o(n.children)]}),r}return o(e.topics["openWB/counter/get/hierarchy"])},getValueBool:e=>(t,o=!1)=>{let c=e.topics[t];return c!==void 0?c:(console.warn("topic not found! using default",t,o),o)},getValueString:e=>(t,o="W",c="",r=!0,n=!1,i="---",l=void 0)=>{var g=!1,d=e.topics[t];if(d===void 0||l!==void 0&&d[l]===void 0)console.warn("topic not found! using default",t,i),m=i;else{l!==void 0&&(d=d[l]),n&&(d*=-1);for(var m=d.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0});r&&(d>999||d<-999);)switch(d=d/1e3,g=!0,c){case"":c="k";break;case"k":c="M";break;case"M":c="G";break}m=d.toLocaleString(void 0,{minimumFractionDigits:g?2:0,maximumFractionDigits:g?2:0})}return`${m} ${c}${o}`},getChartData:e=>t=>e.chartData[t]===void 0?[]:e.chartData[t],getDisplayStandby:e=>e.topics["openWB/optional/int_display/standby"],getThemeConfiguration:e=>{if("openWB/optional/int_display/theme"in e.topics&&e.topics["openWB/optional/int_display/theme"]!==void 0&&"configuration"in e.topics["openWB/optional/int_display/theme"])return e.topics["openWB/optional/int_display/theme"].configuration},getDashBoardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_view:!0},getChargePointsEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_charge_points_view:!0},getStateEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_status_view:!0},getGridCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_grid:!0},getHomeCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_home_consumption:!0},getBatteryCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_battery_sum:!0},getChargePointsCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_charge_point_sum:!0},getPvCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_inverter_sum:!0},getLockChanges(e){return e.getThemeConfiguration?e.getThemeConfiguration.lock_changes:!0},getGridId(e){let t=e.topics["openWB/counter/get/hierarchy"];if(t!==void 0&&Object.keys(t).length>0){let o=Object.keys(e.topics["openWB/counter/get/hierarchy"])[0];if(console.debug("getGridId",o,e.topics["openWB/counter/get/hierarchy"][o]),e.topics["openWB/counter/get/hierarchy"][o].type=="counter")return e.topics["openWB/counter/get/hierarchy"][o].id}},getGridPower(e){let t=e.getGridId;return t===void 0?"---":e.getValueString(`openWB/counter/${t}/get/power`,"W")},getGridPowerChartData(e){let t=e.getGridId;return t===void 0?[]:e.getChartData(`openWB/counter/${t}/get/power`)},getHomePower(e){return e.getValueString("openWB/counter/set/home_consumption","W")},getHomePowerChartData(e){return e.getChartData("openWB/counter/set/home_consumption")},getBatteryConfigured(e){return e.getValueBool("openWB/bat/config/configured")},getBatteryPower(e){return e.getValueString("openWB/bat/get/power","W")},getBatteryPowerChartData(e){return e.getChartData("openWB/bat/get/power")},getBatterySoc(e){return e.getValueString("openWB/bat/get/soc","%","",!1)},getBatterySocChartData(e){return e.getChartData("openWB/bat/get/soc")},getPvConfigured(e){return e.getValueBool("openWB/pv/config/configured")},getPvPower(e){return e.getValueString("openWB/pv/get/power","W","",!0,!0)},getPvPowerChartData(e){return e.getChartData("openWB/pv/get/power").map(t=>t*-1)},getChargePointSumPower(e){return e.getValueString("openWB/chargepoint/get/power","W")},getChargePointSumPowerChartData(e){return e.getChartData("openWB/chargepoint/get/power")},getChargePointIds(e){let t=e.getObjectIds("cp"),o=this.getChargePointFilter;return o.length>0?(console.debug("charge points are filtered!",t,o),t.filter(c=>o.includes(c))):t},getChargePointName(e){return t=>e.topics[`openWB/chargepoint/${t}/config`]!==void 0?e.topics[`openWB/chargepoint/${t}/config`].name:"---"},getChargePointPower(e){return t=>e.getValueString(`openWB/chargepoint/${t}/get/power`,"W")},getChargePointImportedSincePlugged(e){return t=>({energy:e.getValueString(`openWB/chargepoint/${t}/set/log`,"Wh","",!0,!1,"---","imported_since_plugged"),range:e.getValueString(`openWB/chargepoint/${t}/set/log`,"m","k",!1,!1,"---","range_charged")})},getChargePointPowerChartData(e){return t=>e.getChartData(`openWB/chargepoint/${t}/get/power`)},getChargePointSetCurrent(e){return t=>e.getValueString(`openWB/chargepoint/${t}/set/current`,"A")},getChargePointPhasesInUse(e){return t=>{const o=["/","①","②","③"],c=e.topics[`openWB/chargepoint/${t}/get/phases_in_use`];return c!==void 0&&c>=0&&c<o.length?o[e.topics[`openWB/chargepoint/${t}/get/phases_in_use`]]:(console.warn("topic not found!",`openWB/chargepoint/${t}/get/phases_in_use`),"?")}},getChargePointPlugState(e){return t=>e.getValueBool(`openWB/chargepoint/${t}/get/plug_state`)},getChargePointChargeState(e){return t=>e.getValueBool(`openWB/chargepoint/${t}/get/charge_state`)},getChargePointManualLock(e){return t=>e.getValueBool(`openWB/chargepoint/${t}/set/manual_lock`)},getChargepointTagState(e){return t=>{if([void 0,null,""].includes(e.topics[`openWB/chargepoint/${t}/set/rfid`])){if(![void 0,null,""].includes(e.topics[`openWB/chargepoint/${t}/get/rfid`]))return 1}else return 2;return 0}},getChargePointConnectedVehicleConfig(e){return t=>e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/config`]},getChargePointConnectedVehicleChargeMode(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.translateChargeMode(e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.selected)}},getChargePointConnectedVehiclePriority(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).prio}},getChargePointConnectedVehicleInfo(e){return t=>e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/info`]},getChargePointConnectedVehicleId(e){return t=>{if(e.getChargePointConnectedVehicleInfo(t))return e.getChargePointConnectedVehicleInfo(t).id}},getChargePointConnectedVehicleChargeTemplateIndex(e){return t=>{if(e.getChargePointConnectedVehicleConfig(t))return e.getChargePointConnectedVehicleConfig(t).charge_template}},getChargePointConnectedVehicleChargeTemplate(e){return t=>{let o=e.getChargePointConnectedVehicleChargeTemplateIndex(t);return e.topics[`openWB/vehicle/template/charge_template/${o}`]}},getChargePointConnectedVehicleEvTemplate(e){return t=>{if(e.getChargePointConnectedVehicleConfig(t))return e.getChargePointConnectedVehicleConfig(t).ev_template}},getChargePointConnectedVehicleName(e){return t=>{if(e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/info`])return e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/info`].name}},getChargePointConnectedVehicleSoc(e){return t=>e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/soc`]},getChargePointConnectedVehicleTimeChargingActive(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).time_charging.active}},getChargePointConnectedVehicleTimeChargingRunning(e){return t=>{let o=e.getChargePointConnectedVehicleConfig(t).time_charging_in_use;return o!==void 0?o:!1}},getChargePointConnectedVehicleInstantChargingCurrent(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.instant_charging.current}},getChargePointConnectedVehicleInstantChargingLimit(e){return t=>e.getChargePointConnectedVehicleChargeTemplate(t)?e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.instant_charging.limit:{selected:void 0}},getChargePointConnectedVehiclePvChargingFeedInLimit(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.pv_charging.feed_in_limit}},getChargePointConnectedVehiclePvChargingMinCurrent(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.pv_charging.min_current}},getChargePointConnectedVehiclePvChargingMinSoc(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.pv_charging.min_soc}},getChargePointConnectedVehiclePvChargingMinSocCurrent(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.pv_charging.min_soc_current}},getChargePointConnectedVehiclePvChargingMaxSoc(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.pv_charging.max_soc}},getChargePointConnectedVehicleScheduledChargingPlans(e){return t=>{let o=e.getChargePointConnectedVehicleChargeTemplateIndex(t);return e.getWildcardTopics(`openWB/vehicle/template/charge_template/${o}/chargemode/scheduled_charging/plans/+`)}},getChargePointConnectedVehicleTimeChargingPlans(e){return t=>{let o=e.getChargePointConnectedVehicleChargeTemplateIndex(t);return e.getWildcardTopics(`openWB/vehicle/template/charge_template/${o}/time_charging/plans/+`)}},getVehicleList(e){return e.getWildcardTopics("openWB/vehicle/+/name")},getVehicleName(e){return t=>e.topics[`openWB/vehicle/${t}/name`]},getVehicleSocConfigured(e){return t=>e.topics[`openWB/vehicle/${t}/soc_module/config`].type!=null},getVehicleSocIsManual(e){return t=>e.topics[`openWB/vehicle/${t}/soc_module/config`].type=="manual"},getVehicleFaultState(e){return t=>e.topics[`openWB/vehicle/${t}/get/fault_state`]?e.topics[`openWB/vehicle/${t}/get/fault_state`]:0},getSystemCurrentCommit(e){if(e.topics["openWB/system/current_commit"])return e.topics["openWB/system/current_commit"]},getSystemIp(e){if(e.topics["openWB/system/ip_address"])return e.topics["openWB/system/ip_address"]},getSystemBranch(e){if(e.topics["openWB/system/current_branch"])return e.topics["openWB/system/current_branch"]},getSystemTime(e){if(e.topics["openWB/system/time"])return new Date(e.topics["openWB/system/time"]*1e3).toLocaleString()},getSystemVersion(e){if(e.topics["openWB/system/version"])return e.topics["openWB/system/version"]},getRfidEnabled(){return this.getValueBool("openWB/optional/rfid/active")}},actions:{updateSetting(e,t){e in this.settings&&(this.settings[e]=t)},initTopic(e,t=void 0){e.includes("#")||e.includes("+")?console.debug("skipping init of wildcard topic:",e):this.addTopic(e,t)},addTopic(e,t){console.debug("addTopic",e,t),this.topics[e]=t},removeTopic(e){e.includes("#")||e.includes("+")?(console.debug("expanding wildcard topic for removal:",e),Object.keys(this.getWildcardTopics(e)).forEach(t=>{console.debug("removing wildcardTopic:",t),delete this.topics[t]})):delete this.topics[e]},updateTopic(e,t,o=void 0){const c=(r,n,i)=>n.split(".").reduce((l,g,d)=>l[g]=n.split(".").length===++d?i:l[g]||{},r);e in this.topics?o!=null?c(this.topics[e],o,t):this.topics[e]=t:console.debug("topic not found: ",e)},updateChartData(){for(const[e,t]of Object.entries(this.topics))(e.endsWith("home_consumption")||e.endsWith("power")||e.endsWith("soc"))&&(this.chartData[e]===void 0&&(this.chartData[e]=[]),t!=null&&(this.chartData[e].push(t),this.chartData[e].slice(-128)))},updateState(e,t,o=void 0){console.debug("updateState:",e,t,o),this.updateTopic(e,t,o)},chargeModeList(){var e=[{id:"instant_charging"},{id:"pv_charging"},{id:"scheduled_charging"},{id:"standby"},{id:"stop"}];return e.forEach(t=>{t.label=this.translateChargeMode(t.id).label,t.class=this.translateChargeMode(t.id).class}),e},translateChargeMode(e){switch(e){case"instant_charging":return{mode:e,label:"Sofort",class:"danger"};case"pv_charging":return{mode:e,label:"PV",class:"success"};case"scheduled_charging":return{mode:e,label:"Zielladen",class:"primary"};case"time_charging":return{mode:e,label:"Zeitladen",class:"warning"};case"standby":return{mode:e,label:"Standby",class:"secondary"};case"stop":return{mode:e,label:"Stop",class:"dark"};default:return console.warn("unknown charge mode:",e),{mode:e,label:e,class:e}}},checkChangesLockCode(e){return!!(this.getThemeConfiguration&&this.getThemeConfiguration.lock_changes_code==e)},formatDate(e,t={year:"numeric",month:"2-digit",day:"2-digit"}){return new Date(e).toLocaleDateString(void 0,t)},formatDateRange(e,t="-"){const o={year:"numeric",month:"2-digit",day:"2-digit"};let c={day:"2-digit"};const r=new Date(e[0]),n=new Date(e[1]);return r.getFullYear()==n.getFullYear()?r.getMonth()!=n.getMonth()&&(c.month=o.month):c=o,`${this.formatDate(e[0],c)}${t}${this.formatDate(e[1],o)}`},formatWeeklyScheduleDays(e){const t=["Mo","Di","Mi","Do","Fr","Sa","So"];let o=[];return e.forEach(function(c,r){c==!0&&o.push(t[r])}),o.join(",")}}}),ne={name:"NavItem",props:{to:{type:Object,required:!0}}};function oe(e,t,o,c,r,n){const i=u("i-nav-item");return f(),_(i,{to:o.to,"active-class":"-active",class:"_border _border-color:primary _text-align:center"},{default:a(()=>[y(e.$slots,"default",{},void 0,!0)]),_:3},8,["to"])}const re=v(ne,[["render",oe],["__scopeId","data-v-57706a44"]]),ie={name:"NavBar",components:{NavItem:re},data(){return{mqttStore:w()}}};function ae(e,t,o,c,r,n){const i=u("nav-item"),l=u("i-nav");return f(),_(l,{vertical:"",class:"_align-items:stretch"},{default:a(()=>[r.mqttStore.getDashBoardEnabled?(f(),_(i,{key:0,to:{name:"dash-board"}},{default:a(()=>[p(" Übersicht ")]),_:1})):B("",!0),r.mqttStore.getChargePointsEnabled&&r.mqttStore.getChargePointIds.length>0?(f(),_(i,{key:1,to:{name:"charge-points"}},{default:a(()=>[p(" Ladepunkte ")]),_:1})):B("",!0),r.mqttStore.getStateEnabled?(f(),_(i,{key:2,to:{name:"status"}},{default:a(()=>[p(" Status ")]),_:1})):B("",!0)]),_:1})}const se=v(ie,[["render",ae]]);$.add(L,I);const ce={name:"NumberPad",data(){return{}},components:{FontAwesomeIcon:E},emits:["key:digit","key:clear","key:delete"],methods:{emitDigit(e){this.$emit("key:digit",e)},emitClear(){this.$emit("key:clear")},emitDelete(){this.$emit("key:delete")}}};function le(e,t,o,c,r,n){const i=u("i-button"),l=u("i-column"),g=u("i-row"),d=u("FontAwesomeIcon"),m=u("i-container");return f(),_(m,null,{default:a(()=>[s(g,{center:"",class:"_padding-bottom:1"},{default:a(()=>[s(l,{class:"_flex-grow:0"},{default:a(()=>[s(i,{size:"lg",class:"pinButton",onClick:t[0]||(t[0]=h=>n.emitDigit("1"))},{default:a(()=>[p(" 1 ")]),_:1})]),_:1}),s(l,{class:"_flex-grow:0"},{default:a(()=>[s(i,{size:"lg",class:"pinButton",onClick:t[1]||(t[1]=h=>n.emitDigit("2"))},{default:a(()=>[p(" 2 ")]),_:1})]),_:1}),s(l,{class:"_flex-grow:0"},{default:a(()=>[s(i,{size:"lg",class:"pinButton",onClick:t[2]||(t[2]=h=>n.emitDigit("3"))},{default:a(()=>[p(" 3 ")]),_:1})]),_:1})]),_:1}),s(g,{center:"",class:"_padding-bottom:1"},{default:a(()=>[s(l,{class:"_flex-grow:0"},{default:a(()=>[s(i,{size:"lg",class:"pinButton",onClick:t[3]||(t[3]=h=>n.emitDigit("4"))},{default:a(()=>[p(" 4 ")]),_:1})]),_:1}),s(l,{class:"_flex-grow:0"},{default:a(()=>[s(i,{size:"lg",class:"pinButton",onClick:t[4]||(t[4]=h=>n.emitDigit("5"))},{default:a(()=>[p(" 5 ")]),_:1})]),_:1}),s(l,{class:"_flex-grow:0"},{default:a(()=>[s(i,{size:"lg",class:"pinButton",onClick:t[5]||(t[5]=h=>n.emitDigit("6"))},{default:a(()=>[p(" 6 ")]),_:1})]),_:1})]),_:1}),s(g,{center:"",class:"_padding-bottom:1"},{default:a(()=>[s(l,{class:"_flex-grow:0"},{default:a(()=>[s(i,{size:"lg",class:"pinButton",onClick:t[6]||(t[6]=h=>n.emitDigit("7"))},{default:a(()=>[p(" 7 ")]),_:1})]),_:1}),s(l,{class:"_flex-grow:0"},{default:a(()=>[s(i,{size:"lg",class:"pinButton",onClick:t[7]||(t[7]=h=>n.emitDigit("8"))},{default:a(()=>[p(" 8 ")]),_:1})]),_:1}),s(l,{class:"_flex-grow:0"},{default:a(()=>[s(i,{size:"lg",class:"pinButton",onClick:t[8]||(t[8]=h=>n.emitDigit("9"))},{default:a(()=>[p(" 9 ")]),_:1})]),_:1})]),_:1}),s(g,{center:""},{default:a(()=>[s(l,{class:"_flex-grow:0"},{default:a(()=>[s(i,{size:"lg",class:"pinButton",onClick:t[9]||(t[9]=h=>n.emitClear())},{default:a(()=>[s(d,{"fixed-width":"",icon:["fas","fa-eraser"]})]),_:1})]),_:1}),s(l,{class:"_flex-grow:0"},{default:a(()=>[s(i,{size:"lg",class:"pinButton",onClick:t[10]||(t[10]=h=>n.emitDigit("0"))},{default:a(()=>[p(" 0 ")]),_:1})]),_:1}),s(l,{class:"_flex-grow:0"},{default:a(()=>[s(i,{size:"lg",class:"pinButton",onClick:t[11]||(t[11]=h=>n.emitDelete())},{default:a(()=>[s(d,{"fixed-width":"",icon:["fas","fa-delete-left"]})]),_:1})]),_:1})]),_:1})]),_:1})}const ue=v(ce,[["render",le],["__scopeId","data-v-f71039c5"]]),de={name:"CodeInputModal",props:{modelValue:{type:Boolean,required:!0},backgroundColor:{type:String,default:"warning"},placeholderCharacter:{type:String,default:"*",validator(e){return e.length==1}},inputVisible:{type:Boolean,default:!1},minLength:{type:Number,default:4},maxLength:{type:Number,default:4}},data(){return{number:"",modalBackground:this.backgroundColor}},components:{NumberPad:ue},emits:["update:modelValue","update:inputValue"],computed:{placeholder(){return this.placeholderCharacter.repeat(this.minLength)},enableSubmit(){return this.number.length>=this.minLength&&this.number.length<=this.maxLength}},watch:{modelValue(e,t){e===!1&&t===!0&&this.clear()}},methods:{abort(){this.$emit("update:modelValue",!1)},addDigit(e){this.number.length<this.maxLength&&(this.number+=e)},removeDigit(){this.number=this.number.slice(0,-1)},clear(){this.number=""},submit(){this.$emit("update:inputValue",this.number)},success(e="success"){this.modalBackground=e,setTimeout(()=>{this.$emit("update:modelValue",!1),this.modalBackground=this.backgroundColor},500)},error(e="danger"){this.modalBackground=e,setTimeout(()=>{this.clear(),this.modalBackground=this.backgroundColor},2e3)}}};function ge(e,t,o,c,r,n){const i=u("i-input"),l=u("i-column"),g=u("i-row"),d=u("NumberPad"),m=u("i-container"),h=u("i-button"),b=u("i-modal");return f(),_(M,{to:"body"},[s(b,{modelValue:o.modelValue,"onUpdate:modelValue":t[4]||(t[4]=C=>e.$emit("update:modelValue",C)),color:r.modalBackground},{header:a(()=>[y(e.$slots,"header",{},()=>[p(" **HEADER** ")])]),footer:a(()=>[s(m,null,{default:a(()=>[s(g,null,{default:a(()=>[s(l,null,{default:a(()=>[s(h,{color:"danger",onClick:n.abort},{default:a(()=>[y(e.$slots,"abort",{},()=>[p(" Zurück ")])]),_:3},8,["onClick"])]),_:3}),s(l,{class:"_text-align:right"},{default:a(()=>[n.enableSubmit?(f(),_(h,{key:0,color:"success",onClick:n.submit},{default:a(()=>[y(e.$slots,"submit",{},()=>[p(" OK ")])]),_:3},8,["onClick"])):B("",!0)]),_:3})]),_:3})]),_:3})]),default:a(()=>[s(m,null,{default:a(()=>[s(g,{center:"",class:"_padding-bottom:1"},{default:a(()=>[s(l,null,{default:a(()=>[s(i,{modelValue:r.number,"onUpdate:modelValue":t[0]||(t[0]=C=>r.number=C),placeholder:n.placeholder,readonly:"",size:"lg",type:o.inputVisible?"text":"password",class:"_text-align:center"},null,8,["modelValue","placeholder","type"])]),_:1})]),_:1}),s(d,{"onKey:digit":t[1]||(t[1]=C=>n.addDigit(C)),"onKey:clear":t[2]||(t[2]=C=>n.clear()),"onKey:delete":t[3]||(t[3]=C=>n.removeDigit(C))})]),_:1})]),_:3},8,["modelValue","color"])])}const he=v(de,[["render",ge]]);$.add(Z,Y,L,I);const pe={name:"LockNavItem",props:{},data(){return{mqttStore:w(),modalPinEntryVisible:!1,modalPinEntryColor:"warning",code:"",countdown:0,countdownInterval:void 0,events:["mousemove","touchmove","wheel"]}},components:{FontAwesomeIcon:E,CodeInputModal:he},computed:{changesLocked:{get(){return this.mqttStore.settings.changesLocked},set(e){this.mqttStore.settings.changesLocked=e}},timer(){return Math.trunc(this.countdown/60).toString()+":"+(this.countdown%60).toString().padStart(2,"0")}},methods:{toggleChangesLock(){this.changesLocked?this.unlockChanges():this.lockChanges()},unlockChanges(){this.modalPinEntryVisible=!0},checkUnlockCode(e){console.log("checkUnlockCode",e),this.mqttStore.checkChangesLockCode(e)?(this.$refs.lockInput.success("success"),this.changesLocked=!1,this.mqttStore.getDisplayStandby>0&&(this.countdown=this.mqttStore.getDisplayStandby,this.countdownInterval=setInterval(this.updateCountdown,1e3),this.events.forEach(t=>{document.addEventListener(t,this.handleDocumentEvent,{passive:!0})}))):(console.warn("check unlock code failed!"),this.$refs.lockInput.error("danger"))},lockChanges(){this.changesLocked=!0,this.events.forEach(e=>{document.removeEventListener(e,this.handleDocumentEvent,{passive:!0})}),this.countdownInterval!==void 0&&(clearInterval(this.countdownInterval),this.countdownInterval=void 0)},updateCountdown(){this.countdown-=1,this.countdown<1&&this.lockChanges()},handleDocumentEvent(){this.countdown=this.mqttStore.getDisplayStandby}},mounted(){this.changesLocked=!0}},me={key:0,class:"_padding-left:1"};function fe(e,t,o,c,r,n){const i=u("FontAwesomeIcon"),l=u("i-button"),g=u("CodeInputModal");return f(),S(D,null,[r.mqttStore.getLockChanges?(f(),_(l,{key:0,onClick:t[0]||(t[0]=d=>n.toggleChangesLock()),class:"_padding-left:0 _padding-right:0 _margin-bottom:1",size:"lg",block:"",color:this.changesLocked?"danger":"success"},{default:a(()=>[s(i,{"fixed-width":"",icon:this.changesLocked?["fas","fa-lock"]:["fas","fa-lock-open"],class:O(this.changesLocked?"_color:danger-80":"_color:success-80")},null,8,["icon","class"]),!n.changesLocked&&r.countdownInterval?(f(),S("span",me,V(n.timer),1)):B("",!0)]),_:1},8,["color"])):B("",!0),s(g,{modelValue:r.modalPinEntryVisible,"onUpdate:modelValue":t[1]||(t[1]=d=>r.modalPinEntryVisible=d),"onUpdate:inputValue":n.checkUnlockCode,ref:"lockInput",minLength:4,maxLength:10},{header:a(()=>[p(" Bitte den PIN zur Freigabe von Änderungen eingeben. ")]),_:1},8,["modelValue","onUpdate:inputValue"])],64)}const _e=v(pe,[["render",fe]]),Ce={name:"openwbDisplayCardsApp",components:{RouterView:F,DateTime:te,NavBar:se,LockNavItem:_e},data(){return{client:{connected:!1},connection:{protocol:location.protocol=="https:"?"wss":"ws",host:location.hostname,port:parseInt(location.port)||(location.protocol=="https:"?443:80),endpoint:"/ws",connectTimeout:4e3,reconnectPeriod:4e3},mqttTopicsToSubscribe:["openWB/bat/config/configured","openWB/bat/get/power","openWB/bat/get/soc","openWB/chargepoint/+/config","openWB/chargepoint/+/get/charge_state","openWB/chargepoint/+/get/connected_vehicle/+","openWB/chargepoint/+/get/phases_in_use","openWB/chargepoint/+/get/plug_state","openWB/chargepoint/+/get/power","openWB/chargepoint/+/get/rfid","openWB/chargepoint/+/set/current","openWB/chargepoint/+/set/manual_lock","openWB/chargepoint/+/set/log","openWB/chargepoint/+/set/rfid","openWB/chargepoint/get/power","openWB/counter/+/get/power","openWB/counter/get/hierarchy","openWB/counter/set/home_consumption","openWB/optional/int_display/theme","openWB/optional/int_display/standby","openWB/optional/rfid/active","openWB/pv/config/configured","openWB/pv/get/power","openWB/system/current_branch","openWB/system/current_commit","openWB/system/ip_address","openWB/system/time","openWB/system/version","openWB/vehicle/+/get/fault_state","openWB/vehicle/+/name","openWB/vehicle/+/soc_module/config","openWB/vehicle/template/charge_template/#"],mqttStore:w(),chartInterval:""}},computed:{changesLocked(){return this.mqttStore.getLockChanges&&this.mqttStore.settings.changesLocked}},methods:{createConnection(){const{protocol:e,host:t,port:o,endpoint:c,...r}=this.connection,n=`${e}://${t}:${o}${c}`;console.debug("connecting to broker:",n);try{this.client=R.connect(n,r)}catch(i){console.error("mqtt.connect error",i)}this.client.on("connect",()=>{console.debug("Connection succeeded! ClientId: ",this.client.options.clientId)}),this.client.on("error",i=>{console.error("Connection failed",i)}),this.client.on("message",(i,l)=>{if(console.debug(`Received message "${l}" from topic "${i}"`),l.toString().length>0){let g;try{g=JSON.parse(l.toString())}catch{console.debug("Json parsing failed, fallback to string: ",i),g=l.toString()}this.mqttStore.addTopic(i,g)}else this.mqttStore.removeTopic(i)})},doSubscribe(e){e.forEach(t=>{this.mqttStore.initTopic(t)}),this.client.subscribe(e,{},t=>{if(t){console.error("Subscribe to topics error",t);return}})},doUnsubscribe(e){e.forEach(t=>{this.mqttStore.removeTopic(t)}),this.client.unsubscribe(e,t=>{t&&console.error("Unsubscribe error",t)})},doPublish(e,t,o=!0,c=2){console.debug("doPublish",e,t);let r={qos:c,retain:o};this.client.publish(e,JSON.stringify(t),r,n=>{n&&console.error("Publish error",n)})},sendTopicToBroker(e,t=void 0){let o=e.replace("openWB/","openWB/set/");t===void 0&&(t=this.mqttStore.topics[e]),this.doPublish(o,t)},sendCommand(e){this.doPublish("openWB/set/command/"+this.client.options.clientId+"/todo",e,!1)},sendSystemCommand(e,t={}){this.sendCommand({command:e,data:t})}},created(){this.createConnection()},mounted(){let e=window.location.search;e!=""&&(console.debug("search",e),new URLSearchParams(e).forEach((o,c)=>{this.mqttStore.updateSetting(c,parseInt(o))})),this.doSubscribe(this.mqttTopicsToSubscribe),this.chartInterval=setInterval(this.mqttStore.updateChartData,5e3)},beforeUnmount(){this.doUnsubscribe(this.mqttTopicsToSubscribe),clearInterval(this.chartInterval)}};function be(e,t,o,c,r,n){const i=u("DateTime"),l=u("i-column"),g=u("i-row"),d=u("i-container"),m=u("LockNavItem"),h=u("NavBar"),b=u("i-layout-aside"),C=u("RouterView"),q=u("i-layout-content"),x=u("i-layout");return f(),_(x,{vertical:""},{default:a(()=>[s(b,{class:"_position:fixed"},{default:a(()=>[s(d,{fluid:"",class:"_margin-bottom:1"},{default:a(()=>[s(g,{center:""},{default:a(()=>[s(l,null,{default:a(()=>[s(i)]),_:1})]),_:1})]),_:1}),s(m),s(h,{changesLocked:n.changesLocked},null,8,["changesLocked"])]),_:1}),s(q,null,{default:a(()=>[s(C,{changesLocked:n.changesLocked},null,8,["changesLocked"])]),_:1})]),_:1})}const ve=v(Ce,[["render",be],["__scopeId","data-v-d1a69e62"]]),Be="modulepreload",ye=function(e){return"/openWB/web/display/themes/cards/"+e},P={},W=function(t,o,c){let r=Promise.resolve();if(o&&o.length>0){const n=document.getElementsByTagName("link");r=Promise.all(o.map(i=>{if(i=ye(i),i in P)return;P[i]=!0;const l=i.endsWith(".css"),g=l?'[rel="stylesheet"]':"";if(!!c)for(let h=n.length-1;h>=0;h--){const b=n[h];if(b.href===i&&(!l||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${g}`))return;const m=document.createElement("link");if(m.rel=l?"stylesheet":Be,l||(m.as="script",m.crossOrigin=""),m.href=i,document.head.appendChild(m),l)return new Promise((h,b)=>{m.addEventListener("load",h),m.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>t()).catch(n=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n})},we="/openWB/web/display/themes/cards/openWB_logo_dark.png",ke={name:"WelcomeView",data(){return{mqttStore:w()}},computed:{firstView(){if(this.mqttStore.getThemeConfiguration){if(this.mqttStore.getThemeConfiguration.enable_dashboard_view)return"dash-board";if(this.mqttStore.getThemeConfiguration.enable_charge_points_view)return"charge-points";if(this.mqttStore.getThemeConfiguration.enable_status_view)return"status"}}},methods:{selectFirstRoute(){this.firstView?this.$router.push({name:this.firstView}):console.warn("no router view enabled, check your configuration!")}},mounted(){setTimeout(this.selectFirstRoute,3e3)}},We=e=>(U("data-v-e5759067"),e=e(),A(),e),Se=We(()=>T("img",{class:"logo",src:we},null,-1));function Ve(e,t,o,c,r,n){const i=u("i-card"),l=u("i-column"),g=u("i-row"),d=u("i-container");return f(),_(d,null,{default:a(()=>[s(g,{center:"",middle:""},{default:a(()=>[s(l,null,{default:a(()=>[s(i,{color:"primary"},{header:a(()=>[p(" Cards Theme ")]),default:a(()=>[Se]),_:1})]),_:1})]),_:1})]),_:1})}const Pe=v(ke,[["render",Ve],["__scopeId","data-v-e5759067"]]),Te=z({history:j("/openWB/web/display/themes/cards/"),routes:[{path:"/",name:"welcome",component:Pe},{path:"/DashBoard",name:"dash-board",component:()=>W(()=>import("./DashBoardView-AFOfg6_9.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))},{path:"/ChargePoints",name:"charge-points",component:()=>W(()=>import("./ChargePointsView-uGsdLcgd.js"),__vite__mapDeps([10,1,2,3,4,5,6,7,8,11]))},{path:"/Status",name:"status",component:()=>W(()=>import("./StatusView-mPfFimm4.js"),__vite__mapDeps([12,7,3,2,4,1,5]))}]}),k=H(ve);k.use(G());k.use(Te);k.use(K,{colorMode:"dark",components:J});k.mount("#app");export{he as C,ue as N,w as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DashBoardView-AFOfg6_9.js","assets/DashBoardCard-qEoaavxr.js","assets/vendor-inkline-F2zxVbzD.js","assets/vendor-xCcLvHvG.js","assets/vendor-inkline-Dxj-ZgXa.css","assets/DashBoardCard-JoQ8MVPZ.css","assets/ChargePointPlugBadge-_vHTpbv2.js","assets/vendor-fortawesome-S-qqChZo.js","assets/ChargePointPlugBadge-rhc0EdNG.css","assets/DashBoardView-7-0x0RbA.css","assets/ChargePointsView-uGsdLcgd.js","assets/ChargePointsView-6VKTg2A7.css","assets/StatusView-mPfFimm4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}