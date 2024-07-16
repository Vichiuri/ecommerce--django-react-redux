export default function formatInputDate(mdate) {
  var date = new Date(mdate);

  var day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  var monthIndex = date.getMonth() + 1;
  var month = monthIndex < 10 ? `0${monthIndex}` : monthIndex;
  var year = date.getFullYear();

  return year + "-" + month + "-" + day;
}
