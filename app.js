const dateElement = document.getElementById('dob');

function getAge(){
    let dob = dateElement.value;
    let dateToday = new Date();
    const birthYearArr= dob.split("-");
    const birthYear = Number(birthYearArr[0]);
    const birthMonth = Number(birthYearArr[1]);
    const birthDate = Number(birthYearArr[2]);
    let givenYear = dateToday.getFullYear();
    let givenMonth = dateToday.getMonth()+1;
    let givenDate = dateToday.getDate();

    if(birthYear>givenYear||(birthYear==givenYear&&birthMonth==givenMonth&&birthDate>givenDate)) {
        alert("Please select date lower than today!");
    }
    else {
        let resultYear = (birthYear==givenYear?givenYear-birthYear:givenYear-birthYear-1);
        let resultMonth = birthMonth>givenMonth?(12-birthMonth+(birthYear-givenYear==1?1:0)):(birthMonth==givenMonth?0:birthMonth);
        let resultDays = birthDate>givenDate?(30-birthDate+givenDate):(givenDate-birthDate);
        displayAge(resultYear, resultMonth, resultDays);
    }
}

function calcAge(){ 
}

function displayAge(resultYear, resultMonth, resultDays){
    document.getElementById("years").innerText = resultYear;
    document.getElementById("months").innerText = resultMonth;
    document.getElementById("days").innerText = resultDays;

}

dateElement.addEventListener('selectionchange', getAge());

