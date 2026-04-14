let nama = 'orthax' ;
const umur = 22;
var hobi = 'tft' ;


console.log ('halo, ini pesan dari console');
console.log ('nama:',nama)
console.log ('umur:',umur)
console.log ('hobi:',hobi)

// alert ('hello world');

let a = 15 ;
let b = 30 ;
let penjumlahan = a + b;
let pengurangan = b - a;
let perkalian = a * b;
let pembagian = b / a;

console.log(`${penjumlahan}`);
console.log(`${pengurangan}`);
console.log(`${perkalian}`);
console.log(`${pembagian}`);

let user = {nama : "orthax" , umur : 25 };
console.log(user);

let name = "Made";
let age = "10";
console.log(`Name :${nama} , age : ${age}`)
alert("monggo mase,"+nama+"!")

// Pesan error

console.error ("there a miss input")
console.warn ("yang gak tau kok tanya saya")

// function
function showAlert(){
    alert("anda mengklik tombol!");
}

// let orthn = prompt("masukan nama anda");
// let nomor = prompt("nomor telepon");
// let tinggi = prompt("masukan tinggi anda");
// console.log("nama anda :"+ orthn);
// console.log("Kontak :"+ nomor);
// console.log("Height :"+ tinggi);

const sayur = ["sawi","selada","terong","wortel"]
const ikan = ["patin","tuna","Ikan mas","Kembung"]

console.log(sayur);
console.log(ikan[0]);

ikan.pop();
console.log(ikan);

const lauk = sayur.concat(ikan);
console.log (lauk);

function hitungluaslingkaran() {
    const pi = 3.14;
    const radius = document.getElementById("jarijari").value;
    const luas = pi * radius * radius;
    window.alert( `${luas.toFixed(2)}`)
    
}