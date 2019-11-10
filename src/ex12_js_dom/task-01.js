let imgarray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

window.onload = function(){
    let gall = document.querySelector(".gallery");
    let image = document.createElement("img");
    let btnnext = document.querySelector("[class='btn btnnext']");
    let btnprev = document.querySelector("[class='btn btnprev']");
    let styles = "max-width: 100%; max-height: 100%; animation: appearance 500ms linear;";
    let i = 0;

    btnnext.addEventListener("click", nextImage);
    document.addEventListener("keydown", (event) => {if (event.key === "ArrowRight") {nextImage()}});
    btnprev.addEventListener("click", prevImage);
    document.addEventListener("keydown", (event) => {if (event.key === "ArrowLeft") {prevImage()}});  

    image.setAttribute("src", "./asset/"+imgarray[i]);
    image.setAttribute("style", styles);
    gall.append(image);

    function nextImage (){
        i++;
        if (i === imgarray.length) {
            i = 0;
        }
        image.setAttribute("src", "./asset/"+imgarray[i]);
        image.setAttribute("style", styles);

        gall.append(image);
    }
    
    function prevImage (){
        i--;
        if (i < 0) {
            i = imgarray.length-1;
        }
        image.setAttribute("src", "./asset/"+imgarray[i]);
        image.setAttribute("style", styles);
        gall.append(image);  
    }
}