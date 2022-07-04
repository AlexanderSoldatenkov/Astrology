const accordion = (triggersSelector) => {
  const btns = document.querySelectorAll(triggersSelector);
  // const notActiveBtns = document.querySelectorAll(`${triggersSelector} :not(#this)`);

  btns.forEach(btn => {
      btn.addEventListener('click', function() {
          this.classList.toggle('active-style');
          this.nextElementSibling.classList.toggle('active-content');
          if (this.classList.contains('active-style')) {
              this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
          } else {
              this.nextElementSibling.style.maxHeight = '0px';
          }
          // Only one section open
          const selector = document.querySelector(`#${this.id}`);
          const notActiveBtns = document.querySelectorAll(`${triggersSelector}:not(#${selector.id})`);
          notActiveBtns.forEach(button => {
            button.classList.remove('active-style');
            button.nextElementSibling.classList.remove('active-content');
            button.nextElementSibling.style.maxHeight = '0px';
          });
      });
  });

  //   blocks = document.querySelectorAll(itemsSelector);

  // blocks.forEach(block => {
  //     block.classList.add('animated', 'fadeInDown');
  // });

  // btns.forEach(btn => {
  //     btn.addEventListener('click', function() {
  //         if (!this.classList.contains('active')) {
  //             btns.forEach(btn => {
  //                 btn.classList.remove('active', 'active-style');
  //             });
  //             this.classList.add('active', 'active-style');
  //         }
  //     });
  // });
};

export default accordion;