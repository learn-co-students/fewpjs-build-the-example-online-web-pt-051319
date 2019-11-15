// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// added this outside of DOMContentLoeaded to pass lab test.
const errorMess = document.getElementById("modal")
errorMess.className = "hidden"
// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  like = document.querySelector("li.like")
  like.addEventListener('click', e => {
      mimicServerCall('url_placeholder')
      .then(result => { 
        heart = document.querySelector(".like-glyph")
        heart.innerHTML = FULL_HEART
        heart.classList.add("activated-heart")
       })
     .catch( error => {
    errorMess.className = "";
      })
  })

})

//------------------------------------------------------------------------------
// learn.co solution
//------------------------------------------------------------------------------

// let glyphStates = {
//   "♡": "♥",
//   "♥": "♡"
// };

// let colorStates = {
//   "red" : "",
//   "": "red"
// };

// let articleHearts = document.querySelectorAll(".like");

// function likeCallback(e) {
//   let heart = e.target;
//   mimicServerCall("bogusUrl")
//    //OR: mimicServerCall("bogusUrl", {forceFailure: true})
//     .then(function(serverMessage){
//        heart.innerText = glyphStates[heart.innerText];
//        heart.style.color = colorStates[heart.style.color];
//     })
//     .catch(function(error) {
//       // Basic
//       // alert("Something went wrong!");
//       // or....
//       document.getElementById("modal").className = "";
//     });
// }

// for (let glyph of articleHearts) {
//   glyph.addEventListener("click", likeCallback);
// }


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
