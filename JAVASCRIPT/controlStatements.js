function demonstrateControlStatements() {
    document.body.innerHTML += '<h2>Control Statements Results:</h2>';

    // If-Else Statement
    const number = 3; // You can change this number to test different conditions
    document.write('<h3>If-Else Statement:</h3>');
    if (number > 0) {
        document.write(`${number} is positive.<br>`);
    } else if (number < 0) {
        document.write(`${number} is negative.<br>`);
    } else {
        document.write(`${number} is zero.<br>`);
    }

    // Switch Statement
    const fruit = 'Banana'; // You can change this fruit to test different cases
    document.write('<h3>Switch Statement:</h3>');
    switch (fruit) {
        case 'Apple':
            document.write('You selected an Apple.<br>');
            break;
        case 'Banana':
            document.write('You selected a Banana.<br>');
            break;
        case 'Cherry':
            document.write('You selected a Cherry.<br>');
            break;
        default:
            document.write('Unknown fruit.<br>');
    }
}
