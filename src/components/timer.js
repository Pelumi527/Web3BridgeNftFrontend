

function diff_miliseconds(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime());
  return Math.abs(Math.round(diff));

 }


dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,3);
console.log(diff_hours(dt1, dt2));


// dt1 = new Date("October 13, 2014 08:11:00");
// dt2 = new Date("October 14, 2014 11:13:00");
