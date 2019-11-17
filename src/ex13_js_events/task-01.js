window.onload = function() {
    let profile = document.querySelector(".profile");
    let arrow = document.getElementsByClassName("arrow");
    let arrowClicked = document.getElementsByClassName("arrow-clicked");
    let menuBox = document.querySelector(".user-menu");
    let menuContent = document.createElement("div");
    let myAccount = document.createElement("div");
    let mytasks = document.createElement("div");
    let logOut = document.createElement("div");
    let btnStyle = 
    `background: white; 
    cursor: pointer; 
    text-align: center; 
    height: 25px; 
    width: 120px; 
    border: 1px solid black; 
    border-radius: 7px; 
    margin: 10px 0px; 
    font-family: Roboto; 
    font-style: normal; 
    font-weight: normal; 
    font-size: 18px;`
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

    let backlogBot = document.querySelector(".backlog>.bot")
    let backlogMid = document.querySelector(".backlog>.mid")
    let addNewCard = document.querySelector(".add-new-card")
    let select = document.createElement("select")
    let readyMid = document.querySelector(".ready>.mid")
    let readyBot = document.querySelector(".ready>.bot")
    let readyAddCard = document.querySelector(".ready>.bot>.add-card")
    let inProgressMid = document.querySelector(".inprogress>.mid")
    let inProgressBot = document.querySelector(".inprogress>.bot")
    let inProgressAddCard = document.querySelector(".inprogress>.bot>.add-card")
    let finishedMid = document.querySelector(".finished>.mid")
    let finishedBot = document.querySelector(".finished>.bot")
    let finishedAddCard = document.querySelector(".finished>.bot>.add-card")

    let input = document.createElement("input")
    let backlogArray = localStorage.getItem('backlog') ? JSON.parse(localStorage.getItem('backlog')) : [];
    let readyArray = localStorage.getItem('ready') ? JSON.parse(localStorage.getItem('ready')) : [];
    let inProgressArray = localStorage.getItem('inprogress') ? JSON.parse(localStorage.getItem('inprogress')) : [];
    let finishedArray = localStorage.getItem('finished') ? JSON.parse(localStorage.getItem('finished')) : [];

    localStorage.setItem('backlog', JSON.stringify(backlogArray));
    localStorage.setItem('ready', JSON.stringify(readyArray));
    localStorage.setItem('inprogress', JSON.stringify(inProgressArray));
    localStorage.setItem('finished', JSON.stringify(finishedArray));

    let backlogData = JSON.parse(localStorage.getItem('backlog'));
    let readyData = JSON.parse(localStorage.getItem('ready'));
    let inProgressData = JSON.parse(localStorage.getItem('inprogress'));
    let finishedData = JSON.parse(localStorage.getItem('finished'));

    backlogData.forEach(item => {createDivInBacklog(item)});
    readyData.forEach(item => {createDiv(item,readyMid)});
    inProgressData.forEach(item => {createDiv(item,inProgressMid)});
    finishedData.forEach(item => {createDiv(item,finishedMid)});

    if (!backlogMid.firstChild) {
        readyAddCard.setAttribute("disabled", "disabled")
        readyAddCard.setAttribute("style", "opacity: 0.5; cursor: default")

    } else {
        readyAddCard.removeAttribute("disabled", "disabled")
        readyAddCard.removeAttribute("style", "opacity: 0.5; cursor: default")
        readyAddCard.setAttribute("onmouseover", "style.background='white'")
        readyAddCard.setAttribute("onmouseout", "style.background='none'")
    }
    if (!readyMid.firstChild) {
        inProgressAddCard.setAttribute("disabled", "disabled")
        inProgressAddCard.setAttribute("style", "opacity: 0.5; cursor: default")
    } else {
        inProgressAddCard.removeAttribute("disabled", "disabled")
        inProgressAddCard.removeAttribute("style", "opacity: 0.5; cursor: default")
        inProgressAddCard.setAttribute("onmouseover", "style.background='white'")
        inProgressAddCard.setAttribute("onmouseout", "style.background='none'")
    }
    if (!inProgressMid.firstChild) {
        finishedAddCard.setAttribute("disabled", "disabled")
        finishedAddCard.setAttribute("style", "opacity: 0.5; cursor: default")
    } else {
        finishedAddCard.removeAttribute("disabled", "disabled")
        finishedAddCard.removeAttribute("style", "opacity: 0.5; cursor: default")
        finishedAddCard.setAttribute("onmouseover", "style.background='white'")
        finishedAddCard.setAttribute("onmouseout", "style.background='none'")
    }

    addNewCard.addEventListener("click", addNewTask)
    addNewCard.setAttribute("onmouseover", "style.background='white'")
    addNewCard.setAttribute("onmouseout", "style.background='none'")
    function addNewTask() {
        backlogBot.prepend(input)
    }

    input.addEventListener("blur", addItems)
    
    function addItems (event) {
        event.preventDefault();
        backlogArray.push(input.value);
        localStorage.setItem("backlog", JSON.stringify(backlogArray));
        createDivInBacklog(input.value)
        input.value = ""
        if (!backlogMid.firstChild) {
            readyAddCard.setAttribute("disabled", "disabled")
            readyAddCard.setAttribute("style", "opacity: 0.5")
        } else {
            readyAddCard.removeAttribute("disabled", "disabled")
            readyAddCard.removeAttribute("style", "opacity: 0.5")
        }    
    }

    function createDivInBacklog (text) {
        let div = document.createElement("div")
        div.setAttribute("style", "width: 242px; padding: 8px; background: white; border-radius: 5px; word-wrap: break-word; margin: 15px 0px")
        div.textContent = text
        backlogMid.appendChild(div)
        input.remove()
    }

    readyAddCard.addEventListener("click", getSelectOnReady)

    function getSelectOnReady() {
        readyBot.prepend(select)
        displayListOnReady()
    }

    function displayListOnReady() {
        JSON.parse(localStorage.getItem('backlog')).forEach(item => {
            let option = document.createElement("option")
            option.textContent = item;
            select.append(option)
        })
        select.prepend(document.createElement("option"))
        select.firstChild.textContent = "Select the Task"
        select.firstChild.selected = "selected"
        select.firstChild.disabled = "disabled"
        select.firstChild.hidden = "hidden"
        select.addEventListener("blur", () => {
            while (select.firstChild) {
                select.removeChild(select.firstChild);
              }
            select.remove()
        })
        backlogArray = localStorage.getItem('backlog') ? JSON.parse(localStorage.getItem('backlog')) : [];    
    }

    select.addEventListener("change", addTaskToReady)

    function addTaskToReady(event) {
        JSON.parse(localStorage.getItem('backlog')).forEach((item,i) => {
            if (event.target.value === item) {
                createDiv(item, readyMid)
                if (backlogMid.childNodes[i].textContent === item) {
                    backlogMid.childNodes[i].remove()
                    let newBacklogArray = JSON.parse(localStorage.getItem('backlog'))
                    let removedItem = newBacklogArray.splice(i,1)
                    readyArray.push(removedItem[0])
                    localStorage.setItem("ready", JSON.stringify(readyArray));
                    localStorage.setItem('backlog', JSON.stringify(newBacklogArray));
                    displayListOnReady()
                }
            }
        })
        if (!backlogMid.firstChild) {
            readyAddCard.setAttribute("disabled", "disabled")
            readyAddCard.setAttribute("style", "opacity: 0.5; cursor: default")
    
        } else {
            readyAddCard.removeAttribute("disabled", "disabled")
            readyAddCard.removeAttribute("style", "opacity: 0.5; cursor: default")
            readyAddCard.setAttribute("onmouseover", "style.background='white'")
            readyAddCard.setAttribute("onmouseout", "style.background='none'")
        }
        if (!readyMid.firstChild) {
            inProgressAddCard.setAttribute("disabled", "disabled")
            inProgressAddCard.setAttribute("style", "opacity: 0.5; cursor: default")
        } else {
            inProgressAddCard.removeAttribute("disabled", "disabled")
            inProgressAddCard.removeAttribute("style", "opacity: 0.5; cursor: default")
            inProgressAddCard.setAttribute("onmouseover", "style.background='white'")
            inProgressAddCard.setAttribute("onmouseout", "style.background='none'")
        }
    }

    function createDiv (text, targetDir) {
        let div = document.createElement("div")
        div.setAttribute("style", "width: 242px; padding: 8px; background: white; border-radius: 5px; word-wrap: break-word; margin: 15px 0px")
        div.textContent = text
        targetDir.appendChild(div)
    }

    inProgressAddCard.addEventListener("click",getSelectOnInProgress)

    function getSelectOnInProgress() {
        inProgressBot.prepend(select)
        displayListOnInProgress()
    }

    function displayListOnInProgress() {
        JSON.parse(localStorage.getItem('ready')).forEach(item => {
            let option = document.createElement("option")
            option.textContent = item;
            select.append(option)
        })
        select.prepend(document.createElement("option"))
        select.firstChild.textContent = "Select the Task"
        select.firstChild.selected = "selected"
        select.firstChild.disabled = "disabled"
        select.firstChild.hidden = "hidden"
        select.addEventListener("blur", () => {
            while (select.firstChild) {
                select.removeChild(select.firstChild);
              }
            select.remove()
        })
        readyArray = localStorage.getItem('ready') ? JSON.parse(localStorage.getItem('ready')) : [];
    }

    select.addEventListener("change", addTaskToInProgress)

    function addTaskToInProgress(event) {
        JSON.parse(localStorage.getItem('ready')).forEach((item,i) => {
            if (event.target.value === item) {
                createDiv(item, inProgressMid)
                if (readyMid.childNodes[i].textContent === item) {
                    readyMid.childNodes[i].remove()
                    let newReadyArray = JSON.parse(localStorage.getItem('ready'))
                    let removedItem = newReadyArray.splice(i,1)
                    inProgressArray.push(removedItem[0])
                    localStorage.setItem("inprogress", JSON.stringify(inProgressArray));
                    localStorage.setItem('ready', JSON.stringify(newReadyArray));
                    displayListOnInProgress()
                }
            }
        })
        if (!readyMid.firstChild) {
            inProgressAddCard.setAttribute("disabled", "disabled")
            inProgressAddCard.setAttribute("style", "opacity: 0.5; cursor: default")
        } else {
            inProgressAddCard.removeAttribute("disabled", "disabled")
            inProgressAddCard.removeAttribute("style", "opacity: 0.5; cursor: default")
            inProgressAddCard.setAttribute("onmouseover", "style.background='white'")
            inProgressAddCard.setAttribute("onmouseout", "style.background='none'")
        }
        if (!inProgressMid.firstChild) {
            finishedAddCard.setAttribute("disabled", "disabled")
            finishedAddCard.setAttribute("style", "opacity: 0.5; cursor: default")
        } else {
            finishedAddCard.removeAttribute("disabled", "disabled")
            finishedAddCard.removeAttribute("style", "opacity: 0.5; cursor: default")
            finishedAddCard.setAttribute("onmouseover", "style.background='white'")
            finishedAddCard.setAttribute("onmouseout", "style.background='none'")
        }        
    }


    finishedAddCard.addEventListener("click",getSelectOnFinished)

    function getSelectOnFinished() {
        finishedBot.prepend(select)
        displayListOnFinished()
    }

    function displayListOnFinished() {
        JSON.parse(localStorage.getItem('inprogress')).forEach(item => {
            let option = document.createElement("option")
            option.textContent = item;
            select.append(option)
        })
        select.prepend(document.createElement("option"))
        select.firstChild.textContent = "Select the Task"
        select.firstChild.selected = "selected"
        select.firstChild.disabled = "disabled"
        select.firstChild.hidden = "hidden"
        select.addEventListener("blur", () => {
            while (select.firstChild) {
                select.removeChild(select.firstChild);
              }
            select.remove()
        })
        inProgressArray = localStorage.getItem('inprogress') ? JSON.parse(localStorage.getItem('inprogress')) : [];
    }

    select.addEventListener("change", addTaskToFinished)

    function addTaskToFinished(event) {
        JSON.parse(localStorage.getItem('inprogress')).forEach((item,i) => {
            if (event.target.value === item) {
                createDiv(item, finishedMid)
                if (inProgressMid.childNodes[i].textContent === item) {
                    inProgressMid.childNodes[i].remove()
                    let newInProgressArray = JSON.parse(localStorage.getItem('inprogress'))
                    let removedItem = newInProgressArray.splice(i,1)
                    finishedArray.push(removedItem[0])
                    localStorage.setItem("finished", JSON.stringify(finishedArray));
                    localStorage.setItem('inprogress', JSON.stringify(newInProgressArray));
                    displayListOnFinished()
                }
            }
        })
        if (!inProgressMid.firstChild) {
            finishedAddCard.setAttribute("disabled", "disabled")
            finishedAddCard.setAttribute("style", "opacity: 0.5; cursor: default")
        } else {
            finishedAddCard.removeAttribute("disabled", "disabled")
            finishedAddCard.removeAttribute("style", "opacity: 0.5; cursor: default")
            finishedAddCard.setAttribute("onmouseover", "style.background='white'")
            finishedAddCard.setAttribute("onmouseout", "style.background='none'")
        }
    }
}