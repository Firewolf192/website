let tree = document.querySelector("#tree");
let gift = document.querySelector("#gifts");
let claus = document.querySelector("#claus");


let treeText = document.querySelector("#t1");
let giftText = document.querySelector("#t2");
let clausText = document.querySelector("#t3");



function disappearAnimation(object){
    if(object.classList.contains("hidden")){
        object.classList.remove("hidden");
    }
    else{
        object.classList.add("hidden");
    };
    
};


tree.addEventListener("click", () => {
    disappearAnimation(treeText);
});

gift.addEventListener("click", () => {
    disappearAnimation(giftText);
});

claus.addEventListener("click", () => {
    disappearAnimation(clausText);

})



let menu = document.querySelector("#m");
let button = document.querySelector("#b");
let but = document.querySelector("#but");

let transition = document.querySelector("#o")

let animation = true

let textAnimation = document.querySelector("#t")

but.addEventListener("click", () => {

    if(animation){
      textAnimation.classList.remove("t-animation-out")
      textAnimation.classList.add("t-animation")
      button.classList.remove("animation4")
      menu.classList.remove("animation3")
      menu.classList.add("animation");
      button.classList.add("animation2");
      transition.textContent = "slide in"
      animation = false;
      
    }

    else if(animation === false)
    {
      menu.classList.remove("animation");
      menu.classList.add("animation3");
      button.classList.add("animation4");
      textAnimation.classList.remove("t-animation")
      textAnimation.classList.add("t-animation-out")
      transition.textContent = "slide out"
      animation = true;
    };
  
});




