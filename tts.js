<<<<<<< HEAD
function speakText(text){

  speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(text);

  speechSynthesis.speak(u);
=======
function speakText(text){

  const utter = new SpeechSynthesisUtterance(text);

  utter.rate = 1;
  utter.pitch = 1;

  speechSynthesis.speak(utter);
>>>>>>> be29b5d36a7a3799c3ce96a645aaa06373de72f4
}