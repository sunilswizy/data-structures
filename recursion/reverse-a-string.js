
function reverse(word) {
    if(word === '') {
        return word;
    }
    return reverse(word.substr(1)) + word.charAt(0)

}
// console.log(reverse("bye"))

function reverseString(str) {
    let arrayStr = str.split("");
    let reversedArray = [];
    //We are using closure here so that we don't add the above variables to the global scope.
    function addToArray(array) {
      
      if(array.length > 0) {
        reversedArray.push(array.pop());
        addToArray(array);
      }
      return;
    }
    addToArray(arrayStr);
    return reversedArray.join("");
  }
  
  // reverseString('yoyo master');







  function reverseA(word) {
    console.log(word);
    if(word === '') {
      return ''
    }
    return reverseA(word.slice(1)) + (word[0] ? word[0] : '')
  }

  console.log(reverseA("hello hello"));