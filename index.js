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