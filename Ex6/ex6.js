var sexo = "";

function BuscarDados()
{
    var select = document.getElementById('sexo');
    var option = select.options[select.selectedIndex];
    sexo = option.value;
}

function peso()
{
    h = parseFloat(document.getElementById("h").value);
    if (sexo == "M")
    {
        document.getElementById("res").innerHTML = ((72.7*h) - 58).toFixed(2) + "Kg"
    }
    if (sexo == "F")
    {
        document.getElementById("res").innerHTML = ((62.1*h) - 44.7).toFixed(2) + "Kg"
    }
}