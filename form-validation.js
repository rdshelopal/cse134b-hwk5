document.getElementById('comments').addEventListener('input', (event) => {
    const pattern = /^[a-zA-Z0-9\s.,!?]*$/;
    const value = event.target.value;
    const errorOutput = event.target.nextElementSibling;

    if (!pattern.test(value)) {
        errorOutput.textContent = 'Invalid character entered!';
        event.target.style.borderColor = 'red';
        setTimeout(() => {
            errorOutput.textContent = '';
            event.target.style.borderColor = '';
        }, 2000); // 2 seconds
    }
});

const comments = document.getElementById('comments');
const charCounter = document.createElement('div');
charCounter.style.marginTop = '5px';
comments.parentNode.insertBefore(charCounter, comments.nextSibling);

comments.addEventListener('input', () => {
    const maxLength = comments.getAttribute('maxlength');
    const currentLength = comments.value.length;
    const remaining = maxLength - currentLength;

    charCounter.textContent = `${remaining} characters remaining`;

    if (remaining <= 50) {
        charCounter.style.color = 'red';
    } else if (remaining <= 100) {
        charCounter.style.color = 'orange';
    } else {
        charCounter.style.color = 'green';
    }
});

const formErrors = [];

document.querySelector('form').addEventListener('submit', (event) => {
    formErrors.length = 0; // Clear previous errors
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const comments = document.getElementById('comments');

    // Custom validation checks
    if (name.value.length < 2 || name.value.length > 50) {
        formErrors.push({ field: 'name', message: 'Name must be between 2 and 50 characters.' });
        console.log('Error added for name field');
    }
    if (!email.value.includes('@')) {
        formErrors.push({ field: 'email', message: 'Please enter a valid email address.' });
        console.log('Error added for email field');
    }
    if (comments.value.length < 10 || comments.value.length > 500) {
        formErrors.push({ field: 'comments', message: 'Comments must be between 10 and 500 characters.' });
        console.log('Error added for comments field');
    }

    // Update the hidden input with JSON string of errors
    const errorField = document.getElementById('form_errors');
    errorField.value = JSON.stringify(formErrors);

    console.log('Form Errors:', formErrors);
    console.log('Hidden Input Value:', errorField.value);

    if (formErrors.length > 0) {
        event.preventDefault(); // Stop form submission if there are errors
        console.error('Form submission blocked due to errors:', formErrors);
    }
});

