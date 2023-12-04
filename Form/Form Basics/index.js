const first_name= document.querySelector('#first_name');
const submit_button = document.querySelector(".submit");
const amount = document.querySelector('#amount');
const textareaBig = document.querySelector('.textarea-big');
const p =document.querySelector('.p');
const carSelect = document.querySelector('#Car')

submit_button.addEventListener("click",()=>{
    p.textContent += first_name.value;
    p.textContent += amount.value;
    p.textContent += textareaBig.value;
    p.textContent += carSelect.value;
})


