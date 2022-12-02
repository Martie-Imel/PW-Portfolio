function calcf()
{
    var v1 = parseInt(document.getElementById("v1").value);
    var q = v1 * 1.8 + 32;
    var res = document.getElementById("res");
    res.innerHTML = q.toFixed(2) + "°F ";
}

function calcc()
{
    var v1 = parseInt(document.getElementById("v1").value);
    var q = (v1 - 32) / 1.8;
    var res = document.getElementById("res");
    res.innerHTML = q.toFixed(2) + "°C ";
}