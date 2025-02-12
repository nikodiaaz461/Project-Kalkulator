function appendToDisplay(value) {
    let display = document.getElementById('display');
    
    // Mengubah simbol ÷ dan × menjadi / dan * untuk perhitungan
    if (value === '÷') value = '/';
    if (value === '×') value = '*';
    
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let display = document.getElementById('display').value;
    
    try {
        // Menghitung hasil dan menampilkan di layar
        let result = eval(display);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Input tidak valid');
    }
}