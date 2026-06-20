<<<<<<< HEAD
function convert(input){

  const chars = input.replace(/\s+/g, "").split("");

  let glyphs = [];
  let syllables = [];

  for(let c of chars){
    glyphs.push(glyphMap[c] || c);
    syllables.push(c);
  }

  return {
    glyph: glyphs.join(""),
    phonetic: syllables.join(" ")
  };
=======
function convert(input){

  if(!validateInput(input)){
    return "INVALID INPUT";
  }

  const syllables = syllabify(input);

  let output = [];

  for(let s of syllables){

    let score = scoreSyllable(s);

    let glyph = glyphMap[s[0]] || "?";

    // tone rule
    if(score > 0.6){
      glyph = glyph + "̇";
    }

    output.push(glyph);
  }

  return output.join(" ");
>>>>>>> be29b5d36a7a3799c3ce96a645aaa06373de72f4
}