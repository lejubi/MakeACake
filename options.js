let btn = document.querySelector("button");

// getting input for which cake it is
let vanilla = document.getElementById('flavor');
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
let topping4 = document.getElementById('topping4');
let topping5 = document.getElementById('topping5');

var cake = document.getElementById("cake");

// checking all the buttons for whether they are clicked or not
// note: this doesn't work
btn.addEventListener("click", function() {
    if (chocolate.checked) {
        setCakeInStorage("img/chocolate_cake.png");
    } else if (strawberry.checked) {
        setCakeInStorage("img/strawberry_cake.png");
    } else if (vanilla.checked) {
        setCakeInStorage("img/vanilla_cake.png");
    }

    // change image names later
    if (frosting1.checked) {
        setFrostingInStorage("img/frosting1.png");
    } else if (frosting2.checked) {
        setFrostingInStorage("img/frosting2.png");
    } else if (frosting2.checked) {
        setFrostingInStorage("img/frosting3.png");
    }

    if (topping1.checked) {
        setToppingInStorage("img/topping1.png");
    } else if (topping2.checked) {
        setToppingInStorage("img/topping2.png");
    } else if (topping3.checked) {
        setToppingInStorage("img/topping3.png");
    }
});

// setting the items in storage for main file
function setCakeInStorage(img) {
    document.getElementById("cake").src = img;
    sessionStorage.setItem("cake", arr);
    location.href = "index.html";
    location.href = "outro.html";

    console.log("cake change")
}

function setFrostingInStorage(img) {
    document.getElementById("frosting").src = img;
    sessionStorage.setItem("frosting", arr);
    location.href = "index.html";
    location.href = "outro.html";

    console.log("frosting change")
}

function setToppingInStorage(img) {
    document.getElementById("topping").src = img;
    sessionStorage.setItem("topping", arr);
    location.href = "index.html";
    location.href = "outro.html";

    console.log("topping change")
}

// to access the item: let var_name = sessionStorage.getItem("item_wanted");