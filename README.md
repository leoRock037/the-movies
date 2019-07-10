# Componentes

Jerarquia de los componentes

```
the-movies
└── src
    └── App.js
        └── Header.js
        └── MoviesWrapper.js
            └── MoviesList.js
                └── Movie.js
                    └── MovieDetail.js
                        └── MovieVideo.js
```

Responsabilidad de los componentes

## App Component

```
src/App.js
```
Este componente es la base pricipal de la aplicación define el layout de la pagina.


## Header Component

```
src/Header.js
```
Este Componente renderiza una pelicula recomendada escogiendo de forma aleatoria una pelicula del listado trending de la semana.


## MoviesWrapper Component

```
src/MoviesWrapper.js
```
Este Componente se encarga de consultar el listado de peliculas y hacer filtrado por nombre y categoria.


## MoviesList Component

```
src/MoviesList.js
```
Este Componente se encarga de recibir el resultado de las peliculas y listarlas


## Movie Component

```
src/Movie.js
```
Este Componente se encarga de renderizar los datos principales de la pelicula (poster y nombre)

## MovieDetail Component

```
src/MovieDetail.js
```
Este Componente se encarga de consultar y renderizar el detalle de una pelicula


## MovieVideo Component

```
src/MovieVideo.js
```
Este Componente se encarga de consultar los videos de una pelicula y renderizar un video de YouTube


Preguntas

1. ¿ En qué consiste el principio de responsabilidad única? ¿Cuál es su propósito?

Respuesta: El principio de responsabilidad única consiste en que una clase tenga una unica responsabilidad, es decir que cambie solo por una razón buscando que la clase no haga mas de lo que deberia hacer,
evitando acoplar responsabilidades para asi tener un buen díseño de la aplicacion y que esta adicionalmente se facil de mantener

2. ¿Qué características tiene, según su opinión, un “buen” código o código limpio?

Respuesta: Un buen código o código limpio es el que esta estructurado por alguna arquitectura, guiado por patrones, que busque la reutilización de código y sea fácil de mantener, que al memento de ser escrito siga la guia de estilos del lenguaje y 
adicionalmente el buen código es aquel que cuenta con documentación y esta guiado y respaldado por pruebas.


## Available Scripts
In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


