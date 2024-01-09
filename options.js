let btn = document.querySelector("button");

// getting input for which cake it is
let vanilla = document.getElementById('vanilla');
let chocolate = document.getElementById('chocolate');
let strawberry = document.getElementById('strawberry');

// getting input for which frosting it is
let frosting1 = document.getElementById('frosting1');
let frosting2 = document.getElementById('frosting2');
let frosting3 = document.getElementById('frosting3');

// getting input for which toppings it is
let topping1 = document.getElementById('topping1');
let topping2 = document.getElementById('topping2');
let topping3 = document.getElementById('topping3');

// use this line to change the cake image
document.getElementById("cake").src = "image/vanilla_cake.png";

// checking all the buttons for whether they are clicked or not
btn.addEventListener("click", function () {
    if (chocolate.checked) {
        setCakeInStorage("chocolate");
    } else if (strawberry.checked) {
        setCakeInStorage("strawberry");
    } else if (vanilla.checked) {
        // defaults cake to vanilla
        setCakeInStorage("vanilla");
    }

    if (frosting1.checked) {
        setFrostingInStorage("frosting1");
    } else if (frosting2.checked) {
        setFrostingInStorage("frosting2");
    } else if (frosting2.checked) {
        setFrostingInStorage("frosting3");
    }

    if (topping1.checked) {
        setToppingInStorage("topping1");
    } else if (topping2.checked) {
        setToppingInStorage("topping2");
    } else if (topping3.checked) {
        setToppingInStorage("topping3");
    }
});

// setting the items in storage for main file
function setCakeInStorage(arr) {
    document.getElementById("cake").style = "display: none";
    // sessionStorage.setItem("cake", arr);
    // location.href = "index.html";
    // location.href = "outro.html";
}

function setFrostingInStorage(arr) {
    sessionStorage.setItem("frosting", arr);
    location.href = "index.html";
    location.href = "outro.html";
}

function setToppingInStorage(arr) {
    sessionStorage.setItem("topping", arr);
    location.href = "index.html";
    location.href = "outro.html";
}

// to access the item: let var_name = sessionStorage.getItem("item_wanted");