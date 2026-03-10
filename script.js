//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes.forEach((input, index) => { 
	// forward Key
	input.addEventListener("input", () => {
		if(input.value !== "") {
			const next = input.nextElementSibling;

			if(next) {
				next.focus();
			}
		}
	})

	// Backward Key
	input.addEventListener("keydown", (e) => {
		if(e.key === "Backspace" && input.value === "") {
			const prev = input.previousElementSibling;

			if(prev) {
				prev.focus();
			}
		}
	})
})


// copy paste OTP
codes[0].addEventListener("paste", (e) => {

  const data = e.clipboardData.getData("text").split("");

  codes.forEach((input, index) => {
    input.value = data[index] || "";
  });

});

codes[0].focus();