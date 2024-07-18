// script.js

document.addEventListener("DOMContentLoaded", function() {
    const monthYear = document.getElementById("month-year");
    const daysContainer = document.getElementById("days");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentDate = new Date();

    function renderCalendar(date) {
        const month = date.getMonth();
        const year = date.getFullYear();

        monthYear.innerText = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

        daysContainer.innerHTML = '';

        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDiv = document.createElement('div');
            daysContainer.appendChild(emptyDiv);
        }

        for (let i = 1; i <= lastDateOfMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.innerText = i;
            daysContainer.appendChild(dayDiv);
        }
    }

    prevButton.addEventListener("click", function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextButton.addEventListener("click", function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});
