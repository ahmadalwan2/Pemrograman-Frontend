// === Simulasi Asyncronous yang sederhana didalam JavaScript === //

function rebusAir() {
    setTimeout(() => {
    console.log("Rebus air");
    }, 3000);
}

function masakMie() {
    setTimeout(() => {  
    console.log("Masak mie");
    }, 2000);
}

function makanMie() {
    setTimeout(() => {
    console.log("Makan mie");
    }, 4000);
}

rebusAir();
masakMie();
makanMie();