function showInfo() {
    document.getElementById("info").classList.add("active");
    document.getElementById("binaryConversion").classList.remove("active");
    document.getElementById("textConversion").classList.remove("active");
}

function showBinaryConversion() {
    document.getElementById("info").classList.remove("active");
    document.getElementById("binaryConversion").classList.add("active");
    document.getElementById("textConversion").classList.remove("active");
}

function showTextConversion() {
    document.getElementById("info").classList.remove("active");
    document.getElementById("binaryConversion").classList.remove("active");
    document.getElementById("textConversion").classList.add("active");
}

function convertBinaryToText() {
    const binaryInput = document.getElementById("binaryInput").value;
    const binaryList = binaryInput.split(" ");
    let textOutput = "";

    for (const binaryChar of binaryList) {
        const decimalCode = parseInt(binaryChar, 2);
        textOutput += String.fromCharCode(decimalCode);
    }

    document.getElementById("textOutput").textContent = textOutput;
}

function convertTextToBinary() {
    const textInput = document.getElementById("textInput").value;
    let binaryOutput = "";

    for (let i = 0; i < textInput.length; i++) {
        const char = textInput[i];
        const asciiCode = char.charCodeAt(0);
        const binaryCode = asciiCode.toString(2).padStart(8, '0');
        binaryOutput += binaryCode + ' ';
    }

    document.getElementById("binaryOutput").textContent = binaryOutput;
}

function copyToClipboard() {
    const binaryOutput = document.getElementById("binaryOutput");
    const textArea = document.createElement("textarea");
    textArea.value = binaryOutput.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    const copyMessage = document.getElementById("copyMessage");
    copyMessage.style.display = "block";
    setTimeout(function() {
        copyMessage.style.display = "none";
    }, 2000); // Hide the message after 2 seconds
}

    // Call the showInfo function when the page loads to make "Info" appear by default
window.onload = showInfo;
