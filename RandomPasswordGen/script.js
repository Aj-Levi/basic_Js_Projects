// Select necessary elements once and reuse
const slider = document.body.querySelector(".range");
const value = document.body.querySelector(".len-val");
const optionCont = document.body.querySelector(".cont");
const strengthBar = document.body.querySelector(".strength");
const inputField = document.getElementById("input");
const copyIcon = document.getElementById("copyicon");
const generateButton = document.body.querySelector(".btn");

// SVG constants for checked and unchecked states
const checkedSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`;
const uncheckedSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" />
    </svg>`;

// Mapping object for character sets
const mapping = {
    0: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    1: "abcdefghijklmnopqrstuvwxyz",
    2: "*(#$!@)",
    3: "0123456789"
};

// Initialize slider value display
value.textContent = slider.value;

// Update displayed slider value on input
slider.addEventListener("input", () => {
    value.textContent = slider.value;
});

// Copy to clipboard functionality
copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(inputField.value)
        .then(() => {
            alert("Text copied!");
        })
        .catch((err) => {
            alert("Error while copying: " + err);
        });
});

// Handle option toggling and update strength bar
optionCont.addEventListener("click", (element) => {
    const option = element.target.closest(".option");
    if (option) {
        const icon = option.firstElementChild;
        let width = parseFloat(strengthBar.style.width) || 0;

        if (icon.classList.contains("unchecked")) {
            icon.innerHTML = checkedSVG;
            icon.classList.remove("unchecked");
            icon.classList.add("checked");
            width = Math.min(100, width + 25); // Clamp width to a max of 100%
        } else {
            icon.innerHTML = uncheckedSVG;
            icon.classList.remove("checked");
            icon.classList.add("unchecked");
            width = Math.max(0, width - 25); // Clamp width to a min of 0%
        }

        strengthBar.style.width = `${width}%`;
    }
});

// Generate random password
generateButton.addEventListener("click", () => {
    let s = "";
    const optionArray = Array.from(optionCont.children);

    optionArray.forEach((option, i) => {
        if (option.firstElementChild.classList.contains("checked")) {
            s += mapping[i];
        }
    });

    if (!s) {
        alert("Please select at least one character set!");
        return;
    }

    const length = parseInt(slider.value, 10);
    let result = "";

    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * s.length);
        result += s[random];
    }

    inputField.value = result;
    console.log(result);
});
