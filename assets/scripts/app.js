const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop')

//Functions
const toggleMovieModal = () => { 
  addMovieModal.classList.toggle('visible');
};

//Events
startAddMovieButton.addEventListener('click', toggleMovieModal);