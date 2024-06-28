function handleSubmit(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var formResponse = document.getElementById("formResponse");

  if (name && email && message) {
    formResponse.innerHTML = '<div id="success">Form submitted successfully!</div>';
    event.target.reset();
  } else {
    formResponse.innerHTML = '<div id="error">Please fill in all fields</div>';
  }
}