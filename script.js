/**
 * @file script.js
 * @description Handles input validation (i.e. password validation)
 */

/**
 * @description Calculates if the input and confirmation passwords are the same
 * @returns A boolean if the the passwords are equal
 */
const validatePassword = () => {

    // STEP 1: Get the passwords
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirm_password');

    // STEP 2: Calculate password equality
    const cmp = password.value.localeCompare(confirm.value);

    // STEP 3: Check if the passwords match
    if (cmp === 0) {
        return true;
    }
    // STEP 4: Indicate that the passwords do not match
    return false;
}

const signUpForm = document.getElementById('sign-up');
signUpForm.addEventListener('submit', (e) => {
    const passwordMessage = document.getElementById('password-check');
    if (validatePassword() === false) {
        passwordMessage.textContent = "*Passwords do NOT match!";
        e.preventDefault();
    }
    else {
        passwordMessage.textContent = "";
    }
});
