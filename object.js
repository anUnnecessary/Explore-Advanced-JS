// 1. create object using object literals

const player = {};
player.name = 'small nirob';
player.specialty = 'batsman'
player.bat = function(){
    console.log('swing your bat');
}
console.log(player);
player.bat()


// 2. object constructor

const person = new Object();
console.log(person);

// 3. object create method

const item = Object.create(null)
console.log(item);

// 4. class
class human{
    name = 'Shamil';
    Address = 'Cumilla';
    constructor(age){
        this.age = age
    }
}
const human1 = new human(56);
console.log(human1);