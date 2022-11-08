function isiOS() {
    const ua = navigator.userAgent;
    return ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0 || ua.indexOf("iPhone") > 0;
}

function check156Compat() {
    const ua = navigator.userAgent;
    if (ua.indexOf("19G69") > 0 || ua.indexOf("19G71") > 0) {
        return false;
    }
}

function getVersion() {
    if (isiOS() == true) {
        const extract = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return `${parseInt(extract[1] || 0, 10)}${parseInt(extract[2] || 0, 10)}${parseInt(extract[3] || 0, 10)}`
    } else {
        return null; // or [0,0,0]
    }
}

function getCompat() {
    if (isiOS() == true && (getVersion() > 1400 || getVersion() < 1560)) {
        return true
    } else if (isiOS() == true && getVersion() == 1560) {
        if (check156Compat() == true) {
            return true
        } else {
          return false
        }
    } else {
        return false
    }
}


console.log(getCompat())

if (getCompat() == false) {
    document.getElementById("get").innerHTML = "incompatible"
    document.getElementById("get").disabled = "true"
    document.getElementById("get").style.width = "10em"
    document.getElementById("get").style.background = "var(--gray1)"
}


function buttonClick(element) {
    if (element.className == "clicked") {
        window.location.href = "http://api.jailbreaks.app/troll64e"
    }
    element.style.background = "var(--green)"
    element.style.width = "6em"
    element.innerHTML = "Install"
    element.classList.add("clicked");
}