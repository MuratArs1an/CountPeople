

let count=0
let countText=document.getElementById("counted")

let saveText=document.getElementById("save-el")



function incremetCount(){
    count++
    countText.innerText=count;
}

function clearCount(){
    saveText.textContent="Previous Entires: " 

}

function save(){
    let saveCount=count+" - "
    saveText.textContent+=saveCount
    count=0
    countText.innerText=count;
}



