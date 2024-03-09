const generation = document.getElementById('generation');
const result = document.getElementById('result');

//slider 
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

function generationPassword(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);

    let ArrayOfString = random.toString(36).split();

    if (ArrayOfString.join('').length < output.innerHTML) {
        return ArrayOfString.join('') + '6';
    }

    return ArrayOfString.join('');
}

generation.onclick = function() {
    if (output.innerHTML == 12) {
        result.textContent = generationPassword(1e17, 1e18);
    } else if (output.innerHTML == 11) {
        result.textContent = generationPassword(1e15, 1e16);
    } else if (output.innerHTML == 10) {
        result.textContent = generationPassword(1e13, 1e14);
    } else if (output.innerHTML == 9) {
        result.textContent = generationPassword(1e12, 1e13);
    } else if (output.innerHTML == 8) {
        result.textContent = generationPassword(1e11, 1e12);
    } else if (output.innerHTML == 7) {
        result.textContent = generationPassword(1e9, 1e10);
    } else if (output.innerHTML == 6) {
        result.textContent = generationPassword(1e8, 1e9);
    } else if (output.innerHTML == 5) {
        result.textContent = generationPassword(1e6, 1e7);
    } else if (output.innerHTML == 4) {
        result.textContent = generationPassword(1e5, 1e6);
    } else if (output.innerHTML == 3) {
        result.textContent = generationPassword(1e3, 1e4);
    }
}