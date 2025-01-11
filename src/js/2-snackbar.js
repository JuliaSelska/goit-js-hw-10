// Описаний у документації
import iziToast from 'izitoast';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delayInput = form.elements['delay'].value;
  const stateInput = form.elements['state'].value;

  const delay = Number(delayInput);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateInput === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});
