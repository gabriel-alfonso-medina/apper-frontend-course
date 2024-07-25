function convertToVowels(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelArr = []

    for (let char of word) {
        if (vowels.includes(char)) {
            vowelArr.push(char);
        }
    }

    return "The vowels are: " + vowelArr.join('')
  }
  
  const word = 'thisissomeword'
  const wordWithOnlyVowels = convertToVowels(word)
  console.log(wordWithOnlyVowels) // iioeo