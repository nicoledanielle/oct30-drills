const key = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  
  function decode(string) {
    let output = "";
    let words = string.split(" ");
    let cipherKeys = Object.keys(key);
    
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i]; 
      const firstLetter = currentWord[0];
      
      // check if cipherKeys includes first letter
      // of currentWord
      if (cipherKeys.includes(firstLetter)) {
        
        // store the index indicated by the first letter
        let indicatedLetterIndex = key[firstLetter];
      
        
        // add the letter at the index
        // indicated by the key
        output += currentWord[indicatedLetterIndex];
      } else {
        output += ' ';
      }
  
    } 
    return output;
  }
  
  decode("craft block argon meter bells brown croon droop");