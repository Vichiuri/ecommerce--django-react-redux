
var pageX =  document.body.clientWidth;
var pageY = document.body.clientHeight;
var mouseY=0;
var mouseX=0;

document.onmousemove = (e) => {
    event = e || window.event;
    mouseY = event.pageY;
    yAxis = (pageY/2-mouseY)/pageY*300; 
    //horizontalAxis
    mouseX = event.pageX / -pageX;
    xAxis = -mouseX * 100 - 100;

    document.getElementById('box__ghost-eyes').style.transform ='translate('+ xAxis +'%,-'+ yAxis +'%)' 
} 
