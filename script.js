const shareData = {
    title: 'TrollGuide',
    text: 'Install TrollStore',
    url: 'https://bomberfish.ca/TrollGuide'
}

function isiOS() {
    const ua = navigator.userAgent;
    return ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0 || ua.indexOf("iPod touch") > 0;
}

if(isiOS() == false) {
    document.getElementById("notidevice").style.display="block"
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
    } else if (isiOS() == true && betaCompat() == true) {
        return true
    } else {
        return false
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
console.log("getCompat() returns", getCompat())
console.log("check155Compat() returns", check155Compat())

if (getCompat() == false) {
    document.getElementById("get").innerHTML = "incompatible"
    document.getElementById("get").disabled = "true"
    document.getElementById("get").style.width = "9em"
    document.getElementById("get").style.background = "var(--gray1)"
} 

if(getVersion() == 1560) {
    document.getElementById("ramdisk").style.display = "block"
} 

if(getVersion() < 1482 && getVersion() > 1399) {
    document.getElementById("checkra1n").style.display = "block"
}

if (getVersion() == 1560) {
    document.getElementById("156").style.display = "block"
} else if (getVersion() == 1550) {
    document.getElementById("155").style.display = "block"
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