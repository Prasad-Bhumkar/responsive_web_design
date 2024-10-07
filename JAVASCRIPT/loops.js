function demonstrateLoops() {
    document.body.innerHTML += '<h2>Loop Results:</h2>'; // Adding a header for clarity

    // For loop
    document.write('<h3>For Loop:</h3>');
    for (let i = 0; i < 5; i++) {
        document.write(`Iteration ${i}<br>`);
    }

    // While loop
    document.write('<h3>While Loop:</h3>');
    let j = 0;
    while (j < 5) {
        document.write(`Iteration ${j}<br>`);
        j++;
    }

    // Do-While loop
    document.write('<h3>Do-While Loop:</h3>');
    let k = 0;
    do {
        document.write(`Iteration ${k}<br>`);
        k++;
    } while (k < 5);

    // ForEach loop (for arrays)
    const array = ['Apple', 'Banana', 'Cherry'];
    document.write('<h3>For Each Loop:</h3>');
    array.forEach((item, index) => {
        document.write(`Item ${index}: ${item}<br>`);
    });
}
