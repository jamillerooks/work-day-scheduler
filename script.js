var currentDayEl = $('#currentDay');
const m = moment(); 


// handle displaying the time
function displayDate() {
    var presentDay = moment().format('dddd, MMMM Do');
    currentDayEl.text(presentDay);
  }
  
  
  setInterval(displayDate, 1000);

 