
// Wait for the whole page to load before hiding the preloader
window.addEventListener("load", function() {
    document.getElementById("intro").style.display = "none";
});

toviewaboutme=()=>{
        
document.getElementById('about').scrollIntoView({
                behavior: 'smooth'
            });
        
}
toviewservices=()=>{
        
document.getElementById('serv').scrollIntoView({
                behavior: 'smooth'
            });
        
}
toviewskills=()=>{
        
document.getElementById('ski').scrollIntoView({
                behavior: 'smooth'
            });
        
}
toviewprojects=()=>{
        
document.getElementById('proj').scrollIntoView({
                behavior: 'smooth'
            });
        
}
toviewcontact=()=>{
        
document.getElementById('conta').scrollIntoView({
                behavior: 'smooth'
            });
        
}
toviewservices=()=>{
        
document.getElementById('services').scrollIntoView({
                behavior: 'smooth'
            });
        
}

 const words = ["Frontend Developer", "Collaborative", "Creative", "Tech Enthusiast","Resourceful","Competitive programmer"];
  let i = 0;
  const animatedText = document.querySelector('.animated-text');

  function changeWord() {
    animatedText.textContent = words[i];
    i = (i + 1) % words.length;
  }

  setInterval(changeWord, 5000);
  