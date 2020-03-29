// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener("click", e => {

    const errorDiv = document.getElementById("modal");
    errorDiv.classList.add("hidden");
    if (e.target.className === "like") {
      console.log("like clicked");
      mimicServerCall()
        .then(() => {
          console.log("success");
          const heart = e.target.querySelector(".like-glyph");
          if (heart.classList.contains("activated-heart")) {
            heart.classList.remove("activated-heart");
          } else {
            heart.classList.add("activated-heart");
          }
        })
        .catch(function (error) {
          console.log("failure");
          errorDiv.classList.remove("hidden");
        });
    }
  });
});



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
