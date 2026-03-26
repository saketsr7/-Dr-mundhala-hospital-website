function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('appointmentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.innerText = 'Thank you! Your appointment request has been submitted.';
  msg.style.color = 'green';
  this.reset(); // Clears the form
});
