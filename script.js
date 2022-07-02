'use strict'
//interface
let fortuna = 0;
let fortunaPorSegundo = 0;
let trabalharBtn = document.querySelector('#trabalhar')

//variáveis 

//functions 
const soma= (num1, num2)=>{
    return num1+num2;
}
const subtrair= (a,b)=>{
    return a-b
}
//atualizar display
const atualizarDisplayAgora = ()=>{
    let fortunaScreen = document.querySelector('#fortuna')
    let fortunaPorSegundoScreen = document.querySelector('#fortunaPorSegundo');
    fortunaScreen.textContent = fortuna.toFixed(2).toLocaleString('en-us')
    fortunaPorSegundoScreen.textContent = fortunaPorSegundo.toFixed(2).toLocaleString('en-us')
}
const atualizarDisplay = ()=>{
    let fortunaScreen = document.querySelector('#fortuna')
    let fortunaPorSegundoScreen = document.querySelector('#fortunaPorSegundo');
    const intervalo =  setInterval(() => {
        fortunaScreen.textContent = fortuna.toFixed(2).toLocaleString('en-us');
        fortunaPorSegundoScreen.textContent = fortunaPorSegundo.toFixed(2).toLocaleString('en-us');

        fortuna = soma(fortunaPorSegundo, fortuna);
        console.log(intervalo)
    }, 2000);
}
//trabalhar 
const trabalhar = ()=>{
    fortuna++;
    atualizarDisplayAgora()
}
trabalharBtn.addEventListener('click', trabalhar);

//comprar comercio
const comprarComercio = (e)=>{
    let precoComercio = parseFloat(e.target.textContent);
    if(fortuna>=parseFloat(e.target.textContent)){
        
        
        fortuna = subtrair(fortuna, precoComercio)
        fortunaPorSegundo = soma(fortunaPorSegundo, precoComercio);
        atualizarDisplayAgora()
        console.log(`${fortuna}-${precoComercio} = ${subtrair(fortuna, precoComercio)}`)
    } else{
        alert('voccê é pobre')
    }
}
document.querySelectorAll('.nicho').forEach((item)=>{
    item.children[2].children[0].addEventListener('click', comprarComercio)
})
atualizarDisplay()