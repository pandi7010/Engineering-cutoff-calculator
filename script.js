function calculateCutoff() {
    var maths = parseFloat(document.getElementById('maths').value);
    var physics = parseFloat(document.getElementById('physics').value);
    var chemistry = parseFloat(document.getElementById('chemistry').value);

    var total = (physics + chemistry) / 2;
    var cutoff = total + maths;

    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (isNaN(maths) || isNaN(physics) || isNaN(chemistry) || maths < 35 || physics < 35 || chemistry < 35) {
        outputDiv.innerHTML = 'Sorry, you are not eligible for engineering admissions. Please ensure you have valid marks (minimum 35) for all subjects.';
    } else {
        if (cutoff >= 60) {
            outputDiv.innerHTML = 'Congratulations! Your cutoff is ' + cutoff.toFixed(2) + '. You are eligible for engineering admissions.';
            animateOutput();
        } else {
            outputDiv.innerHTML = 'Sorry, your cutoff is ' + cutoff.toFixed(2) + '. You need to score at least 60 to be eligible for engineering admissions.';
        }
    }
}

function animateOutput() {
    var outputDiv = document.getElementById('output');
    outputDiv.style.color = 'green';
    outputDiv.style.fontSize = '24px';
}
