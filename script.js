let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let downloadBtn = document.getElementById("downloadBtn");

function generateQR() {
    if (qrText.value.length > 0) {
        let qrURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        qrImage.src = qrURL;
        imgBox.classList.add("show-img");
        
        // Show the download button
        downloadBtn.style.display = 'block';
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}

function downloadQR() {
    let qrURL = qrImage.src;
    let link = document.createElement('a');
    link.href = qrURL;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
