//open and close (hide) the modal on click event
const toggleModal = () => {
  document.querySelector('.modal').classList.toggle('modalHidden');
};

document.querySelector('#openModal').addEventListener('click', toggleModal);

//submit form on click 
document.querySelector('#submitModal').addEventListener('submit', (event) => {
  event.preventDefault();
  toggleModal();
});

//close modal on click
document.querySelector('.modalCloseBtn').addEventListener('click', toggleModal);

//tutorial used for creating the modal
//https://www.youtube.com/watch?v=KX0NR5HtQ1Q&ab_channel=JuniorDeveloperCentral