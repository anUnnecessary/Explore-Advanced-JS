const student = {
    name: 'Raihan',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function () {
        return this.name + ' is participating in an exam'
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treat: function (amount) {
        this.money = this.money - amount;
        return this.money
    }
};

const output = student.exam()
// console.log(output)
const reExam = student.improveExam('algebra')
// console.log(reExam);
const remainingAmount = student.treat(900)
// console.log(remainingAmount);
