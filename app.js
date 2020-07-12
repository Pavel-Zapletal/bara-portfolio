
// const pageNav = () => {
//     const pageNavigation1 = document.querySelector(".page-1");
//     const pageNavigation2 = document.querySelector(".page-2");
//     const pageNavigation3 = document.querySelector(".page-3");

//     window.addEventListener("scroll", () =>{
//         if (window.pageYOffset <= 400){
//             pageNavigation1.classList.add("button-active");
//             pageNavigation2.classList.remove("button-active")
//             pageNavigation3.classList.remove("button-active")
//         }
//         else if(window.pageYOffset <=1200){
//             pageNavigation1.classList.remove("button-active");
//             pageNavigation2.classList.add("button-active");
//             pageNavigation3.classList.remove("button-active");
//         }
//         else{
//             pageNavigation2.classList.remove("button-active");
//             pageNavigation3.classList.add("button-active");
//         }
//     });
    

// }

// pageNav();

const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-navigation");

hamburger.addEventListener("click",()=>{
       mobileNav.classList.toggle("btn-toggle");
    
    //for some reason the indexes for hamburger elements are 1 , 3 , 5
    if(mobileNav.classList.contains("btn-toggle")){ 
        for (let i = 1; i < hamburger.childNodes.length; i=i+2) {
            hamburger.childNodes[i].style.backgroundColor="black";
            if(hamburger.childNodes[3]){
                hamburger.childNodes[3].style = "animation:rotateLeft 1s ease-in-out forwards;";
            }
        };
            document.addEventListener("click",(el)=>{
                const clickInside = mobileNav.contains(el.target);
    
                if(clickInside){
                    mobileNav.classList.remove("btn-toggle");
                    hamburgerClose();
                }   
                else if(!clickInside && mobileNav.classList.contains("btn-toggle")){
                   //alert("pepe");
                }
            });     

    }
    else{
        hamburgerClose();
        
    };

    function hamburgerClose(){
        for (let i = 1; i < hamburger.childNodes.length; i=i+2) {
            hamburger.childNodes[i].style.backgroundColor="white";
            hamburger.childNodes[3].style = "animation:rotateLeft 1s ease-in-out reversed;";
        };
    };
});


const kontaktBtn = document.querySelector(".contact-btn");
const kontaktInfo = document.querySelector(".contact-info ");

kontaktBtn.addEventListener("click",()=>{
    kontaktInfo.style.display="flex";
});





/*const imgGallery = Array.from(document.querySelectorAll(".gallery-item"));

let slide = 0;
let currentImage;

    imgGallery.forEach((image,index) => image.addEventListener("mouseover",(el)=>{
        const btnLeft = image.children[0];
        const btnRight = image.children[1];

        if(currentImage == undefined) return currentImage = image;
        if(currentImage !== image ){
            slide = 0;
            currentImage.children[2].style.transform = `translateX(${slide}px)`;
            currentImage = image;
        }
 
        
        btnLeft.onclick = function(){
            if(slide < 0){
                slideImage(400);
            };
        };
        
        btnRight.onclick = function(){
            if(slide > -800){
                slideImage(-400);
            };
        };

        function slideImage(numberOfPixels){
            slide += numberOfPixels;
            image.children[2].style.transform = `translateX(${slide}px)`;
        }
    }));*/


const item = document.querySelectorAll(".gallery-item");
const sourceImg = document.querySelectorAll(".img-src");
let mainImg = document.querySelectorAll(".main-img");
let slideIndex;

sourceImg.forEach((image,index) =>{//tady deklaruju vsecky img , zkus udelat jako funkci a nebo proste nejak zakomponovat tady nize
    const imageList = Array.from(image.children);
    mainImg[index].src = imageList[0].src;
});


// for (let i = 0; i < 5; i++) {
//     const imageL = Array.from(sourceImg[i].children);
//     mainImg[i].src = imageL[0].src;
    
// }

item.forEach((image,index) => image.addEventListener("click",(e)=>{
    const imageList = Array.from(sourceImg[index].children);
    const inc = e.target.nodeName == "BUTTON" && e.target.classList.contains("btn-right");
    const dec = e.target.nodeName == "BUTTON" && e.target.classList.contains("btn-left");

    function nextSlide(number){
        mainImg[index].dataset.index = slideIndex+number;
        slideIndex = mainImg[index].dataset.index; 
        mainImg[index].src = imageList[mainImg[index].dataset.index].src;
    };

    slideIndex = +mainImg[index].dataset.index;   

    // if (mainImg[index].dataset.index !== slideIndex) slideIndex = mainImg[index].dataset.index;
    if(inc && slideIndex < imageList.length-1){
        nextSlide(1);
    } 
    else if(dec && slideIndex > 0){
        nextSlide(-1);
    }
    else return;
}));




