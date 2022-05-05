document.addEventListener("DOMContentLoaded", function() {
    let btnscope = document.querySelector('.scope');

    btnscope.addEventListener('click', function() {
        document.write("console.clear() <br>" +
                "let x = 1;<br>" + 
                "if (x === 1) {<br>" +
                "let x = 2;<br>" +
                "console.log(x); /* 2 */<br>" +
                "}<br>" +
                "console.log(x); /* 1 */<br>" +
                "var y = 1;<br>" +
                "if (y === 1) {<br>"+
                    "var y = 2;<br>"+
                    "console.log(y); /* 2*/<br>"+
                "}<br>" +
                "console.log(y); /* 2 */<br>" +
                "let a = 'Hola';<br>" +
                "a = 'adios'; /* OK */<br>" +
                "console.log(a); /* adios */<br>" +
                "const b = 10;<br>" +
                "b = 11; /* Error*/");

        console.clear();
        let x = 1;
        if (x === 1) {
            let x = 2;
            console.log(x); // 2
        }
        console.log(x); // 1
        var y = 1;
        if (y === 1) {
            var y = 2;
            console.log(y); // 2
        }
        console.log(y); // 2

        let a = 'Hola';
        a = 'adios'; // OK
        console.log(a); // adios
        const b = 10;
        b = 11; // Error
        console.log(b) // Error
    })

    let plantillaString = document.querySelector('.plantillaString')

    plantillaString.addEventListener('click', function() {
        document.write("const resultado = `El total es ${10 + 20}`;<br>" +
                        "function saludar(nombre) {<br>" +
                            "return `Hola ${nombre}`;<br>"  +
                        "}");
        
        const resultado = `El total es ${10 + 20}`;
        function saludar(nombre) {
            return `Hola ${nombre}`;
        }
        document.write("<br><br>" + resultado + "<br><br>");
        document.write(saludar('Victor'));
    })

    let arrowFunction = document.querySelector('.arrowFunction')

    arrowFunction.addEventListener('click', function() {
        document.write("const sumar = (a, b) => a + b; /* 2, 3 */<br>" +
                        "const saludar = nombre => `Hola ${nombre}`;")
        const sumar = (a, b) => a + b;
        const saludar = nombre => `Hola ${nombre}`;

        document.write("<br><br>")
        document.write(sumar(2, 3))
        document.write("<br><br>")
        document.write(saludar('Victor'))
    })

    let destructuracion = document.querySelector('.destructuracion')

    destructuracion.addEventListener('click', function() {
        document.write("const numbers = [1, 2, 3, 4]; <br>" +
                        "const [one, two] = number;<br>" +
                        "console.log(one); // 1<br>" +
                        "console.log(two); // 2<br>" +
                        "const person = {<br>" +
                        "    name: 'Pedro',<br>" +
                        "    lastName: 'Gomez',<br>" +
                        "    animal: 'Cat'<br>" +
                        "};<br>" +
                        "const { animal } = person;<br>" +
                        "console.log(animal); // 'Cat'");

        const person = {
            name: 'Pedro',
            lastName: 'Gomez',
            animal: 'Cat'
        };
        const { animal } = person;
        console.log(animal); // 'Cat'
    })

    let btnrest = document.querySelector('.btnrest')

    btnrest.addEventListener('click', function() {
        document.write("const user = {<br>" +
                        "  id: '1234',<br>" +
                        "  name: 'Juan'<br>" +
                        "};<br>" +
                        "const { id, ...userNoId } = user; <br>" +
                        "console.log(id); //'1234'<br>" +
                        "console.log(userNoId); // {name: 'Juan'}<br>" +
                        "// Tambien podemos usarlo en funciones<br>" +
                        "const saludarPersona = ({ name }) => `Hola, ${name}`;<br>" +
                        "console.log(saludarPersona(user)); // 'Hola, Juan'")

        const user = {
            id: '1234',
            name: 'Juan'
        };
        const { id, ...userNoId } = user;
        console.log(id); //'1234'
        console.log(userNoId); // {name: 'Juan'}
        // Tambien podemos usarlo en funciones
        const saludarPersona = ({ name }) => `Hola, ${name}`;
        console.log(saludarPersona(user)); // 'Hola, Juan'
    })

    let btnspread = document.querySelector('.btnspread')

    btnspread.addEventListener('click', function() {
        document.write("const numbersLowerThanFive = [1,2,3,4]<br>" +
                        "const numbersGreaterThanFive = [6,7,8,9]<br>" +
                        "const numbersOneToTen = [<br>" +
                        "    ...numbersLowerThanFive,<br>" +
                        "    5,<br>" +
                        "    ...numbersGreaterThanFive,<br>" +
                        "    10<br>" +
                        "]<br>" +
                        "console.log(numbersOneToTen) // 1,2,3,4,5,6,7,8,9,10")

        const numbersLowerThanFive = [1,2,3,4]
        const numbersGreaterThanFive = [6,7,8,9]
        const numbersOneToTen = [
            ...numbersLowerThanFive,
            5,
            ...numbersGreaterThanFive,
            10
        ]
        console.log(numbersOneToTen) // 1,2,3,4,5,6,7,8,9,10
    })

    let btnclases = document.querySelector('.btnclases');

    btnclases.addEventListener('click', function() {
        document.write("class Animal {<br>" +
                        " constructor(kind, name, sound) {<br>" +
                        "   this.name = name;<br>" +
                        "   this.kind = kind;<br>" +
                        "   this.sound = sound;<br>" +
                        " }<br>" +
                        " doSound() {<br>" +
                        "    console.log(`${this.sound.toUpperCase()}!`);<br>" +
                        " }<br>" +
                        "}<br>" +
                        "class Dog extends Animal {<br>" +
                        "constructor(name) {<br>" +
                        "   super('Dog', name, 'Woof');<br>" +
                        "}<br>" +
                        "giveLove() {<br>" +
                        "   console.log(`Soy ${this.name} hermoso`);<br>" +
                        "   this.doSound();<br>" +
                        "}<br>" +
                        "}<br>" +
                        "const firulais = new Dog('Firulaus');<br>" +
                        "firulais.doSound(); // 'WOOF!'<br>" +
                        "firulais.giveLove(); // 'Soy Firulaus y soy hermoso\nWOOFF!'")

        class Animal {
        constructor(kind, name, sound) {
            this.name = name;
            this.kind = kind;
            this.sound = sound;
        }
        doSound() {
            console.log(`${this.sound.toUpperCase()}!`);
        }
        }
        class Dog extends Animal {
        constructor(name) {
            super('Dog', name, 'Woof');
        }
        giveLove() {
            console.log(`Soy ${this.name} hermoso`);
            this.doSound();
        }
        }
        const firulais = new Dog('Firulaus');
        firulais.doSound(); // 'WOOF!'
        firulais.giveLove(); // 'Soy Firulaus y soy hermoso\nWOOFF!'
    })  
});