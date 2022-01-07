const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () =>{
        if(panel.classList.value == 'panel active'){
            window.location.href = 'http://www.google.com';
        }else{       

            removeActiveClasses()
            panel.classList.add('active')
        }
        
    })
});

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}