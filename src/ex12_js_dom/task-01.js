let images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

window.onload = function(){
    let gallery = document.querySelector(".gallery");
    let image = document.createElement("img");
    let btnNext = document.querySelector("#btnnext");
    let btnPrev = document.querySelector("#btnprev");
    let styles = "max-width: 100%; max-height: 100%; animation: appearance 500ms linear;";
    let i = 0;

    btnNext.addEventListener("click", getNextImage);
    document.addEventListener("keydown", (event) => {if (event.key === "ArrowRight") {getNextImage()}});
    btnPrev.addEventListener("click", getPrevImage);
    document.addEventListener("keydown", (event) => {if (event.key === "ArrowLeft") {getPrevImage()}});  

    image.setAttribute("src", "./asset/"+images[i]);
    image.setAttribute("style", styles);
    gallery.append(image);

    function getNextImage (){
        i++;
        if (i === images.length) {
            i = 0;
        }
        image.setAttribute("src", "./asset/"+images[i]);
        image.setAttribute("style", styles);
        gallery.append(image);
    }
    
    function getPrevImage (){
        i--;
        if (i < 0) {
            i = images.length-1;
        }
        image.setAttribute("src", "./asset/"+images[i]);
        image.setAttribute("style", styles);
        gallery.append(image);  
    }
}