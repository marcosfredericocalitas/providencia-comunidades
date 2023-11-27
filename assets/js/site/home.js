
// Next image 
function nextImage() {
    let counter = 1;
    const totalImages = 4;
    let slider = document.getElementById("radio-1").checked = true;

    setInterval(() => {
        counter++;
        if (counter > totalImages) {
            counter = 1;
        }
        slider = document.getElementById("radio-" + counter).checked = true;
    }, 3000);
};

nextImage();