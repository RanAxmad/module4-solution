// STEP 2: Wrap the entire contents of helloSpeaker.js inside an IIFE
(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;

})(window);
