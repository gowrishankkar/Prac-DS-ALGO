var reversePrefix = function(word, ch) {
     reverseWord = "";
        wordNew = "";
       let index = 0;
        for (let i = 0; i < word.length; i++) {
         
            if(word[i] === ch) {
              index = i;
              wordNew = word.substring(index + 1 , word.length);
              break;
            }
   
        }
        if(index === 0) return word;

        return (reverseWord = word.split("", index  + 1).reverse().join("") + wordNew);
};