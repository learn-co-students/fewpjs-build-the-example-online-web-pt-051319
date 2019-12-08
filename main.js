// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
toggleModal()

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('like')) {
    // Do something...
    likeStatus(event)
  }
}, false);


function likeStatus(event) {
  mimicServerCall()
  .then( resp => toggleHeart(event))
  .catch( err => displayError(err))
}

function toggleHeart(event) {
  const glyph = event.target.querySelector('.like-glyph')
  if (glyph.innerHTML === FULL_HEART) {
    glyph.innerHTML = EMPTY_HEART;
  } else {
    glyph.innerHTML = FULL_HEART;
  }
  glyph.classList.toggle('activated-heart')
}

function toggleModal() {
  const modal = document.getElementById('modal')
  modal.classList.toggle('hidden')
}

function displayError(message) {
  const modal = document.getElementById('modal')
  modal.innerHTML = message
  toggleModal()  
  setTimeout(function () {
    toggleModal()
  }, 5000)

}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
