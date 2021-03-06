var AdminEmail = "dthomaslomas@gmail.com";
var nameLength = 4;
var emailLength = 8;
var messageLength = 10;
var ErrorMessage = "\
    Your name must be at least "+nameLength+" characters \n\
    Your email must be valid \n\
    You must have at least "+messageLength+" characters \n\
";

document.addEventListener("DOMContentLoaded", function(){
    var formSubmit = document.getElementById("formSubmit");
    var name = document.getElementById("name");
    var mail = document.getElementById("mail");
    var message = document.getElementById("message");
    var user = {
        name : "",
        email : "",
        message : ""
    };

    formSubmit.addEventListener("click", function(e){
        e.preventDefault();
        user.name = name.value;
        user.email = mail.value;
        user.message = message.value;
        console.log(user);
        if( (user.name.length > nameLength) && (user.email.length > emailLength) && (user.message.length > messageLength) ){
            $.ajax({
                url: "https://formspree.io/"+AdminEmail, 
                method: "POST",
                data: user,
                dataType: "json",
                success : function(data){
                    console.log(user);
                    document.querySelector(".emailcontainer").outerHTML = "";
                    document.querySelector(".successMessage").setAttribute("style", "display:block");
                    console.log("Success");
                },
            });
        } else {
            alert(ErrorMessage);
        }

    },false);


    // Auto scroll,removing # and single page links
    $(document).on('click', 'a[href^="#"]', function (event) {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        event.preventDefault(); 
    });


    // Google tag manager
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-109053989-1');

    //Google analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-109053989-1');

}, false);