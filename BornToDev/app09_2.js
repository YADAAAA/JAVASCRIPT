function toCelsius(fahrenheit) {
    let value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + " Celsius"
}

function display(elemenId, value) {
    document.getElementById(elemenId).innerHTML = value
}

function toFahrenheit(celsius) {
    let value = (celsius * 9) / 5 + 32
    return value.toFixed(2) + " Farenheit"
}

function program1(value){
    alert(toCelsius(value))
}

function program2(value){
    alert(toFahrenheit(value))
}
