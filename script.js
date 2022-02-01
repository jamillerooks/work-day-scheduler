$(document).ready(() => {

});
  //Enter today's date in the header
  var currentDayEl = $('#currentDay');
    const m = moment(); 

  function displayDate() {
    var presentDay = moment().format('dddd, MMMM Do');
    currentDayEl.text(presentDay);
}
setInterval(displayDate, 1000);

//Elements from DOM
  var currentTime = moment();
  var currentHour = parseInt(moment().format("HH"));
  var formEl = $('.calendar-form');
  var hourEl = $('.hour');
  var descriptionEl = $('.description');
  var saveBtn = $('.saveBtn');

//Change color based on the time of the appointment
descriptionEl.each(function(index){
  var rowTime = $(this).attr("id")
  if(parseInt(rowTime) < currentHour) {
    $(this).attr("class", "description col-8 past")
  }else if(parseInt(rowTime) == currentHour) {
    $(this).attr("class", "description col-8 present")
  }else {
    $(this).attr("class", "description col-8 future")
  }
})

  //Local Storage Section
function retreiveItem (event) {
  event.preventDefault();
  var description = ($(this).prev().val());
  var hour =   ($(this).prev().prev().text());
  if (description !== "")
  localStorage.getItem(hour, description);
  hourEl.textContent = hour;
  documentEl.textContent = description;
   
  };

//Save appointment in the local storage
$('.saveBtn').on('click', saveItem);

 
  function saveItem (event) {
    event.preventDefault();
    var description = ($(this).prev().val());
    var hour =   ($(this).prev().prev().text());
    if (description !== "")
    localStorage.setItem(hour, description);
    
     
    };


    