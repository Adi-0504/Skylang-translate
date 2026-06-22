function syllabify(input){

  const text = input.replace(/\s+/g, "");

  let result = [];
  let i = 0;

  while(i < text.length){

    const c = text[i];
    const v = text[i + 1];

    // C only
    if(!v || !/[aeiou]/.test(v)){
      result.push(c);
      i += 1;
      continue;
    }

    // CV / CVh
    let syllable = c + v;

    if(text[i + 2] === "h"){
      syllable += "h";
      i += 3;
    }else{
      i += 2;
    }

    result.push(syllable);
  }

  return result;
}