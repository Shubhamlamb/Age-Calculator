const ageValue = document.getElementById("ageValue"),
    calculateAge = document.getElementById("calculateAge"),
    currentAge = document.getElementById("currentAge"),
    DOB = document.getElementById("DOB");

const InYears = document.getElementById("InYears"),
    InMonths = document.getElementById("InMonths"),
    InWeeks = document.getElementById("InWeeks"),
    InDays = document.getElementById("InDays"),
    InHours = document.getElementById("InHours"),
    InMinutes = document.getElementById("InMinutes"),
    InSeconds = document.getElementById("InSeconds"),
    nextBirthDaysLeft = document.getElementById("nextBirthDaysLeft");



const today = new Date(),
    seconds = 1000,
    minutes = 60,
    hours = 24,
    week = 7;

let maxDate = today.toISOString().substring(0, 10);
ageValue.setAttribute("max", maxDate);

calculateAge.addEventListener("click", function (e) {
    if (ageValue.value === maxDate) {
        alert("Invalid Date of Birth");
    }

    let oneDay = seconds * minutes * minutes * hours;
    let oneHour = seconds * minutes * minutes;
    let oneMinutes = seconds * minutes;

    if (ageValue.value !== "") {
        let birthDate = new Date(ageValue.value);

        let totalYears = today.getFullYear() - birthDate.getFullYear();
        let totalMonths = today.getMonth() - 
        birthDate.getMonth() + 
        (today.getFullYear() - birthDate.getFullYear()) * 12;

        let monthTotal = Math.abs(birthDate.getMonth() - today.getMonth());
        let dayTotal = Math.abs(today.getDate() - birthDate.getDate());


        currentAge.innerText = `${totalYears} Years ${monthTotal} Months ${dayTotal} Days`;
        DOB.innerText = `${birthDate.toLocaleDateString("default", {
            weekday: "long",
        })} ${birthDate.toLocaleDateString("default", {
            month: "long",
        })} ${birthDate.getDate()}, ${birthDate.getFullYear()}`;

        let totalWeeks = Math.round(
            Math.abs(today.getTime() - birthDate.getTime()) / (oneDay * week)
        );

        let totalDays = Math.round(
            Math.abs(today.getTime() - birthDate.getTime()) / oneDay
        );

        let totalHours = Math.round(
            Math.abs(today.getTime() - birthDate.getTime()) / oneHour
        );

        let totalMinutes = Math.round(
            Math.abs(today.getTime() - birthDate.getTime()) / oneMinutes
        );

        let totalSeconds = Math.round(
            Math.abs(today.getTime() - birthDate.getTime()) / seconds
        );

        InYears.innerText = totalYears;
        InMonths.innerText = totalMonths;
        InWeeks.innerText = totalWeeks;
        InDays.innerText = totalDays;
        
        // From Current Time
        InHours.innerText = totalHours;
        InMinutes.innerText = totalMinutes;
        InSeconds.innerText = totalSeconds;

        let birthDayThisYear=new Date(
            `${today.getFullYear()}-${
                birthDate.getMonth() +1
            }-${birthDate.getDate()}`
        );
        if(today>birthDayThisYear){
            birthDayThisYear.setFullYear(today.getFullYear() + 1); 
        }
        let totalDaysLeft=Math.round(
            Math.abs(birthDayThisYear.getTime() -today.getTime()) / oneDay
        );
        nextBirthDaysLeft.innerText = totalDaysLeft;
    }
});