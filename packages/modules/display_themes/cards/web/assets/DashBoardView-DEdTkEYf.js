import{u as l}from"./index-D9XpyQux.js";import{D as q}from"./DashBoardCard-BqIRnhnk.js";import{S as P,C as b}from"./ChargePointPlugBadge-3QTpVjN_.js";import{l as w,d as I,F as y,e as B,g as D,h as L,i as _}from"./vendor-fortawesome-DhL64LM6.js";import{_ as p}from"./vendor-inkline-CqnuQ_Go.js";import{o as s,l as c,n as a,s as i,k as g,x as h,q as e,i as m,e as x}from"./vendor-CFVb6_YQ.js";w.add(I);const E=p({name:"GridCard",components:{DashBoardCard:q,SparkLine:P,FontAwesomeIcon:y},props:{},data:()=>({mqttStore:l()})},[["render",function(C,r,S,f,t,u){const o=e("font-awesome-icon"),n=e("spark-line"),d=e("dash-board-card");return s(),c(d,{color:"danger"},{headerLeft:a(()=>[i(o,{"fixed-width":"",icon:["fas","fa-gauge-high"]}),r[0]||(r[0]=g(" EVU "))]),headerRight:a(()=>[g(h(t.mqttStore.getGridPower()),1)]),default:a(()=>[i(n,{color:"var(--color--danger)","color-negative":"var(--color--success)",data:t.mqttStore.getGridPowerChartData},null,8,["data"])]),_:1})}]]);w.add(B);const F=p({name:"BatteryCard",components:{DashBoardCard:q,SparkLine:P,FontAwesomeIcon:y},props:{},data:()=>({mqttStore:l()})},[["render",function(C,r,S,f,t,u){const o=e("font-awesome-icon"),n=e("spark-line"),d=e("dash-board-card");return t.mqttStore.getBatteryConfigured?(s(),c(d,{key:0,color:"warning"},{headerLeft:a(()=>[i(o,{"fixed-width":"",icon:["fas","fa-car-battery"]}),r[0]||(r[0]=g(" Speicher "))]),headerRight:a(()=>[g(h(t.mqttStore.getBatterySoc())+" / "+h(t.mqttStore.getBatteryPower()),1)]),default:a(()=>[i(n,{color:"var(--color--warning)",data:t.mqttStore.getBatteryPowerChartData,"soc-data":t.mqttStore.getBatterySocChartData},null,8,["data","soc-data"])]),_:1})):m("",!0)}]]);w.add(D);const H=p({name:"InverterCard",components:{DashBoardCard:q,SparkLine:P,FontAwesomeIcon:y},props:{},data:()=>({mqttStore:l()})},[["render",function(C,r,S,f,t,u){const o=e("font-awesome-icon"),n=e("spark-line"),d=e("dash-board-card");return t.mqttStore.getPvConfigured?(s(),c(d,{key:0,color:"success"},{headerLeft:a(()=>[i(o,{"fixed-width":"",icon:["fas","fa-solar-panel"]}),r[0]||(r[0]=g(" PV "))]),headerRight:a(()=>[g(h(t.mqttStore.getPvPower()),1)]),default:a(()=>[i(n,{color:"var(--color--success)",data:t.mqttStore.getPvPowerChartData,inverted:!0},null,8,["data"])]),_:1})):m("",!0)}]]);w.add(L);const A=p({name:"HomeCard",components:{DashBoardCard:q,SparkLine:P,FontAwesomeIcon:y},props:{},data:()=>({mqttStore:l()})},[["render",function(C,r,S,f,t,u){const o=e("font-awesome-icon"),n=e("spark-line"),d=e("dash-board-card");return s(),c(d,{color:"light"},{headerLeft:a(()=>[i(o,{"fixed-width":"",icon:["fas","fa-home"]}),r[0]||(r[0]=g(" Hausverbrauch "))]),headerRight:a(()=>[g(h(t.mqttStore.getHomePower()),1)]),default:a(()=>[i(n,{color:"var(--color--light)",data:t.mqttStore.getHomePowerChartData},null,8,["data"])]),_:1})}]]);w.add(_);const G={name:"DashboardView",components:{GridCard:E,HomeCard:A,BatteryCard:F,InverterCard:H,ChargePointsCard:p({name:"ChargePointsCard",components:{DashBoardCard:q,SparkLine:P,FontAwesomeIcon:y,ChargePointPlugBadge:b},props:{},data:()=>({mqttStore:l()})},[["render",function(C,r,S,f,t,u){const o=e("font-awesome-icon"),n=e("charge-point-plug-badge"),d=e("spark-line"),k=e("dash-board-card");return t.mqttStore.getChargePointIds.length>0?(s(),c(k,{key:0,color:"primary"},{headerLeft:a(()=>[i(o,{"fixed-width":"",icon:["fas","fa-charging-station"]}),g(" "+h(t.mqttStore.getChargePointIds.length==1?t.mqttStore.getChargePointName(t.mqttStore.getChargePointIds[0]):"Ladepunkte"),1)]),headerRight:a(()=>[g(h(t.mqttStore.getChargePointIds.length==1?t.mqttStore.getChargePointPower(t.mqttStore.getChargePointIds[0]):t.mqttStore.getChargePointSumPower())+" ",1),i(n,{"charge-point-id":t.mqttStore.getChargePointIds,"show-energy-charged":!1},null,8,["charge-point-id"])]),default:a(()=>[i(d,{color:"var(--color--primary)",data:t.mqttStore.getChargePointIds.length==1?t.mqttStore.getChargePointPowerChartData(t.mqttStore.getChargePointIds[0]):t.mqttStore.getChargePointSumPowerChartData},null,8,["data"])]),_:1})):m("",!0)}]])},props:{changesLocked:{required:!1,type:Boolean,default:!1}},data:()=>({mqttStore:l()})},R={class:"dash-board-card-wrapper"},K=p(G,[["render",function(C,r,S,f,t,u){const o=e("grid-card"),n=e("home-card"),d=e("battery-card"),k=e("inverter-card"),v=e("charge-points-card");return s(),x("div",R,[t.mqttStore.getGridCardEnabled?(s(),c(o,{key:0})):m("",!0),t.mqttStore.getHomeCardEnabled?(s(),c(n,{key:1})):m("",!0),t.mqttStore.getBatteryCardEnabled?(s(),c(d,{key:2})):m("",!0),t.mqttStore.getPvCardEnabled?(s(),c(k,{key:3})):m("",!0),t.mqttStore.getChargePointsCardEnabled?(s(),c(v,{key:4})):m("",!0)])}],["__scopeId","data-v-2085947b"]]);export{K as default};
