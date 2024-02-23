"use strict";
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const btn = document.querySelector("button");
const showInfo = document.querySelector(".personal-info");
const checkInfo = document.querySelector(".check-personal");
const viewMorebtn = document.querySelectorAll(".view-more");
const jobContainer = document.querySelectorAll(".container-job-border");
const jobDetail = document.querySelectorAll(".job-detail");
const jobTitle = document.querySelectorAll(".job-title");
let dynamicInput = document.querySelector("#email-input");


for (let i=0; i < jobDetail.length; i++){
    viewMorebtn[i].addEventListener("click", function(){
        if(viewMorebtn[i].classList.contains("view-less")){
            viewMorebtn[i].innerHTML = "VIEW LESS"
            jobContainer[i].style.height = "500px";
        }   else {
            viewMorebtn[i].innerHTML = "VIEW MORE"
            jobContainer[i].style.height = "100%";
            
        };
        jobDetail[i].classList.toggle("hide");
        jobTitle[i].classList.toggle("no-gap"); 
        viewMorebtn[i].classList.toggle("view-less");
        jobContainer[i].classList.toggle("float");
        document.querySelector(".overlay").classList.toggle("hide");
    })};


const hideForm = function(){
    if(regex.test(dynamicInput.value)) {
        checkInfo.classList.add("hide");
        showInfo.classList.remove("hide");
    } else {
    alert("PLease enter your email correctly");
}};

btn.addEventListener("click", hideForm);
document.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        hideForm();
    }
});

