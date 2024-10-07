function circumference() 
        {
            var r = parseFloat(document.getElementById("radius").value);
            var circumference = 2 * 3.14 * r;
            document.write("Circumference of circle is: " + circumference);
        }
