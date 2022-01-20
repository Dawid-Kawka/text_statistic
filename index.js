let textArea = document.getElementsByTagName("textarea")[0];

textArea.addEventListener("input", onChange);

function onChange(e) {
    const data = textArea.value;
    const numCharacters = data.length;
    document.getElementById("num-characters").innerHTML = numCharacters;

    const numWords = data.replace(/[\r\n]/g, " ").split(" ").length;
    document.getElementById("num-words").innerHTML = numWords;

    const numSentences = data.split(".").length;
    document.getElementById("num-sentences").innerHTML = numSentences;

}