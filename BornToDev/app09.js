//function
/*
function sayhello() {
    alert("Hello")
}
//เรียกใช้ฟังก์ชั่น
sayhello()
sayhello()
sayhello()
console.log("Exit")
*/

function toCelsius() {
    let fahrenheit = prompt("Fahrenheit : ")
    let value = (fahrenheit-32) * 5 / 9
    document.getElementById("ans1").innerHTML = value.toFixed(2) + " celsius " //เศษทศนิยม
}
toCelsius()

function toFahrenheit() {
    let celsius = prompt("Celsius : ")
    let value = (celsius * 9) / 5 + 32
    document.getElementById("ans2").innerHTML = value.toFixed(2) + " fahrenheit " //เศษทศนิยม
}
toFahrenheit()

//function display(elemenId, value) {
//    document.getElementById(elemenId).innerHTML = value
//}
//display("ans1","ans2")
