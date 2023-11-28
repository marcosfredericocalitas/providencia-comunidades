// Next image 
function nextImage() {
    let counter = 1;
    const totalImages = 4;
    let slider = document.getElementById("radio-1").checked = true;
    const sliderControl = document.querySelectorAll(".slider__control");
    let count;

    sliderControl.forEach(controler => {
        controler.addEventListener("click", () => {
            count = controler.classList.contains("slider__control--prev") ? -1 : 1;
            if (count == 1) {
                counter++;
            } else {
                counter--;
            }

            if (counter > 4) {
                counter = 1;
            } else if (count < 1) {
                counter = 4;
            }
            slider = document.getElementById("radio-" + counter).checked = true;
        });
    });

    setInterval(() => {
        counter++;
        if (counter > totalImages) {
            counter = 1;
        }
        slider = document.getElementById("radio-" + counter).checked = true;
    }, 3000);
};

nextImage();