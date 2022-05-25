//This JS

// function Person(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.getnewAge = function() {
//         console.log(`user age is ${this.age}`);
//     }
// }

// Person.prototype.getNewName = function() {
//     console.log(`user name is ${this.fname}`);
// }


// let user = new Person('giorgi', 'ragaca', 25);
// let user2 = new Person('ana', 'smith', 30);

// user.getNewName();



//accordition
let accordion = document.getElementsByClassName('container');
// let accordion = document.querySelectorAll('.container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active2');
    })
}



//burger bar
let navigation = document.getElementById('navbarlinks');
let toggleButton = document.getElementById('toggleButton');
let Linefirst = document.getElementById('line1');
let Linesecond = document.getElementById('line2');
let Linethird = document.getElementById('line3');

toggleButton.addEventListener('click', function() {
    navigation.classList.toggle('activeNav')
    Linefirst.classList.toggle('activeline1');
    Linesecond.classList.toggle('activeline2');
    Linethird.classList.toggle('activeline3');
});
