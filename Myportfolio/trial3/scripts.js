document.getElementById('contact-form').addEventListener ('submit'),function(event){
    event.preventDefault();
    const name= 
    document.getElementById('name').value;
    const email=
    document.getElementById('email').value;
    const message=
    document.getElementById('message').value;
    document.getElementById('form-response').innerText=`Thank you............. we have received your message.`;

    document.getElementById('contact-form').requestFullscreen();

}
