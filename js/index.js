document.addEventListener("DOMContentLoaded", () => {
  // COPYRIGHT
  const today = new Date();
  let thisYear = today.getFullYear();

  const footerCopy = document.querySelector(".copy-container");
  const copyright = document.createElement("p");
  copyright.innerHTML = `&copy; Oksana Melnyk ${thisYear}`;
  footerCopy.appendChild(copyright);

  //SKILLS
  const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub"];
  const skillsSection = document.getElementById("skills");
  const skillsList = skillsSection.querySelector("ul");

  for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.textContent = skills[i];
    skill.classList.add("skill-card");
    skillsList.appendChild(skill);
  }

  //HANDLE MESSAGE FORM SUBMIT
  const messageForm = document.getElementsByName("leave_message")[0];
  messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    //DISPLAY MESSAGES IN LIST
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span> wrote: &nbsp;&nbsp;&nbsp; ${message} </span>`;
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.classList.add("remove-btn");
    removeButton.addEventListener("click", (e) => {
      const entry = e.target.parentNode;
      entry.remove();
    });
    newMessage.appendChild(removeButton);
    newMessage.classList.add("message-card");
    messageList.appendChild(newMessage);
    messageForm.reset();
  });

  //PROJECTS SECTION

  //Add projects from GitHUb using XHR
  /*
  var githubRequest = new XMLHttpRequest();
  githubRequest.open("GET", "https://api.github.com/users/OxanaMl/repos");
  githubRequest.send();

  githubRequest.addEventListener("load", () => {
    const repositories = JSON.parse(githubRequest.response);
    console.log(repositories);
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.innerText = repositories[i].name;
      project.classList.add("project-card");
      projectList.appendChild(project);
    }
  });
  */

  //Add projects from GitHub using Fetch API
  fetch("https://api.github.com/users/OxanaMl/repos")
    .then((res) => res.json())
    .then((repositories) => {
      const projectSection = document.getElementById("projects");
      const projectList = projectSection.querySelector("ul");

      for (let i = 0; i < repositories.length; i++) {
        const link = document.createElement("a");
        link.href = repositories[i].html_url;
        link.target = "_blank";
        link.innerText = repositories[i].name;
        link.classList.add("project-card");
        projectList.appendChild(link);
      }
    });
});
