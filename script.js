const shareData = {
    title: 'TrollGuide',
    text: 'Install TrollStore',
    url: 'https://bomberfish.ca/TrollGuide'
}

function isiOS() {
    const ua = navigator.userAgent;
    return ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0 || ua.indexOf("iPod") > 0;
}

function checkBetaCompat() {
    const ua = navigator.userAgent;
    if (ua.indexOf("19G5027e") > 0 || ua.indexOf("19G5037d") > 0 || ua.indexOf("19G5046d") > 0 || ua.indexOf("19G5056c") > 0 || ua.indexOf("19G5063a") > 0 || ua.indexOf("19E5209h") > 0 || ua.indexOf("19E5219e") > 0 || ua.indexOf("19E5225g") > 0 || ua.indexOf("19E5235a") > 0) {
        return true;
    } else {
        return false;
    }
}

function getVersion() {
    if (isiOS() == true) {
        const extract = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return `${parseInt(extract[1] || 0, 10)}${parseInt(extract[2] || 0, 10)}${parseInt(extract[3] || 0, 10)}`
    } else {
        return null
    }
}

function versionCompat() {
    if(getVersion() > 1400 && getVersion() < 1560) {
        return true;
    } else {
        return false
    }
}

function betaCompat() {
    if(getVersion() == 1560 || getVersion() == 1550) {
        return true;
    } else {
        return false;
    }
}

function getCompat() {
    if (isiOS() == true && versionCompat() == true) {
        return true
    } else if (isiOS() == true && betaCompat() == true && checkBetaCompat() == true) {
        return true
    } else {
        return false
    }
}


console.log("isiOS() returns", isiOS())
console.log("getVersion() returns", getVersion())
console.log("versionCompat() returns", versionCompat())
console.log("betaCompat() returns", betaCompat())
console.log("checkBetaCompat() returns", checkBetaCompat())
console.log("getCompat() returns", getCompat())

if (getCompat() == false) {
    document.getElementById("get").innerHTML = "incompatible"
    document.getElementById("get").disabled = "true"
    document.getElementById("get").style.width = "9em"
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

document.getElementById("share").addEventListener('click', async () => {
        await navigator.share(shareData);
});