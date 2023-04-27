class CssPropControl {
    constructor(element) {
      this.element = element
    }
    get(varName) {
      return getComputedStyle(this.element).getPropertyValue(varName)
    }
    set(varName, val) {
      return this.element.style.setProperty(varName, val)
    }
  }
  
  const bodyCssProps = new CssPropControl(document.body)
  
  let toggle = document.querySelector('#dark-mode-toggle')
  toggle.addEventListener('click', () => { 
    let mode = toggle.checked ? 'dark' : 'light'
    bodyCssProps.set('--background', bodyCssProps.get(`--${mode}-background`))
    bodyCssProps.set('--primary', bodyCssProps.get(`--${mode}-primary`))
    bodyCssProps.set('--link', bodyCssProps.get(`--${mode}-link`))
  })

  const form = document.getElementById('fs-frm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.getElementById('full-name').value;
  const email = document.getElementById('email-address').value;
  const message = document.getElementById('message').value;
  
  const data = {
    name,
    email,
    message
  };
  
  fetch('https://formspree.io/f/xbjeqvra', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Thank you for contacting me! I will get back to you soon.');
      form.reset();
    } else {
      alert('Something went wrong. Please try again later.');
    }
  })
  .catch(error => {
    alert('Something went wrong. Please try again later.');
    console.error(error);
  });
});


  