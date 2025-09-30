const inputs = document.querySelectorAll('.code');

document.getElementById('verification_subtext').textContent = "Enter the 6-digit code sent to your mobile/email.";
inputs[0].focus();
inputs.forEach((input, idx) => {
    input.addEventListener('keydown', (e) => {
		inputs.forEach(i => i.classList.remove('focused'));

        input.classList.add('focused');
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

// const inputs = document.querySelectorAll('.code');

// // Set subheading text
// document.getElementById('verification_subtext').textContent =
//     "Enter the 6-digit code sent to your mobile/email.";

// // Auto-focus first input on page load
// inputs[0].focus();

// inputs.forEach((input, idx) => {
//     input.addEventListener('keydown', (e) => {
//         // Handle backspace
//         if (e.key === "Backspace") {
//             input.value = '';
//             if (idx > 0) {
//                 inputs[idx - 1].focus();
//             }
//             e.preventDefault();
//         }
//         // Allow digits only
//         else if (e.key >= '0' && e.key <= '9') {
//             input.value = ''; // clear to allow new input
//         } 
//         // Block all other keys except Tab
//         else if (e.key !== "Tab") {
//             e.preventDefault();
//         }
//     });

//     input.addEventListener('input', () => {
//         // Move focus to next input after typing a digit
//         if (input.value.length > 0 && idx < inputs.length - 1) {
//             inputs[idx + 1].focus();
//         }
//     });
// });

