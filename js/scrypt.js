let but = document.querySelector(".red");

but.addEventListener("click", () => getVal());
but.addEventListener("click", () => login());

function getVal() {
  let email = document.querySelector("#email").value;
  let pas = document.querySelector("#pass").value;
  console.log("User email: " + email);
  console.log("User password: " + pas);
}

function login() {
  document.querySelector("form").style.display = "none";
  document.querySelector(".loader").style.display = "block";
  link = () => {
    document.location.assign("./login.html");
  };
  setTimeout(link, 4500);
}
