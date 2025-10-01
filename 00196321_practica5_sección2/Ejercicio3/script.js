const estanteria = {
    libros: [
        {
            nombre: 'El caballero oscuro',
            autor: 'Frank Miller',
            leído: false
        },
        {

            nombre: 'El mundo amarillo',
            autor: 'Albert Espinosa',
            leído: false,
        },
        {

            nombre: 'Harry Potter y el caliz de fuego',
            autor: 'J.K. Rowling',
            leído: true,
        },
        {

            nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
            autor: 'Miguel de Cervantes',
            leído: false
        },
        {

            nombre: 'Berserk',
            autor: 'Kentaro Miura',
            leído: true
        },
        {

            nombre: 'Ilíada',
            autor: 'Homero',
            leído: false
        }],
    log() {
        const { libros } = this;
        let resultado = ''
        for (const libro of libros) {
            const prefijo = libro.leído ? 'Ya has' : 'Aun no has';
            resultado = `${resultado}
    ${prefijo} leído ${libro.nombre} de ${libro.autor}`
        }
        console.log(resultado)
    },
    sugerencia() {
        const librosNoLeidos = this.libros.filter(libro => !libro.leído)
        const indiceRandom = Math.floor(librosNoLeidos.length * Math.random())
        const elementoRandom = librosNoLeidos[indiceRandom]
        console.log(`Te sugiero ${elementoRandom.nombre} de ${elementoRandom.autor}`)
    }
};

estanteria.log()
estanteria.sugerencia()

