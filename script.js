function openNav() {
  document.getElementById("sideNav").style.width = "20%";
  document.getElementById("sideNav").style.background = "#000000";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0px";
}

function loadHomepage() {
  document.getElementById("aboutMePage").style = "display:none";
  document.getElementById("homepagePage").style = "display:block";
  document.getElementById("contactsPage").style = "display:none";
  document.getElementById("projectsPage").style = "display:none";
}

function loadAbout() {
  document.getElementById("aboutMePage").style = "display:block";
  document.getElementById("homepagePage").style = "display:none";
  document.getElementById("contactsPage").style = "display:none";
  document.getElementById("projectsPage").style = "display:none";

}

function loadContacts() {
  document.getElementById("aboutMePage").style = "display:none";
  document.getElementById("homepagePage").style = "display:none";
  document.getElementById("contactsPage").style = "display:block";
  document.getElementById("projectsPage").style = "display:none";
}

function loadProjects() {
  document.getElementById("aboutMePage").style = "display:none";
  document.getElementById("homepagePage").style = "display:none";
  document.getElementById("contactsPage").style = "display:none";
  document.getElementById("projectsPage").style = "display:block";
}
