const stringOne = "Hey, my name is Clay and this sentence doesn't have all letters."
const stringTwo = "The quick brown fox jumps over the lazy dog"
const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function isPangram(string) {
    // change string to array of each character
    const arr = string.split("")
    
    // remove any punctuation and duplicate letters
    function removeDuplicates(data) {
        return data.filter((value,index) => data.indexOf(value) === index)
    }
    const newArr = removeDuplicates(arr).toString().replace(/\W/g, "").split("")
    
    // if newArr.length < 26, then it's not a Pangram
    if (newArr.length < 26) {
        console.log("is not a pangram")
    } else {
        console.log("is a pangram")
    }
}

isPangram(stringTwo)
isPangram(stringOne)
