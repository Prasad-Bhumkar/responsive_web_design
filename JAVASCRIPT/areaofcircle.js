function area()
{
    var r = parseFloat(document.getElementById("radius").value);

    var area=3.14*r*r;
    document.write("Area of circle is : "+area);
}