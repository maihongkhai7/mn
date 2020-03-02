let a=new Date(2019,7,10,16,15)//2019,7,10,16,15
let y=a.getFullYear()
let m=a.getMonth()
let d=a.getDate()
let b=new Date(y,m,d,16,15)
console.log(y,m,d)
console.log(b.getTime())
//604800000 7ngay
module.exports=a.getTime()