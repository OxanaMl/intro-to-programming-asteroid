// COPYRIGHT
const today = new Date();
let thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `&copy;Oksana Melnyk ${thisYear}`;
footer.appendChild(copyright);

//SKILLS
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}
