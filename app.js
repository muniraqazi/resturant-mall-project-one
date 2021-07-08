// console.log ("hello");


const toggleModal = () => {
  document.querySelector('.modal').classList.toggle('modalHidden');
  // console.log("clicked");
};

document.querySelector('#openModal').addEventListener('click', toggleModal);

document.querySelector('#submitModal').addEventListener('submit', (event) => {
  event.preventDefault();
  toggleModal();
});

document.querySelector('.modalCloseBtn').addEventListener('click', toggleModal);

//https://www.youtube.com/watch?v=KX0NR5HtQ1Q&ab_channel=JuniorDeveloperCentral