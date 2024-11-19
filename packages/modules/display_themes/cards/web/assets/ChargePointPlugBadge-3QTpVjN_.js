import{O as x,o as h,e as c,i as f,F as P,A as w,y as m,j as S,q as d,l as C,n as v,s as b,x as g}from"./vendor-CFVb6_YQ.js";import{_ as y}from"./vendor-inkline-CqnuQ_Go.js";import{u as k}from"./index-D9XpyQux.js";import{l as D,z as I,A as q,B as $,F as z}from"./vendor-fortawesome-DhL64LM6.js";const l={props:{data:{required:!1,type:Array,default:void 0},socData:{required:!1,type:Array,default:void 0},width:{type:Number,default:250},height:{type:Number,default:70},gap:{type:Number,default:3},stroke:{type:Number,default:3},min:{type:Number,default:0},max:{type:Number,default:1},color:{type:String,default:"var(--color--primary)"},colorNegative:{type:String,default:void 0}},computed:{highestPoint(){return Math.max(1,this.max,...this.slicedData)},lowestPoint(){return Math.min(0,this.min,...this.slicedData)},maxPoints(){return Math.floor(this.width/(this.stroke+this.gap))},slicedData(){if(this.data)return this.data.slice(-this.maxPoints)},slicedSocData(){if(this.socData)return this.socData.slice(-this.maxPoints)},zeroHeight(){return this.height-(0-this.lowestPoint)/(this.highestPoint-this.lowestPoint)*this.height},coordinates(){if(this.data)return this.calculateCoordinates(this.slicedData,this.lowestPoint,this.highestPoint)},socCoordinates(){if(this.socData)return this.calculateCoordinates(this.slicedSocData,0,100)},bars(){if(this.coordinates){const t=[];return this.coordinates.forEach(s=>{const e=s.x,o=s.y,r=this.stroke,a=Math.min(o,this.zeroHeight),i=Math.abs(o-this.zeroHeight),n=o>this.zeroHeight;t.push({x:e,y:a,width:r,height:i,negative:n})}),t}},socPath(){if(this.socCoordinates&&this.socCoordinates.length>0){let s=this.socCoordinates.slice(0,1)[0],e=this.socCoordinates.slice(-1)[0];var t=`M 0,${this.height}`;return t+=` L 0,${s.y}`,this.socCoordinates.forEach(o=>{t+=` L ${o.x+this.stroke/2},${o.y}`}),t+=` L ${e.x+this.stroke},${e.y} L ${e.x+this.stroke},${this.height} Z`}}},methods:{calculateCoordinates(t,s,e){const o=[];return t.forEach((r,a)=>{const i=a*this.width/this.maxPoints+1,n=this.height-(r-s)/(e-s)*this.height;o.push({x:i,y:n})}),o}}},u=()=>{x(t=>({"3f7db06a":t.color,"1de516bf":t.colorNegative}))},p=l.setup;l.setup=p?(t,s)=>(u(),p(t,s)):u;const N=["viewBox"],M=["d"],_=["x","y","width","height"],A=["y1","x2","y2"],O=y(l,[["render",function(t,s,e,o,r,a){return h(),c("svg",{class:"spark-line",viewBox:`0 0 ${e.width} ${e.height}`,width:"100%",preserveAspectRatio:"xMinYMin"},[e.socData?(h(),c("path",{key:0,class:"soc-path",d:a.socPath},null,8,M)):f("",!0),(h(!0),c(P,null,w(a.bars,i=>(h(),c("rect",{key:i.x,x:i.x,y:i.y,width:i.width,height:i.height,class:m(e.colorNegative&&i.negative?"negative":"")},null,10,_))),128)),S("line",{class:"zero-line",x1:0,y1:a.zeroHeight,x2:e.width,y2:a.zeroHeight},null,8,A)],8,N)}],["__scopeId","data-v-22cdf82b"]]);D.add(I,q,$);const E={name:"ChargePointStateBadge",components:{FontAwesomeIcon:z},props:{chargePointId:{required:!0,type:Array},showEnergyCharged:{required:!1,type:Boolean,default:!0}},data:()=>({mqttStore:k()}),computed:{plugState(){var t=!1;return this.chargePointId.forEach(s=>{t|=this.mqttStore.getChargePointPlugState(s)}),t},chargeState(){var t=!1;return this.chargePointId.forEach(s=>{t|=this.mqttStore.getChargePointChargeState(s)}),t},stateIcon(){return this.plugState?this.chargeState?["fas","fa-plug-circle-bolt"]:["fas","fa-plug-circle-check"]:["fas","fa-plug-circle-xmark"]},stateClass(){return this.plugState?this.chargeState?"_color:success":"_color:warning":"_color:gray"}}},H={key:0,class:"_padding-left:1"},R=y(E,[["render",function(t,s,e,o,r,a){const i=d("font-awesome-icon"),n=d("i-badge");return h(),C(n,{size:"lg"},{default:v(()=>[b(i,{"fixed-width":"",icon:a.stateIcon,class:m(a.stateClass)},null,8,["icon","class"]),a.plugState&&e.showEnergyCharged?(h(),c("span",H,g(r.mqttStore.getChargePointImportedSincePlugged(e.chargePointId).energy)+" / "+g(r.mqttStore.getChargePointImportedSincePlugged(e.chargePointId).range),1)):f("",!0)]),_:1})}]]);export{R as C,O as S};
