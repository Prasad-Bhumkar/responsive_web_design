function cube() 
{
    var number = parseFloat(document.getElementById("number").value);
    var cubed = number * number * number;
    document.write("Cube of the number is: " + cubed);
}