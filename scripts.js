/* Add your JavaScript to this file */
"uses strict";

window.addEventListener("load", (event) => {
    let formuse = document.querySelector("form");
    formuse.addEventListener("submit", (e) => {
        e.preventDefault();
        let mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //provides the regex expression for a email-address
        let data = document.forms[0]["email"].value;
        let message = document.querySelector(".message");
        if(data.match(mailformat)){
            message.textContent = `Thank you! Your email address ${data} was added to our mailing list`;
        }else{
            message.textContent = "Please enter a valid email address.";
        }
        document.querySelector("form").reset();
    });
});