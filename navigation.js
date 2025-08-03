// Store form data in localStorage when submitting
function storeFormData(formId) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        localStorage.setItem(formId, JSON.stringify(data));
        
        // Navigate to the next page
        if (formId === 'idProofForm') {
            window.location.href = 'addressProff.html';
        } else {
            // Handle final submission
            console.log('KYC process completed');
            alert('KYC submission successful!');
        }
    });
}

// Load stored form data if available
function loadStoredData(formId) {
    const storedData = localStorage.getItem(formId);
    if (storedData) {
        const data = JSON.parse(storedData);
        const form = document.getElementById(formId);
        
        for (let key in data) {
            const input = form.querySelector(`[name="${key}"]`);
            if (input) input.value = data[key];
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentForm = document.querySelector('form.kyc-form');
    if (currentForm) {
        storeFormData(currentForm.id);
        loadStoredData(currentForm.id);
    }
});