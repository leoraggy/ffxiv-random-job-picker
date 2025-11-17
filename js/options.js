let options = false;
let unique = true;
let lightPartyEnabled = false;
let fullPartyEnabled = false;
let myOption = document.getElementById("option");
const container = document.getElementById("job-container");

function toggleOption() {
  options = !options;
  if (options) {
    myOption.style.display = "block";
  } else {
    myOption.style.display = "none";
  }
}

function toggleUniqueJobs() {
  unique = !unique;
}

const select = document.getElementById("party");
let lightParty = document.getElementsByClassName("lightParty");
console.log(lightParty);
let fullParty = document.getElementsByClassName("fullParty");
select.addEventListener("change", () => {
  const selectedText = select.options[select.selectedIndex].value;
  if (selectedText == "solo") {
    solo(container);
  } else if (selectedText == "lightParty") {
    handleLightParty(container);
  } else {
    handleFullParty(container);
  }
});

for (let p of lightParty) {
  p.style.display = "none";
}
for (let p of fullParty) {
  p.style.display = "none";
}

const solo = (container) => {
  container.innerHTML = `
   <h2 id="jobTitle">Please Select Job</h2>
   <div class="jobs" id="jobs">
  <div class="job">
      <img id="p1" src="images/allrounder.png" alt="" width="100px" />
      <br />
      <h3 class="jobText">YOU</h3>
    </div>
    </div>
     <div id="jobButton">
          <button class="form_style" id="generator" onclick="generateJob()">
            Generate Job
          </button>
        </div>`;
  document.getElementById("jobTitle").innerHTML = "Please Select Job";
  document.getElementById("generator").innerHTML = "Generate Job";
  document.getElementById("main").style.display = "block";
};

const handleLightParty = (container) => {
  container.innerHTML = `
        <h2 id="jobTitle">Please Select Light Party</h2>
         <div class="jobs" id="jobs">
  <div class="job">
          <img id="p1" src="images/tank.png" alt="" width="100px" />
          <br />
          <h3 class="jobText">Tank</h3>
        </div>
        <div class="job">
          <img id="p2" src="images/healer.png" alt="" width="100px" />
          <h3 class="jobText">Healer</h3>
        </div>
        <div class="job">
          <img id="p3" src="images/dps.png" alt="" width="100px" />
          <h3 class="jobText">DPS1</h3>
        </div>
        <div class="job">
          <img id="p4" src="images/dps.png" alt="" width="100px" />
          <h3 class="jobText">DPS2</h3>
        </div>
        </div>
         <div id="jobButton">
          <button class="form_style" id="generator" onclick="generateLightParty()">
            Generate Light Party
          </button>
        </div>`;
  document.getElementById("main").style.display = "none";
};

const handleFullParty = (container) => {
  container.innerHTML = `
  <h2 id="jobTitle">Please Select Full Party</h2>
  <div class="jobs" id="jobs">
    <div class="job">
          <img id="p1" src="images/tank.png" alt="" width="100px" />
          <br />
          <h3 class="jobText">MT</h3>
    </div>
    <div class="job">
          <img id="p2" src="images/tank.png" alt="" width="100px" />
          <h3 class="jobText">OT</h3>
    </div>
    <div class="job">
          <img id="p3" src="images/healer.png" alt="" width="100px" />
          <h3 class="jobText">H1</h3>
    </div>
    <div class="job">
          <img id="p4" src="images/healer.png" alt="" width="100px" />
          <h3 class="jobText">H2</h3>
    </div>
    <div class="job">
          <img id="p5" src="images/melee.png" alt="" width="100px" />
          <h3 class="jobText">M1</h3>
    </div>
    <div class="job">
          <img id="p6" src="images/melee.png" alt="" width="100px" />
          <h3 class="jobText">M2</h3>
    </div>
    <div class="job">
          <img id="p7" src="images/physRanged.png" alt="" width="100px" />
          <h3 class="jobText">R1</h3>
    </div>
    <div class="job">
          <img id="p8" src="images/magicRanged.png" alt="" width="100px" />
          <h3 class="jobText">R2</h3>
    </div>
    </div>
          <div id="jobButton">
          <button class="form_style" id="generator" onclick="generateFullParty()">
            Generate Full Party
          </button>
        </div>`;
  document.getElementById("main").style.display = "none";
};
