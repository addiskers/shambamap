/* ----------------------------------------------------------------
   22 NEW KENYAN COUNTIES — GeoJSON features + descriptor objects
   Generated for ShambaMap expansion (Phase 2)
   ---------------------------------------------------------------- */

// Helper: generate a simple hexagonal polygon around a centroid
function hexPoly(lat, lng, r) {
  const pts = [];
  for (let i = 0; i < 8; i++) {
    const angle = (Math.PI / 4) * i;
    pts.push([
      Math.round((lng + r * Math.cos(angle)) * 100) / 100,
      Math.round((lat + r * Math.sin(angle)) * 100) / 100
    ]);
  }
  pts.push(pts[0]); // close ring
  return [pts];
}

// ---------- GEO FEATURES ----------
export const NC_GEO = [
  // === NORTHERN ASAL (dr:3) ===
  {type:"Feature",properties:{name:"Marsabit",id:"marsabit",centroid_lat:2.33,centroid_lng:37.98},geometry:{type:"Polygon",coordinates:hexPoly(2.33,37.98,1.3)}},
  {type:"Feature",properties:{name:"Wajir",id:"wajir",centroid_lat:1.75,centroid_lng:40.07},geometry:{type:"Polygon",coordinates:hexPoly(1.75,40.07,1.2)}},
  {type:"Feature",properties:{name:"Mandera",id:"mandera",centroid_lat:3.57,centroid_lng:41.20},geometry:{type:"Polygon",coordinates:hexPoly(3.57,41.20,1.0)}},
  {type:"Feature",properties:{name:"Garissa",id:"garissa",centroid_lat:-0.45,centroid_lng:39.65},geometry:{type:"Polygon",coordinates:hexPoly(-0.45,39.65,1.2)}},
  {type:"Feature",properties:{name:"Isiolo",id:"isiolo",centroid_lat:0.80,centroid_lng:38.48},geometry:{type:"Polygon",coordinates:hexPoly(0.80,38.48,1.0)}},
  {type:"Feature",properties:{name:"Turkana",id:"turkana",centroid_lat:3.12,centroid_lng:35.60},geometry:{type:"Polygon",coordinates:hexPoly(3.12,35.60,1.5)}},
  {type:"Feature",properties:{name:"Samburu",id:"samburu",centroid_lat:1.21,centroid_lng:36.95},geometry:{type:"Polygon",coordinates:hexPoly(1.21,36.95,1.0)}},

  // === PASTORAL / RIFT (dr:1-2) ===
  {type:"Feature",properties:{name:"West Pokot",id:"west_pokot",centroid_lat:1.62,centroid_lng:35.22},geometry:{type:"Polygon",coordinates:hexPoly(1.62,35.22,0.5)}},
  {type:"Feature",properties:{name:"Baringo",id:"baringo",centroid_lat:0.47,centroid_lng:35.97},geometry:{type:"Polygon",coordinates:hexPoly(0.47,35.97,0.5)}},
  {type:"Feature",properties:{name:"Elgeyo-Marakwet",id:"elgeyo_marakwet",centroid_lat:0.82,centroid_lng:35.52},geometry:{type:"Polygon",coordinates:hexPoly(0.82,35.52,0.35)}},

  // === WESTERN LAKE BASIN (dr:0-1) ===
  {type:"Feature",properties:{name:"Vihiga",id:"vihiga",centroid_lat:0.08,centroid_lng:34.72},geometry:{type:"Polygon",coordinates:hexPoly(0.08,34.72,0.3)}},
  {type:"Feature",properties:{name:"Busia",id:"busia",centroid_lat:0.43,centroid_lng:34.15},geometry:{type:"Polygon",coordinates:hexPoly(0.43,34.15,0.35)}},
  {type:"Feature",properties:{name:"Siaya",id:"siaya",centroid_lat:-0.06,centroid_lng:34.22},geometry:{type:"Polygon",coordinates:hexPoly(-0.06,34.22,0.35)}},
  {type:"Feature",properties:{name:"Migori",id:"migori",centroid_lat:-1.07,centroid_lng:34.47},geometry:{type:"Polygon",coordinates:hexPoly(-1.07,34.47,0.35)}},
  {type:"Feature",properties:{name:"Homa Bay",id:"homa_bay",centroid_lat:-0.62,centroid_lng:34.45},geometry:{type:"Polygon",coordinates:hexPoly(-0.62,34.45,0.35)}},
  {type:"Feature",properties:{name:"Nyamira",id:"nyamira",centroid_lat:-0.75,centroid_lng:34.93},geometry:{type:"Polygon",coordinates:hexPoly(-0.75,34.93,0.3)}},

  // === COASTAL (dr:2-3) ===
  {type:"Feature",properties:{name:"Lamu",id:"lamu",centroid_lat:-2.27,centroid_lng:40.90},geometry:{type:"Polygon",coordinates:hexPoly(-2.27,40.90,0.5)}},
  {type:"Feature",properties:{name:"Taita Taveta",id:"taita_taveta",centroid_lat:-3.40,centroid_lng:38.35},geometry:{type:"Polygon",coordinates:hexPoly(-3.40,38.35,0.8)}},

  // === EASTERN ASAL (dr:3) ===
  {type:"Feature",properties:{name:"Tana River",id:"tana_river",centroid_lat:-1.80,centroid_lng:39.65},geometry:{type:"Polygon",coordinates:hexPoly(-1.80,39.65,1.0)}},

  // === ADDITIONAL COUNTIES ===
  {type:"Feature",properties:{name:"Kajiado",id:"kajiado",centroid_lat:-2.0,centroid_lng:36.8},geometry:{type:"Polygon",coordinates:hexPoly(-2.0,36.8,0.7)}},
  {type:"Feature",properties:{name:"Mombasa",id:"mombasa",centroid_lat:-4.05,centroid_lng:39.67},geometry:{type:"Polygon",coordinates:hexPoly(-4.05,39.67,0.2)}},
  {type:"Feature",properties:{name:"Nandi",id:"nandi",centroid_lat:0.18,centroid_lng:35.18},geometry:{type:"Polygon",coordinates:hexPoly(0.18,35.18,0.35)}},
];


// ---------- DESCRIPTOR ARRAY ----------
export const NC_D = [
  // =============================================
  // NORTHERN ASAL (dr:3) — LOW seed metrics
  // =============================================
  {id:"marsabit",n:"Marsabit",z:"Northern ASAL (Lowland)",
    seed:{har:18,mvp:22,vage:10,csc:25,cfr:62},
    vb:{n:3,m:8,o:89},fl:0,dr:3,
    rc:[{t:"w",m:"Extreme arid — <300mm rainfall; pastoralist economy dominant"},{t:"u",m:"Drought-tolerant sorghum and green grams only viable crops"},{t:"w",m:"No formal seed distribution network — relies on NGO relief seed"}],
    sd:[{n:"No KSC depot",c:"var(--rd)",d:"Nearest 300km"},{n:"KALRO Marsabit dryland",c:"var(--or)",d:"In county"},{n:"Catholic Diocese agro-input",c:"var(--pp)",d:"In town"}]},

  {id:"wajir",n:"Wajir",z:"Northern ASAL (Lowland)",
    seed:{har:15,mvp:20,vage:9,csc:20,cfr:65},
    vb:{n:2,m:6,o:92},fl:0,dr:3,
    rc:[{t:"w",m:"Pastoral economy — <200mm rainfall; virtually no rainfed cropping"},{t:"u",m:"Irrigated fodder + drought-resilient cowpea along Ewaso Nyiro"},{t:"w",m:"Seed access near zero — emergency relief only"}],
    sd:[{n:"No KSC depot",c:"var(--rd)",d:"Nearest 400km"},{n:"NDMA Wajir office",c:"var(--or)",d:"In town"},{n:"World Vision agro-input",c:"var(--pp)",d:"In town"}]},

  {id:"mandera",n:"Mandera",z:"Northern ASAL (Lowland)",
    seed:{har:16,mvp:20,vage:8,csc:22,cfr:64},
    vb:{n:2,m:5,o:93},fl:0,dr:3,
    rc:[{t:"w",m:"Most food-insecure county — conflict + drought + locust risk"},{t:"u",m:"Riverine irrigation along Daua River for maize/cowpea"},{t:"w",m:"Cross-border seed from Ethiopia/Somalia — quality unverified"}],
    sd:[{n:"No KSC depot",c:"var(--rd)",d:"Nearest 500km"},{n:"NDMA Mandera office",c:"var(--or)",d:"In town"},{n:"Action Against Hunger input",c:"var(--pp)",d:"In town"}]},

  {id:"garissa",n:"Garissa",z:"Northern ASAL (Lowland)",
    seed:{har:20,mvp:25,vage:10,csc:28,cfr:60},
    vb:{n:4,m:8,o:88},fl:0,dr:3,
    rc:[{t:"w",m:"Semi-arid lowland — Tana River irrigation potential underutilized"},{t:"u",m:"Prosopis management + irrigated fodder for livestock"},{t:"w",m:"Seed market limited to Garissa town — no rural agrodealers"}],
    sd:[{n:"No KSC depot",c:"var(--rd)",d:"Nearest 200km"},{n:"KALRO Garissa dryland",c:"var(--or)",d:"In county"},{n:"Arid Lands Resource Mgmt",c:"var(--pp)",d:"In town"}]},

  {id:"isiolo",n:"Isiolo",z:"Northern ASAL (Lowland)",
    seed:{har:22,mvp:25,vage:11,csc:30,cfr:58},
    vb:{n:5,m:10,o:85},fl:0,dr:3,
    rc:[{t:"w",m:"Pastoral county — limited cropping except along Ewaso Nyiro"},{t:"u",m:"Camel milk + irrigated fodder emerging value chains"},{t:"u",m:"LAPSSET corridor may improve input access"}],
    sd:[{n:"No KSC depot",c:"var(--rd)",d:"Nearest 150km"},{n:"KALRO Isiolo range research",c:"var(--or)",d:"In county"},{n:"County agro-input store",c:"var(--pp)",d:"In town"}]},

  {id:"turkana",n:"Turkana",z:"Northern ASAL (Lowland)",
    seed:{har:15,mvp:18,vage:8,csc:20,cfr:65},
    vb:{n:2,m:5,o:93},fl:0,dr:3,
    rc:[{t:"w",m:"Most arid county — Lake Turkana basin; pastoralist livelihood"},{t:"u",m:"Turkwel irrigation scheme — sorghum + cowpea potential"},{t:"w",m:"Chronic food emergency — 70%+ food aid dependent"}],
    sd:[{n:"No KSC depot",c:"var(--rd)",d:"Nearest 400km"},{n:"NDMA Turkana office",c:"var(--or)",d:"In Lodwar"},{n:"Oxfam/WFP input distribution",c:"var(--pp)",d:"Seasonal"}]},

  {id:"samburu",n:"Samburu",z:"Northern ASAL (Lowland)",
    seed:{har:25,mvp:28,vage:11,csc:32,cfr:55},
    vb:{n:5,m:10,o:85},fl:0,dr:3,
    rc:[{t:"w",m:"Pastoral — limited cropping in Leroghi Plateau highlands"},{t:"u",m:"Bee-keeping + drought-tolerant crops for diversification"},{t:"u",m:"Conservancy-based agriculture emerging"}],
    sd:[{n:"No KSC depot",c:"var(--rd)",d:"Nearest 120km"},{n:"KALRO Maralal sub-station",c:"var(--or)",d:"In county"},{n:"County agro-vet Maralal",c:"var(--pp)",d:"In town"}]},

  // =============================================
  // PASTORAL / RIFT (dr:1-2)
  // =============================================
  {id:"west_pokot",n:"West Pokot",z:"North Rift Highlands (ASAL)",
    seed:{har:35,mvp:32,vage:12,csc:38,cfr:48},
    vb:{n:8,m:14,o:78},fl:0,dr:2,
    rc:[{t:"w",m:"ASAL highlands — agropastoral; landslide-prone escarpment"},{t:"u",m:"Sorghum + finger millet suited to lower zones"},{t:"u",m:"Potato + pyrethrum potential in highland areas"}],
    sd:[{n:"KSC dealer Kapenguria",c:"var(--gn)",d:"In county"},{n:"KALRO Kapenguria sub-station",c:"var(--or)",d:"In county"}]},

  {id:"baringo",n:"Baringo",z:"North Rift (ASAL)",
    seed:{har:32,mvp:30,vage:12,csc:35,cfr:50},
    vb:{n:8,m:12,o:80},fl:0,dr:2,
    rc:[{t:"w",m:"Mixed ASAL — Prosopis invasion + honey production"},{t:"u",m:"Irrigated horticulture along Perkerra scheme"},{t:"u",m:"Drought-tolerant maize + sorghum for lowlands"}],
    sd:[{n:"KSC dealer Kabarnet",c:"var(--gn)",d:"In county"},{n:"KALRO Perkerra irrigation",c:"var(--or)",d:"In county"},{n:"County agro-vet Marigat",c:"var(--pp)",d:"In county"}]},

  {id:"elgeyo_marakwet",n:"Elgeyo-Marakwet",z:"North Rift Highlands (Highland)",
    seed:{har:68,mvp:48,vage:14,csc:62,cfr:28},
    vb:{n:16,m:20,o:64},fl:0,dr:1,
    rc:[{t:"i",m:"Kerio Valley irrigation + highland maize/wheat production"},{t:"u",m:"Fluorspar + Irish potato value chain development"},{t:"i",m:"Athletes' county — diversified farm incomes"}],
    sd:[{n:"KSC dealer Iten",c:"var(--gn)",d:"In county"},{n:"KALRO Eldoret",c:"var(--or)",d:"40km"},{n:"County agro-vet Iten",c:"var(--pp)",d:"In town"}]},

  // =============================================
  // WESTERN LAKE BASIN (dr:0-1) — MODERATE metrics
  // =============================================
  {id:"vihiga",n:"Vihiga",z:"Western Lake Basin (Highland)",
    seed:{har:58,mvp:45,vage:15,csc:60,cfr:30},
    vb:{n:12,m:18,o:70},fl:0,dr:0,
    rc:[{t:"i",m:"Highest population density in western Kenya — intensive smallholder"},{t:"u",m:"Push-pull for Striga control + improved bean varieties"},{t:"w",m:"Soil acidity limiting maize yields — liming priority"}],
    sd:[{n:"KSC dealer Mbale",c:"var(--gn)",d:"In county"},{n:"KALRO Kakamega",c:"var(--or)",d:"20km"}]},

  {id:"busia",n:"Busia",z:"Western Lake Basin (Lowland)",
    seed:{har:52,mvp:40,vage:14,csc:55,cfr:38},
    vb:{n:10,m:16,o:74},fl:0,dr:1,
    rc:[{t:"u",m:"Cross-border trade hub — seed access via Uganda corridor"},{t:"w",m:"Striga infestation severe in maize zones"},{t:"u",m:"Fish farming + rice irrigation expanding"}],
    sd:[{n:"KSC dealer Busia town",c:"var(--gn)",d:"In county"},{n:"KALRO Kakamega",c:"var(--or)",d:"60km"},{n:"One Acre Fund Busia hub",c:"var(--pp)",d:"In county"}]},

  {id:"siaya",n:"Siaya",z:"Western Lake Basin (Lowland)",
    seed:{har:50,mvp:38,vage:14,csc:52,cfr:40},
    vb:{n:8,m:15,o:77},fl:0,dr:1,
    rc:[{t:"w",m:"Striga witchweed devastation — sorghum replacing maize"},{t:"u",m:"Push-pull technology adoption + cotton revival"},{t:"u",m:"Fish farming (Lake Victoria) diversification"}],
    sd:[{n:"KSC dealer Siaya town",c:"var(--gn)",d:"In county"},{n:"KALRO Kibos",c:"var(--or)",d:"40km"},{n:"One Acre Fund Siaya",c:"var(--pp)",d:"In county"}]},

  {id:"migori",n:"Migori",z:"Western Lake Basin (Lowland)",
    seed:{har:55,mvp:42,vage:13,csc:56,cfr:36},
    vb:{n:10,m:16,o:74},fl:0,dr:1,
    rc:[{t:"u",m:"Tobacco transition — sugar + sorghum replacing"},{t:"w",m:"Gold mining competing with farmland — soil contamination"},{t:"u",m:"Improved sorghum varieties for local brewing + food"}],
    sd:[{n:"KSC dealer Migori town",c:"var(--gn)",d:"In county"},{n:"KALRO Kibos",c:"var(--or)",d:"60km"},{n:"County agro-vet Migori",c:"var(--pp)",d:"In town"}]},

  {id:"homa_bay",n:"Homa Bay",z:"Western Lake Basin (Lowland)",
    seed:{har:52,mvp:40,vage:14,csc:55,cfr:38},
    vb:{n:9,m:15,o:76},fl:0,dr:1,
    rc:[{t:"w",m:"Striga + low soil fertility — maize yields declining"},{t:"u",m:"Sorghum + cassava drought-tolerant alternatives"},{t:"u",m:"Fish farming + sweet potato value chains"}],
    sd:[{n:"KSC dealer Homa Bay town",c:"var(--gn)",d:"In county"},{n:"KALRO Kibos",c:"var(--or)",d:"50km"},{n:"One Acre Fund Homa Bay",c:"var(--pp)",d:"In county"}]},

  {id:"nyamira",n:"Nyamira",z:"Western Lake Basin (Highland)",
    seed:{har:65,mvp:48,vage:13,csc:62,cfr:26},
    vb:{n:14,m:20,o:66},fl:0,dr:0,
    rc:[{t:"i",m:"Tea + banana + dairy intensive smallholder system"},{t:"u",m:"Improved bean varieties for nutrition security"},{t:"i",m:"High rainfall — double cropping maize/beans"}],
    sd:[{n:"KSC dealer Nyamira town",c:"var(--gn)",d:"In county"},{n:"KALRO Kisii",c:"var(--or)",d:"20km"}]},

  // =============================================
  // COASTAL (dr:2-3)
  // =============================================
  {id:"lamu",n:"Lamu",z:"Coastal (Lowland)",
    seed:{har:20,mvp:22,vage:10,csc:25,cfr:60},
    vb:{n:4,m:8,o:88},fl:0,dr:2,
    rc:[{t:"w",m:"Island + mainland — coconut, mangrove, cashew dominant"},{t:"u",m:"LAPSSET port may transform input access"},{t:"w",m:"Insecurity in hinterland limits farming expansion"}],
    sd:[{n:"No KSC depot",c:"var(--rd)",d:"Nearest 200km"},{n:"KALRO Mtwapa",c:"var(--or)",d:"250km"},{n:"County agro-input Lamu town",c:"var(--pp)",d:"In town"}]},

  {id:"taita_taveta",n:"Taita Taveta",z:"Coastal (ASAL)",
    seed:{har:28,mvp:30,vage:11,csc:35,cfr:52},
    vb:{n:6,m:12,o:82},fl:0,dr:2,
    rc:[{t:"u",m:"Taveta irrigation — rice, onion, horticulture potential"},{t:"w",m:"Wildlife conflict — Tsavo corridor limits farmland"},{t:"u",m:"Taita Hills highlands — temperate fruits + dairy"}],
    sd:[{n:"KSC dealer Voi",c:"var(--gn)",d:"In county"},{n:"KALRO Mtwapa",c:"var(--or)",d:"200km"},{n:"County agro-vet Wundanyi",c:"var(--pp)",d:"In county"}]},

  // =============================================
  // EASTERN ASAL (dr:3)
  // =============================================
  {id:"tana_river",n:"Tana River",z:"Eastern ASAL (Lowland)",
    seed:{har:18,mvp:20,vage:9,csc:22,cfr:62},
    vb:{n:3,m:7,o:90},fl:0,dr:3,
    rc:[{t:"w",m:"Flood-recession farming along Tana River — highly variable"},{t:"u",m:"Tana Delta irrigation scheme — rice + maize potential"},{t:"w",m:"Pastoralist-farmer conflict over water resources"}],
    sd:[{n:"No KSC depot",c:"var(--rd)",d:"Nearest 250km"},{n:"KALRO Garissa dryland",c:"var(--or)",d:"150km"},{n:"County agro-input Hola",c:"var(--pp)",d:"In town"}]},

  // =============================================
  // ADDITIONAL COUNTIES
  // =============================================
  {id:"kajiado",n:"Kajiado",z:"Semi-Arid Pastoral (Peri-Urban)",
    seed:{har:38,mvp:35,vage:12,csc:40,cfr:45},
    vb:{n:10,m:15,o:75},fl:0,dr:2,
    rc:[{t:"u",m:"Maasai ranching + peri-urban horticulture along Athi River corridor"},{t:"w",m:"Semi-arid — erratic rainfall, overgrazing pressure on rangelands"},{t:"u",m:"Ngong/Kitengela horticulture + cement mining (Athi River)"}],
    sd:[{n:"KSC dealer Kajiado town",c:"var(--gn)",d:"In county"},{n:"KALRO Kiboko dryland",c:"var(--or)",d:"In county"},{n:"Ngong agro-vet cluster",c:"var(--pp)",d:"In county"}]},

  {id:"mombasa",n:"Mombasa",z:"Coastal Urban",
    seed:{har:15,mvp:12,vage:8,csc:18,cfr:68},
    vb:{n:3,m:5,o:92},fl:0,dr:1,
    rc:[{t:"w",m:"Urban county — virtually no arable land; <1% farming households"},{t:"i",m:"Kilindini port — major KEPHIS inspection point for imports/exports"},{t:"w",m:"High food prices — 95%+ food imported from upcountry"}],
    sd:[{n:"KEPHIS Coast HQ",c:"var(--gn)",d:"In county"},{n:"No KALRO station",c:"var(--rd)",d:"KALRO Mtwapa 30km"},{n:"Minimal agro-dealers",c:"var(--rd)",d:"Urban retail only"}]},

  {id:"nandi",n:"Nandi",z:"Rift Valley Highlands (Tea Belt)",
    seed:{har:72,mvp:55,vage:15,csc:68,cfr:22},
    vb:{n:18,m:22,o:60},fl:0,dr:0,
    rc:[{t:"i",m:"Major tea county — ~40,000 ha under KTDA factories (Nandi Hills, Chebut, Chemomi)"},{t:"i",m:"Maize ~60,000 ha + strong dairy sector, high rainfall 1200-2000mm"},{t:"u",m:"Emerging avocado + macadamia diversification"}],
    sd:[{n:"KSC dealer Kapsabet",c:"var(--gn)",d:"In county"},{n:"KALRO Kericho (tea)",c:"var(--or)",d:"60km"},{n:"Multiple agro-vets Kapsabet/Nandi Hills",c:"var(--pp)",d:"In county"}]}
];

// ---------- REAL (crop production + soil) ----------
export const NC_REAL = {
// === Northern ASAL (7) ===
"marsabit":{"maize":{"a":2800,"p":1680,"y":600},"wheat":{"a":50,"p":40,"y":800},"beans":{"a":1200,"p":600,"y":500},"sorghum":{"a":3500,"p":3150,"y":900},"soil":{"ph":8.2,"oc":0.3,"n":0.04,"p":3,"k":90,"cec":5,"clay":12,"class":"Arenosol"},"drought_risk":3,"irrigation_pct":2},
"wajir":{"maize":{"a":1200,"p":600,"y":500},"wheat":{"a":20,"p":14,"y":700},"beans":{"a":800,"p":320,"y":400},"sorghum":{"a":2800,"p":2240,"y":800},"soil":{"ph":8.5,"oc":0.2,"n":0.03,"p":2,"k":75,"cec":4,"clay":10,"class":"Arenosol"},"drought_risk":3,"irrigation_pct":3},
"mandera":{"maize":{"a":1500,"p":750,"y":500},"wheat":{"a":15,"p":10,"y":700},"beans":{"a":1000,"p":400,"y":400},"sorghum":{"a":3200,"p":2560,"y":800},"soil":{"ph":8.8,"oc":0.2,"n":0.03,"p":2,"k":70,"cec":4,"clay":8,"class":"Arenosol"},"drought_risk":3,"irrigation_pct":7},
"garissa":{"maize":{"a":2200,"p":1320,"y":600},"wheat":{"a":30,"p":21,"y":700},"beans":{"a":1500,"p":675,"y":450},"sorghum":{"a":4200,"p":3780,"y":900},"soil":{"ph":8.0,"oc":0.3,"n":0.04,"p":3,"k":85,"cec":5,"clay":14,"class":"Leptosol"},"drought_risk":3,"irrigation_pct":9},
"isiolo":{"maize":{"a":1800,"p":900,"y":500},"wheat":{"a":20,"p":14,"y":700},"beans":{"a":900,"p":360,"y":400},"sorghum":{"a":2500,"p":2000,"y":800},"soil":{"ph":8.3,"oc":0.3,"n":0.03,"p":3,"k":80,"cec":4,"clay":11,"class":"Leptosol"},"drought_risk":3,"irrigation_pct":3},
"turkana":{"maize":{"a":1000,"p":400,"y":400},"wheat":{"a":10,"p":6,"y":600},"beans":{"a":600,"p":180,"y":300},"sorghum":{"a":3800,"p":2660,"y":700},"soil":{"ph":9.0,"oc":0.2,"n":0.02,"p":2,"k":65,"cec":3,"clay":8,"class":"Arenosol"},"drought_risk":3,"irrigation_pct":2},
"samburu":{"maize":{"a":1500,"p":750,"y":500},"wheat":{"a":30,"p":24,"y":800},"beans":{"a":700,"p":280,"y":400},"sorghum":{"a":2200,"p":1760,"y":800},"soil":{"ph":7.8,"oc":0.4,"n":0.05,"p":4,"k":95,"cec":5,"clay":14,"class":"Leptosol"},"drought_risk":3,"irrigation_pct":2},
// === Pastoral/Rift (3) ===
"west_pokot":{"maize":{"a":42000,"p":50400,"y":1200},"wheat":{"a":3500,"p":5250,"y":1500},"beans":{"a":18000,"p":14400,"y":800},"sorghum":{"a":22000,"p":22000,"y":1000},"soil":{"ph":6.2,"oc":1.5,"n":0.13,"p":10,"k":185,"cec":12,"clay":32,"class":"Nitisol"},"drought_risk":2,"irrigation_pct":4},
"baringo":{"maize":{"a":38000,"p":38000,"y":1000},"wheat":{"a":4000,"p":6800,"y":1700},"beans":{"a":14000,"p":9800,"y":700},"sorghum":{"a":28000,"p":30800,"y":1100},"soil":{"ph":7.2,"oc":0.8,"n":0.09,"p":8,"k":165,"cec":18,"clay":40,"class":"Vertisol"},"drought_risk":2,"irrigation_pct":8},
"elgeyo_marakwet":{"maize":{"a":52000,"p":156000,"y":3000},"wheat":{"a":8500,"p":21250,"y":2500},"beans":{"a":15000,"p":18000,"y":1200},"sorghum":{"a":3000,"p":3900,"y":1300},"soil":{"ph":5.5,"oc":2.4,"n":0.21,"p":16,"k":270,"cec":17,"clay":42,"class":"Nitisol"},"drought_risk":1,"irrigation_pct":5},
// === Western Lake Basin (6) ===
"vihiga":{"maize":{"a":28000,"p":44800,"y":1600},"wheat":{"a":200,"p":240,"y":1200},"beans":{"a":12000,"p":9600,"y":800},"sorghum":{"a":5000,"p":5000,"y":1000},"soil":{"ph":4.8,"oc":1.4,"n":0.13,"p":6,"k":145,"cec":8,"clay":34,"class":"Ferralsol"},"drought_risk":0,"irrigation_pct":2},
"busia":{"maize":{"a":42000,"p":54600,"y":1300},"wheat":{"a":150,"p":165,"y":1100},"beans":{"a":16000,"p":11200,"y":700},"sorghum":{"a":12000,"p":12000,"y":1000},"soil":{"ph":5.2,"oc":1.2,"n":0.11,"p":7,"k":155,"cec":9,"clay":30,"class":"Ferralsol"},"drought_risk":0,"irrigation_pct":3},
"siaya":{"maize":{"a":52000,"p":62400,"y":1200},"wheat":{"a":100,"p":100,"y":1000},"beans":{"a":14000,"p":8400,"y":600},"sorghum":{"a":28000,"p":30800,"y":1100},"soil":{"ph":5.3,"oc":1.1,"n":0.10,"p":7,"k":160,"cec":10,"clay":32,"class":"Ferralsol"},"drought_risk":1,"irrigation_pct":3},
"migori":{"maize":{"a":48000,"p":62400,"y":1300},"wheat":{"a":100,"p":100,"y":1000},"beans":{"a":11000,"p":7700,"y":700},"sorghum":{"a":18000,"p":19800,"y":1100},"soil":{"ph":5.2,"oc":1.3,"n":0.12,"p":8,"k":170,"cec":10,"clay":34,"class":"Ferralsol"},"drought_risk":1,"irrigation_pct":2},
"homa_bay":{"maize":{"a":55000,"p":60500,"y":1100},"wheat":{"a":80,"p":72,"y":900},"beans":{"a":12000,"p":7200,"y":600},"sorghum":{"a":32000,"p":35200,"y":1100},"soil":{"ph":5.3,"oc":1.2,"n":0.11,"p":7,"k":155,"cec":10,"clay":33,"class":"Ferralsol"},"drought_risk":1,"irrigation_pct":3},
"nyamira":{"maize":{"a":35000,"p":70000,"y":2000},"wheat":{"a":500,"p":750,"y":1500},"beans":{"a":14000,"p":14000,"y":1000},"sorghum":{"a":4000,"p":4800,"y":1200},"soil":{"ph":5.2,"oc":2.6,"n":0.22,"p":13,"k":310,"cec":16,"clay":44,"class":"Nitisol"},"drought_risk":0,"irrigation_pct":2},
// === Coastal (2) ===
"lamu":{"maize":{"a":8000,"p":6400,"y":800},"wheat":{"a":20,"p":14,"y":700},"beans":{"a":3500,"p":1750,"y":500},"sorghum":{"a":5500,"p":5500,"y":1000},"soil":{"ph":6.8,"oc":0.6,"n":0.06,"p":5,"k":100,"cec":6,"clay":16,"class":"Arenosol"},"drought_risk":2,"irrigation_pct":4},
"taita_taveta":{"maize":{"a":18000,"p":14400,"y":800},"wheat":{"a":200,"p":200,"y":1000},"beans":{"a":8000,"p":4800,"y":600},"sorghum":{"a":12000,"p":12000,"y":1000},"soil":{"ph":7.0,"oc":0.7,"n":0.07,"p":5,"k":110,"cec":7,"clay":20,"class":"Leptosol"},"drought_risk":2,"irrigation_pct":5},
// === Eastern (1) ===
"tana_river":{"maize":{"a":4500,"p":2700,"y":600},"wheat":{"a":20,"p":14,"y":700},"beans":{"a":2000,"p":800,"y":400},"sorghum":{"a":6500,"p":5850,"y":900},"soil":{"ph":7.8,"oc":0.4,"n":0.05,"p":4,"k":90,"cec":6,"clay":18,"class":"Fluvisol"},"drought_risk":3,"irrigation_pct":12},
// === Additional Counties ===
"kajiado":{"maize":{"a":22000,"p":17600,"y":800},"wheat":{"a":1500,"p":1800,"y":1200},"beans":{"a":12000,"p":7200,"y":600},"sorghum":{"a":8000,"p":7200,"y":900},"soil":{"ph":7.5,"oc":0.6,"n":0.06,"p":5,"k":120,"cec":8,"clay":22,"class":"Vertisol"},"drought_risk":2,"irrigation_pct":6},
"mombasa":{"maize":{"a":200,"p":120,"y":600},"wheat":{"a":0,"p":0,"y":0},"beans":{"a":50,"p":20,"y":400},"sorghum":{"a":80,"p":56,"y":700},"soil":{"ph":7.2,"oc":0.5,"n":0.05,"p":4,"k":95,"cec":6,"clay":15,"class":"Arenosol"},"drought_risk":1,"irrigation_pct":2},
"nandi":{"maize":{"a":60000,"p":180000,"y":3000},"wheat":{"a":5000,"p":12500,"y":2500},"beans":{"a":18000,"p":21600,"y":1200},"sorghum":{"a":3500,"p":4550,"y":1300},"tea":{"a":40000,"p":264000,"y":6600},"soil":{"ph":5.2,"oc":2.8,"n":0.24,"p":14,"k":290,"cec":18,"clay":46,"class":"Nitisol"},"drought_risk":0,"irrigation_pct":3}
};

export const NC_CROPFIT = {
// === Northern ASAL (7) ===
"marsabit":{"sorghum":{"fit":58,"gaez":"MS","yield":0.9,"variety":"Gadam / Seredo","market":42,"risk":"High","why":"Best-adapted cereal for ASAL, short rains cropping"},"pulses":{"fit":52,"gaez":"MS","yield":0.5,"variety":"Cowpea / green gram","market":45,"risk":"High","why":"Drought-escape legumes, 60-day maturity"},"livestock":{"fit":85,"gaez":"VS","yield":0,"variety":"Camel / Goat (Galla)","market":72,"risk":"Moderate","why":"Pastoral livelihoods dominant, camel milk market"},"maize":{"fit":35,"gaez":"mS","yield":0.6,"variety":"Katumani / DH04","market":38,"risk":"Very High","why":"Marginal rainfall <400mm, crop failure frequent"}},
"wajir":{"livestock":{"fit":88,"gaez":"VS","yield":0,"variety":"Camel / Somali goat","market":75,"risk":"Moderate","why":"Pastoral economy, livestock accounts for >80% income"},"sorghum":{"fit":48,"gaez":"mS","yield":0.8,"variety":"Gadam","market":38,"risk":"Very High","why":"Extreme aridity, only irrigated plots viable"},"pulses":{"fit":45,"gaez":"mS","yield":0.4,"variety":"Cowpea","market":40,"risk":"Very High","why":"Very limited arable land, water scarce"}},
"mandera":{"livestock":{"fit":85,"gaez":"VS","yield":0,"variety":"Camel / Somali goat","market":72,"risk":"Moderate","why":"Cross-border livestock trade with Somalia/Ethiopia"},"sorghum":{"fit":50,"gaez":"mS","yield":0.8,"variety":"Gadam","market":40,"risk":"Very High","why":"Irrigated plots along Daua River only"},"pulses":{"fit":48,"gaez":"mS","yield":0.4,"variety":"Cowpea","market":38,"risk":"Very High","why":"Extreme aridity, irrigation-dependent"}},
"garissa":{"livestock":{"fit":82,"gaez":"VS","yield":0,"variety":"Boran cattle / Somali goat","market":70,"risk":"Moderate","why":"Tana River floodplain grazing, livestock markets"},"sorghum":{"fit":55,"gaez":"MS","yield":0.9,"variety":"Gadam / Serena","market":45,"risk":"High","why":"Irrigated along Tana River, Bura scheme"},"maize":{"fit":38,"gaez":"mS","yield":0.6,"variety":"DH04","market":35,"risk":"Very High","why":"Only viable under irrigation"},"pulses":{"fit":52,"gaez":"MS","yield":0.5,"variety":"Cowpea / green gram","market":42,"risk":"High","why":"Short-season drought-escape crops"}},
"isiolo":{"livestock":{"fit":85,"gaez":"VS","yield":0,"variety":"Camel / Boran cattle","market":72,"risk":"Moderate","why":"Pastoral-commercial transition, Isiolo abattoir"},"sorghum":{"fit":52,"gaez":"MS","yield":0.8,"variety":"Gadam","market":40,"risk":"High","why":"Marginal cropping along seasonal rivers"},"pulses":{"fit":48,"gaez":"mS","yield":0.4,"variety":"Cowpea / green gram","market":42,"risk":"Very High","why":"Extremely limited arable land"}},
"turkana":{"livestock":{"fit":82,"gaez":"VS","yield":0,"variety":"Turkana goat / camel","market":65,"risk":"High","why":"Pastoral dominant, LAPSSET corridor potential"},"sorghum":{"fit":45,"gaez":"mS","yield":0.7,"variety":"Gadam","market":35,"risk":"Very High","why":"Only Turkwel irrigation viable for cropping"},"fish":{"fit":65,"gaez":"MS","yield":0,"variety":"Tilapia / Nile Perch","market":55,"risk":"Moderate","why":"Lake Turkana fisheries, underexploited"}},
"samburu":{"livestock":{"fit":85,"gaez":"VS","yield":0,"variety":"Sahiwal / Boran / goat","market":70,"risk":"Moderate","why":"Semi-pastoral, conservancy-based livelihoods"},"sorghum":{"fit":50,"gaez":"mS","yield":0.8,"variety":"Gadam","market":38,"risk":"High","why":"Limited highland pockets for cropping"},"pulses":{"fit":48,"gaez":"mS","yield":0.4,"variety":"Cowpea","market":40,"risk":"High","why":"Very small arable footprint"}},
// === Pastoral/Rift (3) ===
"west_pokot":{"maize":{"fit":62,"gaez":"MS","yield":1.2,"variety":"DH04 / H513","market":55,"risk":"High","why":"Highland pockets suitable, lowlands marginal"},"sorghum":{"fit":72,"gaez":"S","yield":1.0,"variety":"Gadam / Seredo","market":52,"risk":"Moderate","why":"Drought-tolerant cereal for lowland zones"},"livestock":{"fit":78,"gaez":"S","yield":0,"variety":"Pokot cattle / goat","market":62,"risk":"Moderate","why":"Pastoral tradition, mixed farming in highlands"},"beans":{"fit":58,"gaez":"MS","yield":0.8,"variety":"KAT-B1 / Mwitemania","market":48,"risk":"High","why":"Highland zones only, short season varieties"}},
"baringo":{"sorghum":{"fit":75,"gaez":"S","yield":1.1,"variety":"Gadam / IS 76","market":55,"risk":"Moderate","why":"Semi-arid adapted, Perkerra irrigation supplements"},"maize":{"fit":55,"gaez":"MS","yield":1.0,"variety":"DH04","market":50,"risk":"High","why":"Variable rainfall, irrigation-dependent for reliability"},"coffee":{"fit":62,"gaez":"MS","yield":0.5,"variety":"Ruiru 11","market":58,"risk":"Moderate","why":"Perkerra highlands only, small acreage"},"livestock":{"fit":80,"gaez":"S","yield":0,"variety":"Boran / Sahiwal cross","market":65,"risk":"Moderate","why":"Dominant livelihood in lowlands, honey also important"},"beans":{"fit":58,"gaez":"MS","yield":0.7,"variety":"KAT-B1","market":48,"risk":"High","why":"Irrigation-dependent, lowland pockets"}},
"elgeyo_marakwet":{"potato":{"fit":88,"gaez":"VS","yield":15,"variety":"Shangi / Unica","market":78,"risk":"Low","why":"Highland 1800-2800m, cool temperatures ideal for potato"},"maize":{"fit":78,"gaez":"S","yield":3.0,"variety":"H629 / H614","market":68,"risk":"Low","why":"Highland maize zone, reliable long rains"},"wheat":{"fit":75,"gaez":"S","yield":2.5,"variety":"Robin / Eagle10","market":65,"risk":"Low","why":"Cool highlands suitable, but potato dominates"},"tea":{"fit":72,"gaez":"S","yield":1.8,"variety":"TRFK 31/8","market":68,"risk":"Low","why":"Upper zones above 2000m, KTDA factories nearby"},"dairy":{"fit":80,"gaez":"S","yield":10,"variety":"Friesian / Ayrshire","market":72,"risk":"Low","why":"Highland dairy zone, cooperative infrastructure"}},
// === Western Lake Basin (6) ===
"vihiga":{"tea":{"fit":78,"gaez":"S","yield":1.8,"variety":"TRFK 31/8","market":72,"risk":"Low","why":"Highland zones 1500-1800m, KTDA factory access"},"maize":{"fit":62,"gaez":"MS","yield":1.6,"variety":"WH507 / H513","market":58,"risk":"Moderate","why":"Severe soil acidity, Striga infestation, tiny farms <0.5 ha"},"beans":{"fit":55,"gaez":"MS","yield":0.8,"variety":"KK 8 / KK 15","market":52,"risk":"Moderate","why":"Root-rot pressure, acidic Ferralsols"},"dairy":{"fit":68,"gaez":"MS","yield":6,"variety":"Friesian cross","market":62,"risk":"Moderate","why":"Zero-grazing on tiny plots, Napier grass limited"}},
"busia":{"sugarcane":{"fit":82,"gaez":"S","yield":65,"variety":"Co421","market":58,"risk":"Moderate","why":"Western cane belt, Mumias/Busia outgrower schemes"},"rice":{"fit":72,"gaez":"S","yield":3.5,"variety":"Basmati 370 / Komboka","market":68,"risk":"Moderate","why":"Bunyala irrigation scheme, expanding paddy"},"maize":{"fit":58,"gaez":"MS","yield":1.3,"variety":"WH507 / Duma 43","market":55,"risk":"Moderate","why":"Acidic soils, Striga, smallholder dominated"},"fish":{"fit":75,"gaez":"S","yield":0,"variety":"Tilapia / catfish","market":62,"risk":"Low","why":"Lake Victoria border, pond aquaculture growing"},"beans":{"fit":52,"gaez":"MS","yield":0.7,"variety":"KK 8","market":48,"risk":"Moderate","why":"Root-rot, waterlogging in long rains"}},
"siaya":{"maize":{"fit":55,"gaez":"MS","yield":1.2,"variety":"WH507 / DK777","market":52,"risk":"High","why":"Chronic food deficit, Striga + acidic Ferralsols"},"sorghum":{"fit":72,"gaez":"S","yield":1.1,"variety":"Gadam / Seredo","market":55,"risk":"Moderate","why":"Better adapted to local conditions than maize"},"fish":{"fit":78,"gaez":"S","yield":0,"variety":"Tilapia / Nile Perch","market":65,"risk":"Low","why":"Lake Victoria lakeshore, Bondo fish landing"},"beans":{"fit":52,"gaez":"MS","yield":0.6,"variety":"KK 8 / Nyota","market":48,"risk":"Moderate","why":"Root-rot and anthracnose pressure"},"cassava":{"fit":68,"gaez":"MS","yield":12,"variety":"Improved KALRO","market":55,"risk":"Low","why":"Drought buffer crop, cassava brown streak risk"}},
"migori":{"sugarcane":{"fit":80,"gaez":"S","yield":62,"variety":"Co421","market":55,"risk":"Moderate","why":"Trans-Mara sugar belt, Sony Sugar outgrowers"},"tobacco":{"fit":75,"gaez":"S","yield":1.2,"variety":"Flue-cured","market":62,"risk":"Moderate","why":"BAT contract farming, declining due to health policy"},"maize":{"fit":58,"gaez":"MS","yield":1.3,"variety":"WH507","market":55,"risk":"Moderate","why":"Acidic soils, smallholder dominated"},"fish":{"fit":72,"gaez":"S","yield":0,"variety":"Tilapia / Nile Perch","market":60,"risk":"Low","why":"Lake Victoria border, Sori/Muhuru fish landings"},"sorghum":{"fit":65,"gaez":"MS","yield":1.1,"variety":"Gadam","market":48,"risk":"Moderate","why":"Drier lowland zones near lake"}},
"homa_bay":{"maize":{"fit":52,"gaez":"MS","yield":1.1,"variety":"WH507 / DK777","market":52,"risk":"High","why":"Food deficit county, Striga + acidic soils + HIV burden"},"cassava":{"fit":72,"gaez":"S","yield":14,"variety":"Improved KALRO","market":58,"risk":"Low","why":"Drought-tolerant staple, growing adoption"},"sorghum":{"fit":70,"gaez":"S","yield":1.1,"variety":"Gadam / Seredo","market":52,"risk":"Moderate","why":"EABL contract potential, better adapted than maize"},"fish":{"fit":82,"gaez":"VS","yield":0,"variety":"Tilapia / Nile Perch","market":68,"risk":"Low","why":"Major Lake Victoria fishing, Mbita/Kendu Bay landings"},"beans":{"fit":48,"gaez":"mS","yield":0.6,"variety":"KK 8","market":45,"risk":"High","why":"Root-rot, acidic soils, moisture stress"}},
"nyamira":{"tea":{"fit":92,"gaez":"VS","yield":6.6,"variety":"TRFK 31/8 / TRFK 6/8","market":82,"risk":"Low","why":"High-yielding tea zone, KTDA factories, 1600-2000m optimal altitude"},"banana":{"fit":85,"gaez":"S","yield":30,"variety":"Tissue-cultured","market":75,"risk":"Low","why":"Highland banana zone, intercropped with tea"},"maize":{"fit":65,"gaez":"MS","yield":2.0,"variety":"H516 / H614","market":58,"risk":"Moderate","why":"Land competition with tea, acidic Nitisols"},"dairy":{"fit":72,"gaez":"S","yield":8,"variety":"Friesian / Ayrshire","market":65,"risk":"Low","why":"Smallholder zero-grazing alongside tea"}},
// === Coastal (2) ===
"lamu":{"coconut":{"fit":88,"gaez":"VS","yield":42,"variety":"East African Tall","market":62,"risk":"Low","why":"Coastal coconut belt, copra and fresh nut market"},"cashew":{"fit":82,"gaez":"S","yield":0.8,"variety":"Local improved","market":72,"risk":"Moderate","why":"Reviving cashew industry, processing plant potential"},"simsim":{"fit":75,"gaez":"S","yield":0.6,"variety":"Local","market":65,"risk":"Moderate","why":"Well-adapted oilseed for sandy coastal soils"},"cassava":{"fit":72,"gaez":"S","yield":12,"variety":"Improved KALRO","market":55,"risk":"Low","why":"Staple food crop, sandy soil tolerant"},"cotton":{"fit":65,"gaez":"MS","yield":0.8,"variety":"KSA 81M","market":48,"risk":"Moderate","why":"Historical cotton zone, revival attempts ongoing"}},
"taita_taveta":{"maize":{"fit":48,"gaez":"mS","yield":0.8,"variety":"DH04 / Katumani","market":48,"risk":"High","why":"Semi-arid lowlands, only Taita Hills highlands viable"},"sorghum":{"fit":68,"gaez":"MS","yield":1.0,"variety":"Gadam / Seredo","market":48,"risk":"Moderate","why":"Drought-tolerant for lowland Taveta"},"livestock":{"fit":78,"gaez":"S","yield":0,"variety":"Boran / Sahiwal","market":62,"risk":"Moderate","why":"Large-scale ranching dominant, Tsavo corridor"},"horti":{"fit":72,"gaez":"S","yield":0,"variety":"Vegetables / flowers","market":68,"risk":"Moderate","why":"Taita Hills micro-climate, niche highland crops"},"beans":{"fit":55,"gaez":"MS","yield":0.6,"variety":"KAT-B1","market":48,"risk":"High","why":"Highland pockets only, moisture-limited"}},
// === Eastern (1) ===
"tana_river":{"sorghum":{"fit":62,"gaez":"MS","yield":0.9,"variety":"Gadam / Serena","market":45,"risk":"High","why":"Irrigated along Tana River, Hola/Bura schemes"},"livestock":{"fit":80,"gaez":"S","yield":0,"variety":"Boran / Orma cattle / goat","market":65,"risk":"Moderate","why":"Pastoral dominant, riverine grazing systems"},"maize":{"fit":42,"gaez":"mS","yield":0.6,"variety":"DH04","market":38,"risk":"Very High","why":"Only under Tana Delta irrigation, flood-dependent"},"pulses":{"fit":55,"gaez":"MS","yield":0.5,"variety":"Cowpea / green gram","market":45,"risk":"High","why":"Short-season crops on irrigated plots"},"rice":{"fit":58,"gaez":"MS","yield":2.5,"variety":"IR2793","market":55,"risk":"Moderate","why":"Tana Delta irrigation potential, small-scale paddy"}},
// === Additional Counties ===
"kajiado":{"livestock":{"fit":85,"gaez":"VS","yield":0,"variety":"Maasai zebu / Sahiwal / Boran","market":72,"risk":"Moderate","why":"Maasai pastoral ranching dominant, Kiserian livestock market"},"horti":{"fit":68,"gaez":"MS","yield":0,"variety":"Tomato / onion / french beans","market":65,"risk":"Moderate","why":"Ngong/Athi River corridor irrigation-based horticulture"},"maize":{"fit":48,"gaez":"mS","yield":0.8,"variety":"DH04 / Katumani","market":48,"risk":"High","why":"Semi-arid — erratic rainfall, only higher areas viable"},"beans":{"fit":52,"gaez":"MS","yield":0.6,"variety":"KAT-B1","market":48,"risk":"High","why":"Marginal rainfall, short season varieties only"},"dairy":{"fit":62,"gaez":"MS","yield":6,"variety":"Friesian cross","market":60,"risk":"Moderate","why":"Peri-urban Nairobi market, Kiserian/Ongata Rongai belt"}},
"mombasa":{"fish":{"fit":82,"gaez":"VS","yield":0,"variety":"Marine fisheries / aquaculture","market":78,"risk":"Low","why":"Port city, Indian Ocean fisheries, local + tourist market"},"horti":{"fit":25,"gaez":"NS","yield":0,"variety":"Urban micro-gardens","market":35,"risk":"Very High","why":"No arable land, fully urban, minimal peri-urban farming"},"livestock":{"fit":20,"gaez":"NS","yield":0,"variety":"Poultry (backyard)","market":42,"risk":"High","why":"Urban county, no pastoral land, backyard poultry only"},"coconut":{"fit":45,"gaez":"mS","yield":2.0,"variety":"East African Tall","market":48,"risk":"Moderate","why":"Small peri-urban coconut plots, minimal commercial scale"}},
"nandi":{"tea":{"fit":92,"gaez":"VS","yield":6.6,"variety":"TRFK 31/8 / TRFK 6/8","market":85,"risk":"Low","why":"Major tea county ~40,000 ha, KTDA factories Nandi Hills/Chebut/Chemomi"},"maize":{"fit":82,"gaez":"S","yield":3.0,"variety":"H614 / H629 / DK8031","market":72,"risk":"Low","why":"Highland maize zone, reliable bimodal rainfall 1200-2000mm"},"dairy":{"fit":85,"gaez":"VS","yield":12,"variety":"Friesian / Ayrshire","market":78,"risk":"Low","why":"Strong dairy cooperatives, highland pastures, Brookside/New KCC collection"},"beans":{"fit":72,"gaez":"S","yield":1.2,"variety":"KK 8 / Mwitemania","market":62,"risk":"Low","why":"Intercropped with maize, good highland conditions"},"avocado":{"fit":68,"gaez":"MS","yield":8,"variety":"Hass / Fuerte","market":72,"risk":"Low","why":"Emerging export crop, altitude 1500-1800m suitable"}}
};

export const NC_IOVSOC = {
// === Northern ASAL (7) ===
"marsabit":{"primary_crop":"sorghum","input_kshHa":8000,"yield_tHa":0.9,"price_kshT":32000,"subsidy_kshM_yr":8,"area_ha_K":3.5,"yield_3yr_trend":[0.7,0.8,0.9],"fert_kg_ha":15,"seed_kg_ha":8,"labour_days":18,"subsidy_uptake_pct":12,"e_voucher_pct":5,"national_yield":1.2,"benchmark":"Below average"},
"wajir":{"primary_crop":"sorghum","input_kshHa":6500,"yield_tHa":0.8,"price_kshT":30000,"subsidy_kshM_yr":5,"area_ha_K":2.8,"yield_3yr_trend":[0.6,0.7,0.8],"fert_kg_ha":10,"seed_kg_ha":8,"labour_days":15,"subsidy_uptake_pct":8,"e_voucher_pct":3,"national_yield":1.2,"benchmark":"Bottom quartile"},
"mandera":{"primary_crop":"sorghum","input_kshHa":7000,"yield_tHa":0.8,"price_kshT":30000,"subsidy_kshM_yr":6,"area_ha_K":3.2,"yield_3yr_trend":[0.6,0.7,0.8],"fert_kg_ha":12,"seed_kg_ha":8,"labour_days":16,"subsidy_uptake_pct":9,"e_voucher_pct":4,"national_yield":1.2,"benchmark":"Bottom quartile"},
"garissa":{"primary_crop":"sorghum","input_kshHa":9000,"yield_tHa":0.9,"price_kshT":32000,"subsidy_kshM_yr":10,"area_ha_K":4.2,"yield_3yr_trend":[0.7,0.8,0.9],"fert_kg_ha":18,"seed_kg_ha":8,"labour_days":20,"subsidy_uptake_pct":14,"e_voucher_pct":6,"national_yield":1.2,"benchmark":"Below average"},
"isiolo":{"primary_crop":"sorghum","input_kshHa":7500,"yield_tHa":0.8,"price_kshT":31000,"subsidy_kshM_yr":6,"area_ha_K":2.5,"yield_3yr_trend":[0.6,0.7,0.8],"fert_kg_ha":12,"seed_kg_ha":8,"labour_days":16,"subsidy_uptake_pct":10,"e_voucher_pct":4,"national_yield":1.2,"benchmark":"Bottom quartile"},
"turkana":{"primary_crop":"sorghum","input_kshHa":6000,"yield_tHa":0.7,"price_kshT":28000,"subsidy_kshM_yr":4,"area_ha_K":3.8,"yield_3yr_trend":[0.5,0.6,0.7],"fert_kg_ha":8,"seed_kg_ha":6,"labour_days":14,"subsidy_uptake_pct":6,"e_voucher_pct":2,"national_yield":1.2,"benchmark":"Bottom quartile"},
"samburu":{"primary_crop":"sorghum","input_kshHa":7000,"yield_tHa":0.8,"price_kshT":30000,"subsidy_kshM_yr":5,"area_ha_K":2.2,"yield_3yr_trend":[0.6,0.7,0.8],"fert_kg_ha":10,"seed_kg_ha":8,"labour_days":15,"subsidy_uptake_pct":8,"e_voucher_pct":3,"national_yield":1.2,"benchmark":"Bottom quartile"},
// === Pastoral/Rift (3) ===
"west_pokot":{"primary_crop":"maize","input_kshHa":22000,"yield_tHa":1.2,"price_kshT":21000,"subsidy_kshM_yr":32,"area_ha_K":42,"yield_3yr_trend":[1.0,1.1,1.2],"fert_kg_ha":65,"seed_kg_ha":20,"labour_days":35,"subsidy_uptake_pct":35,"e_voucher_pct":22,"national_yield":1.8,"benchmark":"Below average"},
"baringo":{"primary_crop":"sorghum","input_kshHa":20000,"yield_tHa":1.1,"price_kshT":36000,"subsidy_kshM_yr":28,"area_ha_K":28,"yield_3yr_trend":[0.9,1.0,1.1],"fert_kg_ha":55,"seed_kg_ha":12,"labour_days":30,"subsidy_uptake_pct":38,"e_voucher_pct":25,"national_yield":1.2,"benchmark":"Average"},
"elgeyo_marakwet":{"primary_crop":"potato","input_kshHa":75000,"yield_tHa":15,"price_kshT":18000,"subsidy_kshM_yr":42,"area_ha_K":23,"yield_3yr_trend":[13,14,15],"fert_kg_ha":220,"seed_kg_ha":2200,"labour_days":78,"subsidy_uptake_pct":52,"e_voucher_pct":38,"national_yield":12,"benchmark":"Above average"},
// === Western Lake Basin (6) ===
"vihiga":{"primary_crop":"maize","input_kshHa":28000,"yield_tHa":1.6,"price_kshT":21000,"subsidy_kshM_yr":18,"area_ha_K":28,"yield_3yr_trend":[1.4,1.5,1.6],"fert_kg_ha":95,"seed_kg_ha":25,"labour_days":48,"subsidy_uptake_pct":48,"e_voucher_pct":35,"national_yield":1.8,"benchmark":"Below average"},
"busia":{"primary_crop":"sugarcane","input_kshHa":55000,"yield_tHa":65,"price_kshT":4200,"subsidy_kshM_yr":22,"area_ha_K":32,"yield_3yr_trend":[58,62,65],"fert_kg_ha":120,"seed_kg_ha":0,"labour_days":95,"subsidy_uptake_pct":42,"e_voucher_pct":32,"national_yield":55,"benchmark":"Above average"},
"siaya":{"primary_crop":"maize","input_kshHa":24000,"yield_tHa":1.2,"price_kshT":21500,"subsidy_kshM_yr":22,"area_ha_K":52,"yield_3yr_trend":[1.0,1.1,1.2],"fert_kg_ha":80,"seed_kg_ha":22,"labour_days":42,"subsidy_uptake_pct":42,"e_voucher_pct":30,"national_yield":1.8,"benchmark":"Below average"},
"migori":{"primary_crop":"sugarcane","input_kshHa":52000,"yield_tHa":62,"price_kshT":4200,"subsidy_kshM_yr":18,"area_ha_K":28,"yield_3yr_trend":[55,58,62],"fert_kg_ha":110,"seed_kg_ha":0,"labour_days":90,"subsidy_uptake_pct":38,"e_voucher_pct":28,"national_yield":55,"benchmark":"Above average"},
"homa_bay":{"primary_crop":"maize","input_kshHa":22000,"yield_tHa":1.1,"price_kshT":21500,"subsidy_kshM_yr":25,"area_ha_K":55,"yield_3yr_trend":[0.9,1.0,1.1],"fert_kg_ha":75,"seed_kg_ha":22,"labour_days":40,"subsidy_uptake_pct":38,"e_voucher_pct":25,"national_yield":1.8,"benchmark":"Below average"},
"nyamira":{"primary_crop":"tea","input_kshHa":65000,"yield_tHa":6.6,"price_kshT":215000,"subsidy_kshM_yr":35,"area_ha_K":22,"yield_3yr_trend":[6.0,6.3,6.6],"fert_kg_ha":270,"seed_kg_ha":0,"labour_days":240,"subsidy_uptake_pct":42,"e_voucher_pct":35,"national_yield":2.0,"benchmark":"Top quartile"},
// === Coastal (2) ===
"lamu":{"primary_crop":"coconut","input_kshHa":15000,"yield_tHa":4.2,"price_kshT":18000,"subsidy_kshM_yr":5,"area_ha_K":8,"yield_3yr_trend":[3.8,4.0,4.2],"fert_kg_ha":25,"seed_kg_ha":0,"labour_days":35,"subsidy_uptake_pct":15,"e_voucher_pct":8,"national_yield":3.5,"benchmark":"Above average"},
"taita_taveta":{"primary_crop":"maize","input_kshHa":18000,"yield_tHa":0.8,"price_kshT":22000,"subsidy_kshM_yr":12,"area_ha_K":18,"yield_3yr_trend":[0.7,0.75,0.8],"fert_kg_ha":45,"seed_kg_ha":18,"labour_days":28,"subsidy_uptake_pct":28,"e_voucher_pct":18,"national_yield":1.8,"benchmark":"Bottom quartile"},
// === Eastern (1) ===
"tana_river":{"primary_crop":"sorghum","input_kshHa":12000,"yield_tHa":0.9,"price_kshT":34000,"subsidy_kshM_yr":8,"area_ha_K":6.5,"yield_3yr_trend":[0.7,0.8,0.9],"fert_kg_ha":22,"seed_kg_ha":10,"labour_days":22,"subsidy_uptake_pct":15,"e_voucher_pct":8,"national_yield":1.2,"benchmark":"Below average"},
// === Additional Counties ===
"kajiado":{"primary_crop":"livestock","input_kshHa":15000,"yield_tHa":0.8,"price_kshT":22000,"subsidy_kshM_yr":18,"area_ha_K":22,"yield_3yr_trend":[0.6,0.7,0.8],"fert_kg_ha":35,"seed_kg_ha":15,"labour_days":25,"subsidy_uptake_pct":22,"e_voucher_pct":15,"national_yield":1.8,"benchmark":"Below average"},
"mombasa":{"primary_crop":"none","input_kshHa":0,"yield_tHa":0,"price_kshT":0,"subsidy_kshM_yr":2,"area_ha_K":0.2,"yield_3yr_trend":[0,0,0],"fert_kg_ha":0,"seed_kg_ha":0,"labour_days":0,"subsidy_uptake_pct":2,"e_voucher_pct":1,"national_yield":0,"benchmark":"N/A — urban"},
"nandi":{"primary_crop":"tea","input_kshHa":68000,"yield_tHa":6.6,"price_kshT":215000,"subsidy_kshM_yr":48,"area_ha_K":40,"yield_3yr_trend":[6.0,6.3,6.6],"fert_kg_ha":280,"seed_kg_ha":0,"labour_days":250,"subsidy_uptake_pct":55,"e_voucher_pct":42,"national_yield":2.0,"benchmark":"Top quartile"}
};


export const NC_SOILACID = {
// === Northern ASAL (7) ===
"marsabit":{"acid_arable_pct":8,"severity":"Minimal","lime_req_t_ha":0,"lime_adopt_pct":0,"navcdp_status":"pending","samples_collected":120,"samples_target":1711,"priority":1,"key_constraint":"Alkaline Arenosols pH 8+, salinity more pressing than acidity"},
"wajir":{"acid_arable_pct":5,"severity":"Minimal","lime_req_t_ha":0,"lime_adopt_pct":0,"navcdp_status":"pending","samples_collected":80,"samples_target":1711,"priority":1,"key_constraint":"Highly alkaline, sodicity primary soil issue"},
"mandera":{"acid_arable_pct":5,"severity":"Minimal","lime_req_t_ha":0,"lime_adopt_pct":0,"navcdp_status":"pending","samples_collected":65,"samples_target":1711,"priority":1,"key_constraint":"Alkaline desert soils, gypsum required not lime"},
"garissa":{"acid_arable_pct":8,"severity":"Minimal","lime_req_t_ha":0,"lime_adopt_pct":0,"navcdp_status":"pending","samples_collected":140,"samples_target":1711,"priority":1,"key_constraint":"Alkaline floodplain soils, salinity along Tana River"},
"isiolo":{"acid_arable_pct":6,"severity":"Minimal","lime_req_t_ha":0,"lime_adopt_pct":0,"navcdp_status":"pending","samples_collected":95,"samples_target":1711,"priority":1,"key_constraint":"Alkaline Leptosols, shallow rocky soils limit cropping"},
"turkana":{"acid_arable_pct":5,"severity":"Minimal","lime_req_t_ha":0,"lime_adopt_pct":0,"navcdp_status":"pending","samples_collected":55,"samples_target":1711,"priority":1,"key_constraint":"Highly alkaline desert soils pH 9+, saline lake influence"},
"samburu":{"acid_arable_pct":10,"severity":"Minimal","lime_req_t_ha":0,"lime_adopt_pct":0,"navcdp_status":"pending","samples_collected":85,"samples_target":1711,"priority":1,"key_constraint":"Alkaline rangelands, highland pockets slightly less alkaline"},
// === Pastoral/Rift (3) ===
"west_pokot":{"acid_arable_pct":42,"severity":"Moderate","lime_req_t_ha":2.0,"lime_adopt_pct":2,"navcdp_status":"pilot","samples_collected":380,"samples_target":1711,"priority":3,"key_constraint":"Highland Nitisols acidic, lowlands neutral-alkaline"},
"baringo":{"acid_arable_pct":22,"severity":"Mild","lime_req_t_ha":1.0,"lime_adopt_pct":1,"navcdp_status":"pilot","samples_collected":320,"samples_target":1711,"priority":2,"key_constraint":"Mixed: Vertisols neutral, Solonchaks saline, highland pockets acidic"},
"elgeyo_marakwet":{"acid_arable_pct":62,"severity":"Moderate","lime_req_t_ha":2.5,"lime_adopt_pct":4,"navcdp_status":"active","samples_collected":880,"samples_target":1711,"priority":4,"key_constraint":"Highland Nitisols leaching, potato/maize zones acidifying","tolerant_crops":["potato","tea"],"acid_crop_label":"Moderate for cereals · Tolerable for potato/tea"},
// === Western Lake Basin (6) ===
"vihiga":{"acid_arable_pct":88,"severity":"Severe","lime_req_t_ha":3.8,"lime_adopt_pct":3,"navcdp_status":"active","samples_collected":1280,"samples_target":1711,"priority":5,"key_constraint":"Most acidic county in Kenya, Ferralsols pH 4.5, Al toxicity","tolerant_crops":["tea"],"acid_crop_label":"Severe for cereals · Tolerable for tea"},
"busia":{"acid_arable_pct":72,"severity":"Severe","lime_req_t_ha":3.0,"lime_adopt_pct":3,"navcdp_status":"active","samples_collected":920,"samples_target":1711,"priority":5,"key_constraint":"Ferralsols leaching under high rainfall, sugarcane + rice affected"},
"siaya":{"acid_arable_pct":68,"severity":"Severe","lime_req_t_ha":2.8,"lime_adopt_pct":2,"navcdp_status":"active","samples_collected":850,"samples_target":1711,"priority":5,"key_constraint":"Chronic food deficit compounded by acidic Ferralsols, Al toxicity"},
"migori":{"acid_arable_pct":65,"severity":"Severe","lime_req_t_ha":2.7,"lime_adopt_pct":2,"navcdp_status":"active","samples_collected":780,"samples_target":1711,"priority":4,"key_constraint":"Ferralsols under high rainfall, gold mining adds heavy metal contamination"},
"homa_bay":{"acid_arable_pct":68,"severity":"Severe","lime_req_t_ha":2.8,"lime_adopt_pct":2,"navcdp_status":"active","samples_collected":820,"samples_target":1711,"priority":5,"key_constraint":"Ferralsols pH 5.0-5.5, maize yield depression from Al toxicity"},
"nyamira":{"acid_arable_pct":70,"severity":"Severe","lime_req_t_ha":2.5,"lime_adopt_pct":4,"navcdp_status":"active","samples_collected":980,"samples_target":1711,"priority":4,"key_constraint":"Nitisols acidic but tea tolerates; banana + cereal crops affected","tolerant_crops":["tea","banana"],"acid_crop_label":"Severe for cereals · Tolerable for tea/banana"},
// === Coastal (2) ===
"lamu":{"acid_arable_pct":28,"severity":"Mild","lime_req_t_ha":1.0,"lime_adopt_pct":1,"navcdp_status":"pending","samples_collected":180,"samples_target":1711,"priority":2,"key_constraint":"Coastal Arenosols, low CEC, leached but near-neutral"},
"taita_taveta":{"acid_arable_pct":22,"severity":"Mild","lime_req_t_ha":0.8,"lime_adopt_pct":1,"navcdp_status":"pending","samples_collected":220,"samples_target":1711,"priority":2,"key_constraint":"Leptosols mostly neutral, highland Taita Hills pockets mildly acidic"},
// === Eastern (1) ===
"tana_river":{"acid_arable_pct":10,"severity":"Minimal","lime_req_t_ha":0,"lime_adopt_pct":0,"navcdp_status":"pending","samples_collected":110,"samples_target":1711,"priority":1,"key_constraint":"Alkaline Fluvisols along Tana, salinity from irrigation more pressing"},
// === Additional Counties ===
"kajiado":{"acid_arable_pct":15,"severity":"Mild","lime_req_t_ha":0.5,"lime_adopt_pct":1,"navcdp_status":"pending","samples_collected":280,"samples_target":1711,"priority":2,"key_constraint":"Vertisols mostly neutral-alkaline, localized acidity in Ngong highlands"},
"mombasa":{"acid_arable_pct":8,"severity":"Minimal","lime_req_t_ha":0,"lime_adopt_pct":0,"navcdp_status":"N/A","samples_collected":25,"samples_target":0,"priority":0,"key_constraint":"Urban county — negligible arable land, coastal Arenosols near-neutral"},
"nandi":{"acid_arable_pct":68,"severity":"Severe","lime_req_t_ha":2.8,"lime_adopt_pct":5,"navcdp_status":"active","samples_collected":1050,"samples_target":1711,"priority":5,"key_constraint":"Highland Nitisols pH 4.8-5.2, tea tolerates but maize yields depressed","tolerant_crops":["tea"],"acid_crop_label":"Severe for cereals · Tolerable for tea"}
};

// ---------- REMAINING EXPORTS ----------
export const NC_KAMIS = {
  // ASAL — higher prices
  marsabit:        {maize:6800,beans:11500,sorghum:5800,wheat:7200,market:"Marsabit Town"},
  wajir:           {maize:7000,beans:12000,sorghum:6200,wheat:7500,market:"Wajir Town"},
  mandera:         {maize:6500,beans:11000,sorghum:6000,wheat:7000,market:"Mandera Town"},
  garissa:         {maize:6200,beans:10500,sorghum:5500,wheat:6800,market:"Garissa Town"},
  isiolo:          {maize:6500,beans:10800,sorghum:5600,wheat:7000,market:"Isiolo Town"},
  turkana:         {maize:6900,beans:11800,sorghum:6100,wheat:7400,market:"Lodwar"},
  samburu:         {maize:5800,beans:9500,sorghum:5200,wheat:6500,market:"Maralal"},
  // Rift — highland/lower
  west_pokot:      {maize:4500,beans:8200,sorghum:4500,wheat:5800,market:"Kapenguria"},
  baringo:         {maize:4200,beans:7800,sorghum:4200,wheat:5500,market:"Kabarnet"},
  elgeyo_marakwet: {maize:3800,beans:7200,sorghum:4000,wheat:5200,market:"Iten"},
  // Western — moderate
  vihiga:          {maize:4800,beans:9200,sorghum:4200,wheat:4800,market:"Mbale"},
  busia:           {maize:4500,beans:8800,sorghum:4000,wheat:4600,market:"Busia Town"},
  siaya:           {maize:4600,beans:9000,sorghum:4100,wheat:4700,market:"Siaya Town"},
  migori:          {maize:4700,beans:9500,sorghum:4300,wheat:4900,market:"Migori Town"},
  homa_bay:        {maize:4800,beans:9800,sorghum:4400,wheat:5000,market:"Homa Bay Town"},
  nyamira:         {maize:5000,beans:8500,sorghum:4100,wheat:4800,market:"Nyamira Town"},
  // Coastal
  lamu:            {maize:6800,beans:11200,sorghum:5800,wheat:7000,market:"Lamu Town"},
  taita_taveta:    {maize:5500,beans:9800,sorghum:5000,wheat:6200,market:"Voi"},
  // Eastern (tana_river already exists for FLAGSHIP but adding KAMIS)
  tana_river:      {maize:6500,beans:10800,sorghum:5500,wheat:6800,market:"Hola"},
  // Additional Counties
  kajiado:         {maize:5200,beans:9500,sorghum:4800,wheat:5800,market:"Kajiado Town/Kiserian"},
  mombasa:         {maize:6500,beans:11500,sorghum:5800,wheat:7200,market:"Kongowea/Marikiti"},
  nandi:           {maize:3500,beans:7000,sorghum:3800,wheat:4800,market:"Kapsabet"}
};

export const NC_NDMA = {
  // ASAL — ALERT/ALARM
  marsabit:        {phase:"ALARM",code:3,trend:"worsening",note:"Severe drought, livestock losses"},
  wajir:           {phase:"ALARM",code:3,trend:"worsening",note:"Pasture depletion, water stress"},
  mandera:         {phase:"ALARM",code:3,trend:"stable",note:"Chronic food insecurity"},
  garissa:         {phase:"ALERT",code:2,trend:"worsening",note:"Livestock migration, low pasture"},
  isiolo:          {phase:"ALERT",code:2,trend:"stable",note:"Pastoral stress, water rationing"},
  turkana:         {phase:"ALARM",code:3,trend:"worsening",note:"Extreme drought, humanitarian concern"},
  samburu:         {phase:"ALERT",code:2,trend:"improving",note:"Partial recovery from drought"},
  // Rift — mixed
  west_pokot:      {phase:"ALERT",code:2,trend:"stable",note:"Pastoral lowlands stressed"},
  baringo:         {phase:"ALERT",code:2,trend:"improving",note:"Lowland Baringo pastoral stress"},
  elgeyo_marakwet: {phase:"NORMAL",code:1,trend:"stable",note:"Highland adequate rainfall"},
  // Western — NORMAL / non-ASAL
  vihiga:          {phase:"N/A",code:0,trend:"non-ASAL",note:"Not in NDMA monitoring"},
  busia:           {phase:"N/A",code:0,trend:"non-ASAL",note:"Not in NDMA monitoring"},
  siaya:           {phase:"N/A",code:0,trend:"non-ASAL",note:"Not in NDMA monitoring"},
  migori:          {phase:"N/A",code:0,trend:"non-ASAL",note:"Not in NDMA monitoring"},
  homa_bay:        {phase:"N/A",code:0,trend:"non-ASAL",note:"Not in NDMA monitoring"},
  nyamira:         {phase:"N/A",code:0,trend:"non-ASAL",note:"Not in NDMA monitoring"},
  // Coastal
  lamu:            {phase:"ALERT",code:2,trend:"stable",note:"Coastal ASAL, water scarcity"},
  taita_taveta:    {phase:"ALERT",code:2,trend:"improving",note:"Lowland drought recovering"},
  // Eastern
  tana_river:      {phase:"ALERT",code:2,trend:"worsening",note:"Riverine flooding + pastoral drought"},
  // Additional Counties
  kajiado:         {phase:"ALERT",code:2,trend:"stable",note:"Pastoral lowlands drought stress, Maasai livestock affected"},
  mombasa:         {phase:"N/A",code:0,trend:"non-ASAL",note:"Urban county — not in NDMA monitoring"},
  nandi:           {phase:"N/A",code:0,trend:"non-ASAL",note:"Highland tea county — adequate rainfall"}
};

export const NC_KIAMIS = {
  // ASAL — low registration (10-25%)
  marsabit:        {tot_hh:58000,registered:8700,evoucher_pct:12,lead_county:false},
  wajir:           {tot_hh:72000,registered:7200,evoucher_pct:10,lead_county:false},
  mandera:         {tot_hh:85000,registered:10200,evoucher_pct:11,lead_county:false},
  garissa:         {tot_hh:68000,registered:10200,evoucher_pct:14,lead_county:false},
  isiolo:          {tot_hh:32000,registered:5440,evoucher_pct:15,lead_county:false},
  turkana:         {tot_hh:115000,registered:12650,evoucher_pct:10,lead_county:false},
  samburu:         {tot_hh:42000,registered:8400,evoucher_pct:18,lead_county:false},
  // Rift — moderate
  west_pokot:      {tot_hh:95000,registered:23750,evoucher_pct:22,lead_county:false},
  baringo:         {tot_hh:108000,registered:32400,evoucher_pct:28,lead_county:false},
  elgeyo_marakwet: {tot_hh:78000,registered:31200,evoucher_pct:38,lead_county:false},
  // Western — moderate (35-55%)
  vihiga:          {tot_hh:118000,registered:53100,evoucher_pct:42,lead_county:false},
  busia:           {tot_hh:145000,registered:58000,evoucher_pct:38,lead_county:false},
  siaya:           {tot_hh:158000,registered:63200,evoucher_pct:36,lead_county:false},
  migori:          {tot_hh:168000,registered:67200,evoucher_pct:38,lead_county:false},
  homa_bay:        {tot_hh:172000,registered:68800,evoucher_pct:35,lead_county:false},
  nyamira:         {tot_hh:115000,registered:57500,evoucher_pct:48,lead_county:false},
  // Coastal
  lamu:            {tot_hh:22000,registered:3300,evoucher_pct:12,lead_county:false},
  taita_taveta:    {tot_hh:62000,registered:12400,evoucher_pct:18,lead_county:false},
  // Eastern
  tana_river:      {tot_hh:48000,registered:6240,evoucher_pct:11,lead_county:false},
  // Additional Counties
  kajiado:         {tot_hh:235000,registered:47000,evoucher_pct:18,lead_county:false},
  mombasa:         {tot_hh:305000,registered:6100,evoucher_pct:2,lead_county:false},
  nandi:           {tot_hh:165000,registered:82500,evoucher_pct:48,lead_county:false}
};

export const NC_BETA = {
  // ASAL — planned, low subsidy (15-65M)
  marsabit:        {caip:"planned",caip_pct:8,subsidy_kshM:42,pending_M:185,hustler_M:125},
  wajir:           {caip:"planned",caip_pct:5,subsidy_kshM:28,pending_M:195,hustler_M:95},
  mandera:         {caip:"planned",caip_pct:5,subsidy_kshM:22,pending_M:210,hustler_M:85},
  garissa:         {caip:"planned",caip_pct:8,subsidy_kshM:35,pending_M:178,hustler_M:115},
  isiolo:          {caip:"planned",caip_pct:10,subsidy_kshM:38,pending_M:142,hustler_M:105},
  turkana:         {caip:"planned",caip_pct:5,subsidy_kshM:18,pending_M:245,hustler_M:78},
  samburu:         {caip:"planned",caip_pct:12,subsidy_kshM:45,pending_M:128,hustler_M:95},
  // Rift
  west_pokot:      {caip:"planned",caip_pct:15,subsidy_kshM:65,pending_M:148,hustler_M:165},
  baringo:         {caip:"planned",caip_pct:18,subsidy_kshM:85,pending_M:135,hustler_M:195},
  elgeyo_marakwet: {caip:"construction",caip_pct:35,subsidy_kshM:125,pending_M:108,hustler_M:225},
  // Western — construction, moderate (95-185M)
  vihiga:          {caip:"construction",caip_pct:42,subsidy_kshM:135,pending_M:165,hustler_M:285},
  busia:           {caip:"construction",caip_pct:38,subsidy_kshM:115,pending_M:195,hustler_M:265},
  siaya:           {caip:"construction",caip_pct:35,subsidy_kshM:105,pending_M:205,hustler_M:248},
  migori:          {caip:"construction",caip_pct:38,subsidy_kshM:125,pending_M:185,hustler_M:285},
  homa_bay:        {caip:"construction",caip_pct:35,subsidy_kshM:115,pending_M:198,hustler_M:268},
  nyamira:         {caip:"construction",caip_pct:45,subsidy_kshM:145,pending_M:148,hustler_M:295},
  // Coastal
  lamu:            {caip:"planned",caip_pct:10,subsidy_kshM:28,pending_M:165,hustler_M:85},
  taita_taveta:    {caip:"planned",caip_pct:15,subsidy_kshM:55,pending_M:142,hustler_M:135},
  // Eastern
  tana_river:      {caip:"planned",caip_pct:12,subsidy_kshM:45,pending_M:178,hustler_M:105},
  // Additional Counties
  kajiado:         {caip:"planned",caip_pct:15,subsidy_kshM:72,pending_M:155,hustler_M:185},
  mombasa:         {caip:"N/A",caip_pct:0,subsidy_kshM:8,pending_M:45,hustler_M:42},
  nandi:           {caip:"construction",caip_pct:42,subsidy_kshM:155,pending_M:125,hustler_M:315}
};

export const NC_FOODSEC = {
  // ASAL — IPC 3-4, low stock, high stress
  marsabit:        {ipc:4,stock_days:15,price_vol:0.38,stress_pop_pct:48},
  wajir:           {ipc:4,stock_days:12,price_vol:0.42,stress_pop_pct:52},
  mandera:         {ipc:4,stock_days:10,price_vol:0.45,stress_pop_pct:55},
  garissa:         {ipc:3,stock_days:22,price_vol:0.35,stress_pop_pct:42},
  isiolo:          {ipc:3,stock_days:25,price_vol:0.33,stress_pop_pct:38},
  turkana:         {ipc:4,stock_days:8,price_vol:0.48,stress_pop_pct:58},
  samburu:         {ipc:3,stock_days:28,price_vol:0.30,stress_pop_pct:35},
  // Rift
  west_pokot:      {ipc:3,stock_days:35,price_vol:0.28,stress_pop_pct:28},
  baringo:         {ipc:2,stock_days:55,price_vol:0.22,stress_pop_pct:18},
  elgeyo_marakwet: {ipc:1,stock_days:145,price_vol:0.12,stress_pop_pct:6},
  // Western — IPC 1-2
  vihiga:          {ipc:2,stock_days:115,price_vol:0.15,stress_pop_pct:12},
  busia:           {ipc:2,stock_days:105,price_vol:0.16,stress_pop_pct:14},
  siaya:           {ipc:2,stock_days:95,price_vol:0.17,stress_pop_pct:15},
  migori:          {ipc:2,stock_days:105,price_vol:0.16,stress_pop_pct:13},
  homa_bay:        {ipc:2,stock_days:90,price_vol:0.18,stress_pop_pct:16},
  nyamira:         {ipc:1,stock_days:155,price_vol:0.12,stress_pop_pct:7},
  // Coastal
  lamu:            {ipc:3,stock_days:30,price_vol:0.32,stress_pop_pct:35},
  taita_taveta:    {ipc:2,stock_days:55,price_vol:0.24,stress_pop_pct:22},
  // Eastern
  tana_river:      {ipc:3,stock_days:25,price_vol:0.35,stress_pop_pct:40},
  // Additional Counties
  kajiado:         {ipc:2,stock_days:45,price_vol:0.22,stress_pop_pct:20},
  mombasa:         {ipc:2,stock_days:65,price_vol:0.28,stress_pop_pct:18},
  nandi:           {ipc:1,stock_days:165,price_vol:0.10,stress_pop_pct:5}
};

export const NC_EUDR = {
  marsabit:        {is_coffee:false},
  wajir:           {is_coffee:false},
  mandera:         {is_coffee:false},
  garissa:         {is_coffee:false},
  isiolo:          {is_coffee:false},
  turkana:         {is_coffee:false},
  samburu:         {is_coffee:false},
  west_pokot:      {is_coffee:false},
  baringo:         {is_coffee:true,cherry_kg_M_2024:2.1,clean_kg_M_2024:0.4,eu_share_pct:28,cooperatives:8,farmers_K:5,geotag_pct:22,geotag_velocity:3,forest_loss_ha_post2020:42,forest_loss_pct_in_coffee:8,cooperatives_eudr_ready:1,partnership:"AFA pilot",buyer_engagement:"Limited — mostly local market",policy_lead:"North Rift KEPHIS"},
  elgeyo_marakwet: {is_coffee:false},
  vihiga:          {is_coffee:false},
  busia:           {is_coffee:false},
  siaya:           {is_coffee:false},
  migori:          {is_coffee:false},
  homa_bay:        {is_coffee:false},
  nyamira:         {is_coffee:false},
  lamu:            {is_coffee:false},
  taita_taveta:    {is_coffee:false},
  tana_river:      {is_coffee:false},
  // Additional Counties
  kajiado:         {is_coffee:false},
  mombasa:         {is_coffee:false},
  nandi:           {is_coffee:false}
};

export const NC_DAIRY = {
  // ASAL — pastoral, camel/goat milk, low formal
  marsabit:        {milk_ML:18,cows_K:25,formal_pct:3,anitrac_pct:1,processor:"Camel milk informal"},
  wajir:           {milk_ML:12,cows_K:18,formal_pct:2,anitrac_pct:1,processor:"Camel/goat milk informal"},
  mandera:         {milk_ML:10,cows_K:15,formal_pct:2,anitrac_pct:1,processor:"Camel/goat milk informal"},
  garissa:         {milk_ML:15,cows_K:22,formal_pct:3,anitrac_pct:1,processor:"Camel milk informal"},
  isiolo:          {milk_ML:22,cows_K:28,formal_pct:4,anitrac_pct:2,processor:"Anolei Camel Milk"},
  turkana:         {milk_ML:8,cows_K:12,formal_pct:2,anitrac_pct:1,processor:"Camel/goat milk informal"},
  samburu:         {milk_ML:15,cows_K:22,formal_pct:3,anitrac_pct:1,processor:"Pastoral informal"},
  // Rift
  west_pokot:      {milk_ML:32,cows_K:42,formal_pct:6,anitrac_pct:3,processor:"Mainly informal"},
  baringo:         {milk_ML:45,cows_K:58,formal_pct:8,anitrac_pct:4,processor:"Mainly informal"},
  elgeyo_marakwet: {milk_ML:85,cows_K:62,formal_pct:18,anitrac_pct:8,processor:"New KCC"},
  // Western — smallholder, low formal
  vihiga:          {milk_ML:48,cows_K:38,formal_pct:10,anitrac_pct:4,processor:"Mainly informal"},
  busia:           {milk_ML:42,cows_K:45,formal_pct:8,anitrac_pct:3,processor:"Mainly informal"},
  siaya:           {milk_ML:35,cows_K:42,formal_pct:7,anitrac_pct:3,processor:"Mainly informal"},
  migori:          {milk_ML:38,cows_K:48,formal_pct:8,anitrac_pct:3,processor:"Mainly informal"},
  homa_bay:        {milk_ML:32,cows_K:42,formal_pct:6,anitrac_pct:3,processor:"Mainly informal"},
  nyamira:         {milk_ML:75,cows_K:55,formal_pct:15,anitrac_pct:7,processor:"New KCC"},
  // Coastal
  lamu:            {milk_ML:5,cows_K:8,formal_pct:2,anitrac_pct:1,processor:"Informal only"},
  taita_taveta:    {milk_ML:28,cows_K:35,formal_pct:6,anitrac_pct:3,processor:"Informal only"},
  // Eastern
  tana_river:      {milk_ML:12,cows_K:18,formal_pct:3,anitrac_pct:1,processor:"Pastoral informal"},
  // Additional Counties
  kajiado:         {milk_ML:65,cows_K:85,formal_pct:12,anitrac_pct:5,processor:"Brookside (Nairobi corridor)"},
  mombasa:         {milk_ML:3,cows_K:2,formal_pct:1,anitrac_pct:0,processor:"Imported from upcountry"},
  nandi:           {milk_ML:145,cows_K:120,formal_pct:28,anitrac_pct:12,processor:"Brookside / New KCC"}
};

export const NC_DVS = {
  // ASAL — HIGH disease risk
  marsabit:        {fmd_risk:5,lsd:4,ppr:4,rvf:3,cbpp:4,vacc_pct:25,recent_outbreak:"PPR Apr 2026",outbreaks_12m:5},
  wajir:           {fmd_risk:4,lsd:4,ppr:5,rvf:3,cbpp:4,vacc_pct:18,recent_outbreak:"PPR Mar 2026",outbreaks_12m:6},
  mandera:         {fmd_risk:5,lsd:4,ppr:5,rvf:3,cbpp:4,vacc_pct:15,recent_outbreak:"FMD-O Feb 2026 + PPR",outbreaks_12m:7},
  garissa:         {fmd_risk:4,lsd:3,ppr:4,rvf:3,cbpp:3,vacc_pct:22,recent_outbreak:"RVF watch Jan 2026",outbreaks_12m:5},
  isiolo:          {fmd_risk:4,lsd:3,ppr:4,rvf:3,cbpp:3,vacc_pct:28,recent_outbreak:"CBPP Mar 2026",outbreaks_12m:4},
  turkana:         {fmd_risk:5,lsd:4,ppr:5,rvf:4,cbpp:4,vacc_pct:12,recent_outbreak:"PPR + CCPP Apr 2026",outbreaks_12m:8},
  samburu:         {fmd_risk:4,lsd:3,ppr:4,rvf:3,cbpp:3,vacc_pct:30,recent_outbreak:"FMD Feb 2026",outbreaks_12m:4},
  // Rift
  west_pokot:      {fmd_risk:4,lsd:3,ppr:3,rvf:3,cbpp:3,vacc_pct:35,recent_outbreak:"FMD Jan 2026",outbreaks_12m:3},
  baringo:         {fmd_risk:3,lsd:3,ppr:3,rvf:3,cbpp:2,vacc_pct:42,recent_outbreak:"RVF watch Dec 2025",outbreaks_12m:3},
  elgeyo_marakwet: {fmd_risk:2,lsd:2,ppr:1,rvf:1,cbpp:1,vacc_pct:65,recent_outbreak:"None active",outbreaks_12m:1},
  // Western — moderate
  vihiga:          {fmd_risk:2,lsd:2,ppr:1,rvf:1,cbpp:1,vacc_pct:52,recent_outbreak:"None active",outbreaks_12m:1},
  busia:           {fmd_risk:3,lsd:2,ppr:2,rvf:1,cbpp:1,vacc_pct:48,recent_outbreak:"FMD cross-border watch",outbreaks_12m:2},
  siaya:           {fmd_risk:2,lsd:2,ppr:2,rvf:2,cbpp:1,vacc_pct:48,recent_outbreak:"None active",outbreaks_12m:1},
  migori:          {fmd_risk:3,lsd:2,ppr:2,rvf:2,cbpp:1,vacc_pct:45,recent_outbreak:"FMD cross-border TZ watch",outbreaks_12m:2},
  homa_bay:        {fmd_risk:2,lsd:2,ppr:2,rvf:2,cbpp:1,vacc_pct:45,recent_outbreak:"None active",outbreaks_12m:1},
  nyamira:         {fmd_risk:2,lsd:2,ppr:1,rvf:1,cbpp:1,vacc_pct:58,recent_outbreak:"None active",outbreaks_12m:1},
  // Coastal
  lamu:            {fmd_risk:3,lsd:3,ppr:3,rvf:3,cbpp:2,vacc_pct:28,recent_outbreak:"PPR Dec 2025",outbreaks_12m:3},
  taita_taveta:    {fmd_risk:3,lsd:2,ppr:2,rvf:2,cbpp:2,vacc_pct:38,recent_outbreak:"None active",outbreaks_12m:2},
  // Eastern
  tana_river:      {fmd_risk:4,lsd:3,ppr:4,rvf:4,cbpp:3,vacc_pct:22,recent_outbreak:"RVF alert Mar 2026",outbreaks_12m:5},
  // Additional Counties
  kajiado:         {fmd_risk:3,lsd:3,ppr:2,rvf:2,cbpp:2,vacc_pct:42,recent_outbreak:"FMD watch Feb 2026",outbreaks_12m:3},
  mombasa:         {fmd_risk:1,lsd:1,ppr:0,rvf:0,cbpp:0,vacc_pct:15,recent_outbreak:"None active",outbreaks_12m:0},
  nandi:           {fmd_risk:2,lsd:2,ppr:1,rvf:1,cbpp:1,vacc_pct:62,recent_outbreak:"None active",outbreaks_12m:1}
};

export const NC_EXPORTS = {
  // ASAL — very low exports
  marsabit:        {hort_kshM:120,flowers_kshM:0,avocado_kshM:0,mango_kshM:15,fbeans_kshM:0,mrl_rej_pct:0,top_market:"Local",cert_farms:5},
  wajir:           {hort_kshM:45,flowers_kshM:0,avocado_kshM:0,mango_kshM:0,fbeans_kshM:0,mrl_rej_pct:0,top_market:"Local",cert_farms:0},
  mandera:         {hort_kshM:35,flowers_kshM:0,avocado_kshM:0,mango_kshM:0,fbeans_kshM:0,mrl_rej_pct:0,top_market:"Local",cert_farms:0},
  garissa:         {hort_kshM:85,flowers_kshM:0,avocado_kshM:0,mango_kshM:12,fbeans_kshM:0,mrl_rej_pct:0,top_market:"Local",cert_farms:2},
  isiolo:          {hort_kshM:95,flowers_kshM:0,avocado_kshM:0,mango_kshM:8,fbeans_kshM:0,mrl_rej_pct:0,top_market:"Local",cert_farms:3},
  turkana:         {hort_kshM:28,flowers_kshM:0,avocado_kshM:0,mango_kshM:0,fbeans_kshM:0,mrl_rej_pct:0,top_market:"Local",cert_farms:0},
  samburu:         {hort_kshM:65,flowers_kshM:0,avocado_kshM:0,mango_kshM:0,fbeans_kshM:0,mrl_rej_pct:0,top_market:"Local",cert_farms:2},
  // Rift
  west_pokot:      {hort_kshM:280,flowers_kshM:12,avocado_kshM:35,mango_kshM:25,fbeans_kshM:15,mrl_rej_pct:3.8,top_market:"Local",cert_farms:12},
  baringo:         {hort_kshM:420,flowers_kshM:35,avocado_kshM:48,mango_kshM:85,fbeans_kshM:28,mrl_rej_pct:4.2,top_market:"Local + UAE",cert_farms:18},
  elgeyo_marakwet: {hort_kshM:650,flowers_kshM:85,avocado_kshM:120,mango_kshM:15,fbeans_kshM:48,mrl_rej_pct:3.5,top_market:"Netherlands",cert_farms:28},
  // Western — moderate
  vihiga:          {hort_kshM:1800,flowers_kshM:35,avocado_kshM:580,mango_kshM:18,fbeans_kshM:48,mrl_rej_pct:4.5,top_market:"Netherlands (avocado)",cert_farms:45},
  busia:           {hort_kshM:1200,flowers_kshM:15,avocado_kshM:280,mango_kshM:35,fbeans_kshM:35,mrl_rej_pct:4.8,top_market:"Local + UG border",cert_farms:32},
  siaya:           {hort_kshM:850,flowers_kshM:12,avocado_kshM:185,mango_kshM:42,fbeans_kshM:28,mrl_rej_pct:5.0,top_market:"Local",cert_farms:22},
  migori:          {hort_kshM:1450,flowers_kshM:18,avocado_kshM:320,mango_kshM:120,fbeans_kshM:42,mrl_rej_pct:4.5,top_market:"Local + TZ border",cert_farms:38},
  homa_bay:        {hort_kshM:980,flowers_kshM:12,avocado_kshM:220,mango_kshM:85,fbeans_kshM:28,mrl_rej_pct:5.2,top_market:"Local",cert_farms:28},
  nyamira:         {hort_kshM:2400,flowers_kshM:42,avocado_kshM:680,mango_kshM:15,fbeans_kshM:85,mrl_rej_pct:3.8,top_market:"Netherlands (avocado)",cert_farms:55},
  // Coastal
  lamu:            {hort_kshM:480,flowers_kshM:0,avocado_kshM:12,mango_kshM:220,fbeans_kshM:0,mrl_rej_pct:5.5,top_market:"UAE (mango)",cert_farms:15},
  taita_taveta:    {hort_kshM:1850,flowers_kshM:48,avocado_kshM:85,mango_kshM:280,fbeans_kshM:35,mrl_rej_pct:4.8,top_market:"UAE",cert_farms:42},
  // Eastern
  tana_river:      {hort_kshM:380,flowers_kshM:0,avocado_kshM:12,mango_kshM:145,fbeans_kshM:8,mrl_rej_pct:5.8,top_market:"Local",cert_farms:8},
  // Additional Counties
  kajiado:         {hort_kshM:2800,flowers_kshM:450,avocado_kshM:180,mango_kshM:35,fbeans_kshM:120,mrl_rej_pct:3.2,top_market:"Netherlands (flowers)",cert_farms:65},
  mombasa:         {hort_kshM:85,flowers_kshM:0,avocado_kshM:0,mango_kshM:8,fbeans_kshM:0,mrl_rej_pct:0,top_market:"Local (transit port)",cert_farms:2},
  nandi:           {hort_kshM:1850,flowers_kshM:48,avocado_kshM:420,mango_kshM:12,fbeans_kshM:65,mrl_rej_pct:3.5,top_market:"Netherlands (avocado/tea)",cert_farms:52}
};

export const NC_COLDCHAIN = {
  // ASAL — 0-1 stores
  marsabit:        {cold_stores:0,capacity_mt:0,pack_houses:0,ripening_chambers:0,jkia_proximity:"~540km",gap_days:8},
  wajir:           {cold_stores:0,capacity_mt:0,pack_houses:0,ripening_chambers:0,jkia_proximity:"~660km",gap_days:10},
  mandera:         {cold_stores:0,capacity_mt:0,pack_houses:0,ripening_chambers:0,jkia_proximity:"~800km",gap_days:12},
  garissa:         {cold_stores:1,capacity_mt:500,pack_houses:0,ripening_chambers:0,jkia_proximity:"~370km",gap_days:7},
  isiolo:          {cold_stores:1,capacity_mt:800,pack_houses:0,ripening_chambers:0,jkia_proximity:"~280km",gap_days:6},
  turkana:         {cold_stores:0,capacity_mt:0,pack_houses:0,ripening_chambers:0,jkia_proximity:"~700km",gap_days:12},
  samburu:         {cold_stores:0,capacity_mt:0,pack_houses:0,ripening_chambers:0,jkia_proximity:"~340km",gap_days:7},
  // Rift
  west_pokot:      {cold_stores:1,capacity_mt:800,pack_houses:0,ripening_chambers:0,jkia_proximity:"~420km",gap_days:6},
  baringo:         {cold_stores:1,capacity_mt:1200,pack_houses:1,ripening_chambers:0,jkia_proximity:"~280km",gap_days:5},
  elgeyo_marakwet: {cold_stores:2,capacity_mt:2500,pack_houses:1,ripening_chambers:0,jkia_proximity:"~320km",gap_days:4},
  // Western — 2-4 stores
  vihiga:          {cold_stores:2,capacity_mt:2500,pack_houses:1,ripening_chambers:0,jkia_proximity:"~390km",gap_days:5},
  busia:           {cold_stores:2,capacity_mt:2800,pack_houses:1,ripening_chambers:0,jkia_proximity:"~430km",gap_days:5},
  siaya:           {cold_stores:2,capacity_mt:2200,pack_houses:1,ripening_chambers:0,jkia_proximity:"~370km",gap_days:5},
  migori:          {cold_stores:3,capacity_mt:3500,pack_houses:2,ripening_chambers:1,jkia_proximity:"~400km",gap_days:4},
  homa_bay:        {cold_stores:2,capacity_mt:2500,pack_houses:1,ripening_chambers:0,jkia_proximity:"~380km",gap_days:5},
  nyamira:         {cold_stores:3,capacity_mt:4000,pack_houses:2,ripening_chambers:1,jkia_proximity:"~310km",gap_days:4},
  // Coastal
  lamu:            {cold_stores:1,capacity_mt:1500,pack_houses:1,ripening_chambers:0,jkia_proximity:"~520km Lamu Port",gap_days:6},
  taita_taveta:    {cold_stores:2,capacity_mt:3000,pack_houses:1,ripening_chambers:1,jkia_proximity:"~350km",gap_days:5},
  // Eastern
  tana_river:      {cold_stores:1,capacity_mt:800,pack_houses:0,ripening_chambers:0,jkia_proximity:"~440km",gap_days:7},
  // Additional Counties
  kajiado:         {cold_stores:4,capacity_mt:5500,pack_houses:3,ripening_chambers:2,jkia_proximity:"~60km",gap_days:2},
  mombasa:         {cold_stores:8,capacity_mt:12000,pack_houses:4,ripening_chambers:3,jkia_proximity:"~480km (Moi Intl 10km)",gap_days:2},
  nandi:           {cold_stores:3,capacity_mt:4500,pack_houses:2,ripening_chambers:1,jkia_proximity:"~340km",gap_days:4}
};

export const NC_MECH = {
  // ASAL — very low (0.1-0.3)
  marsabit:        {tractors_per_1k_ha:0.1,atdc_active:false,combines:0,subsidy_kshM:1,mech_score:5},
  wajir:           {tractors_per_1k_ha:0.1,atdc_active:false,combines:0,subsidy_kshM:0,mech_score:3},
  mandera:         {tractors_per_1k_ha:0.1,atdc_active:false,combines:0,subsidy_kshM:0,mech_score:3},
  garissa:         {tractors_per_1k_ha:0.2,atdc_active:false,combines:0,subsidy_kshM:1,mech_score:5},
  isiolo:          {tractors_per_1k_ha:0.2,atdc_active:false,combines:0,subsidy_kshM:1,mech_score:6},
  turkana:         {tractors_per_1k_ha:0.1,atdc_active:false,combines:0,subsidy_kshM:0,mech_score:3},
  samburu:         {tractors_per_1k_ha:0.2,atdc_active:false,combines:0,subsidy_kshM:1,mech_score:5},
  // Rift
  west_pokot:      {tractors_per_1k_ha:0.3,atdc_active:false,combines:0,subsidy_kshM:3,mech_score:10},
  baringo:         {tractors_per_1k_ha:0.5,atdc_active:false,combines:0,subsidy_kshM:5,mech_score:15},
  elgeyo_marakwet: {tractors_per_1k_ha:0.8,atdc_active:false,combines:1,subsidy_kshM:8,mech_score:22},
  // Western — low (0.5-1.0)
  vihiga:          {tractors_per_1k_ha:0.6,atdc_active:false,combines:0,subsidy_kshM:5,mech_score:18},
  busia:           {tractors_per_1k_ha:0.7,atdc_active:false,combines:0,subsidy_kshM:6,mech_score:20},
  siaya:           {tractors_per_1k_ha:0.5,atdc_active:false,combines:0,subsidy_kshM:5,mech_score:16},
  migori:          {tractors_per_1k_ha:0.6,atdc_active:false,combines:0,subsidy_kshM:5,mech_score:18},
  homa_bay:        {tractors_per_1k_ha:0.5,atdc_active:false,combines:0,subsidy_kshM:4,mech_score:15},
  nyamira:         {tractors_per_1k_ha:0.8,atdc_active:false,combines:1,subsidy_kshM:8,mech_score:22},
  // Coastal
  lamu:            {tractors_per_1k_ha:0.2,atdc_active:false,combines:0,subsidy_kshM:1,mech_score:6},
  taita_taveta:    {tractors_per_1k_ha:0.4,atdc_active:false,combines:0,subsidy_kshM:3,mech_score:12},
  // Eastern
  tana_river:      {tractors_per_1k_ha:0.3,atdc_active:false,combines:0,subsidy_kshM:2,mech_score:8},
  // Additional Counties
  kajiado:         {tractors_per_1k_ha:0.5,atdc_active:false,combines:0,subsidy_kshM:5,mech_score:15},
  mombasa:         {tractors_per_1k_ha:0.0,atdc_active:false,combines:0,subsidy_kshM:0,mech_score:0},
  nandi:           {tractors_per_1k_ha:1.0,atdc_active:false,combines:2,subsidy_kshM:12,mech_score:28}
};

export const NC_NCPB = {
  // ASAL counties with depots
  marsabit:        {depot:"Marsabit",capacity_bags:40000,current_bags:8000,stock_days:22,silos:1,role:"ASAL relief"},
  wajir:           {depot:"None",capacity_bags:0,current_bags:0,stock_days:0,silos:0,role:"No depot — relief trucked from Garissa"},
  mandera:         {depot:"Mandera",capacity_bags:35000,current_bags:5000,stock_days:15,silos:1,role:"ASAL relief — border"},
  garissa:         {depot:"Garissa",capacity_bags:60000,current_bags:18000,stock_days:35,silos:1,role:"ASAL relief — regional hub"},
  isiolo:          {depot:"Isiolo",capacity_bags:30000,current_bags:8000,stock_days:28,silos:1,role:"ASAL relief"},
  turkana:         {depot:"Lodwar",capacity_bags:25000,current_bags:4000,stock_days:12,silos:1,role:"ASAL relief — humanitarian"},
  samburu:         {depot:"Maralal",capacity_bags:20000,current_bags:5000,stock_days:25,silos:0,role:"ASAL relief — small warehouse"},
  // Rift
  west_pokot:      {depot:"Kapenguria",capacity_bags:45000,current_bags:12000,stock_days:55,silos:1,role:"Regional"},
  baringo:         {depot:"Kabarnet",capacity_bags:60000,current_bags:22000,stock_days:85,silos:1,role:"Regional"},
  elgeyo_marakwet: {depot:"Iten",capacity_bags:50000,current_bags:18000,stock_days:95,silos:1,role:"Regional"},
  // Western
  vihiga:          {depot:"Vihiga",capacity_bags:45000,current_bags:15000,stock_days:85,silos:1,role:"Regional"},
  busia:           {depot:"Busia",capacity_bags:60000,current_bags:22000,stock_days:75,silos:1,role:"Border — cross-border trade hub"},
  siaya:           {depot:"Siaya",capacity_bags:40000,current_bags:12000,stock_days:65,silos:1,role:"Regional"},
  migori:          {depot:"Migori",capacity_bags:50000,current_bags:18000,stock_days:75,silos:1,role:"Regional — border"},
  homa_bay:        {depot:"Homa Bay",capacity_bags:45000,current_bags:12000,stock_days:55,silos:1,role:"Regional"},
  nyamira:         {depot:"Nyamira",capacity_bags:50000,current_bags:22000,stock_days:105,silos:1,role:"Regional"},
  // Coastal
  lamu:            {depot:"Lamu",capacity_bags:20000,current_bags:4000,stock_days:22,silos:0,role:"ASAL relief — port"},
  taita_taveta:    {depot:"Voi",capacity_bags:40000,current_bags:12000,stock_days:55,silos:1,role:"ASAL relief — transit"},
  // Eastern
  tana_river:      {depot:"Hola",capacity_bags:35000,current_bags:8000,stock_days:28,silos:1,role:"ASAL relief — irrigation zone"},
  // Additional Counties
  kajiado:         {depot:"Kajiado",capacity_bags:40000,current_bags:10000,stock_days:45,silos:1,role:"Regional — peri-urban Nairobi"},
  mombasa:         {depot:"Mombasa Port",capacity_bags:120000,current_bags:45000,stock_days:85,silos:3,role:"Strategic — national import hub, Kilindini port"},
  nandi:           {depot:"Kapsabet",capacity_bags:65000,current_bags:28000,stock_days:115,silos:2,role:"Regional — major maize surplus county"}
};

export const NC_PHYTO = {
  // Ports/Borders
  marsabit:        {poe:"Moyale Border",insp_2024:850,certs_issued:120,interceptions:18,role:"Ethiopia border"},
  wajir:           {poe:"None",insp_2024:0,certs_issued:0,interceptions:0,role:"Inland — no port"},
  mandera:         {poe:"Mandera Border",insp_2024:620,certs_issued:85,interceptions:22,role:"Ethiopia/Somalia border"},
  garissa:         {poe:"None",insp_2024:0,certs_issued:0,interceptions:0,role:"Inland — no port"},
  isiolo:          {poe:"None",insp_2024:0,certs_issued:0,interceptions:0,role:"Inland — no port"},
  turkana:         {poe:"Nadapal Border",insp_2024:280,certs_issued:42,interceptions:12,role:"South Sudan border"},
  samburu:         {poe:"None",insp_2024:0,certs_issued:0,interceptions:0,role:"Inland — no port"},
  west_pokot:      {poe:"None",insp_2024:0,certs_issued:0,interceptions:0,role:"Inland — no port"},
  baringo:         {poe:"None",insp_2024:0,certs_issued:0,interceptions:0,role:"Inland — no port"},
  elgeyo_marakwet: {poe:"None",insp_2024:0,certs_issued:0,interceptions:0,role:"Inland — no port"},
  vihiga:          {poe:"None",insp_2024:0,certs_issued:0,interceptions:0,role:"Inland — no port"},
  busia:           {poe:"Busia Border",insp_2024:2800,certs_issued:420,interceptions:32,role:"UG border — major crossing"},
  siaya:           {poe:"None",insp_2024:0,certs_issued:0,interceptions:0,role:"Inland — no port"},
  migori:          {poe:"Isebania Border",insp_2024:1450,certs_issued:225,interceptions:28,role:"TZ border"},
  homa_bay:        {poe:"None",insp_2024:0,certs_issued:0,interceptions:0,role:"Inland — no port"},
  nyamira:         {poe:"None",insp_2024:0,certs_issued:0,interceptions:0,role:"Inland — no port"},
  lamu:            {poe:"Lamu Port",insp_2024:2200,certs_issued:380,interceptions:25,role:"Sea export — LAPSSET corridor"},
  taita_taveta:    {poe:"Taveta Border",insp_2024:680,certs_issued:95,interceptions:15,role:"TZ border"},
  tana_river:      {poe:"None",insp_2024:0,certs_issued:0,interceptions:0,role:"Inland — no port"},
  // Additional Counties
  kajiado:         {poe:"Namanga Border",insp_2024:1850,certs_issued:285,interceptions:22,role:"TZ border — Namanga crossing"},
  mombasa:         {poe:"Kilindini Port / Moi Intl Airport",insp_2024:18500,certs_issued:4200,interceptions:185,role:"Major KEPHIS inspection — sea + air port, national gateway"},
  nandi:           {poe:"None",insp_2024:0,certs_issued:0,interceptions:0,role:"Inland — no port"}
};

export const NC_DFZ = {
  // ASAL pastoral — proposed/compartment
  marsabit:        {status:"proposed",progress:8,target_year:2030,abattoirs:1,role:"Pastoral beef — camel/cattle export"},
  wajir:           {status:"proposed",progress:5,target_year:2030,abattoirs:0,role:"Pastoral — camel export potential"},
  mandera:         {status:"proposed",progress:5,target_year:2030,abattoirs:0,role:"Pastoral — cross-border livestock"},
  garissa:         {status:"compartment",progress:18,target_year:2029,abattoirs:2,role:"Garissa livestock market — export abattoir"},
  isiolo:          {status:"compartment",progress:22,target_year:2028,abattoirs:2,role:"Isiolo livestock market — KLMC"},
  turkana:         {status:"proposed",progress:5,target_year:2031,abattoirs:0,role:"Pastoral — Turkana livestock corridor"},
  samburu:         {status:"proposed",progress:10,target_year:2030,abattoirs:1,role:"Pastoral beef — Maralal market"},
  // Rift
  west_pokot:      {status:"proposed",progress:12,target_year:2029,abattoirs:1,role:"Pastoral — Pokot cattle"},
  baringo:         {status:"proposed",progress:15,target_year:2029,abattoirs:1,role:"Pastoral lowlands — Marigat market"},
  elgeyo_marakwet: {status:"none",progress:0,target_year:null,abattoirs:0,role:"Not in DFZ programme"},
  // Western — none
  vihiga:          {status:"none",progress:0,target_year:null,abattoirs:0,role:"Not in DFZ programme"},
  busia:           {status:"none",progress:0,target_year:null,abattoirs:0,role:"Not in DFZ programme"},
  siaya:           {status:"none",progress:0,target_year:null,abattoirs:0,role:"Not in DFZ programme"},
  migori:          {status:"none",progress:0,target_year:null,abattoirs:0,role:"Not in DFZ programme"},
  homa_bay:        {status:"none",progress:0,target_year:null,abattoirs:0,role:"Not in DFZ programme"},
  nyamira:         {status:"none",progress:0,target_year:null,abattoirs:0,role:"Not in DFZ programme"},
  // Coastal
  lamu:            {status:"proposed",progress:8,target_year:2030,abattoirs:0,role:"LAPSSET corridor — future livestock export"},
  taita_taveta:    {status:"proposed",progress:12,target_year:2029,abattoirs:1,role:"Taita ranching — Voi abattoir"},
  // Eastern
  tana_river:      {status:"proposed",progress:10,target_year:2029,abattoirs:1,role:"Tana Delta pastoral — export potential"},
  // Additional Counties
  kajiado:         {status:"compartment",progress:25,target_year:2028,abattoirs:3,role:"Maasai pastoral — Kiserian/Athi River abattoirs, Nairobi market"},
  mombasa:         {status:"none",progress:0,target_year:null,abattoirs:1,role:"Urban slaughter — Kibarani municipal abattoir only"},
  nandi:           {status:"none",progress:0,target_year:null,abattoirs:0,role:"Not in DFZ programme — dairy focus county"}
};

export const NC_FLAGSHIP = {
  // tana_river already exists in main FLAGSHIP — skip here or include for completeness
  marsabit:        {projects:["Walda Feedlot","NDMA Pastoral Resilience"],galana_ha:0,galana_target_ha:0,nib_ha:0,investment_kshB:1.2},
  wajir:           {projects:[],galana_ha:0,galana_target_ha:0,nib_ha:0,investment_kshB:0},
  mandera:         {projects:[],galana_ha:0,galana_target_ha:0,nib_ha:0,investment_kshB:0},
  garissa:         {projects:["Garissa Solar Irrigation"],galana_ha:0,galana_target_ha:0,nib_ha:2500,investment_kshB:1.5},
  isiolo:          {projects:["Isiolo Livestock Market Modernisation"],galana_ha:0,galana_target_ha:0,nib_ha:0,investment_kshB:0.8},
  turkana:         {projects:["Turkana 50k Fodder Production","LAPSSET Corridor Ag-Hub","Turkwel Irrigation"],galana_ha:0,galana_target_ha:0,nib_ha:3200,investment_kshB:2.8},
  samburu:         {projects:[],galana_ha:0,galana_target_ha:0,nib_ha:0,investment_kshB:0},
  west_pokot:      {projects:["Wei Wei Irrigation Scheme"],galana_ha:0,galana_target_ha:0,nib_ha:1800,investment_kshB:1.2},
  baringo:         {projects:["Perkerra Irrigation Scheme","Lake Baringo Fish Farming"],galana_ha:0,galana_target_ha:0,nib_ha:2850,investment_kshB:2.2},
  elgeyo_marakwet: {projects:[],galana_ha:0,galana_target_ha:0,nib_ha:0,investment_kshB:0},
  vihiga:          {projects:[],galana_ha:0,galana_target_ha:0,nib_ha:0,investment_kshB:0},
  busia:           {projects:[],galana_ha:0,galana_target_ha:0,nib_ha:0,investment_kshB:0},
  siaya:           {projects:[],galana_ha:0,galana_target_ha:0,nib_ha:0,investment_kshB:0},
  migori:          {projects:[],galana_ha:0,galana_target_ha:0,nib_ha:0,investment_kshB:0},
  homa_bay:        {projects:[],galana_ha:0,galana_target_ha:0,nib_ha:0,investment_kshB:0},
  nyamira:         {projects:[],galana_ha:0,galana_target_ha:0,nib_ha:0,investment_kshB:0},
  lamu:            {projects:["LAPSSET Port Agri-Corridor"],galana_ha:0,galana_target_ha:0,nib_ha:0,investment_kshB:1.5},
  taita_taveta:    {projects:["Taveta Irrigation"],galana_ha:0,galana_target_ha:0,nib_ha:1200,investment_kshB:0.9},
  tana_river:      {projects:["Galana-Kulalu","Bura Irrigation Scheme","Hola Irrigation"],galana_ha:0,galana_target_ha:0,nib_ha:18500,investment_kshB:8.2},
  // Additional Counties
  kajiado:         {projects:["Athi River Industrial Zone","Konza Technopolis Agri-Hub"],galana_ha:0,galana_target_ha:0,nib_ha:800,investment_kshB:2.5},
  mombasa:         {projects:["Kilindini Port Expansion","Mombasa Special Economic Zone"],galana_ha:0,galana_target_ha:0,nib_ha:0,investment_kshB:0.5},
  nandi:           {projects:["Nandi Hills Tea Revitalisation","County Dairy Hub"],galana_ha:0,galana_target_ha:0,nib_ha:0,investment_kshB:1.8}
};

export const NC_AGRA = {
  // ASAL
  marsabit:        {agro_dealers:18,piata_vc:["Drought-tolerant maize"],programmes:["NDMA resilience"],agra_active:false,intensity:"Low",stark:false},
  wajir:           {agro_dealers:8,piata_vc:[],programmes:[],agra_active:false,intensity:"None",stark:false},
  mandera:         {agro_dealers:6,piata_vc:[],programmes:[],agra_active:false,intensity:"None",stark:false},
  garissa:         {agro_dealers:22,piata_vc:["Drought-tolerant maize"],programmes:["NARIGP"],agra_active:false,intensity:"Low",stark:false},
  isiolo:          {agro_dealers:15,piata_vc:["Drought-tolerant maize"],programmes:["NARIGP"],agra_active:false,intensity:"Low",stark:false},
  turkana:         {agro_dealers:12,piata_vc:[],programmes:["NDMA pastoral resilience"],agra_active:false,intensity:"None",stark:false},
  samburu:         {agro_dealers:14,piata_vc:[],programmes:["NARIGP"],agra_active:false,intensity:"Low",stark:false},
  // Rift
  west_pokot:      {agro_dealers:68,piata_vc:["Maize","Sorghum"],programmes:["NARIGP","KAVES"],agra_active:false,intensity:"Low",stark:false},
  baringo:         {agro_dealers:85,piata_vc:["Maize","Sorghum"],programmes:["NARIGP","KAVES","Perkerra irrigation"],agra_active:false,intensity:"Medium",stark:false},
  elgeyo_marakwet: {agro_dealers:98,piata_vc:["Maize"],programmes:["KAVES (USAID)"],agra_active:false,intensity:"Medium",stark:false},
  // Western
  vihiga:          {agro_dealers:165,piata_vc:["Maize"],programmes:["KAVES (USAID)"],agra_active:false,intensity:"Low",stark:false},
  busia:           {agro_dealers:142,piata_vc:["Maize"],programmes:["KAVES (USAID)"],agra_active:false,intensity:"Low",stark:false},
  siaya:           {agro_dealers:128,piata_vc:[],programmes:["KAVES (USAID)"],agra_active:false,intensity:"Low",stark:false},
  migori:          {agro_dealers:155,piata_vc:[],programmes:["KAVES (USAID)"],agra_active:false,intensity:"Low",stark:false},
  homa_bay:        {agro_dealers:148,piata_vc:[],programmes:["KAVES (USAID)"],agra_active:false,intensity:"Low",stark:false},
  nyamira:         {agro_dealers:135,piata_vc:["Maize"],programmes:["KAVES (USAID)"],agra_active:false,intensity:"Low",stark:false},
  // Coastal
  lamu:            {agro_dealers:12,piata_vc:[],programmes:["NARIGP"],agra_active:false,intensity:"Low",stark:false},
  taita_taveta:    {agro_dealers:48,piata_vc:["Drought-tolerant maize"],programmes:["NARIGP"],agra_active:false,intensity:"Low",stark:false},
  // Eastern
  tana_river:      {agro_dealers:22,piata_vc:["Drought-tolerant maize"],programmes:["NARIGP"],agra_active:false,intensity:"Low",stark:false},
  // Additional Counties
  kajiado:         {agro_dealers:95,piata_vc:["Drought-tolerant maize"],programmes:["NARIGP","KAVES"],agra_active:false,intensity:"Medium",stark:false},
  mombasa:         {agro_dealers:15,piata_vc:[],programmes:[],agra_active:false,intensity:"None",stark:false},
  nandi:           {agro_dealers:185,piata_vc:["Maize","Tea"],programmes:["KAVES (USAID)","KTDA smallholder"],agra_active:false,intensity:"Medium",stark:false}
};

export const NC_DEALERS = {
  // ASAL — 15-45 dealers
  marsabit:        {total:22,kephis_seed:4,pcpb_pest:8,croplife:2,density_per_1k_hh:0.4,women_led_pct:18,wards_uncovered:12,counterfeit_alerts_12m:1,data_quality:"estimated",nearest_kephis_office:"Mt Kenya (Embu)"},
  wajir:           {total:15,kephis_seed:2,pcpb_pest:5,croplife:1,density_per_1k_hh:0.2,women_led_pct:12,wards_uncovered:18,counterfeit_alerts_12m:1,data_quality:"estimated",nearest_kephis_office:"North Eastern (Garissa)"},
  mandera:         {total:18,kephis_seed:3,pcpb_pest:6,croplife:1,density_per_1k_hh:0.2,women_led_pct:10,wards_uncovered:20,counterfeit_alerts_12m:2,data_quality:"estimated",nearest_kephis_office:"North Eastern (Garissa)"},
  garissa:         {total:28,kephis_seed:5,pcpb_pest:10,croplife:2,density_per_1k_hh:0.4,women_led_pct:15,wards_uncovered:15,counterfeit_alerts_12m:1,data_quality:"estimated",nearest_kephis_office:"North Eastern (Garissa)"},
  isiolo:          {total:22,kephis_seed:4,pcpb_pest:8,croplife:2,density_per_1k_hh:0.7,women_led_pct:18,wards_uncovered:8,counterfeit_alerts_12m:1,data_quality:"estimated",nearest_kephis_office:"Mt Kenya (Embu)"},
  turkana:         {total:18,kephis_seed:2,pcpb_pest:5,croplife:1,density_per_1k_hh:0.2,women_led_pct:12,wards_uncovered:22,counterfeit_alerts_12m:1,data_quality:"estimated",nearest_kephis_office:"North Rift (Kitale)"},
  samburu:         {total:20,kephis_seed:3,pcpb_pest:7,croplife:2,density_per_1k_hh:0.5,women_led_pct:15,wards_uncovered:10,counterfeit_alerts_12m:1,data_quality:"estimated",nearest_kephis_office:"Mt Kenya (Embu)"},
  // Rift
  west_pokot:      {total:58,kephis_seed:12,pcpb_pest:22,croplife:8,density_per_1k_hh:0.6,women_led_pct:20,wards_uncovered:8,counterfeit_alerts_12m:2,data_quality:"estimated",nearest_kephis_office:"North Rift (Kitale)"},
  baringo:         {total:82,kephis_seed:18,pcpb_pest:32,croplife:12,density_per_1k_hh:0.8,women_led_pct:24,wards_uncovered:6,counterfeit_alerts_12m:2,data_quality:"estimated",nearest_kephis_office:"North Rift (Kitale)"},
  elgeyo_marakwet: {total:95,kephis_seed:22,pcpb_pest:38,croplife:15,density_per_1k_hh:1.2,women_led_pct:28,wards_uncovered:3,counterfeit_alerts_12m:2,data_quality:"estimated",nearest_kephis_office:"North Rift (Kitale)"},
  // Western — 120-200
  vihiga:          {total:168,kephis_seed:42,pcpb_pest:72,croplife:28,density_per_1k_hh:4.2,women_led_pct:36,wards_uncovered:1,counterfeit_alerts_12m:3,data_quality:"estimated",nearest_kephis_office:"Western (Kakamega)"},
  busia:           {total:148,kephis_seed:35,pcpb_pest:62,croplife:24,density_per_1k_hh:3.2,women_led_pct:32,wards_uncovered:3,counterfeit_alerts_12m:4,data_quality:"estimated",nearest_kephis_office:"Western (Kakamega)"},
  siaya:           {total:132,kephis_seed:32,pcpb_pest:55,croplife:22,density_per_1k_hh:2.8,women_led_pct:34,wards_uncovered:3,counterfeit_alerts_12m:3,data_quality:"estimated",nearest_kephis_office:"Western (Kakamega)"},
  migori:          {total:162,kephis_seed:38,pcpb_pest:68,croplife:25,density_per_1k_hh:3.0,women_led_pct:35,wards_uncovered:3,counterfeit_alerts_12m:4,data_quality:"estimated",nearest_kephis_office:"Western (Kakamega)"},
  homa_bay:        {total:155,kephis_seed:35,pcpb_pest:65,croplife:22,density_per_1k_hh:2.8,women_led_pct:36,wards_uncovered:4,counterfeit_alerts_12m:3,data_quality:"estimated",nearest_kephis_office:"Western (Kakamega)"},
  nyamira:         {total:145,kephis_seed:35,pcpb_pest:58,croplife:22,density_per_1k_hh:3.8,women_led_pct:34,wards_uncovered:2,counterfeit_alerts_12m:3,data_quality:"estimated",nearest_kephis_office:"Western (Kakamega)"},
  // Coastal
  lamu:            {total:18,kephis_seed:3,pcpb_pest:6,croplife:2,density_per_1k_hh:0.8,women_led_pct:15,wards_uncovered:8,counterfeit_alerts_12m:1,data_quality:"estimated",nearest_kephis_office:"Coast (Mombasa)"},
  taita_taveta:    {total:52,kephis_seed:12,pcpb_pest:22,croplife:8,density_per_1k_hh:0.8,women_led_pct:22,wards_uncovered:5,counterfeit_alerts_12m:2,data_quality:"estimated",nearest_kephis_office:"Coast (Mombasa)"},
  // Eastern
  tana_river:      {total:25,kephis_seed:5,pcpb_pest:10,croplife:3,density_per_1k_hh:0.5,women_led_pct:18,wards_uncovered:12,counterfeit_alerts_12m:1,data_quality:"estimated",nearest_kephis_office:"Coast (Mombasa)"},
  // Additional Counties
  kajiado:         {total:105,kephis_seed:25,pcpb_pest:42,croplife:15,density_per_1k_hh:0.4,women_led_pct:25,wards_uncovered:8,counterfeit_alerts_12m:3,data_quality:"estimated",nearest_kephis_office:"Central (Nairobi)"},
  mombasa:         {total:22,kephis_seed:5,pcpb_pest:8,croplife:3,density_per_1k_hh:0.1,women_led_pct:18,wards_uncovered:4,counterfeit_alerts_12m:1,data_quality:"estimated",nearest_kephis_office:"Coast (Mombasa)"},
  nandi:           {total:195,kephis_seed:48,pcpb_pest:82,croplife:32,density_per_1k_hh:3.5,women_led_pct:32,wards_uncovered:2,counterfeit_alerts_12m:3,data_quality:"estimated",nearest_kephis_office:"North Rift (Kitale)"}
};

export const NC_CPI = {
  // ASAL — high food inflation (10-15%)
  marsabit:        {cpi_local:155.8,food_yoy:13.5,political_risk:5,key_movers:[{item:"Maize flour",yoy:18.5,mom:2.8},{item:"Camel milk",yoy:12.2,mom:1.5},{item:"Beans",yoy:15.8,mom:3.2}]},
  wajir:           {cpi_local:156.5,food_yoy:14.2,political_risk:5,key_movers:[{item:"Maize flour",yoy:19.2,mom:3.1},{item:"Rice",yoy:12.8,mom:1.8},{item:"Sugar",yoy:11.5,mom:0.8}]},
  mandera:         {cpi_local:157.2,food_yoy:15.0,political_risk:5,key_movers:[{item:"Maize flour",yoy:20.5,mom:3.5},{item:"Rice",yoy:13.2,mom:2.1},{item:"Cooking oil",yoy:8.5,mom:1.2}]},
  garissa:         {cpi_local:155.2,food_yoy:12.8,political_risk:5,key_movers:[{item:"Maize flour",yoy:17.8,mom:2.5},{item:"Beans",yoy:14.5,mom:2.8},{item:"Camel meat",yoy:10.2,mom:1.5}]},
  isiolo:          {cpi_local:154.8,food_yoy:12.2,political_risk:4,key_movers:[{item:"Maize flour",yoy:16.5,mom:2.2},{item:"Camel milk",yoy:11.8,mom:1.5},{item:"Beans",yoy:14.2,mom:2.5}]},
  turkana:         {cpi_local:158.5,food_yoy:15.0,political_risk:5,key_movers:[{item:"Maize flour",yoy:22.5,mom:4.2},{item:"Sorghum",yoy:18.5,mom:3.8},{item:"Fish (L. Turkana)",yoy:8.5,mom:1.2}]},
  samburu:         {cpi_local:154.2,food_yoy:11.5,political_risk:4,key_movers:[{item:"Maize flour",yoy:15.8,mom:2.1},{item:"Beans",yoy:13.5,mom:2.2},{item:"Beef",yoy:10.8,mom:1.5}]},
  // Rift
  west_pokot:      {cpi_local:152.8,food_yoy:10.2,political_risk:4,key_movers:[{item:"Maize flour",yoy:14.5,mom:1.8},{item:"Sorghum",yoy:12.2,mom:2.1},{item:"Beans",yoy:10.5,mom:1.5}]},
  baringo:         {cpi_local:151.5,food_yoy:9.2,political_risk:3,key_movers:[{item:"Maize flour",yoy:13.2,mom:1.5},{item:"Honey",yoy:8.5,mom:0.8},{item:"Beans",yoy:9.8,mom:1.2}]},
  elgeyo_marakwet: {cpi_local:149.2,food_yoy:7.2,political_risk:2,key_movers:[{item:"Maize grain",yoy:12.6,mom:-1.8},{item:"Milk",yoy:-1.3,mom:-0.5},{item:"Sukuma wiki",yoy:23.4,mom:2.1}]},
  // Western — moderate (7-9%)
  vihiga:          {cpi_local:149.8,food_yoy:7.8,political_risk:2,key_movers:[{item:"Maize flour",yoy:13.2,mom:0.4},{item:"Sukuma wiki",yoy:23.4,mom:2.1},{item:"Beans",yoy:8.5,mom:1.1}]},
  busia:           {cpi_local:150.2,food_yoy:8.2,political_risk:3,key_movers:[{item:"Maize flour",yoy:13.2,mom:0.4},{item:"Sukuma wiki",yoy:23.4,mom:2.1},{item:"Fish (tilapia)",yoy:9.2,mom:2.5}]},
  siaya:           {cpi_local:150.5,food_yoy:8.5,political_risk:3,key_movers:[{item:"Fish (tilapia)",yoy:9.2,mom:2.5},{item:"Maize flour",yoy:13.2,mom:0.4},{item:"Sukuma wiki",yoy:23.4,mom:2.1}]},
  migori:          {cpi_local:150.8,food_yoy:8.8,political_risk:3,key_movers:[{item:"Maize flour",yoy:13.2,mom:0.4},{item:"Fish (tilapia)",yoy:9.2,mom:2.5},{item:"Beans",yoy:8.5,mom:1.1}]},
  homa_bay:        {cpi_local:150.5,food_yoy:8.5,political_risk:3,key_movers:[{item:"Fish (tilapia)",yoy:9.2,mom:2.5},{item:"Maize flour",yoy:13.2,mom:0.4},{item:"Sukuma wiki",yoy:23.4,mom:2.1}]},
  nyamira:         {cpi_local:149.5,food_yoy:7.2,political_risk:2,key_movers:[{item:"Tea (own)",yoy:-2.1,mom:0.5},{item:"Bananas",yoy:11.5,mom:2.1},{item:"Sukuma wiki",yoy:23.4,mom:2.1}]},
  // Coastal
  lamu:            {cpi_local:153.5,food_yoy:10.5,political_risk:4,key_movers:[{item:"Maize flour",yoy:15.5,mom:2.2},{item:"Fish",yoy:8.2,mom:1.5},{item:"Cassava",yoy:12.5,mom:1.8}]},
  taita_taveta:    {cpi_local:151.8,food_yoy:9.2,political_risk:3,key_movers:[{item:"Maize flour",yoy:13.2,mom:1.2},{item:"Beans",yoy:10.5,mom:1.5},{item:"Sukuma wiki",yoy:23.4,mom:2.1}]},
  // Eastern
  tana_river:      {cpi_local:154.5,food_yoy:11.8,political_risk:4,key_movers:[{item:"Maize flour",yoy:16.8,mom:2.5},{item:"Beans",yoy:13.8,mom:2.2},{item:"Rice",yoy:8.5,mom:1.2}]},
  // Additional Counties
  kajiado:         {cpi_local:152.5,food_yoy:9.8,political_risk:3,key_movers:[{item:"Maize flour",yoy:14.2,mom:1.8},{item:"Beef",yoy:12.5,mom:2.2},{item:"Sukuma wiki",yoy:23.4,mom:2.1}]},
  mombasa:         {cpi_local:155.8,food_yoy:12.5,political_risk:3,key_movers:[{item:"Maize flour",yoy:16.2,mom:2.8},{item:"Rice",yoy:10.5,mom:1.5},{item:"Fish",yoy:8.8,mom:1.2}]},
  nandi:           {cpi_local:148.5,food_yoy:6.8,political_risk:2,key_movers:[{item:"Tea (own)",yoy:-2.5,mom:0.3},{item:"Milk",yoy:-1.8,mom:-0.5},{item:"Maize grain",yoy:12.2,mom:-1.5}]}
};

export const NC_HUSTLER = {
  // ASAL — low disbursement, low repayment
  marsabit:        {disbursed_kshM:420,repaid_pct:58,default_pct:42,farmer_uptake_pct:2,women_pct:35,alt_banks:12,alt_saccos:15,alt_friends:68},
  wajir:           {disbursed_kshM:280,repaid_pct:52,default_pct:48,farmer_uptake_pct:1,women_pct:28,alt_banks:8,alt_saccos:10,alt_friends:72},
  mandera:         {disbursed_kshM:250,repaid_pct:48,default_pct:52,farmer_uptake_pct:1,women_pct:22,alt_banks:6,alt_saccos:8,alt_friends:75},
  garissa:         {disbursed_kshM:380,repaid_pct:55,default_pct:45,farmer_uptake_pct:2,women_pct:30,alt_banks:10,alt_saccos:12,alt_friends:70},
  isiolo:          {disbursed_kshM:350,repaid_pct:60,default_pct:40,farmer_uptake_pct:2,women_pct:35,alt_banks:15,alt_saccos:18,alt_friends:65},
  turkana:         {disbursed_kshM:320,repaid_pct:45,default_pct:55,farmer_uptake_pct:1,women_pct:32,alt_banks:5,alt_saccos:8,alt_friends:78},
  samburu:         {disbursed_kshM:280,repaid_pct:58,default_pct:42,farmer_uptake_pct:2,women_pct:32,alt_banks:12,alt_saccos:15,alt_friends:68},
  // Rift
  west_pokot:      {disbursed_kshM:650,repaid_pct:65,default_pct:35,farmer_uptake_pct:3,women_pct:32,alt_banks:18,alt_saccos:22,alt_friends:58},
  baringo:         {disbursed_kshM:850,repaid_pct:72,default_pct:28,farmer_uptake_pct:3,women_pct:35,alt_banks:22,alt_saccos:28,alt_friends:52},
  elgeyo_marakwet: {disbursed_kshM:1250,repaid_pct:82,default_pct:18,farmer_uptake_pct:4,women_pct:38,alt_banks:32,alt_saccos:42,alt_friends:42},
  // Western — moderate
  vihiga:          {disbursed_kshM:1650,repaid_pct:78,default_pct:22,farmer_uptake_pct:5,women_pct:48,alt_banks:32,alt_saccos:48,alt_friends:45},
  busia:           {disbursed_kshM:1850,repaid_pct:75,default_pct:25,farmer_uptake_pct:4,women_pct:45,alt_banks:28,alt_saccos:42,alt_friends:52},
  siaya:           {disbursed_kshM:1550,repaid_pct:72,default_pct:28,farmer_uptake_pct:4,women_pct:48,alt_banks:25,alt_saccos:38,alt_friends:55},
  migori:          {disbursed_kshM:1750,repaid_pct:74,default_pct:26,farmer_uptake_pct:4,women_pct:45,alt_banks:28,alt_saccos:42,alt_friends:52},
  homa_bay:        {disbursed_kshM:1650,repaid_pct:72,default_pct:28,farmer_uptake_pct:4,women_pct:48,alt_banks:25,alt_saccos:35,alt_friends:55},
  nyamira:         {disbursed_kshM:1450,repaid_pct:80,default_pct:20,farmer_uptake_pct:4,women_pct:45,alt_banks:32,alt_saccos:52,alt_friends:42},
  // Coastal
  lamu:            {disbursed_kshM:220,repaid_pct:58,default_pct:42,farmer_uptake_pct:2,women_pct:32,alt_banks:12,alt_saccos:15,alt_friends:65},
  taita_taveta:    {disbursed_kshM:650,repaid_pct:68,default_pct:32,farmer_uptake_pct:3,women_pct:38,alt_banks:22,alt_saccos:28,alt_friends:52},
  // Eastern
  tana_river:      {disbursed_kshM:350,repaid_pct:55,default_pct:45,farmer_uptake_pct:2,women_pct:32,alt_banks:10,alt_saccos:12,alt_friends:68},
  // Additional Counties
  kajiado:         {disbursed_kshM:1250,repaid_pct:72,default_pct:28,farmer_uptake_pct:3,women_pct:35,alt_banks:28,alt_saccos:32,alt_friends:48},
  mombasa:         {disbursed_kshM:450,repaid_pct:68,default_pct:32,farmer_uptake_pct:1,women_pct:42,alt_banks:42,alt_saccos:22,alt_friends:38},
  nandi:           {disbursed_kshM:1850,repaid_pct:85,default_pct:15,farmer_uptake_pct:5,women_pct:42,alt_banks:35,alt_saccos:55,alt_friends:38}
};

export const NC_GFW = {
  // ASAL — low forest cover, charcoal + pasture drivers
  marsabit:        {alerts_30d:280,alerts_12m:1850,ha_lost_12m:68,primary_forest_pct:3,deforest_risk:3,eudr_relevant:false,drivers:["Charcoal","Pasture expansion","Settlements"],hotspots:["Mt Marsabit Forest"]},
  wajir:           {alerts_30d:45,alerts_12m:280,ha_lost_12m:12,primary_forest_pct:1,deforest_risk:1,eudr_relevant:false,drivers:["Charcoal","Settlements"],hotspots:[]},
  mandera:         {alerts_30d:35,alerts_12m:220,ha_lost_12m:8,primary_forest_pct:1,deforest_risk:1,eudr_relevant:false,drivers:["Charcoal"],hotspots:[]},
  garissa:         {alerts_30d:120,alerts_12m:850,ha_lost_12m:35,primary_forest_pct:2,deforest_risk:2,eudr_relevant:false,drivers:["Charcoal","Riverine clearing"],hotspots:["Boni Forest adjacent"]},
  isiolo:          {alerts_30d:95,alerts_12m:680,ha_lost_12m:28,primary_forest_pct:2,deforest_risk:2,eudr_relevant:false,drivers:["Charcoal","Settlements"],hotspots:[]},
  turkana:         {alerts_30d:85,alerts_12m:520,ha_lost_12m:22,primary_forest_pct:1,deforest_risk:2,eudr_relevant:false,drivers:["Charcoal","Overgrazing"],hotspots:["South Turkana"]},
  samburu:         {alerts_30d:185,alerts_12m:1250,ha_lost_12m:48,primary_forest_pct:5,deforest_risk:3,eudr_relevant:false,drivers:["Charcoal","Pasture expansion"],hotspots:["Leroghi Plateau","Matthews Range"]},
  // Rift
  west_pokot:      {alerts_30d:420,alerts_12m:2850,ha_lost_12m:95,primary_forest_pct:8,deforest_risk:4,eudr_relevant:false,drivers:["Cropland expansion","Charcoal","Settlements"],hotspots:["Cherangani Hills"]},
  baringo:         {alerts_30d:380,alerts_12m:2450,ha_lost_12m:85,primary_forest_pct:7,deforest_risk:3,eudr_relevant:false,drivers:["Charcoal","Cropland","Settlements"],hotspots:["Tugen Hills","Lake Baringo basin"]},
  elgeyo_marakwet: {alerts_30d:320,alerts_12m:2150,ha_lost_12m:72,primary_forest_pct:12,deforest_risk:3,eudr_relevant:false,drivers:["Cropland expansion","Charcoal"],hotspots:["Cherangani Hills","Embobut Forest"]},
  // Western
  vihiga:          {alerts_30d:185,alerts_12m:1250,ha_lost_12m:35,primary_forest_pct:5,deforest_risk:3,eudr_relevant:false,drivers:["Cropland","Settlements","Firewood"],hotspots:["Kakamega Forest adjacent"]},
  busia:           {alerts_30d:145,alerts_12m:980,ha_lost_12m:28,primary_forest_pct:3,deforest_risk:2,eudr_relevant:false,drivers:["Cropland","Charcoal"],hotspots:[]},
  siaya:           {alerts_30d:120,alerts_12m:850,ha_lost_12m:25,primary_forest_pct:3,deforest_risk:2,eudr_relevant:false,drivers:["Cropland","Settlements"],hotspots:[]},
  migori:          {alerts_30d:185,alerts_12m:1250,ha_lost_12m:38,primary_forest_pct:4,deforest_risk:2,eudr_relevant:false,drivers:["Mining","Cropland","Charcoal"],hotspots:["Migori Gold Belt"]},
  homa_bay:        {alerts_30d:145,alerts_12m:980,ha_lost_12m:32,primary_forest_pct:3,deforest_risk:2,eudr_relevant:false,drivers:["Cropland","Charcoal"],hotspots:["Gwassi Hills"]},
  nyamira:         {alerts_30d:225,alerts_12m:1450,ha_lost_12m:42,primary_forest_pct:8,deforest_risk:3,eudr_relevant:false,drivers:["Tea expansion","Cropland","Settlements"],hotspots:["Manga escarpment"]},
  // Coastal
  lamu:            {alerts_30d:520,alerts_12m:3450,ha_lost_12m:128,primary_forest_pct:15,deforest_risk:5,eudr_relevant:false,drivers:["Charcoal","LAPSSET clearing","Cropland"],hotspots:["Boni Forest","Dodori National Reserve"]},
  taita_taveta:    {alerts_30d:380,alerts_12m:2450,ha_lost_12m:95,primary_forest_pct:10,deforest_risk:4,eudr_relevant:false,drivers:["Charcoal","Cropland","Mining"],hotspots:["Taita Hills","Tsavo adjacent"]},
  // Eastern
  tana_river:      {alerts_30d:420,alerts_12m:2850,ha_lost_12m:108,primary_forest_pct:6,deforest_risk:4,eudr_relevant:false,drivers:["Charcoal","Riverine clearing","Farming expansion"],hotspots:["Tana River Delta","Boni Forest"]},
  // Additional Counties
  kajiado:         {alerts_30d:285,alerts_12m:1950,ha_lost_12m:72,primary_forest_pct:4,deforest_risk:3,eudr_relevant:false,drivers:["Urban sprawl","Charcoal","Overgrazing"],hotspots:["Ngong Hills","Athi-Kaputiei plains"]},
  mombasa:         {alerts_30d:15,alerts_12m:85,ha_lost_12m:3,primary_forest_pct:2,deforest_risk:1,eudr_relevant:false,drivers:["Urban expansion","Mangrove clearing"],hotspots:["Tudor Creek mangroves"]},
  nandi:           {alerts_30d:350,alerts_12m:2350,ha_lost_12m:82,primary_forest_pct:14,deforest_risk:4,eudr_relevant:false,drivers:["Tea expansion","Cropland","Charcoal"],hotspots:["North Nandi Forest","South Nandi Forest"]}
};

export const NC_VCI = {
  // ASAL — 20-35 (severe drought)
  marsabit:        {vci:25,category:"Severe drought",trend:"worsening",dekad:"April 2026 D2",prev_dekad:28,recovery_days:75},
  wajir:           {vci:22,category:"Severe drought",trend:"worsening",dekad:"April 2026 D2",prev_dekad:25,recovery_days:85},
  mandera:         {vci:20,category:"Severe drought",trend:"stable",dekad:"April 2026 D2",prev_dekad:21,recovery_days:90},
  garissa:         {vci:28,category:"Severe drought",trend:"stable",dekad:"April 2026 D2",prev_dekad:30,recovery_days:65},
  isiolo:          {vci:30,category:"Severe drought",trend:"improving",dekad:"April 2026 D2",prev_dekad:26,recovery_days:60},
  turkana:         {vci:18,category:"Severe drought",trend:"worsening",dekad:"April 2026 D2",prev_dekad:22,recovery_days:95},
  samburu:         {vci:32,category:"Severe drought",trend:"improving",dekad:"April 2026 D2",prev_dekad:28,recovery_days:55},
  // Rift
  west_pokot:      {vci:38,category:"Moderate drought",trend:"improving",dekad:"April 2026 D2",prev_dekad:34,recovery_days:45},
  baringo:         {vci:42,category:"Moderate drought",trend:"improving",dekad:"April 2026 D2",prev_dekad:38,recovery_days:40},
  elgeyo_marakwet: {vci:68,category:"Above normal",trend:"stable",dekad:"April 2026 D2",prev_dekad:66,recovery_days:0},
  // Western — 60-72 (above normal)
  vihiga:          {vci:65,category:"Normal",trend:"stable",dekad:"April 2026 D2",prev_dekad:63,recovery_days:0},
  busia:           {vci:62,category:"Normal",trend:"stable",dekad:"April 2026 D2",prev_dekad:60,recovery_days:0},
  siaya:           {vci:60,category:"Normal",trend:"stable",dekad:"April 2026 D2",prev_dekad:58,recovery_days:0},
  migori:          {vci:62,category:"Normal",trend:"stable",dekad:"April 2026 D2",prev_dekad:60,recovery_days:0},
  homa_bay:        {vci:60,category:"Normal",trend:"stable",dekad:"April 2026 D2",prev_dekad:58,recovery_days:0},
  nyamira:         {vci:72,category:"Above normal",trend:"stable",dekad:"April 2026 D2",prev_dekad:70,recovery_days:0},
  // Coastal
  lamu:            {vci:32,category:"Severe drought",trend:"stable",dekad:"April 2026 D2",prev_dekad:34,recovery_days:60},
  taita_taveta:    {vci:42,category:"Moderate drought",trend:"improving",dekad:"April 2026 D2",prev_dekad:38,recovery_days:40},
  // Eastern
  tana_river:      {vci:28,category:"Severe drought",trend:"stable",dekad:"April 2026 D2",prev_dekad:30,recovery_days:65},
  // Additional Counties
  kajiado:         {vci:38,category:"Moderate drought",trend:"stable",dekad:"April 2026 D2",prev_dekad:36,recovery_days:42},
  mombasa:         {vci:52,category:"Normal",trend:"stable",dekad:"April 2026 D2",prev_dekad:50,recovery_days:0},
  nandi:           {vci:75,category:"Above normal",trend:"stable",dekad:"April 2026 D2",prev_dekad:73,recovery_days:0}
};

export const NC_SPI = {
  // ASAL — severely dry (spi_12: -1.5 to -2.5)
  marsabit:        {spi_1:-0.8,spi_3:-1.2,spi_12:-2.1,category_12:"Severely dry",rainfall_30d:35,normal_30d:85},
  wajir:           {spi_1:-0.9,spi_3:-1.4,spi_12:-2.3,category_12:"Severely dry",rainfall_30d:22,normal_30d:68},
  mandera:         {spi_1:-1.0,spi_3:-1.5,spi_12:-2.5,category_12:"Extremely dry",rainfall_30d:18,normal_30d:62},
  garissa:         {spi_1:-0.7,spi_3:-1.1,spi_12:-1.8,category_12:"Severely dry",rainfall_30d:42,normal_30d:78},
  isiolo:          {spi_1:-0.6,spi_3:-1.0,spi_12:-1.7,category_12:"Severely dry",rainfall_30d:48,normal_30d:82},
  turkana:         {spi_1:-1.1,spi_3:-1.6,spi_12:-2.4,category_12:"Extremely dry",rainfall_30d:15,normal_30d:55},
  samburu:         {spi_1:-0.5,spi_3:-0.9,spi_12:-1.5,category_12:"Severely dry",rainfall_30d:52,normal_30d:88},
  // Rift
  west_pokot:      {spi_1:-0.3,spi_3:-0.6,spi_12:-1.2,category_12:"Moderately dry",rainfall_30d:85,normal_30d:115},
  baringo:         {spi_1:-0.2,spi_3:-0.4,spi_12:-0.9,category_12:"Near normal",rainfall_30d:95,normal_30d:108},
  elgeyo_marakwet: {spi_1:0.5,spi_3:0.3,spi_12:0.1,category_12:"Near normal",rainfall_30d:178,normal_30d:162},
  // Western — near normal
  vihiga:          {spi_1:0.4,spi_3:0.2,spi_12:0.0,category_12:"Near normal",rainfall_30d:168,normal_30d:162},
  busia:           {spi_1:0.3,spi_3:0.1,spi_12:-0.2,category_12:"Near normal",rainfall_30d:158,normal_30d:152},
  siaya:           {spi_1:0.2,spi_3:0.0,spi_12:-0.3,category_12:"Near normal",rainfall_30d:145,normal_30d:142},
  migori:          {spi_1:0.3,spi_3:0.1,spi_12:-0.2,category_12:"Near normal",rainfall_30d:155,normal_30d:148},
  homa_bay:        {spi_1:0.2,spi_3:0.0,spi_12:-0.3,category_12:"Near normal",rainfall_30d:142,normal_30d:138},
  nyamira:         {spi_1:0.6,spi_3:0.4,spi_12:0.3,category_12:"Near normal",rainfall_30d:195,normal_30d:175},
  // Coastal
  lamu:            {spi_1:-0.7,spi_3:-1.2,spi_12:-1.9,category_12:"Severely dry",rainfall_30d:38,normal_30d:95},
  taita_taveta:    {spi_1:-0.4,spi_3:-0.8,spi_12:-1.3,category_12:"Moderately dry",rainfall_30d:65,normal_30d:102},
  // Eastern
  tana_river:      {spi_1:-0.6,spi_3:-1.0,spi_12:-1.8,category_12:"Severely dry",rainfall_30d:42,normal_30d:85},
  // Additional Counties
  kajiado:         {spi_1:-0.4,spi_3:-0.7,spi_12:-1.1,category_12:"Moderately dry",rainfall_30d:72,normal_30d:98},
  mombasa:         {spi_1:-0.2,spi_3:-0.3,spi_12:-0.5,category_12:"Near normal",rainfall_30d:85,normal_30d:95},
  nandi:           {spi_1:0.7,spi_3:0.5,spi_12:0.4,category_12:"Near normal",rainfall_30d:210,normal_30d:185}
};

export const NC_PEST_WATCH = {
  // ASAL — HIGH locust risk
  marsabit:        {locust_risk:4,faw_pressure:2,locust_status:"Watch",faw_status:"Low",alerts_week:3,week:"FAO DLW Wk16 2026",key_pest:"Desert locust breeding grounds — active watch"},
  wajir:           {locust_risk:5,faw_pressure:1,locust_status:"Active watch",faw_status:"Low",alerts_week:4,week:"FAO DLW Wk16 2026",key_pest:"Desert locust — Horn of Africa corridor"},
  mandera:         {locust_risk:5,faw_pressure:1,locust_status:"Active watch",faw_status:"Low",alerts_week:5,week:"FAO DLW Wk16 2026",key_pest:"Desert locust — Ethiopia/Somalia border"},
  garissa:         {locust_risk:4,faw_pressure:2,locust_status:"Watch",faw_status:"Low",alerts_week:3,week:"FAO DLW Wk16 2026",key_pest:"Desert locust corridor"},
  isiolo:          {locust_risk:4,faw_pressure:2,locust_status:"Watch",faw_status:"Low",alerts_week:3,week:"FAO DLW Wk16 2026",key_pest:"Desert locust watch + livestock ticks"},
  turkana:         {locust_risk:5,faw_pressure:1,locust_status:"Active watch",faw_status:"Low",alerts_week:5,week:"FAO DLW Wk16 2026",key_pest:"Desert locust — South Sudan corridor"},
  samburu:         {locust_risk:3,faw_pressure:2,locust_status:"Watch",faw_status:"Low",alerts_week:2,week:"FAO DLW Wk16 2026",key_pest:"Desert locust — Rift Valley corridor"},
  // Rift
  west_pokot:      {locust_risk:2,faw_pressure:3,locust_status:"Calm",faw_status:"Moderate",alerts_week:2,week:"ICIPE Wk16",key_pest:"FAW on maize + Striga"},
  baringo:         {locust_risk:2,faw_pressure:3,locust_status:"Calm",faw_status:"Moderate",alerts_week:2,week:"ICIPE Wk16",key_pest:"FAW + mango fruit fly (Marigat)"},
  elgeyo_marakwet: {locust_risk:1,faw_pressure:2,locust_status:"Calm",faw_status:"Low",alerts_week:1,week:"ICIPE Wk16",key_pest:"FAW + maize stalk borer"},
  // Western — moderate FAW
  vihiga:          {locust_risk:1,faw_pressure:4,locust_status:"Calm",faw_status:"High",alerts_week:3,week:"ICIPE Wk16",key_pest:"FAW + Striga on maize"},
  busia:           {locust_risk:1,faw_pressure:4,locust_status:"Calm",faw_status:"High",alerts_week:3,week:"ICIPE Wk16",key_pest:"FAW + Striga + maize streak virus"},
  siaya:           {locust_risk:1,faw_pressure:3,locust_status:"Calm",faw_status:"Moderate",alerts_week:2,week:"ICIPE Wk16",key_pest:"FAW + cassava brown streak"},
  migori:          {locust_risk:1,faw_pressure:3,locust_status:"Calm",faw_status:"Moderate",alerts_week:2,week:"ICIPE Wk16",key_pest:"FAW + tobacco pests"},
  homa_bay:        {locust_risk:1,faw_pressure:3,locust_status:"Calm",faw_status:"Moderate",alerts_week:2,week:"ICIPE Wk16",key_pest:"FAW on maize + cassava mosaic"},
  nyamira:         {locust_risk:1,faw_pressure:3,locust_status:"Calm",faw_status:"Moderate",alerts_week:2,week:"ICIPE Wk16",key_pest:"FAW + banana bacterial wilt"},
  // Coastal
  lamu:            {locust_risk:3,faw_pressure:2,locust_status:"Watch",faw_status:"Low",alerts_week:2,week:"FAO DLW Wk16 2026",key_pest:"Desert locust coastal corridor + coconut rhinoceros beetle"},
  taita_taveta:    {locust_risk:2,faw_pressure:3,locust_status:"Calm",faw_status:"Moderate",alerts_week:2,week:"ICIPE Wk16",key_pest:"FAW + mango fruit fly"},
  // Eastern
  tana_river:      {locust_risk:3,faw_pressure:2,locust_status:"Watch",faw_status:"Low",alerts_week:3,week:"FAO DLW Wk16 2026",key_pest:"Desert locust + Quelea on rice/sorghum"},
  // Additional Counties
  kajiado:         {locust_risk:2,faw_pressure:3,locust_status:"Calm",faw_status:"Moderate",alerts_week:2,week:"ICIPE Wk16",key_pest:"FAW on maize + livestock ticks (ECF)"},
  mombasa:         {locust_risk:1,faw_pressure:1,locust_status:"Calm",faw_status:"Low",alerts_week:0,week:"ICIPE Wk16",key_pest:"Coconut rhinoceros beetle + urban rodents"},
  nandi:           {locust_risk:1,faw_pressure:3,locust_status:"Calm",faw_status:"Moderate",alerts_week:2,week:"ICIPE Wk16",key_pest:"FAW on maize + tea mosquito bug + maize stalk borer"}
};

export const NC_TEA_AUCTION = {
  // Only adding counties with tea
  vihiga:          {factories:1,bp1_avg:178,pf1_avg:198,weekly_kg:95000,trend:"-1.0%",top_factory:"Mudete (shared)",week:"Sale 15 14/04/26",leading_market:"Domestic"},
  baringo:         {factories:1,bp1_avg:165,pf1_avg:185,weekly_kg:42000,trend:"-2.1%",top_factory:"Kabarnet (marginal)",week:"Sale 15 14/04/26",leading_market:"Domestic"},
  nyamira:         {factories:2,bp1_avg:285,pf1_avg:322,weekly_kg:680000,trend:"+1.5%",top_factory:"Nyamira (KTDA)",week:"Sale 15 14/04/26",leading_market:"Pakistan/Egypt"},
  elgeyo_marakwet: {factories:1,bp1_avg:248,pf1_avg:278,weekly_kg:320000,trend:"+0.8%",top_factory:"Kapkatet (shared KTDA)",week:"Sale 15 14/04/26",leading_market:"Pakistan/Egypt"},
  // Additional Counties
  nandi:           {factories:3,bp1_avg:295,pf1_avg:332,weekly_kg:850000,trend:"+1.8%",top_factory:"Nandi Hills (KTDA)",week:"Sale 15 14/04/26",leading_market:"Pakistan/Egypt/UK"}
};


