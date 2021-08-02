function expectoPatronus(wizard) {
    let patronusLindo
    if (wizard === "Harry") {
        patronusLindo = "Expecto Patronum"
    }
    else if (wizard === "Luna") {
        patronusLindo = "Expecto Patronum"
    }
    else if (wizard==="Dumbledore") {
        patronusLindo = "Expecto Patronum"
    }
    else patronusLindo = "No tengo datos para ese wizard"
    return patronusLindo;
}
let wizard = prompt('Inserte el nombre del personaje!');
let hechizo = expectoPatronus(wizard);
console.log(hechizo);