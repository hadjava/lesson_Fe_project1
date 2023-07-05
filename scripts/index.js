"use strict";

const nameInpt = document.querySelector(".name");
const lastnameInpt = document.querySelector(".lastname");
const emailnameInpt = document.querySelector(".email");
const phonenameInpt = document.querySelector(".phone");
const passwordnameInpt = document.querySelector(".password");
const saveBtn = document.querySelector(".savedata");
const body = document.querySelector("body");

const userInfo = {
    name : nameInpt.value,
    lastname : lastnameInpt.value,
    email : emailnameInpt.value,
    phone : phonenameInpt.value,
    password : passwordnameInpt.value
}

saveBtn.addEventListener("click", () => {
    const userInfo = {
        name : nameInpt.value,
        lastname : lastnameInpt.value,
        email : emailnameInpt.value,
        phone : phonenameInpt.value,
        password : passwordnameInpt.value
    }

    console.log(userInfo);
    const card = document.createElement("div");
    body.appendChild(card);

    //const arrUserInfo = Object.values(userInfo);
    //const arrValues = Object.keys(userInfo);
    const arrAllInfo = Object.entries(userInfo);
    console.log(arrAllInfo);


    for(let i = 0; i < arrAllInfo.length; i++){
        let p = document.createElement("p");
        p.textContent = `${arrAllInfo[i][0]}: ${arrAllInfo[i][1]}`;
        card.appendChild(p);
    }

    /*console.log(userInfo);
    const card = document.createElement("div");
    body.appendChild(card);

    const arrUserInfo = Object.values(userInfo);
    const arrValues = Object.keys(userInfo);
    console.log(arrUserInfo);
    console.log(arrValues);

    for(let i = 0; i < arrUserInfo.length; i++){
        let p = document.createElement("p");
        p.textContent = `${arrValues[i]}: ${arrUserInfo[i]}`;
        card.appendChild(p);
    }
*/
});


