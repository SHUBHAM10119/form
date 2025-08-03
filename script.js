// Date validation function
function initializeDateValidation() {
    // Get today's date and format it to YYYY-MM-DD
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const todayFormatted = `${yyyy}-${mm}-${dd}`;

    // Get all date inputs
    const dateInputs = document.querySelectorAll('input[type="date"]');

    dateInputs.forEach(input => {
        // Set max attribute to today
        input.setAttribute('max', todayFormatted);

        // Add event listener to validate on change
        input.addEventListener('change', (e) => {
            const selectedDate = new Date(e.target.value);
            if (selectedDate > today) {
                alert('Please select a date not greater than today');
                e.target.value = '';
            }
        });
    });
}

// Initialize validation when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeDateValidation);