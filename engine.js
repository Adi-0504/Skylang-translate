function convert(input){

  if(!input || typeof input !== "string"){
    return {
      glyph: "",
      phonetic: ""
    };
  }

  const chars = input.replace(/\s+/g, "").split("");

  let glyphs = [];
  let phonetic = [];

  for(let c of chars){

    const g = glyphMap[c] || c;

    glyphs.push(g);
    phonetic.push(c);
  }

  return {
    glyph: glyphs.join(""),
    phonetic: phonetic.join(" ")
  };
}