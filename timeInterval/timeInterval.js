function main() {
    refreshIntervalId = setInterval("run()", 1000);
    return;
}

function run() {
    setStatus("Start");
    //setrefreshIntervalId1 = setInterval("printTime()", 2000);
    setTimeout("printTime()", 3000);
    var now = new Date();
    var dateStr = now.toTimeString();
    tmpstr+= "1000 x:" + x + " y: " + y + " Time: " + dateStr + "<br />";
    displayResult(tmpstr);
    x += 1;
    return;
}

function printTime() {
    var now = new Date();
    var dateStr = now.toTimeString();
    tmpstr += "3000 x:" + x + " y: " + y + " Time: " + dateStr + "<br />";
    displayResult(tmpstr);
    y += 1;
    return;
}

function displayResult(tmpstr) {
    document.getElementById("result").innerHTML = tmpstr;
    return;
}

function stop() {
    setStatus("Pause");
    clearInterval(refreshIntervalId);
    return;
}

function empty() {
    setStatus("Clear");
    document.getElementById("result").innerHTML = "";
    tmpstr = "";
    return;
}

function setStatus(s) {
    document.getElementById("status").innerHTML = s;
    return;
}
