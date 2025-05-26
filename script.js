function showCustomAlert(message) {
    let alertBox = document.createElement('div');
    alertBox.className = 'custom-alert';
    alertBox.innerHTML = message;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 2000);
}

function setInputMode(mode) {
    const numberButtons = document.getElementById('numberButtons');
    const inputNumber = document.getElementById('inputNumber');
    if (mode === 'ketik') {
        numberButtons.style.display = 'none';
        inputNumber.disabled = false;
        inputNumber.value = '';
    } else {
        numberButtons.style.display = 'flex';
        inputNumber.disabled = true;
        inputNumber.value = '';
    }
}

function setInputNumber(n) {
    document.getElementById('inputNumber').value = n;
}

function generatePattern() {
    const input = document.getElementById('inputNumber').value;
    const output = document.getElementById('output');
    const n = Number(input);

    if (!input || isNaN(n) || n < 1 || n > 9 || input.includes('.') || input.includes(',') || input.startsWith('0')) {
        output.textContent = 'Input tidak valid';
        showCustomAlert('<i class="fa-solid fa-circle-info"></i> Input tidak valid! Silakan masukkan angka bulat antara 1 - 9');
        return;
    }

    let result = '';
    for (let i = 1; i <= n; i++) {
        result += (i + ' ').repeat(i) + '\n';
    }
    showCustomAlert(`<i class="fa-solid fa-circle-check"></i> Pola angka berhasil dibuat`);
    output.textContent = result;
}

function clearOutput() {
    document.getElementById('inputNumber').value = '';
    document.getElementById('output').textContent = '';
}