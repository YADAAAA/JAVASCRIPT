console.log(1 == 1)
console.log(2 == 2)
console.log(3 == 3)
console.log(4 == "4") //true because มันไม่สนใจว่าเป็นชนิดอะไร
console.log(5 == 6)

console.log("6" === "6") //เปรียบเลขและชนิดด้วย
console.log("Hello" === "Hello") //เปรียบเลขและชนิดด้วย
console.log("7" === 7) //เปรียบเลขและชนิดด้วย

console.log("4" != "4") //f
console.log("Hi" != "hi") //t

console.log(4 != "4") //f เท่ากันเพราะมัน ==
console.log(4 !== "4") //t ไม่เท่ากันเพราะมัน ===

console.log(10 > 5) //t
console.log(5 < 10) //t
console.log(9 >= 10) //f
console.log(9 <= 10) //t
console.log(10+10 <= -20) //f
