const birthdateInput = document.getElementById('birthdate');
const calculateButton = document.getElementById('calculate');
const resultElement = document.getElementById('result');

calculateButton.addEventListener('click', calculateAge);

function calculateAge(event) {
  event.preventDefault();
  const birthdateValue = birthdateInput.value;

  if (!birthdateValue) {
    resultElement.textContent = 'Please enter a birthdate';
    return;
  }

  const birthdate = new Date(birthdateValue);
  if (isNaN(birthdate.getTime())) {
    resultElement.textContent = 'Invalid date';
    return;
  }

  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();

  if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
    age--;
  }

  if (age < 0) {
    resultElement.textContent = 'Birthdate cannot be in the future';
    return;
  }

  resultElement.textContent = `You are ${age} years old.`;
}
