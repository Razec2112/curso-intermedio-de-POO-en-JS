const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourses(newCourse) {
        console.log("this", this)
        console.log("this.approvedCourses",this.approvedCourses)
        this.approvedCourses.push(newCourse);
    }
};

// console.log(Object.keys(juan))
// console.log(Object.getOwnPropertyNames(juan))
// console.log(Object.entries(juan))


// Object.defineProperty(juan, "navigator", {
//     value: "Chrome",
//     enumerable: false,// hace que no se pueda enumerar en un array cuando se usa el Object.keys
//     writable: true,
//     configurable: true,
// }) 

// Object.defineProperty(juan, "editor", {
//     value: "VSCode",
//     enumerable: true,
//     writable: false,// evita que el valor de la propiedad se cambie, pero si se puede eliminar
//     configurable: true,
// }) 

// Object.defineProperty(juan, "terminal", {
//     value: "WSL",
//     enumerable: true,
//     writable: true,
//     configurable: false,// evita que la propiedad se pueda borrar
// }) 

// Object.defineProperty(juan, "pruabaNASA", {
//     value: "Extraterrestre",
//     enumerable: false,
//     writable: false,
//     configurable: false,
// }) 

// Object.seal(juan)//cambia la propiedad configurable de todas las propiedades a false
Object.freeze(juan)// cambia las propiedades configurable y writable de todas las propiedades a false

console.log(Object.getOwnPropertyDescriptors(juan))