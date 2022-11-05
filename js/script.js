// THEME CHANGE

const themeBtn = document.querySelector("#theme-btn");
const icon = document.querySelector("#icon");
const main = document.querySelector(".left");
const gen = document.querySelector("#gen");
const rnd = document.querySelector(".rnd-pwd");
const small = document.querySelector(".small");
const line = document.querySelector(".line");
const ellipsis = document.querySelectorAll(".fa-ellipsis");
const copy1 = document.querySelector(".copy1");
const copy2 = document.querySelector(".copy2");
const copy3 = document.querySelector(".copy3");
const copy4 = document.querySelector(".copy4");

themeBtn.addEventListener('click', () => {
    if(icon.classList.contains("fa-moon")){
        icon.classList.replace("fa-moon","fa-sun");
        main.classList.add("white");
        gen.classList.add("gen-white");
        rnd.classList.add("rnd-white");
        small.classList.add("small-white");
        line.classList.add("line-white");
        for (i = 0; i < ellipsis.length; i++) {
            ellipsis[i].style.color = "#3F516B";
        }
        copy1.style.color = "#3F516B";
        copy2.style.color = "#3F516B";
        copy3.style.color = "#3F516B";
        copy4.style.color = "#3F516B";
    } else if(icon.classList.contains("fa-sun")) {
        icon.classList.replace("fa-sun","fa-moon");
        main.classList.remove("white");
        gen.classList.remove("gen-white");
        rnd.classList.remove("rnd-white");
        small.classList.remove("small-white");
        line.classList.remove("line-white");
        for (i = 0; i < ellipsis.length; i++) {
            ellipsis[i].style.color = "#202B3C";
        }
        copy1.style.color = "#202B3C";
        copy2.style.color = "#202B3C";
        copy3.style.color = "#202B3C";
        copy4.style.color = "#202B3C";
    }
})

// GENERATE PASSWORDS AND DISPLAY THEM

let randomData = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","=","+","-","*","&","%","$","#","@","!","`","~","."];

let getRandom;
const inputTxt = document.querySelector("#input-txt");
const para = document.querySelectorAll(".para");
const errorDiv = document.querySelector(".error-div");

function removeError() {
    errorDiv.classList.remove("showError");
}

function randomPwd() {

        for(let a = 0; a <= 3; a++) {
            para[a].innerHTML = `<i class="fa-solid fa-ellipsis"></i>`;
        }

        if(inputTxt.value == "") {

            for(i = 0; i < 8; i++) {
                getRandom = Math.floor(Math.random()*74 + 1);
                para[0].textContent += randomData[getRandom];
            }

            for(i = 0; i < 8; i++) {
                getRandom = Math.floor(Math.random()*74 + 1);
                para[1].textContent += randomData[getRandom];
            }

            for(i = 0; i < 8; i++) {
                getRandom = Math.floor(Math.random()*74 + 1);
                para[2].textContent += randomData[getRandom];
            }

            for(i = 0; i < 8; i++) {
                getRandom = Math.floor(Math.random()*74 + 1);
                para[3].textContent += randomData[getRandom];
            }

        } else if(inputTxt.value > 12 || inputTxt.value < 5) {

            errorDiv.classList.add("showError");
            setTimeout(removeError,5000);

        } else {

            for(i = 0; i < inputTxt.value; i++) {
                getRandom = Math.floor(Math.random()*74 + 1);
                para[0].textContent += randomData[getRandom];
            }

            for(i = 0; i < inputTxt.value; i++) {
                getRandom = Math.floor(Math.random()*74 + 1);
                para[1].textContent += randomData[getRandom];
            }

            for(i = 0; i < inputTxt.value; i++) {
                getRandom = Math.floor(Math.random()*74 + 1);
                para[2].textContent += randomData[getRandom];
            }

            for(i = 0; i < inputTxt.value; i++) {
                getRandom = Math.floor(Math.random()*74 + 1);
                para[3].textContent += randomData[getRandom];
            }

        }

}

// COPY PASSWORDS WITH A CLICK

const h3 = document.querySelector(".copy-div");

function copied1() {
    if(para[0].textContent === ""){
        randomPwd();
        navigator.clipboard.writeText(para[0].innerText).then(addTransition()).then(() => h3.classList.add("active")).then(() => setTimeout(removeActive, 5000));
    } else {
        navigator.clipboard.writeText(para[0].innerText).then(addTransition()).then(() => h3.classList.add("active")).then(() => setTimeout(removeActive, 5000));
    }     
}

function copied2() {
    if(para[1].textContent === ""){
        randomPwd();
        navigator.clipboard.writeText(para[1].innerText).then(addTransition()).then(() => h3.classList.add("active")).then(() => setTimeout(removeActive, 5000));
    } else {
        navigator.clipboard.writeText(para[1].innerText).then(addTransition()).then(() => h3.classList.add("active")).then(() => setTimeout(removeActive, 5000));
    }   
}

function copied3() {
    if(para[2].textContent === ""){
        randomPwd();
        navigator.clipboard.writeText(para[2].innerText).then(addTransition()).then(() => h3.classList.add("active")).then(() => setTimeout(removeActive, 5000));
    } else {
        navigator.clipboard.writeText(para[2].innerText).then(addTransition()).then(() => h3.classList.add("active")).then(() => setTimeout(removeActive, 5000));
    }   
}

function copied4() {
    if(para[3].textContent === ""){
        randomPwd();
        navigator.clipboard.writeText(para[3].innerText).then(addTransition()).then(() => h3.classList.add("active")).then(() => setTimeout(removeActive, 5000));
    } else {
        navigator.clipboard.writeText(para[3].innerText).then(addTransition()).then(() => h3.classList.add("active")).then(() => setTimeout(removeActive, 5000));
    }   
}

function removeActive() {
    h3.classList.remove("active");
}

function addTransition() {
    h3.style.transition = "2s";
}                                                                                                   

