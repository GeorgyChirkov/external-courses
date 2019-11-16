window.onload = function() {
    let profile = document.querySelector(".profile");
    let arrow = document.getElementsByClassName("arrow");
    let arrowClicked = document.getElementsByClassName("arrow-clicked");
    let menuBox = document.querySelector(".user-menu");
    let menuContent = document.createElement("div");
    let myAccount = document.createElement("div");
    let mytasks = document.createElement("div");
    let logOut = document.createElement("div");
    let btnStyle = "background: white; cursor: pointer; text-align: center; height: 25px; width: 120px; border: 1px solid black; border-radius: 7px; margin: 10px 0px; font-family: Roboto; font-style: normal; font-weight: normal; font-size: 18px;";
    profile.addEventListener("click", getMenu, {once: true});

    function getMenu() {
        arrow[0].setAttribute("style", "transform: rotate(180deg)");
        arrow[0].setAttribute("class", "arrow-clicked");
        menuContent.setAttribute("class", "menu");
        menuContent.setAttribute("style", "box-shadow: 0 0 5px black; background: #0067A3; width: 150px; height: auto; display: flex; flex-direction:column; justify-content: space-around; align-items: center; border-radius: 15px; border: 2px solid white; position: absolute; top: 50px; right: 5px");
        myAccount.setAttribute("class", "my-account");
        myAccount.setAttribute("style", btnStyle);
        myAccount.setAttribute("onmouseover", "style.background='#EBECF0'");
        myAccount.setAttribute("onmouseout", "style.background='white'");
        myAccount.innerHTML = "My account";
        mytasks.setAttribute("class", "my-tasks");
        mytasks.setAttribute("style", btnStyle);
        mytasks.setAttribute("onmouseover", "style.background='#EBECF0'");
        mytasks.setAttribute("onmouseout", "style.background='white'");
        mytasks.innerHTML = " My tasks";
        logOut.setAttribute("class", "log-out");
        logOut.setAttribute("style", btnStyle);
        logOut.setAttribute("onmouseover", "style.background='#EBECF0'");
        logOut.setAttribute("onmouseout", "style.background='white'");
        logOut.innerHTML = "Log Out";
        menuBox.append(menuContent);
        menuContent.append(myAccount);
        menuContent.append(mytasks);
        menuContent.append(logOut);
        profile.addEventListener("click", removeMenu, {once: true});
    }

    function removeMenu() {
        arrowClicked[0].setAttribute("style", "transform: rotate(0deg)");
        arrowClicked[0].setAttribute("class", "arrow");
        menuContent.remove();
        profile.addEventListener("click", getMenu, {once: true});
    }

    
    let addNewCard = document.querySelector(".add-new-card")
    let input = document.createElement("input")
    let bot = document.querySelector(".bot")
    let mid = document.querySelector(".mid")
    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    localStorage.setItem('items', JSON.stringify(itemsArray));
    let data = JSON.parse(localStorage.getItem('items'));
    data.forEach(item => {createDiv(item)});

    addNewCard.addEventListener("click", addNewTask)

    function addNewTask() {
        bot.prepend(input)
    }

    input.addEventListener("blur", addItems)
    
    function addItems (event) {
        event.preventDefault();
        itemsArray.push(input.value);
        localStorage.setItem("items", JSON.stringify(itemsArray));
        createDiv(input.value)
        input.value = ""
    }

    function createDiv (text) {
        let div = document.createElement("div")
        div.setAttribute("style", "width: 242px; padding: 8px; background: white; border-radius: 5px; word-wrap: break-word; margin: 15px 0px")
        div.textContent = text
        mid.appendChild(div)
        input.remove()
    }







}