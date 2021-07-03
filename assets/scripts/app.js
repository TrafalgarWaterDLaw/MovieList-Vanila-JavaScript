//Constants and Variables
const addMovieModal = document.getElementById('add-modal')
const startAddMovieButton = document.querySelector('header button')
const backdrop = document.getElementById('backdrop')
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')

//Functions

const toggleMovieBackdrop = () => {
	backdrop.classList.toggle('visible')
}

const cancelAddMovie = () => {
	toggleMovieModal()
}

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible')
  toggleMovieBackdrop()
}

const backdropClickHandler = () => {
	toggleMovieModal()
}

//Events
startAddMovieButton.addEventListener('click', toggleMovieModal)
backdrop.addEventListener('click', toggleMovieModal)
cancelAddMovieButton.addEventListener('click', cancelAddMovie)
