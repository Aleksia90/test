document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".contact-form").forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let formData = new FormData(this);
            
            // Показываем модальное окно перед отправкой
            modal.style.display = "block";
            modalMessage.innerText = "Sending...";

            fetch(this.action, {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" }
            }).then(response => {
                if (response.ok) {
                    modalMessage.innerText = "✅ Your message has been sent successfully!";
                    this.reset(); // Очищаем форму
                } else {
                    modalMessage.innerText = "❌ Error sending message. Please try again.";
                }
            }).catch(error => {
                modalMessage.innerText = "⚠️ Network error. Please check your connection.";
            });
        });
    });

    // Закрытие модального окна
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});




function scrollToSection() {
    document.querySelector(".custom-body").scrollIntoView({ behavior: "smooth" });
}

// Добавляем обработчик события на обе кнопки
document.getElementById("scrollToForm1").addEventListener("click", scrollToSection);
document.getElementById("scrollToForm2").addEventListener("click", scrollToSection);





