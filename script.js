//Question No 1
document.writeln('<h1>Question No 1</h1>')
// Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
let num1 = 3;
let num2 = 5;
let add = num1 + num2 ;
document.writeln('the sum of 3 and 5 is ',  add ,'<br>');


// Question No 2
document.writeln('<h1>Question No 2</h1>')
// Repeat task1 for subtraction, multiplication, division &
// modulus.
let numb1 = 8;  //Subtraction
let numb2 = 5;
let sub = numb1 - numb2 ;
document.writeln('the subtraction of 8 and 5 is ', sub ,'<br>');

let number1 = 8;     // multiplication
let number2 =7;
let multiplication = number1*number2;
document.writeln('the multiplication of 8 and 7 is ', multiplication ,'<br>');
       
let numbr1 = 20;  // division
let numbr2 = 5;
let division =numbr1/numbr2;
document.writeln('the division of 20 and 5 is ', division ,'<br>');

let Num1 = 45;    // modulus
let Num2 = 4;
let modulus = Num1%Num2 
document.writeln('the modulus of 20 and 5 is ',modulus ,'<br>');

//Question No 3
document.writeln('<h1>Question No 3</h1>')
// Do the following using JS Mathematic Expressions
// a. Declare a variable.
let number ;
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
 document.writeln('b)“Value  after variable declaration is:',number ,'<br>')
// c. Initialize the variable with some number.
 number = 5;
// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.writeln('d) Initial value :', number ,'<br> ')
// e. Increment the variable.
 number++;
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.writeln(' f) the value of variable after increment ', number, '<br>')
// g. Add 7 to the variable.
 number = number +7;
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
 document.writeln(' h) the value of variable after addition is:',number)
// i. Decrement the variable.
number--
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
 document.writeln('j) the value of variable after decrement is:', number,'<br>')
// k. Show the remainder after dividing the variable’s value
// by 3.
reminder = number %3
document.writeln(' k) the reminder value after dividing the variable’s value by 3 is', reminder)
 
//Question No 4
document.writeln('<h1>Question No 4</h1>')
// Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
let costOfTicket = 600 ;
let costOf5ticket = 600*5;
document.writeln('the cost of buying 5 for movie is:', costOf5ticket, 'PKR')

//Question No 5
document.writeln('<h1>Question No 5</h1>')
// Write a script to display multiplication table of any
// number in your browser. E.g
let table = 4
document.writeln(table,'x','1','=',table*1,'<br>');
document.writeln(table,'x','2','=',table*2,'<br>');
document.writeln(table,'x','3','=',table*3,'<br>');
document.writeln(table,'x','4','=',table*4,'<br>');
document.writeln(table,'x','5','=',table*5,'<br>');
document.writeln(table,'x','6','=',table*6,'<br>');
document.writeln(table,'x','7','=',table*7,'<br>');
document.writeln(table,'x','8','=',table*8,'<br>');
document.writeln(table,'x','9','=',table*9,'<br>');
document.writeln(table,'x','10','=',table*10,'<br>');

//Question No 6
document.writeln('<h1>Question No 6</h1>')
// The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to
let Celsius = 25;
let Fahrenheitconverter =(Celsius * 9/5 )+32;
document.writeln( Celsius +'C'+ Fahrenheitconverter +'F' ,'<br>');
 
let Fahrenheit =70;
let Celsiusconverter = (Fahrenheit-32)*5/9;
document.writeln(Fahrenheit +'F'+ Celsiusconverter +'C');

//Question No 7
document.writeln('<h1>Question No 7</h1>')
// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
let  priceOfItem1 = 650;
let QuantityOfItem1 =3;
let priceOfItem2 =100;
let QuantityOfItem2 = 7 ;
let ShippingCharges =100 ;
let totalCost = (priceOfItem1*QuantityOfItem1) + (priceOfItem2*QuantityOfItem2) +100
document.writeln('<h3>Shopping Cart</h3>')
document.writeln(' Price of item 1 :', priceOfItem1 ,'<br>');
document.writeln(' Price of item 2 :', priceOfItem2 ,'<br>');
document.writeln('Ordered quantity of item 1:', QuantityOfItem1 ,'<br>');
document.writeln('Ordered quantity of item 2:', QuantityOfItem2 ,'<br>');
document.writeln('Shipping charges', ShippingCharges ,'<br>');
document.writeln('Total cost of your order is','<b>', totalCost ,'</b>' ,'<br>')

// Question No 8
document.writeln('<h1>Question No 8</h1>')
// Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
let totalMarks= 1000;
let obtainedMarks  = 890;
let percentage = obtainedMarks/totalMarks*100;
document.writeln('Total Marks :',totalMarks ,'<br>');
document.writeln('Obtained Marks :',obtainedMarks ,'<br>')
document.writeln('Percentage is',percentage ,'%','<br>')


//Question No 9
document.writeln('<h1>Question No 9</h1>')
// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

let Riyals= 25;
let dollars =10;
let totalCurrencyInRupees = (dollars*104.80) +(Riyals*28);
document.writeln('Total currency to Pakistani Rupees :',totalCurrencyInRupees);

//Question No 10
document.writeln('<h1>Question No 10</h1>');
// Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b.Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

let Num =40+5*10/2;
document.writeln('the result is', Num);

//Question No 11
document.writeln('<h1>Question No 11</h1>');
// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
document.writeln('<h3>age Calculator</h3>')
let currentYear =2025;
let birthYear = 2001;
let age =  currentYear -birthYear;
document.writeln('Your Age is ',age);


//Question No 12
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.writeln('<h1>Question No 12</h1>');
document.writeln('<h3>The Geometrizer</h3>')
let radius = 20;
let pi =3.14;
document.writeln('Radius of a circle: ' , radius, '<br>')
let circumference = 2*pi*radius;
document.writeln('The circumference is: ',circumference, '<br>');
let area =  pi*radius*radius;
document.writeln('The area is: ', area);

//Question No 13
document.writeln('<h1>Question No 13</h1>');
// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.

let  favoriteSnack = 'chocolate chip';
let  currentAge = 15;
let   maximumAge = 65;
let estimatedAmount = 3 ;
let  totalSnack = (maximumAge - currentAge)*estimatedAmount
document.writeln('favorite snack ',favoriteSnack,' <br>');
document.writeln('current age ', currentAge ,' <br>');
document.writeln(' maximum age  ', maximumAge ,'<br>');
document.writeln(' estimated amount ',estimatedAmount ,'<br>');
document.writeln('you will need ' ,totalSnack ,'<br>');

