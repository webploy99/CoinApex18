
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