function sendEmail(event) {
    event.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const telephone = document.getElementById('telephone').value;
const age= document.getElementById('age').value;
emailjs.send("service_ylaqizf", "template_u25g3j4", {
    name: name,
    email: email,
    telephone: telephone,
    age: age
})
.then(response=> {
 alert("Registration Successful! A confirmation email has been sent.");
 document.getElementById("registerForm").reset();
})
.catch(error => {
    console.error("Error, error");
    alert("Failed to send registration. Please try again");
});
}