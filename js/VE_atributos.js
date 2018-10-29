
var atributos = 
[
	{ nbatr : "Fuerza" , nbmod : "FUE" },
	{ nbatr : "Destreza" , nbmod : "DES" },
	{ nbatr : "Constitución" , nbmod : "CON" },
	{ nbatr : "Inteligencia" , nbmod : "INT" },
	{ nbatr : "Sabiduría" , nbmod : "SAB" },
	{ nbatr : "Carisma" , nbmod : "CAR" },
]

function indiceAtributoMod(nbmod) {
	for (iatr=0; iatr < atributos.length; iatr++) {
		if (atributos[iatr].nbmod == nbmod ) {
			return iatr;
		}
	}
	return -1;
}


function indiceAtributoNb(nbatr) {
	for (iatr=0; iatr < atributos.length; iatr++) {
		if (atributos[iatr].nbatr == nbatr ) {
			return iatr;
		}
	}
	return -1;
}

