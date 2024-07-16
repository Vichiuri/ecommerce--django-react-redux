export default function formatDay(mdate) {
  var date = new Date(mdate);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var day = date.getDay();

  return days[day];
}
