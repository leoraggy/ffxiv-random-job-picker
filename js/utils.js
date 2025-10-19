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

function generateJob() {
  const random = Math.floor(Math.random() * jobList.length);
  const chosenJob = jobList[random];
  console.log(chosenJob);
  if (chosenJob) {
    document.getElementById("jobTitle").innerHTML = jobTitle[chosenJob] + "!";
    document.getElementById("jobImage").src = "images/" + chosenJob + ".png";
  } else {
    document.getElementById("jobTitle").innerHTML =
      "You haven't selected any jobs.";
    document.getElementById("jobImage").src = "images/allrounder.png";
  }
}
