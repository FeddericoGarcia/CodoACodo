//Declarando variables de costos
const VALOR_TKT = 200;
const DESC_EST = 80;
const DESC_TRA = 50;
const DESC_JUN = 15;

//Obteniendo DOM
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var cant_tkt = document.getElementById("cantTicket");
var categ_tkt = document.getElementById("categTicket").value;
var pagarTotal = document.getElementById("pagarTotal");

//Limpiar inputs
btn_delete.addEventListener('click', ()=>{
    let classForm = document.querySelectorAll(".form-control, .form-select");
    for (let i = 0; i < classForm.length; i++) {
        classForm[i].classList.remove("is-invalid");
    }

});

//Cargar de datos
btn_resm.addEventListener('click', ()=>{

    if(firstName === ""){
        firstName.classList.add("invalid-feedback");
        console.log(firstName);
        firstName.focus();
        return;
    }
    if(lastName === ""){
        lastName.classList.add("invalid-feedback");
        console.log(lastName);
        lastName.focus();
        return;
    }
    if(email === ""){
        email.classList.add("invalid-feedback");
        console.log(email);
        email.focus();
        return;
    }
    if(cant_tkt.value === "" || cant_tkt.value == NaN){
        cant_tkt.classList.add("invalid-feedback");
        console.log(cant_tkt.value);
        cant_tkt.focus();
        return;
    }
    if(categ_tkt.value == "" || cant_tkt.value == NaN){
        categ_tkt.classList.add("invalid-feedback");
        console.log(categ_tkt.value);
        categ_tkt.focus();
        return;
    }

    calcularResumen(cant_tkt.value, categ_tkt.value);
    
});

//Calcular y retornar
function calcularResumen(cant, categ){

    categ_tkt = 1 ? pagarTotal.innerHTML = `${cant / ESC_EST * VALOR_TKT}` : 0
    categ_tkt = 2 ? pagarTotal.innerHTML = `${cant * VALOR_TKT / desc_tra}` : 0
    categ_tkt = 3 ? pagarTotal.innerHTML = `${cant * VALOR_TKT / desc_jun}` : 0
    categ_tkt = 4 ? pagarTotal.innerHTML = `${cant * VALOR_TKT}` : 0
    console.log(cant)
    console.log(categ_tkt)
    console.log(`${2 * VALOR_TKT / DESC_EST}`)

}