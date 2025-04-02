document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24
::contentReference[oaicite:19]{index=19}
 
