// #1
// className is redeclared inside the function, so that is a local variable that is 
// considered undefined for the first push. fix this by removing the var next to the 2nd
// className declaration

var myObj = { class: [] };
var className = 'animating';

function animateLeft(obj) {
    obj.class.push(className);
    className = 'left';
    obj.class.push(className);
}

animateLeft(myObj);

console.log(myObj.class);

// #2
// Same as above. unit is redeclared inside function, and is undefined at first. 
// Since your use of it does not specify celsius, the if statement never
// executes and unit remains undefined until formatTemp is done, adding an undefined
// to the string. fix by removing the var next to the unit declaration
// inside the if statement to make it an assignment statement.

var unit = 'F';

function formatTemp(temp, celcius) {
    if (celcius) {
        unit = 'C';
    }

    return temp + '&deg;' + unit;
}

var temp = formatTemp(99);

console.log(temp);

// #3
// The update declared as a global variable is overwritten inside the local 
// scope of increment to mean the function update that is used to update update (!)
// change the name of the function or the variable to fix this.

var update = true;
var a = 0;

function increment() {
    if (update === false) {
        return;
    }

    function add() {
        a++;

        if (a >= 10) {
            update = false;
        }
    }

    add();
}

for (var i = 0; i < 50; i++) {
    increment();
}

console.log(a);

// #4
// Here, the function declaration is technically hoisted to the top, and return inner() returns
// the inner's return value of 'Hello'. This appears to be functioning properly. To avoid confusion,
// however, you should return last.

function outer() {
	function inner() { return 'Hello'; }
    return inner();
}

console.log(outer());

// #5
// since logTime was declared as a variable in the global scope, it is not assigned the value of the 
//  function she intends until that line is reached. Fix by removing var logTime = .

logTime();

function logTime () {
    var date = new Date();
    console.log('The time is ' + date.getHours() + ':' + date.getMinutes());
}