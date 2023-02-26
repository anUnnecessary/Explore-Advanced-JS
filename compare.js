// const first = {a: 2};
// const second = {a: 2};
// if(first === second){
//     console.log('They are equal to same')
// }
// else{
//     console.log('Different')
// }

const first = {a: 2, b: 3, c: 6};
const second = {a: 2, b: 6, c: 3};
const firstString = JSON.stringify(first);
const secondString =JSON.stringify(second);
// console.log(firstString, secondString);

// if(firstString === secondString){
//     console.log('They are equal to same')
// }
// else{
//     console.log('Different')
// }

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if (first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

const isSame = compareObject(first,second);
console.log(isSame);