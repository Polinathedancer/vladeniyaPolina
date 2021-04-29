document.querySelector(".plus").onclick=function(){
    
    let hislo1 =document.querySelector(".hislo1").value
    let hislo2 =document.querySelector(".hislo2").value
    alert(+hislo1 + +hislo2)
}
document.querySelector(".minys").onclick=function(){

    let hislo1 =document.querySelector(".hislo1").value
    let hislo2 =document.querySelector(".hislo2").value
    alert(+hislo1 - +hislo2)
}
document.querySelector(".ymnozenie").onclick =function(){
    let hislo1 =document.querySelector(".hislo1").value
    let hislo2 =document.querySelector(".hislo2").value
    alert(+hislo1 * +hislo2)
}
document.querySelector(".delenie").onclick =function(){
    let hislo1 =document.querySelector(".hislo1").value
    let hislo2 =document.querySelector(".hislo2").value
    alert(+hislo1 / +hislo2)
}       

//P = (a + b) * 2
//S = a * b
document.querySelector(".perimeter").onclick =function(){
    let hislo1 =document.querySelector(".hislo1").value
    let hislo2 =document.querySelector(".hislo2").value
    alert((+hislo1 + +hislo2) * 2)
}       

document.querySelector(".area").onclick =function(){
    let hislo1 =document.querySelector(".hislo1").value
    let hislo2 =document.querySelector(".hislo2").value
    alert(+hislo1 * +hislo2 )
}

document.querySelector(".stepen").onclick =function(){
    let hislo1 =document.querySelector(".hislo1").value
    let hislo2 =document.querySelector(".hislo2").value
    alert(hislo1 ** hislo2 )
}       