var now = new Date();
var changeDate = document.getElementById('date');

changeDate.innerText = formatDate(now);

function formatDate(date) {
  
  var year = date.getFullYear();
  
  var month = date.getMonth();
  month = month + 1;
  
  if(month < 10) {
    month = "0" + month;
  }
  
  var day = date.getDate();
  
  if(day < 10) {
    day = "0" + day;
  }
  
  return month + "/" + day + "/" + year;
  
}





