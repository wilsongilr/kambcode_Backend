import Chance from "chance";

// const chance = new Chance();

let cant = 3;

for (let i = 1; i <= cant; i++) {
    let chance = new Chance();
    const nombre = chance.name();
    const suf = chance.name_suffix();
    const mail = chance.email();
    const birth_date = chance.birthday();
    const phoneNumber = chance.phone();
    const age = chance.age = chance.age();
    
    console.log('---------','Data chance ', i,'-----------------------')
    console.log('Random Data Generated')
    console.log('Name: ', nombre);
    console.log('Suffix: ', suf);
    console.log('Email: ', mail);
    console.log('Birth Date: ', birth_date.toLocaleDateString());
    console.log('Phone Number:', phoneNumber);
    console.log('Age:', age);
    
}


