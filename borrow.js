const shamil = {
    name: 'Shamil', 
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
       return this.name + ' is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const result = shamil.exam();

const raihan = {
    name: 'raihan',
    money: 8000
}

const result2 = shamil.exam.call(raihan);
// console.log(result2);
const raihanMoney = shamil.treatDey.call(raihan, 400, 40);
console.log(raihanMoney);
const raihanMoney2 = shamil.treatDey.apply(raihan, [1000, 100]);
console.log(raihanMoney2);

const raihanTreat = shamil.treatDey.bind(raihan);
const remaining = raihanTreat(1000, 100)
console.log(remaining);