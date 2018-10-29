var ptos_ini = 4;
var ptos_niv = 2;

var habilidades = [ "Alerta", "Comunicación", "Manipulación", "Erudición", "Subterfugio", "Supervivencia" ];


function indiceHabilidad(nbHab) {
	for (ihb=0; ihb < habilidades.length; ihb++) {
		if (habilidades[ihb] == nbHab ) {
			return ihb;
		}
	}
	return -1;
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function puntuaciones(nivel) {
	phab = [];
	ptos = []
	for (ihab = 0; ihab < habilidades.length; ihab++) {
		if ( ihab < ptos_ini ) {
			phab.push(1);
		}
		else {
			phab.push(0);
		}
		ptos.push(0);
	}
	for (iniv = 1; iniv < nivel; iniv++) {
		phab = shuffle(phab);
		for (ihab = 0; ihab < ptos_niv; ihab++) {
			phab[ihab] ++;
		}
	}
	
	phab = shuffle(phab);
	hab = []; 
	
	for (ihab = 0; ihab < habilidades.length; ihab++) {
		hab.push(habilidades[ihab]);
	}
	hab = shuffle(hab);
	for (ihab = 0; ihab < hab.length; ihab++) {
		ptos[indiceHabilidad(hab[ihab])] = phab[ihab];
	}
	return ptos;
}
