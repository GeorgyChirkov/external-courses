const debounce = (func, delay) => {
    let clearTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(clearTimer);
        clearTimer = setTimeout(() => func.apply(context, args), delay);
    }
}
let search = document.querySelector(".search")
search.addEventListener("keydown", debounce(searching, 500))
function searching() {
    let ul = document.querySelector(".mocdata");
    let li = ul.children
    for(let i = 0; i < li.length; i++) {
        let data = li[i].textContent
        if (data.indexOf(search.value) > -1) {
            li[i].style.display = "block"
        } else {
            li[i].style.display = "none"
        }
    }
}
