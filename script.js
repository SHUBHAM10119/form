// // Date validation function
// function initializeDateValidation() {
//     // Get today's date and format it to YYYY-MM-DD
//     const today = new Date();
//     const dd = String(today.getDate()).padStart(2, '0');
//     const mm = String(today.getMonth() + 1).padStart(2, '0');
//     const yyyy = today.getFullYear();
//     const todayFormatted = `${yyyy}-${mm}-${dd}`;

//     // Get all date inputs
//     const dateInputs = document.querySelectorAll('input[type="date"]');

//     dateInputs.forEach(input => {
//         // Set max attribute to today
//         input.setAttribute('max', todayFormatted);

//         // Add event listener to validate on change
//         input.addEventListener('change', (e) => {
//             const selectedDate = new Date(e.target.value);
//             if (selectedDate > today) {
//                 alert('Please select a date not greater than today');
//                 e.target.value = '';
//             }
//         });
//     });
// }

// // Initialize validation when DOM is loaded

// Wrap all logic so it runs after DOM is parsed
document.addEventListener('DOMContentLoaded', () => {
  // 1. Section toggle function
  window.showSection = function (sectionId) {
    document
      .querySelectorAll('.kyc-section')
      .forEach((sec) => sec.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');

    document.querySelectorAll('.step').forEach((step) =>
      step.classList.remove('active')
    );
    document
      .querySelector(`a[onclick="showSection('${sectionId}')"]`)
      .parentElement.classList.add('active');
  };

  // 2. File upload custom buttons
  document.querySelectorAll('.browse-btn').forEach((btn) => {
    const input = document.getElementById(btn.dataset.input);

    btn.addEventListener('click', () => input.click());

    input.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        btn.textContent = `${file.name} (${(file.size / 1e6).toFixed(
          2
        )} MB)`;
      }
    });

    // Drag & drop
    btn.addEventListener('dragover', (e) => {
      e.preventDefault();
      btn.classList.add('drag-over');
    });
    btn.addEventListener('dragleave', () => {
      btn.classList.remove('drag-over');
    });
    btn.addEventListener('drop', (e) => {
      e.preventDefault();
      btn.classList.remove('drag-over');
      input.files = e.dataTransfer.files;
      input.dispatchEvent(new Event('change'));
    });
  });

  // 3. Date validation: set max = today and block future dates
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const maxDate = `${yyyy}-${mm}-${dd}`;

  document.querySelectorAll('input[type="date"]').forEach((input) => {
    input.setAttribute('max', maxDate);
    input.addEventListener('change', (e) => {
      if (new Date(e.target.value) > today) {
        alert('Please select a date not greater than today');
        e.target.value = '';
      }
    });
  });
});


// document.addEventListener('DOMContentLoaded', initializeDateValidation);
