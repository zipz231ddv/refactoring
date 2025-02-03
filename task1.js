document.getElementById("submitButton").addEventListener("click", () => {
    const checkboxes = document.querySelectorAll("#checkboxForm input[type='checkbox']:checked");
    const selectedValues = Array.from(checkboxes).map(checkbox => checkbox.value);
    const outputDiv = document.getElementById("output");

    outputDiv.textContent = "";

    if (selectedValues.length > 0) {
        outputDiv.textContent = selectedValues.join(", ");
    } else {
        outputDiv.textContent = "обери";
    }
});