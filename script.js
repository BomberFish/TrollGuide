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

function checkra1n() {
    if (getVersion() < 1482 && getVersion() > 1400) {
        return true;
    } else {
        return false;
    }
}

function checkRamdisk() {
    if(checkBetaCompat() == true && getVersion() == 1560) {
        return true;
    } else {
        return false;
    }
}

function check155Compat() {
    if(getVersion() < 1551 && betaCompat() == true) {
        return true;
    } else {
        return false;
    }
}

console.log("isiOS() returns", isiOS())
console.log("getVersion() returns", getVersion())
console.log("versionCompat() returns", versionCompat())
console.log("betaCompat() returns", betaCompat())
console.log("checkBetaCompat() returns", checkBetaCompat())
console.log("getCompat() returns", getCompat())
console.log("checkRamdisk() returns", checkRamdisk())
console.log("checkra1n() returns", checkra1n())
console.log("check155Compat() returns", check155Compat())

if (getCompat() == false) {
    document.getElementById("get").innerHTML = "incompatible"
    document.getElementById("get").disabled = "true"
    document.getElementById("get").style.width = "9em"
    document.getElementById("get").style.background = "var(--gray1)"
} else if(checkRamdisk() == true) {
    document.getElementById("ramdisk").style.display = "block"
} else if(checkra1n() == true) {
    document.getElementById("checkra1n").style.display = "block"
}


function buttonClick(element) {
    if (element.className == "clicked") {
        if(getVersion() > 1499 && check155Compat() == true) {
            window.location.href = "http://api.jailbreaks.app/troll"
        } else {
            window.location.href = "http://api.jailbreaks.app/troll64e"
        }
    }
    element.style.background = "var(--green)"
    element.style.width = "6em"
    element.innerHTML = "Install"
    element.classList.add("clicked");
}

document.getElementById("share").addEventListener('click', async () => {
        await navigator.share(shareData);
});