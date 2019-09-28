var newLi = document.createElement("li");

varnewA = document.createElement("a");

var menu = document.getElementById("id").getElementsByTagName("ul")[0];

// teraz dodawanie do menu tego co stworzylismy

menu.appendChild(newLi);
newLi.appendChild(newA);
newA.innerHTML = "nowy tekst jaki wstawiam pomiedzy a";
menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]);