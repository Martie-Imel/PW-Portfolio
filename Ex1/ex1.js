function exibir()
{
    let v1 = parseInt(document.getElementById("v1").value);
    let res = document.getElementById("res");
    res.innerHTML = "";
    if(v1 <= 5000)
    {
        for (let i = 0; i <= v1; i++)
        {
        
            if(i%2 == 0)
            {
                res.innerHTML += i + ", ";
            }
        }
    }
    else
    {
        window.alert("Por favor digite um número válido");
    }
}