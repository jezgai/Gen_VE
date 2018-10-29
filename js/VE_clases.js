
var clases =
[
	{
	  nombre : "Guerrero",
	  talentos : [ { niv : 1, tln : ["Lucha con X", "Ataques Múltiples"]}, { nivel : 6, tln : ["Ataque certero"]} ],
	  daguante : 8,
	  atrs : [ "FUE" , "CON", "DES" ],
	  atq : [ 0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9],
	  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
	},
	{
	  nombre : "Hechicero",
	  talentos : [ { niv : 1, tln : ["Sensibilidad Mágica", "Transferir Esencia"]}, { nivel : 6, tln : ["Sirviente animal"]} ],
	  daguante : 4,
	  atrs : [ "INT" , "SAB", "CAR" ],
	  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5],
	  pod : [ 1, 2, 4, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22],
	  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
	},
	{
	  nombre : "Bribón",
	  talentos : [ { niv : 1, tln : ["Emboscar" , "Dedos Ágiles"]}, { nivel : 6, tln : ["Leer magia"]} ],
	  daguante : 6,
	  atrs : [ "DES" , "INT", "CAR" ],
	  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 7],
	  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11],
	},
	{
	  nombre : "Bardo",
	  talentos : [ { niv : 1, tln : ["Leer lenguajes" , "Encantar persona/monstruo"]}, { nivel : 6, tln : ["Sensibilidad Mágica"]} ],
	  daguante : 6,
	  atrs : [ "DES" , "INT", "CAR" ],
	  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6],
	  pod : [ 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 10, 11, 12],
	  ins : [ 0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10],
	},
	{
	  nombre : "Clérigo",
	  talentos : [ { niv : 1, tln : ["Sensibilidad a la fe", "Expulsar muertos"]}, { nivel : 6, tln : ["Manos sanadoras"]} ],
	  daguante : 6,
	  atrs : [ "INT" , "SAB", "CON" ],
	  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6],
	  pod : [ 1, 2, 4, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22],
	  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
	},
	{
	  nombre : "Multiforme",
	  talentos : [ { niv : 1, tln : ["Transformación" , "Guardabosques"]}, { nivel : 6, tln : ["Habla animal"]} ],
	  daguante : 6,
	  atrs : [ "DES" , "SAB", "FUE" ],
	  atq : [ 0, 0, 1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 7],
	  pod : [ 1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 9, 10, 10],
	  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 11],
	},
]

function talentos(clase, nivel) {
	tal = [];
	for (intal=0; intal<clase.talentos.length && intal<clase.talentos[intal].nivel; intal++) {
		for (ital=0; ital < clase.talentos[intal].tln.length; ital++) {
			tal.push(clase.talentos[intal].tln[ital]);
		}
	}
	return tal;
}

function pv(clase, nivel) {
	ptos = clase.daguante;
	for (ipv=1; ipv<nivel; ipv++) {
		ptos += Math.floor(Math.random() * clase.daguante) + 1;
	}
	return ptos;
}

function atq(clase, nivel) {
	iatq = nivel - 1;
	if ( nivel > clase.atq.length ) {
		iatq = clase.atq.length - 1;
	}
	return clase.atq[iatq];
}


function pod(clase, nivel) {
	ipod = nivel - 1;
	if ( nivel > clase.pod.length ) {
		ipod = clase.pod.length - 1;
	}
	return clase.pod[ipod];
}

function ins(clase, nivel) {
	iins = nivel - 1;
	if ( nivel > clase.ins.length ) {
		iins = clase.ins.length - 1;
	}
	return clase.pod[iins];
}
