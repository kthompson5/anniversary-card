document.getElementById("anniversaryForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const checkbox = document.getElementById("checkbox");
    if (checkbox.checked) {
        showPopup();
    }
});

function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
