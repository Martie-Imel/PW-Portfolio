function metro()
{
    var l = parseFloat(document.getElementById("l").value);
    var c = parseFloat(document.getElementById("c").value);
    var m = c*l;
    var p = m*36;
    document.getElementById("preço").innerHTML = "R$"+p.toFixed(2);

}