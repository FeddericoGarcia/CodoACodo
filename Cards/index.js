document.addEventListener("DOMContentLoaded", function () {

    var darkModeToggle = document.getElementById('darkModeToggle');
    var app = document.getElementById('app');

    darkModeToggle.addEventListener('click', function (){
        
        if (!app.classList.contains('dark-mode')){
            app.classList.add('dark-mode');
        } else {
            app.classList.remove('dark-mode');
        }

    })
})