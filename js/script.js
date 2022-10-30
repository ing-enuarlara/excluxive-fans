/*const btnMenu=document.querySelector("#btnMenu");
const menu=document.querySelector("#menu");
const btnCerrar=document.querySelector("#btnCerrar");

btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});
btnCerrar.addEventListener("click", function(){
    menu.classList.toggle("hidden");
});*/

function abrir($id){
    document.getElementById($id).style.display="block";
};
function cerrar($id){
    document.getElementById($id).style.display="none";
};