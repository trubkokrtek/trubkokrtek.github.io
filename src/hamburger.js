


document.addEventListener("click", (e) => {
    if (e.target.closest(".chatbot--icon")) {
        const chatbot = document.querySelector(".wrapper");
        const chatbotswitch = document.querySelector(".chatbot--icon");
        if (chatbot) {
            chatbot.classList.toggle("active");
            chatbotswitch.classList.toggle("active");
        }
        var inputfield = document.querySelector(".user-input");
        if (inputfield.value == null) {}
        else{
            var inputvalue = inputfield.value;
        }
    }
    if (e.target.closest(".chatbot__header--close")) {
        const chatbot = document.querySelector(".wrapper");
        const chatbotswitch = document.querySelector(".chatbot--icon");
        if (chatbot) {
            chatbot.classList.toggle("active");
            chatbotswitch.classList.toggle("active");
        }
    }
    if (e.target.closest(".user__input--btn")) {
        try {
            var textfield = document.querySelector(".user__input--field");
            var inputvalue = textfield.value;
            console.log(inputvalue);
            textfield.value = "";
            alert(inputvalue);
            
            const node = document.querySelector(".user").firstChild;
            const clone = node.cloneNode(true);
            clone.value = inputvalue;
            console.log(clone);

            const list = document.querySelector(".user");
            list.appendChild(clone);
        }
        catch (error) {
            console.error(error);
        }
    }
});