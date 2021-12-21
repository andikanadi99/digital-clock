function clock(){
  //Initialiaze date variable
  const d = new Date();
  
  //Variables for hours, minutes and seconds
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  //Checks if minute or second needs a zero added in the tenth place.
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  
  //Display clock time
  document.getElementById('clock').innerHTML =  hours + ":" + minutes + ":" + seconds;

  //Getting the current date
  let day = d.getDate();
  let month = d.getMonth();
  let year = d.getUTCFullYear();

  //Display date
  document.getElementById('date').innerHTML =  month + "/" + day + "/" + year;
}
//Clock to keep running
setInterval(clock, 1000);

function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}