const forms = () => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="phone"]');

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

      data = JSON.stringify(data);
      let res = await fetch(url, {
          method: "POST",
          body: data,
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded'
          },
      });
      
      return await res.text();
  };

  const clearInputs = () => {
      inputs.forEach(item => {
          item.value = '';
      });
  };

  form.forEach(item => {
      // item.addEventListener('submit', (e) => {
      //     e.preventDefault();

          let statusMessage = document.createElement('div');
          statusMessage.classList.add('status');
          item.appendChild(statusMessage);

          const formData = new FormData(item);

          postData('mailer/smart.php', formData)
              .then(res => {
                  console.log(res);
                  statusMessage.textContent = message.success;
              })
              .catch(() => statusMessage.textContent = message.failure)
              .finally(() => {
                  clearInputs();
                  setTimeout(() => {
                      statusMessage.remove();
                  }, 7000);
              });
      // });
  });



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

