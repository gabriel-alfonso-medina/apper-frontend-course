function isPalindrome(word) {
    let wordArr = [...word]
    let drowArr = []
    let drow = ''

    for (let i = wordArr.length - 1; i >= 0; i--){
        drowArr.push(wordArr[i])
    }

    drow = drowArr.join('')

    if (drow === word){
        console.log(`Hurray! ${word} when reversed is ${drow}!`)
        return true;
    } else {
        console.log(`Unfortunately ${word} when reversed is ${drow}...`)
        return false
    }
  }
  
  const word = 'racecars'
  if (isPalindrome(word)) {
    console.log('It is a palindrome!')
  } else {
    console.log('It is not a palindrome!')
  }