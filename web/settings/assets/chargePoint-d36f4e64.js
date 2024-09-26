import{C as d}from"./ChargePointInstallation-fba1b24e.js";import{_ as p,u as r,k as u,l as c,D as n,N as l,y as t,x as e,z as s}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const h={name:"ChargePointMqtt",mixins:[d]},_={class:"charge-point-mqtt"},g=e("br",null,null,-1),f=e("br",null,null,-1),m=e("br",null,null,-1),b=e("span",{class:"text-info"},"12.34",-1),k=e("br",null,null,-1),B=e("br",null,null,-1),v=e("span",{class:"text-info"},"1",-1),w=e("br",null,null,-1),W=e("br",null,null,-1),T=e("span",{class:"text-info"},"[6.78,6.89,6.94]",-1),x=e("br",null,null,-1),P=e("br",null,null,-1),z=e("span",{class:"text-info"},"123.45",-1),L=e("br",null,null,-1),y=e("br",null,null,-1),F=e("span",{class:"text-info"},"true",-1),N=e("br",null,null,-1),A=e("br",null,null,-1),D=e("span",{class:"text-info"},"true",-1),Z=e("br",null,null,-1),S=e("br",null,null,-1),C=e("span",{class:"text-info"},"3",-1),E=e("br",null,null,-1),M=e("br",null,null,-1),V=e("br",null,null,-1),$=e("span",{class:"text-info"},"123.45",-1),q=e("br",null,null,-1),G=e("br",null,null,-1),I=e("br",null,null,-1),J=e("span",{class:"text-info"},"123.45",-1),K=e("br",null,null,-1),O=e("br",null,null,-1),Q=e("br",null,null,-1),j=e("span",{class:"text-info"},"[230.12,231.08,232.54]",-1),H=e("br",null,null,-1),R=e("br",null,null,-1),U=e("br",null,null,-1),X=e("span",{class:"text-info"},"[-0.87,0.96,1.0]",-1),Y=e("br",null,null,-1),ee=e("br",null,null,-1),te=e("span",{class:"text-info"},'"123654"',-1);function ne(i,le,ie,oe,se,ae){const a=r("openwb-base-alert"),o=r("openwb-base-copy-to-clipboard");return u(),c("div",_,[n(a,{subtype:"danger"},{default:l(()=>[t(" Dieser Ladepunkt-Typ darf nur in Kombination mit dem Simulator zur Fehleranalyse genutzt werden. Eine andere Verwendung ist laut den Nutzungsbedingungen untersagt. ")]),_:1}),n(a,{subtype:"info"},{default:l(()=>[t(" Das MQTT Modul stellt keine aktive Verbindung her, sondern erwartet, dass die Daten von speziellen Topics im Broker gelesen bzw. geschrieben werden."),g,t(" Alle Daten werden als gültiges JSON gesendet und auch so erwartet! Zahlen mit Nachkommastellen (Float) verwenden einen Punkt als Dezimaltrenner (internationales Format). "),e("ol",null,[e("li",null,[t(" von openWB gesendete Topics "),e("ul",null,[e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/chargepoint/"+s(i.chargePoint.id)+"/set/current",1)]),_:1}),f,t(" Sollwert des Ladestroms, mit Nachkommastellen (Float), positiv (laden) oder negativ (entladen, falls vom Ladepunkt unterstützt)."),m,t(" Beispiel: "),b]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/chargepoint/"+s(i.chargePoint.id)+"/set/phases_to_use",1)]),_:1}),k,t(" Sollwert für die Anzahl Phasen als Ganzzahl (Integer). Mögliche Werte: 1 oder 3"),B,t(" Beispiel: "),v])])]),e("li",null,[t(" von openWB zwingend erwartete Topics "),e("ul",null,[e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePoint.id)+"/get/currents",1)]),_:1}),w,t(" Aktuelle Phasenströme des Ladepunktes, Array mit drei Zahlen (Float), positiv (laden) oder negativ (entladen, falls vom Ladepunkt unterstützt)."),W,t(" Beispiel: "),T]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePoint.id)+"/get/power",1)]),_:1}),x,t(" Leistung in Watt, mit Nachkommastellen (Float), positiv (laden) oder negativ (entladen, falls vom Ladepunkt unterstützt)."),P,t(" Beispiel: "),z]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePoint.id)+"/get/plug_state",1)]),_:1}),L,t(" Zeigt an, ob aktuell ein Fahrzeug angesteckt ist, Wahrheitswert (Bool)."),y,t(" Beispiel: "),F]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePoint.id)+"/get/charge_state",1)]),_:1}),N,t(" Zeigt an, ob ein Ladevorgang aktiv ist, Wahrheitswert (Bool)."),A,t(" Beispiel: "),D]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePoint.id)+"/get/phases_in_use",1)]),_:1}),Z,t(" Anzahl der Phasen, mit denen geladen wird, Ganzzahl (Integer). Mögliche Werte: 0 bis 3"),S,t(" Beispiel: "),C])])]),e("li",null,[t(" optionale Topics "),e("ul",null,[e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePoint.id)+"/get/imported",1)]),_:1}),E,t(" Geladene Energie in Wh, mit Nachkommastellen (Float), nur positiv"),M,t(" Wird dieses Topic nicht vom Ladepunkt gesendet, so wird intern ein Zählerstand anhand der Leistung simuliert."),V,t(" Beispiel: "),$]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePoint.id)+"/get/exported",1)]),_:1}),q,t(" Entladene Energie in Wh, mit Nachkommastellen (Float), nur positiv"),G,t(" Wird dieses Topic nicht vom Ladepunkt gesendet, so wird intern ein Zählerstand anhand der Leistung simuliert."),I,t(" Beispiel: "),J]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePoint.id)+"/get/voltages",1)]),_:1}),K,t(" Aktuelle Phasenspannungen des Ladepunktes, Array mit drei Zahlen (Float), nur positiv."),O,t(" Die Spannungen werden nicht verarbeitet, sondern lediglich im Status angezeigt."),Q,t(" Beispiel: "),j]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePoint.id)+"/get/power_factors",1)]),_:1}),H,t(" Aktuelle Leistungsfaktoren des Ladepunktes, Array mit drei Zahlen (Float), Wertebereich von -1 bis 1."),R,t(" Die Leistungsfaktoren werden nicht verarbeitet, sondern lediglich im Status angezeigt."),U,t(" Beispiel: "),X]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePoint.id)+"/get/rfid_tag",1)]),_:1}),Y,t(" Eine Zeichenfolge, die einen eingelesenen Tag für openWB repräsentiert."),ee,t(" Beispiel: "),te])])])])]),_:1})])}const me=p(h,[["render",ne],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/mqtt/chargePoint.vue"]]);export{me as default};
