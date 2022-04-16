function sayHello(username, userlastname) {

    return " Hello " + username + " " + userlastname //โบยข้อมูลออกไปหน้าฟังก์ชั่น
}

function getage() {
    return 19
}

let userinput1 = prompt("input your name :")
let userinput2 = prompt("input your lastname :")
alert(sayHello(userinput1 , userinput2))
alert(getage())
//ส่งตัวเลข,สตริง,บูลีน ใส่ typeof ได้
