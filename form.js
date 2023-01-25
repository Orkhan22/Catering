const formm = document.querySelector(".formm");
const sifr = /^[a-zA-Z0-9 ]{3,30}$/;
const sifrsur = /^[a-zA-Z0-9 ]{6,30}$/;
const number = /^[[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
const dateregex=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
const emailRegex =
    /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/;
const nameerror = document.querySelector(".nameerror");
const nameerror2 = document.querySelector(".nameerror2");
const surnameerror = document.querySelector(".surnameerror");
const surnameerror2 = document.querySelector(".surnameerror2");
const emailerror = document.querySelector(".emailerror");
const emailerror2 = document.querySelector(".emailerror2");
const numbererror = document.querySelector(".numbererror");
const dateerror = document.querySelector(".dateerror");
const timeerror = document.querySelector(".timeerror");
const formInfo=document.querySelector(".form-info")
const rezerv=document.querySelector(".rezerv")
// const numbererror = document.querySelector(".numbererror");
formm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (sifr.test(formm.name.value)) {
        nameerror.classList.add("hidden");
    } else {
        formm.name.setAttribute("style", "border:1px solid red");
        nameerror.classList.remove("hidden");
        nameerror2.classList.add("hidden");
    }
    if (emailRegex.test(formm.email.value)) {
        emailerror.classList.add("hidden");
    } else {
        emailerror.classList.remove("hidden");
        emailerror2.classList.add("hidden");

        formm.email.setAttribute("style", "border:1px solid red");
    }

    if (sifrsur.test(formm.name2.value)) {
        surnameerror.classList.add("hidden");
    } else {
        surnameerror.classList.remove("hidden");
        formm.name2.setAttribute("style", "border:1px solid red");
    }
    if (number.test(formm.number.value)) {
        numbererror.classList.add("hidden");
        formm.number.setAttribute("style", "border:1px solid green");

    } else {
        numbererror.classList.remove("hidden");
        formm.number.setAttribute("style", "border:1px solid red");
    }
    if (dateregex.test(formm.date.value)) {
        dateerror.classList.add("hidden");
        formm.date.setAttribute("style", "border:1px solid green");

    } else {
        dateerror.classList.remove("hidden");
        formm.date.setAttribute("style", "border:1px solid red");
    }

    if((formm.name.value!=="")&&(formm.email.value!=="")&&(formm.name2.value!=="")&&(formm.date.value!=="")&&(formm.number.value!=="")){
       
        formInfo.classList.add("hidden")
        rezerv.classList.remove("hidden")

        let settime= setTimeout(() => {
            formInfo.classList.remove("hidden")
            rezerv.classList.add("hidden")
        }, 4000);
    }else{

        console.log("x");
    }

});

formm.addEventListener("keyup", () => {
    if (sifr.test(formm.name.value)) {
        nameerror2.classList.add("hidden");
        formm.name.setAttribute("style", "border:1px solid green");
    } else {
        formm.name.setAttribute("style", "border:1px solid red");
        nameerror2.classList.remove("hidden");
        nameerror.classList.add("hidden");

    }
    if (emailRegex.test(formm.email.value)) {
        emailerror2.classList.add("hidden");
        formm.email.setAttribute("style", "border:1px solid green");
    } else {
        formm.email.setAttribute("style", "border:1px solid red");
        emailerror2.classList.remove("hidden");
        emailerror.classList.add("hidden");
    }
    if (sifrsur.test(formm.name2.value)) {
        surnameerror2.classList.add("hidden");
        formm.name2.setAttribute("style", "border:1px solid green");

    } else {
        surnameerror.classList.add("hidden");
        surnameerror2.classList.remove("hidden");
        formm.name2.setAttribute("style", "border:1px solid red");
    }

});
