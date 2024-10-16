function demo() {
    const cardNumberInput = document.getElementById("card-number");
    const cardNumberValue = document.getElementById("card-number-value");
  
    // Check if the input is empty and add placeholders if needed
    if (cardNumberInput.value === "") {
      cardNumberValue.value = "#### #### #### ####";
    } else {
      // Remove placeholders one by one as digits are entered
      let updatedValue = "";
      for (let i = 0; i < cardNumberInput.value.length; i++) {
        const char = cardNumberInput.value[i];
        if (/\d/.test(char)) {
          updatedValue += char;
        } else {
          updatedValue += cardNumberValue.value[i] || "#";
        }
      }
  
      // Format the card number with spaces every 4 digits
      updatedValue = updatedValue.replace(/\d{4}(?=.)/g, "$& ");
  
      // Remove the last character if backspace is pressed
      if (event.key === "Backspace") {
        updatedValue = updatedValue.slice(0, -1);
      }
  
      // Add remaining placeholders if necessary
      const missingPlaceholders = "#### #### #### ####".slice(updatedValue.length);
      updatedValue += missingPlaceholders;
  
      cardNumberValue.value = updatedValue;
    }
  }

 


