var faq = document.getElementsByClassName("faq-page");

var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function (event) {
        var clickedItem = event.currentTarget;
        
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        clickedItem.classList.toggle("active");
        
        /* Toggle between hiding and showing the active panel */
        var body = clickedItem.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
