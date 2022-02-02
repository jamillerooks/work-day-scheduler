$(document).ready(() => {
  //Enter today's date in the header
  var currentDayEl = $('#currentDay');
  const m = moment(); 
  
  function displayDate() {
  var presentDay = moment().format('dddd, MMMM Do');
  currentDayEl.text(presentDay);
  }
  setInterval(displayDate, 1000);
  
  //Elements from DOM
  var currentHour = parseInt(moment().format("HH"));
  var descriptionEl = $('.description');
  
  
  //EvenHandler for saving appointments to the calendar
  $('.saveBtn').on('click', saveItem);
  
   
  //Save data to local storage
  function saveItem (event) {
    event.preventDefault();
    var description = ($(this).prev().val());
    var hour =   ($(this).prev().prev().text());
    if (description !== "")
    localStorage.setItem(hour, description);
       
    };
  
  //Retrieve data from local storage using DOM id and storage key
  $("#9").val(localStorage.getItem("9:00am"));
  $("#10").val(localStorage.getItem("10:00am"));
  $("#11").val(localStorage.getItem("11:00am"));
  $("#12").val(localStorage.getItem("12:00pm"));
  $("#13").val(localStorage.getItem("13:00pm"));
  $("#14").val(localStorage.getItem("14:00pm"));
  $("#15").val(localStorage.getItem("15:00pm"));
  $("#16").val(localStorage.getItem("16:00pm"));
  $("#17").val(localStorage.getItem("17:00pm"));

    
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
  });
    