'use strict';

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
const loginBtn = document.querySelector(".login--form__btn");
const loginInput = document.querySelector(".login-input");
const loginPass = document.querySelector(".login-password");
const btnMove = document.querySelector(".btn-movment");
const inputMove = document.getElementById("quntity");
const inputtransferTo = document.getElementById("transfer-to");
const loginModel = document.getElementById("login");


const inputLoginValue = document.querySelector(".login--form__username");
const inputLoginPassword = document.querySelector(".login--form__password");
const main = document.querySelector(".main");
const loginForm = document.querySelector(".login--form");



//CONTAINER OF MOVMENT

// const showMovment = (movmetns)=>{

//     movmetns.forEach((movment, indexOfmovment)=>{
//         const typeOfmovment = movment>0 ? "واریز به حساب" : "برداشت از حساب" ;
//         const displyHtml = `
//         <div class="movment">
//             <div class="movment-desc">
//               <p class="typeOfMove">${typeOfmovment} ${indexOfmovment+1}</p>
//               <p class="date">1400/3/24</p>
//             </div>
//             <p class="value-of-movment">${movment}</p>
//           </div>
//         `;

//         displayMovments.insertAdjacentHTML("beforeend",displyHtml);
//     })

// };

// showMovment(account3.movment);

// const creatUserName = function(acc){
//     acc.forEach(function(item){
//         item.user =item.owenr
//         .toLowerCase()
//         .split(" ")
//         .map((item)=> item[0])
//         .join("");  
//     })

// };

// creatUserName(acconts);


// const accBalance = function(aacun){
//     const main = aacun.movment.reduce((init,mov)=> init+mov, 0);
//     aacun.balnce = main;
//     balance.textContent = `${main} $`;
// };

// accBalance(currentAccount);


// const calcDepositTotal = function(move){
//      const sum = move
//     .filter((item)=> item>0)
//     .reduce((acc,ite)=> acc+ite, 0);
//     //addin to html has not been done
// };

// calcDepositTotal(account3.movment);

// const withdrwlTotal = function(move){

//     const sum = move.filter((item)=> item<0).reduce((acc,ite)=> acc+ite, 0);
//     //adding to html has not been done
//     //rember to clean negtive sign
// }

// withdrwlTotal(account3.movment); 

// //TRANSFER MONEY TO ANOTHER ACCOUNT
// btnMove.addEventListener("click",function(event){
//     event.preventDefault();

//     const megdar = Number(inputMove.value);
//     const currn = acconts.find((item)=> item.owenr === inputtransferTo.value);
//     //FOR CLEANING THE INPUT BOX AFTER IMPLEMENTING IT
//     inputMove.value = inputtransferTo.value = " ";

//     if(
//     megdar>0 &&
//     currn&&
//     megdar>=currentAccount.balance &&
//     currn?.owenr !== currentAccount.owenr)
//     {
//         currentAccount.movment.push(-megdar);
//         currn.movment.push(megdar);
//         updateInterFace(currentAccount);
//     }

// })




























let currentAccount ; 
loginForm.addEventListener("submit",(event) => {
    event.preventDefault();
    currentAccount = acconts.find(item => item.owenr === inputLoginValue.value);
    if(currentAccount?.pin === Number(inputLoginPassword.value)){
        updateInterFace(5);
    }else{
        errorPassWrong(currentAccount);
    }
});


function errorPassWrong(user){
    const text = `<p>کاربر مورد نظر${user.owenr} رمز عبور شما صحیح نمی باشد <p>`;
    loginModel.insertAdjacentHTML("beforeend", text);

};



function updateInterFace (acc){
    loginModel.classList.add("hidden");
    main.classList.add("show");
    // showMovment(acc.movment);
    // accBalance(acc);
};