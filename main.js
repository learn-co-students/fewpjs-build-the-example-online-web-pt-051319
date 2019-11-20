// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const HEARTS = {'♡':'♥','♥':'♡'}
let modal = false

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  modal = document.getElementById('modal');

})

document.addEventListener("click", () => {
  const et = event.target;
  if(et.matches('li.like') || et.matches('span.like-glyph')){
    let heartSpan = et.querySelector('span.like-glyph') || et
    mimicServerCall()
      .then((resp) => {
        heartSpan.innerText = HEARTS[heartSpan.innerText]
        heartSpan.classList.toggle("activated-heart")
        modal.classList.toggle("hidden", true)
      })
      .catch((error) => {
        if(modal){
          modal.classList.remove("hidden")
          console.log(error)
          modal.querySelector('p#modal-message').innerText = error
        }
      })
  }
})

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
