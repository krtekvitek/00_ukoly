// utils pro ukol 01
const saveScreenshot = (date, name) => {
    browser.saveScreenshot(date + name)
}

//utils pro ukol 03
const getCorrectFormat = () => {
    let date = new Date();
    let year = date.getFullYear(); //vrati 2020
    let month = date.getMonth() + 1; // leden je 0, unor 1, atd., tak proto pridavame +1
    let day = date.getDate();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    
    // dopln do promenne 'format' vsechny promenne, ktere jsou definovane ->  year, month, day, hours, minutes, seconds 
    // muze to treba vypadat 2020-11-03_10-20-55 tzn. tvar YYYY-MM-DD_HH-MM-SS
    let format = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
    return format;
}

// utils pro ukol 04
const helpMessage = () => {
    let pomocnaHlaska = browser.$('#passwordHelpBlock');
    return pomocnaHlaska;
}
    

module.exports = { saveScreenshot, getCorrectFormat, helpMessage }