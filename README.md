[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7322992&assignment_repo_type=AssignmentRepo)
# Tarea 1 - Grupo 9

---

## Integrantes

| **Nombre**            | **github** | **mail**          |
|-----------------------|------------|-------------------|
| Gerardo Crot          | gicrot     | gicrot@uc.cl      |
| María Josefa Espinoza | mjespinoza | mjespinoza2@uc.cl |
| Julio Andrade         |  julioa    | jnandrade@uc.cl   |

## Entrega

Como se usa node.js se debe instalar inicialmente los paquetes con `npm install`.

Para iniciar el simulador se debe hacer mediante `node index.js`.

## Funcionamiento del juego

El juego parte preguntando por la cantidad de jugadores que habrán en la partida, donde se debe escribir un input de tipo `int` de 2 en adelante.

Lo siguiente es que el juego preguntará por los nombres de los jugadores 1 en 1.

Por último, y en la parte más importante, se da inicio al juego. Para esto se le solicitará a cada jugador indicar sus jugadas de una en una en orden, donde se deben ingresar de la siguiente forma:
* `SB`: Si la jugada fue un SB.
* `DB`: Si la jugada fue un DB.
* `[mult, point]`: Si la jugada fue en otro lado del tablero, donde `mult` es el multiplicador del puntaje (1, 2 o 3), y `point` es el puntaje obtenido sin contar el multiplicador.

Al final de cada turno se mostrará un log indicando los puntajes actuales de cada jugador.

Finalmente, cuando un jugador llega a 0 puntos, se termina el juego y se indica el ganador.

Como ejemplo, un turno X se vería de la siguiente forma:
```
Ingresa tu primer tiro, <Jugador>:
>> SB
Ingresa tu siguiente tiro, <Jugador>:
>> DB
Ingresa tu siguiente tiro, <Jugador>:
>> [3,20]

Puntajes actuales:
Jugador <Jugador>: 366 puntos
Jugador <2do jugador>: 251 puntos
```


--- 
## Objetivo

El objetivo es desarrollar una solución funcional en JavaScript a un problema de cierta complejidad.  Se espera que utilicen el máximo de elementos funcionales posibles.  Por ejemplo:
* Combinators
* Iterators y Generators
* La librería Lodash
* Currying y partial evaluation
* Composición y Pipes
* Chaining 

## Problema

Se trata de implementar una simulación de un juego de dardos

En un juego de dardos, los jugadores toman turnos para lanzar 3 dardos a un blanco.  Los puntos obtenidos en cada lanzamiento se cuentan de acuerdo al siguiente esquema:
* el puntaje base obtenido por cada dardo depende del lugar en que quede (así puede caer en el 20, en el 9, etc) pero ...
* … hay un multiplicador de ese puntaje base que depende del punto exacto del sector correspondiente al número (x1, x2 y x3). Así un dardo que cayó en la zona del 20 podría tener un x3 y dar 60 puntos
* hay 2 casos especiales que corresponden a aciertos en el centro mas pequeño (Double Bull o DB) que entrega 50 puntos o en un círculo mas grande (Single Bull o SB) que da 25 puntos
* si el dardo no cae en una zona punteada corresponde a un Null y gana 0 puntos

Los jugadores (a lo menos 2) parten con 501 puntos al inicio de la competencia.  A este número se le va restando lo obtenido en los lanzamientos hasta llegar a cero.  Es importante llegar a cero en forma exacta puesto que si se llega a un valor negativo, es número en valor absoluto passa a ser el puntaje del jugador (por ejemplo el jugador tenía 20 puntos y obtiene 30 en sus lanzamientos, entonces 20 - 30 = -10 y quedaría con 1o puntos)

Como se sugiere  implementar:
1. Una función que reciba el nombre del jugador, su puntaje y sus lanzamientos y devuelva el nuevo score del jugador
2. Una función que inicializa el juego dejando a cada jugador con 501 puntos
3. Una función que permita manejar el diálogo con el simulador

Pueden descomponer el problema de otra forma, pueden usar otro formato para la entrada de puntajes, etc.  Lo importante es que el programa funcione como se indica, pero en este caso es **mucho más importante el mantenerse dentro del paradigma funcional**.
