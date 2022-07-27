
let name = prompt("adınızı giriniz");

let info = document.querySelector("#myName");
info.innerHTML = `${name}`

let clock = document.querySelector("#myClock")
clock.innerHTML = `${Date()}`
