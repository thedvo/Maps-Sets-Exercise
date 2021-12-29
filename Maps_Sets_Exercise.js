// Quick Question #1
{1,2,3,4}

// Quick Question #2
'ref'

// Quick Question #3

0: {Array(3) => true}
1: {Array(3) => false}


// hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length

// here we see that if the size of the Set is not the same as arr.length that means there are duplicates since Set removes any duplicates. If the length is the same between the set and array, then there are no duplciates. 



// vowelCount

function vowelCount(str){
    const newMap = new Map();
    const vowel = 'aeiou';

    for(let char of str){
       let lowerCaseChar = char.toLowerCase();
       if (vowel.includes(char)){
           if (newMap.has(lowerCaseChar)){
               newMap.set(lowerCaseChar, newMap.get(lowerCaseChar) + 1);
           }
           else {
               newMap.set(lowerCaseChar, 1);
           }
       } 
    }
    return newMap; 
}

