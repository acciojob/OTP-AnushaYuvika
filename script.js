//your JS code here. If required.
// const inputs = document.querySelectorAll('.code');

// inputs.forEach((input, idx) => {
//     input.addEventListener('keydown', (e) => {
// 		inputs.forEach(i => i.classList.remove('focused'));

//         input.classList.add('focused');
//         if (e.key === "Backspace") {
//             input.value = ''; 
//             if (idx > 0) {
//                 inputs[idx - 1].focus(); 
//             }
//             e.preventDefault();
//         } else if (e.key >= '0' && e.key <= '9') {
//             input.value = ''; 
//         } else if (e.key !== "Tab") {
//             e.preventDefault(); 
//         }
//     });

//     input.addEventListener('input', () => {
//         if (input.value.length > 0 && idx < inputs.length - 1) {
//             inputs[idx + 1].focus(); 
//         }
//     });
// });

const inputs = document.querySelectorAll('.code');

function setFocus(idx) {
    inputs.forEach(i => i.classList.remove('focused'));
    inputs[idx].classList.add('focused');
    inputs[idx].focus();
}

inputs.forEach((input, idx) => {
    input.addEventListener('keydown', (e) => {
        if (e.key === "Backspace") {
            input.value = '';
            if (idx > 0) {
                setFocus(idx - 1); // focus previous input
            } else {
                setFocus(0); // stay on first
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
            setFocus(idx + 1); // focus next input
        }
    });
});

// Initialize first input with focus
setFocus(0);
