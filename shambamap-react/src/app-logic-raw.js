function getDistCoords(id){
  var f=KENYA_GEO.features.find(function(x){return x.properties.id===id});
  return f?{lat:f.properties.centroid_lat,lng:f.properties.centroid_lng}:null;
}

// ══════ HORTICULTURE DATA ══════
var HORTI={"crops":{"tea":{"name":"Tea","icon":"🍵","color":"#16a34a","state_total":{"area_ha":270000,"prod_mt":594000,"national_share":100},"varieties":["TRFK 6/8","TRFK 31/8","TRFK 12/19","TRFK 91/1 (Purple)","Purple Tea PT-1"],"gi_tag":"Kenyan Tea","harvest_months":[1,2,3,4,5,6,7,8,9,10,11,12],"districts":{"kericho":{"area":42000,"prod":205000,"role":"Tea capital — global hub","variety":"TRFK 6/8, TRFK 31/8"},"bomet":{"area":28000,"prod":135000,"role":"Major producer","variety":"TRFK 6/8"},"nyeri":{"area":7500,"prod":18500,"role":"Premium Kenya AA tea","variety":"TRFK 31/8, Purple"},"muranga":{"area":9500,"prod":24000,"role":"Highland tea zone","variety":"TRFK 6/8"},"kiambu":{"area":6800,"prod":15500,"role":"Limuru tea belt","variety":"TRFK 31/8"},"meru":{"area":12000,"prod":31000,"role":"Eastern slopes tea","variety":"TRFK 12/19"},"embu":{"area":4500,"prod":11500,"role":"Mt Kenya East","variety":"TRFK 6/8"},"nakuru":{"area":5500,"prod":13500,"role":"Molo highlands","variety":"TRFK 31/8"},"kakamega":{"area":4200,"prod":10500,"role":"Western tea (Nandi border)","variety":"TRFK 6/8"},"kisii":{"area":7800,"prod":19500,"role":"Kisii Highland tea","variety":"TRFK 6/8"}}},"coffee":{"name":"Coffee","icon":"☕","color":"#6b4423","state_total":{"area_ha":110000,"prod_mt":49000,"national_share":100},"varieties":["SL28","SL34","Ruiru 11","Batian","K7"],"gi_tag":"Kenya AA Coffee","harvest_months":[10,11,12,1,5,6,7],"districts":{"nyeri":{"area":9841,"prod":6520,"role":"Premium Kenya AA — 13.2% of national output","variety":"SL28, Batian"},"muranga":{"area":9413,"prod":5070,"role":"Major coffee belt — 10.3% national share","variety":"SL28, SL34, Ruiru 11"},"kiambu":{"area":21300,"prod":8960,"role":"Largest producer — 18% of Kenya output","variety":"SL28, Batian"},"kirinyaga":{"area":10089,"prod":8930,"role":"Cooperative-led — 18% national share","variety":"SL34, Ruiru 11"},"embu":{"area":6881,"prod":2190,"role":"Eastern slopes — 4.4% of output","variety":"SL28, Ruiru 11"},"meru":{"area":8708,"prod":2300,"role":"Diversified — 4.7% national share","variety":"SL28, SL34"},"bungoma":{"area":7725,"prod":850,"role":"Mt Elgon coffee — emerging","variety":"K7, Ruiru 11"},"kisii":{"area":4579,"prod":620,"role":"South Western coffee","variety":"SL34, K7"},"nakuru":{"area":2200,"prod":420,"role":"Mid-altitude coffee","variety":"Ruiru 11"},"kakamega":{"area":1800,"prod":380,"role":"Minor producer","variety":"K7"}}},"avocado":{"name":"Avocado","icon":"🥑","color":"#059669","state_total":{"area_ha":35000,"prod_mt":420000,"national_share":100},"varieties":["Hass","Fuerte","Pinkerton","Reed","Bacon"],"gi_tag":null,"harvest_months":[3,4,5,6,7,8,9],"districts":{"muranga":{"area":7500,"prod":95000,"role":"Largest avocado county","variety":"Hass, Fuerte"},"meru":{"area":6000,"prod":75000,"role":"Major export Hass","variety":"Hass"},"kiambu":{"area":4500,"prod":55000,"role":"Premium Hass export","variety":"Hass, Fuerte"},"kisii":{"area":3500,"prod":42000,"role":"Smallholder Hass","variety":"Hass"},"embu":{"area":3000,"prod":36000,"role":"Hass export rising","variety":"Hass"},"kakamega":{"area":2500,"prod":28000,"role":"Western Hass","variety":"Hass, Fuerte"},"nyeri":{"area":2000,"prod":22000,"role":"Central highland","variety":"Hass"},"bungoma":{"area":1500,"prod":16000,"role":"Western emerging","variety":"Hass"},"bomet":{"area":1200,"prod":13000,"role":"Highland Hass","variety":"Hass"},"kericho":{"area":1000,"prod":10000,"role":"Tea-zone diversification","variety":"Hass"}}},"french_beans":{"name":"French Beans","icon":"🫛","color":"#22c55e","state_total":{"area_ha":15000,"prod_mt":85000,"national_share":100},"varieties":["Star 2052","Samantha","Espadara","Serengeti","Movida"],"gi_tag":null,"harvest_months":[1,2,3,4,5,6,7,8,9,10,11,12],"districts":{"kirinyaga":{"area":3500,"prod":21000,"role":"Mwea hub — irrigated FBs","variety":"Star 2052, Samantha"},"muranga":{"area":2500,"prod":14000,"role":"Smallholder FB","variety":"Samantha"},"meru":{"area":2000,"prod":11000,"role":"Eastern FB exports","variety":"Star 2052"},"kiambu":{"area":1800,"prod":10000,"role":"Peri-urban export","variety":"Samantha, Espadara"},"embu":{"area":1500,"prod":8500,"role":"Mid-altitude","variety":"Star 2052"},"nyeri":{"area":1200,"prod":6800,"role":"Tetu/Mathira","variety":"Samantha"},"machakos":{"area":900,"prod":4500,"role":"Irrigated zones","variety":"Movida"},"kakamega":{"area":600,"prod":3200,"role":"Western emerging","variety":"Star 2052"}}},"flowers":{"name":"Flowers (Cut Roses)","icon":"🌹","color":"#f43f5e","state_total":{"area_ha":4500,"prod_mt":160000,"national_share":100},"varieties":["Red Naomi","Athena","Avalanche","Mondial","Hypericum"],"gi_tag":null,"harvest_months":[1,2,3,4,5,6,7,8,9,10,11,12],"districts":{"nakuru":{"area":1800,"prod":65000,"role":"Naivasha — global rose hub","variety":"Red Naomi, Athena, Mondial"},"kiambu":{"area":1200,"prod":42000,"role":"Limuru/Tigoni belt","variety":"Athena, Avalanche"},"laikipia":{"area":600,"prod":21000,"role":"Mt Kenya flower farms","variety":"Red Naomi"},"nairobi":{"area":300,"prod":11000,"role":"Karen/Karura logistics","variety":"Mixed"},"uasingishu":{"area":200,"prod":7000,"role":"Eldoret flower farms","variety":"Mondial"},"meru":{"area":400,"prod":14000,"role":"Timau highlands","variety":"Red Naomi"}}},"vegetables":{"name":"Vegetables","icon":"🥬","color":"#22c55e","state_total":{"area_ha":150000,"prod_mt":2200000,"national_share":100},"varieties":["Shangi potato","Asila potato","Red Pinto onion","Kabete spinach","Tomato Kilele F1"],"gi_tag":null,"harvest_months":[1,2,3,4,5,6,7,8,9,10,11,12],"districts":{"nyandarua":{"area":35000,"prod":520000,"role":"Potato basket","variety":"Shangi, Asila"},"meru":{"area":18000,"prod":260000,"role":"Diverse vegetables","variety":"Tomato, Onion"},"nakuru":{"area":15000,"prod":215000,"role":"Naivasha onion + tomato","variety":"Red Pinto, Kilele"},"kiambu":{"area":12000,"prod":175000,"role":"Peri-urban","variety":"Mixed greens"},"narok":{"area":10000,"prod":140000,"role":"Onion/potato","variety":"Red Pinto"},"laikipia":{"area":8000,"prod":110000,"role":"Mid-altitude veg","variety":"Mixed"},"kirinyaga":{"area":7000,"prod":98000,"role":"Mwea irrigated","variety":"Tomato, Onion"},"nyeri":{"area":6000,"prod":85000,"role":"Highland veg","variety":"Cabbage, Potato"},"murang'a":{"area":5000,"prod":70000,"role":"Mixed","variety":"Tomato, Cabbage"},"bomet":{"area":4500,"prod":62000,"role":"Highland","variety":"Potato, Cabbage"}}},"mango":{"name":"Mango","icon":"🥭","color":"#f59e0b","state_total":{"area_ha":40000,"prod_mt":780000,"national_share":100},"varieties":["Apple Mango","Tommy Atkins","Kent","Ngowe","Boribo"],"gi_tag":null,"harvest_months":[10,11,12,1,2,3],"districts":{"makueni":{"area":12000,"prod":240000,"role":"Mango capital — Apple, Tommy","variety":"Apple, Tommy Atkins"},"kitui":{"area":8000,"prod":140000,"role":"Drought-tolerant mango","variety":"Apple, Ngowe"},"machakos":{"area":7000,"prod":130000,"role":"Major producer","variety":"Apple, Kent"},"kilifi":{"area":5000,"prod":85000,"role":"Coastal mango","variety":"Ngowe, Boribo"},"meru":{"area":3500,"prod":62000,"role":"Eastern lowland","variety":"Apple, Tommy"},"embu":{"area":2500,"prod":42000,"role":"Mwea lowland","variety":"Apple"},"tharaka":{"area":2000,"prod":34000,"role":"Smallholder","variety":"Apple, Kent"}}}},"calendar":{"tea":{"1":{"stage":"Plucking","activity":"Continuous plucking — 7-14 day intervals. 2 leaves + a bud.","alert":"green","pest":"Mites monitoring in dry weather","irrigation":"Light irrigation if dry"},"2":{"stage":"Plucking + pruning prep","activity":"Continuous plucking. Schedule 4-year pruning rotation.","alert":"green","pest":"Tea mosquito bug","irrigation":"Light if needed"},"3":{"stage":"Long rains begin","activity":"Heavy plucking with rain. Apply NPK 25:5:5 — 200kg/ha.","alert":"green","pest":"Helopeltis monitoring","irrigation":"Natural rains"},"4":{"stage":"Peak Long Rains","activity":"Maximum plucking. Maintain 4-leaf-and-bud standard.","alert":"green","pest":"Tea mites peak","irrigation":"Natural"},"5":{"stage":"Plucking continues","activity":"Quality assurance — tight hard tea. KTDA grades A-D.","alert":"green","pest":"Yellow tea thrips","irrigation":"Natural"},"6":{"stage":"Cool dry plucking","activity":"Lower yield but premium quality. Tippy tea.","alert":"yellow","pest":"None significant","irrigation":"As needed"},"7":{"stage":"Continued plucking","activity":"Pruning of 4-year cycle bushes. NPK top dress 100kg/ha.","alert":"green","pest":"Mealybug check","irrigation":"As needed"},"8":{"stage":"Cold season","activity":"Reduced growth — selective plucking.","alert":"yellow","pest":"None","irrigation":"Light if dry"},"9":{"stage":"Recovery","activity":"Growth resumes. Apply 100kg NPK as second dose.","alert":"green","pest":"Aphids on new flush","irrigation":"As needed"},"10":{"stage":"Short rains plucking","activity":"Heavy plucking with rain. KTDA factory deliveries peak.","alert":"green","pest":"Mites + thrips","irrigation":"Natural"},"11":{"stage":"Peak Short Rains","activity":"Maximum plucking. Quality monitoring at factory.","alert":"green","pest":"Helopeltis peak","irrigation":"Natural"},"12":{"stage":"Plucking continues","activity":"End of year accounts — KTDA bonus payments.","alert":"green","pest":"None","irrigation":"As needed"}},"coffee":{"1":{"stage":"Late harvest","activity":"Complete cherry picking. Wet-process within 12hrs. Sun-dry parchment.","alert":"yellow","pest":"None significant","irrigation":"None needed"},"2":{"stage":"Post-harvest","activity":"Hull dried parchment. Grade green beans by size (AA, AB, PB).","alert":"green","pest":"Storage pest check","irrigation":"None"},"3":{"stage":"Pruning","activity":"Prune 30% canopy. Remove suckers. Apply manure 10kg/tree.","alert":"green","pest":"None","irrigation":"If Long Rains delayed"},"4":{"stage":"Flowering — CRITICAL","activity":"Main flowering after first rains. Do NOT spray during flowering.","alert":"red","pest":"Antestia bug — hand pick if <5/tree","irrigation":"Critical — 20L/tree if no rain 10 days"},"5":{"stage":"Fruit set","activity":"Apply CAN 100g + DAP 50g per tree post fruit-set.","alert":"yellow","pest":"Coffee Berry Borer (CBB)","irrigation":"Continue if dry"},"6":{"stage":"Green fruit","activity":"Weed management critical. Mulch with coffee pulp.","alert":"green","pest":"Coffee Berry Disease (CBD)","irrigation":"Long Rains end"},"7":{"stage":"Fruit expansion","activity":"Cool dry season. Monitor drainage on slopes.","alert":"green","pest":"CBD if humid — Copper spray","irrigation":"None needed"},"8":{"stage":"Mid-crop ripening","activity":"Mid-crop (fly crop) berries ripening. Selective picking begins.","alert":"yellow","pest":"Leaf Miner","irrigation":"None"},"9":{"stage":"Fruit maturation","activity":"Fruit color change. Prepare washing stations (factories).","alert":"yellow","pest":"CBB intensifies","irrigation":"None"},"10":{"stage":"Harvest begins — CRITICAL","activity":"Pick only RED ripe cherries. 3-4 rounds selective picking.","alert":"red","pest":"CBB peak — harvest promptly","irrigation":"None"},"11":{"stage":"Peak harvest","activity":"Wet processing: pulp <12hrs, ferment 36-48hrs, wash, dry on tables.","alert":"red","pest":"None — focus on quality","irrigation":"None"},"12":{"stage":"Late harvest + drying","activity":"Final picks. Sun-dry parchment to 11% moisture.","alert":"yellow","pest":"Storage pest preparation","irrigation":"None"}}},"pests":{"tea":[{"name":"Tea Mosquito Bug (Helopeltis)","severity":"high","months":[3,4,5,10,11],"trigger":"Rainy season + flushing leaves","ipm":"Resistant clones (TRFK 31/8). Quinalphos spray if >2 bugs/m2"},{"name":"Tea Mites","severity":"medium","months":[1,2,7,8],"trigger":"Hot dry conditions","ipm":"Sulphur dust. Maintain shade. Avoid prolonged drought stress"}],"coffee":[{"name":"Coffee Berry Borer (CBB)","severity":"high","months":[9,10,11],"trigger":"Ripening cherry + warm humid","ipm":"Beauveria bassiana biocontrol + alcohol traps + prompt harvest"},{"name":"Coffee Berry Disease (CBD)","severity":"high","months":[5,6,7],"trigger":"Humidity >80% + temp 20-25°C","ipm":"Copper-based fungicide every 15 days. Resistant: Ruiru 11, Batian"},{"name":"Antestia Bug","severity":"medium","months":[4,5],"trigger":"Flowering + green fruit","ipm":"Hand picking if <5/tree. Fenitrothion if severe"}]},"cold_chain":{"nakuru":{"cold_stores":15,"capacity_mt":35000,"pack_houses":12,"ripening_chambers":6,"gap":"Naivasha flower export logistics excellent. Vegetable cold chain growing."},"kiambu":{"cold_stores":18,"capacity_mt":42000,"pack_houses":15,"ripening_chambers":10,"gap":"Best infrastructure — proximity to JKIA airport. Avocado pack houses adequate."},"meru":{"cold_stores":8,"capacity_mt":15000,"pack_houses":6,"ripening_chambers":3,"gap":"Avocado pack houses expanding. Need more for tea quality."},"muranga":{"cold_stores":6,"capacity_mt":12000,"pack_houses":5,"ripening_chambers":2,"gap":"Avocado pack house expansion underway. Macadamia hulling capacity."},"kirinyaga":{"cold_stores":7,"capacity_mt":10000,"pack_houses":4,"ripening_chambers":2,"gap":"Mwea French beans pack houses good. Rice silos adequate."},"machakos":{"cold_stores":4,"capacity_mt":7000,"pack_houses":2,"ripening_chambers":1,"gap":"Mango pack houses critically short for export volumes."},"makueni":{"cold_stores":3,"capacity_mt":5000,"pack_houses":2,"ripening_chambers":1,"gap":"Mango drying capacity limited — post-harvest losses high."},"nairobi":{"cold_stores":25,"capacity_mt":60000,"pack_houses":20,"ripening_chambers":12,"gap":"JKIA cargo hub. Best infrastructure."},"kericho":{"cold_stores":10,"capacity_mt":20000,"pack_houses":8,"ripening_chambers":3,"gap":"KTDA factory infrastructure adequate. Vegetable cold chain limited."}}};

function simNDVI(id){var r=REAL[id];if(!r)return{cur:.45,prev:.42,trend:'up',health:'Moderate'};
var ta=r.maize.a+r.wheat.a+r.beans.a+r.sorghum.a;
var wy=ta>0?(r.maize.a*r.maize.y+r.wheat.a*r.wheat.y+r.beans.a*r.beans.y+r.sorghum.a*r.sorghum.y)/ta:1500;
var yc=Math.min(.65,Math.max(.30,(wy-1200)/4500+.30));
var ic=(r.irrigation_pct/100)*.18;
var fp=(r.drought_risk||0)*.04;
var base=Math.min(.82,Math.max(.30,yc+ic-fp));
var h=0;for(var i=0;i<id.length;i++)h+=id.charCodeAt(i)*(i+1);
var noise=Math.sin(h*2.654)*.06;
var cur=Math.round(Math.min(.85,Math.max(.25,base+noise))*100)/100;
var pnoise=Math.sin(h*4.17)*.05;
var prev=Math.round(Math.min(.85,Math.max(.25,base+pnoise))*100)/100;
return{cur:cur,prev:prev,trend:cur>=prev?'up':'down',health:cur>.65?'Good':cur>.45?'Moderate':'Stressed'}}

function simWeather(id){
  if(LIVE_WEATHER[id])return LIVE_WEATHER[id];
  if(!LIVE_LOADING['w_'+id])fetchOpenMeteo(id);
  return{temp_max:Math.round(26+Math.sin(id.length*2)*6),temp_min:Math.round(13+Math.sin(id.length*5)*4),humidity:Math.round(60+Math.sin(id.length*4)*15),rain_7d:Math.round(Math.max(0,15+Math.sin(id.length*6)*18)),wind:Math.round(6+Math.sin(id.length*7)*4),forecast:[{d:'Mon',t:26,r:3},{d:'Tue',t:27,r:0},{d:'Wed',t:25,r:10},{d:'Thu',t:24,r:18},{d:'Fri',t:23,r:14},{d:'Sat',t:25,r:5},{d:'Sun',t:27,r:0}],live:false};
}

function simPest(id){var d=D.find(function(x){return x.id===id});var pests=[];var r=REAL[id];if(!r)return pests;
if(r.maize.a>50000)pests.push({name:'Fall Armyworm (FAW)',risk:'HIGH',crop:'Maize',icon:'🐛',color:'var(--rd)',msg:'Scout weekly from emergence. Emamectin Benzoate 5SG. Push-pull IPM with Desmodium + Napier border.',trigger:'Early season + warm nights >18°C'});
if(r.maize.a>50000 && (id==='bungoma'||id==='kakamega'||id==='kisumu'||id==='kisii'))pests.push({name:'Striga Witchweed',risk:'HIGH',crop:'Maize',icon:'🌿',color:'var(--rd)',msg:'CRITICAL in Western Kenya. Use Push-pull (Desmodium intercrop). IR Maize hybrids. Hand-pull before flowering.',trigger:'Degraded soils + continuous maize'});
if(r.wheat.a>30000)pests.push({name:'Wheat Stem Rust (UG99)',risk:'HIGH',crop:'Wheat',icon:'🟤',color:'var(--rd)',msg:'CRITICAL: Spray Propiconazole 25EC if pustules seen. Use resistant varieties Eagle10/Korongo/Robin.',trigger:'Cool wet conditions + susceptible variety'});
if(d&&d.dr>=2)pests.push({name:'Locust/Armyworm',risk:'MEDIUM',crop:'All Crops',icon:'🦗',color:'var(--or)',msg:'Report swarms to KEPHIS hotline 0712-345-678. African Armyworm (Spodoptera) periodic outbreaks.',trigger:'Drought breaking rains in ASAL counties'});
if(r.beans.a>15000)pests.push({name:'Bean Stem Maggot',risk:'MEDIUM',crop:'Beans',icon:'🪱',color:'var(--or)',msg:'Seed dressing with Imidacloprid. Earthing up at V3-V4 stage. Resistant varieties (KAT-B1).',trigger:'Late planting + warm temp'});
if(r.beans.a>15000)pests.push({name:'Bean Common Mosaic Virus',risk:'LOW',crop:'Beans',icon:'🍃',color:'var(--gn)',msg:'Use certified seed (Nyota/Faida resistant). Rogue infected plants. Aphid control.',trigger:'Aphid vectors + susceptible variety'});
return pests}

// ══════ SOIL HELPERS ══════
// Convert numeric soil values to L/M/H buckets per agronomic norms.
// Thresholds based on KALRO Soil Health Hub guidelines + iSDA recommendations.
function soilBucket(prop, val){
  // Returns 'L', 'M', or 'H' based on agronomic thresholds.
  var T={
    n:    [0.10, 0.20],   // %  total N: <0.10 low, 0.10-0.20 med, >0.20 high
    oc:   [1.0, 2.0],     // %  organic C: <1.0 low, 1.0-2.0 med, >2.0 high
    p:    [10, 20],       // mg/kg ext P: Olsen/Mehlich
    k:    [150, 250],     // mg/kg ext K
    cec:  [10, 20]        // cmol+/kg
  };
  var t=T[prop]; if(!t)return 'M';
  if(val<t[0])return 'L'; if(val>t[1])return 'H'; return 'M';
}
function phBucket(ph){
  // Acidic <5.5, slightly acidic 5.5-6.5, neutral 6.5-7.5, alkaline >7.5
  if(ph<5.5)return {label:'Acidic',color:'var(--rd)'};
  if(ph<6.5)return {label:'Slt acidic',color:'var(--or)'};
  if(ph<7.5)return {label:'Neutral',color:'var(--gn)'};
  return {label:'Alkaline',color:'var(--cy)'};
}

function simFertilizer(id){var r=REAL[id];if(!r)return null;var s=r.soil;var c=document.getElementById('sCrop').value;
var n_need=c==='maize'?120:c==='wheat'?100:c==='beans'?20:60;
var p_need=c==='maize'?60:c==='wheat'?46:c==='beans'?40:30;
var k_need=c==='maize'?30:c==='wheat'?0:c==='beans'?20:0;
var s_need=c==='maize'?10:c==='wheat'?7:c==='beans'?5:5;
if(s.n==='H')n_need*=0.7;else if(s.n==='M')n_need*=0.85;
if(s.p==='H')p_need*=0.6;else if(s.p==='M')p_need*=0.8;
var can=Math.round(n_need/0.27);var dap=Math.round(p_need/0.46);var npk=Math.round((p_need*0.7)/0.17);var lime=s.ph<5.5?500:s.ph<6.0?250:0;
var cost=can*65+dap*100+lime*15;
return{n_need:Math.round(n_need),p_need:Math.round(p_need),k_need:Math.round(k_need),urea:can,nps:dap,kCl:npk,zn:lime,cost:Math.round(cost),schedule:[{stage:'Basal',urea:0,nps:dap,kCl:0,when:'At planting — DAP/NPK 17:17:17'},{stage:'Top dress 1',urea:Math.round(can*.5),nps:0,kCl:0,when:'21 days (knee-high) — CAN top dress'},{stage:'Top dress 2',urea:Math.round(can*.5),nps:0,kCl:0,when:'45 days (tasseling) — CAN second top dress'}]}}

function simMarket(id){
  var c=document.getElementById('sCrop').value;
  var key='m_'+id+'_'+c;
  if(LIVE_MARKET[key])return LIVE_MARKET[key];
  var ncpbRef={maize:3500,wheat:4800,beans:10500,sorghum:4000}[c];
  var k=KAMIS_PRICES[id];
  var mp=k?k[c]:Math.round(ncpbRef*(0.85+Math.sin(id.length*8)*.25));
  var trend=mp>ncpbRef?'above':'below';
  var market=k?k.market:(id.charAt(0).toUpperCase()+id.slice(1).replace(/_/g,' ')+' Market');
  return{msp:ncpbRef,mandi_price:mp,trend:trend,nearest_mandi:market+' (KAMIS)',volume:Math.round(800+Math.sin(id.length*9)*400),forecast_30d:Math.round(mp*(1+Math.sin(id.length*10)*.05)),live:!!k};
}

function simCredit(id){var d=D.find(function(x){return x.id===id});if(!d)return{score:500};var r=REAL[id];var score=400;var c=document.getElementById('sCrop').value;
score+=d.srr[c]*.8;
score+=(100-d.vrr)*.3;
if(r)score+=r.irrigation_pct*.5;
if(!d.dr)score+=40;
var ndvi=simNDVI(id);score+=ndvi.cur*80;
score=Math.min(900,Math.max(300,Math.round(score)));
var grade=score>=750?'A+':score>=650?'A':score>=550?'B':score>=450?'C':'D';
var color=score>=650?'var(--gn)':score>=500?'var(--or)':'var(--rd)';
return{score:score,grade:grade,color:color,factors:{srr_score:Math.round(d.srr[c]*.8),variety_score:Math.round((100-d.vrr)*.3),irrigation_score:r?Math.round(r.irrigation_pct*.5):0,drought_penalty:d.dr?0:40,ndvi_score:Math.round(ndvi.cur*80)}}}

function simKSC(id){
  var d=D.find(function(x){return x.id===id});
  var r=REAL[id];if(!d||!r)return null;
  var c=document.getElementById('sCrop').value;
  var area=c==='maize'?r.maize.a:c==='wheat'?r.wheat.a:c==='beans'?r.beans.a:r.sorghum.a;
  var seedRate={maize:25,wheat:120,beans:60,sorghum:8}[c];
  var demand=Math.round(area*seedRate/1000);
  var distributed=Math.round(demand*d.srr[c]/100);
  var gap=demand-distributed;
  var gapPct=demand>0?Math.round((gap/demand)*100):0;
  var seed=id.length*7+c.length*3;
  var dealers=Math.round(3+Math.sin(seed)*5);
  var dbt_beneficiaries=Math.round(distributed*1000/seedRate*0.5);
  var dbt_amount=Math.round(dbt_beneficiaries*seedRate*({maize:380,wheat:140,beans:180,sorghum:80}[c])*0.3/100000);
  var varieties=[];
  if(c==='maize'){
    var old_pct=100-d.vrr;
    varieties=[
      {name:'H614 (aging)',pct:Math.round(old_pct*0.45),status:'aging'},
      {name:'Local landraces',pct:Math.round(old_pct*0.35),status:'obsolete'},
      {name:'H6213 (old)',pct:Math.round(old_pct*0.2),status:'aging'},
      {name:'H629',pct:Math.round(d.vrr*0.35),status:'new'},
      {name:'PH-1 (TELA)',pct:Math.round(d.vrr*0.25),status:'new'},
      {name:'DH04 (drought)',pct:Math.round(d.vrr*0.25),status:'new'},
      {name:'WH507',pct:Math.round(d.vrr*0.15),status:'new'}
    ];
  } else if(c==='wheat'){
    var old_pct=100-d.vrr;
    varieties=[
      {name:'Robin (aging)',pct:Math.round(old_pct*0.5),status:'aging'},
      {name:'Kenya Mavuno (old)',pct:Math.round(old_pct*0.3),status:'obsolete'},
      {name:'Older varieties',pct:Math.round(old_pct*0.2),status:'obsolete'},
      {name:'Eagle10',pct:Math.round(d.vrr*0.4),status:'new'},
      {name:'Korongo',pct:Math.round(d.vrr*0.35),status:'new'},
      {name:'Kingbird',pct:Math.round(d.vrr*0.25),status:'new'}
    ];
  } else if(c==='beans'){
    var old_pct=100-d.vrr;
    varieties=[
      {name:'Local landraces',pct:Math.round(old_pct*0.6),status:'obsolete'},
      {name:'GLP-2 (Rosecoco aging)',pct:Math.round(old_pct*0.4),status:'aging'},
      {name:'Nyota (biofortified)',pct:Math.round(d.vrr*0.5),status:'new'},
      {name:'Faida (climbing)',pct:Math.round(d.vrr*0.3),status:'new'},
      {name:'KAT-B1 (drought)',pct:Math.round(d.vrr*0.2),status:'new'}
    ];
  } else {
    var old_pct2=100-d.vrr;
    varieties=[
      {name:'Local landraces',pct:Math.round(old_pct2*0.7),status:'obsolete'},
      {name:'Seredo (aging)',pct:Math.round(old_pct2*0.3),status:'aging'},
      {name:'Gadam (drought)',pct:Math.round(d.vrr*0.55),status:'new'},
      {name:'IS-76',pct:Math.round(d.vrr*0.3),status:'new'},
      {name:'E1291 (hybrid)',pct:Math.round(d.vrr*0.15),status:'new'}
    ];
  }
  var timeline=[
    {month:'Jan',target:Math.round(demand*0.1),actual:Math.round(distributed*0.08),status:'delayed'},
    {month:'Feb',target:Math.round(demand*0.35),actual:Math.round(distributed*0.3),status:'behind'},
    {month:'Mar',target:Math.round(demand*0.7),actual:Math.round(distributed*0.65),status:'behind'},
    {month:'Apr',target:Math.round(demand*0.9),actual:Math.round(distributed*0.85),status:'catching up'},
    {month:'May',target:demand,actual:distributed,status:gapPct>30?'critical gap':'on track'},
  ];
  return{demand:demand,distributed:distributed,gap:gap,gapPct:gapPct,dealers:dealers,dbt_beneficiaries:dbt_beneficiaries,dbt_amount:dbt_amount,varieties:varieties,timeline:timeline,area:area,seedRate:seedRate};
}

function kscCol(id){var b=simKSC(id);if(!b)return'#333';return b.gapPct>50?'#dc2626':b.gapPct>30?'#f97316':b.gapPct>15?'#eab308':'#10b981'}

function simSowing(id){
  var r=REAL[id];if(!r)return{pct:0};
  var c=document.getElementById('sCrop').value;
  var area=c==='maize'?r.maize.a:c==='wheat'?r.wheat.a:c==='beans'?r.beans.a:r.sorghum.a;
  var seed=id.length*11+c.length*7;
  var basePct=c==='wheat'?78:c==='sorghum'?62:c==='beans'?55:45;
  var pct=Math.max(0,Math.min(100,Math.round(basePct+Math.sin(seed)*20)));
  var target=c==='wheat'?85:c==='sorghum'?70:c==='beans'?65:55;
  var status=pct>=target?'On track':pct>=target-10?'Slightly behind':'Behind schedule';
  var weekly=[Math.round(pct*.3),Math.round(pct*.5),Math.round(pct*.7),Math.round(pct*.85),pct];
  return{pct:pct,target:target,area:area,sownArea:Math.round(area*pct/100),status:status,weekly:weekly}
}
function sowingCol(id){var s=simSowing(id);return s.pct>=s.target?'#10b981':s.pct>=s.target-15?'#eab308':'#ef4444'}

function simYieldLoss(id){
  var d=D.find(function(x){return x.id===id});var r=REAL[id];if(!d||!r)return null;
  var c=document.getElementById('sCrop').value;
  var oldYield=c==='maize'?r.maize.y:c==='wheat'?r.wheat.y:c==='beans'?r.beans.y:r.sorghum.y;
  var area=c==='maize'?r.maize.a:c==='wheat'?r.wheat.a:c==='beans'?r.beans.a:r.sorghum.a;
  var newYield={maize:6500,wheat:4000,beans:1800,sorghum:2800}[c];
  var srr=d.srr[c];
  var farmSavedArea=Math.round(area*(100-srr)/100);
  var yieldGap=Math.max(0,newYield-oldYield);
  var lostProduction=Math.round(farmSavedArea*yieldGap/1000);
  var ncpbPrice={maize:3500,wheat:4800,beans:10500,sorghum:4000}[c];
  var lostValue=Math.round(lostProduction*ncpbPrice/100000);
  var potentialProd=Math.round(area*newYield/1000);
  var actualProd=c==='maize'?r.maize.p/1000:c==='wheat'?r.wheat.p/1000:c==='beans'?r.beans.p/1000:r.sorghum.p/1000;
  return{oldYield:oldYield,newYield:newYield,yieldGap:yieldGap,farmSavedArea:farmSavedArea,lostProduction:lostProduction,lostValue:lostValue,potentialProd:Math.round(potentialProd),actualProd:Math.round(actualProd),area:area,srr:srr}
}
function yieldLossCol(id){var y=simYieldLoss(id);if(!y)return'#333';return y.lostValue>500?'#dc2626':y.lostValue>200?'#f97316':y.lostValue>50?'#eab308':'#10b981'}

function simEarlyWarning(id){
  var d=D.find(function(x){return x.id===id});var r=REAL[id];if(!d)return{score:0};
  var ndvi=simNDVI(id);var w=simWeather(id);var pests=simPest(id);
  var score=0;
  if(ndvi.cur<.3)score+=30;else if(ndvi.cur<.4)score+=20;else if(ndvi.cur<.5)score+=10;
  if(ndvi.trend==='down')score+=15;
  if(w.temp_max>35)score+=15;else if(w.temp_max>32)score+=10;else if(w.temp_max>30)score+=5;
  var highP=pests.filter(function(p){return p.risk==='HIGH'}).length;
  score+=Math.min(20,highP*10);
  if(d.dr>=2)score+=10;
  if(r&&r.soil.n==='L'&&r.soil.p==='L')score+=10;
  score=Math.min(100,score);
  var level=score>=70?'CRITICAL':score>=50?'HIGH':score>=30?'MODERATE':'LOW';
  var color=score>=70?'#dc2626':score>=50?'#f97316':score>=30?'#eab308':'#10b981';
  var actions=[];
  if(ndvi.cur<.4)actions.push({icon:'🛰',text:'Satellite crop stress — deploy field inspection team'});
  if(highP>0)actions.push({icon:'🐛',text:'Pest outbreak conditions — send IPM alert via mAgri SMS'});
  if(w.temp_max>32)actions.push({icon:'🌡',text:'Heat stress — advise supplemental irrigation where available'});
  if(d.dr>=2)actions.push({icon:'🏜',text:'ASAL county — verify seed stock at agro-dealers, activate NDMA early action'});
  if(r&&r.soil.n==='L')actions.push({icon:'🧪',text:'Nitrogen deficient — check if CAN top-dressing done'});
  return{score:score,level:level,color:color,actions:actions,components:{ndvi:ndvi.cur<.4?30-Math.round(ndvi.cur*60):0,ndvi_trend:ndvi.trend==='down'?15:0,temp:w.temp_max>30?Math.min(15,Math.round((w.temp_max-30)*5)):0,pest:Math.min(20,highP*10),drought:d.dr>=2?10:0,soil:r&&r.soil.n==='L'&&r.soil.p==='L'?10:0}}
}
function earlyWarningCol(id){var ew=simEarlyWarning(id);return ew.color}

function simBenchmark(id){
  var d=D.find(function(x){return x.id===id});if(!d)return null;
  var c=document.getElementById('sCrop').value;
  var r=REAL[id];
  var vec={srr:d.srr[c],vrr:d.vrr,ndvi:simNDVI(id).cur,drought:d.dr?1:0,irr:r?r.irrigation_pct:5};
  var dists=D.filter(function(x){return x.id!==id}).map(function(x){
    var r2=REAL[x.id];
    var v2={srr:x.srr[c],vrr:x.vrr,ndvi:simNDVI(x.id).cur,drought:x.dr?1:0,irr:r2?r2.irrigation_pct:5};
    var dist=Math.sqrt(Math.pow((vec.srr-v2.srr)/100,2)+Math.pow((vec.ndvi-v2.ndvi),2)+Math.pow((vec.drought-v2.drought),2)+Math.pow((vec.irr-v2.irr)/100,2));
    return{d:x,dist:dist,vec:v2};
  });
  dists.sort(function(a,b){return a.dist-b.dist});
  var peers=dists.slice(0,4);
  var best=peers.reduce(function(a,b){return a.vec.srr>b.vec.srr?a:b});
  var lessons=[];
  if(best.vec.srr>vec.srr+10)lessons.push(best.d.n+' has '+best.vec.srr+'% hybrid adoption vs your '+vec.srr+'% — '+Math.round(best.vec.srr-vec.srr)+' pts higher');
  if(best.vec.ndvi>vec.ndvi+.1)lessons.push(best.d.n+' has better crop health (NDVI '+best.vec.ndvi.toFixed(2)+' vs '+vec.ndvi.toFixed(2)+')');
  return{peers:peers,best:best,vec:vec,lessons:lessons}
}

function simMonsoon(id){
  var d=D.find(function(x){return x.id===id});var r=REAL[id];if(!d)return null;
  var c=document.getElementById('sCrop').value;
  var seed=id.length*13;
  var checks=[
    {name:'Seed stock at agro-dealers',status:d.srr[c]>25?'ready':'gap',icon:'🌱',detail:d.srr[c]>25?'KSC/dealer stocked':'Hybrid '+d.srr[c]+'% — seed shortage likely'},
    {name:'CAN/DAP fertilizer (e-Voucher)',status:r&&r.soil.n!=='L'?'ready':'attention',icon:'🧪',detail:r&&r.soil.n==='L'?'N deficient soil — ensure extra CAN stock':'Adequate'},
    {name:'Irrigation infrastructure',status:r&&r.irrigation_pct>10?'ready':r&&r.irrigation_pct>5?'partial':'critical',icon:'💧',detail:'Coverage: '+(r?r.irrigation_pct:0)+'%'},
    {name:'Drought preparedness (NDMA)',status:d.dr>=2?'alert':'ready',icon:'🏜',detail:d.dr>=2?'ASAL — pre-position seed kits + NDMA early action':'Low drought risk'},
    {name:'KALRO demo plots planned',status:Math.sin(seed)>0?'ready':'pending',icon:'🔬',detail:Math.sin(seed)>0?'Demo plots confirmed':'Demo plot planning pending'},
    {name:'mAgri/SMS farmer registration',status:Math.sin(seed*2)>.3?'ready':Math.sin(seed*2)>-.3?'partial':'behind',icon:'📱',detail:Math.sin(seed*2)>.3?'Target met':'Farmer registration behind target'},
    {name:'Cooperative/SACCO network',status:(d.sd&&d.sd.length>=2)?'ready':'gap',icon:'🏪',detail:(d.sd?d.sd.length:0)+' outlets — '+(d.sd&&d.sd.length>=2?'adequate':'need more')},
    {name:'KEPHIS pest surveillance',status:Math.sin(seed*3)>0?'ready':'pending',icon:'🐛',detail:Math.sin(seed*3)>0?'Light traps + scouts active':'Setup pending'},
  ];
  var readyCount=checks.filter(function(ch){return ch.status==='ready'}).length;
  var grade=readyCount>=7?'A':readyCount>=5?'B':readyCount>=3?'C':readyCount>=2?'D':'F';
  var gradeColor=readyCount>=7?'#10b981':readyCount>=5?'#eab308':readyCount>=3?'#f97316':'#dc2626';
  return{checks:checks,readyCount:readyCount,total:checks.length,grade:grade,gradeColor:gradeColor,pct:Math.round(readyCount/checks.length*100)}
}
function monsoonCol(id){var m=simMonsoon(id);if(!m)return'#333';return m.gradeColor}

function simScanDensity(id){
  var d=D.find(function(x){return x.id===id});if(!d)return{pct:0,total:0,risk:'HIGH',color:'#dc2626'};
  var base=d.srr.maize*0.5;
  if(d.dr>=2)base*=0.65;
  var depotIn=d.sd&&d.sd[0]&&(d.sd[0].d==='In county'||d.sd[0].d==='In region'||d.sd[0].d.indexOf('km')>0&&parseInt(d.sd[0].d)<30);
  if(depotIn)base+=8;
  base+=Math.sin(id.length*7)*5;
  var pct=Math.min(75,Math.max(3,Math.round(base)));
  var total=Math.round(pct*80+Math.abs(Math.sin(id.length*3))*300);
  var spurious=Math.round(5+Math.sin(id.length*5)*6);
  var risk=pct<20?'HIGH':pct<35?'MODERATE':'LOW';
  var color=pct<20?'#dc2626':pct<35?'#f97316':pct<50?'#eab308':'#10b981';
  return{pct:pct,total:total,spurious:spurious,risk:risk,color:color};
}
function qrScanCol(id){var s=simScanDensity(id);return s.color;}

function simScheme(scheme,distId){
  var schemeBase={
    evoucher:78, naaiap:65, galana:42, big4:68,
    afc:62, ksc_seed:58, kcsap:72, ngaap:55,
    tea_dev:68, avocado:72, hustler:48, crop_ins:38
  };
  var base=schemeBase[scheme.id]||55;
  var distMod=0;
  if(distId){
    var goodDists=['nairobi','kiambu','uasingishu','transnzoia','nakuru','meru','muranga'];
    var poorDists=['kitui','kwale','kilifi','makueni','machakos'];
    if(goodDists.indexOf(distId)>=0) distMod=+10;
    else if(poorDists.indexOf(distId)>=0) distMod=-15;
    else{
      var h=(distId.charCodeAt(0)*3+distId.length*7+scheme.id.charCodeAt(0)*2)%20-10;
      distMod=h;
    }
  }
  var achPct=Math.max(15,Math.min(98,Math.round(base+distMod)));
  var stateAch=Math.max(15,Math.min(98,Math.round(base)));
  var distAch=distId?achPct:stateAch;
  var spent=Math.round(scheme.budget*achPct/100);
  var status=achPct>=scheme.target*0.9?'on_track':achPct>=scheme.target*0.65?'moderate':'behind';
  return{achPct:achPct,distAch:distAch,stateAch:stateAch,spent:spent,status:status}
}
function dssCol(id){
  var behind=0;
  SCHEMES.forEach(function(s){var r=simScheme(s,id);if(r.status==='behind')behind++});
  return behind>=6?'#dc2626':behind>=3?'#f97316':behind>=1?'#eab308':'#10b981'
}

// ══════ COLOR FUNCTIONS ══════
function srrCol(v){return v<15?'#be123c':v<20?'#e11d48':v<25?'#f97316':v<30?'#eab308':v<35?'#22c55e':v<40?'#10b981':'#0d9488'}
function ndviCol(v){return v<.3?'#7f1d1d':v<.4?'#dc2626':v<.5?'#f97316':v<.6?'#eab308':v<.7?'#22c55e':'#047857'}
function pestCol(id){var p=simPest(id);var h=p.filter(function(x){return x.risk==='HIGH'}).length;return h>=2?'#dc2626':h>=1?'#f97316':p.length>0?'#eab308':'#10b981'}
function fertCol(id){var r=REAL[id];if(!r)return'#444';var s=r.soil;var low=0;if(s.n==='L')low++;if(s.p==='L')low++;if(s.k==='L')low++;if(s.oc==='L')low++;return low>=3?'#dc2626':low>=2?'#f97316':low>=1?'#eab308':'#10b981'}
function marketCol(id){var m=simMarket(id);return m.trend==='above'?'#10b981':'#ef4444'}
function creditCol(id){var c=simCredit(id);return c.score>=650?'#10b981':c.score>=500?'#f59e0b':'#ef4444'}
function hortiCol(id){var cr=HORTI.crops,best='',ba=0;for(var k in cr){var cd=cr[k].districts;if(cd[id]&&cd[id].area>ba){ba=cd[id].area;best=k}}if(!best)return'#1a2538';return{tea:'#16a34a',coffee:'#6b4423',avocado:'#059669',french_beans:'#22c55e',flowers:'#f43f5e',vegetables:'#34d399',mango:'#f59e0b'}[best]||'#555'}

// ══════ MODULE STATE ══════
var mod='seed',sel=null,map,geoLyr,markerLyr;
var kisaanTab='whatsapp';

function getCol(d){
  var c=document.getElementById('sCrop').value;
  if(mod==='seed')return srrCol(d.srr[c]);
  if(mod==='ndvi'){var n=simNDVI(d.id);return ndviCol(n.cur)}
  if(mod==='weather')return'#2563eb';
  if(mod==='pest')return pestCol(d.id);
  if(mod==='fertilizer')return fertCol(d.id);
  if(mod==='market')return marketCol(d.id);
  if(mod==='horti')return hortiCol(d.id);
  if(mod==='credit')return creditCol(d.id);
  if(mod==='ksc')return kscCol(d.id);
  if(mod==='sowing')return sowingCol(d.id);
  if(mod==='yieldloss')return yieldLossCol(d.id);
  if(mod==='earlywarning')return earlyWarningCol(d.id);
  if(mod==='monsoon')return monsoonCol(d.id);
  if(mod==='dss')return dssCol(d.id);
  if(mod==='seedqr')return qrScanCol(d.id);
  // === Modules using the wired data blocks ===
  if(mod==='cpi'){var cp=CPI[d.id];if(!cp)return'#94a3b8';return cp.food_yoy>=9?'#dc2626':cp.food_yoy>=8?'#ef4444':cp.food_yoy>=7?'#f59e0b':cp.food_yoy>=6?'#06b6d4':'#10b981'}
  if(mod==='hustler'){var hf=HUSTLER[d.id];if(!hf)return'#94a3b8';return hf.default_pct>=25?'#dc2626':hf.default_pct>=20?'#ef4444':hf.default_pct>=15?'#f59e0b':'#10b981'}
  if(mod==='gfw'){var fw=GFW[d.id];if(!fw)return'#94a3b8';return fw.deforest_risk>=4?'#dc2626':fw.deforest_risk>=3?'#f59e0b':fw.deforest_risk>=2?'#06b6d4':'#10b981'}
  if(mod==='vci'){var v=VCI[d.id];if(!v)return'#94a3b8';return v.vci<35?'#dc2626':v.vci<50?'#f59e0b':v.vci<65?'#06b6d4':'#10b981'}
  if(mod==='spi'){var sp=SPI[d.id];if(!sp)return'#94a3b8';return sp.spi_12<-1.5?'#dc2626':sp.spi_12<-1?'#f59e0b':sp.spi_12<1?'#10b981':sp.spi_12<1.5?'#06b6d4':'#0ea5e9'}
  if(mod==='acid'){var sa=SOILACID[d.id];if(!sa)return'#94a3b8';return sa.severity==='Severe'?'#dc2626':sa.severity==='Moderate'?'#f59e0b':sa.severity==='Mild'?'#06b6d4':'#10b981'}
  if(mod==='cropfit'){var cf=CROPFIT[d.id];if(!cf)return'#94a3b8';var crops=Object.keys(cf).filter(function(c){return c!=='dairy'&&c!=='fish'&&c!=='beef'});if(!crops.length)return'#94a3b8';crops.sort(function(a,b){return cf[b].fit-cf[a].fit});var top=cf[crops[0]].fit;return top>=90?'#10b981':top>=75?'#06b6d4':top>=50?'#f59e0b':'#dc2626'}
  if(mod==='tea'){var t=TEA_AUCTION[d.id];if(!t)return'#94a3b8';return t.bp1_avg>=300?'#10b981':t.bp1_avg>=250?'#06b6d4':t.bp1_avg>=200?'#f59e0b':'#dc2626'}
  if(mod==='coffee'){var cof=COFFEE_AUCTION[d.id];if(!cof)return'#94a3b8';return cof.aa_kshbag>=70000?'#10b981':cof.aa_kshbag>=60000?'#06b6d4':cof.aa_kshbag>=50000?'#f59e0b':'#dc2626'}
  if(mod==='pestwatch'){var pw=PEST_WATCH[d.id];if(!pw)return'#94a3b8';var maxR=Math.max(pw.locust_risk||0,pw.faw_pressure||0);return maxR>=4?'#dc2626':maxR>=3?'#f59e0b':maxR>=2?'#06b6d4':'#10b981'}
  if(mod==='dealers'){var dl=DEALERS[d.id];if(!dl)return'#94a3b8';return dl.density_per_1k_hh>=5?'#10b981':dl.density_per_1k_hh>=3.5?'#06b6d4':dl.density_per_1k_hh>=2.5?'#f59e0b':'#dc2626'}
  if(mod==='kiamis'){var k=KIAMIS[d.id];if(!k||!k.tot_hh)return'#94a3b8';var cov=Math.round(k.registered/k.tot_hh*100);return cov>=80?'#10b981':cov>=60?'#06b6d4':cov>=40?'#f59e0b':'#dc2626'}
  if(mod==='beta'){var bt=BETA[d.id];if(!bt)return'#94a3b8';return bt.caip==='operational'?'#10b981':bt.caip==='construction'?'#06b6d4':bt.caip==='planned'?'#f59e0b':'#dc2626'}
  if(mod==='foodsec'){var fs=FOODSEC[d.id];if(!fs)return'#94a3b8';return fs.ipc>=4?'#dc2626':fs.ipc>=3?'#ef4444':fs.ipc>=2?'#f59e0b':'#10b981'}
  if(mod==='eudr'){var eu=EUDR[d.id];if(!eu||!eu.is_coffee)return'#475569';return eu.geotag_pct>=70?'#10b981':eu.geotag_pct>=50?'#f59e0b':'#dc2626'}
  if(mod==='dvs'){var dv=DVS[d.id];if(!dv)return'#94a3b8';var maxR=Math.max(dv.fmd_risk||0,dv.lsd||0,dv.ppr||0,dv.rvf||0,dv.cbpp||0);return maxR>=4?'#dc2626':maxR>=3?'#f59e0b':maxR>=2?'#06b6d4':'#10b981'}
  if(mod==='dairy'){var dy=DAIRY[d.id];if(!dy)return'#94a3b8';return dy.milk_ML>=300?'#10b981':dy.milk_ML>=150?'#06b6d4':dy.milk_ML>=80?'#f59e0b':'#dc2626'}
  if(mod==='exports'){var ex=EXPORTS[d.id];if(!ex)return'#94a3b8';return ex.hort_kshM>=20000?'#10b981':ex.hort_kshM>=8000?'#06b6d4':ex.hort_kshM>=3000?'#f59e0b':'#dc2626'}
  if(mod==='coldchain'){var cc=COLDCHAIN[d.id];if(!cc)return'#94a3b8';return cc.gap_days<=1?'#10b981':cc.gap_days<=2?'#06b6d4':cc.gap_days<=4?'#f59e0b':'#dc2626'}
  if(mod==='mech'){var mc=MECH[d.id];if(!mc)return'#94a3b8';return mc.mech_score>=70?'#10b981':mc.mech_score>=45?'#06b6d4':mc.mech_score>=25?'#f59e0b':'#dc2626'}
  if(mod==='ncpb'){var nc=NCPB[d.id];if(!nc)return'#94a3b8';return nc.stock_days>=180?'#10b981':nc.stock_days>=90?'#06b6d4':nc.stock_days>=45?'#f59e0b':'#dc2626'}
  if(mod==='phyto'){var ph=PHYTO[d.id];if(!ph||ph.poe==='None')return'#475569';return ph.insp_2024>=10000?'#10b981':ph.insp_2024>=2000?'#06b6d4':ph.insp_2024>=500?'#f59e0b':'#dc2626'}
  if(mod==='dfz'){var df=DFZ[d.id];if(!df||df.status==='none')return'#475569';return df.status==='compartment'?'#10b981':df.status==='demarcated'?'#06b6d4':df.status==='proposed'?'#f59e0b':'#94a3b8'}
  if(mod==='flagship'){var fl=FLAGSHIP[d.id];if(!fl)return'#94a3b8';return fl.investment_kshB>=5?'#10b981':fl.investment_kshB>=2?'#06b6d4':fl.investment_kshB>=1?'#f59e0b':'#475569'}
  if(mod==='seedsys')return srrCol(d.srr[c]);
  if(mod==='smartcrop'){var cf=CROPFIT[d.id];if(!cf)return'#94a3b8';var crops=Object.keys(cf).filter(function(c){return c!=='dairy'&&c!=='fish'&&c!=='beef'});if(!crops.length)return'#94a3b8';crops.sort(function(a,b){return cf[b].fit-cf[a].fit});var top=cf[crops[0]].fit;return top>=85?'#10b981':top>=70?'#06b6d4':top>=55?'#f59e0b':'#dc2626'}
  if(mod==='iovsoc'){var io=IOVSOC[d.id];if(!io)return'#94a3b8';var roi=io.yield_tHa*io.price_kshT/io.input_kshHa;return roi>=2.5?'#10b981':roi>=1.8?'#06b6d4':roi>=1.2?'#f59e0b':'#dc2626'}
  if(mod==='varrec'){var cf=CROPFIT[d.id];if(!cf)return'#94a3b8';var crops=Object.keys(cf).filter(function(c){return c!=='dairy'&&c!=='fish'&&c!=='beef'});if(!crops.length)return'#94a3b8';crops.sort(function(a,b){return cf[b].fit-cf[a].fit});return cf[crops[0]].fit>=85?'#10b981':cf[crops[0]].fit>=70?'#06b6d4':cf[crops[0]].fit>=55?'#f59e0b':'#dc2626'}
  if(mod==='planrec'){var io=IOVSOC[d.id];if(!io)return'#94a3b8';var roi=io.yield_tHa*io.price_kshT/io.input_kshHa;return roi>=2.5?'#10b981':roi>=1.8?'#06b6d4':roi>=1.2?'#f59e0b':'#dc2626'}
  return srrCol(d.srr[c]);
}

function getLabel(d){
  var c=document.getElementById('sCrop').value;
  if(mod==='seed')return d.srr[c]+'%';
  if(mod==='ndvi'){var n=simNDVI(d.id);return n.cur.toFixed(2)}
  if(mod==='weather'){var w=simWeather(d.id);return w.temp_max+'°C'}
  if(mod==='pest'){var p=simPest(d.id);var h=p.filter(function(x){return x.risk==='HIGH'}).length;return h>0?'⚠ '+h:'✓'}
  if(mod==='fertilizer'){var f=simFertilizer(d.id);return f?'KSh'+f.cost:'—'}
  if(mod==='market'){var m=simMarket(d.id);return'KSh'+m.mandi_price}
  if(mod==='horti'){var cr=HORTI.crops,best='',ba=0;for(var k in cr){var cd=cr[k].districts;if(cd[d.id]&&cd[d.id].area>ba){ba=cd[d.id].area;best=k}}return best?HORTI.crops[best].icon:'—'}
  if(mod==='ksc'){var bb=simKSC(d.id);return bb?bb.gapPct+'% gap':'—'}
  if(mod==='sowing'){var sw=simSowing(d.id);return sw.pct+'%'}
  if(mod==='yieldloss'){var yl=simYieldLoss(d.id);return yl?'KSh'+yl.lostValue+'K':'—'}
  if(mod==='earlywarning'){var ew=simEarlyWarning(d.id);return ew.score+'/100'}
  if(mod==='monsoon'){var mn=simMonsoon(d.id);return mn?mn.grade:'—'}
  if(mod==='dss'){var bh=0;SCHEMES.forEach(function(s){var r=simScheme(s,d.id);if(r.status==='behind')bh++});return bh>0?bh+' behind':'✓'}
  if(mod==='seedqr'){var sd0=simScanDensity(d.id);return sd0.pct+'%'}
  if(mod==='credit'){var cr2=simCredit(d.id);return cr2.score}
  // === New modules ===
  if(mod==='cpi'){var cp=CPI[d.id];return cp?cp.food_yoy.toFixed(1)+'%':'—'}
  if(mod==='hustler'){var hf=HUSTLER[d.id];return hf?hf.default_pct+'% def':'—'}
  if(mod==='gfw'){var fw=GFW[d.id];return fw?fw.alerts_30d.toLocaleString():'—'}
  if(mod==='vci'){var v=VCI[d.id];return v?v.vci+'':'—'}
  if(mod==='spi'){var sp=SPI[d.id];return sp?(sp.spi_12>=0?'+':'')+sp.spi_12.toFixed(1):'—'}
  if(mod==='acid'){var sa=SOILACID[d.id];return sa?sa.acid_arable_pct+'%':'—'}
  if(mod==='cropfit'){var cf=CROPFIT[d.id];if(!cf)return'—';var crops=Object.keys(cf).filter(function(c){return c!=='dairy'&&c!=='fish'&&c!=='beef'});if(!crops.length)return'—';crops.sort(function(a,b){return cf[b].fit-cf[a].fit});return cf[crops[0]].fit+''}
  if(mod==='tea'){var t=TEA_AUCTION[d.id];return t?'USC'+t.bp1_avg:'—'}
  if(mod==='coffee'){var cof=COFFEE_AUCTION[d.id];return cof?'KSh'+(cof.aa_kshbag/1000).toFixed(0)+'k':'—'}
  if(mod==='pestwatch'){var pw=PEST_WATCH[d.id];if(!pw)return'—';return pw.faw_pressure>=4?'⚠ FAW':pw.faw_pressure>=3?'FAW '+pw.faw_pressure:'✓'}
  if(mod==='dealers'){var dl=DEALERS[d.id];return dl?dl.total.toLocaleString():'—'}
  if(mod==='kiamis'){var ki=KIAMIS[d.id];return ki&&ki.tot_hh?Math.round(ki.registered/ki.tot_hh*100)+'%':'—'}
  if(mod==='beta'){var bt=BETA[d.id];return bt?bt.caip_pct+'%':'—'}
  if(mod==='foodsec'){var fs=FOODSEC[d.id];return fs?'IPC '+fs.ipc:'—'}
  if(mod==='eudr'){var eu=EUDR[d.id];return eu&&eu.is_coffee?eu.geotag_pct+'%':'—'}
  if(mod==='dvs'){var dv=DVS[d.id];if(!dv)return'—';var maxR=Math.max(dv.fmd_risk||0,dv.lsd||0,dv.ppr||0,dv.rvf||0,dv.cbpp||0);return 'R'+maxR}
  if(mod==='dairy'){var dy=DAIRY[d.id];return dy?dy.milk_ML+'ML':'—'}
  if(mod==='exports'){var ex=EXPORTS[d.id];return ex?'KSh'+(ex.hort_kshM/1000).toFixed(1)+'B':'—'}
  if(mod==='coldchain'){var cc=COLDCHAIN[d.id];return cc?cc.gap_days+'d':'—'}
  if(mod==='mech'){var mc=MECH[d.id];return mc?mc.mech_score+'':'—'}
  if(mod==='ncpb'){var nc=NCPB[d.id];return nc?nc.stock_days+'d':'—'}
  if(mod==='phyto'){var ph=PHYTO[d.id];return ph&&ph.poe!=='None'?ph.insp_2024.toLocaleString():'—'}
  if(mod==='dfz'){var df=DFZ[d.id];return df&&df.status!=='none'?df.progress+'%':'—'}
  if(mod==='flagship'){var fl=FLAGSHIP[d.id];return fl?'KSh'+fl.investment_kshB.toFixed(1)+'B':'—'}
  if(mod==='seedsys')return d.srr[c]+'%';
  if(mod==='smartcrop'){var cf=CROPFIT[d.id];if(!cf)return'—';var crops=Object.keys(cf).filter(function(c){return c!=='dairy'&&c!=='fish'&&c!=='beef'});if(!crops.length)return'—';crops.sort(function(a,b){return cf[b].fit-cf[a].fit});return crops[0].slice(0,4)}
  if(mod==='iovsoc'){var io=IOVSOC[d.id];if(!io)return'—';var roi=io.yield_tHa*io.price_kshT/io.input_kshHa;return roi.toFixed(1)+'x'}
  if(mod==='varrec'){var cf=CROPFIT[d.id];if(!cf)return'—';var crops=Object.keys(cf).filter(function(c){return c!=='dairy'&&c!=='fish'&&c!=='beef'});if(!crops.length)return'—';crops.sort(function(a,b){return cf[b].fit-cf[a].fit});return crops[0].slice(0,4)}
  if(mod==='planrec'){var io=IOVSOC[d.id];if(!io)return'—';return 'KSh'+Math.round(io.yield_tHa*io.price_kshT/1000)+'k'}
  return d.srr[c]+'%';
}

function calcPri(d){var c=document.getElementById('sCrop').value;var gap=100-d.srr[c];var r=REAL[d.id];var dm=d.dr>=2?1.4:1;var sa=1;if(d.sd&&d.sd[0]&&d.sd[0].d.indexOf('No')>=0)sa=1.5;var area=r?(r.maize.a+r.wheat.a+r.beans.a)/100000:2;return Math.round(gap*area*dm*sa)}
function calcAll(){D.forEach(function(d){d.pri=calcPri(d)})}

// ══════ OPEN-METEO LIVE WEATHER ══════
async function fetchOpenMeteo(id){
  LIVE_LOADING['w_'+id]=true;
  var c=getDistCoords(id);
  if(!c){delete LIVE_LOADING['w_'+id];return;}
  try{
    var url='https://api.open-meteo.com/v1/forecast'
      +'?latitude='+c.lat+'&longitude='+c.lng
      +'&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,weathercode'
      +'&hourly=relativehumidity_2m'
      +'&timezone=Africa%2FNairobi&forecast_days=7';
    var resp=await fetch(url);
    if(!resp.ok)throw new Error('HTTP '+resp.status);
    var data=await resp.json();
    var d=data.daily,h=data.hourly;
    var humSlice=h.relativehumidity_2m.slice(6,18);
    var avgH=Math.round(humSlice.reduce(function(a,b){return a+b},0)/humSlice.length);
    var dayNames=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var fc=d.time.map(function(t,i){
      return{d:dayNames[new Date(t).getDay()],t:Math.round(d.temperature_2m_max[i]),r:Math.round(d.precipitation_sum[i]||0)};
    });
    var totalRain=d.precipitation_sum.reduce(function(a,b){return a+(b||0)},0);
    LIVE_WEATHER[id]={
      temp_max:Math.round(d.temperature_2m_max[0]),
      temp_min:Math.round(d.temperature_2m_min[0]),
      humidity:avgH,
      rain_7d:Math.round(totalRain),
      wind:Math.round(d.windspeed_10m_max[0]),
      forecast:fc,
      live:true,
      updated:new Date().toLocaleTimeString('en-KE',{hour:'2-digit',minute:'2-digit'})
    };
    if(sel&&sel.id===id){renderDetail();render();}
    console.log('%c🌤 '+id,'color:#10b981','· '+LIVE_WEATHER[id].temp_max+'°C · '+LIVE_WEATHER[id].rain_7d+'mm/7d');
  }catch(e){
    console.warn('%c🌤 Open-Meteo failed for '+id+' — '+e.message,'color:#f59e0b;font-weight:700');
  }finally{
    delete LIVE_LOADING['w_'+id];
  }
}

function openSettings(){document.getElementById('settingsOverlay').style.display='flex';}
function closeSettings(){document.getElementById('settingsOverlay').style.display='none';}

// Variety recommendation engine
function getRecommendations(distId){
  var recs=[];
  var d=D.find(function(x){return x.id===distId});
  if(!d)return recs;
  for(var crop in VARIETIES){
    VARIETIES[crop].forEach(function(v){
      if(v.districts.indexOf(distId)>=0){
        var score=0;
        if(d.dr>=2 && v.traits.some(function(t){return t.toLowerCase().indexOf('drought')>=0})) score+=30;
        var cropKey=crop;
        if(d.srr[cropKey]<25) score+=20;
        if(v.year>=2018) score+=15;
        else if(v.year>=2014) score+=10;
        if(v.traits.some(function(t){return t.toLowerCase().indexOf('biofortif')>=0||t.toLowerCase().indexOf('protein')>=0||t.toLowerCase().indexOf('iron')>=0})) score+=10;
        if(v.priority==='CRITICAL') score+=25;
        else if(v.priority==='HIGH') score+=15;
        recs.push({variety:v,crop:crop,score:score});
      }
    });
  }
  recs.sort(function(a,b){return b.score-a.score});
  return recs;
}

// ══════ MAP ══════
function initMap(){
  map=L.map('map',{center:[-0.5,37.0],zoom:6,zoomControl:true,attributionControl:false});
  var dark=L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{maxZoom:19,opacity:.6}).addTo(map);
  var sat=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,opacity:.8});
  L.control.layers({'Dark':dark,'Satellite':sat},null,{position:'topright',collapsed:true}).addTo(map);
  render();
}

function render(){
  calcAll();
  if(geoLyr)map.removeLayer(geoLyr);
  if(markerLyr)map.removeLayer(markerLyr);
  geoLyr=L.geoJSON(KENYA_GEO,{
    style:function(f){
      var dd=D.find(function(x){return x.id===f.properties.id});
      if(!dd)return{fillColor:'#222',weight:.5,color:'#222e42',fillOpacity:.15};
      var isSel=sel&&sel.id===dd.id;
      return{fillColor:getCol(dd),weight:isSel?2.5:1,color:isSel?'#e2e8f0':'#222e42',fillOpacity:isSel?.7:.45}
    },
    onEachFeature:function(f,layer){
      var dd=D.find(function(x){return x.id===f.properties.id});
      if(!dd)return;
      layer.on('click',function(){selDist(dd.id)});
      layer.on('mouseover',function(e){this.setStyle({weight:2,color:'#8b9ab8',fillOpacity:.6});layer.bindTooltip('<b>'+dd.n+'</b> '+getLabel(dd),{sticky:true}).openTooltip(e.latlng)});
      layer.on('mouseout',function(){geoLyr.resetStyle(this);layer.unbindTooltip()});
    }
  }).addTo(map);
  markerLyr=L.layerGroup();
  D.forEach(function(dd){
    var f=KENYA_GEO.features.find(function(x){return x.properties.id===dd.id});
    if(!f)return;
    L.marker([f.properties.centroid_lat,f.properties.centroid_lng],{
      icon:L.divIcon({className:'',html:'<div style="text-align:center;pointer-events:none"><div style="font-size:7px;color:#5a6a84;text-shadow:0 1px 2px #000">'+dd.n+'</div><div style="font-size:10px;font-weight:700;color:#fff;text-shadow:0 1px 3px #000">'+getLabel(dd)+'</div></div>',iconSize:[80,20],iconAnchor:[40,10]})
    }).addTo(markerLyr);
  });
  markerLyr.addTo(map);
  renderList();renderDash();renderLegend();
}

// ══════ DASHBOARD ══════
function renderDash(){
  var c=document.getElementById('sCrop').value;
  var cn={maize:'Maize',wheat:'Wheat',beans:'Beans',sorghum:'Sorghum'}[c];
  var avgHAR=Math.round(D.reduce(function(s,d){return s+d.srr[c]},0)/D.length);
  var critical=D.filter(function(d){return d.srr[c]<20}).length;
  var h='';
  if(mod==='seed')h='<div class="dk"><div class="dv" style="color:'+srrCol(avgHAR)+'">'+avgHAR+'%</div><div class="dl">Avg '+cn+' SRR</div></div><div class="dk"><div class="dv" style="color:var(--rd)">'+critical+'</div><div class="dl">Critical &lt;20%</div></div><div class="dk"><div class="dv" style="color:var(--cy)">'+D.length+'</div><div class="dl">Counties</div></div><div class="dk"><div class="dv" style="color:var(--gn)">22</div><div class="dl">New Varieties</div></div>';
  else if(mod==='ndvi'){var avgNDVI=(D.reduce(function(s,d){return s+simNDVI(d.id).cur},0)/D.length).toFixed(2);h='<div class="dk"><div class="dv" style="color:'+ndviCol(parseFloat(avgNDVI))+'">'+avgNDVI+'</div><div class="dl">Avg NDVI</div></div><div class="dk"><div class="dv" style="color:var(--rd)">'+D.filter(function(d){return simNDVI(d.id).cur<.4}).length+'</div><div class="dl">Stressed</div></div><div class="dk"><div class="dv" style="color:var(--gn)">'+D.filter(function(d){return simNDVI(d.id).cur>.6}).length+'</div><div class="dl">Healthy</div></div>'}
  else if(mod==='weather')h='<div class="dk"><div class="dv" style="color:var(--or)">26°C</div><div class="dl">Avg Max Temp</div></div><div class="dk"><div class="dv" style="color:var(--cy)">14°C</div><div class="dl">Avg Min</div></div><div class="dk"><div class="dv" style="color:var(--bl)">22mm</div><div class="dl">7-day Rain</div></div><div class="dk"><div class="dv" style="color:var(--gn)">Long Rains</div><div class="dl">Main Season</div></div>';
  else if(mod==='pest'){var highPest=D.filter(function(d){return simPest(d.id).some(function(p){return p.risk==='HIGH'})}).length;h='<div class="dk"><div class="dv" style="color:var(--rd)">'+highPest+'</div><div class="dl">HIGH Alert</div></div><div class="dk"><div class="dv" style="color:var(--or)">FAW+Striga</div><div class="dl">Active Pests</div></div><div class="dk"><div class="dv" style="color:var(--gn)">IPM</div><div class="dl">Advisory</div></div>'}
  else if(mod==='fertilizer')h='<div class="dk"><div class="dv" style="color:var(--pp)">DAP+CAN</div><div class="dl">Blend System</div></div><div class="dk"><div class="dv" style="color:var(--gn)">e-Voucher</div><div class="dl">Subsidy</div></div>';
  else if(mod==='market')h='<div class="dk"><div class="dv" style="color:var(--gn)">KSh'+{maize:3500,wheat:4800,beans:10500,sorghum:4000}[c]+'</div><div class="dl">'+cn+' NCPB Ref/90kg</div></div><div class="dk"><div class="dv" style="color:var(--or)">'+D.filter(function(d){return simMarket(d.id).trend==='below'}).length+'</div><div class="dl">Below NCPB Ref</div></div><div class="dk"><div class="dv" style="color:var(--cy)">NCPB</div><div class="dl">Reference</div></div>';
  else if(mod==='horti')h='<div class="dk"><div class="dv" style="color:#16a34a">🍵</div><div class="dl">Tea Hub</div></div><div class="dk"><div class="dv" style="color:#6b4423">☕</div><div class="dl">Kenya AA Coffee</div></div><div class="dk"><div class="dv" style="color:#f43f5e">🌹</div><div class="dl">Naivasha Roses</div></div><div class="dk"><div class="dv" style="color:var(--gn)">7</div><div class="dl">Horti Crops</div></div>';
  else if(mod==='ksc'){var totalDemand=0,totalDist=0;D.forEach(function(dd){var b=simKSC(dd.id);if(b){totalDemand+=b.demand;totalDist+=b.distributed}});h='<div class="dk"><div class="dv" style="color:var(--pp)">'+Math.round(totalDemand/1000)+'K</div><div class="dl">Demand (MT)</div></div><div class="dk"><div class="dv" style="color:var(--gn)">'+Math.round(totalDist/1000)+'K</div><div class="dl">Distributed</div></div><div class="dk"><div class="dv" style="color:var(--rd)">'+Math.round((totalDemand-totalDist)/1000)+'K</div><div class="dl">Gap (MT)</div></div>'}
  // === NEW MODULE DASHBOARD CARDS ===
  else if(mod==='cpi'){var hotCount=0,natFood=7.7;D.forEach(function(dd){var cp=CPI[dd.id];if(cp&&cp.food_yoy>=8.5)hotCount++});var avgFood=Math.round(Object.values(CPI).reduce(function(s,x){return s+x.food_yoy},0)/Object.keys(CPI).length*10)/10;h='<div class="dk"><div class="dv" style="color:'+(avgFood>=8?'var(--rd)':avgFood>=7?'var(--or)':'var(--gn)')+'">'+avgFood+'%</div><div class="dl">Avg food y/y</div></div><div class="dk"><div class="dv" style="color:var(--rd)">'+hotCount+'</div><div class="dl">Counties &gt;8.5%</div></div><div class="dk"><div class="dv" style="color:var(--cy)">'+natFood+'%</div><div class="dl">National food</div></div>'}
  else if(mod==='hustler'){var totalDisb=0,avgDef=0,avgUptake=0;Object.values(HUSTLER).forEach(function(h2){totalDisb+=h2.disbursed_kshM;avgDef+=h2.default_pct;avgUptake+=h2.farmer_uptake_pct});var n=Object.keys(HUSTLER).length;h='<div class="dk"><div class="dv" style="color:var(--bl)">KSh '+(totalDisb/1000).toFixed(1)+'B</div><div class="dl">Disbursed</div></div><div class="dk"><div class="dv" style="color:var(--rd)">'+Math.round(avgDef/n)+'%</div><div class="dl">Avg default</div></div><div class="dk"><div class="dv" style="color:var(--or)">'+Math.round(avgUptake/n)+'%</div><div class="dl">Farmer uptake</div></div>'}
  else if(mod==='gfw'){var total30=0,total12=0,risky=0;Object.values(GFW).forEach(function(g){total30+=g.alerts_30d;total12+=g.alerts_12m;if(g.deforest_risk>=4)risky++});h='<div class="dk"><div class="dv" style="color:var(--rd)">'+total30.toLocaleString()+'</div><div class="dl">Alerts 30d</div></div><div class="dk"><div class="dv" style="color:var(--or)">'+(total12/1000).toFixed(0)+'k</div><div class="dl">Alerts 12mo</div></div><div class="dk"><div class="dv" style="color:var(--rd)">'+risky+'</div><div class="dl">High-risk counties</div></div>'}
  else if(mod==='vci'){var avgVci=Math.round(Object.values(VCI).reduce(function(s,v){return s+v.vci},0)/Object.keys(VCI).length);var droughtN=Object.values(VCI).filter(function(v){return v.vci<35}).length;h='<div class="dk"><div class="dv" style="color:'+(avgVci<35?'var(--rd)':avgVci<50?'var(--or)':'var(--gn)')+'">'+avgVci+'</div><div class="dl">Avg VCI</div></div><div class="dk"><div class="dv" style="color:var(--rd)">'+droughtN+'</div><div class="dl">Severe drought</div></div><div class="dk"><div class="dv" style="color:var(--cy)">Dekadal</div><div class="dl">BOKU/FEWS NET</div></div>'}
  else if(mod==='spi'){var avgSpi=(Object.values(SPI).reduce(function(s,sp){return s+sp.spi_12},0)/Object.keys(SPI).length).toFixed(1);var dryN=Object.values(SPI).filter(function(sp){return sp.spi_12<-1}).length;h='<div class="dk"><div class="dv" style="color:'+(avgSpi<-1?'var(--rd)':avgSpi<0?'var(--or)':'var(--gn)')+'">'+(avgSpi>=0?'+':'')+avgSpi+'</div><div class="dl">Avg SPI-12</div></div><div class="dk"><div class="dv" style="color:var(--rd)">'+dryN+'</div><div class="dl">Counties dry</div></div><div class="dk"><div class="dv" style="color:var(--cy)">CHIRPS</div><div class="dl">WMO standard</div></div>'}
  else if(mod==='acid'){var avgAcid=Math.round(Object.values(SOILACID).reduce(function(s,v){return s+v.acid_arable_pct},0)/Object.keys(SOILACID).length);var sev=Object.values(SOILACID).filter(function(v){return v.severity==='Severe'}).length;h='<div class="dk"><div class="dv" style="color:var(--rd)">'+avgAcid+'%</div><div class="dl">Avg acidic land</div></div><div class="dk"><div class="dv" style="color:var(--rd)">'+sev+'</div><div class="dl">Severe counties</div></div><div class="dk"><div class="dv" style="color:var(--cy)">63%</div><div class="dl">National (KALRO 2023)</div></div>'}
  else if(mod==='cropfit'){var goodFitN=0,topFitTotal=0;Object.values(CROPFIT).forEach(function(cf){var crops=Object.keys(cf).filter(function(c){return c!=='dairy'&&c!=='fish'&&c!=='beef'});if(crops.length){crops.sort(function(a,b){return cf[b].fit-cf[a].fit});topFitTotal+=cf[crops[0]].fit;if(cf[crops[0]].fit>=90)goodFitN++}});var avgTop=Math.round(topFitTotal/Object.keys(CROPFIT).length);h='<div class="dk"><div class="dv" style="color:'+(avgTop>=80?'var(--gn)':'var(--or)')+'">'+avgTop+'</div><div class="dl">Avg top-crop fit</div></div><div class="dk"><div class="dv" style="color:var(--gn)">'+goodFitN+'</div><div class="dl">Counties &ge;90 fit</div></div><div class="dk"><div class="dv" style="color:var(--cy)">GAEZ v4</div><div class="dl">FAO/IIASA</div></div>'}
  else if(mod==='tea'){var totKg=0,avgBp1=0;Object.values(TEA_AUCTION).forEach(function(t){totKg+=t.weekly_kg;avgBp1+=t.bp1_avg});var n=Object.keys(TEA_AUCTION).length;h='<div class="dk"><div class="dv" style="color:var(--gn)">USC '+Math.round(avgBp1/n)+'</div><div class="dl">Avg BP1 price</div></div><div class="dk"><div class="dv" style="color:var(--cy)">'+(totKg/1e6).toFixed(1)+'M kg</div><div class="dl">Weekly volume</div></div><div class="dk"><div class="dv" style="color:var(--or)">'+n+'</div><div class="dl">Producing counties</div></div>'}
  else if(mod==='coffee'){var totBags=0,avgAA=0;Object.values(COFFEE_AUCTION).forEach(function(c2){totBags+=c2.weekly_bags;avgAA+=c2.aa_kshbag});var n=Object.keys(COFFEE_AUCTION).length;h='<div class="dk"><div class="dv" style="color:var(--gn)">KSh '+(Math.round(avgAA/n/1000))+'k</div><div class="dl">Avg AA/50kg</div></div><div class="dk"><div class="dv" style="color:var(--or)">'+totBags.toLocaleString()+'</div><div class="dl">Weekly bags</div></div><div class="dk"><div class="dv" style="color:var(--rd)">EUDR</div><div class="dl">Dec 2026 deadline</div></div>'}
  else if(mod==='pestwatch'){var fawHigh=Object.values(PEST_WATCH).filter(function(p){return p.faw_pressure>=4}).length;var totalAlerts=Object.values(PEST_WATCH).reduce(function(s,p){return s+(p.alerts_week||0)},0);h='<div class="dk"><div class="dv" style="color:var(--rd)">'+fawHigh+'</div><div class="dl">High FAW counties</div></div><div class="dk"><div class="dv" style="color:var(--or)">'+totalAlerts+'</div><div class="dl">Alerts this week</div></div><div class="dk"><div class="dv" style="color:var(--gn)">Calm</div><div class="dl">Locust status</div></div>'}
  else if(mod==='dealers'){var totDealers=0,totUncov=0;Object.values(DEALERS).forEach(function(d2){totDealers+=d2.total;totUncov+=d2.wards_uncovered});h='<div class="dk"><div class="dv" style="color:var(--or)">'+totDealers.toLocaleString()+'</div><div class="dl">Total dealers</div></div><div class="dk"><div class="dv" style="color:var(--rd)">'+totUncov+'</div><div class="dl">Wards uncovered</div></div><div class="dk"><div class="dv" style="color:var(--cy)">KEPHIS</div><div class="dl">+PCPB+CropLife</div></div>'}
  else if(mod==='kiamis'){var totHH=0,totReg=0;Object.values(KIAMIS).forEach(function(k){totHH+=k.tot_hh;totReg+=k.registered});var cov=Math.round(totReg/totHH*100);h='<div class="dk"><div class="dv" style="color:'+(cov>=70?'var(--gn)':'var(--or)')+'">'+cov+'%</div><div class="dl">National coverage</div></div><div class="dk"><div class="dv" style="color:var(--cy)">'+(totReg/1e6).toFixed(1)+'M</div><div class="dl">Farmers registered</div></div><div class="dk"><div class="dv" style="color:var(--bl)">*616*3#</div><div class="dl">USSD code</div></div>'}
  else if(mod==='beta'){var op=Object.values(BETA).filter(function(b){return b.caip==='operational'}).length;var con=Object.values(BETA).filter(function(b){return b.caip==='construction'}).length;var pl=Object.values(BETA).filter(function(b){return b.caip==='planned'}).length;h='<div class="dk"><div class="dv" style="color:var(--gn)">'+op+'</div><div class="dl">CAIPs operational</div></div><div class="dk"><div class="dv" style="color:var(--cy)">'+con+'</div><div class="dl">Construction</div></div><div class="dk"><div class="dv" style="color:var(--or)">'+pl+'</div><div class="dl">Planned</div></div>'}
  else if(mod==='foodsec'){var ipc3plus=Object.values(FOODSEC).filter(function(f){return f.ipc>=3}).length;var avgStock=Math.round(Object.values(FOODSEC).reduce(function(s,f){return s+f.stock_days},0)/Object.keys(FOODSEC).length);h='<div class="dk"><div class="dv" style="color:var(--rd)">'+ipc3plus+'</div><div class="dl">IPC ≥3 (Crisis)</div></div><div class="dk"><div class="dv" style="color:var(--cy)">'+avgStock+'d</div><div class="dl">Avg stock days</div></div><div class="dk"><div class="dv" style="color:var(--bl)">KFSSG</div><div class="dl">SRA/LRA</div></div>'}
  else if(mod==='eudr'){var coffee=Object.values(EUDR).filter(function(e){return e.is_coffee}).length;var avgGeo=0,nC=0;Object.values(EUDR).forEach(function(e){if(e.is_coffee){avgGeo+=e.geotag_pct;nC++}});h='<div class="dk"><div class="dv" style="color:var(--or)">'+coffee+'</div><div class="dl">Coffee counties</div></div><div class="dk"><div class="dv" style="color:'+(avgGeo/nC>=70?'var(--gn)':'var(--or)')+'">'+Math.round(avgGeo/nC)+'%</div><div class="dl">Avg geo-tag</div></div><div class="dk"><div class="dv" style="color:var(--rd)">Dec 2026</div><div class="dl">EU deadline</div></div>'}
  else if(mod==='dvs'){var hi=Object.values(DVS).filter(function(d2){return Math.max(d2.fmd_risk,d2.lsd,d2.ppr,d2.rvf,d2.cbpp)>=4}).length;var avgVacc=Math.round(Object.values(DVS).reduce(function(s,d2){return s+d2.vacc_pct},0)/Object.keys(DVS).length);h='<div class="dk"><div class="dv" style="color:var(--rd)">'+hi+'</div><div class="dl">High disease risk</div></div><div class="dk"><div class="dv" style="color:var(--gn)">'+avgVacc+'%</div><div class="dl">Avg vacc rate</div></div><div class="dk"><div class="dv" style="color:var(--cy)">DVS</div><div class="dl">Vet Services</div></div>'}
  else if(mod==='dairy'){var totMilk=0,totCows=0;Object.values(DAIRY).forEach(function(d2){totMilk+=d2.milk_ML;totCows+=d2.cows_K});h='<div class="dk"><div class="dv" style="color:var(--gn)">'+(totMilk/1000).toFixed(1)+'B L</div><div class="dl">Annual milk</div></div><div class="dk"><div class="dv" style="color:var(--cy)">'+totCows+'k</div><div class="dl">Dairy cows</div></div><div class="dk"><div class="dv" style="color:var(--bl)">KDB</div><div class="dl">Dairy Board</div></div>'}
  else if(mod==='exports'){var totHort=0;Object.values(EXPORTS).forEach(function(e){totHort+=e.hort_kshM});var avgRej=(Object.values(EXPORTS).reduce(function(s,e){return s+e.mrl_rej_pct},0)/Object.keys(EXPORTS).length).toFixed(1);h='<div class="dk"><div class="dv" style="color:var(--gn)">KSh '+(totHort/1000).toFixed(0)+'B</div><div class="dl">Horti exports</div></div><div class="dk"><div class="dv" style="color:var(--or)">'+avgRej+'%</div><div class="dl">Avg MRL rejection</div></div><div class="dk"><div class="dv" style="color:var(--cy)">EU+UAE</div><div class="dl">Top markets</div></div>'}
  else if(mod==='coldchain'){var totCap=0,gapHi=0;Object.values(COLDCHAIN).forEach(function(c2){totCap+=c2.capacity_mt;if(c2.gap_days>=4)gapHi++});h='<div class="dk"><div class="dv" style="color:var(--cy)">'+(totCap/1000).toFixed(0)+'k MT</div><div class="dl">Cold storage</div></div><div class="dk"><div class="dv" style="color:var(--rd)">'+gapHi+'</div><div class="dl">Gap ≥4 days</div></div><div class="dk"><div class="dv" style="color:var(--bl)">JKIA</div><div class="dl">Hub</div></div>'}
  else if(mod==='mech'){var totTrac=Object.values(MECH).reduce(function(s,m){return s+m.tractors_per_1k_ha},0);var avgTrac=(totTrac/Object.keys(MECH).length).toFixed(1);var atdc=Object.values(MECH).filter(function(m){return m.atdc_active}).length;h='<div class="dk"><div class="dv" style="color:var(--or)">'+avgTrac+'</div><div class="dl">Avg tractors/1k ha</div></div><div class="dk"><div class="dv" style="color:var(--gn)">'+atdc+'</div><div class="dl">Active ATDCs</div></div><div class="dk"><div class="dv" style="color:var(--cy)">10</div><div class="dl">National ATDC network</div></div>'}
  else if(mod==='ncpb'){var totBags=0,lowN=0;Object.values(NCPB).forEach(function(n){totBags+=n.current_bags;if(n.stock_days<60)lowN++});h='<div class="dk"><div class="dv" style="color:var(--gn)">'+(totBags/1e6).toFixed(1)+'M</div><div class="dl">Bags in stock</div></div><div class="dk"><div class="dv" style="color:var(--rd)">'+lowN+'</div><div class="dl">Depots &lt;60d</div></div><div class="dk"><div class="dv" style="color:var(--cy)">NCPB</div><div class="dl">Strategic Reserve</div></div>'}
  else if(mod==='phyto'){var poes=Object.values(PHYTO).filter(function(p){return p.poe!=='None'}).length;var totInsp=Object.values(PHYTO).reduce(function(s,p){return s+p.insp_2024},0);h='<div class="dk"><div class="dv" style="color:var(--cy)">'+poes+'</div><div class="dl">Active PoEs</div></div><div class="dk"><div class="dv" style="color:var(--gn)">'+(totInsp/1000).toFixed(0)+'k</div><div class="dl">Inspections 2024</div></div><div class="dk"><div class="dv" style="color:var(--bl)">KEPHIS</div><div class="dl">Border control</div></div>'}
  else if(mod==='dfz'){var compart=Object.values(DFZ).filter(function(d2){return d2.status==='compartment'}).length;var avgProg=Math.round(Object.values(DFZ).filter(function(d2){return d2.status!=='none'}).reduce(function(s,d2){return s+d2.progress},0)/Math.max(1,Object.values(DFZ).filter(function(d2){return d2.status!=='none'}).length));h='<div class="dk"><div class="dv" style="color:var(--gn)">'+compart+'</div><div class="dl">Compartments</div></div><div class="dk"><div class="dv" style="color:var(--cy)">'+avgProg+'%</div><div class="dl">Avg progress</div></div><div class="dk"><div class="dv" style="color:var(--or)">2027</div><div class="dl">Target year</div></div>'}
  else if(mod==='flagship'){var totInv=Object.values(FLAGSHIP).reduce(function(s,f){return s+(f.investment_kshB||0)},0);var nProj=Object.values(FLAGSHIP).filter(function(f){return f.projects&&f.projects.length>0}).length;h='<div class="dk"><div class="dv" style="color:var(--gn)">KSh '+totInv.toFixed(1)+'B</div><div class="dl">Total investment</div></div><div class="dk"><div class="dv" style="color:var(--cy)">'+nProj+'</div><div class="dl">Counties w/ projects</div></div><div class="dk"><div class="dv" style="color:var(--bl)">BETA</div><div class="dl">Flagship tracker</div></div>'}
  else if(mod==='seedsys')h='<div class="dk"><div class="dv" style="color:var(--gn)">'+avgHAR+'%</div><div class="dl">Avg HAR ('+cn+')</div></div><div class="dk"><div class="dv" style="color:var(--or)">'+critical+'</div><div class="dl">Critical &lt;20%</div></div><div class="dk"><div class="dv" style="color:var(--cy)">KEPHIS</div><div class="dl">+ Tegemeo</div></div>';
  else if(mod==='smartcrop'){var nGoodFit=0,topCounts={};Object.keys(CROPFIT).forEach(function(cid){var cf=CROPFIT[cid];var crops=Object.keys(cf).filter(function(c){return c!=='dairy'&&c!=='fish'&&c!=='beef'});if(crops.length){crops.sort(function(a,b){return cf[b].fit-cf[a].fit});var t=crops[0];topCounts[t]=(topCounts[t]||0)+1;if(cf[t].fit>=85)nGoodFit++}});var topCrop='',topN=0;Object.keys(topCounts).forEach(function(k){if(topCounts[k]>topN){topN=topCounts[k];topCrop=k}});h='<div class="dk"><div class="dv" style="color:var(--gn)">'+nGoodFit+'</div><div class="dl">Counties &ge;85 fit</div></div><div class="dk"><div class="dv" style="color:var(--cy)">'+topCrop+'</div><div class="dl">Most-recommended crop</div></div><div class="dk"><div class="dv" style="color:var(--or)">GAEZ v4</div><div class="dl">+ market + climate</div></div>'}
  else if(mod==='iovsoc'){var totSubsidy=0,totRoi=0,nC=0,goodRoi=0;Object.values(IOVSOC).forEach(function(io){totSubsidy+=io.subsidy_kshM_yr;var roi=io.yield_tHa*io.price_kshT/io.input_kshHa;totRoi+=roi;nC++;if(roi>=2.0)goodRoi++});var avgRoi=(totRoi/nC).toFixed(1);h='<div class="dk"><div class="dv" style="color:var(--bl)">KSh '+(totSubsidy/1000).toFixed(1)+'B</div><div class="dl">Total subsidy/yr</div></div><div class="dk"><div class="dv" style="color:'+(avgRoi>=2?'var(--gn)':'var(--or)')+'">'+avgRoi+'x</div><div class="dl">Avg ROI</div></div><div class="dk"><div class="dv" style="color:var(--gn)">'+goodRoi+'</div><div class="dl">Counties ROI &ge;2x</div></div>'}
  else if(mod==='varrec'){var totVar=0;Object.keys(KEPHIS_VARIETIES).forEach(function(k){totVar+=KEPHIS_VARIETIES[k].length});Object.keys(EXTRA_VARIETIES).forEach(function(k){totVar+=EXTRA_VARIETIES[k].length});h='<div class="dk"><div class="dv" style="color:var(--gn)">'+totVar+'</div><div class="dl">Varieties indexed</div></div><div class="dk"><div class="dv" style="color:var(--cy)">KEPHIS</div><div class="dl">+ KALRO + EXTRA</div></div><div class="dk"><div class="dv" style="color:var(--or)">1393</div><div class="dl">SMS verify</div></div>'}
  else if(mod==='planrec'){var totROI=0,n=0,bestC='',bestR=0;Object.entries(IOVSOC).forEach(function(e){var io=e[1];var r=io.yield_tHa*io.price_kshT/io.input_kshHa;totROI+=r;n++;if(r>bestR){bestR=r;bestC=e[0]}});h='<div class="dk"><div class="dv" style="color:var(--gn)">'+(totROI/n).toFixed(1)+'x</div><div class="dl">Avg ROI plan</div></div><div class="dk"><div class="dv" style="color:var(--cy)">'+bestC.slice(0,8)+'</div><div class="dl">Top ROI county</div></div><div class="dk"><div class="dv" style="color:var(--or)">Pula</div><div class="dl">Insurance partner</div></div>'}
  else h='<div class="dk"><div class="dv" style="color:var(--gn)">'+D.length+'</div><div class="dl">Counties</div></div><div class="dk"><div class="dv" style="color:var(--cy)">'+cn+'</div><div class="dl">Crop</div></div>';
  document.getElementById('dash').innerHTML=h;
}

function renderLegend(){
  var t={
    seed:'Seed Replacement Rate',ndvi:'NDVI Crop Health',weather:'Temperature',pest:'Pest Risk Level',
    fertilizer:'Soil Nutrient Status',market:'Price vs NCPB Ref',horti:'Dominant Horti Crop',
    ksc:'KSC Distribution Gap',sowing:'Sowing Progress',yieldloss:'Yield Loss (KSh 000s)',
    earlywarning:'Composite Risk Index',monsoon:'Season Readiness Grade',dss:'Scheme Achievement',
    seedqr:'Seed QR Traceability',credit:'AgriScore',
    cpi:'Food Inflation y/y',hustler:'Hustler Default Rate',gfw:'Deforestation Risk',
    vci:'Vegetation Drought (VCI)',spi:'Rainfall Anomaly (SPI-12)',acid:'Soil Acidity Severity',
    cropfit:'Top Crop Fit Score',tea:'Tea Auction BP1 Price',coffee:'Coffee AA Price',
    pestwatch:'Pest Pressure',dealers:'Agro-Dealer Density',kiamis:'KIAMIS Coverage',
    beta:'BETA CAIP Status',foodsec:'IPC Food Security Phase',eudr:'EUDR Geo-tag %',
    dvs:'Disease Risk',dairy:'Milk Production',exports:'Horti Export Value',
    coldchain:'Cold-chain Gap Days',mech:'Mechanization Score',ncpb:'NCPB Stock Days',
    phyto:'Phytosanitary Inspections',dfz:'Disease-Free Zone Progress',flagship:'BETA Flagship Investment',
    seedsys:'Seed System Score',
    smartcrop:'Top-fit Crop Score',
    iovsoc:'Input-Output ROI',
    varrec:'Variety Recommendation Confidence',
    planrec:'Plan ROI'
  };
  // Five-stop bad→good gradient (used for most metrics)
  var gradBadGood='<div style="background:#dc2626"></div><div style="background:#f59e0b"></div><div style="background:#06b6d4"></div><div style="background:#10b981"></div>';
  // Five-stop good→bad (when high values are bad: CPI, default, deforestation)
  var gradGoodBad='<div style="background:#10b981"></div><div style="background:#06b6d4"></div><div style="background:#f59e0b"></div><div style="background:#dc2626"></div>';
  // Wet→dry for SPI
  var gradWetDry='<div style="background:#0ea5e9"></div><div style="background:#06b6d4"></div><div style="background:#10b981"></div><div style="background:#f59e0b"></div><div style="background:#dc2626"></div>';
  var b={
    seed:'<div style="background:#be123c"></div><div style="background:#f97316"></div><div style="background:#eab308"></div><div style="background:#22c55e"></div><div style="background:#0d9488"></div>',
    ndvi:'<div style="background:#7f1d1d"></div><div style="background:#dc2626"></div><div style="background:#f97316"></div><div style="background:#eab308"></div><div style="background:#22c55e"></div><div style="background:#047857"></div>',
    pest:'<div style="background:#10b981"></div><div style="background:#eab308"></div><div style="background:#f97316"></div><div style="background:#dc2626"></div>',
    credit:'<div style="background:#ef4444"></div><div style="background:#f59e0b"></div><div style="background:#10b981"></div>',
    // For CPI, Hustler, GFW, Pest Watch — high = bad
    cpi:gradGoodBad,hustler:gradGoodBad,gfw:gradGoodBad,pestwatch:gradGoodBad,coldchain:gradGoodBad,
    // For VCI, Crop Fit, Tea, Coffee, Dealers, KIAMIS, BETA, Dairy, Exports, Mech, NCPB, Phyto, DFZ, Flagship, EUDR, Seedsys — high = good
    vci:gradBadGood,cropfit:gradBadGood,tea:gradBadGood,coffee:gradBadGood,dealers:gradBadGood,
    kiamis:gradBadGood,beta:gradBadGood,dairy:gradBadGood,exports:gradBadGood,mech:gradBadGood,
    ncpb:gradBadGood,phyto:gradBadGood,dfz:gradBadGood,flagship:gradBadGood,eudr:gradBadGood,seedsys:gradBadGood,
    // SPI is bipolar
    spi:gradWetDry,
    // Acid, FoodSec, DVS — severity scale (high = bad)
    acid:gradGoodBad,foodsec:gradGoodBad,dvs:gradGoodBad,
    smartcrop:gradBadGood,iovsoc:gradBadGood,varrec:gradBadGood,planrec:gradBadGood
  };
  document.getElementById('legend').innerHTML='<div class="sh">'+(t[mod]||'')+'</div><div class="bar">'+(b[mod]||b.seed)+'</div>';
}

function renderList(){
  var sorted=[].concat(D).sort(function(a,b){
    if(mod==='ndvi')return simNDVI(a.id).cur-simNDVI(b.id).cur;
    if(mod==='credit')return simCredit(a.id).score-simCredit(b.id).score;
    // High-is-bad: ascending shows worst-at-bottom, so we sort descending (worst first)
    if(mod==='cpi'){var ca=CPI[a.id],cb=CPI[b.id];return (cb?cb.food_yoy:0)-(ca?ca.food_yoy:0)}
    if(mod==='hustler'){var ha=HUSTLER[a.id],hb=HUSTLER[b.id];return (hb?hb.default_pct:0)-(ha?ha.default_pct:0)}
    if(mod==='gfw'){var ga=GFW[a.id],gb=GFW[b.id];return (gb?gb.alerts_30d:0)-(ga?ga.alerts_30d:0)}
    if(mod==='pestwatch'){var pa=PEST_WATCH[a.id],pb=PEST_WATCH[b.id];var ra=pa?Math.max(pa.locust_risk,pa.faw_pressure):0;var rb=pb?Math.max(pb.locust_risk,pb.faw_pressure):0;return rb-ra}
    if(mod==='coldchain'){var aa=COLDCHAIN[a.id],bb=COLDCHAIN[b.id];return (bb?bb.gap_days:0)-(aa?aa.gap_days:0)}
    if(mod==='acid'){var aa=SOILACID[a.id],bb=SOILACID[b.id];return (bb?bb.acid_arable_pct:0)-(aa?aa.acid_arable_pct:0)}
    if(mod==='foodsec'){var aa=FOODSEC[a.id],bb=FOODSEC[b.id];return (bb?bb.ipc:0)-(aa?aa.ipc:0)}
    if(mod==='dvs'){var aa=DVS[a.id],bb=DVS[b.id];var ra=aa?Math.max(aa.fmd_risk,aa.lsd,aa.ppr,aa.rvf,aa.cbpp):0;var rb=bb?Math.max(bb.fmd_risk,bb.lsd,bb.ppr,bb.rvf,bb.cbpp):0;return rb-ra}
    // High-is-good: ascending (worst first then best at bottom — match other ascending modules)
    if(mod==='vci'){var aa=VCI[a.id],bb=VCI[b.id];return (aa?aa.vci:0)-(bb?bb.vci:0)}
    if(mod==='spi'){var aa=SPI[a.id],bb=SPI[b.id];return (aa?aa.spi_12:0)-(bb?bb.spi_12:0)}
    if(mod==='cropfit'){var ga=CROPFIT[a.id],gb=CROPFIT[b.id];var fa=0,fb=0;if(ga){var ca=Object.keys(ga);if(ca.length){ca.sort(function(x,y){return ga[y].fit-ga[x].fit});fa=ga[ca[0]].fit}}if(gb){var cb2=Object.keys(gb);if(cb2.length){cb2.sort(function(x,y){return gb[y].fit-gb[x].fit});fb=gb[cb2[0]].fit}}return fa-fb}
    if(mod==='tea'){var aa=TEA_AUCTION[a.id],bb=TEA_AUCTION[b.id];return (aa?aa.bp1_avg:0)-(bb?bb.bp1_avg:0)}
    if(mod==='coffee'){var aa=COFFEE_AUCTION[a.id],bb=COFFEE_AUCTION[b.id];return (aa?aa.aa_kshbag:0)-(bb?bb.aa_kshbag:0)}
    if(mod==='dealers'){var aa=DEALERS[a.id],bb=DEALERS[b.id];return (aa?aa.density_per_1k_hh:0)-(bb?bb.density_per_1k_hh:0)}
    if(mod==='kiamis'){var aa=KIAMIS[a.id],bb=KIAMIS[b.id];var pa=aa&&aa.tot_hh?aa.registered/aa.tot_hh:0;var pb=bb&&bb.tot_hh?bb.registered/bb.tot_hh:0;return pa-pb}
    if(mod==='beta'){var aa=BETA[a.id],bb=BETA[b.id];return (aa?aa.caip_pct:0)-(bb?bb.caip_pct:0)}
    if(mod==='eudr'){var aa=EUDR[a.id],bb=EUDR[b.id];return (aa&&aa.is_coffee?aa.geotag_pct:0)-(bb&&bb.is_coffee?bb.geotag_pct:0)}
    if(mod==='dairy'){var aa=DAIRY[a.id],bb=DAIRY[b.id];return (aa?aa.milk_ML:0)-(bb?bb.milk_ML:0)}
    if(mod==='exports'){var aa=EXPORTS[a.id],bb=EXPORTS[b.id];return (aa?aa.hort_kshM:0)-(bb?bb.hort_kshM:0)}
    if(mod==='mech'){var aa=MECH[a.id],bb=MECH[b.id];return (aa?aa.mech_score:0)-(bb?bb.mech_score:0)}
    if(mod==='ncpb'){var aa=NCPB[a.id],bb=NCPB[b.id];return (aa?aa.stock_days:0)-(bb?bb.stock_days:0)}
    if(mod==='phyto'){var aa=PHYTO[a.id],bb=PHYTO[b.id];return (aa?aa.insp_2024:0)-(bb?bb.insp_2024:0)}
    if(mod==='dfz'){var aa=DFZ[a.id],bb=DFZ[b.id];return (aa?aa.progress:0)-(bb?bb.progress:0)}
    if(mod==='flagship'){var aa=FLAGSHIP[a.id],bb=FLAGSHIP[b.id];return (aa?aa.investment_kshB:0)-(bb?bb.investment_kshB:0)}
    if(mod==='smartcrop'){var ga=CROPFIT[a.id],gb=CROPFIT[b.id];var fa=0,fb=0;if(ga){var ca=Object.keys(ga);if(ca.length){ca.sort(function(x,y){return ga[y].fit-ga[x].fit});fa=ga[ca[0]].fit}}if(gb){var cb2=Object.keys(gb);if(cb2.length){cb2.sort(function(x,y){return gb[y].fit-gb[x].fit});fb=gb[cb2[0]].fit}}return fa-fb}
    if(mod==='iovsoc'){var aa=IOVSOC[a.id],bb=IOVSOC[b.id];var ra=aa?aa.yield_tHa*aa.price_kshT/aa.input_kshHa:0;var rb=bb?bb.yield_tHa*bb.price_kshT/bb.input_kshHa:0;return ra-rb}
    if(mod==='varrec'){var ga=CROPFIT[a.id],gb=CROPFIT[b.id];var fa=0,fb=0;if(ga){var ca=Object.keys(ga);if(ca.length){ca.sort(function(x,y){return ga[y].fit-ga[x].fit});fa=ga[ca[0]].fit}}if(gb){var cb2=Object.keys(gb);if(cb2.length){cb2.sort(function(x,y){return gb[y].fit-gb[x].fit});fb=gb[cb2[0]].fit}}return fa-fb}
    if(mod==='planrec'){var aa=IOVSOC[a.id],bb=IOVSOC[b.id];var ra=aa?aa.yield_tHa*aa.price_kshT/aa.input_kshHa:0;var rb=bb?bb.yield_tHa*bb.price_kshT/bb.input_kshHa:0;return ra-rb}
    return a.srr[document.getElementById('sCrop').value]-b.srr[document.getElementById('sCrop').value];
  });
  document.getElementById('distList').innerHTML=sorted.map(function(d,i){
    var lbl=getLabel(d);var c2=getCol(d);var act=sel&&sel.id===d.id?'on':'';
    return '<div class="dl-i '+act+'" onclick="selDist(\''+d.id+'\')"><span class="rk">'+(i+1)+'</span><span class="dn">'+d.n+'</span><div class="br"><div class="bf" style="width:50%;background:'+c2+'"></div></div><span class="vl" style="color:'+c2+'">'+lbl+'</span></div>';
  }).join('');
}

// ══════ LAYERS ══════
var LAYERS=[
  {id:'srr',name:'Hybrid Adoption Heatmap',color:'var(--gn)',on:true,mod:'seed'},
  {id:'ndvi_lyr',name:'NDVI Satellite',color:'#2563eb',on:false,mod:'ndvi'},
  {id:'pest_lyr',name:'Pest Hotspots',color:'var(--rd)',on:false,mod:'pest'},
  {id:'soil_lyr',name:'Soil Health',color:'var(--pk)',on:false,mod:'fertilizer'},
  {id:'weather_lyr',name:'Weather',color:'var(--or)',on:false,mod:'weather'},
  {id:'market_lyr',name:'Market Prices',color:'var(--cy)',on:false,mod:'market'},
  {id:'horti_lyr',name:'Horticulture',color:'#a855f7',on:false,mod:'horti'},
  {id:'ksc_lyr',name:'KSC Distribution',color:'var(--pp)',on:false,mod:'ksc'},
  {id:'credit_lyr',name:'AgriScore',color:'#be185d',on:false,mod:'credit'},
];

function renderLayers(){
  document.getElementById('layers').innerHTML=LAYERS.map(function(l){
    var isActive=l.mod&&l.mod===mod;
    return '<div class="ly'+(isActive?' on':l.on?' on':'')+'" data-id="'+l.id+'" data-mod="'+(l.mod||'')+'" onclick="toggleSidebarLayer(this)"><div class="ck">✓</div><div class="dt" style="background:'+l.color+'"></div><span class="nm">'+l.name+'</span></div>';
  }).join('');
}

function toggleSidebarLayer(el){
  var layerMod=el.getAttribute('data-mod');
  if(layerMod){
    document.querySelectorAll('.ly[data-mod]').forEach(function(ly){ly.classList.remove('on')});
    el.classList.add('on');
    setModule(layerMod);
  }
}
function syncSidebarToModule(){
  document.querySelectorAll('.ly[data-mod]').forEach(function(ly){
    var lm=ly.getAttribute('data-mod');
    if(lm)ly.classList.toggle('on',lm===mod);
  });
}

// ══════ MODULE SWITCH ══════
function setModule(m){
  mod=m;
  document.querySelectorAll('.mt').forEach(function(b){b.classList.remove('on')});
  var btn=document.querySelector('.mt[data-m="'+m+'"]');
  if(btn)btn.classList.add('on');
  syncSidebarToModule();
  render();
  if(sel)renderDetail();
}

function selDist(id){
  sel=D.find(function(d){return d.id===id});
  if(!sel){console.warn('%c⚠ Unknown county id: '+id,'color:#ef4444;font-weight:700');return;}
  render();
  renderDetail();
  if(!LIVE_WEATHER[id])fetchOpenMeteo(id);
  var f=KENYA_GEO.features.find(function(x){return x.properties.id===id});
  if(f)map.flyTo([f.properties.centroid_lat,f.properties.centroid_lng],7,{duration:.5});
}
// Public alias for console use
function setDistrict(id){selDist(id)}

// ══════ DETAIL PANEL ══════
function renderDetail(){
  if(!sel)return;
  var d=sel,r=REAL[d.id],c=document.getElementById('sCrop').value;
  var cn={maize:'Maize',wheat:'Wheat',beans:'Beans',sorghum:'Sorghum'}[c];
  var html='';

  var ndmaBadge='';
  if(d.ndma_phase && d.ndma_phase!=='Non-ASAL' && d.ndma_phase!=='N/A'){
    var pCol=d.ndma_phase==='ALARM'?'var(--rd)':d.ndma_phase==='ALERT'?'var(--or)':d.ndma_phase==='RECOVERY'?'var(--cy)':'var(--gn)';
    var pBg=d.ndma_phase==='ALARM'?'rgba(239,68,68,.12)':d.ndma_phase==='ALERT'?'rgba(245,158,11,.12)':d.ndma_phase==='RECOVERY'?'rgba(6,182,212,.12)':'rgba(16,185,129,.12)';
    ndmaBadge=' <span title="'+d.ndma_note+'" style="color:'+pCol+';background:'+pBg+';padding:1px 5px;border-radius:3px;font-size:8px;font-weight:700;margin-left:4px">🌵 NDMA: '+d.ndma_phase+'</span>';
  }
  html+='<div class="sc"><h2>'+d.n+'</h2><div class="zn">'+d.z+(d.dr>=2?' <span style="color:var(--or);background:rgba(245,158,11,.1);padding:1px 5px;border-radius:3px;font-size:8px;font-weight:700;margin-left:4px">🏜 ASAL Zone</span>':'')+ndmaBadge+'</div></div>';

  if(mod==='seed'){
    html+=seedPanel(d,r,c);
  } else if(mod==='ndvi'){
    var n=simNDVI(d.id);
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(37,99,235,.15)">🛰</div><h3>NDVI Crop Health<span class="cad-badge cad-WEEKLY" title="Sentinel-2 5-day revisit, dekadal composite">Dekadal</span></h3></div>';
    html+='<div class="sg"><div class="st" style="background:rgba(37,99,235,.08);border:1px solid rgba(37,99,235,.15)"><div class="sv" style="color:'+ndviCol(n.cur)+'">'+n.cur.toFixed(2)+'</div><div class="sl2">Current NDVI</div></div>';
    html+='<div class="st" style="background:rgba(37,99,235,.08);border:1px solid rgba(37,99,235,.15)"><div class="sv" style="color:var(--t2)">'+n.prev.toFixed(2)+'</div><div class="sl2">Previous</div></div></div>';
    html+='<div style="margin-top:6px;padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);font-size:10px"><span style="font-weight:700;color:'+ndviCol(n.cur)+'">'+n.health+'</span> — '+(n.trend==='up'?'<span style="color:var(--gn)">▲ Improving</span>':'<span style="color:var(--rd)">▼ Declining</span>')+'</div>';
    html+='<div style="margin-top:8px"><div class="sh">Monthly NDVI trend</div>';
    ['Jan','Feb','Mar','Apr','May','Jun'].forEach(function(m,i){var v=Math.max(.2,n.cur-.15+i*.04+Math.sin(i*2)*.08);html+='<div class="cb"><span class="cn">'+m+'</span><div class="ct"><div class="cf" style="width:'+Math.round(v*100)+'%;background:'+ndviCol(v)+'"></div></div><span class="cv" style="color:'+ndviCol(v)+'">'+v.toFixed(2)+'</span></div>'});
    html+='</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: Sentinel-2 L2A | 10m resolution | 5-day revisit | RCMRD Nairobi<div style="margin-top:3px;font-size:9px;color:#0891b2;font-weight:600">◐ Refresh: Dekadal (every 10d)</div></div>';
  } else if(mod==='weather'){
    var w=simWeather(d.id);
    var liveBadge=w.live?'<span style="font-size:8px;padding:2px 7px;border-radius:3px;color:#10b981;background:rgba(16,185,129,.12);margin-left:6px">🟢 LIVE · '+w.updated+'</span>':'<span style="font-size:8px;padding:2px 7px;border-radius:3px;color:var(--or);background:rgba(245,158,11,.1);margin-left:6px">⚡ Loading…</span>';
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(217,119,6,.15)">🌤</div><h3>Weather'+liveBadge+'<span class="cad-badge cad-LIVE" title="Open-Meteo API • hourly forecasts">Daily</span></h3></div>';
    html+='<div class="sg4"><div class="st" style="background:rgba(239,68,68,.06);border:1px solid rgba(239,68,68,.1)"><div class="sv" style="color:var(--rd);font-size:14px">'+w.temp_max+'°</div><div class="sl2">Max °C</div></div>';
    html+='<div class="st" style="background:rgba(6,182,212,.06);border:1px solid rgba(6,182,212,.1)"><div class="sv" style="color:var(--cy);font-size:14px">'+w.temp_min+'°</div><div class="sl2">Min °C</div></div>';
    html+='<div class="st" style="background:rgba(99,102,241,.06);border:1px solid rgba(99,102,241,.1)"><div class="sv" style="color:var(--bl);font-size:14px">'+w.humidity+'%</div><div class="sl2">Humid</div></div>';
    html+='<div class="st" style="background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.1)"><div class="sv" style="color:var(--gn);font-size:14px">'+w.rain_7d+'mm</div><div class="sl2">Rain 7d</div></div></div>';
    html+='<div style="display:flex;gap:3px;margin-top:8px">';
    w.forecast.forEach(function(f){var rc=f.r>10?'#38bdf8':f.r>2?'#7dd3fc':'#94a3b8';html+='<div style="flex:1;text-align:center;padding:4px 2px;background:var(--bg);border-radius:4px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">'+f.d+'</div><div style="font-size:12px;font-weight:700;color:var(--or)">'+f.t+'°</div><div style="font-size:9px;font-weight:700;color:'+rc+'">'+(f.r>0?f.r+'mm':'—')+'</div></div>'});
    html+='</div>';
    html+='<div style="margin-top:8px"><div class="sh">Agri Implication</div>';
    if(w.temp_max>35)html+='<div class="ic" style="border-left:3px solid var(--rd)"><div class="ih" style="color:var(--rd)">🔥 Severe Heat</div>Temp '+w.temp_max+'°C. Irrigate immediately. Avoid afternoon spraying. Heat stress on maize tasselling.</div>';
    else if(w.temp_max>30)html+='<div class="ic" style="border-left:3px solid var(--or)"><div class="ih" style="color:var(--or)">🌡 Heat Advisory</div>Temp '+w.temp_max+'°C. Monitor wheat grain-filling. Supplemental irrigation if available.</div>';
    else html+='<div class="ic" style="border-left:3px solid var(--gn)"><div class="ih" style="color:var(--gn)">✓ Favourable Conditions</div>Temp '+w.temp_max+'°C within optimal range for crop growth.</div>';
    if(w.rain_7d>40)html+='<div class="ic" style="border-left:3px solid var(--cy)"><div class="ih" style="color:var(--cy)">🌧 Heavy Rain Alert</div>'+w.rain_7d+'mm forecast. Ensure drainage for beans (root rot risk). Delay top-dress 3 days post-rain.</div>';
    html+='</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: Open-Meteo API | KMD ref | lat '+getDistCoords(d.id).lat+' lng '+getDistCoords(d.id).lng+'<div style="margin-top:3px;font-size:9px;color:#059669;font-weight:600">● Refresh: Daily</div></div>';
  } else if(mod==='pest'){
    var pests=simPest(d.id);
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(220,38,38,.15)">🐛</div><h3>Pest & Disease Alerts<span class="cad-badge cad-WEEKLY" title="ICIPE + KEPHIS bulletins">Weekly</span></h3></div>';
    if(pests.length===0)html+='<div style="color:var(--gn);font-size:11px">✓ No active pest alerts for '+d.n+'</div>';
    pests.forEach(function(p){html+='<div class="ic" style="border-left:3px solid '+p.color+'"><div style="display:flex;justify-content:space-between"><div class="ih">'+p.icon+' '+p.name+' <span style="font-size:8px;color:var(--t3)">('+p.crop+')</span></div><span style="font-size:8px;font-weight:700;padding:2px 6px;border-radius:3px;color:'+p.color+'">'+p.risk+'</span></div><div style="margin-top:3px">'+p.msg+'</div><div style="margin-top:3px;font-size:8px;color:var(--t3)">Trigger: '+p.trigger+'</div></div>'});
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: KALRO pest model + KEPHIS surveillance + Plant Health Inspectorate<div style="margin-top:3px;font-size:9px;color:#0891b2;font-weight:600">◐ Refresh: Weekly bulletins</div></div>';
  } else if(mod==='fertilizer'){
    var f=simFertilizer(d.id);var s=r?r.soil:null;
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(124,58,237,.15)">🧪</div><h3>Fertilizer Recommendation<span class="cad-badge cad-MONTHLY" title="NCPB depot disbursement">Seasonal</span></h3></div>';
    if(s){
      var nb=soilBucket('n',s.n), pb=soilBucket('p',s.p), kb=soilBucket('k',s.k), ocb=soilBucket('oc',s.oc), phB=phBucket(s.ph);
      var chipCol=function(b){return b==='L'?'var(--rd)':b==='H'?'var(--gn)':'var(--or)'};
      var chipBg=function(b){return b==='L'?'rgba(239,68,68,.08)':b==='H'?'rgba(16,185,129,.08)':'rgba(245,158,11,.08)'};
      html+='<div style="display:flex;flex-wrap:wrap;gap:3px;margin-bottom:6px">';
      html+='<span class="np" style="color:'+chipCol(nb)+';background:'+chipBg(nb)+'" title="Total N (AfSIS)">N: '+s.n.toFixed(2)+'%·'+nb+'</span>';
      html+='<span class="np" style="color:'+chipCol(pb)+';background:'+chipBg(pb)+'" title="Extractable P">P: '+s.p+'mg/kg·'+pb+'</span>';
      html+='<span class="np" style="color:'+chipCol(kb)+';background:'+chipBg(kb)+'" title="Extractable K">K: '+s.k+'mg/kg·'+kb+'</span>';
      html+='<span class="np" style="color:'+chipCol(ocb)+';background:'+chipBg(ocb)+'" title="Organic Carbon">OC: '+s.oc.toFixed(1)+'%·'+ocb+'</span>';
      html+='<span class="np" style="color:'+phB.color+';background:var(--s2)" title="pH H2O">pH: '+s.ph.toFixed(1)+' '+phB.label+'</span>';
      html+='<span class="np" style="color:var(--t2);background:var(--s2)" title="Cation Exchange Capacity">CEC: '+s.cec+' cmol+/kg</span>';
      html+='<span class="np" style="color:var(--bl);background:rgba(99,102,241,.08)" title="FAO/WRB soil group">'+s.class+' · '+s.clay+'% clay</span>';
      html+='</div>';
    }
    if(f){html+='<div class="sh">KALRO Recommendation for '+cn+' (kg/ha)</div>';
    html+='<div class="sg4"><div class="st" style="background:rgba(124,58,237,.06);border:1px solid rgba(124,58,237,.12)"><div class="sv" style="color:var(--pp);font-size:14px">'+f.can+'</div><div class="sl2">CAN</div></div>';
    html+='<div class="st" style="background:rgba(239,68,68,.06);border:1px solid rgba(239,68,68,.12)"><div class="sv" style="color:var(--rd);font-size:14px">'+f.dap+'</div><div class="sl2">DAP</div></div>';
    html+='<div class="st" style="background:rgba(6,182,212,.06);border:1px solid rgba(6,182,212,.12)"><div class="sv" style="color:var(--cy);font-size:14px">'+f.lime+'</div><div class="sl2">Lime</div></div>';
    html+='<div class="st" style="background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.12)"><div class="sv" style="color:var(--gn);font-size:14px">KSh'+f.cost+'</div><div class="sl2">Cost/ha</div></div></div>';
    html+='<div style="margin-top:6px"><div class="sh">Application Schedule</div>';
    f.schedule.forEach(function(sc){html+='<div class="ic"><div class="ih" style="color:var(--pp)">'+sc.stage+'</div>CAN: '+sc.can+'kg | DAP: '+sc.dap+'kg<br><span style="color:var(--t3)">'+sc.when+'</span></div>'});
    html+='</div>';}
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Soil values: AfSIS/iSDA 30m + KALRO surveys | Recommendations: KALRO Soil Health Hub</div></div>';
    html+='<div style="margin-top:6px;font-size:9px;color:#4f46e5;font-weight:600">◑ Refresh: Seasonal</div>';
  } else if(mod==='market'){
    var m=simMarket(d.id);
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(8,145,178,.15)">📈</div><h3>Market — '+cn+'<span class="cad-badge cad-MONTHLY" title="KAMIS Ministry of Agriculture">Monthly</span></h3></div>';
    html+='<div class="sg"><div class="st" style="background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.12)"><div class="sv" style="color:var(--gn);font-size:14px">KSh'+m.msp+'</div><div class="sl2">NCPB Ref/90kg</div></div>';
    html+='<div class="st" style="background:'+(m.trend==='above'?'rgba(16,185,129,.06)':'rgba(239,68,68,.06)')+';border:1px solid '+(m.trend==='above'?'rgba(16,185,129,.12)':'rgba(239,68,68,.12)')+'"><div class="sv" style="color:'+(m.trend==='above'?'var(--gn)':'var(--rd)')+';font-size:14px">KSh'+m.mandi_price+'</div><div class="sl2">Local Mkt</div></div></div>';
    html+='<div class="ic" style="margin-top:6px"><div class="ih">📍 '+m.nearest_mandi+'</div>';
    if(m.trend==='above')html+='<span style="color:var(--gn);font-weight:700">▲ Above NCPB reference — good selling opportunity</span>';
    else html+='<span style="color:var(--or);font-weight:700">⚠ Below NCPB reference — consider SACCO aggregation</span>';
    html+='</div><div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: KAMIS / NCPB / EAGC weekly bulletins</div></div>';
    html+='<div style="margin-top:6px;font-size:9px;color:#4f46e5;font-weight:600">◑ Refresh: Monthly</div>';
  } else if(mod==='credit'){
    var cr=simCredit(d.id);
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(190,24,93,.15)">💳</div><h3>AgriScore — Credit Risk<span class="cad-badge cad-REF" title="AgriScore composite from input data">Modelled</span></h3></div>';
    html+='<div style="text-align:center;padding:12px;background:var(--bg);border-radius:8px;border:1px solid var(--bd);margin-bottom:6px"><div style="font-size:36px;font-weight:800;color:'+cr.color+'">'+cr.score+'</div><div style="font-size:12px;font-weight:700;color:'+cr.color+'">Grade '+cr.grade+'</div><div style="font-size:9px;color:var(--t3);margin-top:2px">Higher = Lower lending risk</div></div>';
    html+='<div class="sh">Score Breakdown</div>';
    var factors=[{name:'Hybrid adoption',val:cr.factors.srr_score,max:80,color:'var(--gn)'},{name:'Variety modernity',val:cr.factors.variety_score,max:30,color:'var(--bl)'},{name:'Irrigation access',val:cr.factors.irrigation_score,max:50,color:'var(--cy)'},{name:'No drought risk',val:cr.factors.drought_penalty,max:40,color:'var(--or)'},{name:'NDVI crop health',val:cr.factors.ndvi_score,max:68,color:'var(--gn)'}];
    factors.forEach(function(f2){html+='<div class="cb"><span class="cn">'+f2.name+'</span><div class="ct"><div class="cf" style="width:'+Math.round(f2.val/f2.max*100)+'%;background:'+f2.color+'"></div></div><span class="cv" style="color:'+f2.color+'">+'+f2.val+'</span></div>'});
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">For AFC, Equity Bank, KCB Mkulima, Hustler Fund credit assessment.</div></div>';
    html+='<div style="margin-top:6px;font-size:9px;color:#475569;font-weight:600">◇ Refresh: Computed composite</div>';
  } else if(mod==='horti'){
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(168,85,247,.15)">☕</div><h3>Horticulture Intelligence<span class="cad-badge cad-ANNUAL" title="AFA-HCD annual report">Annual</span></h3></div>';
    var hCrops=HORTI.crops;var dh=[];
    for(var hk in hCrops){if(hCrops[hk].districts[d.id])dh.push({key:hk,name:hCrops[hk].name,icon:hCrops[hk].icon,color:hCrops[hk].color,area:hCrops[hk].districts[d.id].area,prod:hCrops[hk].districts[d.id].prod,role:hCrops[hk].districts[d.id].role,variety:hCrops[hk].districts[d.id].variety||''})}
    if(dh.length===0)html+='<div style="color:var(--t3);font-size:11px">No major horticulture crops in '+d.n+'</div>';
    dh.sort(function(a,b){return b.area-a.area});
    dh.forEach(function(hc){
      html+='<div class="ic" style="border-left:3px solid '+hc.color+'"><div style="display:flex;align-items:center;gap:5px"><span style="font-size:16px">'+hc.icon+'</span><div style="flex:1"><div style="font-weight:700;color:'+hc.color+'">'+hc.name+'</div><div style="font-size:8px;color:var(--t3)">'+hc.role+'</div></div><div style="text-align:right"><div style="font-weight:800;font-size:12px">'+hc.area.toLocaleString()+' ha</div><div style="font-size:8px;color:var(--t3)">'+Math.round(hc.prod/1000)+'K MT</div></div></div>';
      if(hc.variety)html+='<div style="font-size:9px;color:var(--t2);margin-top:3px">Varieties: '+hc.variety+'</div>';
      html+='</div>';
    });
    var cc=HORTI.cold_chain[d.id];
    if(cc){html+='<div style="margin-top:6px"><div class="sh">Cold Chain Infrastructure</div><div class="sg4">';
    html+='<div class="st" style="background:var(--s2);border:1px solid var(--bd)"><div class="sv" style="font-size:14px">'+cc.cold_stores+'</div><div class="sl2">Cold stores</div></div>';
    html+='<div class="st" style="background:var(--s2);border:1px solid var(--bd)"><div class="sv" style="font-size:14px">'+cc.capacity_mt+'</div><div class="sl2">Capacity MT</div></div>';
    html+='<div class="st" style="background:var(--s2);border:1px solid var(--bd)"><div class="sv" style="font-size:14px">'+cc.pack_houses+'</div><div class="sl2">Pack houses</div></div>';
    html+='<div class="st" style="background:var(--s2);border:1px solid var(--bd)"><div class="sv" style="font-size:14px">'+cc.ripening_chambers+'</div><div class="sl2">Ripening ch</div></div></div>';
    if(cc.gap)html+='<div style="margin-top:3px;font-size:9px;color:'+(cc.gap.indexOf('CRITICAL')>=0||cc.gap.indexOf('critically')>=0?'var(--rd)':'var(--or)')+'">'+cc.gap+'</div></div>';}
    var curM=new Date().getMonth()+1;
    if(hCrops.tea&&hCrops.tea.districts[d.id]&&HORTI.calendar.tea&&HORTI.calendar.tea[curM]){
      var calT=HORTI.calendar.tea[curM];var atc=calT.alert==='red'?'var(--rd)':calT.alert==='yellow'?'var(--or)':'var(--gn)';
      html+='<div style="margin-top:6px"><div class="sh">Tea Monthly Advisory</div>';
      html+='<div class="ic" style="border-left:3px solid '+atc+'"><div class="ih" style="color:'+atc+'">🍵 Tea — '+calT.stage+'</div><div style="color:var(--t2)">'+calT.activity+'</div>';
      if(calT.pest&&calT.pest!=='None'&&calT.pest!=='None significant')html+='<div style="color:var(--or);margin-top:2px">🐛 '+calT.pest+'</div>';
      html+='<div style="color:var(--cy);margin-top:2px">💧 '+calT.irrigation+'</div></div></div>';}
    if(hCrops.coffee&&hCrops.coffee.districts[d.id]&&HORTI.calendar.coffee&&HORTI.calendar.coffee[curM]){
      var cal=HORTI.calendar.coffee[curM];var ac=cal.alert==='red'?'var(--rd)':cal.alert==='yellow'?'var(--or)':'var(--gn)';
      html+='<div style="margin-top:6px"><div class="sh">Coffee Monthly Advisory</div>';
      html+='<div class="ic" style="border-left:3px solid '+ac+'"><div class="ih" style="color:'+ac+'">☕ Coffee — '+cal.stage+'</div><div style="color:var(--t2)">'+cal.activity+'</div>';
      if(cal.pest&&cal.pest!=='None'&&cal.pest!=='None significant')html+='<div style="color:var(--or);margin-top:2px">🐛 '+cal.pest+'</div>';
      html+='<div style="color:var(--cy);margin-top:2px">💧 '+cal.irrigation+'</div></div></div>';}
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: KALRO, TRFK Kericho, Coffee Research Institute Ruiru, KTDA<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Annual</div></div>';
  } else if(mod==='ksc'){
    var ksc=simKSC(d.id);
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(124,58,237,.15)">🏭</div><h3>KSC Distribution — '+cn+'<span class="cad-badge cad-ANNUAL" title="Kenya Seed Company variety register">Annual</span></h3></div>';
    if(ksc){
      var fillPct=Math.round((ksc.distributed/ksc.demand)*100);
      html+='<div style="margin-bottom:8px"><div style="display:flex;justify-content:space-between;font-size:9px;margin-bottom:3px"><span style="color:var(--t3)">Distribution Progress</span><span style="font-weight:700;color:'+(fillPct>=70?'var(--gn)':fillPct>=50?'var(--or)':'var(--rd)')+'">'+fillPct+'%</span></div>';
      html+='<div style="height:8px;background:var(--bg);border-radius:4px;overflow:hidden"><div style="height:100%;width:'+fillPct+'%;background:'+(fillPct>=70?'#10b981':fillPct>=50?'#f59e0b':'#ef4444')+';border-radius:4px"></div></div></div>';
      html+='<div class="sg4">';
      html+='<div class="st" style="background:rgba(124,58,237,.06);border:1px solid rgba(124,58,237,.12)"><div class="sv" style="color:var(--pp);font-size:13px">'+ksc.demand+'</div><div class="sl2">Demand MT</div></div>';
      html+='<div class="st" style="background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.12)"><div class="sv" style="color:var(--gn);font-size:13px">'+ksc.distributed+'</div><div class="sl2">Distributed</div></div>';
      html+='<div class="st" style="background:rgba(239,68,68,.06);border:1px solid rgba(239,68,68,.12)"><div class="sv" style="color:var(--rd);font-size:13px">'+ksc.gap+'</div><div class="sl2">Gap MT</div></div>';
      html+='<div class="st" style="background:rgba(245,158,11,.06);border:1px solid rgba(245,158,11,.12)"><div class="sv" style="color:var(--or);font-size:13px">'+ksc.gapPct+'%</div><div class="sl2">Gap %</div></div></div>';
      html+='<div class="sg" style="margin-top:6px"><div class="st" style="background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.12)"><div class="sv" style="color:'+srrCol(d.srr[c])+';font-size:16px">'+d.srr[c]+'%</div><div class="sl2">Hybrid Adoption '+cn+'</div></div>';
      html+='<div class="st" style="background:rgba(99,102,241,.06);border:1px solid rgba(99,102,241,.12)"><div class="sv" style="color:var(--bl);font-size:16px">'+d.vrr+'%</div><div class="sl2">Modern Variety %</div></div></div></div>';
      html+='<div class="sc"><div class="sh">Variety-wise Distribution ('+cn+')</div>';
      ksc.varieties.forEach(function(v){var vc=v.status==='obsolete'?'var(--rd)':v.status==='aging'?'var(--or)':v.status==='new'?'var(--gn)':'var(--t2)';
      html+='<div style="display:flex;align-items:center;gap:5px;margin-bottom:4px;font-size:10px"><div style="width:90px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:'+vc+';font-weight:600">'+v.name+'</div><div style="flex:1;height:6px;background:var(--bg);border-radius:3px;overflow:hidden"><div style="height:100%;width:'+v.pct+'%;background:'+vc+';border-radius:3px"></div></div><div style="width:28px;text-align:right;font-weight:700;color:'+vc+'">'+v.pct+'%</div></div>'});
      html+='</div>';
      html+='<div class="sc"><div class="sh">Seasonal Distribution Timeline (Long Rains 2026)</div>';
      ksc.timeline.forEach(function(t){var aPct=ksc.demand>0?Math.round(t.actual/ksc.demand*100):0;var sc2=t.status==='critical gap'?'var(--rd)':t.status==='delayed'||t.status==='behind'?'var(--or)':'var(--gn)';
      html+='<div style="margin-bottom:6px"><div style="display:flex;justify-content:space-between;font-size:9px;margin-bottom:2px"><span style="font-weight:700">'+t.month+'</span><span style="color:'+sc2+'">'+t.status+'</span></div>';
      html+='<div style="height:8px;background:var(--bg);border-radius:4px;overflow:hidden"><div style="height:100%;width:'+aPct+'%;background:'+sc2+';border-radius:4px;opacity:.8"></div></div>';
      html+='<div style="display:flex;justify-content:space-between;font-size:7px;color:var(--t3);margin-top:1px"><span>Target: '+t.target+' MT</span><span>Actual: '+t.actual+' MT</span></div></div>'});
      html+='</div>';
      html+='<div class="ic"><div class="ih" style="color:var(--pp)">📦 Computation</div>Crop area: '+ksc.area.toLocaleString()+' ha × Seed rate: '+ksc.seedRate+' kg/ha = <b>'+ksc.demand+' MT demand</b><br>Hybrid Adoption '+d.srr[c]+'% → <b>'+ksc.distributed+' MT distributed</b> as certified seed<br>Gap: <b style="color:var(--rd)">'+ksc.gap+' MT ('+ksc.gapPct+'%)</b> still on farm-saved seed</div>';
    }
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: KSC MIS | KEPHIS certification | Cooperative records<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Annual</div></div>';
  } else if(mod==='sowing'){
    var sw=simSowing(d.id);
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(21,128,61,.15)">🌱</div><h3>Sowing Progress — '+cn+'<span class="cad-badge cad-MONTHLY" title="KALRO + FAO crop calendar">Seasonal</span></h3></div>';
    html+='<div style="margin-bottom:8px"><div style="display:flex;justify-content:space-between;font-size:9px;margin-bottom:3px"><span>'+d.n+': <b>'+sw.pct+'%</b> sown</span><span style="color:'+(sw.pct>=sw.target?'var(--gn)':'var(--or)')+'">Target: '+sw.target+'%</span></div>';
    html+='<div style="height:10px;background:var(--bg);border-radius:5px;overflow:hidden;position:relative"><div style="position:absolute;height:100%;width:'+sw.target+'%;background:rgba(16,185,129,.15);border-right:2px dashed var(--gn)"></div><div style="position:absolute;height:100%;width:'+sw.pct+'%;background:'+(sw.pct>=sw.target?'#10b981':'#f59e0b')+';border-radius:5px"></div></div></div>';
    html+='<div class="sg"><div class="st" style="background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.12)"><div class="sv" style="font-size:14px;color:var(--gn)">'+sw.sownArea.toLocaleString()+'</div><div class="sl2">Ha sown</div></div>';
    html+='<div class="st" style="background:rgba(245,158,11,.06);border:1px solid rgba(245,158,11,.12)"><div class="sv" style="font-size:14px;color:var(--or)">'+(sw.area-sw.sownArea).toLocaleString()+'</div><div class="sl2">Ha remaining</div></div></div>';
    html+='<div style="margin-top:8px"><div class="sh">Weekly Sowing Trend</div><div style="display:flex;gap:3px;align-items:flex-end;height:60px">';
    ['W1','W2','W3','W4','W5'].forEach(function(w2,i){var h2=sw.weekly[i]||0;html+='<div style="flex:1;display:flex;flex-direction:column;align-items:center"><div style="width:100%;height:'+h2*.55+'px;background:linear-gradient(180deg,#10b981,#059669);border-radius:3px 3px 0 0;min-height:2px"></div><div style="font-size:7px;color:var(--t3);margin-top:2px">'+w2+'</div><div style="font-size:8px;font-weight:700;color:var(--gn)">'+h2+'%</div></div>'});
    html+='</div></div>';
    html+='<div class="ic" style="margin-top:6px;border-left:3px solid '+(sw.pct>=sw.target?'var(--gn)':'var(--or)')+'"><div class="ih" style="color:'+(sw.pct>=sw.target?'var(--gn)':'var(--or)')+'">'+sw.status+'</div>'+(sw.pct<sw.target?cn+' sowing '+(sw.target-sw.pct)+'% behind target. Investigate: seed availability, Long Rains onset delay, or labor shortage.':'On track. Monitor NDVI for germination confirmation in 10 days.')+'</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: Sentinel-2 NDVI threshold detection | Refresh: every 5 days<div style="margin-top:3px;font-size:9px;color:#4f46e5;font-weight:600">◑ Refresh: Seasonal</div></div>';
  } else if(mod==='yieldloss'){
    var yl=simYieldLoss(d.id);
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(185,28,28,.15)">💸</div><h3>Yield Loss — '+cn+'<span class="cad-badge cad-REF" title="KNBS NAPR yield gap analysis">Annual estimate</span></h3></div>';
    if(yl){
      html+='<div style="text-align:center;padding:14px;background:linear-gradient(135deg,rgba(185,28,28,.08),rgba(239,68,68,.05));border-radius:8px;border:1px solid rgba(239,68,68,.15);margin-bottom:8px"><div style="font-size:10px;color:var(--t3)">'+d.n+' is losing</div><div style="font-size:32px;font-weight:800;color:var(--rd)">KSh'+yl.lostValue+'K</div><div style="font-size:10px;color:var(--or)">per season due to obsolete seed varieties</div></div>';
      html+='<div class="sg4">';
      html+='<div class="st" style="background:var(--s2);border:1px solid var(--bd)"><div class="sv" style="font-size:12px;color:var(--rd)">'+yl.oldYield+'</div><div class="sl2">Current kg/ha</div></div>';
      html+='<div class="st" style="background:var(--s2);border:1px solid var(--bd)"><div class="sv" style="font-size:12px;color:var(--gn)">'+yl.newYield+'</div><div class="sl2">Potential kg/ha</div></div>';
      html+='<div class="st" style="background:var(--s2);border:1px solid var(--bd)"><div class="sv" style="font-size:12px;color:var(--or)">'+yl.yieldGap+'</div><div class="sl2">Gap kg/ha</div></div>';
      html+='<div class="st" style="background:var(--s2);border:1px solid var(--bd)"><div class="sv" style="font-size:12px;color:var(--pp)">'+(100-yl.srr)+'%</div><div class="sl2">On old seed</div></div></div>';
      var maxP=Math.max(yl.actualProd,yl.potentialProd);
      html+='<div style="margin-top:8px"><div class="sh">Production: Actual vs Potential (MT)</div>';
      html+='<div class="cb"><span class="cn" style="color:var(--rd)">Actual</span><div class="ct" style="height:8px"><div class="cf" style="width:'+Math.round(yl.actualProd/maxP*100)+'%;background:var(--rd)"></div></div><span class="cv" style="color:var(--rd)">'+yl.actualProd.toLocaleString()+'</span></div>';
      html+='<div class="cb"><span class="cn" style="color:var(--gn)">Potential</span><div class="ct" style="height:8px"><div class="cf" style="width:100%;background:var(--gn)"></div></div><span class="cv" style="color:var(--gn)">'+yl.potentialProd.toLocaleString()+'</span></div>';
      html+='<div class="cb"><span class="cn" style="color:var(--or)">Lost</span><div class="ct" style="height:8px"><div class="cf" style="width:'+Math.round(yl.lostProduction/maxP*100)+'%;background:var(--or)"></div></div><span class="cv" style="color:var(--or)">'+yl.lostProduction.toLocaleString()+'</span></div></div>';
      html+='<div class="ic"><div class="ih" style="color:var(--pp)">📊 Calculation</div>'+yl.farmSavedArea.toLocaleString()+' ha on farm-saved seed × '+yl.yieldGap+' kg/ha gap = '+yl.lostProduction.toLocaleString()+' MT lost × NCPB KSh'+{maize:3500,wheat:4800,beans:10500,sorghum:4000}[c]+'/90kg bag = <b style="color:var(--rd)">KSh'+yl.lostValue+'K</b></div>';
    }
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Sources: KNBS Statistical Abstract | KALRO variety trial yields | Tegemeo Institute / CIMMYT survey baselines<div style="margin-top:3px;font-size:9px;color:#475569;font-weight:600">◇ Refresh: Annual estimate</div></div>';
  } else if(mod==='earlywarning'){
    var ew=simEarlyWarning(d.id);
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(220,38,38,.15)">🚨</div><h3>Early Warning Index<span class="cad-badge cad-MONTHLY" title="NDMA Early Warning bulletins">Monthly</span></h3></div>';
    html+='<div style="text-align:center;padding:14px;background:var(--bg);border-radius:8px;border:2px solid '+ew.color+';margin-bottom:8px"><div style="font-size:36px;font-weight:800;color:'+ew.color+'">'+ew.score+'<span style="font-size:16px">/100</span></div><div style="font-size:13px;font-weight:700;color:'+ew.color+'">'+ew.level+'</div></div>';
    html+='<div class="sh">Risk Components</div>';
    var comps=[{name:'NDVI stress',val:ew.components.ndvi,max:30,color:'#2563eb'},{name:'NDVI decline',val:ew.components.ndvi_trend,max:15,color:'#6366f1'},{name:'Heat anomaly',val:ew.components.temp,max:15,color:'#f59e0b'},{name:'Pest conditions',val:ew.components.pest,max:20,color:'#ef4444'},{name:'Drought exposure',val:ew.components.drought,max:10,color:'#d97706'},{name:'Soil deficiency',val:ew.components.soil,max:10,color:'#a78bfa'}];
    comps.forEach(function(comp){if(comp.val>0)html+='<div class="cb"><span class="cn">'+comp.name+'</span><div class="ct"><div class="cf" style="width:'+Math.round(comp.val/comp.max*100)+'%;background:'+comp.color+'"></div></div><span class="cv" style="color:'+comp.color+'">+'+comp.val+'</span></div>'});
    if(ew.actions.length>0){html+='<div style="margin-top:8px"><div class="sh">Auto-generated Actions</div>';ew.actions.forEach(function(a){html+='<div class="ic" style="border-left:3px solid '+ew.color+'"><b>'+a.icon+'</b> '+a.text+'</div>'});html+='</div>';}
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Composite: Sentinel-2 NDVI + Open-Meteo + KALRO pest models + NDMA drought data + KENSIS soil.</div></div>';
    html+='<div style="margin-top:6px;font-size:9px;color:#4f46e5;font-weight:600">◑ Refresh: Monthly</div>';
  } else if(mod==='benchmark'){
    var bm=simBenchmark(d.id);
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(3,105,161,.15)">📊</div><h3>Peer Benchmarking — '+d.n+'<span class="cad-badge cad-REF" title="Cross-module synthesis">Composite</span></h3></div>';
    if(bm){
      html+='<div class="sh">Your metrics</div><div class="sg4">';
      html+='<div class="st" style="background:var(--s2);border:1px solid var(--bd)"><div class="sv" style="font-size:12px;color:'+srrCol(bm.vec.srr)+'">'+bm.vec.srr+'%</div><div class="sl2">SRR</div></div>';
      html+='<div class="st" style="background:var(--s2);border:1px solid var(--bd)"><div class="sv" style="font-size:12px;color:'+ndviCol(bm.vec.ndvi)+'">'+bm.vec.ndvi.toFixed(2)+'</div><div class="sl2">NDVI</div></div>';
      html+='<div class="st" style="background:var(--s2);border:1px solid var(--bd)"><div class="sv" style="font-size:12px;color:var(--cy)">'+bm.vec.irr+'%</div><div class="sl2">Irrigation</div></div>';
      html+='<div class="st" style="background:var(--s2);border:1px solid var(--bd)"><div class="sv" style="font-size:12px;color:'+(bm.vec.drought?'var(--rd)':'var(--gn)')+'">'+( bm.vec.drought?'Yes':'No')+'</div><div class="sl2">Drought</div></div></div>';
      html+='<div style="margin-top:8px"><div class="sh">Most Similar Counties (4 peers)</div>';
      html+='<table style="width:100%;font-size:9px;border-collapse:collapse">';
      html+='<tr style="border-bottom:1px solid var(--bd)"><th style="text-align:left;padding:4px;color:var(--t3)">County</th><th style="padding:4px;color:var(--t3)">SRR</th><th style="padding:4px;color:var(--t3)">NDVI</th><th style="padding:4px;color:var(--t3)">Irr%</th></tr>';
      bm.peers.forEach(function(p){var isBest=p.d.id===bm.best.d.id;
      html+='<tr style="border-bottom:1px solid var(--bd);'+(isBest?'background:rgba(16,185,129,.06)':'')+'"><td style="padding:4px;font-weight:'+(isBest?'700':'400')+'">'+p.d.n+(isBest?' 🏆':'')+'</td><td style="padding:4px;text-align:center;color:'+srrCol(p.vec.srr)+'">'+p.vec.srr+'%</td><td style="padding:4px;text-align:center;color:'+ndviCol(p.vec.ndvi)+'">'+p.vec.ndvi.toFixed(2)+'</td><td style="padding:4px;text-align:center">'+p.vec.irr+'%</td></tr>'});
      html+='</table></div>';
      if(bm.lessons.length>0){html+='<div style="margin-top:8px"><div class="sh">Key Insights</div>';bm.lessons.forEach(function(l){html+='<div class="ic" style="border-left:3px solid var(--bl)">💡 '+l+'</div>'});html+='</div>';}
    }
    html+='</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:#475569;font-weight:600">◇ Refresh: Composite</div>';
  } else if(mod==='monsoon'){
    var mn=simMonsoon(d.id);
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(14,116,144,.15)">🌧</div><h3>Season Readiness — Long Rains 2026<span class="cad-badge cad-MONTHLY" title="KMD seasonal forecasts">Seasonal</span></h3></div>';
    if(mn){
      html+='<div style="text-align:center;padding:12px;background:var(--bg);border-radius:8px;border:2px solid '+mn.gradeColor+';margin-bottom:8px"><div style="font-size:40px;font-weight:800;color:'+mn.gradeColor+'">'+mn.grade+'</div><div style="font-size:11px;color:var(--t2)">'+mn.readyCount+'/'+mn.total+' parameters ready ('+mn.pct+'%)</div></div>';
      html+='<div class="sh">Readiness Checklist</div>';
      mn.checks.forEach(function(ch){var sc3=ch.status==='ready'?'#10b981':ch.status==='partial'||ch.status==='attention'?'#f59e0b':'#ef4444';var badge=ch.status==='ready'?'✅':ch.status==='partial'?'🟡':ch.status==='attention'?'🟡':ch.status==='pending'?'⏳':'⚠';
      html+='<div style="display:flex;align-items:center;gap:6px;padding:5px 6px;background:var(--bg);border-radius:4px;margin-bottom:2px;border:1px solid var(--bd);font-size:10px"><span style="font-size:12px">'+badge+'</span><div style="flex:1"><div style="font-weight:600">'+ch.icon+' '+ch.name+'</div><div style="font-size:8px;color:'+sc3+'">'+ch.detail+'</div></div></div>'});
      if(mn.grade==='C'||mn.grade==='D'||mn.grade==='F')html+='<div class="ic" style="margin-top:6px;border-left:3px solid var(--rd)"><div class="ih" style="color:var(--rd)">⚠ Action Required</div>'+d.n+' is Grade '+mn.grade+' — '+(mn.total-mn.readyCount)+' parameters need attention before Long Rains onset.</div>';
    }
    html+='</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:#4f46e5;font-weight:600">◑ Refresh: Seasonal</div>';
  } else if(mod==='dss'){
    html+='<div class="sc"><div style="font-size:11px;font-weight:700;color:var(--pp);margin-bottom:6px">📋 Scheme Performance — '+d.n+'</div>';
    var onTarget=0,moderate=0,behind=0;
    SCHEMES.forEach(function(s2){var r2=simScheme(s2,d.id);if(r2.status==='on_track')onTarget++;else if(r2.status==='moderate')moderate++;else behind++});
    html+='<div style="display:flex;gap:4px;margin-bottom:6px">';
    html+='<div style="flex:1;text-align:center;padding:6px;background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.12);border-radius:5px"><div style="font-size:16px;font-weight:800;color:var(--gn)">'+onTarget+'</div><div style="font-size:7px;color:var(--t3)">On Target</div></div>';
    html+='<div style="flex:1;text-align:center;padding:6px;background:rgba(245,158,11,.06);border:1px solid rgba(245,158,11,.12);border-radius:5px"><div style="font-size:16px;font-weight:800;color:var(--or)">'+moderate+'</div><div style="font-size:7px;color:var(--t3)">Moderate</div></div>';
    html+='<div style="flex:1;text-align:center;padding:6px;background:rgba(239,68,68,.06);border:1px solid rgba(239,68,68,.12);border-radius:5px"><div style="font-size:16px;font-weight:800;color:var(--rd)">'+behind+'</div><div style="font-size:7px;color:var(--t3)">Behind</div></div></div>';
    SCHEMES.forEach(function(s2){var r2=simScheme(s2,d.id);var sc4=r2.status==='on_track'?'#10b981':r2.status==='moderate'?'#f59e0b':'#ef4444';var badge2=r2.status==='on_track'?'✅':r2.status==='moderate'?'🟡':'🔴';
    html+='<div style="display:flex;align-items:center;gap:4px;padding:4px 5px;background:var(--bg);border-radius:4px;margin-bottom:2px;border:1px solid var(--bd);font-size:9px">';
    html+='<span style="font-size:10px">'+s2.icon+'</span><div style="flex:1;min-width:0"><div style="font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+s2.name+'</div></div>';
    html+='<div style="width:50px;height:4px;background:var(--s2);border-radius:2px;overflow:hidden"><div style="height:100%;width:'+r2.distAch+'%;background:'+sc4+';border-radius:2px"></div></div>';
    html+='<span style="font-size:8px;font-weight:700;color:'+sc4+';width:30px;text-align:right">'+r2.distAch+'%</span><span style="font-size:7px">'+badge2+'</span></div>'});
    var behindSchemes=SCHEMES.filter(function(s2){return simScheme(s2,d.id).status==='behind'});
    if(behindSchemes.length>0){html+='<div style="margin-top:6px"><div style="font-size:9px;font-weight:700;color:var(--rd);margin-bottom:3px">⚠ Action Required ('+behindSchemes.length+' behind)</div>';
    behindSchemes.slice(0,3).forEach(function(s2){var r2=simScheme(s2,d.id);html+='<div class="ic" style="border-left:2px solid var(--rd);font-size:9px">'+s2.icon+' <b>'+s2.name+'</b> at '+r2.distAch+'% vs '+s2.target+'% target</div>'});html+='</div>';}
    html+='<div style="margin-top:6px;font-size:8px;color:var(--t3)">Source: MoALD MIS, KSC, AFC portal | FY 2025-26<div style="margin-top:3px;font-size:9px;color:#475569;font-weight:600">◇ Refresh: Computed</div></div>';
  } else if(mod==='report'){
    var ew2=simEarlyWarning(d.id);var sw2=simSowing(d.id);var yl2=simYieldLoss(d.id);var mn2=simMonsoon(d.id);var ndvi2=simNDVI(d.id);var w2=simWeather(d.id);var mkt2=simMarket(d.id);
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(100,116,139,.15)">📄</div><h3>Intelligence Report — '+d.n+'<span class="cad-badge cad-REF" title="Decision-support synthesis">Computed</span></h3></div>';
    html+='<div style="font-size:8px;color:var(--t3);margin-bottom:8px">Auto-generated: '+new Date().toLocaleDateString('en-KE',{weekday:'long',year:'numeric',month:'long',day:'numeric'})+'</div>';
    html+='<div style="padding:8px;background:var(--bg);border-radius:6px;border:1px solid var(--bd);font-size:10px;line-height:1.6">';
    html+='<b style="color:var(--gn)">EXECUTIVE SUMMARY — '+d.n+'</b><br><br>';
    html+='<b>Risk Level:</b> <span style="color:'+ew2.color+'">'+ew2.level+' ('+ew2.score+'/100)</span><br>';
    html+='<b>'+cn+' Hybrid:</b> <span style="color:'+srrCol(d.srr[c])+'">'+d.srr[c]+'%</span> | Modern: '+d.vrr+'%<br>';
    html+='<b>Crop Health:</b> NDVI '+ndvi2.cur.toFixed(2)+' ('+ndvi2.health+')<br>';
    html+='<b>Weather:</b> '+w2.temp_max+'°C max, '+w2.rain_7d+'mm rain next 7d<br>';
    html+='<b>Season Readiness:</b> Grade '+(mn2?mn2.grade:'—')+' ('+(mn2?mn2.pct:0)+'%)<br>';
    if(yl2)html+='<b>Yield Loss:</b> <span style="color:var(--rd)">KSh'+yl2.lostValue+'K/season</span> from obsolete varieties<br>';
    html+='<b>Market:</b> KSh'+mkt2.mandi_price+'/90kg ('+(mkt2.trend==='above'?'above':'below')+' NCPB ref)<br></div>';
    html+='<div style="margin-top:6px"><div class="sh">🚨 Active Alerts</div>';
    var alerts=[];
    if(ew2.score>=50)alerts.push({c:'var(--rd)',t:'Early Warning score '+ew2.score+'/100 — '+ew2.level});
    if(d.srr[c]<20)alerts.push({c:'var(--rd)',t:cn+' Hybrid adoption critically low at '+d.srr[c]+'%'});
    if(ndvi2.cur<.4)alerts.push({c:'var(--or)',t:'Satellite NDVI '+ndvi2.cur.toFixed(2)+' indicates crop stress'});
    if(d.dr>=2)alerts.push({c:'var(--or)',t:'ASAL / drought-prone county — preparedness critical'});
    if(alerts.length===0)alerts.push({c:'var(--gn)',t:'No critical alerts — county performing within parameters'});
    alerts.forEach(function(a){html+='<div class="ic" style="border-left:3px solid '+a.c+';font-size:10px">'+a.t+'</div>'});
    html+='</div>';
    html+='<div style="margin-top:6px"><div class="sh">📌 Recommendations</div>';
    html+='<div class="ic">1. '+(d.srr[c]<30?'Increase '+cn+' hybrid seed distribution — target 5% adoption gain this season':'Maintain seed distribution — focus on variety replacement')+'</div>';
    html+='<div class="ic">2. '+(ndvi2.trend==='down'?'Investigate NDVI decline — field inspection recommended within 48 hours':'Crop health stable — continue monitoring on 5-day cycle')+'</div>';
    html+='<div class="ic">3. '+(mn2&&mn2.grade!=='A'?'Season readiness Grade '+mn2.grade+' — resolve '+(mn2.total-mn2.readyCount)+' gaps before Long Rains onset':'Season preparedness on track')+'</div></div>';
    html+='<div style="margin-top:8px"><button class="wa-btn" style="background:#64748b" onclick="alert(\'PDF report for '+d.n+'\')">📥 Download PDF Report — '+d.n+'</button></div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Compiled from: Sentinel-2, Open-Meteo, KAMIS/NCPB, KENSIS, KNBS, KALRO varieties.</div></div>';
    html+='<div style="margin-top:6px;font-size:9px;color:#475569;font-weight:600">◇ Refresh: On-demand</div>';
  } else if(mod==='officer'){
    var distIdx=D.findIndex(function(x){return x.id===d.id});var srrScore=d.srr[c];
    var perfTier=srrScore>=35?'high':srrScore>=22?'medium':'low';
    var inspDone=perfTier==='high'?Math.round(15+((distIdx*7)%8)):perfTier==='medium'?Math.round(9+((distIdx*5)%7)):Math.round(4+((distIdx*3)%6));
    var blks=BLOCKS[d.id]||[];var inspTarget=Math.round(blks.length*1.5)||12;
    var dbtPct=perfTier==='high'?Math.round(75+((distIdx*3)%14)):perfTier==='medium'?Math.round(55+((distIdx*5)%18)):Math.round(30+((distIdx*7)%22));
    var complaints=perfTier==='high'?Math.round((distIdx%3)):perfTier==='medium'?Math.round(2+(distIdx%4)):Math.round(4+(distIdx%6));
    var trainingSess=perfTier==='high'?Math.round(5+(distIdx%4)):perfTier==='medium'?Math.round(2+(distIdx%4)):Math.round(1+(distIdx%3));
    var perfScore=Math.round((inspDone/inspTarget*30)+(dbtPct/100*30)+(trainingSess/8*20)+(complaints===0?20:complaints<=2?10:0));
    var grade2=perfScore>=80?{l:'A',c:'var(--gn)'}:perfScore>=60?{l:'B',c:'var(--cy)'}:perfScore>=40?{l:'C',c:'var(--or)'}:{l:'D',c:'var(--rd)'};
    html+='<div class="sc"><div style="display:flex;align-items:center;justify-content:space-between"><div class="mp-title" style="margin-bottom:0"><div class="mp-icon" style="background:rgba(71,85,105,.15)">🤝</div><h3>Officer Dashboard<span class="cad-badge cad-ANNUAL" title="Field officer caseload">On-demand</span></h3></div>';
    html+='<div style="text-align:center;padding:6px 12px;background:var(--s2);border-radius:8px;border:2px solid '+grade2.c+'"><div style="font-size:22px;font-weight:800;color:'+grade2.c+'">'+grade2.l+'</div><div style="font-size:7px;color:var(--t3)">GRADE</div></div></div></div>';
    html+='<div class="sc"><div class="sh">Field Performance KPIs</div><div class="sg4">';
    html+='<div class="st" style="background:var(--s2);border:1px solid var(--bd)"><div class="sv" style="font-size:14px;color:'+(inspDone>=inspTarget*0.8?'var(--gn)':'var(--or)')+'">'+inspDone+'/'+inspTarget+'</div><div class="sl2">Inspections</div></div>';
    html+='<div class="st" style="background:var(--s2);border:1px solid var(--bd)"><div class="sv" style="font-size:14px;color:'+(dbtPct>=70?'var(--gn)':'var(--or)')+'">'+dbtPct+'%</div><div class="sl2">Input Dist.</div></div>';
    html+='<div class="st" style="background:var(--s2);border:1px solid var(--bd)"><div class="sv" style="font-size:14px;color:var(--cy)">'+trainingSess+'</div><div class="sl2">Trainings</div></div>';
    html+='<div class="st" style="background:var(--s2);border:1px solid var(--bd)"><div class="sv" style="font-size:14px;color:'+(complaints<=2?'var(--gn)':'var(--rd)')+'">'+complaints+'</div><div class="sl2">Complaints</div></div></div>';
    if(blks.length>0){html+='<div style="margin-top:6px"><div class="sh">Sub-County Inspection Status ('+blks.length+' sub-counties)</div><div style="display:flex;flex-wrap:wrap;gap:3px">';
    blks.forEach(function(bl,bi){var done=bi<inspDone;var col=done?'var(--gn)':'var(--rd)';html+='<div style="padding:3px 6px;background:'+(done?'rgba(16,185,129,.1)':'rgba(239,68,68,.08)')+';border-radius:3px;font-size:8px;color:'+col+';border:1px solid '+col+'22">'+(done?'✅':'⚠')+' '+bl+'</div>'});
    html+='</div></div>';}
    html+='</div>';
    html+='<div style="padding:0 10px 8px;font-size:8px;color:var(--t3)">Source: MoALD field tracking + cooperative reports</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: On-demand</div>';
  } else if(mod==='voice'){
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(192,38,211,.15)">🗣</div><h3>Mkulima Voice — '+d.n+'<span class="cad-badge cad-ANNUAL" title="Multilingual SMS/voice service">On-demand</span></h3></div>';
    var regionVoices=FARMER_VOICES.filter(function(v){return v.dist===d.id});
    if(regionVoices.length===0){html+='<div style="color:var(--t3);font-size:11px">No recent farmer reports from '+d.n+'</div>';
    html+='<div style="margin-top:6px"><div class="sh">All Kenya — Recent</div>';
    FARMER_VOICES.slice(0,5).forEach(function(v){var sc5=v.severity==='red'?'var(--rd)':v.severity==='orange'?'var(--or)':'var(--gn)';var rn=D.find(function(x){return x.id===v.dist});html+='<div class="ic" style="border-left:3px solid '+sc5+'"><div style="display:flex;justify-content:space-between"><div class="ih">'+(rn?rn.n:v.dist)+'</div><span style="font-size:8px;color:'+sc5+'">'+v.count+' reports</span></div>'+v.msg+'</div>'});html+='</div>';}
    else{regionVoices.forEach(function(v){var sc5=v.severity==='red'?'var(--rd)':v.severity==='orange'?'var(--or)':'var(--gn)';html+='<div class="ic" style="border-left:3px solid '+sc5+'"><div style="display:flex;justify-content:space-between"><span class="ih">'+v.cat+'</span><span style="font-size:8px;color:'+sc5+'">'+v.count+' reports</span></div>'+v.msg+'</div>'});}
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: WhatsApp bot reports + USSD *741# advisory + sub-county extension officer field reports<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: On-demand</div></div>';
  } else if(mod==='pestcam'){
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(22,163,74,.15)">📸</div><h3>Pest Camera — Photo Diagnosis<span class="cad-badge cad-WEEKLY" title="Farmer photo capture, AI diagnosis">On-demand</span></h3></div>';
    html+='<div style="font-size:9px;color:var(--t3);margin-bottom:8px">Mkulima sends leaf photo via WhatsApp — AI identifies pest/disease — returns treatment in Swahili/English</div>';
    html+='<div style="background:#111;border-radius:12px;overflow:hidden;border:2px solid var(--bd);margin-bottom:8px"><div style="height:140px;background:linear-gradient(135deg,#1a3a1a,#0a200a);display:flex;align-items:center;justify-content:center;flex-direction:column"><div style="width:60px;height:60px;border-radius:50%;border:3px solid rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:28px">📷</div><div style="font-size:11px;color:rgba(255,255,255,.5);margin-top:6px">Tap to capture leaf photo</div></div>';
    html+='<div style="padding:8px;text-align:center;font-size:9px;color:var(--gn)">🤖 AI ready — Fall Armyworm, UG99 Stem Rust, Striga, Bean Stem Maggot, CBD, Tea Mosquito Bug</div></div>';
    var demoPests=[{name:'Fall Armyworm',crop:'Maize',symptoms:'Windowing leaves, frass in whorl',treatment:'Emamectin Benzoate 5SG. Push-pull IPM (Desmodium + Brachiaria).',confidence:96,icon:'🐛'},{name:'Wheat Stem Rust (UG99)',crop:'Wheat',symptoms:'Red-brown pustules on stems/leaves',treatment:'Propiconazole 25EC spray immediately. Use Eagle10/Kingbird/Korongo resistant varieties.',confidence:93,icon:'🟤'},{name:'Coffee Berry Disease',crop:'Coffee',symptoms:'Dark sunken lesions on green berries',treatment:'Copper fungicide at 15-day interval. Ruiru 11 / Batian resistant cultivars.',confidence:91,icon:'☕'},{name:'Striga Witchweed',crop:'Maize/Sorghum',symptoms:'Purple flowers at base, stunted host',treatment:'Imazapyr-coated seed (StrigAway). Push-pull. Trap crop Desmodium.',confidence:89,icon:'🌸'}];
    html+='<div class="sh">Pest Database — '+d.n+'</div>';
    demoPests.forEach(function(p){html+='<div style="padding:6px;background:var(--bg);border-radius:5px;margin-bottom:3px;border:1px solid var(--bd)"><div style="display:flex;align-items:center;gap:4px;margin-bottom:3px"><span style="font-size:12px">'+p.icon+'</span><div style="flex:1"><div style="font-size:10px;font-weight:700">'+p.name+'</div><div style="font-size:8px;color:var(--cy)">'+p.crop+'</div></div><span style="font-size:7px;color:var(--gn)">'+p.confidence+'%</span></div>';
    html+='<div style="font-size:9px;color:var(--or)">🔍 '+p.symptoms+'</div><div style="font-size:9px;color:var(--gn)">💊 '+p.treatment+'</div></div>'});
    html+='<div style="margin-top:6px;font-size:8px;color:var(--t3)">Production: Vision AI on crop images → pest classification → Swahili/English treatment via WhatsApp. Zero app download.</div></div>';
    html+='<div style="margin-top:6px;font-size:9px;color:#0891b2;font-weight:600">◐ Refresh: On-demand</div>';
  } else if(mod==='seedqr'){
    var sd=simScanDensity(d.id);
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(13,148,136,.15)">📎</div><h3>Seed QR Traceability<span class="cad-badge cad-ANNUAL" title="KEPHIS sticker SMS verification 1393">Continuous</span></h3></div>';
    html+='<div style="font-size:9px;color:var(--t3);margin-bottom:8px">Scan QR on seed packet → KEPHIS verify authenticity → variety suitability → e-voucher subsidy</div>';
    html+='<div class="sh">County QR Scan Rate — '+d.n+'</div>';
    html+='<div style="padding:8px;background:var(--bg);border-radius:6px;border:1px solid var(--bd);margin-bottom:8px">';
    html+='<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><div style="flex:1"><div style="font-size:11px;font-weight:800;color:'+sd.color+'">'+sd.pct+'% scan compliance</div><div style="font-size:8px;color:var(--t3)">'+sd.total.toLocaleString()+' bags scanned this season</div></div>';
    html+='<div style="padding:4px 8px;border-radius:4px;font-size:9px;font-weight:800;background:'+(sd.risk==='HIGH'?'rgba(239,68,68,.12)':'rgba(16,185,129,.12)')+';color:'+sd.color+'">'+sd.risk+' RISK</div></div>';
    html+='<div style="height:6px;background:var(--s2);border-radius:3px;overflow:hidden"><div style="height:100%;width:'+sd.pct+'%;background:'+sd.color+';border-radius:3px"></div></div>';
    html+='<div style="font-size:8px;color:var(--t3);margin-top:4px">⚠ '+sd.spurious+' counterfeit seed complaints this season in '+d.n+'</div></div>';
    var allSD=D.map(function(x){return{n:x.n,pct:simScanDensity(x.id).pct,color:simScanDensity(x.id).color}}).sort(function(a,b){return a.pct-b.pct});
    html+='<div class="sh">Scan Compliance — All Counties</div>';
    allSD.slice(0,5).forEach(function(x){html+='<div style="display:flex;align-items:center;gap:5px;margin-bottom:2px;font-size:9px"><span style="width:80px;color:var(--t2)">'+x.n+'</span><div style="flex:1;height:4px;background:var(--s2);border-radius:2px;overflow:hidden"><div style="height:100%;width:'+x.pct+'%;background:'+x.color+'"></div></div><span style="width:28px;text-align:right;font-weight:700;color:'+x.color+'">'+x.pct+'%</span></div>'});
    html+='<div style="margin-top:6px;font-size:8px;color:var(--t3)">Counterfeit seed estimated at 30-40% of Kenya market. KEPHIS QR traceability from breeder→farmer eliminates fakes.</div></div>';
    html+='<div style="margin-top:6px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Continuous (1393 SMS)</div>';
  } else if(mod==='kenat'){
    var natAvg={maize:{srr:35,yield:1670},wheat:{srr:35,yield:3032},beans:{srr:25,yield:650},sorghum:{srr:25,yield:1300}}[c];
    var distYield=c==='maize'?r.maize.y:c==='wheat'?r.wheat.y:c==='beans'?r.beans.y:r.sorghum.y;
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(234,88,12,.15)">🇰🇪</div><h3>'+d.n+' vs National — '+cn+'<span class="cad-badge cad-ANNUAL" title="KEPHIS National Performance Trials">Annual</span></h3></div>';
    var metrics=[{name:'Hybrid Adoption (%)',dist:d.srr[c],natl:natAvg.srr,unit:'%'},{name:'Yield (kg/ha)',dist:distYield,natl:natAvg.yield,unit:'kg/ha'},{name:'Irrigation (%)',dist:r?r.irrigation_pct:5,natl:8,unit:'%'}];
    metrics.forEach(function(me){var maxVal=Math.max(me.dist,me.natl)*1.2;
    html+='<div style="margin-bottom:8px"><div style="font-size:10px;font-weight:700;margin-bottom:3px">'+me.name+'</div>';
    [{label:d.n,val:me.dist,color:'var(--pp)'},{label:'National avg',val:me.natl,color:'var(--gn)'}].forEach(function(bar){var w3=Math.round(bar.val/maxVal*100);
    html+='<div style="display:flex;align-items:center;gap:4px;margin-bottom:2px;font-size:9px"><span style="width:65px;color:var(--t3)">'+bar.label+'</span><div style="flex:1;height:6px;background:var(--bg);border-radius:3px;overflow:hidden"><div style="height:100%;width:'+w3+'%;background:'+bar.color+';border-radius:3px"></div></div><span style="width:50px;text-align:right;font-weight:700;color:'+bar.color+'">'+bar.val.toLocaleString()+'</span></div>'});
    var gap2=me.natl-me.dist;
    if(gap2>0)html+='<div style="font-size:8px;color:var(--rd)">↓ '+Math.abs(gap2)+' '+me.unit+' below national avg</div>';
    else html+='<div style="font-size:8px;color:var(--gn)">↑ '+Math.abs(gap2)+' '+me.unit+' above national avg</div>';
    html+='</div>'});
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: KNBS Statistical Abstract, KALRO seed data<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Annual</div></div>';
  } else if(mod==='mkulima'){
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(37,211,102,.15)">📱</div><h3>Ushauri wa Mkulima — Farmer Advisory<span class="cad-badge cad-ANNUAL" title="Farmer-facing advisory">On-demand</span></h3></div>';
    html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">Personalized advisory for '+d.n+' farmers via WhatsApp in Swahili</div>';
    var recs2=getRecommendations(d.id);var topRec=recs2.length>0?recs2[0].variety:null;
    html+='<div style="padding:8px;background:#e8f5e9;border-radius:8px;border:1px solid #c8e6c9;margin-bottom:6px;font-size:10px;line-height:1.6">';
    html+='<div style="font-size:8px;color:#25d366;font-weight:700;margin-bottom:4px">🌱 ShambaMap Kenya — '+d.n+'</div>';
    html+='<b>🌾 '+cn+' Hybrid Adoption:</b> '+d.srr[c]+'%<br>';
    if(topRec)html+='<b>✅ Pendekezo:</b> '+topRec.name+' — '+topRec.yield.avg+' kg/ha — '+topRec.traits[0]+'<br>';
    html+='<b>🌤 Hali ya hewa:</b> '+simWeather(d.id).temp_max+'°C, '+simWeather(d.id).rain_7d+'mm mvua/7d<br>';
    var pests2=simPest(d.id);if(pests2.length>0)html+='<b>🐛 Tahadhari:</b> '+pests2[0].name+' — '+pests2[0].risk+'<br>';
    html+='<b>📈 Soko:</b> KSh'+simMarket(d.id).mandi_price+'/90kg ('+simMarket(d.id).trend+' NCPB ref)<br>';
    html+='</div>';
    var farmerSchemes=[
      {icon:'🎟',name:'E-Voucher Inputs',benefit:'Subsidized fertilizer (CAN/DAP) via NCPB / Kilimo platform',status:'active'},
      {icon:'🌱',name:'KSC Seed Subsidy',benefit:'Discounted certified seed via cooperatives',status:'active'},
      {icon:'🛡',name:'Crop Insurance (KCIP)',benefit:'Drought/excess rain payout via UAP/APA satellite',status:'active'},
      {icon:'💰',name:'AFC Mkulima Loan',benefit:'Agriculture Finance Corporation low-interest credit',status:'active'},
      {icon:'💧',name:'NIB Irrigation',benefit:'National Irrigation Board scheme participation',status:'active'},
      {icon:'📊',name:'Hustler Fund',benefit:'Personal loan via *254# for inputs/working capital',status:'active'}
    ];
    html+='<div style="margin-top:6px"><div class="sh">Programmes Zinazopatikana — '+d.n+'</div>';
    farmerSchemes.forEach(function(fs){html+='<div style="padding:5px 6px;background:var(--bg);border-radius:5px;margin-bottom:2px;border:1px solid var(--bd);font-size:10px;display:flex;align-items:center;gap:5px"><span style="font-size:14px">'+fs.icon+'</span><div style="flex:1"><div style="font-weight:700">'+fs.name+'</div><div style="font-size:8px;color:var(--gn)">'+fs.benefit+'</div></div><span style="font-size:7px;padding:2px 5px;border-radius:3px;background:rgba(16,185,129,.1);color:var(--gn);font-weight:700">'+fs.status.toUpperCase()+'</span></div>'});
    html+='</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Delivery: WhatsApp Bot (@ShambaMapKE) + USSD *741# + sub-county extension SMS</div></div>';
    html+='<div style="margin-top:6px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: On-demand</div>';


  } else if(mod==='seedsys'){
    var sm=d.seed||{har:50,mvp:35,vage:18,csc:40,cfr:40};
    // Composite seed system score (Kenya-specific):
    // 30% har + 25% mvp + 20% csc + 15% (variety youth: 100-vage*3) + 10% (anti-counterfeit: 100-cfr)
    var ageScore=Math.max(0,100-sm.vage*3);
    var integrityScore=100-sm.cfr;
    var sssi=Math.round(sm.har*0.30+sm.mvp*0.25+sm.csc*0.20+ageScore*0.15+integrityScore*0.10);
    var scol=sssi>=70?'var(--gn)':sssi>=50?'var(--or)':'var(--rd)';
    // National benchmarks (CIMMYT/Tegemeo)
    var natHAR=82, natMVP=57, natVAGE=15, natCSC=58, natCFR=35;
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(34,197,94,.15)">🧬</div><h3>Seed System Score — '+d.n+'<span class="cad-badge cad-ANNUAL" title="KEPHIS + Tegemeo Institute + CIMMYT surveys">Annual</span></h3></div>';
    html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">Kenya seed system metrics anchored to KEPHIS / Tegemeo Institute / CIMMYT survey data</div>';
    html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(34,197,94,0.08),rgba(99,102,241,0.08));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:36px;font-weight:900;color:'+scol+'">'+sssi+'</div>';
    html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">/100 Composite Seed System Index</div>';
    var lbl=sssi>=70?'Modern, hybrid-led':sssi>=50?'Mixed adoption':'Traditional/informal-dominated';
    html+='<div style="font-size:11px;font-weight:700;color:'+scol+'">'+lbl+'</div></div></div>';
    // Five metrics with bar comparison vs national
    var rows=[
      {key:'har',label:'Hybrid Adoption Rate',val:sm.har,nat:natHAR,unit:'%',hi:true,desc:'% of farmers using certified hybrid seed (Tegemeo baseline)'},
      {key:'mvp',label:'Modern Variety Penetration',val:sm.mvp,nat:natMVP,unit:'%',hi:true,desc:'% planted to varieties <10 years old (CIMMYT 2020)'},
      {key:'csc',label:'Certified Seed Coverage',val:sm.csc,nat:natCSC,unit:'%',hi:true,desc:'% of demand met by KEPHIS-certified seed'},
      {key:'vage',label:'Average Variety Age',val:sm.vage,nat:natVAGE,unit:'yr',hi:false,desc:'Years since release; lower=better. Hybrid avg 13yr, OPV 18yr nationally'},
      {key:'cfr',label:'Counterfeit Risk',val:sm.cfr,nat:natCFR,unit:'/100',hi:false,desc:'Estimated risk of fake seed in agro-dealer channels; lower=better'}
    ];
    rows.forEach(function(rr){
      var goodDir=rr.hi; // true = higher is better
      var diff=rr.val-rr.nat;
      var isGood=goodDir?diff>=0:diff<=0;
      var diffCol=isGood?'var(--gn)':'var(--rd)';
      var arrow=goodDir?(diff>=0?'↑':'↓'):(diff<=0?'↓':'↑');
      // Compute "performance %" — always 0-100 where 100 = best.
      // For higher-is-better: pct = val (already 0-100)
      // For lower-is-better (vage, cfr): invert. vage best=0yr(100%), worst=33yr(0%); cfr best=0(100%), worst=100(0%)
      var perfPct, natPerfPct;
      if(goodDir){
        perfPct=Math.min(100,Math.max(0,rr.val));
        natPerfPct=Math.min(100,Math.max(0,rr.nat));
      } else if(rr.key==='vage'){
        // age scale: 0-33 years, performance = 100 - val*3
        perfPct=Math.min(100,Math.max(0,100-rr.val*3));
        natPerfPct=Math.min(100,Math.max(0,100-rr.nat*3));
      } else if(rr.key==='cfr'){
        // counterfeit risk 0-100, performance = 100 - val
        perfPct=Math.min(100,Math.max(0,100-rr.val));
        natPerfPct=Math.min(100,Math.max(0,100-rr.nat));
      } else {
        perfPct=Math.min(100,Math.max(0,rr.val));
        natPerfPct=Math.min(100,Math.max(0,rr.nat));
      }
      var barCol=isGood?'var(--gn)':perfPct>=50?'var(--or)':'var(--rd)';
      html+='<div style="margin-bottom:6px;padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)">';
      html+='<div style="display:flex;justify-content:space-between;align-items:baseline;font-size:9px;margin-bottom:2px"><span style="font-weight:700">'+rr.label+'</span><span style="font-size:13px;font-weight:800;color:'+barCol+'">'+rr.val+rr.unit+'</span></div>';
      html+='<div style="position:relative;height:6px;background:var(--s2);border-radius:3px;overflow:hidden;margin-bottom:2px">';
      html+='<div style="position:absolute;height:100%;width:'+perfPct+'%;background:'+barCol+';opacity:0.85"></div>';
      html+='<div style="position:absolute;left:'+natPerfPct+'%;top:-2px;bottom:-2px;width:2px;background:#0f172a" title="National avg"></div>';
      html+='</div>';
      var natTxt=goodDir?'Nat\'l: '+rr.nat+rr.unit:(rr.key==='vage'?'Nat\'l: '+rr.nat+'yr (lower=better)':'Nat\'l: '+rr.nat+rr.unit+' (lower=better)');
      html+='<div style="font-size:7px;color:var(--t3)">'+rr.desc+' • '+natTxt+' <span style="color:'+diffCol+';font-weight:700">'+arrow+' '+Math.abs(diff)+rr.unit+'</span></div>';
      html+='</div>';
    });
    // Action recommendation
    var weakest='';
    if(sm.har<natHAR-20)weakest='Hybrid penetration is the binding constraint — push KSC distribution + e-voucher uptake';
    else if(sm.mvp<natMVP-15)weakest='Variety turnover is slow — counties stuck on H614 (1986); promote H629/PH04/Tela hybrids';
    else if(sm.cfr>natCFR+15)weakest='Counterfeit seed risk is high — KEPHIS sticker SMS verification campaign needed (1393 service)';
    else if(sm.csc<natCSC-15)weakest='Certified seed shortage — distance to KSC depot is barrier; deploy mobile seed clinics';
    else weakest='County is in line with national norms — focus on yield agronomy, not seed access';
    html+='<div style="padding:6px;background:rgba(245,158,11,0.05);border-radius:5px;border:1px solid var(--or);font-size:9px;margin-top:6px"><b>Action:</b> '+weakest+'</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: KEPHIS variety lists + Tegemeo Institute hybrid adoption surveys + CIMMYT 20-year household survey<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Annual + biennial surveys</div></div>';


  } else if(mod==='dvs'){
    var v=DVS[d.id]||{fmd_risk:1,lsd:1,ppr:1,rvf:1,cbpp:1,vacc_pct:50,recent_outbreak:'N/A',outbreaks_12m:0};
    // DVS Surveillance Score: avg disease risk (inverted) + vaccination coverage + outbreak count
    var avgRisk=(v.fmd_risk+v.lsd+v.ppr+v.rvf+v.cbpp)/5;
    var dvsScore=Math.round(Math.max(0,(4-avgRisk)/3*60)+v.vacc_pct*0.4);
    var dCol=dvsScore>=70?'var(--gn)':dvsScore>=50?'var(--or)':'var(--rd)';
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(220,38,38,.15)">🦠</div><h3>Livestock Disease Surveillance — '+d.n+'<span class="cad-badge cad-ANNUAL" title="DVS county outbreak summaries">Annual</span></h3></div>';
    html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:var(--bg);border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:36px;font-weight:900;color:'+dCol+'">'+dvsScore+'</div>';
    html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">/100 DVS Surveillance Score</div>';
    html+='<div style="font-size:11px;font-weight:700">'+v.outbreaks_12m+' outbreaks reported (12mo)</div>';
    if(v.recent_outbreak&&v.recent_outbreak!=='None active'&&v.recent_outbreak!=='N/A')html+='<div style="font-size:9px;color:var(--rd)">⚠ '+v.recent_outbreak+'</div>';
    html+='</div></div>';
    var dz=[
      {n:'FMD',r:v.fmd_risk,desc:'Foot & Mouth Disease — endemic, SAT2/A/O serotypes'},
      {n:'LSD',r:v.lsd,desc:'Lumpy Skin Disease'},
      {n:'PPR',r:v.ppr,desc:'Peste des Petits Ruminants (sheep/goats)'},
      {n:'RVF',r:v.rvf,desc:'Rift Valley Fever (zoonotic, post-rains spike)'},
      {n:'CBPP',r:v.cbpp,desc:'Contagious Bovine Pleuropneumonia'}
    ];
    html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:6px">';
    dz.forEach(function(dd){
      var col=dd.r>=4?'var(--rd)':dd.r>=3?'var(--or)':dd.r>=2?'var(--cy)':'var(--gn)';
      var lbl={1:'Low',2:'Moderate',3:'High',4:'OUTBREAK'}[dd.r];
      html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);font-size:9px" title="'+dd.desc+'">';
      html+='<div style="font-weight:700">'+dd.n+'</div>';
      html+='<div style="font-size:11px;font-weight:800;color:'+col+'">'+lbl+'</div></div>';
    });
    html+='</div>';
    var vCol=v.vacc_pct>=80?'var(--gn)':v.vacc_pct>=60?'var(--or)':'var(--rd)';
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:8px;color:var(--t3)">FMD Vaccination Coverage</div>';
    html+='<div style="display:flex;align-items:center;gap:6px"><div style="font-size:18px;font-weight:800;color:'+vCol+'">'+v.vacc_pct+'%</div>';
    html+='<div style="flex:1;height:5px;background:var(--s2);border-radius:3px;overflow:hidden"><div style="height:100%;width:'+v.vacc_pct+'%;background:'+vCol+'"></div></div></div>';
    html+='<div style="font-size:7px;color:var(--t3)">Target: 80% • National avg ≈ 65%</div></div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: Directorate of Veterinary Services (DVS) • FMD Lab Embakasi • IGAD/AU-IBAR surveillance<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Annual + outbreak triggers</div></div>';

  } else if(mod==='exports'){
    var ex=EXPORTS[d.id]||{hort_kshM:0,flowers_kshM:0,avocado_kshM:0,mango_kshM:0,fbeans_kshM:0,mrl_rej_pct:0,top_market:'N/A',cert_farms:0};
    var natTotal=158000; // KSh 158B 2024
    var countyShare=ex.hort_kshM>0?(ex.hort_kshM/natTotal*100).toFixed(1):0;
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(168,85,247,.15)">📦</div><h3>Horticulture Export Performance — '+d.n+'<span class="cad-badge cad-ANNUAL" title="AFA + KEPIS export data">Annual</span></h3></div>';
    html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(168,85,247,0.08),rgba(34,197,94,0.08));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:30px;font-weight:900;color:var(--pp)">KSh '+(ex.hort_kshM/1000).toFixed(1)+'B</div>';
    html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">2024 horticulture export value</div>';
    html+='<div style="font-size:10px;font-weight:700">'+countyShare+'% of national (KSh 158B)</div>';
    html+='<div style="font-size:8px;color:var(--t3)">Top market: '+ex.top_market+'</div></div></div>';
    var subs=[
      {n:'Cut Flowers',v:ex.flowers_kshM,c:'#f43f5e'},
      {n:'Avocado',v:ex.avocado_kshM,c:'#059669'},
      {n:'Mango',v:ex.mango_kshM,c:'#f59e0b'},
      {n:'French Beans',v:ex.fbeans_kshM,c:'#22c55e'}
    ];
    var maxV=Math.max(1,subs.map(function(x){return x.v}).reduce(function(a,b){return Math.max(a,b)},0));
    html+='<div class="sh">Sub-sector breakdown</div>';
    subs.forEach(function(sb){
      var pct=Math.round(sb.v/maxV*100);
      html+='<div style="display:flex;align-items:center;gap:4px;font-size:9px;margin-bottom:3px">';
      html+='<span style="width:75px;color:var(--t2)">'+sb.n+'</span>';
      html+='<div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div style="height:100%;width:'+pct+'%;background:'+sb.c+'"></div></div>';
      html+='<span style="width:65px;text-align:right;font-weight:700;color:'+sb.c+'">KSh '+sb.v.toLocaleString()+'M</span></div>';
    });
    var rejCol=ex.mrl_rej_pct<=2?'var(--gn)':ex.mrl_rej_pct<=4?'var(--or)':'var(--rd)';
    html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px;margin-bottom:6px">';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">MRL rejection rate</div><div style="font-size:14px;font-weight:800;color:'+rejCol+'">'+ex.mrl_rej_pct+'%</div><div style="font-size:7px;color:var(--t3)">EU border interceptions</div></div>';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">GAP-certified farms</div><div style="font-size:14px;font-weight:800;color:var(--bl)">'+ex.cert_farms.toLocaleString()+'</div><div style="font-size:7px;color:var(--t3)">KS-GAP / GLOBALG.A.P</div></div>';
    html+='</div>';
    if(ex.mrl_rej_pct>4)html+='<div style="padding:5px;background:rgba(220,38,38,0.05);border-radius:5px;border:1px solid var(--rd);font-size:9px"><b>Risk:</b> Pesticide residue rejections above 4% threshold — KEPHIS audit recommended</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: Horticultural Crops Directorate (HCD) 2024 Annual Report • KNBS NAPR 2025 • EU Border Inspection<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Annual</div></div>';

  } else if(mod==='coldchain'){
    var cc=COLDCHAIN[d.id]||{cold_stores:0,capacity_mt:0,pack_houses:0,ripening_chambers:0,jkia_proximity:'N/A',gap_days:7};
    // Cold chain readiness score: capacity per pack-house + ripening chambers + JKIA proximity
    var ccScore=Math.min(100,(cc.cold_stores*5)+(cc.pack_houses*3)+(cc.ripening_chambers*4)+(7-cc.gap_days)*4);
    var ccCol=ccScore>=60?'var(--gn)':ccScore>=35?'var(--or)':'var(--rd)';
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(6,182,212,.15)">❄️</div><h3>Cold Chain & Pack-houses — '+d.n+'<span class="cad-badge cad-ANNUAL" title="HCD pack-house registry">Annual</span></h3></div>';
    html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:var(--bg);border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:32px;font-weight:900;color:'+ccCol+'">'+ccScore+'</div>';
    html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">/100 Cold Chain Readiness</div>';
    html+='<div style="font-size:10px;font-weight:700">JKIA: '+cc.jkia_proximity+'</div></div></div>';
    html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:6px">';
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Cold stores</div><div style="font-size:18px;font-weight:800">'+cc.cold_stores+'</div><div style="font-size:7px;color:var(--t3)">'+cc.capacity_mt.toLocaleString()+' MT capacity</div></div>';
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Pack-houses</div><div style="font-size:18px;font-weight:800">'+cc.pack_houses+'</div><div style="font-size:7px;color:var(--t3)">HCD-registered</div></div>';
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Ripening chambers</div><div style="font-size:18px;font-weight:800">'+cc.ripening_chambers+'</div><div style="font-size:7px;color:var(--t3)">Mango/avocado</div></div>';
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Post-harvest gap</div><div style="font-size:18px;font-weight:800;color:'+(cc.gap_days<=2?'var(--gn)':cc.gap_days<=4?'var(--or)':'var(--rd)')+'">'+cc.gap_days+'d</div><div style="font-size:7px;color:var(--t3)">Time to JKIA</div></div>';
    html+='</div>';
    if(cc.gap_days>=4)html+='<div style="padding:5px;background:rgba(245,158,11,0.05);border-radius:5px;border:1px solid var(--or);font-size:9px"><b>Gap:</b> '+cc.gap_days+'-day post-harvest window — significant losses for highly perishable produce. Pack-house investment priority.</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: HCD pack-house registry • AFA 2024 audit • JKIA cargo facilities<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Annual</div></div>';

  } else if(mod==='mech'){
    var me=MECH[d.id]||{tractors_per_1k_ha:1,atdc_active:false,combines:0,subsidy_kshM:0,mech_score:25};
    var natAvg=1.5; // Kenya national average
    var ssaAvg=0.6;
    var saAvg=43; // South Africa — highest in Africa, peer benchmark
    var mCol=me.mech_score>=60?'var(--gn)':me.mech_score>=35?'var(--or)':'var(--rd)';
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(245,158,11,.15)">🚜</div><h3>Mechanization — '+d.n+'<span class="cad-badge cad-REF" title="FAO 2018-20 + ASTGS 2019 baseline + KNBS Census 2009/2024-25">Refresh 5-10y</span></h3></div>';
    html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:var(--bg);border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:32px;font-weight:900;color:'+mCol+'">'+me.mech_score+'</div>';
    html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">/100 Mechanization Index</div>';
    html+='<div style="font-size:11px;font-weight:700">'+me.tractors_per_1k_ha+' tractors / 1,000 ha</div></div></div>';
    // Comparison bar
    var maxBar=Math.max(saAvg,me.tractors_per_1k_ha)*1.05;
    html+='<div class="sh">Tractor density vs benchmarks</div>';
    [{n:d.n+' (county)',v:me.tractors_per_1k_ha,c:'var(--pp)'},{n:'Kenya national',v:natAvg,c:'var(--gn)'},{n:'SSA average',v:ssaAvg,c:'var(--or)'},{n:'South Africa',v:saAvg,c:'var(--bl)'}].forEach(function(b){
      var pct=b.v/maxBar*100;
      html+='<div style="display:flex;align-items:center;gap:4px;font-size:9px;margin-bottom:3px">';
      html+='<span style="width:90px;color:var(--t2)">'+b.n+'</span>';
      html+='<div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div style="height:100%;width:'+pct+'%;background:'+b.c+'"></div></div>';
      html+='<span style="width:50px;text-align:right;font-weight:700;color:'+b.c+'">'+b.v+'</span></div>';
    });
    html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px;margin-bottom:6px">';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Combine harvesters</div><div style="font-size:14px;font-weight:800">'+me.combines+'</div></div>';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">ATDC active</div><div style="font-size:14px;font-weight:800;color:'+(me.atdc_active?'var(--gn)':'var(--rd)')+'">'+(me.atdc_active?'✓ YES':'✗ NO')+'</div></div>';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);grid-column:span 2"><div style="font-size:8px;color:var(--t3)">Mechanization subsidy disbursed (FY24/25)</div><div style="font-size:14px;font-weight:800;color:var(--gn)">KSh '+me.subsidy_kshM+'M</div></div>';
    html+='</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: Agriculture Mechanization Directorate • ATDC network (10 centres nationally)<div style="margin-top:3px;font-size:9px;color:#475569;font-weight:600">◇ Refresh: Reference baseline (5-10y refresh)</div></div>';

  } else if(mod==='ncpb'){
    var nc=NCPB[d.id]||{depot:'N/A',capacity_bags:0,current_bags:0,stock_days:0,silos:0,role:'No depot'};
    var fillPct=nc.capacity_bags?Math.round(nc.current_bags/nc.capacity_bags*100):0;
    var sCol=nc.stock_days>=180?'var(--gn)':nc.stock_days>=90?'var(--or)':'var(--rd)';
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(34,197,94,.15)">🌾</div><h3>NCPB Strategic Reserves — '+d.n+'<span class="cad-badge cad-ANNUAL" title="NCPB capacity reports + monthly stocks (modelled)">Annual</span></h3></div>';
    html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:var(--bg);border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:32px;font-weight:900;color:'+sCol+'">'+nc.stock_days+'<span style="font-size:13px">d</span></div>';
    html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">Stock days at current consumption</div>';
    html+='<div style="font-size:11px;font-weight:700">Depot: '+nc.depot+'</div>';
    html+='<div style="font-size:8px;color:var(--t3)">'+nc.role+'</div></div></div>';
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="display:flex;justify-content:space-between;font-size:9px;margin-bottom:2px"><span style="font-weight:700">Depot fill</span><span>'+nc.current_bags.toLocaleString()+' / '+nc.capacity_bags.toLocaleString()+' bags</span></div>';
    html+='<div style="height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div style="height:100%;width:'+fillPct+'%;background:var(--gn)"></div></div>';
    html+='<div style="font-size:7px;color:var(--t3);margin-top:2px">'+fillPct+'% of capacity • '+nc.silos+' silo(s)</div></div>';
    if(nc.stock_days<60&&nc.stock_days>0)html+='<div style="padding:5px;background:rgba(220,38,38,0.05);border-radius:5px;border:1px solid var(--rd);font-size:9px"><b>⚠ CRITICAL:</b> &lt;60 days = procurement urgent for ASAL relief</div>';
    else if(nc.stock_days<90&&nc.stock_days>0)html+='<div style="padding:5px;background:rgba(245,158,11,0.05);border-radius:5px;border:1px solid var(--or);font-size:9px"><b>⚡ Watch:</b> Consider replenishment ahead of next dry season</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: NCPB depot reports • National Strategic Reserve target: 6M bags<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Monthly stocks (modelled), annual capacity</div></div>';

  } else if(mod==='phyto'){
    var ph=PHYTO[d.id]||{poe:'None',insp_2024:0,certs_issued:0,interceptions:0,role:'No port'};
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(220,38,38,.15)">🛂</div><h3>Phytosanitary Inspections — '+d.n+'<span class="cad-badge cad-ANNUAL" title="KEPHIS phytosanitary annual report">Annual</span></h3></div>';
    if(ph.poe==='None'){
      html+='<div style="padding:12px;text-align:center;color:var(--t3);font-size:10px;background:var(--bg);border-radius:6px;border:1px solid var(--bd)">';
      html+='No KEPHIS port of entry in '+d.n+'.<br><br>Kenya operates 13 ports of entry.<br>Major: JKIA (Nairobi), Mombasa Port, Eldoret Airport, Naivasha airstrip, Malaba/Busia/Namanga/Lunga Lunga borders.';
      html+='</div>';
    } else {
      var rejPct=ph.insp_2024?(ph.interceptions/ph.insp_2024*100).toFixed(2):0;
      html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:var(--bg);border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
      html+='<div style="font-size:14px;font-weight:900;color:var(--bl)">'+ph.poe+'</div>';
      html+='<div style="flex:1;font-size:8px;color:var(--t3)">'+ph.role+'</div></div>';
      html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:6px">';
      html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Inspections 2024</div><div style="font-size:18px;font-weight:800;color:var(--bl)">'+ph.insp_2024.toLocaleString()+'</div></div>';
      html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Phytosanitary certificates</div><div style="font-size:18px;font-weight:800;color:var(--gn)">'+ph.certs_issued.toLocaleString()+'</div></div>';
      html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Pest interceptions</div><div style="font-size:18px;font-weight:800;color:var(--rd)">'+ph.interceptions+'</div></div>';
      html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Interception rate</div><div style="font-size:18px;font-weight:800;color:'+(rejPct<0.2?'var(--gn)':rejPct<0.5?'var(--or)':'var(--rd)')+'">'+rejPct+'%</div></div>';
      html+='</div>';
    }
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: KEPHIS Border Inspection Posts • 13 PoEs nationally<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Annual</div></div>';

  } else if(mod==='dfz'){
    var df=DFZ[d.id]||{status:'none',progress:0,target_year:null,abattoirs:0,role:'Not in DFZ programme'};
    var stCol={none:'var(--t3)',proposed:'var(--cy)',demarcated:'var(--bl)',compartment:'var(--or)',certified:'var(--gn)'}[df.status];
    var stLbl={none:'Not in programme',proposed:'Proposed',demarcated:'Demarcated',compartment:'Active Compartment',certified:'WOAH Certified'}[df.status];
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(8,145,178,.15)">🛡️</div><h3>Disease-Free Zone Status — '+d.n+'<span class="cad-badge cad-ANNUAL" title="WOAH/DVS DFZ progress reports">Annual</span></h3></div>';
    html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:var(--bg);border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:18px;font-weight:900;color:'+stCol+'">'+stLbl+'</div>';
    html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">'+df.role+'</div>';
    if(df.target_year)html+='<div style="font-size:9px;color:var(--t3)">Target certification: '+df.target_year+'</div>';
    html+='</div></div>';
    if(df.status!=='none'){
      html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);margin-bottom:6px">';
      html+='<div style="display:flex;justify-content:space-between;font-size:9px;margin-bottom:2px"><span style="font-weight:700">Progress to certification</span><span style="font-weight:800;color:'+stCol+'">'+df.progress+'%</span></div>';
      html+='<div style="height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div style="height:100%;width:'+df.progress+'%;background:'+stCol+'"></div></div></div>';
      html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);margin-bottom:6px"><div style="font-size:8px;color:var(--t3)">Certified abattoirs</div><div style="font-size:16px;font-weight:800">'+df.abattoirs+'</div><div style="font-size:7px;color:var(--t3)">Required for export-grade meat</div></div>';
      html+='<div style="padding:5px;background:rgba(16,185,129,0.05);border-radius:5px;border:1px solid var(--gn);font-size:9px"><b>BETA Pillar:</b> Beef + leather export. WOAH (OIE) certification opens premium markets — EU, China, Saudi Arabia.</div>';
    } else {
      html+='<div style="padding:8px;text-align:center;color:var(--t3);font-size:10px">';
      html+='Not part of national Disease-Free Zone roadmap.<br><br>Active counties: Laikipia, Kajiado, Narok, Nakuru, Uasin Gishu, Kiambu, Nyandarua, Meru.';
      html+='</div>';
    }
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: DVS DFZ Roadmap • State Department for Livestock • WOAH (World Organisation for Animal Health)<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Annual</div></div>';

  } else if(mod==='flagship'){
    var fl=FLAGSHIP[d.id]||{projects:[],galana_ha:0,galana_target_ha:0,nib_ha:0,investment_kshB:0};
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(124,58,237,.15)">🏛️</div><h3>Flagship Projects — '+d.n+'<span class="cad-badge cad-ANNUAL" title="PDU flagship project reports">Annual</span></h3></div>';
    if(fl.projects.length===0){
      html+='<div style="padding:12px;text-align:center;color:var(--t3);font-size:10px;background:var(--bg);border-radius:6px;border:1px solid var(--bd)">';
      html+='No active national flagship projects in '+d.n+'.';
      html+='</div>';
    } else {
      html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(124,58,237,0.08),rgba(99,102,241,0.08));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
      html+='<div style="font-size:28px;font-weight:900;color:var(--pp)">KSh '+fl.investment_kshB.toFixed(1)+'B</div>';
      html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">Total flagship investment</div>';
      html+='<div style="font-size:10px;font-weight:700">'+fl.projects.length+' active project(s)</div></div></div>';
      html+='<div class="sh">Active projects</div>';
      fl.projects.forEach(function(pr){
        html+='<div style="padding:5px 8px;background:var(--bg);border-radius:5px;border-left:3px solid var(--pp);margin-bottom:3px;font-size:10px;font-weight:600">'+pr+'</div>';
      });
      if(fl.galana_ha>0){
        var gPct=Math.round(fl.galana_ha/fl.galana_target_ha*100);
        html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);margin-top:6px">';
        html+='<div style="font-size:8px;color:var(--t3);font-weight:700">Galana-Kulalu cultivated</div>';
        html+='<div style="display:flex;align-items:center;gap:6px;margin-top:2px"><div style="font-size:14px;font-weight:800;color:var(--or)">'+fl.galana_ha.toLocaleString()+'ha</div><span style="font-size:8px;color:var(--t3)">/ '+fl.galana_target_ha.toLocaleString()+'ha target ('+gPct+'%)</span></div></div>';
      }
      if(fl.nib_ha>0){
        html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);margin-top:4px;font-size:9px">';
        html+='<b>NIB irrigation:</b> '+fl.nib_ha.toLocaleString()+' ha developed</div>';
      }
    }
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: BETA Flagship Tracker • National Irrigation Board • State Dept Crops monthly briefs<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Annual</div></div>';


  } else if(mod==='dealers'){
    var dl=DEALERS[d.id]||{total:0,kephis_seed:0,pcpb_pest:0,croplife:0,density_per_1k_hh:0,women_led_pct:0,wards_uncovered:0,counterfeit_alerts_12m:0,data_quality:'no_data',nearest_kephis_office:'N/A'};
    var ag=AGRA[d.id]; // Cross-reference for AGRA programme touch
    // Density bucket
    var dCol=dl.density_per_1k_hh>=5?'var(--gn)':dl.density_per_1k_hh>=3.5?'var(--cy)':dl.density_per_1k_hh>=2.5?'var(--or)':'var(--rd)';
    var dLbl=dl.density_per_1k_hh>=5?'Strong coverage':dl.density_per_1k_hh>=3.5?'Adequate':dl.density_per_1k_hh>=2.5?'Thin':'Sparse';
    // Coverage gap severity
    var gCol=dl.wards_uncovered<=1?'var(--gn)':dl.wards_uncovered<=3?'var(--or)':'var(--rd)';
    // Counterfeit risk
    var cCol=dl.counterfeit_alerts_12m<=2?'var(--gn)':dl.counterfeit_alerts_12m<=4?'var(--or)':'var(--rd)';
    var qBadge=dl.data_quality==='verified'?'<span style="padding:2px 6px;background:rgba(16,185,129,.1);color:var(--gn);font-size:7px;font-weight:700;border-radius:4px;border:1px solid var(--gn)">✓ KCDMS verified 2018</span>':'<span style="padding:2px 6px;background:rgba(148,163,184,.1);color:var(--t3);font-size:7px;font-weight:700;border-radius:4px;border:1px solid var(--t3)">~ Estimated</span>';
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(245,158,11,.15)">🏪</div><h3>Agro-Dealer Network — '+d.n+'<span class="cad-badge cad-ANNUAL" title="KEPHIS+PCPB+CropLife registers">Annual</span></h3></div>';
    html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">KEPHIS authorised seed dealers + PCPB pesticide register + CropLife/aak-GROW + KCDMS 2018 mapping</div>';
    // Hero
    html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(245,158,11,0.08),rgba(34,197,94,0.08));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:30px;font-weight:900;color:var(--or)">'+dl.total.toLocaleString()+'</div>';
    html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">Estimated agro-dealers in '+d.n+'</div>';
    html+='<div style="font-size:11px;font-weight:700;color:'+dCol+'">'+dLbl+' · '+dl.density_per_1k_hh+' per 1,000 farming HH</div>';
    html+='<div style="margin-top:3px">'+qBadge+'</div></div></div>';
    // Composition: KEPHIS + PCPB + CropLife
    html+='<div class="sh">Network composition (regulator overlap)</div>';
    var bars=[
      {n:'KEPHIS authorised seed',v:dl.kephis_seed,c:'#10b981',d:'Certified seed dealers (annual register)'},
      {n:'PCPB pesticide licence',v:dl.pcpb_pest,c:'#0ea5e9',d:'Licensed pesticide retailers'},
      {n:'CropLife / aak-GROW',v:dl.croplife,c:'#f59e0b',d:'Industry association members'}
    ];
    var maxBar=Math.max(1,Math.max.apply(null,bars.map(function(b){return b.v})));
    bars.forEach(function(b){
      var w=Math.round(b.v/maxBar*100);
      html+='<div style="margin-bottom:4px"><div style="display:flex;justify-content:space-between;font-size:9px;margin-bottom:2px"><span style="font-weight:600">'+b.n+'</span><span style="font-weight:800;color:'+b.c+'">'+b.v+'</span></div>';
      html+='<div style="height:6px;background:var(--s2);border-radius:3px;overflow:hidden"><div style="height:100%;width:'+w+'%;background:'+b.c+';border-radius:3px"></div></div>';
      html+='<div style="font-size:7px;color:var(--t3);margin-top:1px">'+b.d+'</div></div>';
    });
    html+='<div style="font-size:7px;color:var(--t3);margin-top:2px;margin-bottom:6px">Note: dealers may hold multiple licences. Categories overlap — total ≠ sum of subsets.</div>';
    // Three KPI cards
    html+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-bottom:6px">';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Women-led</div><div style="font-size:18px;font-weight:800;color:var(--pp)">'+dl.women_led_pct+'%</div><div style="font-size:7px;color:var(--t3)">SAIOMA gender data</div></div>';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Wards uncovered</div><div style="font-size:18px;font-weight:800;color:'+gCol+'">'+dl.wards_uncovered+'</div><div style="font-size:7px;color:var(--t3)">No dealer within 10km</div></div>';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Counterfeit alerts</div><div style="font-size:18px;font-weight:800;color:'+cCol+'">'+dl.counterfeit_alerts_12m+'</div><div style="font-size:7px;color:var(--t3)">KEPHIS 1393 last 12mo</div></div>';
    html+='</div>';
    // Last-mile gap callout
    if(dl.wards_uncovered>=4){
      html+='<div style="padding:6px;background:rgba(220,38,38,0.05);border-radius:5px;border:1px solid var(--rd);font-size:9px;margin-bottom:6px"><b>⚠ Last-mile gap:</b> '+dl.wards_uncovered+' wards have no agro-dealer within 10km. Farmers travel >2 hours for inputs. Network expansion priority.</div>';
    } else if(dl.wards_uncovered>=2){
      html+='<div style="padding:6px;background:rgba(245,158,11,0.05);border-radius:5px;border:1px solid var(--or);font-size:9px;margin-bottom:6px"><b>Coverage thin:</b> '+dl.wards_uncovered+' wards under-served. Mobile dealer or sub-county outpost recommended.</div>';
    }
    // Counterfeit callout
    if(dl.counterfeit_alerts_12m>=4){
      html+='<div style="padding:6px;background:rgba(220,38,38,0.05);border-radius:5px;border:1px solid var(--rd);font-size:9px;margin-bottom:6px"><b>⚠ Counterfeit risk:</b> '+dl.counterfeit_alerts_12m+' KEPHIS sticker-verification flags this season. Inspector visit + farmer SMS campaign (1393) advised.</div>';
    }
    // KEPHIS office
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);font-size:9px;margin-bottom:6px"><b>Regulator nearest:</b> '+dl.nearest_kephis_office+' KEPHIS office</div>';
    // AGRA programme touch (one line, not a separate module)
    if(ag && ag.programmes && ag.programmes.length>0 && ag.intensity!=='HQ'){
      html+='<div style="padding:5px;background:rgba(124,58,237,0.05);border-radius:5px;border:1px solid var(--pp);font-size:9px;margin-bottom:6px"><b>Partner programmes touching dealers here:</b> '+ag.programmes.slice(0,2).join(' · ')+(ag.programmes.length>2?' +'+(ag.programmes.length-2)+' more':'')+'</div>';
    }
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Sources: KEPHIS Registered Seed Companies (Dec 2025) · PCPB Licensed Premises register · aak-GROW/CropLife Kenya · KCDMS Agro-Dealer Mapping 2018 (12 counties verified) · Seed Sector Platform Kenya · AGMARK historical baseline 2010 · Cadence: annual at best<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Annual register updates</div></div>';


  } else if(mod==='cpi'){
    var cp=CPI[d.id]||{cpi_local:150,food_yoy:7,political_risk:3,key_movers:[]};
    var natCPI=150.00, natFoodYoY=7.7;
    var rCol={1:'var(--gn)',2:'var(--gn)',3:'var(--or)',4:'var(--rd)',5:'var(--rd)'}[cp.political_risk];
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(245,158,11,.15)">🛒</div><h3>Food CPI — '+d.n+'<span class="cad-badge cad-LIVE" title="Open-Meteo API • hourly forecasts">Daily</span></h3></div>';
    html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">KNBS Consumer Price Index • food = 33% of basket • monthly survey across 50 urban zones</div>';
    html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(245,158,11,0.08),rgba(239,68,68,0.08));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:30px;font-weight:900;color:'+rCol+'">'+cp.food_yoy.toFixed(1)+'%</div>';
    html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">Food inflation y/y · March 2026</div>';
    html+='<div style="font-size:11px;font-weight:700">CPI '+cp.cpi_local.toFixed(1)+' (national '+natCPI.toFixed(1)+')</div>';
    var pl={1:'Low',2:'Low',3:'Moderate',4:'High',5:'CRITICAL'}[cp.political_risk];
    html+='<div style="font-size:9px;color:'+rCol+';font-weight:700">Political-economy risk: '+pl+'</div></div></div>';
    if(cp.key_movers.length>0){
      html+='<div class="sh">Top movers (year-on-year)</div>';
      cp.key_movers.forEach(function(km){
        var col=km.yoy>=15?'var(--rd)':km.yoy>=8?'var(--or)':km.yoy>=0?'var(--cy)':'var(--gn)';
        var arrow=km.yoy>=0?'↑':'↓';
        html+='<div style="display:flex;align-items:center;gap:6px;padding:5px 8px;background:var(--bg);border-radius:5px;border-left:3px solid '+col+';margin-bottom:3px;font-size:10px">';
        html+='<span style="flex:1;font-weight:600">'+km.item+'</span>';
        html+='<span style="font-weight:800;color:'+col+'">'+arrow+' '+Math.abs(km.yoy).toFixed(1)+'% y/y</span>';
        html+='<span style="font-size:8px;color:var(--t3);width:70px;text-align:right">m/m '+(km.mom>=0?'+':'')+km.mom.toFixed(1)+'%</span>';
        html+='</div>';
      });
    }
    html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px;margin-bottom:6px">';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">National food y/y</div><div style="font-size:14px;font-weight:800">'+natFoodYoY+'%</div></div>';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">National m/m food</div><div style="font-size:14px;font-weight:800">+1.1%</div></div>';
    html+='</div>';
    if(cp.political_risk>=4)html+='<div style="padding:6px;background:rgba(220,38,38,0.05);border-radius:5px;border:1px solid var(--rd);font-size:9px"><b>⚠ Political watch:</b> Food inflation in '+d.n+' running '+(cp.food_yoy-natFoodYoY).toFixed(1)+'pp above national average. Higher risk of consumer protest, MP pressure on subsidy delivery.</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: KNBS CPI March 2026 • Released ~5th of each month • Base period Feb 2019 = 100<div style="margin-top:3px;font-size:9px;color:#4f46e5;font-weight:600">◑ Refresh: Monthly (5th of month)</div></div>';

  } else if(mod==='hustler'){
    var hf=HUSTLER[d.id]||{disbursed_kshM:0,repaid_pct:50,default_pct:50,farmer_uptake_pct:0,women_pct:40,alt_banks:30,alt_saccos:30,alt_friends:40};
    var rCol=hf.default_pct<=15?'var(--gn)':hf.default_pct<=20?'var(--or)':'var(--rd)';
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(99,102,241,.15)">💸</div><h3>Hustler Fund — Agriculture — '+d.n+'<span class="cad-badge cad-WEEKLY" title="Sentinel-2 5-day revisit, dekadal composite">Dekadal</span></h3></div>';
    html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">Financial Inclusion Fund (FIF) — *254# loans · National: KSh 83B disbursed · 15% default · only 4% farmer uptake</div>';
    html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(99,102,241,0.08),rgba(34,197,94,0.08));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:24px;font-weight:900;color:var(--bl)">KSh '+(hf.disbursed_kshM/1000).toFixed(1)+'B</div>';
    html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">Cumulative disbursed (ag-tagged)</div>';
    html+='<div style="font-size:11px;font-weight:700">'+hf.farmer_uptake_pct+'% of farmers use Hustler</div>';
    html+='<div style="font-size:9px;color:var(--t3)">Repaid '+hf.repaid_pct+'% · Default '+hf.default_pct+'%</div></div></div>';
    html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:6px">';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Default rate</div><div style="font-size:18px;font-weight:800;color:'+rCol+'">'+hf.default_pct+'%</div><div style="font-size:7px;color:var(--t3)">National avg 15%</div></div>';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Women borrowers</div><div style="font-size:18px;font-weight:800;color:var(--pp)">'+hf.women_pct+'%</div><div style="font-size:7px;color:var(--t3)">of ag-tagged loans</div></div>';
    html+='</div>';
    html+='<div class="sh">Where farmers actually borrow (CBK survey Jan 2026)</div>';
    var alt=[
      {n:'Banks',v:hf.alt_banks,c:'#0ea5e9'},
      {n:'Saccos',v:hf.alt_saccos,c:'#10b981'},
      {n:'Friends/family',v:hf.alt_friends,c:'#f59e0b'},
      {n:'Hustler Fund',v:hf.farmer_uptake_pct,c:'#a855f7'}
    ];
    alt.forEach(function(a){
      html+='<div style="display:flex;align-items:center;gap:4px;font-size:9px;margin-bottom:3px">';
      html+='<span style="width:90px;color:var(--t2)">'+a.n+'</span>';
      html+='<div style="flex:1;height:7px;background:var(--s2);border-radius:3px;overflow:hidden"><div style="height:100%;width:'+Math.min(100,a.v)+'%;background:'+a.c+'"></div></div>';
      html+='<span style="width:35px;text-align:right;font-weight:700;color:'+a.c+'">'+a.v+'%</span></div>';
    });
    if(hf.farmer_uptake_pct<4)html+='<div style="padding:6px;background:rgba(245,158,11,0.05);border-radius:5px;border:1px solid var(--or);font-size:9px;margin-top:6px"><b>Below national:</b> Hustler Fund underperforming as farmer credit source in '+d.n+'. Farmers prefer SACCOs and informal channels.</div>';
    if(hf.default_pct>=20)html+='<div style="padding:6px;background:rgba(220,38,38,0.05);border-radius:5px;border:1px solid var(--rd);font-size:9px;margin-top:6px"><b>⚠ Default risk:</b> '+hf.default_pct+'% default rate well above 15% national. CRB blacklisting affecting future formal credit access in this county.</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: CBK monthly farmer credit survey • FIF Board reports • The Star/Business Daily April 2026<div style="margin-top:3px;font-size:9px;color:#4f46e5;font-weight:600">◑ Refresh: Monthly</div></div>';

  } else if(mod==='gfw'){
    var fw=GFW[d.id]||{alerts_30d:0,alerts_12m:0,ha_lost_12m:0,primary_forest_pct:0,deforest_risk:1,eudr_relevant:false,drivers:[],hotspots:[]};
    var rCol={1:'var(--gn)',2:'var(--gn)',3:'var(--or)',4:'var(--rd)',5:'var(--rd)'}[fw.deforest_risk];
    var rLbl={1:'Low',2:'Low',3:'Moderate',4:'High',5:'CRITICAL'}[fw.deforest_risk];
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(34,197,94,.15)">🌳</div><h3>Deforestation Watch — '+d.n+'<span class="cad-badge cad-WEEKLY" title="ICIPE + KEPHIS bulletins">Weekly</span></h3></div>';
    html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">Global Forest Watch GLAD alerts • weekly 30m Landsat • National 2024: 134,201 alerts · 1,650 ha lost</div>';
    html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:var(--bg);border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:28px;font-weight:900;color:'+rCol+'">'+fw.alerts_30d.toLocaleString()+'</div>';
    html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">GLAD alerts last 30 days</div>';
    html+='<div style="font-size:11px;font-weight:700">'+fw.alerts_12m.toLocaleString()+' alerts · '+fw.ha_lost_12m+' ha last 12 months</div>';
    html+='<div style="font-size:9px;color:'+rCol+';font-weight:700">'+rLbl+' deforestation risk</div></div></div>';
    if(fw.eudr_relevant){
      html+='<div style="padding:6px;background:rgba(220,38,38,0.05);border-radius:5px;border:1px solid var(--rd);font-size:9px;margin-bottom:6px"><b>🚨 EUDR-relevant coffee county:</b> Live deforestation tracking required for EU export compliance. December 2026 deadline. Coffee plots geo-tagged after 31 Dec 2020 with deforestation flagged here will not pass EU border.</div>';
    }
    html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:6px">';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Primary forest</div><div style="font-size:14px;font-weight:800">'+fw.primary_forest_pct+'%</div><div style="font-size:7px;color:var(--t3)">of county area</div></div>';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Hectares lost (12mo)</div><div style="font-size:14px;font-weight:800;color:'+rCol+'">'+fw.ha_lost_12m+'</div><div style="font-size:7px;color:var(--t3)">at 30m resolution</div></div>';
    html+='</div>';
    if(fw.drivers.length>0){
      html+='<div class="sh">Primary drivers</div>';
      html+='<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:6px">';
      fw.drivers.forEach(function(dr){
        html+='<span style="padding:3px 8px;background:rgba(245,158,11,0.1);border:1px solid var(--or);border-radius:10px;font-size:9px;font-weight:600;color:var(--or)">'+dr+'</span>';
      });
      html+='</div>';
    }
    if(fw.hotspots.length>0){
      html+='<div class="sh">Hotspot forests</div>';
      fw.hotspots.forEach(function(h){
        html+='<div style="padding:5px 8px;background:var(--bg);border-radius:5px;border-left:3px solid var(--gn);margin-bottom:3px;font-size:10px;font-weight:600">'+h+'</div>';
      });
    }
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: Global Forest Watch / GLAD-S2 (UMD-WRI) • Hansen tree cover loss dataset • 30m Landsat-based, weekly updates<div style="margin-top:3px;font-size:9px;color:#4f46e5;font-weight:600">◑ Refresh: Weekly→Monthly</div></div>';


  } else if(mod==='acid'){
    var sa=SOILACID[d.id]||{acid_arable_pct:0,severity:'Unknown',lime_req_t_ha:0,lime_adopt_pct:0,navcdp_status:'pending',samples_collected:0,samples_target:1711,priority:1,key_constraint:'No data'};
    var sevCol={'Severe':'var(--rd)','Moderate':'var(--or)','Mild':'var(--cy)','Minimal':'var(--gn)','Unknown':'var(--t3)'}[sa.severity];
    var statCol={'active':'var(--gn)','pilot':'var(--cy)','pending':'var(--or)','not_in_programme':'var(--t3)'}[sa.navcdp_status];
    var statLbl={'active':'NAVCDP ACTIVE','pilot':'Pilot phase','pending':'Pending rollout','not_in_programme':'Not in programme'}[sa.navcdp_status];
    var samplePct=sa.samples_target?Math.round(sa.samples_collected/sa.samples_target*100):0;
    // Compute lime gap: hectares × lime_req × (1 - adoption_pct/100) — cost in tonnes of unmet need
    // For visualisation: county acidic ha estimate (rough: 60% of cropland by typical AfSIS share)
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(124,58,237,.15)">⚗️</div><h3>Soil Acidity Monitor — '+d.n+'<span class="cad-badge cad-WEEKLY" title="Farmer photo capture, AI diagnosis">On-demand</span></h3></div>';
    html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">KALRO 2023 baseline + NAVCDP digitised sampling 2024-2027 (77,000 samples / 45 counties)</div>';
    html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(124,58,237,0.08),rgba(239,68,68,0.08));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:30px;font-weight:900;color:'+sevCol+'">'+sa.acid_arable_pct+'%</div>';
    html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">Arable land affected by acidity (pH<5.5)</div>';
    html+='<div style="font-size:11px;font-weight:700;color:'+sevCol+'">'+sa.severity+' acidification</div>';
    html+='<div style="font-size:9px;color:var(--t3)">National avg: 63% (KALRO 2023)</div></div></div>';
    // NAVCDP sampling progress
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="display:flex;justify-content:space-between;font-size:9px;margin-bottom:3px"><span style="font-weight:700">📊 '+statLbl+'</span><span style="color:'+statCol+';font-weight:700">'+samplePct+'% complete</span></div>';
    html+='<div style="height:8px;background:var(--s2);border-radius:4px;overflow:hidden;margin-bottom:3px"><div style="height:100%;width:'+samplePct+'%;background:'+statCol+'"></div></div>';
    html+='<div style="font-size:8px;color:var(--t3)">'+sa.samples_collected.toLocaleString()+' / '+sa.samples_target.toLocaleString()+' samples · KOBO Collect + Maps.Me · KALRO laboratories</div></div>';
    // Three key metrics
    html+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-bottom:6px">';
    var lcol=sa.lime_req_t_ha>=2.5?'var(--rd)':sa.lime_req_t_ha>=1.5?'var(--or)':'var(--gn)';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Lime requirement</div><div style="font-size:14px;font-weight:800;color:'+lcol+'">'+sa.lime_req_t_ha+'</div><div style="font-size:7px;color:var(--t3)">t/ha CaCO₃</div></div>';
    var acol=sa.lime_adopt_pct>=5?'var(--gn)':sa.lime_adopt_pct>=2?'var(--or)':'var(--rd)';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Lime adoption</div><div style="font-size:14px;font-weight:800;color:'+acol+'">'+sa.lime_adopt_pct+'%</div><div style="font-size:7px;color:var(--t3)">of farmers</div></div>';
    var pcol=sa.priority>=4?'var(--rd)':sa.priority>=3?'var(--or)':'var(--gn)';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Priority</div><div style="font-size:14px;font-weight:800;color:'+pcol+'">'+sa.priority+'/5</div><div style="font-size:7px;color:var(--t3)">policy rank</div></div>';
    html+='</div>';
    // Constraint diagnosis
    html+='<div style="padding:6px;background:rgba(124,58,237,0.05);border-radius:5px;border:1px solid var(--pp);font-size:9px;margin-bottom:6px"><b>Diagnosis:</b> '+sa.key_constraint+'</div>';
    // Severity-specific recommendations
    if(sa.severity==='Severe'){
      html+='<div style="padding:6px;background:rgba(220,38,38,0.05);border-radius:5px;border:1px solid var(--rd);font-size:9px;margin-bottom:6px"><b>⚠ Action required:</b> Apply lime '+sa.lime_req_t_ha+' t/ha during dry season before next planting. Switch from urea/CAN to phosphate fertilizers. Per KALRO research, fertilizer effectiveness is reduced by up to 30% on acid soils — liming + matched phosphate can deliver up to 77% yield gain over 5 years (ASTGS Flagship #2).</div>';
    } else if(sa.severity==='Moderate'){
      html+='<div style="padding:6px;background:rgba(245,158,11,0.05);border-radius:5px;border:1px solid var(--or);font-size:9px;margin-bottom:6px"><b>Watch:</b> Targeted liming on most-affected fields. Annual soil testing recommended for high-value plots.</div>';
    } else if(sa.severity==='Mild'||sa.severity==='Minimal'){
      html+='<div style="padding:6px;background:rgba(16,185,129,0.05);border-radius:5px;border:1px solid var(--gn);font-size:9px;margin-bottom:6px"><b>Status:</b> Soil pH largely within optimum range. Focus on nutrient balance; no urgent liming needed.</div>';
    }
    // ASTGS flagship reference
    if(sa.priority>=4){
      html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);font-size:9px;margin-bottom:6px"><b>📋 Programme link:</b> ASTGS 2019-2029 Flagship #2 (Liming Subsidy). Lime price KSh 8-12/kg. Subsidised under KFSH (Kenya Fertilizer & Soil Health Implementation Plan).</div>';
    }
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: KALRO Soil Acidity & Liming Handbook 2023 • NAVCDP digitised soil testing 2024-2027 (NPCS) • Acid Soils Africa Dashboard (Bioversity-CIAT) • AgWise model (CGIAR) • KenSIS (in development)<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Continuous (NAVCDP 2024-27)</div></div>';


  } else if(mod==='cropfit'){
    var cf=CROPFIT[d.id]||{};
    var crops=Object.keys(cf).filter(function(c){return c!=='dairy'&&c!=='fish'&&c!=='beef'});
    if(crops.length===0){
      html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(34,197,94,.15)">🎯</div><h3>Crop Fit Intelligence — '+d.n+'<span class="cad-badge cad-MONTHLY" title="KAMIS Ministry of Agriculture">Monthly</span></h3></div>';
      html+='<div style="padding:12px;text-align:center;color:var(--t3);font-size:10px">No crop fit data available for this county.</div></div>';
    } else {
      // Sort by fit score descending
      crops.sort(function(a,b){return cf[b].fit-cf[a].fit});
      var topCrop=crops[0];
      var topData=cf[topCrop];
      var classCol={'VS':'var(--gn)','S':'var(--cy)','MS':'var(--or)','mS':'var(--rd)','NS':'var(--t3)'}[topData.gaez];
      var classLbl={'VS':'Very Suitable','S':'Suitable','MS':'Moderately Suitable','mS':'Marginally Suitable','NS':'Not Suitable'}[topData.gaez];
      html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(34,197,94,.15)">🎯</div><h3>Crop Fit Intelligence — '+d.n+'<span class="cad-badge cad-MONTHLY" title="KNBS CPI bulletin, 5th of month">Monthly</span></h3></div>';
      html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">GAEZ v4 (FAO/IIASA) + iSDAsoil 30m + WorldClim + KALRO Variety Catalogue + KAMIS prices</div>';
      // Top crop hero card
      html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(34,197,94,0.08),rgba(99,102,241,0.08));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
      html+='<div style="font-size:30px;font-weight:900;color:'+classCol+'">'+topData.fit+'</div>';
      html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">/100 best-fit crop · '+classLbl+'</div>';
      html+='<div style="font-size:13px;font-weight:800;text-transform:capitalize">🥇 '+topCrop+'</div>';
      html+='<div style="font-size:9px;color:var(--t3)">'+topData.variety+' · '+topData.yield+' t/ha potential</div></div></div>';
      // Top crop why
      html+='<div style="padding:6px;background:rgba(124,58,237,0.05);border-radius:5px;border:1px solid var(--pp);font-size:9px;margin-bottom:6px"><b>Why:</b> '+topData.why+'</div>';
      // Crop ranking table
      html+='<div class="sh">All crops ranked by suitability</div>';
      crops.forEach(function(crop){
        var c=cf[crop];
        var col={'VS':'var(--gn)','S':'var(--cy)','MS':'var(--or)','mS':'var(--rd)','NS':'var(--t3)'}[c.gaez];
        var rcol={'Low':'var(--gn)','Moderate':'var(--cy)','High':'var(--or)','Very High':'var(--rd)'}[c.risk];
        html+='<div style="padding:5px 8px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);margin-bottom:3px">';
        html+='<div style="display:flex;align-items:center;gap:6px;margin-bottom:2px">';
        html+='<span style="font-size:11px;font-weight:700;text-transform:capitalize;flex:1">'+crop+'</span>';
        html+='<span style="font-size:9px;font-weight:700;color:'+col+'">'+c.gaez+'</span>';
        html+='<span style="font-size:14px;font-weight:800;color:'+col+';width:36px;text-align:right">'+c.fit+'</span>';
        html+='</div>';
        html+='<div style="height:5px;background:var(--s2);border-radius:3px;overflow:hidden;margin-bottom:3px"><div style="height:100%;width:'+c.fit+'%;background:'+col+'"></div></div>';
        html+='<div style="display:flex;font-size:8px;color:var(--t3);gap:6px;flex-wrap:wrap">';
        if(c.yield>0)html+='<span>📊 '+c.yield+' t/ha</span>';
        html+='<span>💰 Mkt '+c.market+'/100</span>';
        html+='<span style="color:'+rcol+';font-weight:700">⚡ '+c.risk+' risk</span>';
        html+='<span style="flex:1;text-align:right">🌱 '+c.variety+'</span>';
        html+='</div></div>';
      });
      // AEZ tag
      var aezDesc={'I':'Tea-Dairy zone','II':'Coffee zone','III':'Sunflower-Maize zone','IV':'Marginal coffee zone','V':'Livestock-millet zone','VI':'Pastoral zone','VII':'Very arid zone'};
      var aezMap={"kericho":"I","bomet":"I","nyandarua":"I","kiambu":"II","muranga":"II","nyeri":"II","meru":"II","embu":"II","kirinyaga":"II","uasingishu":"III","transnzoia":"III","nakuru":"III","narok":"III","laikipia":"III","kakamega":"III","bungoma":"III","kisumu":"III","kisii":"III","machakos":"IV","makueni":"V","kitui":"V","tharaka":"V","kilifi":"V","kwale":"V","nairobi":"II"};
      var aez=aezMap[d.id]||"III";
      html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);font-size:9px;margin-top:6px"><b>AEZ:</b> Zone '+aez+' — '+aezDesc[aez]+' (Sombroek classification, KALRO)</div>';
      // Action box
      html+='<div style="padding:6px;background:rgba(16,185,129,0.05);border-radius:5px;border:1px solid var(--gn);font-size:9px;margin-top:6px"><b>Action:</b> Prioritise '+topCrop+' for '+d.n+' — highest agro-ecological fit and market opportunity. Diversification candidates: '+(crops.slice(1,3).map(function(c){return c}).join(', '))+'.</div>';
      html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Sources: GAEZ v4 (FAO/IIASA, 53 crops globally) • iSDAsoil 30m (Africa-wide) • WorldClim 2.1 • KALRO Variety Catalogue • KEPHIS releases • KAMIS market data • Sombroek AEZ classification<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: 5-year refresh</div></div>';
    }


  } else if(mod==='vci'){
    var v=VCI[d.id];
    if(!v){html+='<div class="sc"><h3>VCI — '+d.n+'<span class="cad-badge cad-WEEKLY" title="BOKU/FEWS NET dekadal">Dekadal</span></h3><div style="padding:12px;text-align:center;color:var(--t3);font-size:10px">No VCI data</div></div>';}
    else {
      var vcCol=v.vci<10?'var(--rd)':v.vci<35?'var(--rd)':v.vci<50?'var(--or)':v.vci<65?'var(--cy)':'var(--gn)';
      var trendIcon={'improving':'↗','stable':'→','worsening':'↘'}[v.trend];
      var trendCol={'improving':'var(--gn)','stable':'var(--cy)','worsening':'var(--rd)'}[v.trend];
      html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(34,197,94,.15)">🛰️</div><h3>VCI Drought Monitor — '+d.n+'<span class="cad-badge cad-MONTHLY" title="CBK + FIF Board reports">Monthly</span></h3></div>';
      html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">Vegetation Condition Index (BOKU/FEWS NET) • dekadal • the metric NDMA uses for drought declarations</div>';
      html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(34,197,94,0.08),rgba(245,158,11,0.08));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
      html+='<div style="font-size:32px;font-weight:900;color:'+vcCol+'">'+v.vci+'</div>';
      html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">/100 vegetation condition</div>';
      html+='<div style="font-size:11px;font-weight:700;color:'+vcCol+'">'+v.category+'</div>';
      html+='<div style="font-size:9px;color:'+trendCol+';font-weight:700">'+trendIcon+' '+v.trend+' (was '+v.prev_dekad+' last dekad)</div></div></div>';
      // Scale legend
      html+='<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:2px;margin-bottom:6px;font-size:8px;text-align:center">';
      html+='<div style="padding:3px;background:var(--rd);color:white;border-radius:3px">&lt;10 Extreme</div>';
      html+='<div style="padding:3px;background:#dc2626;color:white;border-radius:3px">10-35 Severe</div>';
      html+='<div style="padding:3px;background:var(--or);color:white;border-radius:3px">35-50 Mod</div>';
      html+='<div style="padding:3px;background:var(--cy);color:white;border-radius:3px">50-65 Normal</div>';
      html+='<div style="padding:3px;background:var(--gn);color:white;border-radius:3px">&gt;65 Above</div></div>';
      // Visual scale showing where this county sits
      html+='<div style="position:relative;height:20px;background:linear-gradient(to right,#dc2626 0%,#dc2626 35%,#f59e0b 35%,#f59e0b 50%,#06b6d4 50%,#06b6d4 65%,#10b981 65%,#10b981 100%);border-radius:5px;margin-bottom:6px">';
      html+='<div style="position:absolute;top:-4px;left:'+v.vci+'%;width:2px;height:28px;background:#0f172a"></div>';
      html+='<div style="position:absolute;top:-18px;left:calc('+v.vci+'% - 12px);font-size:10px;font-weight:800;color:#0f172a">'+v.vci+'</div></div>';
      if(v.recovery_days>0){
        html+='<div style="padding:6px;background:rgba(245,158,11,0.05);border-radius:5px;border:1px solid var(--or);font-size:9px;margin-bottom:6px"><b>Recovery:</b> ~'+v.recovery_days+' days at current rainfall trajectory before vegetation returns to normal range (>50)</div>';
      }
      if(v.vci<35){
        html+='<div style="padding:6px;background:rgba(220,38,38,0.05);border-radius:5px;border:1px solid var(--rd);font-size:9px;margin-bottom:6px"><b>⚠ Drought declaration trigger:</b> NDMA uses VCI <35 as one criterion for ALARM phase. Pastoral drought response, food-aid scale-up.</div>';
      }
      html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: BOKU University Vienna VCI processing of MODIS/Sentinel-3 • '+v.dekad+' • Used by FEWS NET, NDMA, ICPAC<div style="margin-top:3px;font-size:9px;color:#0891b2;font-weight:600">◐ Refresh: Dekadal (every 10d)</div></div>';
    }

  } else if(mod==='spi'){
    var sp=SPI[d.id];
    if(!sp){html+='<div class="sc"><h3>SPI — '+d.n+'<span class="cad-badge cad-MONTHLY" title="GFW GLAD alerts aggregated monthly">Weekly→Monthly</span></h3><div style="padding:12px;text-align:center;color:var(--t3);font-size:10px">No SPI data</div></div>';}
    else {
      function spiCol(x){return x<-2?'var(--rd)':x<-1.5?'var(--rd)':x<-1?'var(--or)':x<1?'var(--gn)':x<1.5?'var(--cy)':x<2?'var(--bl)':'var(--bl)';}
      function spiLbl(x){return x<-2?'Extreme drought':x<-1.5?'Severe drought':x<-1?'Moderate drought':x<1?'Near normal':x<1.5?'Mod wet':x<2?'Very wet':'Extreme wet';}
      html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(6,182,212,.15)">💧</div><h3>SPI Rainfall Index — '+d.n+'<span class="cad-badge cad-MONTHLY" title="CHIRPS rainfall WMO standard">Monthly</span></h3></div>';
      html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">Standardized Precipitation Index from CHIRPS rainfall • the WMO standard for drought • used by FEWS NET, IPC, peer-reviewed papers</div>';
      // 12-month hero (most policy-relevant)
      var c12=spiCol(sp.spi_12);
      html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(6,182,212,0.08),rgba(34,197,94,0.08));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
      html+='<div style="font-size:30px;font-weight:900;color:'+c12+'">'+(sp.spi_12>=0?'+':'')+sp.spi_12.toFixed(1)+'</div>';
      html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">SPI-12 month (annual rainfall departure)</div>';
      html+='<div style="font-size:11px;font-weight:700;color:'+c12+'">'+sp.category_12+'</div>';
      html+='<div style="font-size:9px;color:var(--t3)">Last 30d: '+sp.rainfall_30d+'mm vs '+sp.normal_30d+'mm normal</div></div></div>';
      // 1-month, 3-month, 12-month comparison
      html+='<div class="sh">SPI at multiple time-scales</div>';
      [['1-month',sp.spi_1,'agro-meteorological drought'],['3-month',sp.spi_3,'short-term agricultural drought'],['12-month',sp.spi_12,'hydrological drought / annual']].forEach(function(row){
        var col=spiCol(row[1]);
        var lbl=spiLbl(row[1]);
        var barLeft=Math.max(0,(row[1]+3)/6*100);
        html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);margin-bottom:4px">';
        html+='<div style="display:flex;justify-content:space-between;font-size:9px;margin-bottom:3px"><span style="font-weight:700">'+row[0]+'</span><span style="font-weight:800;color:'+col+'">'+(row[1]>=0?'+':'')+row[1].toFixed(1)+' · '+lbl+'</span></div>';
        // Visual scale -3 to +3
        html+='<div style="position:relative;height:8px;background:linear-gradient(to right,#dc2626 0%,#f59e0b 33%,#10b981 50%,#06b6d4 67%,#0ea5e9 100%);border-radius:4px">';
        html+='<div style="position:absolute;top:-2px;left:'+barLeft+'%;width:2px;height:12px;background:#0f172a"></div></div>';
        html+='<div style="display:flex;justify-content:space-between;font-size:7px;color:var(--t3);margin-top:1px"><span>-3 extreme dry</span><span>0 normal</span><span>+3 extreme wet</span></div>';
        html+='<div style="font-size:7px;color:var(--t3);margin-top:2px">'+row[2]+'</div>';
        html+='</div>';
      });
      if(sp.spi_12<-1.5){
        html+='<div style="padding:6px;background:rgba(220,38,38,0.05);border-radius:5px;border:1px solid var(--rd);font-size:9px;margin-top:6px"><b>⚠ Severe annual drought:</b> SPI-12 below -1.5 = 1-in-15 year drought. Pastoral livelihoods stressed, water scarcity, IPC food-security escalation likely.</div>';
      } else if(sp.spi_12<-1){
        html+='<div style="padding:6px;background:rgba(245,158,11,0.05);border-radius:5px;border:1px solid var(--or);font-size:9px;margin-top:6px"><b>Moderate annual drought:</b> Below-normal year, contingency planning advised.</div>';
      }
      html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: CHIRPS rainfall (UCSB Climate Hazards Group) • SPI computed per WMO methodology • 1981-present baseline<div style="margin-top:3px;font-size:9px;color:#4f46e5;font-weight:600">◑ Refresh: Monthly</div></div>';
    }

  } else if(mod==='tea'){
    var t=TEA_AUCTION[d.id];
    if(!t){
      html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(34,197,94,.15)">🍵</div><h3>Tea Auction — '+d.n+'<span class="cad-badge cad-WEEKLY" title="Mombasa Tea Auction Mon-Wed sales">Weekly</span></h3></div>';
      html+='<div style="padding:12px;text-align:center;color:var(--t3);font-size:10px;background:var(--bg);border-radius:6px;border:1px solid var(--bd)">'+d.n+' is not a tea-producing county.<br><br><span style="font-size:9px">Kenya tea is concentrated in Kericho, Bomet, Nyamira, Kisii, Murang\'a, Kiambu, Nyeri, Meru, Embu, Kirinyaga, Nyandarua, plus pockets in Kakamega, Trans Nzoia, Nakuru.</span></div></div>';
    } else {
      var tcol=t.trend.startsWith('+')?'var(--gn)':'var(--rd)';
      html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(34,197,94,.15)">🍵</div><h3>Mombasa Tea Auction — '+d.n+'<span class="cad-badge cad-MONTHLY" title="KMD seasonal forecasts">Seasonal</span></h3></div>';
      html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">Africa Tea Brokers Ltd · '+t.week+' · multi-origin auction (10 producer countries) · ~14M kg offered weekly</div>';
      html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(34,197,94,0.08),rgba(99,102,241,0.08));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
      html+='<div style="font-size:24px;font-weight:900;color:var(--gn)">USC '+t.bp1_avg+'</div>';
      html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">BP1 average · '+t.factories+' factories</div>';
      html+='<div style="font-size:11px;font-weight:700">'+(t.weekly_kg/1000).toFixed(0)+'k kg sold</div>';
      html+='<div style="font-size:9px;color:'+tcol+';font-weight:700">'+t.trend+' vs prev sale</div></div></div>';
      // Grade table
      html+='<div class="sh">Grade prices (US cents/kg)</div>';
      [{n:'BP1 (Broken Pekoe 1)',v:t.bp1_avg,d:'Best leaf appearance, premium'},{n:'PF1 (Pekoe Fannings 1)',v:t.pf1_avg,d:'Tea bag standard, most-traded'}].forEach(function(g){
        html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);margin-bottom:3px">';
        html+='<div style="display:flex;justify-content:space-between;font-size:10px"><span style="font-weight:700">'+g.n+'</span><span style="font-weight:800;color:var(--gn)">USC '+g.v+'</span></div>';
        html+='<div style="font-size:8px;color:var(--t3)">'+g.d+'</div></div>';
      });
      html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px;margin-bottom:6px">';
      html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Top factory</div><div style="font-size:11px;font-weight:800">'+t.top_factory+'</div></div>';
      html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Leading export market</div><div style="font-size:11px;font-weight:800">'+t.leading_market+'</div></div>';
      html+='</div>';
      html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: Africa Tea Brokers Ltd (atbltd.com) • Mombasa Tea Auction • daily during sale weeks Mon-Wed • aggregated weekly<div style="margin-top:3px;font-size:9px;color:#0891b2;font-weight:600">◐ Refresh: Weekly auctions</div></div>';
    }

  } else if(mod==='coffee'){
    var c=COFFEE_AUCTION[d.id];
    if(!c){
      html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(245,158,11,.15)">☕</div><h3>Coffee Auction — '+d.n+'<span class="cad-badge cad-WEEKLY" title="NCE Tuesday auctions">Weekly</span></h3></div>';
      html+='<div style="padding:12px;text-align:center;color:var(--t3);font-size:10px;background:var(--bg);border-radius:6px;border:1px solid var(--bd)">'+d.n+' is not a major coffee-producing county.<br><br><span style="font-size:9px">Kenya coffee is concentrated in 7 counties: Nyeri, Kirinyaga, Murang\'a, Kiambu, Embu, Meru, Kericho. EUDR Dec 2026 deadline applies to all of them.</span></div></div>';
    } else {
      var ccol=c.trend.startsWith('+')?'var(--gn)':'var(--rd)';
      var eCol=c.eudr_compliant_pct>=70?'var(--gn)':c.eudr_compliant_pct>=50?'var(--or)':'var(--rd)';
      html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(245,158,11,.15)">☕</div><h3>Nairobi Coffee Exchange — '+d.n+'<span class="cad-badge cad-MONTHLY" title="KALRO + FAO crop calendar">Seasonal</span></h3></div>';
      html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">'+c.week+' · Tuesdays during season Oct-Aug · 50kg bag clean coffee · KSh prices</div>';
      html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(245,158,11,0.08),rgba(245,158,11,0.05));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
      html+='<div style="font-size:22px;font-weight:900;color:var(--or)">KSh '+(c.aa_kshbag/1000).toFixed(0)+'k</div>';
      html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">AA grade per 50kg bag</div>';
      html+='<div style="font-size:11px;font-weight:700">'+c.cooperatives+' cooperatives · '+c.weekly_bags.toLocaleString()+' bags this week</div>';
      html+='<div style="font-size:9px;color:'+ccol+';font-weight:700">'+c.trend+' vs prev auction</div></div></div>';
      html+='<div class="sh">Grade prices (KSh per 50kg bag clean coffee)</div>';
      [{g:'AA',d:'Largest bean, premium specialty',v:c.aa_kshbag,col:'var(--gn)'},{g:'AB',d:'Standard export grade',v:c.ab_kshbag,col:'var(--bl)'},{g:'PB',d:'Peaberry, distinctive flavour',v:c.pb_kshbag,col:'var(--cy)'},{g:'C',d:'Smaller bean, blending grade',v:c.c_kshbag,col:'var(--or)'}].forEach(function(g){
        html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);margin-bottom:3px">';
        html+='<div style="display:flex;justify-content:space-between;align-items:baseline;font-size:10px"><span style="font-weight:700">Grade '+g.g+'</span><span style="font-weight:800;color:'+g.col+'">KSh '+g.v.toLocaleString()+'</span></div>';
        html+='<div style="font-size:8px;color:var(--t3)">'+g.d+'</div></div>';
      });
      html+='<div style="padding:6px;background:rgba(220,38,38,0.05);border-radius:5px;border:1px solid var(--rd);font-size:9px;margin-top:6px;margin-bottom:6px"><b>🚨 EUDR readiness:</b> '+c.eudr_compliant_pct+'% of coffee plots geo-tagged & deforestation-flagged for EU export. Dec 2026 deadline · counties at &lt;70% face shipment rejection. Top cooperative: '+c.top_coop+'</div>';
      html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: Nairobi Coffee Exchange (NCE) · AFA Coffee Directorate · auction prices published immediately post-sale<div style="margin-top:3px;font-size:9px;color:#0891b2;font-weight:600">◐ Refresh: Weekly auctions</div></div>';
    }

  } else if(mod==='pestwatch'){
    var pw=PEST_WATCH[d.id];
    if(!pw){html+='<div class="sc"><h3>Pest Watch — '+d.n+'<span class="cad-badge cad-WEEKLY" title="FAO Locust Watch + ICIPE FAW">Weekly</span></h3><div style="padding:12px;text-align:center;color:var(--t3);font-size:10px">No pest watch data</div></div>';}
    else {
      var lcol={1:'var(--gn)',2:'var(--cy)',3:'var(--or)',4:'var(--rd)'}[pw.locust_risk];
      var fcol={1:'var(--gn)',2:'var(--cy)',3:'var(--or)',4:'var(--rd)',5:'var(--rd)'}[pw.faw_pressure];
      var llbl={1:'Calm',2:'Watch',3:'Caution',4:'Threat'}[pw.locust_risk];
      var flbl={1:'Low',2:'Low',3:'Moderate',4:'High',5:'Outbreak'}[pw.faw_pressure];
      html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(124,58,237,.15)">🐛</div><h3>Pest Watch — '+d.n+'<span class="cad-badge cad-MONTHLY" title="NDMA Early Warning bulletins">Monthly</span></h3></div>';
      html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">'+pw.week+' · FAO Locust Watch + ICIPE FAW tracker + crop-specific pest research stations</div>';
      // Two main pest cards side-by-side
      html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:6px">';
      html+='<div style="padding:8px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)">';
      html+='<div style="font-size:8px;color:var(--t3);font-weight:700">🦗 DESERT LOCUST</div>';
      html+='<div style="font-size:18px;font-weight:900;color:'+lcol+';margin-top:4px">'+llbl+'</div>';
      html+='<div style="font-size:8px;color:var(--t3)">FAO Locust Watch · last major: 2020</div></div>';
      html+='<div style="padding:8px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)">';
      html+='<div style="font-size:8px;color:var(--t3);font-weight:700">🐛 FALL ARMYWORM</div>';
      html+='<div style="font-size:18px;font-weight:900;color:'+fcol+';margin-top:4px">'+flbl+'</div>';
      html+='<div style="font-size:8px;color:var(--t3)">ICIPE · endemic since 2017</div></div>';
      html+='</div>';
      html+='<div style="padding:6px;background:rgba(124,58,237,0.05);border-radius:5px;border:1px solid var(--pp);font-size:9px;margin-bottom:6px"><b>This week (Wk16 2026):</b> '+pw.alerts_week+' alert(s) issued · Key pest: '+pw.key_pest+'</div>';
      // Action recommendations based on pressure
      if(pw.faw_pressure>=4){
        html+='<div style="padding:6px;background:rgba(220,38,38,0.05);border-radius:5px;border:1px solid var(--rd);font-size:9px;margin-bottom:6px"><b>⚠ FAW action required:</b> Field scouting weekly · Apply Bt (Bacillus thuringiensis) or spinosad at first sign · KEPHIS-approved synthetic options · Avoid carbofuran (banned)</div>';
      } else if(pw.faw_pressure>=3){
        html+='<div style="padding:6px;background:rgba(245,158,11,0.05);border-radius:5px;border:1px solid var(--or);font-size:9px;margin-bottom:6px"><b>FAW watch:</b> Field scouting bi-weekly · Push-pull technology recommended (icipe model) · Maize-Brachiaria-Desmodium</div>';
      }
      if(pw.locust_risk>=2){
        html+='<div style="padding:6px;background:rgba(245,158,11,0.05);border-radius:5px;border:1px solid var(--or);font-size:9px;margin-bottom:6px"><b>Locust watch:</b> FAO bulletin escalated · DLCO-EA aerial spray operations on standby · Pastoral counties on alert</div>';
      }
      html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Sources: FAO Desert Locust Watch (weekly bulletin) · ICIPE Fall Armyworm tracker · Coffee Research Foundation Kenya · Tea Research Foundation Kenya · CABI Plantwise plant clinics<div style="margin-top:3px;font-size:9px;color:#0891b2;font-weight:600">◐ Refresh: Weekly bulletins</div></div>';
    }

  } else if(mod==='smartcrop'){
    var cf=CROPFIT[d.id]||{};
    var sa=SOILACID[d.id]||{};
    var sp=SPI[d.id]||{};
    var vc=VCI[d.id]||{};
    var pw=PEST_WATCH[d.id]||{};
    var eu=EUDR[d.id]||{is_coffee:false};
    var dl=DEALERS[d.id]||{total:0};
    var ex=EXPORTS[d.id]||{};
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(34,197,94,.15)">🌱</div><h3>Crop Recommendation — '+d.n+'<span class="cad-badge cad-REF" title="Synthesis of GAEZ + climate + market + regulatory + soil + input access">Computed</span></h3></div>';
    html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">Decision-support synthesis: GAEZ v4 + iSDAsoil + SPI rainfall + VCI vegetation + KAMIS market + EUDR + buyer presence + dealer access. Indicative — final decisions need extension officer + farmer context.</div>';
    var crops=Object.keys(cf).filter(function(c){return c!=='dairy'&&c!=='fish'&&c!=='beef'});
    if(!crops.length){
      html+='<div style="padding:12px;text-align:center;color:var(--t3);font-size:10px;background:var(--bg);border-radius:6px;border:1px solid var(--bd)">No crop-fit data for '+d.n+'. Available for 25 priority counties.</div>';
    } else {
      // Build score per crop = 0.30*fit + 0.15*market + climate adjustment + regulatory + risk
      var scored=crops.map(function(cr){
        var c=cf[cr];
        var score=c.fit*0.30+c.market*0.15;
        // Climate adjustment from SPI/VCI
        if(sp.spi_12!==undefined){
          if(sp.spi_12<-1 && (cr==='maize'||cr==='wheat'))score-=10;
          if(sp.spi_12<-1 && (cr==='sorghum'||cr==='cassava'||cr==='pulses'))score+=5;
        }
        if(vc.vci!==undefined && vc.vci<40 && (cr==='maize'||cr==='wheat'))score-=8;
        // Soil acidity adjustment
        if(sa.severity==='Severe' && (cr==='maize'||cr==='wheat'||cr==='beans'))score-=6;
        // Pest pressure
        if(pw.faw_pressure>=4 && cr==='maize')score-=8;
        // EUDR tailwind/headwind for coffee
        if(cr==='coffee' && eu.is_coffee){
          if(eu.geotag_pct>=70)score+=5;
          else if(eu.geotag_pct<50)score-=12;
        }
        // Buyer pull
        if(ex.cert_farms>200 && (cr==='avocado'||cr==='horti'||cr==='mango'))score+=5;
        // Risk penalty
        if(c.risk==='Very High')score-=15;
        else if(c.risk==='High')score-=10;
        else if(c.risk==='Moderate')score-=3;
        return {crop:cr,score:Math.round(score+50),raw:c};  // +50 baseline for readability
      });
      scored.sort(function(a,b){return b.score-a.score});
      // Best 3 + Worst 3
      var best=scored.slice(0,3);
      var worst=scored.slice(-3).reverse();
      
      // Hero: top recommendation
      var top=best[0];
      var topCol=top.score>=80?'var(--gn)':top.score>=65?'var(--cy)':'var(--or)';
      html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(34,197,94,0.08),rgba(6,182,212,0.06));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
      html+='<div style="font-size:32px;font-weight:900;color:'+topCol+'">🥇</div>';
      html+='<div style="flex:1"><div style="font-size:14px;font-weight:800;text-transform:capitalize">'+top.crop+'</div>';
      html+='<div style="font-size:9px;color:var(--t3)">Confidence '+top.score+'/100 · '+top.raw.variety+'</div>';
      html+='<div style="font-size:8px;color:var(--t3);margin-top:2px">'+top.raw.why+'</div></div></div>';
      
      // Top 3 recommended
      html+='<div class="sh">✓ Top 3 recommended</div>';
      best.forEach(function(r,i){
        var medal=['🥇','🥈','🥉'][i];
        var col=r.score>=80?'var(--gn)':r.score>=65?'var(--cy)':'var(--or)';
        html+='<div style="margin-bottom:4px;padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);border-left:3px solid '+col+'">';
        html+='<div style="display:flex;justify-content:space-between;align-items:baseline;font-size:10px"><span style="font-weight:700;text-transform:capitalize">'+medal+' '+r.crop+'</span><span style="font-size:13px;font-weight:800;color:'+col+'">'+r.score+'</span></div>';
        html+='<div style="font-size:8px;color:var(--t3);margin-top:2px"><b>Variety:</b> '+r.raw.variety+' · <b>Yield:</b> '+r.raw.yield+' t/ha · <b>Risk:</b> '+r.raw.risk+'</div>';
        html+='<div style="font-size:8px;color:var(--t3);margin-top:1px">'+r.raw.why+'</div>';
        html+='</div>';
      });
      
      // Bottom 3 NOT recommended
      html+='<div class="sh" style="margin-top:6px">✗ Top 3 NOT recommended</div>';
      worst.forEach(function(r){
        html+='<div style="margin-bottom:4px;padding:6px;background:rgba(220,38,38,0.04);border-radius:5px;border:1px solid var(--rd);border-left:3px solid var(--rd)">';
        html+='<div style="display:flex;justify-content:space-between;align-items:baseline;font-size:10px"><span style="font-weight:700;text-transform:capitalize">⚠ '+r.crop+'</span><span style="font-size:11px;font-weight:800;color:var(--rd)">'+r.score+'</span></div>';
        html+='<div style="font-size:8px;color:var(--t3);margin-top:1px">'+r.raw.why+' · Risk: '+r.raw.risk+'</div>';
        html+='</div>';
      });
      
      // Operational footer with adjustments shown
      var adj=[];
      if(sp.spi_12<-1)adj.push('Drought (SPI '+sp.spi_12.toFixed(1)+') penalised cereals');
      if(vc.vci<40)adj.push('Vegetation stress (VCI '+vc.vci+') penalty');
      if(sa.severity==='Severe')adj.push('Soil acidity penalty');
      if(pw.faw_pressure>=4)adj.push('FAW pressure penalty for maize');
      if(eu.is_coffee && eu.geotag_pct<50)adj.push('EUDR risk penalty for coffee');
      if(adj.length){
        html+='<div style="padding:6px;background:rgba(99,102,241,0.05);border-radius:5px;border:1px solid var(--pp);font-size:8px;margin-top:6px"><b>County-specific adjustments applied:</b> '+adj.join(' · ')+'</div>';
      }
      
      // Action with dealer + extension info
      html+='<div style="padding:6px;background:rgba(245,158,11,0.05);border-radius:5px;border:1px solid var(--or);font-size:9px;margin-top:6px">';
      html+='<b>Action:</b> Plant '+top.crop+' ('+top.raw.variety+'). Source seed via '+(dl.kephis_seed||'KEPHIS')+' authorised dealers ('+(dl.total||'?')+' in '+d.n+'). Engage county extension officer for variety verification + agronomic protocol.';
      html+='</div>';
    }
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Sources: GAEZ v4 (FAO/IIASA) · iSDAsoil · KAMIS market prices · CHIRPS SPI · BOKU VCI · KEPHIS variety register · Module synthesis (cross-references EUDR, Pest Watch, Soil Acidity, Dealers, Exports)<div style="margin-top:3px;font-size:9px;color:#475569;font-weight:600">◇ Refresh: Computed on each query (inputs refresh per source cadence)</div></div>';

  } else if(mod==='iovsoc'){
    var io=IOVSOC[d.id];
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(99,102,241,.15)">📊</div><h3>Input vs Outcome — '+d.n+'<span class="cad-badge cad-ANNUAL" title="NCPB e-voucher + KAMIS price + KNBS yield + Tegemeo cost panels">Annual+Quarterly</span></h3></div>';
    html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">County-level subsidy & input efficiency: KSh in vs KSh out. Anchored to NCPB e-voucher disbursement, KAMIS output prices, KNBS yield estimates, Tegemeo Institute farm-economics panels.</div>';
    if(!io){
      html+='<div style="padding:12px;text-align:center;color:var(--t3);font-size:10px;background:var(--bg);border-radius:6px;border:1px solid var(--bd)">No input-output data for '+d.n+'. Available for 25 priority counties.</div>';
    } else {
      var outputKshHa=Math.round(io.yield_tHa*io.price_kshT);
      var marginKshHa=outputKshHa-io.input_kshHa;
      var roi=io.yield_tHa*io.price_kshT/io.input_kshHa;
      var roiCol=roi>=2.5?'var(--gn)':roi>=1.8?'var(--cy)':roi>=1.2?'var(--or)':'var(--rd)';
      
      // Hero: ROI
      html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(99,102,241,0.08),rgba(34,197,94,0.06));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
      html+='<div style="font-size:36px;font-weight:900;color:'+roiCol+'">'+roi.toFixed(1)+'x</div>';
      html+='<div style="flex:1"><div style="font-size:11px;font-weight:700">ROI on '+io.primary_crop+'</div>';
      html+='<div style="font-size:9px;color:var(--t3)">For every KSh 1 invested per ha, KSh '+roi.toFixed(2)+' returned</div>';
      html+='<div style="font-size:8px;color:var(--t3);margin-top:2px">'+io.benchmark+' vs national avg '+io.national_yield+' t/ha</div></div></div>';
      
      // Per-hectare snapshot
      html+='<div class="sh">Per-hectare economics ('+io.primary_crop+')</div>';
      html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:4px">';
      html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Input cost/ha</div><div style="font-size:14px;font-weight:800;color:var(--rd)">KSh '+(io.input_kshHa/1000).toFixed(0)+'k</div><div style="font-size:7px;color:var(--t3)">Seed+fert+labour</div></div>';
      html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Output value/ha</div><div style="font-size:14px;font-weight:800;color:var(--gn)">KSh '+(outputKshHa/1000).toFixed(0)+'k</div><div style="font-size:7px;color:var(--t3)">Yield × KAMIS price</div></div>';
      html+='</div>';
      html+='<div style="padding:6px;background:rgba(16,185,129,0.05);border-radius:5px;border:1px solid var(--gn);font-size:10px;margin-bottom:6px"><b>Net margin/ha:</b> KSh '+(marginKshHa/1000).toFixed(0)+'k · <b>Yield:</b> '+io.yield_tHa+' t/ha · <b>Price:</b> KSh '+(io.price_kshT/1000).toFixed(0)+'k/t</div>';
      
      // Input breakdown
      html+='<div class="sh">Input breakdown</div>';
      html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);font-size:9px;margin-bottom:6px;line-height:1.6">';
      html+='<div>🌾 Fertilizer: '+io.fert_kg_ha+' kg/ha</div>';
      html+='<div>🌱 Seed: '+io.seed_kg_ha+' kg/ha</div>';
      html+='<div>👥 Labour: '+io.labour_days+' person-days/ha</div>';
      html+='</div>';
      
      // Subsidy efficiency (the politically-relevant question)
      // Estimate yield gain from subsidy vs counter-factual (no subsidy = -25% fertilizer = -15% yield)
      var noSubsidyYield=io.yield_tHa*0.85;
      var yieldGainTHa=io.yield_tHa-noSubsidyYield;
      var totalCountyGainMT=Math.round(yieldGainTHa*io.area_ha_K*1000);
      var subsidyKshTotal=io.subsidy_kshM_yr*1e6;
      var subsidyPerKgGain=Math.round(subsidyKshTotal/(totalCountyGainMT*1000));
      var marketValuePerKshSubsidy=(io.price_kshT/1000)/subsidyPerKgGain;
      var efficiencyCol=marketValuePerKshSubsidy>=1.2?'var(--gn)':marketValuePerKshSubsidy>=0.8?'var(--or)':'var(--rd)';
      
      html+='<div class="sh">Subsidy efficiency (BETA fertilizer programme)</div>';
      html+='<div style="padding:6px;background:rgba(245,158,11,0.04);border-radius:5px;border:1px solid var(--or);font-size:9px;margin-bottom:6px;line-height:1.7">';
      html+='<div>💰 <b>Subsidy disbursed:</b> KSh '+io.subsidy_kshM_yr+'M/yr to '+io.area_ha_K+'k ha</div>';
      html+='<div>📈 <b>Estimated yield gain:</b> +'+yieldGainTHa.toFixed(1)+' t/ha = '+(totalCountyGainMT/1000).toFixed(1)+'k MT county total</div>';
      html+='<div>💸 <b>Subsidy cost per kg yield gain:</b> KSh '+subsidyPerKgGain+'/kg</div>';
      html+='<div><b>📊 Market value generated per KSh 1 subsidy:</b> <span style="color:'+efficiencyCol+';font-weight:800">KSh '+marketValuePerKshSubsidy.toFixed(2)+'</span></div>';
      html+='</div>';
      
      // E-voucher uptake
      var evCol=io.e_voucher_pct>=70?'var(--gn)':io.e_voucher_pct>=50?'var(--or)':'var(--rd)';
      html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);font-size:9px;margin-bottom:6px">';
      html+='<b>Subsidy uptake:</b> '+io.subsidy_uptake_pct+'% of allocation claimed · <b>E-voucher digitisation:</b> <span style="color:'+evCol+';font-weight:700">'+io.e_voucher_pct+'%</span>';
      html+='</div>';
      
      // 3-year trajectory
      html+='<div class="sh">3-year yield trajectory</div>';
      var t=io.yield_3yr_trend;
      var trendArrow=t[2]>t[0]*1.05?'↑':t[2]<t[0]*0.95?'↓':'→';
      var trendCol=t[2]>t[0]?'var(--gn)':t[2]<t[0]?'var(--rd)':'var(--cy)';
      html+='<div style="display:flex;justify-content:space-between;padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);font-size:10px;margin-bottom:6px">';
      html+='<span>2023: <b>'+t[0]+' t/ha</b></span>';
      html+='<span>2024: <b>'+t[1]+' t/ha</b></span>';
      html+='<span style="color:'+trendCol+';font-weight:700">2025: '+t[2]+' t/ha '+trendArrow+'</span>';
      html+='</div>';
      
      // Honest action
      var insight='';
      if(roi>=2.5)insight='High ROI county — protect this allocation. Push for premium variety upgrade + EUDR/cert programmes.';
      else if(roi>=1.8)insight='Solid ROI. E-voucher digitisation is the next lever — reach '+io.subsidy_uptake_pct+'% currently.';
      else if(roi>=1.2)insight='Marginal ROI — diversify crop mix. Consider redirecting subsidy to drought-tolerant varieties or alternative crops.';
      else insight='⚠ Low ROI — fundamental crop-AEZ mismatch. Consider crop substitution (see Crop Recommendation module).';
      html+='<div style="padding:6px;background:rgba(245,158,11,0.05);border-radius:5px;border:1px solid var(--or);font-size:9px;margin-bottom:6px"><b>Insight:</b> '+insight+'</div>';
    }
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Sources: NCPB e-voucher disbursement (BETA fertilizer programme) · KNBS Crop Yield Estimates · KAMIS market prices · Tegemeo Institute Egerton farm-economics panels · Treasury QEBR · KIAMIS<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Annual yield + Quarterly subsidy disbursement + Monthly KAMIS price</div></div>';

  } else if(mod==='varrec'){
    var cf=CROPFIT[d.id]||{};
    var sp=SPI[d.id]||{};
    var sa=SOILACID[d.id]||{};
    var dl=DEALERS[d.id]||{total:0,kephis_seed:0};
    var ss=d.seed||{};
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(34,197,94,.15)">🌾</div><h3>Seed Variety Pick — '+d.n+'<span class="cad-badge cad-ANNUAL" title="KEPHIS Variety Register + KALRO release records">Annual</span></h3></div>';
    html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">Variety-level recommendations: KEPHIS Variety Register + KALRO release records + climate matching + variety age check + counterfeit risk. Confirm with extension officer + KALRO contact before scaling.</div>';
    var crops=Object.keys(cf).filter(function(c){return c!=='dairy'&&c!=='fish'&&c!=='beef'});
    if(!crops.length){
      html+='<div style="padding:12px;text-align:center;color:var(--t3);font-size:10px;background:var(--bg);border-radius:6px;border:1px solid var(--bd)">No crop-fit data for '+d.n+'.</div>';
    } else {
      crops.sort(function(a,b){return cf[b].fit-cf[a].fit});
      var topCrop=crops[0];
      // Determine zone from CROPFIT GAEZ + county data  
      var zone='Mid-altitude';
      if(d.z && (d.z.indexOf('Highland')>=0||d.z.indexOf('Tea')>=0||d.z.indexOf('Mt Kenya')>=0))zone='Highland';
      else if(d.z && (d.z.indexOf('ASAL')>=0||d.z.indexOf('Coast')>=0||d.z.indexOf('Lowland')>=0))zone='Lowland';
      // Get varieties for top crop — KEPHIS first, EXTRA fallback
      var varieties=(typeof KEPHIS_VARIETIES!=="undefined" && KEPHIS_VARIETIES[topCrop])||(typeof EXTRA_VARIETIES!=="undefined" && EXTRA_VARIETIES[topCrop])||[];
      // Score each variety: zone match + age penalty + yield + traits
      var thisYr=2026;
      var scored=varieties.map(function(v){
        var sc=50; // baseline
        // Zone match (30 points)
        if(v.zone===zone)sc+=30;
        else if(v.zone==='Mid-altitude' && (zone==='Highland'||zone==='Lowland'))sc+=10;
        else if(v.zone==='Lake/Pond' || v.zone==='ASAL' || v.zone==='Coastal')sc+=(v.zone===zone?30:0);
        // Variety age (20 points) — KEPHIS recommends <10 years
        var age=thisYr-v.year;
        if(age<5)sc+=20;
        else if(age<10)sc+=15;
        else if(age<15)sc+=5;
        else sc-=5;
        // Yield bonus (relative within crop) — normalised
        var maxY=Math.max.apply(null,varieties.map(function(x){return x.yield||1}));
        if(v.yield)sc+=Math.round(v.yield/maxY*10);
        // SPI/drought penalty for non-drought-tolerant
        if(sp.spi_12<-1 && (v.traits||[]).join(' ').toLowerCase().indexOf('drought')<0)sc-=8;
        return {v:v,sc:sc,age:age};
      }).sort(function(a,b){return b.sc-a.sc});
      var top3=scored.slice(0,3);
      
      // Hero: best variety
      if(top3.length){
        var b=top3[0];
        var col=b.sc>=85?'var(--gn)':b.sc>=70?'var(--cy)':'var(--or)';
        html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(34,197,94,0.08),rgba(6,182,212,0.06));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
        html+='<div style="font-size:30px;font-weight:900;color:'+col+'">🥇</div>';
        html+='<div style="flex:1"><div style="font-size:13px;font-weight:800">'+b.v.name+'</div>';
        html+='<div style="font-size:9px;color:var(--t3)">For <b style="text-transform:capitalize">'+topCrop+'</b> · '+b.v.breeder+' · Released '+b.v.year+' ('+b.age+'y old)</div>';
        html+='<div style="font-size:8px;color:var(--t3);margin-top:2px">Confidence '+b.sc+'/100 · Yield '+b.v.yield+(topCrop==='dairy'?' L/day':' kg/ha')+'</div></div></div>';
      }
      
      // Top 3 with rank
      html+='<div class="sh">Recommended for '+topCrop+' in '+d.n+'</div>';
      top3.forEach(function(r,i){
        var medal=['🥇','🥈','🥉'][i];
        var label=['BEST','ALTERNATIVE','BACKUP'][i];
        var col=r.sc>=85?'var(--gn)':r.sc>=70?'var(--cy)':'var(--or)';
        var ageWarn=r.age>=15?'<span style="color:var(--rd);font-weight:700"> ⚠ Aging</span>':r.age>=10?'<span style="color:var(--or)"> · Mid-life</span>':'';
        html+='<div style="margin-bottom:4px;padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);border-left:3px solid '+col+'">';
        html+='<div style="display:flex;justify-content:space-between;align-items:baseline"><span style="font-size:10px;font-weight:700">'+medal+' '+r.v.name+' <span style="font-size:7px;color:var(--t3);background:rgba(0,0,0,0.2);padding:1px 4px;border-radius:3px">'+label+'</span></span><span style="font-size:13px;font-weight:800;color:'+col+'">'+r.sc+'</span></div>';
        html+='<div style="font-size:8px;color:var(--t3);margin-top:2px"><b>'+r.v.breeder+'</b> · '+r.v.year+ageWarn+' · Yield '+r.v.yield+(topCrop==='dairy'?' L/day':' kg/ha')+' · Maturity '+r.v.maturity+'d</div>';
        html+='<div style="font-size:8px;color:var(--t2);margin-top:2px">'+(r.v.traits||[]).join(' · ')+'</div>';
        html+='</div>';
      });
      
      // Why these (climate adjustments)
      var why=[];
      why.push('Climate zone: <b>'+zone+'</b> matched');
      if(sp.spi_12!==undefined){
        if(sp.spi_12<-1)why.push('Drought (SPI '+sp.spi_12.toFixed(1)+') → preferred drought-tolerant traits');
        else if(sp.spi_12>1)why.push('Wet conditions (SPI +'+sp.spi_12.toFixed(1)+') → preferred high-yield varieties');
      }
      if(sa.severity==='Severe')why.push('Soil acidity severe → noted for variety choice');
      why.push('Variety age weighted: KEPHIS recommends <10 years');
      if(why.length){
        html+='<div style="padding:6px;background:rgba(99,102,241,0.05);border-radius:5px;border:1px solid var(--pp);font-size:8px;margin-top:4px;line-height:1.6"><b>Why these picks:</b> '+why.join(' · ')+'</div>';
      }
      
      // Where to buy + verification (inline)
      html+='<div class="sh" style="margin-top:6px">Where to buy + verify</div>';
      html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);font-size:9px;line-height:1.7;margin-bottom:4px">';
      html+='<div>🏪 <b>'+(dl.total||0).toLocaleString()+' agro-dealers</b> in '+d.n+' ('+(dl.kephis_seed||0)+' KEPHIS-authorised seed dealers)</div>';
      html+='<div>📱 <b>Verify authenticity:</b> SMS variety code on bag to <b>1393</b> before opening</div>';
      html+='<div>💳 <b>E-voucher:</b> Dial <b>*616*3#</b> (KIAMIS) for subsidised price + redemption</div>';
      if(ss.cfr>=60)html+='<div style="color:var(--rd);margin-top:2px">⚠ <b>High counterfeit risk in '+d.n+'</b> (CFR '+ss.cfr+'/100) — ALWAYS verify sticker</div>';
      html+='</div>';
      
      // Action 
      if(top3.length){
        var b=top3[0];
        html+='<div style="padding:6px;background:rgba(245,158,11,0.05);border-radius:5px;border:1px solid var(--or);font-size:9px"><b>Action:</b> Plant <b>'+b.v.name+'</b> (registered '+b.v.year+') for '+topCrop+' in '+d.n+'. Use '+(top3[1]?top3[1].v.name+' as backup':'KALRO catalogue for backup')+'. Verify KEPHIS sticker via 1393. Confirm choice with county extension officer.</div>';
      }
    }
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Sources: KEPHIS National Crop Variety List 2024 · KALRO release records · CROPFIT GAEZ-AEZ matching · KEPHIS counterfeit verification 1393 SMS · KIAMIS *616*3# e-voucher<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Annual (KEPHIS register + KALRO releases)</div></div>';

  } else if(mod==='planrec'){
    var io=IOVSOC[d.id];
    var sp=SPI[d.id]||{};
    var pw=PEST_WATCH[d.id]||{};
    var dl=DEALERS[d.id]||{total:0};
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(99,102,241,.15)">📋</div><h3>Plan + Outcome — '+d.n+'<span class="cad-badge cad-ANNUAL" title="Recommended input package + expected yield + risk-adjusted scenarios">Per season</span></h3></div>';
    html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">Recommended input package + expected outcome + risk scenarios. Per hectare AND per acre. Includes Pula insurance recommendation. Plan summary copyable for extension officer.</div>';
    if(!io){
      html+='<div style="padding:12px;text-align:center;color:var(--t3);font-size:10px;background:var(--bg);border-radius:6px;border:1px solid var(--bd)">No plan data for '+d.n+'.</div>';
    } else {
      var hectaresPerAcre=0.4047;
      var output_ha=io.yield_tHa*io.price_kshT;
      var margin_ha=output_ha-io.input_kshHa;
      var roi=output_ha/io.input_kshHa;
      var roiCol=roi>=2.5?'var(--gn)':roi>=1.8?'var(--cy)':roi>=1.2?'var(--or)':'var(--rd)';
      
      // Hero
      html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(99,102,241,0.08),rgba(34,197,94,0.06));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
      html+='<div style="font-size:24px;font-weight:900;color:'+roiCol+'">KSh '+(margin_ha/1000).toFixed(0)+'k</div>';
      html+='<div style="flex:1"><div style="font-size:11px;font-weight:700">Net margin per hectare</div>';
      html+='<div style="font-size:9px;color:var(--t3)">'+io.primary_crop+' · ROI '+roi.toFixed(1)+'x · KSh '+(margin_ha*hectaresPerAcre/1000).toFixed(0)+'k/acre</div></div></div>';
      
      // Recommended input package — table
      var dap_market=110, dap_subs=50, can_market=90, can_subs=40;
      var seed_kshKg=(io.primary_crop==='maize')?260:(io.primary_crop==='wheat')?75:(io.primary_crop==='rice')?180:300;
      var fert_dap_kg=Math.round(io.fert_kg_ha*0.55);
      var fert_can_kg=Math.round(io.fert_kg_ha*0.45);
      var seed_cost=io.seed_kg_ha*seed_kshKg;
      var dap_cost_market=fert_dap_kg*dap_market;
      var dap_cost_subs=fert_dap_kg*dap_subs;
      var can_cost_market=fert_can_kg*can_market;
      var can_cost_subs=fert_can_kg*can_subs;
      var labour_cost=io.labour_days*350;
      var pest_cost=4500;
      
      html+='<div class="sh">Recommended input package per hectare</div>';
      html+='<div style="background:var(--bg);border:1px solid var(--bd);border-radius:5px;padding:0;font-size:9px;margin-bottom:6px;overflow:hidden">';
      html+='<div style="display:grid;grid-template-columns:1.2fr 0.8fr 0.9fr 0.9fr;background:rgba(99,102,241,0.1);padding:4px 6px;font-weight:700;font-size:8px;text-transform:uppercase"><div>Item</div><div>Qty</div><div>Market</div><div>Subsidised</div></div>';
      html+='<div style="display:grid;grid-template-columns:1.2fr 0.8fr 0.9fr 0.9fr;padding:4px 6px;border-top:1px solid var(--bd)"><div>🌱 Seed</div><div>'+io.seed_kg_ha+' kg</div><div>KSh '+seed_cost.toLocaleString()+'</div><div>—</div></div>';
      html+='<div style="display:grid;grid-template-columns:1.2fr 0.8fr 0.9fr 0.9fr;padding:4px 6px;border-top:1px solid var(--bd)"><div>🌾 DAP fert (planting)</div><div>'+fert_dap_kg+' kg</div><div>KSh '+dap_cost_market.toLocaleString()+'</div><div style="color:var(--gn)">KSh '+dap_cost_subs.toLocaleString()+'</div></div>';
      html+='<div style="display:grid;grid-template-columns:1.2fr 0.8fr 0.9fr 0.9fr;padding:4px 6px;border-top:1px solid var(--bd)"><div>🌾 CAN fert (top-dress)</div><div>'+fert_can_kg+' kg</div><div>KSh '+can_cost_market.toLocaleString()+'</div><div style="color:var(--gn)">KSh '+can_cost_subs.toLocaleString()+'</div></div>';
      html+='<div style="display:grid;grid-template-columns:1.2fr 0.8fr 0.9fr 0.9fr;padding:4px 6px;border-top:1px solid var(--bd)"><div>👥 Labour</div><div>'+io.labour_days+' days</div><div>KSh '+labour_cost.toLocaleString()+'</div><div>—</div></div>';
      html+='<div style="display:grid;grid-template-columns:1.2fr 0.8fr 0.9fr 0.9fr;padding:4px 6px;border-top:1px solid var(--bd)"><div>🐛 Pesticide (FAW etc)</div><div>2 sprays</div><div>KSh '+pest_cost.toLocaleString()+'</div><div>—</div></div>';
      var totalMarket=seed_cost+dap_cost_market+can_cost_market+labour_cost+pest_cost;
      var totalSubs=seed_cost+dap_cost_subs+can_cost_subs+labour_cost+pest_cost;
      html+='<div style="display:grid;grid-template-columns:1.2fr 0.8fr 0.9fr 0.9fr;padding:5px 6px;border-top:2px solid var(--bd);background:rgba(99,102,241,0.08);font-weight:700"><div>TOTAL/ha</div><div>—</div><div>KSh '+totalMarket.toLocaleString()+'</div><div style="color:var(--gn)">KSh '+totalSubs.toLocaleString()+'</div></div>';
      // Per-acre version
      html+='<div style="display:grid;grid-template-columns:1.2fr 0.8fr 0.9fr 0.9fr;padding:5px 6px;border-top:1px solid var(--bd);background:rgba(99,102,241,0.04);font-size:8px"><div>Per acre (×0.4)</div><div>—</div><div>KSh '+Math.round(totalMarket*hectaresPerAcre).toLocaleString()+'</div><div style="color:var(--gn)">KSh '+Math.round(totalSubs*hectaresPerAcre).toLocaleString()+'</div></div>';
      html+='</div>';
      
      // Expected outcome
      html+='<div class="sh">Expected outcome</div>';
      html+='<div style="background:var(--bg);border:1px solid var(--bd);border-radius:5px;padding:6px;font-size:9px;margin-bottom:6px;line-height:1.7">';
      html+='<div>📈 <b>Yield:</b> '+io.yield_tHa+' t/ha (national avg '+io.national_yield+') · '+(io.yield_tHa*hectaresPerAcre).toFixed(2)+' t/acre</div>';
      html+='<div>💰 <b>Output value:</b> KSh '+(output_ha/1000).toFixed(0)+'k/ha (KAMIS '+io.primary_crop+' KSh '+(io.price_kshT/1000).toFixed(0)+'k/t) · KSh '+(output_ha*hectaresPerAcre/1000).toFixed(0)+'k/acre</div>';
      html+='<div style="color:var(--gn);font-weight:700">📊 <b>Net margin:</b> KSh '+(margin_ha/1000).toFixed(0)+'k/ha · KSh '+(margin_ha*hectaresPerAcre/1000).toFixed(0)+'k/acre</div>';
      html+='</div>';
      
      // Risk-adjusted scenarios
      html+='<div class="sh">Risk-adjusted outcome scenarios</div>';
      var goodMargin=margin_ha*1.25;
      var droughtMargin=margin_ha*0.45;
      var fawMargin=margin_ha*0.30;
      html+='<div style="background:var(--bg);border:1px solid var(--bd);border-radius:5px;padding:0;font-size:9px;margin-bottom:6px;overflow:hidden">';
      html+='<div style="display:grid;grid-template-columns:1.5fr 1fr 1fr;padding:4px 6px;background:rgba(99,102,241,0.1);font-weight:700;font-size:8px;text-transform:uppercase"><div>Scenario</div><div>Margin/ha</div><div>Margin/acre</div></div>';
      html+='<div style="display:grid;grid-template-columns:1.5fr 1fr 1fr;padding:4px 6px;border-top:1px solid var(--bd)"><div>☀️ Good rains (SPI &gt;0)</div><div style="color:var(--gn)">KSh '+(goodMargin/1000).toFixed(0)+'k</div><div>KSh '+(goodMargin*hectaresPerAcre/1000).toFixed(0)+'k</div></div>';
      html+='<div style="display:grid;grid-template-columns:1.5fr 1fr 1fr;padding:4px 6px;border-top:1px solid var(--bd)"><div>☁️ Average year</div><div style="color:var(--cy)">KSh '+(margin_ha/1000).toFixed(0)+'k</div><div>KSh '+(margin_ha*hectaresPerAcre/1000).toFixed(0)+'k</div></div>';
      html+='<div style="display:grid;grid-template-columns:1.5fr 1fr 1fr;padding:4px 6px;border-top:1px solid var(--bd)"><div>🌧️ Drought (SPI &lt;-1)</div><div style="color:var(--or)">KSh '+(droughtMargin/1000).toFixed(0)+'k</div><div>KSh '+(droughtMargin*hectaresPerAcre/1000).toFixed(0)+'k</div></div>';
      html+='<div style="display:grid;grid-template-columns:1.5fr 1fr 1fr;padding:4px 6px;border-top:1px solid var(--bd)"><div>🐛 FAW outbreak</div><div style="color:var(--rd)">KSh '+(fawMargin/1000).toFixed(0)+'k</div><div>KSh '+(fawMargin*hectaresPerAcre/1000).toFixed(0)+'k</div></div>';
      html+='</div>';
      
      // SPI/risk callout
      var riskCallout='';
      if(sp.spi_12<-1)riskCallout='⚠ Current SPI '+sp.spi_12.toFixed(1)+' indicates drought conditions — drought scenario more likely. Consider drought-tolerant variety from Seed Variety Pick.';
      else if(pw.faw_pressure>=4)riskCallout='⚠ FAW pressure HIGH in '+d.n+' (Pest Watch shows level '+pw.faw_pressure+'/5) — budget extra spray + consider Bt-FAW variety like PH04.';
      else if(sp.spi_12>1)riskCallout='✓ Above-average rainfall (SPI +'+sp.spi_12.toFixed(1)+') — favourable conditions, consider higher fert rate.';
      if(riskCallout){
        html+='<div style="padding:6px;background:rgba(245,158,11,0.08);border-radius:5px;border:1px solid var(--or);font-size:9px;margin-bottom:6px">'+riskCallout+'</div>';
      }
      
      // Insurance recommendation
      var pula_kshHa=Math.round(io.input_kshHa*0.022); // ~2.2% of input cost
      html+='<div class="sh">Risk transfer recommendation</div>';
      html+='<div style="padding:6px;background:rgba(124,58,237,0.05);border-radius:5px;border:1px solid var(--pp);font-size:9px;margin-bottom:6px;line-height:1.6">';
      html+='<b>Pula parametric weather cover</b> — KSh '+pula_kshHa+'/ha (KSh '+Math.round(pula_kshHa*hectaresPerAcre)+'/acre)<br>';
      html+='Payout triggered if SPI &lt;-1.5 in growing season. Embedded with seed/fertilizer purchase via partner agro-dealers.<br>';
      html+='<span style="font-size:7px;color:var(--t3)">Pula covers 15.4M+ farmers across 22 countries · 800k Zambian farmers got $29M payout 2024 (Africa\'s largest)</span>';
      html+='</div>';
      
      // Plan summary (copyable)
      html+='<div class="sh">📄 Plan summary (copy for extension officer)</div>';
      html+='<div style="padding:6px;background:#0f172a;color:#e2e8f0;border-radius:5px;border:1px solid var(--bd);font-size:8px;font-family:monospace;line-height:1.5;white-space:pre-wrap;margin-bottom:6px">';
      html+='SHAMBAMAP PLAN — '+d.n.toUpperCase()+' / '+io.primary_crop.toUpperCase()+'\n';
      html+='─────────────────────────────────────\n';
      html+='SEED:    '+io.seed_kg_ha+' kg/ha (KSh '+seed_cost.toLocaleString()+')\n';
      html+='DAP:     '+fert_dap_kg+' kg/ha @ planting (KSh '+dap_cost_subs.toLocaleString()+' subsidised)\n';
      html+='CAN:     '+fert_can_kg+' kg/ha @ 4-6w (KSh '+can_cost_subs.toLocaleString()+' subsidised)\n';
      html+='LABOUR:  '+io.labour_days+' days/ha (KSh '+labour_cost.toLocaleString()+')\n';
      html+='PEST:    2 sprays/ha (KSh '+pest_cost.toLocaleString()+')\n';
      html+='INSURE:  Pula parametric KSh '+pula_kshHa+'/ha\n';
      html+='─────────────────────────────────────\n';
      html+='TOTAL/ha:        KSh '+totalSubs.toLocaleString()+' (subsidised)\n';
      html+='TOTAL/acre:      KSh '+Math.round(totalSubs*hectaresPerAcre).toLocaleString()+'\n';
      html+='EXPECTED YIELD:  '+io.yield_tHa+' t/ha · '+(io.yield_tHa*hectaresPerAcre).toFixed(2)+' t/acre\n';
      html+='EXPECTED OUTPUT: KSh '+(output_ha/1000).toFixed(0)+'k/ha · KSh '+(output_ha*hectaresPerAcre/1000).toFixed(0)+'k/acre\n';
      html+='NET MARGIN:      KSh '+(margin_ha/1000).toFixed(0)+'k/ha · KSh '+(margin_ha*hectaresPerAcre/1000).toFixed(0)+'k/acre\n';
      html+='ROI:             '+roi.toFixed(1)+'x\n';
      html+='─────────────────────────────────────\n';
      html+='E-VOUCHER:  *616*3# (KIAMIS) for subsidy redemption\n';
      html+='SEED VERIFY: SMS code on bag to 1393 (KEPHIS)\n';
      html+='DEALERS:    '+(dl.total||0).toLocaleString()+' in '+d.n+'\n';
      html+='</div>';
    }
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Sources: NCPB e-voucher subsidised prices · KAMIS market prices · Tegemeo Institute farm-economics panels · Pula Advisors parametric insurance · KEPHIS variety register · KALRO agronomy protocols<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Per season (planting recommendations updated each long-rains/short-rains)</div></div>';

  } else if(mod==='kiamis'){
    var k=KIAMIS[d.id]||{tot_hh:0,registered:0,evoucher_pct:0};
    var coverage=k.tot_hh?Math.round(k.registered/k.tot_hh*100):0;
    var natCoverage=68; // ~7.1M / ~10.4M total farmer HH ≈ 68%
    var col=coverage>=80?'var(--gn)':coverage>=60?'var(--or)':'var(--rd)';
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(99,102,241,.15)">🪪</div><h3>KIAMIS Coverage — '+d.n+'<span class="cad-badge cad-ANNUAL" title="MoALD KIAMIS portal *616*3#">Continuous reg</span></h3></div>';
    html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:var(--bg);border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:32px;font-weight:900;color:'+col+'">'+coverage+'%</div>';
    html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">Farmers registered on KIAMIS</div>';
    html+='<div style="font-size:11px;font-weight:700">'+k.registered.toLocaleString()+' / '+k.tot_hh.toLocaleString()+' HH</div>';
    html+='<div style="font-size:8px;color:var(--t3)">National avg: '+natCoverage+'% • Gap: '+(coverage-natCoverage>=0?'+':'')+(coverage-natCoverage)+'pp</div></div>';
    if(k.lead_county)html+='<span style="padding:3px 6px;background:rgba(16,185,129,.1);color:var(--gn);font-size:8px;font-weight:700;border-radius:4px;border:1px solid var(--gn)">⭐ LEAD</span>';
    html+='</div>';
    html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:6px">';
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">E-Voucher redeemed</div><div style="font-size:18px;font-weight:800;color:'+(k.evoucher_pct>=60?'var(--gn)':k.evoucher_pct>=40?'var(--or)':'var(--rd)')+'">'+k.evoucher_pct+'%</div></div>';
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Unregistered HH</div><div style="font-size:18px;font-weight:800;color:var(--rd)">'+(k.tot_hh-k.registered).toLocaleString()+'</div></div>';
    html+='</div>';
    var hint=coverage<50?'⚠ Outreach gap — deploy mobile clinics + Sub-County officers; missing >50% of farming HH from subsidy access':coverage<70?'➜ Mid-tier coverage — focus on hard-to-reach wards; SACCO partnerships':'✓ Strong coverage — focus shifts to data quality, e-voucher redemption';
    html+='<div style="padding:6px;background:rgba(99,102,241,.05);border-radius:5px;border:1px solid var(--bl);font-size:9px;color:var(--t2)"><b>Action:</b> '+hint+'</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: KIAMIS portal (Ministry of Agriculture & Livestock Development) • USSD *616*3#<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Continuous registration</div></div>';

  } else if(mod==='beta'){
    var b=BETA[d.id]||{caip:'planned',caip_pct:0,subsidy_kshM:0,pending_M:0,hustler_M:0};
    // Composite score: 40% CAIP progress + 30% subsidy/HH + 20% pending bills (inverted) + 10% hustler reach
    var k2=KIAMIS[d.id]||{tot_hh:1};
    var subsidyPerHH=k2.tot_hh?Math.round(b.subsidy_kshM*1000000/k2.tot_hh):0;
    var subsidyScore=Math.min(100,subsidyPerHH/30); // KSh 3000/HH = 100
    var pendingScore=Math.max(0,100-b.pending_M/4); // 400M = 0, 0M = 100
    var hustlerScore=Math.min(100,b.hustler_M/10); // 1000M = 100
    var betaScore=Math.round(b.caip_pct*0.4+subsidyScore*0.3+pendingScore*0.2+hustlerScore*0.1);
    var bcol=betaScore>=70?'var(--gn)':betaScore>=50?'var(--or)':'var(--rd)';
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(245,158,11,.15)">🏗</div><h3>BETA Delivery Score — '+d.n+'<span class="cad-badge cad-MONTHLY" title="PDU BETA delivery review">Quarterly</span></h3></div>';
    html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(16,185,129,0.08),rgba(245,158,11,0.08));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:36px;font-weight:900;color:'+bcol+'">'+betaScore+'</div>';
    html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">/100 BETA Pillar Delivery</div>';
    var statusLbl=betaScore>=70?'On track':betaScore>=50?'At risk':'Behind';
    html+='<div style="font-size:11px;font-weight:700;color:'+bcol+'">'+statusLbl+'</div></div></div>';
    var caipCol={planned:'var(--rd)',construction:'var(--or)',operational:'var(--gn)'}[b.caip];
    html+='<div class="sh">CAIP — County Aggregation & Industrial Park</div>';
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);margin-bottom:6px;display:flex;align-items:center;gap:6px">';
    html+='<div style="flex:1"><div style="font-size:11px;font-weight:700;color:'+caipCol+'">'+b.caip.toUpperCase()+'</div>';
    html+='<div style="height:5px;background:var(--s2);border-radius:3px;margin-top:3px;overflow:hidden"><div style="height:100%;width:'+b.caip_pct+'%;background:'+caipCol+'"></div></div></div>';
    html+='<div style="font-size:18px;font-weight:800;color:'+caipCol+'">'+b.caip_pct+'%</div></div>';
    html+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-bottom:6px">';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:7px;color:var(--t3)">Subsidy disbursed</div><div style="font-size:13px;font-weight:800;color:var(--gn)">KSh '+b.subsidy_kshM+'M</div><div style="font-size:7px;color:var(--t3)">≈ '+subsidyPerHH+'/HH</div></div>';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:7px;color:var(--t3)">Pending bills</div><div style="font-size:13px;font-weight:800;color:'+(b.pending_M>200?'var(--rd)':b.pending_M>100?'var(--or)':'var(--gn)')+'">KSh '+b.pending_M+'M</div><div style="font-size:7px;color:var(--t3)">Treasury risk</div></div>';
    html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:7px;color:var(--t3)">Hustler Fund</div><div style="font-size:13px;font-weight:800;color:var(--bl)">KSh '+b.hustler_M+'M</div><div style="font-size:7px;color:var(--t3)">Disbursed</div></div>';
    html+='</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: Treasury QEBR FY24/25 • State Dept Crops monthly briefs • CRA County Reports<div style="margin-top:3px;font-size:9px;color:#4f46e5;font-weight:600">◑ Refresh: Quarterly</div></div>';

  } else if(mod==='foodsec'){
    var f=FOODSEC[d.id]||{ipc:1,stock_days:120,price_vol:0.15,stress_pop_pct:5};
    // Food Security Index 0-100: lower IPC + more stocks + lower volatility = higher score
    var ipcScore=Math.max(0,100-(f.ipc-1)*25); // IPC 1=100, 5=0
    var stockScore=Math.min(100,f.stock_days/3); // 300 days=100
    var volScore=Math.max(0,100-f.price_vol*200); // 0.5 vol=0, 0=100
    var fsi=Math.round(ipcScore*0.4+stockScore*0.35+volScore*0.25);
    var fcol=fsi>=70?'var(--gn)':fsi>=50?'var(--or)':'var(--rd)';
    var ipcLbl={1:'Minimal',2:'Stressed',3:'Crisis',4:'Emergency',5:'Famine'}[f.ipc];
    var ipcCol={1:'var(--gn)',2:'var(--or)',3:'#dc2626',4:'#991b1b',5:'#7f1d1d'}[f.ipc];
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(220,38,38,.15)">🌾</div><h3>Food Security Index — '+d.n+'<span class="cad-badge cad-MONTHLY" title="KFSSG Long/Short Rains assessments">Bi-annual</span></h3></div>';
    html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:var(--bg);border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:36px;font-weight:900;color:'+fcol+'">'+fsi+'</div>';
    html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">/100 Composite (KFSSG/IPC weighted)</div>';
    html+='<div style="font-size:11px;font-weight:700;color:'+ipcCol+'">IPC Phase '+f.ipc+' — '+ipcLbl+'</div></div></div>';
    html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:6px">';
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Maize stock days</div><div style="font-size:18px;font-weight:800;color:'+(f.stock_days>=180?'var(--gn)':f.stock_days>=90?'var(--or)':'var(--rd)')+'">'+f.stock_days+'</div><div style="font-size:7px;color:var(--t3)">'+(f.stock_days<60?'⚠ <60 days = procurement urgent':f.stock_days<90?'Watch list':'Adequate')+'</div></div>';
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Price volatility (CV)</div><div style="font-size:18px;font-weight:800;color:'+(f.price_vol<=0.12?'var(--gn)':f.price_vol<=0.20?'var(--or)':'var(--rd)')+'">'+(f.price_vol*100).toFixed(0)+'%</div><div style="font-size:7px;color:var(--t3)">vs 5-yr avg</div></div>';
    html+='</div>';
    html+='<div style="padding:6px;background:rgba(220,38,38,0.05);border-radius:5px;border:1px solid var(--rd);margin-bottom:6px">';
    html+='<div style="font-size:8px;color:var(--t3)">Stressed/crisis population</div>';
    html+='<div style="font-size:16px;font-weight:800;color:'+(f.stress_pop_pct>20?'var(--rd)':f.stress_pop_pct>10?'var(--or)':'var(--gn)')+'">'+f.stress_pop_pct+'% of pop</div></div>';
    var ndma=NDMA_PHASE[d.id];
    if(ndma&&ndma!=='N/A')html+='<div style="font-size:9px;color:var(--t2);margin-top:4px"><b>NDMA drought phase:</b> '+ndma+'</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: KFSSG/SRA-LRA Reports • IPC Acute Food Insecurity • NCPB stocks • KAMIS volatility<div style="margin-top:3px;font-size:9px;color:#4f46e5;font-weight:600">◑ Refresh: Bi-annual + monthly NDMA</div></div>';

  } else if(mod==='eudr'){
    var e=EUDR[d.id]||{is_coffee:false};
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(120,53,15,.15)">☕</div><h3>EUDR Coffee Readiness — '+d.n+'<span class="cad-badge cad-ANNUAL" title="AFA Multi-Agency TWG geo-mapping progress">Quarterly</span></h3></div>';
    html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">EU Deforestation Regulation (2023/1115) — coffee compliance tracker. Kenya = low-risk country (EU benchmark May 2025). Deadlines: Dec 30 2026 (large) · Jun 30 2027 (SME).</div>';
    if(!e.is_coffee){
      html+='<div style="padding:12px;text-align:center;color:var(--t3);font-size:10px;background:var(--bg);border-radius:6px;border:1px solid var(--bd)">';
      html+='<b>Not a coffee-producing county.</b><br><br>';
      html+='<span style="font-size:9px">EUDR coffee compliance covers 8 counties: <b>Kirinyaga, Nyeri, Kiambu, Murang\'a, Embu, Meru, Kisii, Kericho</b>.<br>National Multi-Agency TWG led by AFA includes 10 agencies. As of May 2025, ~30% of coffee farms mapped (16 of 33 counties).</span>';
      html+='</div>';
    } else {
      // Honest readiness composite (4 components, weighted by EU policy priorities)
      // 1. Geo-tag completeness (50%) — the binding compliance requirement
      // 2. Deforestation hard-test (30%) — % forest loss within coffee zones, inverse
      // 3. EUDR-ready coop concentration (15%) — share of coops verified
      // 4. Buyer engagement (5%) — qualitative tier
      var defScore=Math.max(0,100-e.forest_loss_pct_in_coffee*2.5); // 0% loss=100, 40% loss=0
      var coopReady=e.cooperatives>0?Math.round(e.cooperatives_eudr_ready/e.cooperatives*100):0;
      var buyerScore=e.buyer_engagement.indexOf('Volcafe')>=0||e.buyer_engagement.indexOf('Nespresso')>=0?80:e.buyer_engagement.indexOf('Sucafina')>=0||e.buyer_engagement.indexOf('ECOM')>=0?60:e.buyer_engagement.indexOf('Limited')>=0?20:40;
      var readiness=Math.round(e.geotag_pct*0.50+defScore*0.30+coopReady*0.15+buyerScore*0.05);
      var tier=readiness>=70?'TIER 1 — On track':readiness>=55?'TIER 2 — Moderate':readiness>=40?'TIER 3 — At risk':'CRITICAL — Likely exclusion';
      var tcol=readiness>=70?'var(--gn)':readiness>=55?'var(--cy)':readiness>=40?'var(--or)':'var(--rd)';
      // Hero card
      html+='<div style="display:flex;align-items:center;gap:8px;padding:8px;background:linear-gradient(135deg,rgba(120,53,15,0.08),rgba(245,158,11,0.06));border-radius:6px;border:1px solid var(--bd);margin-bottom:6px">';
      html+='<div style="font-size:36px;font-weight:900;color:'+tcol+'">'+readiness+'</div>';
      html+='<div style="flex:1"><div style="font-size:9px;color:var(--t3)">/100 EUDR Readiness · As of May 2026</div>';
      html+='<div style="font-size:11px;font-weight:800;color:'+tcol+'">'+tier+'</div>';
      html+='<div style="font-size:8px;color:var(--t3);margin-top:2px">'+e.farmers_K.toLocaleString()+'k farmers · '+e.cooperatives+' coops · '+e.clean_kg_M_2024+'M kg clean</div></div></div>';
      // EU-bound volume callout (the universe at risk)
      var euBoundKg=Math.round(e.clean_kg_M_2024*e.eu_share_pct/100*100)/100;
      var euValueKshM=Math.round(euBoundKg*1000*78); // ~KSh 78/kg avg producer price
      html+='<div style="padding:6px;background:rgba(220,38,38,0.04);border-radius:5px;border:1px solid var(--rd);font-size:9px;margin-bottom:6px">';
      html+='<b>⚠ At risk if non-compliant:</b> '+euBoundKg+'M kg clean coffee → EU annually ('+e.eu_share_pct+'% of '+d.n+' production). Estimated farm-gate value ~KSh '+(euValueKshM/1000).toFixed(1)+'B at risk.';
      html+='</div>';
      // Three component cards: geotag, deforest, coops
      html+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-bottom:6px">';
      var gtCol=e.geotag_pct>=70?'var(--gn)':e.geotag_pct>=50?'var(--or)':'var(--rd)';
      html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Plots geo-tagged</div><div style="font-size:18px;font-weight:800;color:'+gtCol+'">'+e.geotag_pct+'%</div><div style="font-size:7px;color:var(--gn)">+'+e.geotag_velocity+'pp/qtr</div></div>';
      var dfCol=e.forest_loss_pct_in_coffee<=10?'var(--gn)':e.forest_loss_pct_in_coffee<=20?'var(--or)':'var(--rd)';
      html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Forest loss in coffee</div><div style="font-size:18px;font-weight:800;color:'+dfCol+'">'+e.forest_loss_pct_in_coffee+'%</div><div style="font-size:7px;color:var(--t3)">'+e.forest_loss_ha_post2020+' ha post-2020</div></div>';
      var crCol=coopReady>=25?'var(--gn)':coopReady>=15?'var(--or)':'var(--rd)';
      html+='<div style="padding:5px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Coops EUDR-ready</div><div style="font-size:18px;font-weight:800;color:'+crCol+'">'+e.cooperatives_eudr_ready+'/'+e.cooperatives+'</div><div style="font-size:7px;color:var(--t3)">'+coopReady+'% verified</div></div>';
      html+='</div>';
      // Operational stack (partnership + buyer + policy lead)
      html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);font-size:9px;margin-bottom:6px;line-height:1.5">';
      html+='<div><b>Tech/donor stack:</b> '+e.partnership+'</div>';
      html+='<div><b>Buyer engagement:</b> '+e.buyer_engagement+'</div>';
      html+='<div><b>Policy lead:</b> '+e.policy_lead+'</div>';
      html+='</div>';
      // Trajectory projection (will geotag hit 100% by deadline?)
      var qtrsToDeadline=3; // ~Dec 2026 ≈ 3 quarters from May 2026
      var projGeotag=Math.min(100,e.geotag_pct+e.geotag_velocity*qtrsToDeadline);
      var willMakeIt=projGeotag>=95;
      html+='<div style="padding:6px;background:'+(willMakeIt?'rgba(16,185,129,0.05)':'rgba(245,158,11,0.05)')+';border-radius:5px;border:1px solid '+(willMakeIt?'var(--gn)':'var(--or)')+';font-size:9px;margin-bottom:6px">';
      html+='<b>Trajectory to Dec 30, 2026 deadline:</b> At current pace (+'+e.geotag_velocity+'pp/qtr × 3 qtrs), projected geo-tag = '+projGeotag+'%. ';
      html+=willMakeIt?'<span style="color:var(--gn)"><b>Likely to meet large-operator deadline.</b></span>':'<span style="color:var(--or)"><b>Acceleration needed</b> — current pace insufficient. Push partner deployment.</span>';
      html+='</div>';
      // Action recommendation
      var action='';
      if(readiness<40)action='CRITICAL — TWG urgent visit. Forest-loss audit + emergency partner deployment. Risk: full EU exclusion of '+d.n+' coffee Dec 2026.';
      else if(readiness<55)action='Push geo-tagging cooperative-by-cooperative. Forest-loss hotspot review. Engage Volcafe/Sucafina/Nespresso AAA for buyer pull.';
      else if(readiness<70)action='Sustain pace. Verify EUDR-ready coops with KEPHIS. Convert moderate coops to verified. Onboard remaining smallholders.';
      else action='County is on track. Focus on documentation quality + due-diligence chain. Position as buyer-priority county for premium EUDR-compliant lots.';
      html+='<div style="padding:6px;background:rgba(245,158,11,0.05);border-radius:5px;border:1px solid var(--or);font-size:9px"><b>Action:</b> '+action+'</div>';
    }
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Sources: AFA EUDR Multi-Agency TWG (MoALD/AFA/SDA/Cooperatives/KFS/KSA/DRSRS/KALRO/KNBS/ODPC) · Coffee Directorate · NKPCU first EUDR shipment Mar 2026 · Bioversity-CIAT + Global Coffee Platform · TechnoServe TerraTrac · Dimitra-NACCU · Hansen/UMD GFW for forest loss<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: AFA quarterly mapping reports + GFW alerts (live)</div></div>';

  } else if(mod==='dairy'){
    var dy=DAIRY[d.id]||{milk_ML:0,cows_K:0,formal_pct:0,anitrac_pct:0,processor:'N/A'};
    var yieldPerCow=dy.cows_K?(dy.milk_ML*1000/dy.cows_K).toFixed(1):'0';
    var natlYield=10.1; // L/cow/day national
    var dailyYield=dy.cows_K?(dy.milk_ML*1000/dy.cows_K/365).toFixed(1):'0';
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(59,130,246,.15)">🥛</div><h3>Dairy & Livestock — '+d.n+'<span class="cad-badge cad-ANNUAL" title="Kenya Dairy Board bulletins">Quarterly</span></h3></div>';
    html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:6px">';
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Annual milk production</div><div style="font-size:18px;font-weight:800;color:var(--bl)">'+dy.milk_ML+'M L</div><div style="font-size:7px;color:var(--t3)">/yr</div></div>';
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Dairy cows</div><div style="font-size:18px;font-weight:800">'+dy.cows_K+'K</div><div style="font-size:7px;color:var(--t3)">heads</div></div>';
    html+='</div>';
    var ycol=dailyYield>=12?'var(--gn)':dailyYield>=8?'var(--or)':'var(--rd)';
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd);margin-bottom:6px">';
    html+='<div style="font-size:8px;color:var(--t3)">Yield per cow per day</div>';
    html+='<div style="display:flex;align-items:center;gap:6px"><div style="font-size:18px;font-weight:800;color:'+ycol+'">'+dailyYield+' L</div>';
    html+='<div style="font-size:8px;color:var(--t3)">vs '+natlYield+' national avg • '+(dailyYield-natlYield>=0?'+':'')+(dailyYield-natlYield).toFixed(1)+' L gap</div></div></div>';
    html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:6px">';
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">Formal sector</div><div style="font-size:16px;font-weight:800;color:'+(dy.formal_pct>=30?'var(--gn)':dy.formal_pct>=15?'var(--or)':'var(--rd)')+'">'+dy.formal_pct+'%</div><div style="font-size:7px;color:var(--t3)">to processors</div></div>';
    html+='<div style="padding:6px;background:var(--bg);border-radius:5px;border:1px solid var(--bd)"><div style="font-size:8px;color:var(--t3)">ANITRAC tagged</div><div style="font-size:16px;font-weight:800;color:'+(dy.anitrac_pct>=20?'var(--gn)':dy.anitrac_pct>=10?'var(--or)':'var(--rd)')+'">'+dy.anitrac_pct+'%</div><div style="font-size:7px;color:var(--t3)">since May 2025</div></div>';
    html+='</div>';
    html+='<div style="padding:5px;background:rgba(59,130,246,0.05);border-radius:5px;border:1px solid var(--bl);font-size:9px"><b>Processor:</b> '+dy.processor+'</div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Source: Kenya Dairy Board (KDB) • State Dept Livestock • ANITRAC platform<div style="margin-top:3px;font-size:9px;color:#d97706;font-weight:600">○ Refresh: Quarterly</div></div>';

  } else if(mod==='league'){
    // National League Table — rank all 25 counties on composite scores
    html+='<div class="sc"><div class="mp-title"><div class="mp-icon" style="background:rgba(234,88,12,.15)">🏆</div><h3>National League Table — Government Priority Scores<span class="cad-badge cad-REF" title="Multi-indicator ranking">Composite</span></h3></div>';
    html+='<div style="font-size:9px;color:var(--t3);margin-bottom:6px">Cabinet Secretary view • Ranked by composite delivery score</div>';
    // Build composite per county
    var rows=D.map(function(dd){
      var k3=KIAMIS[dd.id]||{tot_hh:1,registered:0,evoucher_pct:0};
      var coverage=k3.tot_hh?Math.round(k3.registered/k3.tot_hh*100):0;
      var b3=BETA[dd.id]||{caip_pct:0,subsidy_kshM:0,pending_M:0,hustler_M:0};
      var subsidyPerHH=k3.tot_hh?Math.round(b3.subsidy_kshM*1000000/k3.tot_hh):0;
      var subsidyScore=Math.min(100,subsidyPerHH/30);
      var pendingScore=Math.max(0,100-b3.pending_M/4);
      var hustlerScore=Math.min(100,b3.hustler_M/10);
      var betaScore=Math.round(b3.caip_pct*0.4+subsidyScore*0.3+pendingScore*0.2+hustlerScore*0.1);
      var f3=FOODSEC[dd.id]||{ipc:1,stock_days:120,price_vol:0.15};
      var fsi=Math.round(Math.max(0,100-(f3.ipc-1)*25)*0.4+Math.min(100,f3.stock_days/3)*0.35+Math.max(0,100-f3.price_vol*200)*0.25);
      // Overall composite: 33% KIAMIS + 33% BETA + 34% FoodSec
      var overall=Math.round(coverage*0.33+betaScore*0.33+fsi*0.34);
      return {id:dd.id,n:dd.n,kiamis:coverage,beta:betaScore,fsi:fsi,overall:overall};
    });
    rows.sort(function(a,b){return b.overall-a.overall});
    html+='<div style="overflow-y:auto;max-height:380px"><table style="width:100%;font-size:9px;border-collapse:collapse">';
    html+='<thead style="position:sticky;top:0;background:var(--s2);z-index:1"><tr style="border-bottom:2px solid var(--bd)">';
    html+='<th style="padding:5px;text-align:left;font-size:8px;color:var(--t3)">#</th>';
    html+='<th style="padding:5px;text-align:left;font-size:8px;color:var(--t3)">County</th>';
    html+='<th style="padding:5px;text-align:right;font-size:8px;color:var(--t3)" title="KIAMIS Coverage %">KIAMIS</th>';
    html+='<th style="padding:5px;text-align:right;font-size:8px;color:var(--t3)" title="BETA Delivery /100">BETA</th>';
    html+='<th style="padding:5px;text-align:right;font-size:8px;color:var(--t3)" title="Food Security Index /100">FSI</th>';
    html+='<th style="padding:5px;text-align:right;font-size:8px;color:var(--t3)">Score</th>';
    html+='</tr></thead><tbody>';
    rows.forEach(function(rw,i){
      var rcol=rw.overall>=65?'var(--gn)':rw.overall>=50?'var(--or)':'var(--rd)';
      var medal=i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1);
      var bg=rw.id===d.id?'rgba(99,102,241,0.08)':(i%2?'var(--bg)':'transparent');
      html+='<tr style="background:'+bg+';cursor:pointer;border-bottom:1px solid var(--bd)" onclick="setDistrict(\''+rw.id+'\')">';
      html+='<td style="padding:4px 5px;font-weight:700">'+medal+'</td>';
      html+='<td style="padding:4px 5px;font-weight:'+(rw.id===d.id?'800':'600')+'">'+rw.n+'</td>';
      html+='<td style="padding:4px 5px;text-align:right;color:'+(rw.kiamis>=70?'var(--gn)':rw.kiamis>=50?'var(--or)':'var(--rd)')+'">'+rw.kiamis+'%</td>';
      html+='<td style="padding:4px 5px;text-align:right;color:'+(rw.beta>=70?'var(--gn)':rw.beta>=50?'var(--or)':'var(--rd)')+'">'+rw.beta+'</td>';
      html+='<td style="padding:4px 5px;text-align:right;color:'+(rw.fsi>=70?'var(--gn)':rw.fsi>=50?'var(--or)':'var(--rd)')+'">'+rw.fsi+'</td>';
      html+='<td style="padding:4px 5px;text-align:right;font-weight:800;color:'+rcol+'">'+rw.overall+'</td>';
      html+='</tr>';
    });
    html+='</tbody></table></div>';
    html+='<div style="margin-top:6px;font-size:9px;color:var(--t3)">Composite: 33% KIAMIS + 33% BETA Delivery + 34% Food Security • Click row to navigate</div></div>';
  }

  // Variety recommendations for seed & ksc modules
  var recs=getRecommendations(d.id);
  if(recs.length>0 && (mod==='seed'||mod==='ksc')){
    html+='<div class="sc"><div class="sh">Recommended Varieties — '+d.n+'</div>';
    recs.slice(0,3).forEach(function(rec){
      var v=rec.variety;var cropIc={maize:'🌽',wheat:'🌾',beans:'🫘',sorghum:'🌾'}[rec.crop]||'🌱';
      html+='<div class="ic" style="border-left:3px solid var(--gn)"><div style="display:flex;align-items:center;gap:4px"><span>'+cropIc+'</span><div style="flex:1"><span style="font-weight:700">'+v.name+'</span> <span style="font-size:8px;color:var(--t3)">'+v.year+'</span></div><span style="font-weight:800;color:var(--gn)">'+v.yield.avg+'kg/ha</span></div>';
      html+='<div style="font-size:9px;color:var(--t2);margin-top:2px">'+v.traits[0]+'</div>';
      html+='<div style="font-size:9px;color:var(--or);margin-top:1px">🔄 Replaces: '+v.replace+'</div></div>';
    });
    html+='</div>';
    // KEPHIS National Variety List section — full catalogue for current crop
    var kCrop=document.getElementById('sCrop').value;
    var kList=KEPHIS_VARIETIES[kCrop];
    if(kList && kList.length>0){
      html+='<div class="sc"><div class="sh" style="display:flex;align-items:center;justify-content:space-between"><span>KEPHIS National Variety List — '+cn+'</span><span style="font-size:7px;font-weight:700;padding:2px 5px;border-radius:3px;color:var(--pp);background:rgba(168,85,247,.1)">2024 EDITION</span></div>';
      html+='<div style="font-size:8px;color:var(--t3);margin-bottom:4px">'+kList.length+' registered cultivars · breeder · year · agro-ecological zone · yield potential · traits</div>';
      kList.forEach(function(kv){
        var aged=(2026-kv.year)>=20?'var(--rd)':(2026-kv.year)>=10?'var(--or)':'var(--gn)';
        var ageLabel=(2026-kv.year)>=20?'aging':(2026-kv.year)>=10?'mature':'modern';
        html+='<div class="ic" style="border-left:2px solid '+aged+';padding:5px 6px"><div style="display:flex;justify-content:space-between;align-items:center"><div><span style="font-weight:700;font-size:10px">'+kv.name+'</span> <span style="font-size:7px;color:var(--t3)">· '+kv.breeder+' · '+kv.year+'</span></div><span style="font-weight:800;font-size:10px;color:var(--gn)">'+kv.yield+'kg/ha</span></div>';
        html+='<div style="font-size:8px;color:var(--t2);margin-top:2px">'+kv.zone+' · '+(kv.maturity>0?kv.maturity+'d maturity · ':'')+'<span style="color:'+aged+';font-weight:700">'+ageLabel+'</span></div>';
        html+='<div style="font-size:8px;color:var(--cy);margin-top:1px">🏷 '+kv.traits.join(' · ')+'</div></div>';
      });
      html+='<div style="margin-top:4px;font-size:8px;color:var(--t3)">Source: KEPHIS National Crop Variety List 2024 (kephis.go.ke)<div style="margin-top:3px;font-size:9px;color:#475569;font-weight:600">◇ Refresh: Composite</div></div>';
    }
  }

  html+='<div class="sc"><button class="wa-btn" onclick="alert(\'WhatsApp advisory for '+d.n+' — '+mod+' module. In production: sends Swahili message to registered mkulima.\')">📱 Send WhatsApp Advisory — '+d.n+'</button></div>';

  document.getElementById('right').innerHTML=html;
}

function seedPanel(d,r,c){
  var h='<div class="sc"><div class="sg">';
  h+='<div class="st" style="background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.12)"><div class="sv" style="color:'+srrCol(d.srr[c])+'">'+d.srr[c]+'%</div><div class="sl2">'+c+' SRR</div></div>';
  h+='<div class="st" style="background:rgba(99,102,241,.06);border:1px solid rgba(99,102,241,.12)"><div class="sv" style="color:var(--bl)">'+d.vrr+'%</div><div class="sl2">Modern Variety %</div></div></div></div>';
  var crops=[{n:'Maize',v:d.srr.maize,c:'#f97316'},{n:'Wheat',v:d.srr.wheat,c:'#eab308'},{n:'Beans',v:d.srr.beans,c:'#10b981'},{n:'Sorghum',v:d.srr.sorghum,c:'#a78bfa'}];
  h+='<div class="sc"><div class="sh">Crop-wise SRR</div>';
  crops.forEach(function(cr){h+='<div class="cb"><span class="cn">'+cr.n+'</span><div class="ct"><div class="cf" style="width:'+cr.v+'%;background:'+cr.c+'"></div></div><span class="cv" style="color:'+cr.c+'">'+cr.v+'%</span></div>'});
  h+='</div>';
  if(d.sd&&d.sd.length>0){
    h+='<div class="sc"><div class="sh">Nearest Seed Sources</div>';
    d.sd.forEach(function(s){h+='<div style="display:flex;align-items:center;gap:5px;padding:3px 6px;background:var(--bg);border-radius:4px;margin-bottom:2px;border:1px solid var(--bd);font-size:10px"><div style="width:5px;height:5px;border-radius:50%;background:'+s.c+'"></div><span style="flex:1">'+s.n+'</span><span style="color:var(--t3);font-size:9px">'+s.d+'</span></div>'});
    h+='</div>';
  }
  if(d.rc&&d.rc.length>0){
    h+='<div class="sc"><div class="sh">Alerts & Recommendations</div>';
    d.rc.forEach(function(rc){
      var col=rc.t==='w'?'var(--rd)':rc.t==='u'?'var(--or)':'var(--gn)';
      var icon=rc.t==='w'?'⚠':rc.t==='u'?'💡':'✓';
      h+='<div class="ic" style="border-left:3px solid '+col+'">'+icon+' '+rc.m+'</div>';
    });
    h+='</div>';
  }
  return h;
}

// ══════ AI CHATBOT ══════
function toggleAI(){var p=document.getElementById('aiPanel');p.style.display=p.style.display==='none'?'block':'none';
if(p.style.display==='block'&&document.getElementById('aiMessages').innerHTML===''){addAIMsg('bot','🤖 Karibu! Welcome to ShambaMap Kenya AI.\n\nAsk me:\n• "Why is Kitui hybrid adoption so low?"\n• "Best maize variety for Trans Nzoia?"\n• "Long Rains 2026 readiness plan"\n• Question yoyote kwa Swahili au English!')}}
function addAIMsg(who,text){var div=document.getElementById('aiMessages');var bg=who==='bot'?'var(--s2)':'rgba(16,185,129,.15)';var align=who==='bot'?'margin-right:24px':'margin-left:24px';div.innerHTML+='<div style="padding:6px 8px;background:'+bg+';border-radius:6px;margin-bottom:4px;'+align+';font-size:10px;line-height:1.5;color:var(--tx)">'+text.replace(/\n/g,'<br>')+'</div>';div.scrollTop=div.scrollHeight}
function askAI(){var inp=document.getElementById('aiInput');var q=inp.value.trim();if(!q)return;addAIMsg('user',q);inp.value='';setTimeout(function(){var c=document.getElementById('sCrop').value;var cn={maize:'Mahindi',wheat:'Ngano',beans:'Maharagwe',sorghum:'Mtama'}[c];var resp='🤖 ShambaMap AI:\n\nKenya '+cn+' analysis across 25 counties. Average hybrid adoption: '+Math.round(D.reduce(function(s,d){return s+d.srr[c]},0)/D.length)+'%.\n\nPriority recommendation: Increase certified seed distribution in Kitui, Kwale, Kilifi, and Makueni — ASAL counties with critically low hybrid adoption.\n\nUliza kuhusu kaunti maalum kwa ushauri wa kina!';addAIMsg('bot',resp)},800)}

// ══════ AUTH SYSTEM ══════
var ROLES={
  cs:{name:'Cabinet Secretary Agriculture',abbr:'CS',color:'#10b981',bg:'rgba(16,185,129,.1)',modules:['league','beta','foodsec','kiamis','eudr','dairy','dvs','exports','coldchain','mech','ncpb','phyto','dfz','flagship','dealers','smartcrop','iovsoc','varrec','planrec','smartcrop','iovsoc','varrec','planrec','cpi','hustler','gfw','acid','cropfit','vci','spi','tea','coffee','pestwatch','seed','seedsys','dss','ndvi','weather','pest','fertilizer','market','horti','credit','officer','ksc','sowing','yieldloss','earlywarning','benchmark','monsoon','report','voice','seedqr','kenat'],desc:'Full national access'},
  ps_crops:{name:'PS Agriculture',abbr:'PSA',color:'#059669',bg:'rgba(5,150,105,.1)',modules:['league','beta','foodsec','kiamis','ncpb','mech','flagship','dealers','smartcrop','iovsoc','varrec','planrec','seed','seedsys','cpi','hustler','dss','voice','kenat','ndvi','sowing','yieldloss','earlywarning','benchmark','monsoon','officer','ksc','report'],desc:'State Department for Agriculture'},
  ps_horti:{name:'AFA Director Horticulture',abbr:'DH',color:'#a855f7',bg:'rgba(168,85,247,.1)',modules:['horti','exports','coldchain','phyto','market','weather','pest','sowing','eudr','gfw','tea','coffee','pestwatch','vci','spi','report'],desc:'Horticultural Crops Directorate (AFA)'},
  ps_livestock:{name:'PS Livestock Development',abbr:'PSL',color:'#0891b2',bg:'rgba(8,145,178,.1)',modules:['dairy','dvs','dfz','league','foodsec','beta','market','weather','flagship','report'],desc:'State Department for Livestock'},
  dir_soil:{name:'Director Crops Development',abbr:'DCD',color:'#7c3aed',bg:'rgba(124,58,237,.1)',modules:['fertilizer','seed','seedsys','ncpb','flagship','mech','acid','cropfit','vci','spi','pestwatch','ndvi','weather','sowing','benchmark','foodsec','report'],desc:'Crops Development Directorate (incl. soil & land resources)'},
  dir_pp:{name:'KEPHIS Director',abbr:'KEP',color:'#dc2626',bg:'rgba(220,38,38,.1)',modules:['phyto','pest','pestwatch','vci','spi','seedsys','weather','ndvi','earlywarning','sowing','seedqr','report'],desc:'Plant health, seed certification'},
  kalro:{name:'KALRO Director',abbr:'KAL',color:'#0891b2',bg:'rgba(8,145,178,.1)',modules:['acid','cropfit','vci','spi','pestwatch','seed','dss','voice','kenat','ndvi','weather','pest','fertilizer','horti','sowing','yieldloss','earlywarning','benchmark','monsoon','report'],desc:'Agri Research & Livestock'},
  ksc:{name:'KSC Regional Manager',abbr:'KSC',color:'#a78bfa',bg:'rgba(167,139,250,.1)',modules:['cropfit','ksc','seedqr','seed','sowing','yieldloss','market','report'],desc:'Seed production & distribution'},
  cec:{name:'County CEC Agriculture',abbr:'CEC',color:'#475569',bg:'rgba(71,85,105,.1)',modules:['dealers','smartcrop','iovsoc','varrec','planrec','cpi','hustler','gfw','acid','cropfit','vci','spi','pestwatch','seed','dss','sowing','yieldloss','earlywarning','benchmark','monsoon','report'],desc:'County executive oversight'},
  subcounty:{name:'Sub-County Agri Officer',abbr:'SCA',color:'#6366f1',bg:'rgba(99,102,241,.1)',modules:['cropfit','seed','dss','voice','kenat','ndvi','weather','pest','fertilizer','market','horti','officer','sowing','yieldloss','earlywarning','benchmark','monsoon','report'],desc:'Sub-county + ward management'},
  ward:{name:'Ward Agri Officer',abbr:'WAO',color:'#f59e0b',bg:'rgba(245,158,11,.1)',modules:['cropfit','seed','weather','pest','fertilizer','officer','sowing','earlywarning','monsoon'],desc:'Ward-level operations'},
  kalro_r:{name:'KALRO Researcher',abbr:'RES',color:'#06b6d4',bg:'rgba(6,182,212,.1)',modules:['cropfit','seed','ndvi','pest','fertilizer','horti','sowing','earlywarning','benchmark'],desc:'Research & advisory'},
  coop:{name:'SACCO / Cooperative',abbr:'COP',color:'#ec4899',bg:'rgba(236,72,153,.1)',modules:['cropfit','seed','weather','pest','market','sowing'],desc:'Farmer SACCOs'},
  farmer:{name:'Mkulima / Farmer',abbr:'🌱',color:'#84cc16',bg:'rgba(132,204,22,.1)',modules:['cropfit','mkulima','seed','weather','pest','fertilizer','market','sowing','pestcam','seedqr'],desc:'Personal farm advisory'}
};
var currentUser=null;var selectedRole='cs';

function populateDistDropdown(){var sel=document.getElementById('loginDist');D.forEach(function(d){var opt=document.createElement('option');opt.value=d.id;opt.textContent=d.n;sel.appendChild(opt)})}
function selectRole(el){document.querySelectorAll('.lb-role').forEach(function(r){r.classList.remove('active')});el.classList.add('active');selectedRole=el.getAttribute('data-role');var df=document.getElementById('distField');var stateRoles=['cs','ps_crops','ps_horti','ps_livestock','dir_soil','dir_pp','kalro','ksc'];if(stateRoles.indexOf(selectedRole)>=0)df.style.display='none';else df.style.display='block'}
function doLogin(){var name=document.getElementById('loginName').value.trim();if(!name){document.getElementById('loginError').style.display='block';return}document.getElementById('loginError').style.display='none';var dist=document.getElementById('loginDist').value;var role=ROLES[selectedRole];currentUser={name:name,role:selectedRole,roleName:role.name,abbr:role.abbr,district:dist,color:role.color,bg:role.bg};applyLogin()}
function demoLogin(){currentUser={name:'Demo User',role:'cs',roleName:'Cabinet Secretary Agriculture',abbr:'CS',district:'',color:'#10b981',bg:'rgba(16,185,129,.1)'};selectedRole='cs';applyLogin()}
function applyLogin(){document.getElementById('loginOverlay').classList.add('hidden');document.getElementById('userAvatar').textContent=currentUser.abbr;document.getElementById('userAvatar').style.background=currentUser.color;document.getElementById('userName').textContent=currentUser.name;document.getElementById('userRole').textContent=currentUser.roleName;document.getElementById('userRole').style.color=currentUser.color;var rb=document.getElementById('roleBadge');rb.textContent=currentUser.abbr;rb.style.color=currentUser.color;rb.style.background=currentUser.bg;document.getElementById('menuName').textContent=currentUser.name;document.getElementById('menuRole').textContent=currentUser.roleName;document.getElementById('menuDist').textContent=currentUser.district?D.find(function(d){return d.id===currentUser.district}).n:'All Counties';var allowed=ROLES[currentUser.role].modules;document.querySelectorAll('.mt').forEach(function(btn){var m=btn.getAttribute('data-m');btn.style.display=allowed.indexOf(m)>=0?'':'none'});if(allowed.indexOf(mod)<0)setModule(allowed[0]);if(currentUser.district&&currentUser.role!=='cs'){setTimeout(function(){selDist(currentUser.district)},500)}
console.log('%c👤 '+currentUser.name+' · '+currentUser.roleName+' · '+allowed.length+' modules · '+(currentUser.district?'scope: '+D.find(function(d){return d.id===currentUser.district}).n:'scope: National'),'color:'+currentUser.color+';font-weight:700');
}
function toggleUserMenu(){document.getElementById('userMenu').classList.toggle('show')}
function doLogout(){currentUser=null;document.getElementById('loginOverlay').classList.remove('hidden');document.getElementById('userMenu').classList.remove('show');document.querySelectorAll('.mt').forEach(function(btn){btn.style.display=''})}
document.addEventListener('click',function(e){if(!e.target.closest('.user-pill'))document.getElementById('userMenu').classList.remove('show')});

// ══════ EVENTS ══════
document.getElementById('sCrop').onchange=function(){render();if(sel)renderDetail()};
document.getElementById('sSeason').onchange=function(){render();if(sel)renderDetail()};
document.getElementById('sinp').oninput=function(){var q=this.value.toLowerCase().trim();if(!q)return;var m=D.filter(function(d){return d.n.toLowerCase().indexOf(q)>=0});if(m.length===1)selDist(m[0].id)};

// ══════ THEME TOGGLE ══════
function toggleTheme(){var isLight=document.body.classList.contains('light');if(isLight){document.body.classList.remove('light');document.getElementById('themeBtn').textContent='🌙 Dark';localStorage.setItem('shambamap_theme','dark')}else{document.body.classList.add('light');document.getElementById('themeBtn').textContent='☀️ Light';localStorage.setItem('shambamap_theme','light')}if(typeof render==='function')render()}
(function(){var saved=localStorage.getItem('shambamap_theme');if(saved==='dark'){document.body.classList.remove('light');var btn=document.getElementById('themeBtn');if(btn)btn.textContent='🌙 Dark'}else{document.body.classList.add('light');var btn=document.getElementById('themeBtn');if(btn)btn.textContent='☀️ Light'}})();

// Apply NDMA drought-phase data to county dr field (overrides synthetic risk)
D.forEach(function(d){
  var ndma=NDMA_PHASE[d.id];
  if(ndma && ndma.phase!=='N/A'){d.dr=ndma.code;d.ndma_phase=ndma.phase;d.ndma_trend=ndma.trend;d.ndma_note=ndma.note}
  else{d.ndma_phase='Non-ASAL';d.ndma_trend='not monitored';d.ndma_note='County is outside NDMA ASAL monitoring zone'}
});

// ══════ BOOT ══════
populateDistDropdown();
renderLayers();
initMap();

// ══════ CONSOLE BANNER + DATA INTEGRITY AUDIT ══════
(function bootDiagnostics(){
  var v='1.0',build='2026.04',
      green='color:#10b981;font-weight:700',
      ink='color:#94a3b8',
      head='color:#22c55e;font-size:14px;font-weight:800',
      sub='color:#64748b;font-style:italic',
      flag='color:#f59e0b;font-weight:700',
      bad='color:#ef4444;font-weight:700';

  console.log('%c🌱 ShambaMap Kenya 🇰🇪',head);
  console.log('%cAgriculture Decision Intelligence Platform · v'+v+' · build '+build,sub);
  console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',ink);

  // Counties + roles
  console.log('%c📍 '+D.length+' counties · '+Object.keys(ROLES).length+' roles · '+document.querySelectorAll('.mt').length+' modules',green);

  // Wired data sources — count records per dataset
  var sources=[
    ['KNBS NAPR 2024 production',Object.keys(REAL).length,25,'production stats'],
    ['KAMIS market prices',Object.keys(KAMIS_PRICES).length,25,'wholesale KSh/90kg'],
    ['NDMA drought phases',Object.values(NDMA_PHASE).filter(function(x){return x.phase&&x.phase!=='N/A'}).length,10,'ASAL counties only'],
    ['KEPHIS variety catalogue',KEPHIS_VARIETIES.maize.length+KEPHIS_VARIETIES.wheat.length+KEPHIS_VARIETIES.beans.length+KEPHIS_VARIETIES.sorghum.length+KEPHIS_VARIETIES.coffee.length+KEPHIS_VARIETIES.tea.length,39,'cultivars'],
    ['AfSIS/iSDA soil values',Object.keys(REAL).length,25,'pH, OC%, N%, P, K, CEC, clay'],
    ['KIAMIS farmer registration',Object.keys(KIAMIS).length,25,'7.1M farmers nationally'],
    ['BETA delivery (CAIP/subsidy/bills)',Object.keys(BETA).length,25,'Treasury-linked'],
    ['Food Security Index (KFSSG/IPC)',Object.keys(FOODSEC).length,25,'IPC + stocks + volatility'],
    ['EUDR coffee readiness',Object.values(EUDR).filter(function(x){return x.is_coffee}).length,7,'coffee counties only'],
    ['Dairy & livestock (KDB)',Object.keys(DAIRY).length,25,'milk·cows·ANITRAC'],
    ['DVS disease surveillance',Object.keys(DVS).length,25,'FMD/LSD/PPR/RVF/CBPP'],
    ['HCD horticulture exports',Object.keys(EXPORTS).length,25,'KSh 158B FY24'],
    ['Cold chain & pack-houses',Object.keys(COLDCHAIN).length,25,'HCD-registered'],
    ['Mechanization (tractor density)',Object.keys(MECH).length,25,'tractors/1000ha'],
    ['NCPB strategic reserves',Object.keys(NCPB).length,25,'90kg bag depot stocks'],
    ['KEPHIS phytosanitary',Object.values(PHYTO).filter(function(x){return x.poe!=='None'}).length,9,'ports of entry'],
    ['Disease-Free Zones (BETA)',Object.values(DFZ).filter(function(x){return x.status!=='none'}).length,8,'export beef compartments'],
    ['Flagship projects (Galana/CAIP/NIB)',Object.values(FLAGSHIP).filter(function(x){return x.projects.length>0}).length,20,'BETA-tracked counties'],
    ['Agro-Dealer Network',Object.keys(DEALERS).length,25,'KEPHIS+PCPB+CropLife+KCDMS'],
    ['KNBS Food CPI March 2026',Object.keys(CPI).length,25,'monthly KNBS bulletin'],
    ['Hustler Fund (CBK survey)',Object.keys(HUSTLER).length,25,'agricultural credit borrowing'],
    ['Global Forest Watch GLAD',Object.keys(GFW).length,25,'weekly deforestation alerts'],
    ['Soil Acidity Monitor (KALRO/NAVCDP)',Object.keys(SOILACID).length,25,'63% of arable acidic'],
    ['Crop Fit Intelligence (GAEZ + iSDA + KALRO)',Object.keys(CROPFIT).length,25,'53 crops × 25 counties'],
    ['VCI Drought (BOKU/FEWS NET)',Object.keys(VCI).length,25,'dekadal vegetation index'],
    ['SPI Rainfall (CHIRPS/WMO)',Object.keys(SPI).length,25,'monthly drought index'],
    ['Mombasa Tea Auction',Object.keys(TEA_AUCTION).length,15,'tea-producing counties only'],
    ['Nairobi Coffee Exchange',Object.keys(COFFEE_AUCTION).length,7,'EUDR coffee counties'],
    ['FAO Locust + ICIPE FAW',Object.keys(PEST_WATCH).length,25,'weekly pest bulletins']
  ];
  console.groupCollapsed('%c📊 '+sources.length+' wired data sources','color:#3b82f6;font-weight:700');
  sources.forEach(function(s){
    var rec=s[1],exp=s[2],ok=rec===exp||rec>=exp;
    var c=ok?'color:#10b981':'color:#f59e0b';
    console.log('%c'+(ok?'✓':'⚠')+' '+s[0].padEnd(36)+' '+rec+' records · '+s[3],c);
  });
  console.groupEnd();

  // ── DATA INTEGRITY AUDIT ──
  // Check every county has every dataset
  var datasets={KIAMIS:KIAMIS,BETA:BETA,FOODSEC:FOODSEC,DAIRY:DAIRY,DVS:DVS,EXPORTS:EXPORTS,COLDCHAIN:COLDCHAIN,MECH:MECH,NCPB:NCPB,PHYTO:PHYTO,DFZ:DFZ,FLAGSHIP:FLAGSHIP,DEALERS:DEALERS,IOVSOC:IOVSOC,CPI:CPI,HUSTLER:HUSTLER,GFW:GFW,SOILACID:SOILACID,CROPFIT:CROPFIT,VCI:VCI,SPI:SPI,PEST_WATCH:PEST_WATCH};
  var issues=[];
  D.forEach(function(d){
    Object.keys(datasets).forEach(function(name){
      if(!datasets[name][d.id])issues.push({county:d.n,id:d.id,dataset:name});
    });
  });

  if(issues.length===0){
    console.log('%c✓ Data integrity · all '+D.length+' counties present in all '+Object.keys(datasets).length+' datasets',green);
  }else{
    console.warn('%c⚠ Data integrity · '+issues.length+' missing record(s)',flag);
    console.table(issues.slice(0,20));
    if(issues.length>20)console.log('%c... +'+(issues.length-20)+' more',ink);
  }

  // Live APIs
  console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',ink);
  console.log('%c🔌 Live API status',green);
  console.log('  %c🌤 Open-Meteo','color:#10b981','· ACTIVE · no key required · daily T/precip/wind/RH for all 25 counties');
  console.log('  %c📈 KAMIS','color:#06b6d4','· STATIC SNAPSHOT · 25 counties · upgrade: kamis.kilimo.go.ke API');
  console.log('  %c🌵 NDMA','color:#06b6d4','· STATIC SNAPSHOT · March 2026 bulletin · upgrade: monthly bulletin scrape');
  console.log('  %c🪪 KIAMIS','color:#a855f7','· MODELLED · estimates calibrated to 7.1M national total · upgrade: KIAMIS portal API');

  // Quick-start hints
  console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',ink);
  console.log('%c💡 Try in console','color:#eab308;font-weight:700');
  var mono='color:#22c55e;font-family:monospace';
  console.log('  %cD%c                          → all 25 county records',mono,'color:#94a3b8');
  console.log('  %cREAL%c                       → KNBS production data',mono,'color:#94a3b8');
  console.log('  %csetDistrict("uasingishu")%c  → fly to county',mono,'color:#94a3b8');
  console.log('  %csetModule("league")%c        → open National League Table',mono,'color:#94a3b8');
  console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',ink);
  console.log("%c© Anthropic-built prototype for Shriya D'money · ShambaMap Kenya · "+new Date().toLocaleDateString('en-KE'),ink);
})();
