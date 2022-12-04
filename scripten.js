const Bord = document.querySelector(".ReserverBord");
const Event = document.querySelector(".BookEvent");
const form = document.querySelector("#form");
const bytte = document.querySelector(".RegValg");
const regSkjem = document.querySelector(".RegSkjemBord");
const regEvent = document.querySelector(".RegSkjemEvent");
const hovedSide = document.querySelector("index.html");
const bordP = document.querySelector(".infoBord");
const eventP = document.querySelector(".infoEvent");





console.log(regSkjem.style);
console.log(regEvent.style);

/* Script som bytter hviklet skjema som vises på reservasjonssiden */

function bytteForm2() {
  document.getElementById('RegSkjemBord').style.display = 'none';
  document.getElementById('RegSkjemEvent').style.display = 'flex';
  document.getElementById('klump').style.left = '160px';
}


function bytteForm() {
  document.getElementById('RegSkjemBord').style.display = '';
  document.getElementById('RegSkjemEvent').style.display = 'none';
  document.getElementById('klump').style.left = '';
}


console.log(bordP.style);
console.log(eventP.style);



function bytteParagraf() {
  document.getElementById('infoBord').style.display = 'none';
  document.getElementById('infoEvent').style.display = 'flex';
}
function bytteParagraf2() {
  document.getElementById('infoBord').style.display = 'flex';
  document.getElementById('infoEvent').style.display = 'none';
}



$(function () {
  $(".toggle").on("click", function () {
    if ($(".item").hasClass("active")) {
      $(".item").removeClass("active");
    } else {
      $(".item").addClass("active");
    }
  });
});



/* Script som sjekker Skjema for bord booking */

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  let y = document.forms["myForm"]["email"].value;
  if (y == "") {
    alert("Email must be filled out");
    return false;
  }
  let z = document.forms["myForm"]["tlf"].value;
  if (z == "") {
    alert("Phone Number must be filled out");
    return false;
  }
  let w = document.forms["myForm"]["dato"].value;
  if (w == "") {
    alert("Please select a date for your reservation");
    return false;
  }
  let v = document.forms["myForm"]["tid"].value;
  if (v == "") {
    alert("Please select the time for your reservation");
    return false;
  }
  let u = document.forms["myForm"]["gjester"].value;
  if (u < 1 || u > 20) {
    alert("Please enter the number of guests \nThe maximum capacity for a normal reservation is 20 people");
    return false;
  }

  else {
    alert("Your reservation have been registred");
    return true;

  }
};



/* Script som sjekker Skjema for event booking */

function validateForm2() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  let y = document.forms["myForm"]["email"].value;
  if (y == "") {
    alert("Email must be filled out");
    return false;
  }
  let z = document.forms["myForm"]["tlf"].value;
  if (z == "") {
    alert("Phone Number must be filled out");
    return false;
  }
  let w = document.forms["myForm"]["dato"].value;
  if (w == "") {
    alert("Please select a date for your reservation");
    return false;
  }
  let v = document.forms["myForm"]["tid"].value;
  if (v == "") {
    alert("Please select the time for your reservation");
    return false;
  }
  let u = document.forms["myForm"]["gjester"].value;
  if (u < 1 || u > 20) {
    alert("Please enter the number of guests \nThe maximum capacity for a normal reservation is 20 people");
    return false;
  }

  else {
    alert("Your reservation have been registred");
    window.location.href = "Reservations.html";

  }
};