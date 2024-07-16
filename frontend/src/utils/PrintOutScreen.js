export default function (elementId) {
  var newWindow = window.open(
    "",
    "",
    "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
  );

  newWindow.document.write(document.getElementById(elementId).innerHTML);
  newWindow.document.close();
  newWindow.focus();
  newWindow.print();
  newWindow.close();
}
