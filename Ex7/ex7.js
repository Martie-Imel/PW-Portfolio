var lista = [];
var maio = -999999999999999999999;
var meno = 999999999999999999999;
function inserir()
{
    let valor = parseFloat(document.getElementById('valor').value);
    lista.push(valor);
    document.getElementById('valor').value = "";
    document.getElementById('valor').focus();
}
function exibir()
{
    var res = document.getElementById('res');
    res.innerHTML = "";
    for (let  i = 0; i < lista.length; i++) 
    {
        res.innerHTML += lista[i] + "|";
    }
}
function maior()
{
    for(var i = 0; i < lista.length; i++)
    {
        if(lista[i] > maio){
            maio = lista[i];
        }
    }
    document.getElementById('res').innerHTML = maio;
}
function menor()
{
    for(var i = 0; i < lista.length; i++)
    {
        if(lista[i] < meno){
            meno = lista[i];
        }
    }
    document.getElementById('res').innerHTML = meno;
}
