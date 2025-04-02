document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve input values
    const weightInput = document.getElementById('weight').value;
    const heightInput = document.getElementById('height').value;

    // Parse input values to float
    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput) / 100; // Convert cm to meters

    // Validate inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid positive numbers for weight and height.');
        return;
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display result
    const resultDiv = document.getElementById('bmi-result');
    resultDiv.innerHTML = `Your BMI is ${bmi}, which is considered ${category}.`;
});
