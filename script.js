//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs.forEach((input, idx) => {
    input.addEventListener('keydown', (e) => {
        if (e.key === "Backspace") {
            input.value = ''; 
            if (idx > 0) {
                inputs[idx - 1].focus(); 
            }
            e.preventDefault();
        } else if (e.key >= '0' && e.key <= '9') {
            input.value = ''; 
        } else if (e.key !== "Tab") {
            e.preventDefault(); 
        }
    });

    input.addEventListener('input', () => {
        if (input.value.length > 0 && idx < inputs.length - 1) {
            inputs[idx + 1].focus(); 
        }
    });
});