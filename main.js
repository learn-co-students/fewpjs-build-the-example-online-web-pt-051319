// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function () {
  let glyph = document.getElementsByClassName('like-glyph');

  for (let i = 0; i < glyph.length; i++) {
    glyph[i].addEventListener("click", simpleLiker);
  }

  function simpleLiker(event) {
    mimicServerCall();
    .then( resp => activateHeart(event));
    .catch( err => errorModal(error));
  }
})

function activateHeart (event) {
  if (event.target.innerText === EMPTY_HEART) {
    event.target.innerText = FULL_HEART;
    event.target.classList.add('activated-heart');
  } else {
    event.target.innerText = EMPTY_HEART;
    event.target.classList.remove('activated-heart');
  }
}

function errorModal(error) {
  let errorModal = document.getElementById('modal');
  let serverErrorMsg = document.getElementById('modal-message');
      
  errorModal.classList.remove('hidden');
  serverErrorMsg.innerText = error;

  setTimeout(function () {
    errorModal.classList.add('hidden')
  }, 5000);
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}