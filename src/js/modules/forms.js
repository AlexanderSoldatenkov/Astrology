const forms = () => {
  const mainForm = document.forms.mainForm;
  // const form = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const textarea = document.querySelector('textarea');
  const phoneInputs = document.querySelectorAll('input[name="phone"]');
  // const object = {};

  phoneInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });



  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так, попробуйте еще раз...'
  };

  


  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;


    let res = await fetch(url, {
      method: "POST",
      body: data,
      // headers: {
      //   'Content-Type': 'application/json'
      //   // 'Content-Type': 'application/x-www-form-urlencoded'
      //   // 'Content-Type': 'multipart/form-data'
      // },
    });

    return await res.text(); //res.text()
  };

  const clearInputs = () => {
    textarea.value = '';
    inputs.forEach(item => {
      item.value = '';
    });
  };

  // form.forEach(item => {
    // item.addEventListener('submit', (e) => {
    //   e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      mainForm.appendChild(statusMessage);

      const formData = new FormData(mainForm);

      //   formData.forEach(function(value, key){
      //     object[key] = value;
      // });

      postData('mailer/smart.php', formData)
        .then(res => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => statusMessage.textContent = message.failure)
        .finally(() => {
          clearInputs();
          // form.reset();
          // FormData.delete();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    // });
  // });



};


export default forms;

// const form = document.querySelectorAll('form'),
// inputs = document.querySelectorAll('input'),
// phoneInputs = document.querySelectorAll('input[name="phone"]');

// phoneInputs.forEach(item => {
// item.addEventListener('input', () => {
//   item.value = item.value.replace(/\D/, '');
// });
// });



// const message = {
// loading: 'Загрузка...',
// success: 'Спасибо! Скоро мы с вами свяжемся',
// failure: 'Что-то пошло не так, попробуйте еще раз...'
// };

// const postData = async (url, data) => {
// document.querySelector('.status').textContent = message.loading;
// let res = await fetch(url, {
//   method: "POST",
//   body: data
// });

// return await res.text();
// };

// const clearInputs = () => {
// inputs.forEach(item => {
//   item.value = '';
// });
// };

// form.forEach(item => {
// // item.addEventListener('submit', (e) => {
// //     e.preventDefault();

//   let statusMessage = document.createElement('div');
//   statusMessage.classList.add('status');
//   item.appendChild(statusMessage);

//   const formData = new FormData(item);

//   postData('mailer/smart.php', formData)
//       .then(res => {
//           console.log(res);
//           statusMessage.textContent = message.success;
//       })
//       .catch(() => statusMessage.textContent = message.failure)
//       .finally(() => {
//           clearInputs();
//           setTimeout(() => {
//               statusMessage.remove();
//           }, 7000);
//       });
// // });
// });
