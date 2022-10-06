var x ;

function myinp()
{
    x=document.getElementById("inp").value;
}


function myfun()
{
    x = parseInt(x)+1;
document.getElementById("i1").innerHTML = x;
if(x%5==0)
{
    document.querySelector("#i1").style.color = "red"; 
}
else
{
document.querySelector("#i1").style.color = "green";
}
}