
function validateLuas() {
    let panjangAlas = document.getElementById('panjang-alas').value;
    let tinggi = document.getElementById('tinggi').value;

    if (panjangAlas == '' && tinggi == '') {
        alert('Form masih kosong')
    }
    console.log(panjangAlas);
    console.log(tinggi);
}