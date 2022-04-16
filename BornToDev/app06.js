//for คือลูปที่มีการวนซ้ำที่แน่นอน

//for(var counter=0; counter<5; counter++){
//    console.log(" Hello " + counter)
//    console.log(" World " + counter)
//}
//console.log("Exit")

let qrt = prompt("จำนวนสินค้า : ")
let sum = 0

for(var i=1; i<=qrt; i++){
    let item = prompt("ราคาสินค้าชิ้นที่ " + i)
    sum = sum + parseInt(item) //แปลง data type
    document.getElementById("price-list").innerHTML += "ราคาสินค้าชิ้นที่ " + i + " : " + item + " บาท " + "<br>"
    //+= เพื่อเพิ่มข้อมูลจากข้อมูลเดิมไปเรื่อยๆ   
    document.getElementById("result").innerHTML = "ราคารวม : " + sum + " บาท "
}
