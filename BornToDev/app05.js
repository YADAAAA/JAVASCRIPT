let score = prompt("คะแนนของคุณ : ")

if(score >= 80){
    document.getElementById("result").innerHTML = "คุณได้เกรด A"
}
else if(score >= 70){
    document.getElementById("result").innerHTML = "คุณได้เกรด B"
}
else if(score >= 60){
    document.getElementById("result").innerHTML = "คุณได้เกรด C"
}
else if(score >= 50){
    document.getElementById("result").innerHTML = "คุณได้เกรด D"
}
else{
    document.getElementById("result").innerHTML = "คุณได้เกรด F"
}
