const links = {
    "parkování": "https://www.parking.liberec.cz//",
    "parkoviště": "https://www.parking.liberec.cz//",
    "ztráty": "https://www.liberec.cz/ztraty-nalezy/",
    "nálezy": "https://www.liberec.cz/ztraty-nalezy/",
    "uzavírky": "https://www.liberec.cz/uzavirky/",
    "aktivity": "https://www.kudyznudy.cz/kam-pojedete/liberecky-kraj/jizerske-hory/liberec",
    "aktuality": "https://www.liberec.cz/cz/obcan/",
    "dokumenty": "./docs/index.html",
    "dokument": "./docs/index.html",
    "doba": "https://www.liberec.cz/uredni-doba-magistratu/",
    "deska": "https://www.liberec.cz/deska/",
    "kalendář": "https://www.visitliberec.eu/kalendar-akci/",
    "ještěd": "https://www.jested.cz/",
    "doklad": "https://www.liberec.cz/doklady",
    "opravy": "https://www.liberec.cz/uzavirky/",
    "dpmlj": "https://www.dpmlj.cz/",
    "doprava": "https://www.dpmlj.cz/",
    "lyže": "https://www.skijested.cz/",
    "zoo": "https://www.zooliberec.cz/",
    "počasí": "https://www.foreca.cz/%C4%8Cesk%C3%A1-republika/Libereck%C3%BD-kraj/Liberec",
    "zprávy": "https://liberecka.drbna.cz/",
    "kraj": "https://www.kraj-lbc.cz/",
    "fotbal": "https://www.fcslovanliberec.cz/",
    "hokej": "https://www.hcbilitygri.cz/",
    "mapa": "https://mapy.cz/zakladni?q=liberec&source=muni&id=1818&ds=2&x=15.0499264&y=50.7651803&z=12",
    "areály": "https://www.sportparkliberec.cz/",
}

function chatbot() {
    try {
        var textfield = document.querySelector(".user__input--field");
        var inputvalue = textfield.value;
        console.log(inputvalue);
        textfield.value = "";
        //alert(inputvalue);
        if (inputvalue == "") {return;}
        const para = document.createElement("p");
        para.textContent = inputvalue;
        para.classList.add("user__text");
        para.value = inputvalue;
        const clone = para.cloneNode(true);
        const list = document.querySelector(".user");
        list.appendChild(para);
        
        const defaultText = document.querySelectorAll(".def");
        for (var text of defaultText) {
            text.remove();
        }

        const bot = document.querySelector(".bot");
        var inputlist = inputvalue.split(" ");
        for(var string of inputlist){
            if (string.toLowerCase() == "ahoj" || string.toLowerCase() == "zdar" || string.toLowerCase() == "čau") {
                const para = document.createElement("p");
                para.textContent = "Ahoj, jak ti mohu pomoci?";
                para.classList.add("bot__text");
                bot.appendChild(para);
            }
            else if( string.toLowerCase() == "kuk") {
                const para = document.createElement("p");
                para.textContent = "Kuk";
                para.classList.add("bot__text");
                bot.appendChild(para);
            }
            else if (string.toLowerCase() == "sport") {
                var link = document.createElement("a");
                var span = document.createElement("span");
                span.classList.add("bot--link");
                span.textContent = "fotbal";
                link.href = links["fotbal"];
                link.id = "fotbal";
                link.target = "_blank";
                link.textContent = "Pokud hledáš sportovní informace, zde klikni pro ";
                link.appendChild(span);
                link.classList.add("bot__text");

                var link = document.createElement("a");
                var span = document.createElement("span");
                span.classList.add("bot--link");
                span.textContent = "hokej";
                link.href = links["hokej"];
                link.id = "hokej";
                link.target = "_blank";
                link.textContent = "Zde klikni pro ";
                link.appendChild(span);
                link.classList.add("bot__text");
                
                var link = document.createElement("a");
                var span = document.createElement("span");
                span.classList.add("bot--link");
                span.textContent = "sportovní areál";
                link.href = links["areály"];
                link.id = "areály";
                link.target = "_blank";
                link.textContent = "Zde klikni pro ";
                link.appendChild(span);
                link.classList.add("bot__text");

            }
            else if (links[string.toLowerCase()]) {
                const link = document.createElement("a");
                const span = document.createElement("span");
                span.classList.add("bot--link");
                span.textContent = "zde";
                link.href = links[string.toLowerCase()];
                link.id = string.toLowerCase();
                link.target = "_blank";
                link.textContent = "Pokud hledáš informace o " + string + ", klikni ";
                link.appendChild(span);
                link.classList.add("bot__text");
                
                bot.appendChild(link);
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}


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
            location.reload()
        }
    }
    if (e.target.closest(".user__input--btn")) {
        chatbot();   
    }
    if (e.target.closest(".bot--link")) {
        if (e.target.closest.id == null) {
            window.open(links[e.target.parentElement.id], "_blank");
        }
        else{
            window.open(links[e.target.Id], "_blank");
        }
    }
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        chatbot();
    }
});	