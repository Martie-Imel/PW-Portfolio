function quilom ()
{
    var km = parseFloat(document.getElementById("qm").value);
    var l = parseFloat(document.getElementById("l").value);
    var v = km/8*l;
    document.getElementById("preço").innerHTML = "R$"+v.toFixed(2);
}