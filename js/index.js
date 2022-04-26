document.addEventListener("DOMContentLoaded", () => {
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
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span> wrote: ${message} </span>`;
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", (e) => {
      const entry = e.target.parentNode;
      entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
  });
});
