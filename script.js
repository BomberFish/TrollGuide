function isiOS() {
  const ua = navigator.userAgent;
  return ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0 || ua.indexOf("iPhone") > 0;
} 

function getVersion() {
  if (isiOS() == true) {
      const extract = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
          return `${parseInt(extract[1] || 0, 10)}${parseInt(extract[2] || 0, 10)}${parseInt(extract[3] || 0, 10)}`
  } else {
      return null; // or [0,0,0]
  }
}

if (isiOS() == false) {
  document.getElementById("get").innerHTML="incompatible"
  document.getElementById("get").disabled="true"
  document.getElementById("get").style.width="10em"
  document.getElementById("get").style.background="var(--gray1)"
}


function buttonClick(element) {
  if (element.className == "clicked") {
    window.location.href = "http://api.jailbreaks.app/troll64e"
  }
  element.style.background="var(--green)"
  element.style.width="6em"
  element.innerHTML = "Install"
  element.classList.add("clicked");
}