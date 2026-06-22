function validateInput(input){
  const lower = input.toLowerCase();

  // Block anything not lowercase latin + space.
  if(!/^[a-z\s]+$/.test(lower)){
    return false;
  }

  // Block real English words (simple heuristic).
  const bannedWords = [
    "hello","world","cat","dog","sky","apple","google","chat","openai"
  ];

  for(let w of bannedWords){
    if(lower.includes(w)) return false;
  }

  return true;
}
