function area() 
        {
            var length = parseFloat(document.getElementById("length").value);
            var width = parseFloat(document.getElementById("width").value);
            var area = length * width;
            document.write("Area of rectangle is: " + area);
        }