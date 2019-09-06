// Your code goes here

document.querySelectorAll(".nav-link").forEach(navItem => {
  navItem.addEventListener("mouseover", event => {
    event.target.style.color = "gold";
  });
  navItem.addEventListener("mouseout", event => {
    event.target.style.color = "silver";
  });
  navItem.addEventListener("click", event => event.preventDefault());
});

Array.from(document.getElementsByTagName("img")).forEach(element => {
  element.addEventListener("contextmenu", event => {
    event.preventDefault();
    alert("NOT ALLOWEDDDD!!!!");
  });
});

const descriptions = document.querySelectorAll(".text-content");
const images = document.querySelectorAll(".img-content");
images.forEach(image => {
  image.addEventListener("click", event => {
    event.target.style.transition = "0.3s";
    event.target.style.transform =
      event.target.style.transform === "scale(1.2)" ? "none" : "scale(1.2)";
  });

  image.addEventListener("dblclick", event => {
    event.stopPropagation();
  });
});

document.querySelectorAll(".content-section").forEach(content => {
  content.addEventListener("dblclick", event => {
    console.log("dblClick");
    event.currentTarget.style.flexDirection =
      event.currentTarget.style.flexDirection === "row-reverse"
        ? "row"
        : "row-reverse";
  });
});

const destinationImage = document.querySelector(".content-destination img");

destinationImage.addEventListener("mousedown", event => {
  event.target.style.transition = ".3s";
  event.target.style.transform = "scale(0.8)";
});

destinationImage.addEventListener("mouseup", event => {
  event.target.style.transform = "none";
});

const headerImage = document.querySelector("header img");

headerImage.addEventListener("drag", event => {
  event.target.style.transition = ".3s";
  event.target.style.transform = "scale(0.8)";
});

headerImage.addEventListener("dragend", event => {
  event.target.style.transform = "none";
});

let counter = 0;
document.addEventListener("keydown", event => {
  counter++;
  if (counter >= 20) {
    alert("Wanna release that key, maybe?");
    counter = 0;
  }
});

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
