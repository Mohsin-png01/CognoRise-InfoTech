document.addEventListener('DOMContentLoaded', () => {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateButton = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');
    const bmiValueSpan = document.getElementById('bmi-value');
    const bmiCategorySpan = document.getElementById('bmi-category');

    calculateButton.addEventListener('click', calculateBMI);

    function calculateBMI() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // Convert cm to m

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Please enter valid weight and height values.');
            return;
        }

        const bmi = weight / (height * height);
        const roundedBMI = bmi.toFixed(1);

        bmiValueSpan.textContent = roundedBMI;
        bmiCategorySpan.textContent = getBMICategory(bmi);

        resultDiv.classList.remove('hidden');
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi < 25) {
            return 'Normal weight';
        } else if (bmi < 30) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    }
});