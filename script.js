document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("pickupForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const address = document.getElementById("address").value;
            const wasteType = document.getElementById("waste-type").value;

            if (name && address && wasteType) {
                document.getElementById("formMessage").textContent = `Thank you, ${name}! We will arrange a pickup at ${address} for ${wasteType}.`;
                form.reset();
            } else {
                document.getElementById("formMessage").textContent = "Please fill out all fields!";
            }
        });
    }
});
