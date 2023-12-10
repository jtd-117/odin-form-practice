/**
 * @file script.js
 * @description Handles input validation (i.e. password validation)
 */

/**
 * @description Calculates if the input and confirmation passwords are the same
 * @returns A boolean if the passwords are equal
 */
const validatePassword = () => {
    // STEP 1: Get the passwords
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirm_password');

    // STEP 2: Calculate password equality
    const cmp = password.value.localeCompare(confirm.value);
    console.log(cmp);

    // STEP 3: Check if the passwords match
    if (cmp === 0) {
        password.setCustomValidity('');
        confirm.setCustomValidity('');

        // STEP 3A: Reset the red border class when passwords match
        password.classList.remove('invalid-password');
        confirm.classList.remove('invalid-password');
        return true;
    }
    // STEP 4: Add the red border class for invalid passwords
    password.classList.add('invalid-password');
    confirm.classList.add('invalid-password');
    return false;
}

const signUpForm = document.getElementById('sign-up');
signUpForm.addEventListener('submit', (e) => {
    const passwordMessage = document.getElementById('password-check');
    if (validatePassword() === false) {
        passwordMessage.textContent = "ERROR: Passwords do NOT match!";
        e.preventDefault();
    } else {
        passwordMessage.textContent = "";
    }
});

