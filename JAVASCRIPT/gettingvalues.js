function getValues() {
    // Get value by ID
    var firstName = document.getElementById('firstName').value;

    // Get value by class name
    var inputsByClass = document.getElementsByClassName('inputField');
    var lastName = inputsByClass[1].value; // Get second input (Last Name)

    // Get value by name
    var inputsByName = document.getElementsByName('email');
    var email = inputsByName[0].value; // Get first input (Email)

    // Get value by tag name
    var inputsByTag = document.getElementsByTagName('input');
    var age = inputsByTag[3].value; // Get fourth input (Age)

    // Display values using document.write
    document.write('<h3>Form Values:</h3>');
    document.write('First Name: ' + firstName + '<br>');
    document.write('Last Name: ' + lastName + '<br>');
    document.write('Email: ' + email + '<br>');
    document.write('Age: ' + age + '<br>');
}
