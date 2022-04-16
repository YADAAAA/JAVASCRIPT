//var = goble varible ใช้ได้ทั้งในและนอกปีกกา
//let = locol varible ใช้ได้ภายในปีกกา
//prompt() = ช่องรับข้อมูล input

//###let name = prompt("กรุณากรอกชื่อของคุณ")
//###console.log("ชื่อของคุณคือ : " + (name))
//###console.log(typeof name)

//###let num = prompt("กรอกเลขที่ต้องการซื้อ : ")
//###console.log("เลขที่คุณต้องการซื้อคือ : " + (num))

//###console.log(Math.floor(Math.random() * 100))
//ฟังก์ชั่นสุ่มลข 0 - 1

let num = prompt("กรอกเลขที่ต้องการซื้อ : ")
let ran = Math.floor(Math.random() * 10)

document.getElementById("inputnum").innerHTML = ("เลขที่คุณต้องการซื้อคือ : " + (num))
document.getElementById("randomnum").innerHTML = ("เลขที่ถูกรางวัลคือ : " + ran)
//ส่งค่า result ไปที่ id="result" ในหน้าของ index.html เพื่อแสดงตัวเลขออกมา

if(num == ran){
    document.getElementById("result").innerHTML = ("ยินดีด้วยคุณถูกรางวัล")
}
else if(num != ran){
    document.getElementById("result").innerHTML = ("เสียใจด้วยคุณไม่ถูกรางวัล")
}
