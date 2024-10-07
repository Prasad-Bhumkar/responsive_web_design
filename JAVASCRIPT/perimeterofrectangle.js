function perimeter() 
{
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
    var perimeter = 2 * (length + width);
    document.write("Perimeter of rectangle is: " + perimeter);
}