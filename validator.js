<<<<<<< HEAD
function validateInput(input){

  const lower = input.toLowerCase();

  // ❌ block anything not lowercase latin + space
  if(!/^[a-z\s]+$/.test(lower)){
    return false;
  }

  // ❌ block real English words (simple heuristic)
  const bannedWords = [
    "hello","world","cat","dog","sky","apple","google","chat","openai"
  ];

  for(let w of bannedWords){
    if(lower.includes(w)) return false;
  }

  return true;
=======
function validateInput(input){

  const lower = input.toLowerCase();

  // ❌ block anything not lowercase latin + space
  if(!/^[a-z\s]+$/.test(lower)){
    return false;
  }

  // ❌ block real English words (simple heuristic)
  const bannedWords = [
    "hello","world","cat","dog","sky","apple","google","chat","openai"
  ];

  for(let w of bannedWords){
    if(lower.includes(w)) return false;
  }

  return true;
>>>>>>> be29b5d36a7a3799c3ce96a645aaa06373de72f4
}