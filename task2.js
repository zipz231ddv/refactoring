document.getElementById("emailForm").addEventListener("change", (event) => {
    const checkboxes = document.querySelectorAll("#emailForm input[type='checkbox']");
    const selectedEmailsDiv = document.getElementById("selectedEmails");

    const selectedEmails = Array
        .from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    selectedEmailsDiv.textContent = selectedEmails.join(", ");
});