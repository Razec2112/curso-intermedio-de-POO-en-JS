//proceso para copiar un objeto: para copiar un ojeto se debe realizar un shalow copy que refiere a crear un segundo objeto en base a las propiedades del segundo objeto
const obj1 = {
a: "a",
b: "b",
c: {
    d:"d",
    e:"e",
}
};

const obj2 = {};

//shallow copy con for, funciona excepto cuando las propiedades del objeto a copiar no son objetos ya que este metodo copia el sitio en la memoria de la propiedad que es un objeto
for (prop in obj1) {
    obj2[prop] = obj1[prop]
}

const obj3 = Object.assign({}, obj1)//hace la misma funcion que el ciclo for

const obj4 = Object.create(obj1)