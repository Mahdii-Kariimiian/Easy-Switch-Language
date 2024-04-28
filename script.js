import { persianUniCodes } from "./unicodes-persian.js";
// import { englishUniCodes } from "uniCodes-english.js";

const wrongTextInput = document.querySelector("#wrong-text");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
    const wrongText = wrongTextInput.value;

    const uniCodes = wrongText.split("").map((letter) => {
        console.log(letter.charCodeAt(0));
        return letter.charCodeAt(0);
    });

    const persianLetters = uniCodes.map((letterCode) => {
        const persianLetter = persianUniCodes.find((letter) => {
            return letter.code === letterCode;
        });

        if (persianLetter) {
            return persianLetter.persianLetter;
        } else {
            return "";
        }
    });

    const correctedText = [];
    for (let i = 0; i < persianLetters.length; i++) {
        if (wrongText[i] === " ") {
            correctedText.push(" ");
        } else {
            correctedText.push(persianLetters[i]);
        }
    }

    wrongTextInput.value = correctedText.join("");

    console.log(correctedText.join(""));
});
