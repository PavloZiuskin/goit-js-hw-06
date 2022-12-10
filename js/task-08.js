const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const evtElements = evt.currentTarget.elements;
  //   console.dir(evtElements);

  const mail = evtElements.email.value;
  //   console.log(mail);

  const password = evtElements.password.value;
  //   console.log(password);

  if (mail === "" || password === "") {
    alert("All input cannot be empty!");
  } else {
    const formData = {
      mail,
      password,
    };
    console.log(formData);
    form.reset();
  }
}
