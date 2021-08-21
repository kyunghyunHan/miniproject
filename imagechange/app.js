const windowcon = document.querySelector('.windowcon'), 
container = document.querySelector('.container'), 
slides = document.querySelectorAll('img'), 
slidecounter = slides.length; 
let currentIndex = 0; 
for(i=0; i < slidecounter; i++){ slides[i].style.left = `${i*100}%`; } 
function calcul(){ 
    for(i=0; i<slidecounter; i++){ 
        if(windowcon.offsetHeight < slides[i].offsetHeight){ 
            windowcon.style.height = slides[i].offsetHeight +"px"; 
            windowcon.style.width = slides[i].offsetWidth +"px"; } } } 
        calcul(); 
        var lele = 0; 
        var i = 0; 
        function moveevent(){ 
            setInterval(function(){ 
                lele += 100; 
                container.style.transition ='.3s' 
                container.style.left ="-" + lele +"%"; i++; 
                if(i === slidecounter-1){ 
                    setTimeout(function(){ container.style.transition ='0s' 
                    lele = 0; 
                    container.style.left ="-" + lele +"%"; },201) 
                    i = 0; } }, 1000) } 
            moveevent();

