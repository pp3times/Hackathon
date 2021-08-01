var synth = window.speechSynthesis;
speak = () => {
  // var x = document.querySelector("#showText").value;
  var x = $('#showText').val();
  var utterThis = new SpeechSynthesisUtterance(x);
  utterThis.lang = "th-TH";
  synth.speak(utterThis);
};
