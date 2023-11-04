positive integer
var random = Math.round(3.47)
document.write(random);

Math.Floor

var random = Math.floor(3.9)
document.write(random);

Math.ceil

var random = Math.ceil(2.5)
document.write(random);

Negative floating number

var random = Math.round(-3.47)
document.write(random);

Math.Floor

var random = Math.floor(-3.9)
document.write(random);

Math.ceil

var random = Math.ceil(-2.5)
document.write(random);

Random dice 

var random =Math.ceil(Math.random() * 6 )
document.write("random dice value:" + random)

Random coin head tail 

var coin =Math.ceil(Math.random()*2)

if(coin === 1){
    document.write(coin, "<br>")
    document.write("random coin value tails")
}else{
    document.write(coin, "<br>")
    document.write("random coin value head")
}

shows a random number between 1 and 100

var random =Math.ceil(Math.random()*100)
document.write("random number between 1 and 100:"  + " " + random)

Secret number

var Secretnum = 2
 var userInput = Number(prompt("enter a number between 1 to 10"))
 if(userInput === Secretnum){
    alert ("congratulate the user")
 }else{
    alert("sorry wrong number try again later")
 }

Calculate user age

var userinput = Number(prompt("Enter your age"))
var date = new Date()
var year =date.getFullYear() 


birthyear = year - userinput
document.write( "Your age is"  + userinput + "<br>")
document.write("your birth year is" + birthyear)

Month days

var date = new Date() 
var getdate = date.getDate()
if(getdate <=15){
    alert("First Fifteen day of the month")
}else{
    alert ("Last date of the month") 
}

User about his age

var userInput = Number(prompt("Enter your weight in kilogram"))



