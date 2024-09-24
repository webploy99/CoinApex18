
const HandleShow1 = ()=>{
    showContaint1.style.transition = "all 0.5s ease";
    showContaint1.style.bottom = "0";
}
const HandleHide1 = () => {
  showContaint1.style.transition = "all 0.5s ease";
  showContaint1.style.bottom = "-98px";
};


const HandleShow2= () => {
  showContaint2.style.transition = "all 0.5s ease";
  showContaint2.style.bottom = "0";
};
const HandleHide2= () => {
  showContaint2.style.transition = "all 0.5s ease";
  showContaint2.style.bottom = "-98px";
};


const HandleShow3 = () => {
  showContaint3.style.transition = "all 0.5s ease";
  showContaint3.style.bottom = "0";
};
const HandleHide3 = () => {
  showContaint3.style.transition = "all 0.5s ease";
  showContaint3.style.bottom = "-98px";
};

AOS.init();

// url link
function url() {
  fbq("track", "Purchase");
  fbq("track", "SubmitApplication");
  location.href = "https://chat.whatsapp.com/Dwi6eFMmhaLHUG9ZUJNJA7";
}

function amazonUrl() {
  location.href = "https://www.amazon.com/";
}

let popup1 = document.getElementById("PopUp1");
let popup2 = document.getElementById("PopUp2");

function togglePopup(showPopup, hidePopup) {
  showPopup.style.display = "flex";
  hidePopup.style.display = "none";
}
function ShowPopUp1() {
  togglePopup(popup1, popup2);
}
function ShowPopUp2() {
  togglePopup(popup2, popup1);
}
function HidePopUp() {
  popup1.style.display = "none";
  popup2.style.display = "none";
}