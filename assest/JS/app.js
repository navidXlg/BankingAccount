'use strict';

//BANK ACCONTS
//Becuse We want to show that we are pretending 
//that we work with API we didnt use the MAP

const account1 = {
    owenr : "navid khaleghi" ,
    movment : [],
    interestRate : 1.2,
    pin:1111
};

const account2 = {
    owenr : "akbar abdi" ,
    movment : [],
    interestRate :1.5 ,
    pin:2222
};

const account3 = {
    owenr : "ahamd pormoxber" ,
    movment : [200,-500, 600, 1300, 1500],
    interestRate :1.7 ,
    pin:333
};

const acconts = [account1,account2,account3];

//WORKING WITH DOM

const displayMovments = document.querySelector(".display-movment-container");
const balance = document.querySelector(".balnce");
const loginBtn = document.querySelector(".login-btn");
const loginInput = document.querySelector(".login-input");
const loginPass = document.querySelector(".login-password");
const btnMove = document.querySelector(".btn-movment");
const inputMove = document.getElementById("quntity");
const inputtransferTo = document.getElementById("transfer-to");




//CONTAINER OF MOVMENT

const showMovment = (movmetns)=>{

    movmetns.forEach((movment, indexOfmovment)=>{
        const typeOfmovment = movment>0 ? "واریز به حساب" : "برداشت از حساب" ;
        const displyHtml = `
        <div class="movment">
            <div class="movment-desc">
              <p class="typeOfMove">${typeOfmovment} ${indexOfmovment+1}</p>
              <p class="date">1400/3/24</p>
            </div>
            <p class="value-of-movment">${movment}</p>
          </div>
        `;

        displayMovments.insertAdjacentHTML("beforeend",displyHtml);
    })

};

showMovment(account3.movment);

const creatUserName = function(acc){
    acc.forEach(function(item){
        item.user =item.owenr
        .toLowerCase()
        .split(" ")
        .map((ite)=> ite[0])
        .join("");  
    })

};

creatUserName(acconts);


const accBalance = function(movment){
    const main = movment.reduce((init,mov)=> init+mov, 0)
    balance.textContent = `${main} $`;
};

accBalance(account3.movment);


const calcDepositTotal = function(move){
     const sum = move
    .filter((item)=> item>0)
    .reduce((acc,ite)=> acc+ite, 0);
    //addin to html has not been done
};

calcDepositTotal(account3.movment);

const withdrwlTotal = function(move){

    const sum = move.filter((item)=> item<0).reduce((acc,ite)=> acc+ite, 0);
    //adding to html has not been done
    //rember to clean negtive sign
}

withdrwlTotal(account3.movment); 


//LOGIN TO THE ACCOUNT
let currentAccount ; 


loginBtn.addEventListener("click",function(event){

    event.preventDefault();
    currentAccount = acconts.find((item)=> item.owenr === inputLogin.value);
    if(currentAccount.pin === Number(inputPass.value)){
        /// what shoud we have done when user logged in
        //remove the hover and display UI
        
    }


})


