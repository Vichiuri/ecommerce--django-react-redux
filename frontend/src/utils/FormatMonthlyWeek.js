export default function (mdate) {
  var date = new Date(mdate);
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var monthIndex = date.getMonth();
  var firstWeekday =
    new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
  if (firstWeekday < 0) firstWeekday = 6;
  var offsetDate = date.getDate() + firstWeekday - 1;
  let week = Math.floor(offsetDate / 7);
  return week + " week of " + monthNames[monthIndex];
}
