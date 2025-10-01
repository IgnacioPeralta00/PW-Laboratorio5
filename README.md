# PW-Laboratorio5

## Pregunta pagina 13
### ¿Qué significa className en React? ¿las props tienen un limite? ¿Quién define las props? 
#### ClassName
className es el atributo que usamos en React para asignar clases CSS a los elementos, en lugar de class que se usa en HTML normal.

- En JavaScript, class es una palabra reservada (para crear clases).
- React usa JSX, que es una extensión de JavaScript.
- Para evitar conflictos, React usa className en lugar de class.
``` js
// En React
<div className="mi-clase card-scientist">

// En HTML
<div class="mi-clase">
```

#### Límite de las props
No hay un límite técnico estricto, pero sí hay mejores prácticas. Se pasar tantas props como deseemos a un componente:
El "límite" práctico viene por:

1. Mantenibilidad: Demasiadas props hacen el código difícil de leer
2. Desempeño: Cada cambio de prop causa re-renderizado
3. Organización: Si necesitas muchas props, puede que el componente realice demasiadas cosas

Ejemplo de buena practica con props:
```jsx
// Demasiadas props
<CardScientist name="Marie" profession="Física" awards="Nobel" discoveries="Radio" image="url" color="blue" size="large" />

// Mejor organizacion
const scientistData = {
  name: "Marie",
  profession: "Física", 
  awards: "Nobel",
  discoveries: "Radio"
}

<CardScientist data={scientistData} image="url" />
```

#### Definición de las props
El componente PADRE define qué props envia mientras que el componente hijo define que cuales recibe/espera:
```jsx
// App pasa las props con valores específicos
function App() {
  return (
    <CardScientist 
      name="Albert Einstein"
      profession="Físico"
      awards="Nobel de Física 1921"
    />
  );
}
// CardScientist define qué props espera
const CardScientist = ({ name, profession, awards }) => {
  // name, profession, awards están definidas aqui como parametros
  return <div>{name} - {profession}</div>;
};
```