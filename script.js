function generateResume(){

  let name = document.getElementById("name").value;
  let role = document.getElementById("role").value;
  let contact = document.getElementById("contact").value;
  let skills = document.getElementById("skills").value;
  let edu = document.getElementById("education").value;
  let exp = document.getElementById("experience").value;
  let ach = document.getElementById("achieve").value;
  let color = document.getElementById("color").value;

  document.getElementById("pname").innerText = name;
  document.getElementById("prole").innerText = role;
  document.getElementById("pcontact").innerText = contact;
  document.getElementById("pedu").innerText = edu;
  document.getElementById("pexp").innerText = exp;
  document.getElementById("pachieve").innerText = ach;

  // SKILLS
  let skillsHTML = "";
  skills.split(",").forEach(s=>{
    skillsHTML += `
      <div class="skill">
        <p>${s.trim()}</p>
        <div class="bar"><div class="fill"></div></div>
      </div>`;
  });
  document.getElementById("pskills").innerHTML = skillsHTML;

  // PHOTO
  let file = document.getElementById("photo").files[0];
  if(file){
    let reader = new FileReader();
    reader.onload = e => document.getElementById("pphoto").src = e.target.result;
    reader.readAsDataURL(file);
  }

  document.getElementById("resume").className = "resume a4 " + color;
}

/* AI */
function autoGenerateAI(){
  let role = document.getElementById("role").value || "professional";
  let skills = document.getElementById("skills").value || "teamwork, leadership";

  document.getElementById("education").value =
    `Motivated ${role} with strong skills in ${skills}. Focused on discipline and performance.`;

  document.getElementById("experience").value =
    `Worked as ${role}, handling responsibilities related to ${skills}.`;

  document.getElementById("achieve").value =
    "Consistent performer with strong dedication.";
}

/* PDF */
function downloadPDF(){
  html2pdf().from(document.getElementById("resume")).save();
}