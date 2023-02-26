// console.log(this);
const shamil = {
    name: 'shamil', 
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        console.log(this);
       return this.name + ' is participating in an exam';
    },
    examArrow: () =>{
        console.log(this);
    },
    examNested: () =>{
        const arrow = () => {
            console.log(this);
        }
        arrow();
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
shamil.exam();

const raihan = {
    name: 'raihan',
    money: 8000
}

raihan.exam = raihan.exam;
raihan.exam();

function clickHandler(){
    console.log('inside click handler', this);
}
document.getElementById('btn-click2').addEventListener('click', function(){
    console.log(this);
})