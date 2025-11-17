function addJobGroup(jobCodes) {
  jobCodes.forEach((jobCode) => {
    document.getElementById(jobCode).style.filter = "grayscale(0%)";
    if (!jobList.includes(jobCode)) {
      jobList.push(jobCode);
    }
  });
}

function allTanks() {
  addJobGroup(tankJobs);
}

function allHealers() {
  addJobGroup(healerJobs);
}

function allMelee() {
  addJobGroup(meleeJobs);
}

function allRanged() {
  addJobGroup(physRangedJobs);
}

function allMages() {
  addJobGroup(casterJobs);
}

function toggleJob(jobCode) {
  if (jobList.includes(jobCode)) {
    jobList = jobList.filter((job) => job !== jobCode);
    document.getElementById(jobCode).style.filter = "grayscale(60%)";
  } else {
    jobList.push(jobCode);
    document.getElementById(jobCode).style.filter = "grayscale(0%)";
  }
}

function addAll() {
  jobList = Object.keys(jobData);
  for (job of jobList) {
    document.getElementById(job).style.filter = "grayscale(0%)";
  }
}

function clearAll() {
  for (job of jobList) {
    document.getElementById(job).style.filter = "grayscale(60%)";
  }
  jobList = [];
}

const pickRandomJob = (jobsArray) => {
  if (jobsArray.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * jobsArray.length);
  const chosenJob = jobsArray.splice(randomIndex, 1)[0];
  return chosenJob;
};

function generateJob() {
  const random = Math.floor(Math.random() * jobList.length);
  const chosenJob = jobList[random];
  if (chosenJob) {
    document.getElementById("jobTitle").innerHTML = jobTitle[chosenJob] + "!";
    document.getElementById("p1").src = "images/" + chosenJob + ".png";
  } else {
    document.getElementById("jobTitle").innerHTML =
      "You haven't selected any jobs.";
    document.getElementById("jobImage").src = "images/allrounder.png";
  }
}

function generateLightParty() {
  const chosenTank = tankJobs[Math.floor(Math.random() * tankJobs.length)];
  if (chosenTank) {
    document.getElementById("p1").src = "images/" + chosenTank + ".png";
  }

  const chosenHealer =
    healerJobs[Math.floor(Math.random() * healerJobs.length)];
  if (chosenHealer) {
    document.getElementById("p2").src = "images/" + chosenHealer + ".png";
  }

  let availableDPS = [...dpsJobs];
  const chosenDPS1 = pickRandomJob(availableDPS);
  if (chosenDPS1) {
    document.getElementById("p3").src = "images/" + chosenDPS1 + ".png";
  }

  // Pick the second DPS from the remaining jobs.
  const chosenDPS2 = pickRandomJob(availableDPS);
  if (chosenDPS2) {
    document.getElementById("p4").src = "images/" + chosenDPS2 + ".png";
  }
}
function generateFullParty() {
  let availableTanks = [...tankJobs];
  let availableHealers = [...healerJobs];
  let availableDPS = [...dpsJobs];

  const tank1 = pickRandomJob(availableTanks);
  if (tank1) {
    document.getElementById("p1").src = "images/" + tank1 + ".png";
  }
  const tank2 = pickRandomJob(availableTanks);
  if (tank2) {
    document.getElementById("p2").src = "images/" + tank2 + ".png";
  }

  const healer1 = pickRandomJob(availableHealers);
  if (healer1) {
    document.getElementById("p3").src = "images/" + healer1 + ".png";
  }
  const healer2 = pickRandomJob(availableHealers);
  if (healer2) {
    document.getElementById("p4").src = "images/" + healer2 + ".png";
  }

  const chosenDPS1 = pickRandomJob(availableDPS);
  if (chosenDPS1) {
    document.getElementById("p5").src = "images/" + chosenDPS1 + ".png";
  }

  const chosenDPS2 = pickRandomJob(availableDPS);
  if (chosenDPS2) {
    document.getElementById("p6").src = "images/" + chosenDPS2 + ".png";
  }
  const chosenDPS3 = pickRandomJob(availableDPS);
  if (chosenDPS3) {
    document.getElementById("p7").src = "images/" + chosenDPS3 + ".png";
  }
  const chosenDPS4 = pickRandomJob(availableDPS);
  if (chosenDPS4) {
    document.getElementById("p8").src = "images/" + chosenDPS4 + ".png";
  }
}
