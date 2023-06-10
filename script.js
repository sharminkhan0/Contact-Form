<><script src="https://smtpjs.com/v3/smtp.js"></script><script>
    function submitEmail(){Email.send({
        Host: "smtp.gmail.com",
        Username: "easylearningaz@gmail.com",
        Password: "01717715221Sk#",
        To: 'beginnersielts@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact from Enquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email:" + document.getElementById("email").value
            + "<br> Phone no:" + document.getElementById("phone").value
            + "<br> Form:" + document.getElementById("form").value
    }).then(
        message => alert("Form Sent Successfully")
    )};
    
</script></>