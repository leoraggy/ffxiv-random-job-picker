const jobData = {
  pld: "pld.png",
  war: "war.png",
  drk: "drk.png",
  gnb: "gnb.png",
  whm: "whm.png",
  sch: "sch.png",
  ast: "ast.png",
  sge: "sge.png",
  mnk: "mnk.png",
  drg: "drg.png",
  nin: "nin.png",
  sam: "sam.png",
  rpr: "rpr.png",
  vpr: "vpr.png",
  brd: "brd.png",
  mch: "mch.png",
  dnc: "dnc.png",
  blm: "blm.png",
  smn: "smn.png",
  rdm: "rdm.png",
  pct: "pct.png",
};

const jobTitle = {
  pld: "Paladin",
  war: "Warrior",
  drk: "Dark Knight",
  gnb: "Gunbreaker",
  whm: "White Mage",
  sch: "Scholar",
  ast: "Astrologian",
  sge: "Sage",
  mnk: "Monk",
  drg: "Dragoon",
  nin: "Ninja",
  sam: "Samurai",
  rpr: "Reaper",
  vpr: "Viper",
  brd: "Bard",
  mch: "Machinist",
  dnc: "Dancer",
  blm: "Black Mage",
  smn: "Summoner",
  rdm: "Red Mage",
  pct: "Pictomancer",
  blu: "Blue Mage",
};

const tankJobs = ["pld", "war", "drk", "gnb"];
const healerJobs = ["whm", "sch", "ast", "sge"];
const meleeJobs = ["mnk", "drg", "nin", "sam", "rpr", "vpr"];
const physRangedJobs = ["brd", "mch", "dnc"];
const casterJobs = ["blm", "smn", "rdm", "pct"];
const dpsJobs = [...meleeJobs, ...physRangedJobs, ...casterJobs];

let jobList = Object.keys(jobData);
