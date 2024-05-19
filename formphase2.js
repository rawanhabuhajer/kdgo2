// Display date and time
document.getElementById('datetime').innerText = new Date().toLocaleString();

// Validation
function validateForm() {
    let isValid = true;
    let report = '';
    
    // Name validation
    const name = document.getElementById('name').value;
    if (!name) {
        isValid = false;
        document.getElementById('nameError').innerText = 'Name is required';
    } else {
        document.getElementById('nameError').innerText = '';
        report += `Name: ${name}\n`;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').innerText = 'Valid email is required';
    } else {
        document.getElementById('emailError').innerText = '';
        report += `Email: ${email}\n`;
    }

    // Age validation
    const age = document.getElementById('age').value;
    if (!age || age < 18 || age > 100) {
        isValid = false;
        document.getElementById('ageError').innerText = 'Age must be between 18 and 100';
    } else {
        document.getElementById('ageError').innerText = '';
        report += `Age: ${age}\n`;
    }

    // Quantity validation
    const quantity = document.getElementById('quantity').value;
    if (!quantity || quantity < 1) {
        isValid = false;
        document.getElementById('quantityError').innerText = 'Quantity must be at least 1';
    } else {
        document.getElementById('quantityError').innerText = '';
        report += `Item Quantity: ${quantity}\n`;
    }

    // Income validation
    const income = document.getElementById('income').value;
    if (!income || income < 0) {
        isValid = false;
        document.getElementById('incomeError').innerText = 'Income must be positive';
    } else {
        document.getElementById('incomeError').innerText = '';
        report += `Monthly Income: ${income}\n`;
    }

    // Gender validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        isValid = false;
        document.getElementById('genderError').innerText = 'Gender selection is required';
    } else {
        document.getElementById('genderError').innerText = '';
        report += `Gender: ${gender.value}\n`;
    }

    // Terms validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        isValid = false;
        document.getElementById('termsError').innerText = 'You must accept the terms';
    } else {
        document.getElementById('termsError').innerText = '';
        report += `Terms Accepted: Yes\n`;
    }

    // If valid, show report
    if (isValid) {
        // Calculations (Example: Annual Income)
        const annualIncome = income * 12;
        report += `Annual Income: ${annualIncome}\n`;

        document.getElementById('report').value = report;
    } else {
        document.getElementById('report').value = '';
    }
}
