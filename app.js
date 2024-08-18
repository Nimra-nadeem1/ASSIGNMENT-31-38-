document.write("<h1>ASSIGNMENT (31-34)</h1>");
document.write("<h2>QUESTION # 1:</h2>");
var time = new Date();
document.write(time);


document.write("<h2>QUESTION # 2:</h2>");
var time = new Date();
var monthsname = ["Januarary","February","March","April" ,"May","June","July","August","September","October","November","December"];
var monthinnumber = time.getMonth();
var monthinword = monthsname[monthinnumber];
document.write("Current month : " +  monthinword);


document.write("<h2>QUESTION # 3:</h2>");
var time = new Date();
var dayssname = ["Sunday","Monday","Tuesday","Wednesday","Thursday" ,"Friday","Saturday",];
var dayinnumber = time.getDay();
// document.write(dayinnumber)
var dayinword = dayssname[dayinnumber];
var threeletter = dayinword.slice(0,3);
document.write("Today is " + threeletter);


document.write("<h2>QUESTION # 4:</h2>");
var time = new Date();
var dayssname = ["Sunday","Monday","Tuesday","Wednesday","Thursday" ,"Friday","Saturday",];
var dayinnumber = time.getDay();
var dayinword = dayssname[dayinnumber];
if (dayinword === "Saturday" || dayinword === "Sunday") {
    document.write("It's Fun day");
}else{
    document.write("It's week day let's get to work");
}


document.write("<h2>QUESTION # 5:</h2>");
var time = new Date();
var date = time.getDate();
if (date < 16) {
    document.write("First Fifteen days of month");
} else {
    document.write("Last Fifteen days of month");   
}


document.write("<h2>QUESTION # 6:</h2>");
var time = new Date();
var time1 = Math.floor(time.getTime() / 1000 / 60);
document.write(time1);


document.write("<h2>QUESTION # 7:</h2>");
var time = new Date();
var hour = time.getHours();
if (hour < 12) {
    document.write("Its AM");
} else {
    document.write("It's PM");
}


document.write("<h2>QUESTION # 8:</h2>");
var laterDate = new Date(2020, 11, 31);
document.write("Later date : " + laterDate);


document.write("<h2>QUESTION # 9:</h2>");
var ramadandate = new Date(2015, 5, 18); 
var currentDate = new Date();
var Difference = currentDate - ramadandate;
var daysPassed = Math.floor(Difference / (1000 * 60 * 60 * 24));
document.write(daysPassed + " days have passed since 1st Ramadan (June 18, 2015).");


document.write("<h2>QUESTION # 10:</h2>");
var referenceDate = new Date();
var start2015 = new Date(2015, 0, 1); 
var Difference = referenceDate - start2015;
var secondsElapsed = Math.floor(Difference / 1000);
document.write("On refrence date : " + referenceDate + " , " + secondsElapsed + " seconds had passed since the beginning of 2015");


document.write("<h2>QUESTION # 11:</h2>");
var currenttime = new Date();
document.write("current date and time : " + currenttime + "<br>");
var currentHours = currenttime.getHours();
currenttime.setHours(currentHours - 1);
document.write("1 hour ago " + currenttime);


document.write("<h2>QUESTION # 12:</h2>");
var time = new Date();
document.write("current date and time : " + time + "<br>");
var currentyear = time.getFullYear();
time.setFullYear(currentyear - 100);
document.write("100 years back : " + time);


document.write("<h2>QUESTION # 13:</h2>");
var age = parseInt(prompt("what is your age"));
var time = new Date();
var currentyear = parseInt(time.getFullYear());
var birthyear = currentyear - age
document.write("Your age is " + age + "<br>" + "Your birth year is " + birthyear);



document.write("<h2>QUESTION # 14:</h2>");
var name1 = prompt("Your name:");
var customername = name1.toUpperCase();
var time = new Date();
var monthsname = ["Januarary","February","March","April" ,"May","June","July","August","September","October","November","December"];
var monthinnumber = time.getMonth();
var monthinword = monthsname[monthinnumber];
var numofunits = 410;
var chargeperunit = 16;
var latepaymentcharge = 350;
var netamount = (numofunits * chargeperunit);
var grossamount = (netamount + latepaymentcharge);
document.write("<h1>K-Electric Bill</h1>" + "<br>" + "Customer name : " + customername + "<br>" + "Month : " + monthinword + "<br>" + "Number of units : " + numofunits + "<br>" + "Charges per unit : " + chargeperunit + "<br> <br>" + "Net Amount payable (within due date): " + netamount + "<br>" + "Late payement surcharge : " + latepaymentcharge + "<br>" + "Gross amount payable (after due date) : " + grossamount); 












document.write("<h1>ASSIGNMENT (35-38)</h1>");
document.write("<h2>QUESTION # 1:</h2>");
function currentdate() {
    var time = new Date();
    document.write(time);
}
currentdate();



document.write("<h2>QUESTION # 2:</h2>");
function greetuser() {
    var firstname = prompt("Enter your first name :");
    var firstname = firstname.toUpperCase();
    var lastname = prompt("Enter your last name :");
    var lastname = lastname.toUpperCase();
    var fullname = firstname + " " + lastname 
    document.write("Hello Miss/Mr " + fullname);
}
greetuser();


document.write("<h2>QUESTION # 3:</h2>");
function sum(a,b) {
    var addnum = a + b
    document.write(addnum);
}
sum(2,3);



document.write("<h2>QUESTION # 4:</h2>");
function calculator(num1,num2,operator) {
    var result;

    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            result = "Invalid operator";
    }

    console.log("Result :" + result);
    return result;
}
calculator(2,3,'*');



document.write("<h2>QUESTION # 5:</h2>");
function square(a) {
    var result = a*a
    document.write(result);
    
    return result;
}
square(4);




document.write("<h2>QUESTION # 6:</h2>");
function factorial(a) {
    if (a < 0) {
        return "Enter non negative integer";
    }
    if (a == 0 || a == 1) {
        return 1;
    }

    return a * factorial(a-1);
}
var result = factorial(5);
console.log("The factorial of 5 is " + result);




document.write("<h2>QUESTION # 7:</h2>");
function counting(start,end) {
    if (start > end) {
        alert("start number can not be small than end");
        return
    }

    var numcounting = ''
    for (var i = start ; i<= end ; i++) {
      numcounting += i + '';
    }
    console.log(numcounting);
}
counting(5,20);




document.write("<h2>QUESTION # 8:</h2>");
function hypotaneous(perp,base) {

    function square(a) {
        return a*a ;
    }
    var basesq = square(base);
    var perpsq = square(perp);
    var hypotaneous = Math.sqrt(basesq + perpsq);

    console.log(hypotaneous);
}
hypotaneous(3,4);






document.write("<h2>QUESTION # 9:</h2>");
document.write("<h3>First method</h3>");
function arearectangle(width,height) {
    return width*height;
}
var method1Area = arearectangle(5,5);
alert(method1Area);

document.write("<h3>Second method</h3>");
var width1 = 3;
var height1 = 7;
var method2Area = arearectangle(width1,height1);
document.write("Area of rectangle is " + method2Area);






// Original String: "hello"
// After split(''): ['h', 'e', 'l', 'l', 'o']
// After reverse(): ['o', 'l', 'l', 'e', 'h']
// After join(''): "olleh"
document.write("<h2>QUESTION # 10:</h2>");
function palandrome(str) {
    str = str.toLowerCase();
    var palenWord = str.split('').reverse().join('');
    return str === palenWord;
}
var word = "madam";
var result = palandrome(word);
if (result) {
    document.write("The given word " + word + " is palindrome."); 
};




document.write("<h2>QUESTION # 11:</h2>");
function firstlettercapital(str) {
    var words = str.split(' ');

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
};

var sentence = "the quick brown fox"
var result = firstlettercapital(sentence);
document.write(result);






document.write("<h2>QUESTION # 12:</h2>");
function longword(str) {
    var words = str.split(' ');
    var longestWord = '';

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

var sentence = 'Web Development Tutorial';
var result = longword(sentence);
document.write(result);





document.write("<h2>QUESTION # 13:</h2>");
function countOccurrences(str, letter) {
    str = str.toLowerCase();
    letter = letter.toLowerCase();
    
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    
    return count;
}

var word = 'JSResourceS.com';
var letterToCount = 'o';
var result = countOccurrences(word, letterToCount);
document.write(result);






document.write("<h2>QUESTION # 14:</h2>");
document.write("<h3>PART 1:</h3>");
function calcCircumference(radius) {
    return Math.floor(2*(Math.PI)*(radius*radius));
};
var result = calcCircumference(2);
document.write("The circumference is " + result);


document.write("<h3>PART 2:</h3>");
function calcArea(radius) {
    return Math.floor((Math.PI)*(radius*radius));
};
var result = calcArea(2);
document.write("The area is " + result);