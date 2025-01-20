// ex1: Declara o clasa prin care sa reprezinți obiectul numit Mașina.

class Masina {
    constructor(marca, model, culoare, kilometraj) {
        this.marca = marca;
        this.model = model;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    }
    getMarca() {
        return this.marca;
    }

    getModel() {
        return this.model;
    }

    getCuloare() {
        return this.culoare;
    }

    getKilometraj() {
        return this.kilometraj;
    }
}

const masina1 = new Masina("VOLVO", "XC-60", "Negru", "234000");
const masina2 = new Masina("Mazda", "CX-5", "Verde", "111000");
const masina3 = new Masina("Dacia", "BIGGSTER", "Albastru", "20000");


console.log(masina1);
console.log(masina2);
console.log(masina3);

// ex2:Definește încă o clasa numita MasinaDeCurse. Această clasă va moșteni clasa Masina definita la exercițiul 1, folosind cuvantul cheie extends si va avea un constructor in care se va apela super() (adica superconstructorul).

class MasinaDeCurse extends Masina{
    constructor(marca, model, culoare, kilometraj) {
        super()
        this.marca = marca;
        this.model = model;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    }

    getProperties() {
        return `Marca: ${this.marca}, Model: ${this.model}, Culoare: ${this.culoare}, Kilometraj: ${this.kilometraj}`;

    }

    participaLaCampionat(pozitiaInCampionat) {
        if (pozitiaInCampionat > 0) {
            console.log(`am castigat locul ${pozitiaInCampionat}`);
        } else {
            console.log("nu am castigat nici un premiu");
        }
    }
  
}

const campionat = () => {
    const masinaDeCampionat1 = new MasinaDeCurse("ferrari", "f8", "rosu", "123467");
    const masinaDeCampionat2 = new MasinaDeCurse("labotghini", "huracan", "galben", "654321");

    console.log("Proprietatile masineiDeCampionat1", masinaDeCampionat1.getProperties());
    masinaDeCampionat1.participaLaCampionat(1);

    console.log("Proprietatile masineiDeCampionat2", masinaDeCampionat2.getProperties());
    masinaDeCampionat2.participaLaCampionat(-1)
}

campionat()

