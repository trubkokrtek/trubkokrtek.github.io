document.addEventListener("click", (e) => {
    if (e.target.closest(".chatbot--icon")) {
        const chatbot = document.querySelector(".chatbot");
        const chatbotswitch = document.querySelector(".chatbot--icon");
        if (chatbot) {
            chatbot.classList.toggle("active");
            chatbotswitch.classList.toggle("active");
        }
    }
    if (e.target.closest(".chatbot--close")) {
        const chatbot = document.querySelector(".chatbot");
        const chatbotswitch = document.querySelector(".chatbot--icon");
        if (chatbot) {
            chatbot.classList.toggle("active");
            chatbotswitch.classList.toggle("active");
        }
    }
});