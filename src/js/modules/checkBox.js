import forms from './forms';

const checkBox = () => {
  let sendPost = false;

  function validate() {
    const checkbox = document.querySelectorAll('.test');
    // const name = document.getElementById('name').required;
    // const email = document.getElementById('email').required;
    let selected = false;
    
    checkbox.forEach(item => {
    if (item.checked === true) {
      // break;
      
      selected = true; 
    }
    });

    if (selected === false) {
      console.log('Fill inputs');
    }
    if (selected === true) {
      
      forms();
    }
  }


 

  const btn = document.getElementById('feed-form__btn');
  
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    validate();
  });
};
export default checkBox;