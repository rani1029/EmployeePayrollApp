function salaryOutput() {
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.Salary-output-range');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
}

window.addEventListener('DOMContentLoaded', () => {
    salaryOutput();
})