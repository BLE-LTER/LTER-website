const LUNR_DATA = {"version":"2.1.5","fields":["t","d","k","b"],"fieldVectors":[["t/0",[]],["d/0",[0,0.465,1,0.465,2,0.465,3,0.264,4,0.264,5,0.264,6,0.264,7,0.264,8,0.419,9,0.264]],["k/0",[3,0.324]],["b/0",[0,0.788,1,0.806,2,0.731,3,0.251,4,0.251,5,0.251,6,0.251,7,0.387,8,0.689,9,0.341,10,0.489,11,1.021,12,1.021,13,1.021,14,1.021,15,1.021,16,1.021,17,0.139,18,0.139,19,0.341,20,0.489,21,1.021,22,1.021,23,1.021,24,1.021,25,0.664,26,0.489,27,1.021,28,0.489,29,1.021,30,1.021,31,1.021,32,1.021,33,1.021,34,1.021,35,0.489,36,1.021,37,1.021,38,1.021,39,1.021,40,1.021,41,1.021,42,1.021,43,1.386,44,0.664,45,1.021,46,0.189,47,0.139,48,1.021,49,0.489,50,0.664,51,1.021,52,1.021,53,1.021,54,1.021,55,1.021,56,1.021,57,1.021,58,1.573,59,1.021,60,1.021,61,0.489,62,0.489,63,1.021,64,1.021,65,1.021,66,1.021,67,0.139,68,1.021,69,1.386,70,1.021,71,1.021,72,1.021,73,1.021,74,0.189,75,1.386,76,1.021,77,1.021,78,0.489,79,1.021,80,1.386,81,1.021,82,1.021,83,1.021,84,0.489,85,1.021,86,1.021,87,1.021,88,1.021,89,1.021,90,1.021,91,1.021,92,1.386,93,1.021,94,1.021,95,1.386,96,1.386,97,1.021,98,1.021,99,1.021,100,0.664,101,1.021,102,1.021,103,1.021,104,1.021,105,1.021,106,0.489,107,1.021,108,1.021,109,1.021,110,1.021,111,1.021,112,1.021,113,1.021,114,1.021,115,1.021,116,1.021,117,1.021,118,0.489,119,1.021,120,1.021]],["t/1",[0,0.27,1,0.27,2,0.27,8,0.244]],["d/1",[0,0.384,1,0.384,2,0.384,4,0.218,5,0.218,6,0.218,7,0.218,8,0.346,9,0.218,17,0.121,18,0.121,19,0.218,47,0.121,100,0.424,121,0.424,122,0.424]],["k/1",[0,0.313,1,0.313,2,0.313,8,0.282,19,0.178]],["b/1",[0,0.769,1,0.707,2,0.568,4,0.322,5,0.322,6,0.322,7,0.401,8,0.512,9,0.322,10,0.628,17,0.222,18,0.179,19,0.437,20,0.628,25,0.628,35,0.628,46,0.179,47,0.179,67,0.179,74,0.179,84,0.628,118,0.628,121,0.782,122,0.628,123,1.312,124,1.312,125,1.312,126,1.312,127,1.312,128,1.312,129,1.312,130,1.312,131,1.312,132,1.312,133,1.312,134,1.312,135,1.312,136,1.312,137,1.312,138,1.312,139,1.312,140,0.628,141,0.628,142,1.312,143,1.312,144,1.312,145,1.312,146,1.312,147,1.312,148,1.312,149,1.312,150,1.312,151,1.312,152,1.312,153,1.312,154,1.312,155,1.312,156,1.312,157,0.628]],["t/2",[158,0.562]],["d/2",[0,0.434,1,0.434,2,0.434,3,0.246,4,0.246,5,0.246,6,0.246,7,0.246,8,0.391,9,0.246,159,1.002,160,1.002]],["k/2",[3,0.269,158,0.524]],["b/2",[0,0.329,1,0.683,2,0.64,19,0.329,26,0.708,28,0.708,44,0.641,46,0.103,49,0.708,50,0.364,61,0.364,62,0.538,67,0.103,74,0.182,78,0.364,106,0.364,140,0.708,141,0.708,157,0.364,161,0.76,162,1.577,163,1.337,164,0.76,165,1.337,166,1.337,167,1.124,168,1.124,169,1.967,170,1.791,171,1.651,172,1.124,173,1.577,174,1.577,175,1.124,176,1.124,177,1.124,178,1.124,179,0.76,180,1.124,181,1.124,182,1.124,183,1.337,184,1.124,185,1.337,186,1.337,187,1.478,188,1.337,189,1.337,190,1.124,191,1.124,192,1.124,193,1.124,194,1.478,195,1.478,196,1.337,197,1.124,198,1.124,199,1.124,200,1.337,201,1.124,202,1.337,203,1.337,204,1.337,205,1.337,206,1.124,207,1.124,208,1.124,209,1.124,210,1.124,211,1.124,212,1.124,213,1.124,214,1.124,215,1.124,216,0.76,217,1.124,218,1.124,219,1.478,220,1.478,221,1.478,222,0.76,223,0.76,224,0.76,225,0.76,226,1.577,227,0.76,228,0.76,229,0.76,230,0.76,231,0.76,232,1.124,233,1.337,234,1.124,235,0.76,236,0.76,237,0.76,238,0.76,239,0.76,240,0.76,241,0.76,242,0.76,243,0.76,244,0.76,245,0.76,246,0.76,247,0.76,248,0.76,249,0.76,250,0.76,251,0.76,252,0.76,253,0.76,254,0.76,255,0.76,256,0.76,257,0.76,258,0.76,259,0.76,260,1.124,261,0.76,262,0.76,263,0.76,264,0.76,265,0.76,266,0.76,267,0.76,268,0.76,269,0.76,270,0.76,271,0.76,272,0.76,273,0.76,274,1.124,275,0.76,276,0.76,277,0.76,278,0.76,279,0.76,280,0.76,281,0.76]]],"invertedIndex":[["",{"_index":240,"t":{},"d":{},"k":{},"b":{"2":{}}}],["0570",{"_index":280,"t":{},"d":{},"k":{},"b":{"2":{}}}],["0659",{"_index":214,"t":{},"d":{},"k":{},"b":{"2":{}}}],["1",{"_index":41,"t":{},"d":{},"k":{},"b":{"0":{}}}],["12",{"_index":79,"t":{},"d":{},"k":{},"b":{"0":{}}}],["2",{"_index":48,"t":{},"d":{},"k":{},"b":{"0":{}}}],["2017",{"_index":97,"t":{},"d":{},"k":{},"b":{"0":{}}}],["2018",{"_index":109,"t":{},"d":{},"k":{},"b":{"0":{}}}],["2534",{"_index":236,"t":{},"d":{},"k":{},"b":{"2":{}}}],["3227",{"_index":264,"t":{},"d":{},"k":{},"b":{"2":{}}}],["361",{"_index":173,"t":{},"d":{},"k":{},"b":{"2":{}}}],["413",{"_index":212,"t":{},"d":{},"k":{},"b":{"2":{}}}],["4369",{"_index":190,"t":{},"d":{},"k":{},"b":{"2":{}}}],["471",{"_index":279,"t":{},"d":{},"k":{},"b":{"2":{}}}],["474",{"_index":196,"t":{},"d":{},"k":{},"b":{"2":{}}}],["4959",{"_index":251,"t":{},"d":{},"k":{},"b":{"2":{}}}],["50",{"_index":129,"t":{},"d":{},"k":{},"b":{"1":{}}}],["512",{"_index":278,"t":{},"d":{},"k":{},"b":{"2":{}}}],["5192",{"_index":197,"t":{},"d":{},"k":{},"b":{"2":{}}}],["5382",{"_index":256,"t":{},"d":{},"k":{},"b":{"2":{}}}],["541",{"_index":188,"t":{},"d":{},"k":{},"b":{"2":{}}}],["545",{"_index":213,"t":{},"d":{},"k":{},"b":{"2":{}}}],["569",{"_index":250,"t":{},"d":{},"k":{},"b":{"2":{}}}],["6705",{"_index":228,"t":{},"d":{},"k":{},"b":{"2":{}}}],["6744",{"_index":175,"t":{},"d":{},"k":{},"b":{"2":{}}}],["6756",{"_index":180,"t":{},"d":{},"k":{},"b":{"2":{}}}],["6887",{"_index":206,"t":{},"d":{},"k":{},"b":{"2":{}}}],["737",{"_index":189,"t":{},"d":{},"k":{},"b":{"2":{}}}],["747",{"_index":205,"t":{},"d":{},"k":{},"b":{"2":{}}}],["749",{"_index":174,"t":{},"d":{},"k":{},"b":{"2":{}}}],["8448",{"_index":271,"t":{},"d":{},"k":{},"b":{"2":{}}}],["888",{"_index":235,"t":{},"d":{},"k":{},"b":{"2":{}}}],["905",{"_index":249,"t":{},"d":{},"k":{},"b":{"2":{}}}],["907",{"_index":195,"t":{},"d":{},"k":{},"b":{"2":{}}}],["915",{"_index":204,"t":{},"d":{},"k":{},"b":{"2":{}}}],["affili",{"_index":163,"t":{},"d":{},"k":{},"b":{"2":{}}}],["alaska",{"_index":141,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["alaskan",{"_index":18,"t":{},"d":{"1":{}},"k":{},"b":{"0":{},"1":{}}}],["along",{"_index":17,"t":{},"d":{"1":{}},"k":{},"b":{"0":{},"1":{}}}],["alter",{"_index":59,"t":{},"d":{},"k":{},"b":{"0":{}}}],["amber",{"_index":222,"t":{},"d":{},"k":{},"b":{"2":{}}}],["amber.hardison@utexas.edu",{"_index":229,"t":{},"d":{},"k":{},"b":{"2":{}}}],["amherst",{"_index":211,"t":{},"d":{},"k":{},"b":{"2":{}}}],["andrew",{"_index":253,"t":{},"d":{},"k":{},"b":{"2":{}}}],["arctic",{"_index":47,"t":{},"d":{"1":{}},"k":{},"b":{"0":{},"1":{}}}],["area",{"_index":217,"t":{},"d":{},"k":{},"b":{"2":{}}}],["armahoney@alaska.edu",{"_index":257,"t":{},"d":{},"k":{},"b":{"2":{}}}],["assist",{"_index":93,"t":{},"d":{},"k":{},"b":{"0":{}}}],["august",{"_index":96,"t":{},"d":{},"k":{},"b":{"0":{}}}],["austin",{"_index":171,"t":{},"d":{},"k":{},"b":{"2":{}}}],["avail",{"_index":144,"t":{},"d":{},"k":{},"b":{"1":{}}}],["bailey",{"_index":245,"t":{},"d":{},"k":{},"b":{"2":{}}}],["bailey.mcmeans@utoronto.ca",{"_index":252,"t":{},"d":{},"k":{},"b":{"2":{}}}],["bcrump@coas.oregonstate.edu",{"_index":191,"t":{},"d":{},"k":{},"b":{"2":{}}}],["beaufort",{"_index":0,"t":{"1":{}},"d":{"0":{},"1":{},"2":{}},"k":{"1":{}},"b":{"0":{},"1":{},"2":{}}}],["believ",{"_index":142,"t":{},"d":{},"k":{},"b":{"1":{}}}],["between",{"_index":234,"t":{},"d":{},"k":{},"b":{"2":{}}}],["biogeochem",{"_index":226,"t":{},"d":{},"k":{},"b":{"2":{}}}],["black",{"_index":70,"t":{},"d":{},"k":{},"b":{"0":{}}}],["ble",{"_index":3,"t":{},"d":{"0":{},"2":{}},"k":{"0":{},"2":{}},"b":{"0":{}}}],["both",{"_index":31,"t":{},"d":{},"k":{},"b":{"0":{}}}],["break",{"_index":103,"t":{},"d":{},"k":{},"b":{"0":{}}}],["byron",{"_index":182,"t":{},"d":{},"k":{},"b":{"2":{}}}],["c",{"_index":183,"t":{},"d":{},"k":{},"b":{"2":{}}}],["central",{"_index":116,"t":{},"d":{},"k":{},"b":{"0":{}}}],["chang",{"_index":49,"t":{},"d":{},"k":{},"b":{"0":{},"2":{}}}],["circul",{"_index":232,"t":{},"d":{},"k":{},"b":{"2":{}}}],["climat",{"_index":43,"t":{},"d":{},"k":{},"b":{"0":{}}}],["co",{"_index":179,"t":{},"d":{},"k":{},"b":{"2":{}}}],["coast",{"_index":20,"t":{},"d":{},"k":{},"b":{"0":{},"1":{}}}],["coastal",{"_index":46,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{}}}],["coastlin",{"_index":122,"t":{},"d":{"1":{}},"k":{},"b":{"1":{}}}],["commit",{"_index":77,"t":{},"d":{},"k":{},"b":{"0":{}}}],["commun",{"_index":140,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["compon",{"_index":68,"t":{},"d":{},"k":{},"b":{"0":{}}}],["concept",{"_index":24,"t":{},"d":{},"k":{},"b":{"0":{}}}],["conduct",{"_index":99,"t":{},"d":{},"k":{},"b":{"0":{}}}],["courtesi",{"_index":123,"t":{},"d":{},"k":{},"b":{"1":{}}}],["cover",{"_index":102,"t":{},"d":{},"k":{},"b":{"0":{}}}],["craig",{"_index":266,"t":{},"d":{},"k":{},"b":{"2":{}}}],["critic",{"_index":147,"t":{},"d":{},"k":{},"b":{"1":{}}}],["crump",{"_index":184,"t":{},"d":{},"k":{},"b":{"2":{}}}],["ctweedie@utep.edu",{"_index":272,"t":{},"d":{},"k":{},"b":{"2":{}}}],["cultur",{"_index":138,"t":{},"d":{},"k":{},"b":{"1":{}}}],["cyberinfrastructur",{"_index":270,"t":{},"d":{},"k":{},"b":{"2":{}}}],["cycl",{"_index":44,"t":{},"d":{},"k":{},"b":{"0":{},"2":{}}}],["data",{"_index":277,"t":{},"d":{},"k":{},"b":{"2":{}}}],["dataset",{"_index":155,"t":{},"d":{},"k":{},"b":{"1":{}}}],["differenti",{"_index":143,"t":{},"d":{},"k":{},"b":{"1":{}}}],["director",{"_index":172,"t":{},"d":{},"k":{},"b":{"2":{}}}],["distinct",{"_index":145,"t":{},"d":{},"k":{},"b":{"1":{}}}],["download",{"_index":119,"t":{},"d":{},"k":{},"b":{"0":{}}}],["driver",{"_index":219,"t":{},"d":{},"k":{},"b":{"2":{}}}],["dunton",{"_index":168,"t":{},"d":{},"k":{},"b":{"2":{}}}],["dure",{"_index":101,"t":{},"d":{},"k":{},"b":{"0":{}}}],["dynam",{"_index":233,"t":{},"d":{},"k":{},"b":{"2":{}}}],["e",{"_index":267,"t":{},"d":{},"k":{},"b":{"2":{}}}],["eastern",{"_index":118,"t":{},"d":{},"k":{},"b":{"0":{},"1":{}}}],["ecolog",{"_index":6,"t":{},"d":{"0":{},"1":{},"2":{}},"k":{},"b":{"0":{},"1":{}}}],["ecosystem",{"_index":2,"t":{"1":{}},"d":{"0":{},"1":{},"2":{}},"k":{"1":{}},"b":{"0":{},"1":{},"2":{}}}],["educ",{"_index":239,"t":{},"d":{},"k":{},"b":{"2":{}}}],["effect",{"_index":50,"t":{},"d":{},"k":{},"b":{"0":{},"2":{}}}],["el",{"_index":202,"t":{},"d":{},"k":{},"b":{"2":{}}}],["elson",{"_index":111,"t":{},"d":{},"k":{},"b":{"0":{}}}],["email",{"_index":166,"t":{},"d":{},"k":{},"b":{"2":{}}}],["employ",{"_index":82,"t":{},"d":{},"k":{},"b":{"0":{}}}],["encompass",{"_index":127,"t":{},"d":{},"k":{},"b":{"1":{}}}],["eros",{"_index":269,"t":{},"d":{},"k":{},"b":{"2":{}}}],["essenti",{"_index":137,"t":{},"d":{},"k":{},"b":{"1":{}}}],["establish",{"_index":126,"t":{},"d":{},"k":{},"b":{"1":{}}}],["estuarin",{"_index":244,"t":{},"d":{},"k":{},"b":{"2":{}}}],["examin",{"_index":23,"t":{},"d":{},"k":{},"b":{"0":{}}}],["experiment",{"_index":21,"t":{},"d":{},"k":{},"b":{"0":{}}}],["expertis",{"_index":218,"t":{},"d":{},"k":{},"b":{"2":{}}}],["fairbank",{"_index":194,"t":{},"d":{},"k":{},"b":{"2":{}}}],["field",{"_index":92,"t":{},"d":{},"k":{},"b":{"0":{}}}],["find",{"_index":154,"t":{},"d":{},"k":{},"b":{"1":{}}}],["fish",{"_index":135,"t":{},"d":{},"k":{},"b":{"1":{}}}],["flux",{"_index":243,"t":{},"d":{},"k":{},"b":{"2":{}}}],["food",{"_index":130,"t":{},"d":{},"k":{},"b":{"1":{}}}],["formal",{"_index":94,"t":{},"d":{},"k":{},"b":{"0":{}}}],["foundat",{"_index":14,"t":{},"d":{},"k":{},"b":{"0":{}}}],["fund",{"_index":11,"t":{},"d":{},"k":{},"b":{"0":{}}}],["graduat",{"_index":88,"t":{},"d":{},"k":{},"b":{"0":{}}}],["h",{"_index":262,"t":{},"d":{},"k":{},"b":{"2":{}}}],["habitat",{"_index":131,"t":{},"d":{},"k":{},"b":{"1":{}}}],["hardison",{"_index":223,"t":{},"d":{},"k":{},"b":{"2":{}}}],["high",{"_index":84,"t":{},"d":{},"k":{},"b":{"0":{},"1":{}}}],["hydrolog",{"_index":259,"t":{},"d":{},"k":{},"b":{"2":{}}}],["ic",{"_index":58,"t":{},"d":{},"k":{},"b":{"0":{}}}],["iken",{"_index":193,"t":{},"d":{},"k":{},"b":{"2":{}}}],["includ",{"_index":75,"t":{},"d":{},"k":{},"b":{"0":{}}}],["influenc",{"_index":45,"t":{},"d":{},"k":{},"b":{"0":{}}}],["inform",{"_index":273,"t":{},"d":{},"k":{},"b":{"2":{}}}],["input",{"_index":61,"t":{},"d":{},"k":{},"b":{"0":{},"2":{}}}],["institut",{"_index":187,"t":{},"d":{},"k":{},"b":{"2":{}}}],["inupiat",{"_index":139,"t":{},"d":{},"k":{},"b":{"1":{}}}],["investig",{"_index":216,"t":{},"d":{},"k":{},"b":{"2":{}}}],["jago",{"_index":117,"t":{},"d":{},"k":{},"b":{"0":{}}}],["jame",{"_index":177,"t":{},"d":{},"k":{},"b":{"2":{}}}],["jeremi",{"_index":230,"t":{},"d":{},"k":{},"b":{"2":{}}}],["jimm@utexas.edu",{"_index":181,"t":{},"d":{},"k":{},"b":{"2":{}}}],["jlkasper@alaska.edu",{"_index":237,"t":{},"d":{},"k":{},"b":{"2":{}}}],["juli",{"_index":108,"t":{},"d":{},"k":{},"b":{"0":{}}}],["k",{"_index":78,"t":{},"d":{},"k":{},"b":{"0":{},"2":{}}}],["kaktovik",{"_index":80,"t":{},"d":{},"k":{},"b":{"0":{}}}],["kasper",{"_index":231,"t":{},"d":{},"k":{},"b":{"2":{}}}],["katrin",{"_index":192,"t":{},"d":{},"k":{},"b":{"2":{}}}],["kbiken@alaska.edu",{"_index":198,"t":{},"d":{},"k":{},"b":{"2":{}}}],["ken",{"_index":167,"t":{},"d":{},"k":{},"b":{"2":{}}}],["ken.dunton@utexas.edu",{"_index":176,"t":{},"d":{},"k":{},"b":{"2":{}}}],["key",{"_index":153,"t":{},"d":{},"k":{},"b":{"1":{}}}],["l",{"_index":200,"t":{},"d":{},"k":{},"b":{"2":{}}}],["label",{"_index":69,"t":{},"d":{},"k":{},"b":{"0":{}}}],["lagoon",{"_index":1,"t":{"1":{}},"d":{"0":{},"1":{},"2":{}},"k":{"1":{}},"b":{"0":{},"1":{},"2":{}}}],["land",{"_index":242,"t":{},"d":{},"k":{},"b":{"2":{}}}],["larg",{"_index":132,"t":{},"d":{},"k":{},"b":{"1":{}}}],["lead",{"_index":162,"t":{},"d":{},"k":{},"b":{"2":{}}}],["linkag",{"_index":221,"t":{},"d":{},"k":{},"b":{"2":{}}}],["live",{"_index":90,"t":{},"d":{},"k":{},"b":{"0":{}}}],["long",{"_index":4,"t":{},"d":{"0":{},"1":{},"2":{}},"k":{},"b":{"0":{},"1":{}}}],["loss",{"_index":57,"t":{},"d":{},"k":{},"b":{"0":{}}}],["loughe",{"_index":201,"t":{},"d":{},"k":{},"b":{"2":{}}}],["lter",{"_index":8,"t":{"1":{}},"d":{"0":{},"1":{},"2":{}},"k":{"1":{}},"b":{"0":{},"1":{}}}],["mahoney",{"_index":255,"t":{},"d":{},"k":{},"b":{"2":{}}}],["maintain",{"_index":148,"t":{},"d":{},"k":{},"b":{"1":{}}}],["major",{"_index":66,"t":{},"d":{},"k":{},"b":{"0":{}}}],["manag",{"_index":274,"t":{},"d":{},"k":{},"b":{"2":{}}}],["massachusett",{"_index":210,"t":{},"d":{},"k":{},"b":{"2":{}}}],["mcclelland",{"_index":178,"t":{},"d":{},"k":{},"b":{"2":{}}}],["mcmean",{"_index":246,"t":{},"d":{},"k":{},"b":{"2":{}}}],["mechan",{"_index":38,"t":{},"d":{},"k":{},"b":{"0":{}}}],["metabol",{"_index":238,"t":{},"d":{},"k":{},"b":{"2":{}}}],["michael",{"_index":208,"t":{},"d":{},"k":{},"b":{"2":{}}}],["migratori",{"_index":134,"t":{},"d":{},"k":{},"b":{"1":{}}}],["mississauga",{"_index":248,"t":{},"d":{},"k":{},"b":{"2":{}}}],["mix",{"_index":64,"t":{},"d":{},"k":{},"b":{"0":{}}}],["model",{"_index":260,"t":{},"d":{},"k":{},"b":{"2":{}}}],["more",{"_index":128,"t":{},"d":{},"k":{},"b":{"1":{}}}],["much",{"_index":36,"t":{},"d":{},"k":{},"b":{"0":{}}}],["nation",{"_index":12,"t":{},"d":{},"k":{},"b":{"0":{}}}],["nativ",{"_index":83,"t":{},"d":{},"k":{},"b":{"0":{}}}],["natur",{"_index":42,"t":{},"d":{},"k":{},"b":{"0":{}}}],["need",{"_index":37,"t":{},"d":{},"k":{},"b":{"0":{}}}],["new",{"_index":10,"t":{},"d":{},"k":{},"b":{"0":{},"1":{}}}],["northern",{"_index":121,"t":{},"d":{"1":{}},"k":{},"b":{"1":{}}}],["nsf",{"_index":15,"t":{},"d":{},"k":{},"b":{"0":{}}}],["nutrient",{"_index":62,"t":{},"d":{},"k":{},"b":{"0":{},"2":{}}}],["ocean",{"_index":63,"t":{},"d":{},"k":{},"b":{"0":{}}}],["open",{"_index":105,"t":{},"d":{},"k":{},"b":{"0":{}}}],["oregon",{"_index":185,"t":{},"d":{},"k":{},"b":{"2":{}}}],["organ",{"_index":224,"t":{},"d":{},"k":{},"b":{"2":{}}}],["outreach",{"_index":241,"t":{},"d":{},"k":{},"b":{"2":{}}}],["over",{"_index":30,"t":{},"d":{},"k":{},"b":{"0":{}}}],["paso",{"_index":203,"t":{},"d":{},"k":{},"b":{"2":{}}}],["peopl",{"_index":158,"t":{"2":{}},"d":{},"k":{"2":{}},"b":{}}],["period",{"_index":107,"t":{},"d":{},"k":{},"b":{"0":{}}}],["permafrost",{"_index":52,"t":{},"d":{},"k":{},"b":{"0":{}}}],["personnel",{"_index":159,"t":{},"d":{"2":{}},"k":{},"b":{}}],["phone",{"_index":165,"t":{},"d":{},"k":{},"b":{"2":{}}}],["plan",{"_index":98,"t":{},"d":{},"k":{},"b":{"0":{}}}],["popul",{"_index":133,"t":{},"d":{},"k":{},"b":{"1":{}}}],["precipit",{"_index":55,"t":{},"d":{},"k":{},"b":{"0":{}}}],["process",{"_index":227,"t":{},"d":{},"k":{},"b":{"2":{}}}],["product",{"_index":149,"t":{},"d":{},"k":{},"b":{"1":{}}}],["program",{"_index":9,"t":{},"d":{"0":{},"1":{},"2":{}},"k":{},"b":{"0":{},"1":{}}}],["progress",{"_index":150,"t":{},"d":{},"k":{},"b":{"1":{}}}],["project",{"_index":74,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{}}}],["propos",{"_index":120,"t":{},"d":{},"k":{},"b":{"0":{}}}],["provid",{"_index":35,"t":{},"d":{},"k":{},"b":{"0":{},"1":{}}}],["public",{"_index":156,"t":{},"d":{},"k":{},"b":{"1":{}}}],["r",{"_index":254,"t":{},"d":{},"k":{},"b":{"2":{}}}],["rawlin",{"_index":209,"t":{},"d":{},"k":{},"b":{"2":{}}}],["rawlins@geo.umass.edu",{"_index":215,"t":{},"d":{},"k":{},"b":{"2":{}}}],["recent",{"_index":87,"t":{},"d":{},"k":{},"b":{"0":{}}}],["red",{"_index":72,"t":{},"d":{},"k":{},"b":{"0":{}}}],["redund",{"_index":29,"t":{},"d":{},"k":{},"b":{"0":{}}}],["regim",{"_index":56,"t":{},"d":{},"k":{},"b":{"0":{}}}],["research",{"_index":7,"t":{},"d":{"0":{},"1":{},"2":{}},"k":{},"b":{"0":{},"1":{}}}],["resili",{"_index":26,"t":{},"d":{},"k":{},"b":{"0":{},"2":{}}}],["resourc",{"_index":146,"t":{},"d":{},"k":{},"b":{"1":{}}}],["role",{"_index":164,"t":{},"d":{},"k":{},"b":{"2":{}}}],["schemat",{"_index":65,"t":{},"d":{},"k":{},"b":{"0":{}}}],["schonberg",{"_index":125,"t":{},"d":{},"k":{},"b":{"1":{}}}],["school",{"_index":85,"t":{},"d":{},"k":{},"b":{"0":{}}}],["scienc",{"_index":13,"t":{},"d":{},"k":{},"b":{"0":{}}}],["sea",{"_index":19,"t":{},"d":{"1":{}},"k":{"1":{}},"b":{"0":{},"1":{},"2":{}}}],["season",{"_index":25,"t":{},"d":{},"k":{},"b":{"0":{},"1":{}}}],["senior",{"_index":86,"t":{},"d":{},"k":{},"b":{"0":{}}}],["share",{"_index":152,"t":{},"d":{},"k":{},"b":{"1":{}}}],["shift",{"_index":54,"t":{},"d":{},"k":{},"b":{"0":{}}}],["simpson",{"_index":113,"t":{},"d":{},"k":{},"b":{"0":{}}}],["site",{"_index":110,"t":{},"d":{},"k":{},"b":{"0":{}}}],["sound",{"_index":115,"t":{},"d":{},"k":{},"b":{"0":{}}}],["spatial",{"_index":32,"t":{},"d":{},"k":{},"b":{"0":{}}}],["spitz",{"_index":263,"t":{},"d":{},"k":{},"b":{"2":{}}}],["stabil",{"_index":27,"t":{},"d":{},"k":{},"b":{"0":{}}}],["start",{"_index":95,"t":{},"d":{},"k":{},"b":{"0":{}}}],["state",{"_index":186,"t":{},"d":{},"k":{},"b":{"2":{}}}],["stefansson",{"_index":114,"t":{},"d":{},"k":{},"b":{"0":{}}}],["strong",{"_index":76,"t":{},"d":{},"k":{},"b":{"0":{}}}],["structur",{"_index":220,"t":{},"d":{},"k":{},"b":{"2":{}}}],["student",{"_index":89,"t":{},"d":{},"k":{},"b":{"0":{}}}],["studi",{"_index":100,"t":{},"d":{"1":{}},"k":{},"b":{"0":{}}}],["such",{"_index":51,"t":{},"d":{},"k":{},"b":{"0":{}}}],["support",{"_index":73,"t":{},"d":{},"k":{},"b":{"0":{}}}],["susan",{"_index":124,"t":{},"d":{},"k":{},"b":{"1":{}}}],["system",{"_index":67,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{}}}],["team",{"_index":161,"t":{},"d":{},"k":{},"b":{"2":{}}}],["tempor",{"_index":33,"t":{},"d":{},"k":{},"b":{"0":{}}}],["term",{"_index":5,"t":{},"d":{"0":{},"1":{},"2":{}},"k":{},"b":{"0":{},"1":{}}}],["terrestri",{"_index":225,"t":{},"d":{},"k":{},"b":{"2":{}}}],["texa",{"_index":170,"t":{},"d":{},"k":{},"b":{"2":{}}}],["thaw",{"_index":53,"t":{},"d":{},"k":{},"b":{"0":{}}}],["thorough",{"_index":60,"t":{},"d":{},"k":{},"b":{"0":{}}}],["tim",{"_index":275,"t":{},"d":{},"k":{},"b":{"2":{}}}],["timefram",{"_index":34,"t":{},"d":{},"k":{},"b":{"0":{}}}],["tool",{"_index":71,"t":{},"d":{},"k":{},"b":{"0":{}}}],["toronto",{"_index":247,"t":{},"d":{},"k":{},"b":{"2":{}}}],["track",{"_index":39,"t":{},"d":{},"k":{},"b":{"0":{}}}],["transport",{"_index":258,"t":{},"d":{},"k":{},"b":{"2":{}}}],["trophic",{"_index":28,"t":{},"d":{},"k":{},"b":{"0":{},"2":{}}}],["tweedi",{"_index":268,"t":{},"d":{},"k":{},"b":{"2":{}}}],["understand",{"_index":40,"t":{},"d":{},"k":{},"b":{"0":{}}}],["unit",{"_index":22,"t":{},"d":{},"k":{},"b":{"0":{}}}],["univers",{"_index":169,"t":{},"d":{},"k":{},"b":{"2":{}}}],["up",{"_index":104,"t":{},"d":{},"k":{},"b":{"0":{}}}],["us",{"_index":16,"t":{},"d":{},"k":{},"b":{"0":{}}}],["utqiagvik",{"_index":81,"t":{},"d":{},"k":{},"b":{"0":{}}}],["vanessa",{"_index":199,"t":{},"d":{},"k":{},"b":{"2":{}}}],["villag",{"_index":91,"t":{},"d":{},"k":{},"b":{"0":{}}}],["vlougheed@utep.edu",{"_index":207,"t":{},"d":{},"k":{},"b":{"2":{}}}],["water",{"_index":106,"t":{},"d":{},"k":{},"b":{"0":{},"2":{}}}],["waterfowl",{"_index":136,"t":{},"d":{},"k":{},"b":{"1":{}}}],["we'll",{"_index":151,"t":{},"d":{},"k":{},"b":{"1":{}}}],["websit",{"_index":157,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["western",{"_index":112,"t":{},"d":{},"k":{},"b":{"0":{}}}],["whiteak",{"_index":276,"t":{},"d":{},"k":{},"b":{"2":{}}}],["whiteaker@utexas.edu",{"_index":281,"t":{},"d":{},"k":{},"b":{"2":{}}}],["work",{"_index":160,"t":{},"d":{"2":{}},"k":{},"b":{}}],["yspitz@coas.oregonstate.edu",{"_index":265,"t":{},"d":{},"k":{},"b":{"2":{}}}],["yvett",{"_index":261,"t":{},"d":{},"k":{},"b":{"2":{}}}]],"pipeline":["stemmer"]};
const PREVIEW_LOOKUP = {"0":{"t":"About","p":"About the Beaufort Lagoon Ecosystems (BLE) Long Term Ecological Research (LTER) program","l":"about.html"},"1":{"t":"Beaufort Lagoon Ecosystems LTER","p":"A Long Term Ecological Research (LTER) program studying lagoon ecosystems along the northern Alaskan Arctic coastline in the Beaufort Sea","l":"index.html"},"2":{"t":"People","p":"Personnel working with the Beaufort Lagoon Ecosystems (BLE) Long Term Ecological Research (LTER) program","l":"people.html"}};