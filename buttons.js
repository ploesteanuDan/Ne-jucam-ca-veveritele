let startButton = document.getElementById('startButton');
let welcomeMessage = document.getElementById('welcomeMessage');
let aboutButton = document.getElementById('aboutButton');
let homeButton = document.getElementById('homeButton');

startButton.addEventListener('click',function(){
    var startPageURL= "startPage.html"; 
    window.location = startPageURL; 
}
);

aboutButton.addEventListener('click',function(){
    var aboutPageURL = "aboutPage.html";
    window.location = aboutPageURL;
})

homeButton.addEventListener('click',function(){
    var mainPageURL = "index.html";
    window.location = mainPageURL;
})