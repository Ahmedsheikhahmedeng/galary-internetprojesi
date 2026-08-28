const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");
const errorBox = document.getElementById("error");
const successBox = document.getElementById("success-msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nameInput.value.trim().length < 3) {
        errorBox.textContent = "Ad en az 3 karakter olmalı.";
        successBox.textContent = "";
        return;
    }

    if (phoneInput.value.trim().length < 10) {
        errorBox.textContent = "Geçerli bir telefon numarası yaz.";
        successBox.textContent = "";
        return;
    }

    if (messageInput.value.trim().length < 10) {
        errorBox.textContent = "Mesaj biraz daha uzun olmalı.";
        successBox.textContent = "";
        return;
    }

    errorBox.textContent = "";
    successBox.textContent = "Mesajınız alındı. Teşekkürler.";

    form.reset();

    setTimeout(() => {
        successBox.textContent = "";
    }, 4000);
});