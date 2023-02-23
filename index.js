const rightIconEl = document.getElementById("right-icon");

const allImages = document.querySelectorAll("img");

let currentImgEl = 1;

const leftIconEl = document.getElementById("left-icon");

const imgContainerEl = document.getElementById("img-container");


rightIconEl.addEventListener("click",()=>{
    currentImgEl++;
    updateImage();
})



leftIconEl.addEventListener("click", () =>{
    currentImgEl--;
    updateImage();
})

function updateImage(){
    if(currentImgEl > allImages.length){
        currentImgEl = 1;
    } else if(currentImgEl < 1){
        currentImgEl = allImages.length;
    }
    imgContainerEl.style.transform = `translateX(-${(currentImgEl - 1) * 500}px)`;
}