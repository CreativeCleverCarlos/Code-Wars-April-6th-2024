/**

Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

**/

function capitals(word){
    capitalIndexNumber = [];
    for (let i = 0; i < word.length; i++){
        if (word[i].toUpperCase() == word[i]){  //this is giving the comparison. That if the letter at w.e index (it being capital) is equal to a capital. Then push that array value into the empty array
            capitalIndexNumber.push(i)
        }
    }
    return capitalIndexNumber

}

console.log(capitals("WoRDs"))