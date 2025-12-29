// === Simulasi Asyncronous yang sederhana didalam JavaScript === //

// - Kita buatkan callback agar dia 
function rebusAir(callback) {
    setTimeout(() => {
    console.log("Rebus air");
    callback();
    }, 3000);
}

function masakMie(callback) {
    setTimeout(() => {  
    console.log("Masak mie");
    callback();
    }, 2000);
}

function makanMie(callback) {
    setTimeout(() => {
    console.log("Makan mie");
    callback();
    }, 4000);
}


rebusAir(() => {
    masakMie(() => {
        makanMie(() => {
            console.log("Selesai deh");
        })
    })
})
