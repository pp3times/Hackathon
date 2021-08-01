var synth = window.speechSynthesis;
speak = () => {
  var x = document.getElementById("showText").value;
  var utterThis = new SpeechSynthesisUtterance(x);
  utterThis.lang = "th-TH";
  synth.speak(utterThis);
};
