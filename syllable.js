<<<<<<< HEAD
function syllabify(input){

  const tokens = input.trim().split(/\s+/);

  let result = [];

  for(let t of tokens){

    let c = t[0];
    let v = t[1];

    if(!c || !v) continue;

    result.push(c + v);
  }

  return result;
=======
function syllabify(input){

  const tokens = input.trim().split(/\s+/);

  let result = [];

  for(let t of tokens){

    let c = t[0];
    let v = t[1];

    if(!c || !v) continue;

    result.push(c + v);
  }

  return result;
>>>>>>> be29b5d36a7a3799c3ce96a645aaa06373de72f4
}