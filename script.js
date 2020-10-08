window.onload = () => {

    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuContent = document.getElementById("menu-content");
    const close = document.getElementById("close");
    


   
    menuButton.onclick = () => {

    setTimeout(() => {
        mobileMenu.style.height = "100vh";
    }, 100);

    setTimeout(() => {
        menuContent.style.display = "flex";
    }, 200);
    
       mobileMenu.style.display = "block";

}

 close.onclick = () => {
   

   mobileMenu.style.height = "0vh";

   setTimeout(() => {
    mobileMenu.style.display = "none"
}, 300);

setTimeout(() => {
    menuContent.style.display = "none"
}, 100);

 }

    




    /* Type Effect 

    var i = 0;
    var txt = 'Visualiser. Executer. Developer.'; // The text 
    var speed = 100; // The speed/duration of the effect in milliseconds 

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typeText").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);

            typeText.style.height = "100%";
            typeText.style.opacity = "1";
        }
    }

    typeWriter(); */





    
    

}