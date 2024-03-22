// let h1=document.querySelector("h1");


// let imagen =document.getElementById("imagen");

// console.log(h1);
// console.log({
//     h1,
    
// })

// h1.innerHTML= "hola "

// let img=document.createElement('img');
// img.setAttribute('scr','https://static.platzi.com/static/images/conf/logo_black@2x.png')

// console.log(img)
// imagen.innerHTML="",
// imagen.append(img)





const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const calcula =document.querySelector('#calcular');
const resultado=document.querySelector('.respuesta');

calcula.addEventListener('click',btnonclick);

function btnonclick(){
    let sumaDeLosInput=input1.value+input2.value;
    resultado.innerText = sumaDeLosInput;
}







































