export default function formatDate(mdate) {
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

  var day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return monthNames[monthIndex] + "," + " " + day + " " + year;
}
