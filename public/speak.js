var synth=window.speechSynthesis;speak=()=>{var x=document.querySelector("#text").value
var utterThis=new SpeechSynthesisUtterance(x);utterThis.lang="th-TH";synth.speak(utterThis);}