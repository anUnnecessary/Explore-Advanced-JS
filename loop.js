const numbers = [45,12,6,0,74,7,9,4];
for (const number of numbers){
    console.log(number)
}

// 1. For of can not used with object
const bottle = {color: 'yellow' , price: 50, isCleaned: true, Capacity: 1}
// first option to loop through an object
const keys = Object.keys(bottle);
// console.log(keys);
for(const key of keys){
    console.log(key)
}

/** 3 ways to read object properties 
 bottle.color
 bottle['color]
 bottle[variable]
* 
*/

/**for in loop**/
// for(const key in bottle){
//     console.log(key)
// }
