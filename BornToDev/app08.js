//while เปรียบเหมือน if แต่เปลี่ยนจาก if เป็น while

while(prompt("ถ้าจะออกพิมพ์ ออก : ") != "ออก"){
    document.getElementById("result").innerHTML += " ไม่ได้พิมพ์ ออก " + "<br>"
}
