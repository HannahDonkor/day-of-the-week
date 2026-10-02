let date = new Date();

let dayNumber = date.getDay()

let theDayIs;

let quote;

switch (dayNumber){
    case 0: 
    theDayIs = "Sunday";
    quote = "Time to chillax"
    break;

    case 1: 
    theDayIs = "Monday";
    quote = "Time for work"
    break;

    case 2: 
    theDayIs = "Tuesday";
    quote = "Roses are red, voilets are blue"
    break;

    case 3: 
    theDayIs = "Wednesday";
    quote = "Wednesday is the third day of work"
    break;

    case 4: 
    theDayIs = "Thursday";
    quote = "Thursday is for wrapping up"
    break;

    case 5: 
    theDayIs = "Friday";
    quote = "Thank God it's friday"
    break;

    case 6: 
    theDayIs = "Saturday";
    quote = "Pull the brakes and have fun"
    break;
}

let spanOfWeekday = document.getElementById("weekday");
spanOfWeekday.innerHTML = `${theDayIs}`;

let spanOfQuote = document.getElementById("quote");
spanOfQuote.innerHTML = `${quote};`