alert('Temprature Convertion');
const _qtn = prompt('Choose the temprature : \n 1. Celcius \n 2. Fahrenheit \n 3. Kelvin \n 4. Reamur');
// const c = prompt('Input the number : ');
// const res = (9/5) * c + 32

// alert("The temprature is " + res);
if (_qtn == 1) {
    let opt1 = prompt('To : \n 1. Fahrenheit \n 2. Kelvin \n 3. Reamur');
    if(opt1 == 1) {
        const cf = prompt('Input the number : ');
        const resCF = (9/5) * cf + 32;
        
        alert('The Result is ' + resCF);
    } else if (opt1 == 2) {
        const ck = prompt('Input the number : ');
        const resCK = ck + 273.15;

        alert('The Result is ' + resCK);
    } else {
        const cr = prompt('Input the number : ');
        const resCR = (cr + 273.15) * 9/5;

        alert('The Result is ' + resCR);
    }
}
else if (_qtn == 2) {
    let opt2 = prompt('To : \n 1. Celcius \n 2. Kelvin \n 3. Reamur');
    if(opt2 == 1) {
        const fc = prompt('Input the number : ');
        const resFC = (fc - 32) * 5/9;

        alert('The Result is ' + resFC);
    } else if (opt2 == 2) {
        const fk = prompt('Input the number : ');
        const resFK = (fk + 459.67) * 5/9;

        alert('The Result is ' + resFK);
    } else {
        const fr = prompt('Input the number : ');
        const resFR = 4/9 (fr - 32);
    }
}
else if (_qtn == 3) {
    let opt3 = prompt('To : \n 1. Celcius \n 2. Fahrenheit \n 3. Reamur');
    if(opt3 == 1) {
        const kc = prompt('Input the number : ');
        const resKC = kc - 273.15;

        alert('The Result is ' + resKC);
    } else if (opt3 == 2) {
        const kf = prompt('Input the number : ');
        const resKF = (kf + 9/5) * 459.67;

        alert('The Result is ' + resKF);
    } else {
        const kr = prompt('Input the number : ');
        const resKR = 4/5 (kr - 273);

        alert('The Result is ' + resKR);
    }
}
else {
    let opt4 = prompt('To : \n 1. Celcius \n 2. Fahrenheit \n 3. Kelvin');
    if(opt4 == 1) {
        const rc = prompt('Input the number : ');
        const resRC = rc / 0.8;

        alert('The Result is ' + resRC);
    } else if (opt4 == 2) {
        const rf = prompt('Input the number : ');
        const resFK = (rf * 2.25) + 32;

        alert('The Result is ' + resFK);
    } else {
        const rk = prompt('Input the number : ');
        const resRK = (rk / 0.8) + 273.15;

        alert('The Result is ' + resRK);
    }
}

// Callback
// function halo(nama) {
//     alert('Halo ' + nama);
// }

// function tampilkanPesan(ps) {
//     const nama = prompt('Masukkan Nama : ');
//     ps(nama);
// }

// tampilkanPesan(nama => alert('Halo, ' + nama));

// Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if( xhr.readyState === 4 ) {
//             if(xhr.status === 200) {
//                 success(xhr.response)
//             } else if ( xhr.stats === 404 ) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// getDataMahasiswa('')