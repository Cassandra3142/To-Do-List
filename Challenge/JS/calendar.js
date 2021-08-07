const calendar = document.querySelector('#calendar');

calendar.innerText = "";

function getCalendar() {
    const currentDate = new Date();
    let week = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const date = String(currentDate.getDate()).padStart(2, "0");
    const day = currentDate.getDay();

    calendar.innerText = `${year} - ${month} - ${date} (${week[day]})`;
}

getCalendar();