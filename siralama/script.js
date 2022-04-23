// function gor() {

//     let h2 = document.getElementById("h2")
//     let inp = document.querySelector("number");

//     inp.value = h2.innerHTML


// }


let arr = [];


let inp = document.getElementById("number");
let list = document.getElementById("list");

function ars() {

    if (inp.value == '') {
        alert("bos olmaz");
    } else {
        arr.push(inp.value);
    }

    data = '';
    for (let item of arr) {
        data += `<li> ${item} </li>`
    }
    list.innerHTML = data;

    inp.value = '';


};

function sirala() {




}