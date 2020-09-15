window.onload = function (){
    const progress = new Progress();
}

class Progress {
    constructor() {
        const progress = document.getElementById("progress");

        this.state = "Normal"
        this.circles = Array.from(progress.querySelectorAll(".svg-container__circle"));
        this.animateSlider = progress.querySelector(".input__slider");
        this.valueLabel = progress.querySelector(".input__rounded-number");
        this.valueInput = this.valueLabel.querySelector("input");
        this.hideInput = progress.querySelector("#hide_input");
        this.animateInput = progress.querySelector("#animate_input");

        this.valueInput.onchange = () => {
            this.circles[1].style.strokeDasharray = parseInt(this.valueInput.value) ?
                `${parseInt(this.valueInput.value)} 100`:
                "0 100";
        }

        this.hideInput.onchange = () => {
            if (this.hideInput.checked) {
                this.Hide();
            }
            else {
                this.Show();
            }
        }
    }

    EnableAnimation() {
        if (this.state === "Normal")
        {
            this.state = "Animated";
            // add animation
        }
    }

    DisableAnimation() {
        if (this.state === "Animated") {
            this.state = "Normal";
            //remove animation
        }
    }

    Hide() {
        this.state = "Hidden";
        this.circles.forEach(elem => elem.classList.add("svg-container__circle_hidden"));
        this.animateInput.checked = false;
        this.animateInput.disabled = true;
        this.animateSlider.classList.add("input__slider_disabled");
        this.valueLabel.classList.add("input__rounded-number_disabled");
        this.valueInput.disabled = true;
    }

    Show() {
        this.state = "Normal";
        this.circles.forEach(elem => elem.classList.remove("svg-container__circle_hidden"));
        this.animateInput.disabled = false;
        this.animateSlider.classList.remove("input__slider_disabled");
        this.valueLabel.classList.remove("input__rounded-number_disabled");
        this.valueInput.disabled = false;
    }
}