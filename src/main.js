/*DESAFÍO COMPLEMENTARIO - Crear un algoritmo utilizando un ciclo*/

for (let i = 0; i <= 10; i++) {
    const resultado = i % 2;
    if (resultado === 0) {
        console.log(`este numero es par ${i}`); //ECMA6
    } else {
        console.log(`este numero es impar ${i}`); //ECMA6
    }
}

const proyectosFinales = [10, 3, 4, 7, 1, 9, 5, 6, 8, 2];
for (let i = 0; i <= 9; i++) {
    if (proyectosFinales[i] >= 6) {
        console.log(`el alumno ${i} aprobo con ${proyectosFinales[i]}`);
    } else {
        console.log(`el alumno ${i} desaprobo con ${proyectosFinales[i]}`);
    }
}












