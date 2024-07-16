export function getDateName(mDate) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let date = new Date(mDate);
  return days[date.getDay()];
}

export function getMonthName(mDate) {
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date = new Date(mDate);
  return monthNames[date.getMonth()];
}

export function getMonthIndexName(index) {
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return monthNames[index - 1];
}

export function getSlashedDate(mDate) {
  let date = new Date(mDate);
  var day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  var month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  var year = date.getFullYear();

  return day + "/" + month + "/" + year;
}
