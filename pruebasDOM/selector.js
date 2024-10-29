// 1. Seleccionar los botones
let botones = document.querySelectorAll('button')
console.log(botones)

// 2. Seleccionar los h1
let encabezados1 = document.querySelectorAll('h1')
console.log(encabezados1)

// 3. Seleccionar solo el primer encabezado1
let primerEncabezado1 = document.querySelector('h1')
console.log(primerEncabezado1)

// 4. Seleccionar el segundo encabezado1
console.log(encabezados1[1])

// 5. Seleccionar elementos de la clase "relevant"
let relevants = document.querySelectorAll('.relevant')
console.log(relevants)

// 6. Seleccionar la etiqueta mark
let highlighted = document.querySelector('mark')
console.log(highlighted)

// 7. Seleccionar los li que son relevant.
let liRelevant = document.querySelectorAll('li.relevant')
console.log(liRelevant)

// 8. Seleccionar los elementos que son relevant y subline al mismo tiempo
let relevantSubline = document.querySelectorAll(".relevant.subline")
console.log('8', relevantSubline)

// 8b. Seleccionar los elementos que son relevant o subline al mismo tiempo
console.log('8b', document.querySelectorAll(".relevant, .subline"))

// 9. Seleccionar los enlaces que están en el menú de navegacion
let navLinks = document.querySelectorAll('nav a')
console.log('9', navLinks)

// 10. Selecciona el botón que está desabilitado
//let buttonDisabled = document.querySelector("button[disabled]")
let buttonDisabled = document.querySelector("button:disabled")
console.log('10', buttonDisabled)

// 11. Selecciona el botón que tiene alguna acción de click
let buttonClick = document.querySelectorAll("button[onclick]")
console.log(11, buttonClick)

// 12. Selecciona el encabezado con identificador article2
console.log(12, document.querySelectorAll('h1#article2'))

// 13. Selecciona los elementos subline que están dentro de un párrafo relevante
console.log(13, document.querySelectorAll('p.relevant .subline'))

// 14. Selecciona los th del encabezado de la tabla
console.log(14, document.querySelectorAll('thead th'))

// 15. Selecciona los th que son relevantes del encabezado de la tabla
console.log(15, document.querySelectorAll('thead th.relevant'))

// 16. Selecciona los th que unen dos celdas de la fila
console.log(16, document.querySelectorAll('th[colspan="2"]'))

// 17. Selecciona el enlace que te dirige a las galletas
console.log(17, document.querySelectorAll('a[href="https://ieslasgalletas.org/"]'))

// 18. Selecciona los enlaces externos a la web
console.log(18, document.querySelectorAll('a[href^="https://"]'))

// 18b. Selecciona los enlaces que no son externos
console.log('18b', document.querySelectorAll('a:not([href^="https://"])'))

// 19. Selecciona los td relevantes del cuerpo de la tabla
console.log(19, document.querySelectorAll('tbody td.relevant'))

// 20. Se los encabezados1 que son hijos de primer nivel de un header
console.log(20, document.querySelectorAll('header > h1'))

// 21. Selecciona las secciones que están debajo de un header (al mismo nivel)
console.log(21, document.querySelectorAll('header + section'))

// 22. Selecciona la primera celda de cada fila del cuerpo de la tabla
console.log(22, document.querySelectorAll("td:first-child"))

// 22b. Selecciona la primera celda de cada fila de la tabla (tanto th como td)
//console.log("22b", document.querySelectorAll("td:first-child, th:first-child"))
console.log("22b", document.querySelectorAll("table tr :first-child"))

// 23. Selecciona los td pares.
console.log("23", document.querySelectorAll("td:nth-child(even)"))

// 24. Selecciona párrafos que tengan dentro algún span
console.log("24", document.querySelectorAll("p:has(span)"))

// 25. Selecciona el último elemento de cada lista
console.log("25", document.querySelectorAll("li:last-child"))

// 26. Selecciona la tercera columna del cuerpo de la tabla. 
console.log("26", document.querySelectorAll("tbody td:nth-child(3)"))

