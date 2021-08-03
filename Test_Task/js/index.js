var searchInput = document.querySelector(".search-input");
var searchButton = document.getElementById("search-button");

var objectsArray = [];
objectsArray.push({name: "Дима", age: 25});
objectsArray.push({name: "Андрей", age: 31});
objectsArray.push({name: "Оля", age: 22});
objectsArray.push({name: "Лёша", age: 33});

function onSearchButtonClick() {
    var inputValue = searchInput.value;
    var arrFirstName = objectsArray[0].name;

    setTimeout(function() {
        if (inputValue === "google") {
            window.alert("Yandex круче. Но это не точно.");
        } else {
            window.alert("Запрос: " + inputValue + ". Имя в 1-м элементе массива: " + arrFirstName);
        }
    }, 3000);
}

searchButton.addEventListener("click", onSearchButtonClick);

//Task 6
function superSum(number1, number2) {
    var sum = Number(number1) + Number(number2);
    window.alert("Сумма чисел в superSum: " + sum);
}

superSum(12,15);

//Task 7
var numbersArray = [1, 87, 3, 99, -10, 127, 1500.5, 5, 43, 1234, 0, 76];
var arrayMin = numbersArray[0];
var arrayMax = numbersArray[0];

for (var i = 0; i < numbersArray.length; i++) {
    var currentValue = numbersArray[i];
    if (currentValue > arrayMax) {
        arrayMax = currentValue;
    }
    if (currentValue < arrayMin) {
        arrayMin = currentValue;
    }
}
console.log("Минимальное число в массиве: " + arrayMin + ". Максимальное число в массиве: " + arrayMax);


//Task 8
var a = "123";
var b = "456";

var savedValue = a;
a = b;
b = savedValue;

console.log(a);
console.log(b);

//Task 9
function findMax(array) {
    maxValue = array[0];
    for (var i = 0; i < array.length; i++) {
        var currentValue = array[i];
        if (currentValue > maxValue) {
            maxValue = currentValue;
        }
    }
    console.log("Максимальное число в массиве: " + maxValue);
}

findMax(numbersArray);