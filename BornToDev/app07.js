let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ : ")

for(var i=0; i<round; i++ ){

    var ans = prompt("หัว หรือ ก้อย : ")
    var ran = ""

    if(Math.floor(Math.random()*10) <= 4){
        ran = "หัว"
    }
    else{
        ran = "ก้อย"
    }

    if(ans == ran){
        alert("ยินดีด้วยคุณตอบถูก")
    }
    else{
        alert("เสียใจด้วยคุณตอบผิด")
    }
}

console.log(ran + " : " + ans)
