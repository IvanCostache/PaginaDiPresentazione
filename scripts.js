AOS.init();

document.getElementById('contattami').addEventListener("submit", sendEmail);

function sendEmail(e){
  e.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  Email.send({
      SecureToken:"1dfd454e-4cd9-4670-a141-ec8e6dcf8d47",
      To : "ivan.costache@gmail.com",
      From : email,
      Subject : `${name} sent you a message`,
      Body : `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`
  }).then(
    (message) => alert("Mail inviata con successo")
  );

  document.getElementById('name').value="";
  document.getElementById('email').value="";
  document.getElementById('message').value="";

}
