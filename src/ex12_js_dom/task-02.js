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
    let menuContentStyle = 
    `box-shadow: 0 0 5px black; 
    background: #0067A3; 
    width: 150px; 
    height: auto; 
    display: flex; 
    flex-direction:column; 
    justify-content: space-around; 
    align-items: center; 
    border-radius: 15px; 
    border: 2px solid white; 
    position: absolute; 
    top: 50px; 
    right: 5px`
    profile.addEventListener("click", getMenu, {once: true});

    function getMenu() {
        arrow[0].setAttribute("style", "transform: rotate(180deg)");
        arrow[0].setAttribute("class", "arrow-clicked");
        menuContent.setAttribute("class", "menu");
        menuContent.setAttribute("style", menuContentStyle);
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
}