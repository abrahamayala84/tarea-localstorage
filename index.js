


const anotar = document.querySelector('#anotar');
const add_submit = document.getElementById('add');
const eliminar = document.getElementById('eliminar');
const dvd = document.querySelector('.lista')

document.addEventListener('DOMContentLoaded', function() {

	const tareas = JSON.parse(localStorage.getItem('tareas'));
if (!tareas) {
const p = document.createElement('p');
const text = document.createTextNode('no hay elementos');
p.appendChild(text);
dvd.appendChild(p);
}else{

if (tareas.length > 0) {

	for (let i = 0; i < tareas.length; i++) {
showTareas(tareas[i]);
	}
}else{
	const p = document.createElement('p');
const text = document.createTextNode('no hay elementos');

p.appendChild(text);
dvd.appendChild(p);

}

console.log(tareas.length);

add_submit.addEventListener('click', function(){
const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
const nuevoNombre = anotar.value;
console.log(anotar.value);
tareas.push(nuevoNombre);
localStorage.setItem('tareas', JSON.stringify(tareas));

dvd.innerHTML = "";

for (let i = 0; i < tareas.length; i++) {
	const p = document.createElement('p');
	const text = document.createTextNode(tareas[i],);
	p.appendChild(text);
    dvd.appendChild(p);

	
	

}});

}});


function showTareas(tareas, i){
	const div = document.createElement('div');

	const p = document.createElement('p');
	const text = document.createTextNode(tareas[i]);
	p.appendChild(text);
	
	
	const boton = document.createElement('button');
	const textBoto = document.createTextNode('eliminar');
	boton.appendChild(textBoto);
	boton.onclick = ( ) => {
		delet (i);
	}
	
	div.appendChild(p);
	div.appendChild(boton);
	dvd.appendChild(div)

}

function delet (i){
var tareas = JSON.parse(localStorage.getItem('tareas')) || [];
tareas = tareas.filter((value, index) => index !== i);
localStorage.setItem('tareas', JSON.stringify(tareas));

dvd.innerHTML ="";
for (let i = 0; i < tareas.length; i++){
	showTareas(tareas, i)
}

}