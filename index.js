var inputVal;
function handle()
{
    console.log(inputVal);
    inputVal = document.querySelector("#inputId").value;

}
function func()
{
    
     inputVal = document.querySelector("#inputId").value;
  
}

function sum()
{
    inputVal = parseInt(inputVal)+1;
    value();
}
function value()
{
    document.getElementById("val").innerHTML = inputVal;
    if(inputVal%5 == 0)
    {
    document.querySelector("#val").style.backgroundColor = "red";
    }
    else{
        document.querySelector("#val").style.backgroundColor = "yellow";
    }
}