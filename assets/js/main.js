let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "   / " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }
];




function encrypt() {
    let outputTextArray = [];
    let finalOutput = [];
    let explanationOutput = [];

    const inputText = document.getElementById("inputText").value;

    console.log(inputText);

    for (let i = 0; i < inputText.length; i++) {
        outputTextArray.push(inputText[i].toUpperCase());
    }

    for (let a = 0; a < outputTextArray.length; a++) {
        let currentLetter = outputTextArray[a];
        let letters = morseAlphabet.find(({ letter }) => letter === currentLetter);
        finalOutput.push(letters.morseCode);
        explanationOutput.push(`${outputTextArray[a]} = ${letters.morseCode}`);
    }
    console.log(outputTextArray);
    console.log(finalOutput);
    console.log(explanationOutput);

    document.getElementById("outputMorseCode").innerHTML = finalOutput.join(" ");

    document.getElementById("explanationMorseCode").innerHTML = "<li>" + explanationOutput.join("</li><li>") + "</li>";
}



