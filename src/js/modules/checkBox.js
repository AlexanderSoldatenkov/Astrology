import forms from './forms';

const checkBox = () => {
  function placeholders() {
    const mainForm = document.forms.mainForm;
    const formInputName = mainForm.name;
    const formInputPhone = mainForm.phone;
    const formInputEmail = mainForm.email;
    const formInputTextarea = mainForm.textarea;

    const PHformInputName = formInputName.placeholder;
    const PHformInputPhone = formInputPhone.placeholder;
    const PHformInputEmail = formInputEmail.placeholder;
    const PHformInputTextarea = formInputTextarea.placeholder;

    formInputName.addEventListener('focus', () => {
      formInputName.placeholder = "";
    });
    formInputName.addEventListener('blur', () => {
      formInputName.placeholder = PHformInputName;
    });

    formInputPhone.addEventListener('focus', () => {
      formInputPhone.placeholder = "";
    });
    formInputPhone.addEventListener('blur', () => {
      formInputPhone.placeholder = PHformInputPhone;
    });

    formInputEmail.addEventListener('focus', () => {
      formInputEmail.placeholder = "";
    });
    formInputEmail.addEventListener('blur', () => {
      formInputEmail.placeholder = PHformInputEmail;
    });

    formInputTextarea.addEventListener('focus', () => {
      formInputTextarea.placeholder = "";
    });
    formInputTextarea.addEventListener('blur', () => {
      formInputTextarea.placeholder = PHformInputTextarea;
    });
  }

  let sendPost = false;
  let justOnce = true;

  function validate() {
    const mainForm = document.forms.mainForm;
    const formInputTextarea = mainForm.textarea;
    

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
      
      if (justOnce) {
        justOnce = false;
        formInputTextarea.parentElement.insertAdjacentHTML(
          "beforebegin",
          `<div class="feed-form__error">Выберите услугу</div>`
        );
        
      } 
          // alert('Fill inputs');
 
    }
    if (selected === true) {
      forms();
      selected = false;
    }

    // checkbox.forEach(item => {
    //   item.addEventListener('focus', () => {
    //     if (formInputTextarea.nextElementSibling) {
    //       formInputTextarea.nextElementSibling.remove();
    //     }
        
    //   });
    // });
    // formInputTextarea.addEventListener('focus', () => {
    //   if (formInputTextarea.nextElementSibling) {
    //     formInputTextarea.nextElementSibling.remove();
    //   }
      
    // });
  }


  placeholders();

  const btn = document.getElementById('feed-form__btn');
  
  btn.addEventListener('click', (e) => {
    // e.preventDefault();
    validate();
  });
};
export default checkBox;

