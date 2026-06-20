<<<<<<< HEAD
let phoneticBuffer = "";

function process(){

  const input = document.getElementById("inputBox").value;

  const result = convert(input);

  document.getElementById("output").innerText = result.glyph;

  phoneticBuffer = result.phonetic;
}

function speak(){

  if(!phoneticBuffer) return;

  speakText(phoneticBuffer);
=======
function process(){

  const input = document.getElementById("inputBox").value;

  const result = convert(input);

  document.getElementById("output").innerText = result;
}

function speak(){

  const text = document.getElementById("output").innerText;

  speakText(text);
>>>>>>> be29b5d36a7a3799c3ce96a645aaa06373de72f4
}