const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
  menuButton.classList.toggle('fa-close');
});

document.onscroll = () => {
  navbar.classList.remove('show');
  menuButton.classList.remove('fa-close');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

const scriptURL = 'https://script.google.com/macros/s/AKfycby1G88UldVv-U6P_54McATMCg7IWEs7gDFPfB4acRMCktxmnyr5ELQvvfiG1r1a9dUtnQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! I have received your message and I will reach out to you shortly." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
