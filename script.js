//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes.forEach((input, index) => {
	input.addEventListener("input", () => {
		if(input.value !== "") {
			const next = input.nextElementSibling;

			if(next) {
				next.focus();
			}
		}
	})

	input.addEventListener("keydown", (e) => {
		if(e.key === "Backspace" && input.value === "") {
			const prev = input.previousElementSibling;

			if(prev) {
				prev.focus();
			}
		}
	})
})

codes[0].addEventListener("paste", (e) => {

  const data = e.clipboardData.getData("text").split("");

  codes.forEach((input, index) => {
    input.value = data[index] || "";
  });

});
codes[0].focus();