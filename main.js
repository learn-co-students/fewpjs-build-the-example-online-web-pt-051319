// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function () {
  let emptyHearts = document.getElementsByClassName('like-glyph');
  for (let i = 0; i < emptyHearts.length; i++) {
    emptyHearts[i].addEventListener("click", likedHeart)
  }

  function likedHeart(e) {
    mimicServerCall()
      .then(function () {
        if (e.target.innerText === FULL_HEART) {
          e.target.innerText = EMPTY_HEART;
          e.target.classList.remove('activated-heart')
        } else {
          e.target.innerText = FULL_HEART
          e.target.classList.add('activated-heart')
        }
      })
      .catch(function (err) {
        let errorModal = document.getElementById('modal');
        let errorPlace = document.getElementById('modal-message');
        errorModal.classList.remove('hidden');
        errorPlace.innerText = err;
        setTimeout(function () {
          errorModal.classList.add('hidden')
        }, 5000);
      })
  }


})



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
