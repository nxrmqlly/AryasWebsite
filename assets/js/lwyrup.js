console.log("%cBetter Call%c Saul", "color: yellow; font-size: 50px;", "color: red; font-size: 50px;"), console.log("Press ` on your keyboard then type LWYRUP. Find the input at the end of the website.");
const windowContainer = document.getElementById("window-container"),
    codeInput = document.getElementById("codeInput");
document.addEventListener("keydown", (e) => {
    if ("`" === e.key && "none" === windowContainer.style.display) {
        windowContainer.style.display = "block";

        files = ["intro.mp3", "call.mp3"]

        const saulAudio = new Audio(
            "./assets/" + files[Math.floor(Math.random() * files.length)]
        );

        console.log(saulAudio)

        codeInput.addEventListener("input", () => {
            "LWYRUP" === codeInput.value.trim().toUpperCase() && saulAudio.play();
        });
    }
});