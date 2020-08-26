window.onload = () => {

    var body = document.body;
    var html = document.documentElement;


    /* SHOW CONTACT */

    var contactButton = document.getElementById("contact-button");
    var contactBox = document.getElementById("contact");




    contactButton.onclick = () => {

        contactBox.style.display = "flex";

        setTimeout(function () {
            contactBox.style.transform = "translate(0%)";
        }, 50);


    }

    if (html.scrollTop < 1050) {
        contactBox.style.transform = "translate(-100%)";
        contactBox.style.display = "none";
    }



    // Type Effect 

    var i = 0;
    var txt = 'Visualiser. Executer. Developer.'; /* The text */
    var speed = 100; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typeText").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);

            typeText.style.height = "100%";
            typeText.style.opacity = "1";
        }
    }

    typeWriter();

    /*


    const projectOneText = document.getElementById("projectOneText");
    const projectTwoText = document.getElementById("projectTwoText");
    const projectThreeText = document.getElementById("projectThreeText");
    const projectFourText = document.getElementById("projectFourText");
    const projectFiveText = document.getElementById("projectFiveText");


    if (window.innerWidth > 930) {


        projectOneText.onmouseover = () => {

            setTimeout(() => {
                projectOneText.style.width = "100%";

            }, 50);
    
        }

        projectOneText.onmouseout = () => {

            setTimeout(() => {
                projectOneText.style.width = "30%";
            }, 50);

        }

        projectTwoText.onmouseover = () => {

            setTimeout(() => {
                projectTwoText.style.width = "100%";

            }, 50);


        }

        projectTwoText.onmouseout = () => {

            setTimeout(() => {
                projectTwoText.style.width = "30%";
            }, 50);

        }

        projectThreeText.onmouseover = () => {

            setTimeout(() => {
                projectThreeText.style.width = "100%";

            }, 50);


        }

        projectThreeText.onmouseout = () => {

            setTimeout(() => {
                projectThreeText.style.width = "30%";
            }, 50);

        }


        projectFourText.onmouseover = () => {

            setTimeout(() => {
                projectFourText.style.width = "100%";

            }, 50);


        }

        projectFourText.onmouseout = () => {

            setTimeout(() => {
                projectFourText.style.width = "30%";
            }, 50);

        }

        projectFiveText.onmouseover = () => {

            setTimeout(() => {
                projectFiveText.style.width = "100%";

            }, 50);


        }

        projectFiveText.onmouseout = () => {

            setTimeout(() => {
                projectFiveText.style.width = "30%";
            }, 50);

        }


    }

    */


}