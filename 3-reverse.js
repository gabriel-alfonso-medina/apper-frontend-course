function reverse(word) {
    let wordArr = [...word]
    let drowArr = []

    console.log(`${word} backwards is...`)
    
    for (let i = wordArr.length - 1; i >= 0; i--){
        drowArr.push(wordArr[i])
    }

    return drowArr.join('')
   }
   
   const word = 'hello'
   const reversedWord = reverse(word)
   console.log(reversedWord) //olleh