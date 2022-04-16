let age = prompt("กรุณากรอกอายุของคุณ")

if(age <= 12){
    console.log("อายุของคุณน้อยเกินไป")
    console.log("อายุของคุณน้อยเกินไป")
    console.log("อายุของคุณน้อยเกินไป")
}
else if(age >= 13){
    console.log("สามารถเข้าชมเว็ปไซต์นี้ได้เลอ")
    console.log("สามารถเข้าชมเว็ปไซต์นี้ได้เลอ")
    console.log("สามารถเข้าชมเว็ปไซต์นี้ได้เลอ")

    document.getElementById('content01').innerHTML = "หนูแกสบี้น่ารักมากๆ"
    document.getElementById('content02').innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/gijf_76jdAc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}
else{
    console.log("กรุณากรอกข้อมูลใหม่อีกครั้ง")
}
