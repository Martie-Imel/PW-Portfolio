var compra = [];
var i = 0;
var m = 0;

function produto() 
{
    if(compra.length <= 4)
    {
        var n = document.getElementById("n1").value;
        var v = parseFloat(document.getElementById("v1").value);
        var q = parseFloat(document.getElementById("q1").value);
        var r = v*q;
        compra[i] = n;
        compra[i+1] = r;
        i++;
        i++;
        document.getElementById("n1").value = "";
        document.getElementById("v1").value = "";
        document.getElementById("q1").value = "";
        document.getElementById("n1").focus();
    }
    else
    {
        document.querySelector("#btna").disabled = true;
        document.querySelector("#btnc").disabled = false;
        document.querySelector("#n1").disabled = true;
        document.querySelector("#v1").disabled = true;
        document.querySelector("#q1").disabled = true;
        document.getElementById("pro").innerHTML += compra[0] + ": R$";
        document.getElementById("pro").innerHTML += compra[1].toFixed(2) + "<br>";
        document.getElementById("pro").innerHTML += compra[2] + ": R$";
        document.getElementById("pro").innerHTML += compra[3].toFixed(2) + "<br>";
        document.getElementById("pro").innerHTML += compra[4] + ": R$";
        document.getElementById("pro").innerHTML += compra[5].toFixed(2) + "<br>";
    }
}

function comprar()
{
    for(i = 1; i <= compra.length; i += 2)
    {
        m += compra[i];
    }
    document.getElementById("res").innerHTML += "R$" + m.toFixed(2);
    document.querySelector("#btnc").disabled = true;
    document.querySelector("#btnr").disabled = false;    
}

function reiniciar()
{
    location.reload();
}