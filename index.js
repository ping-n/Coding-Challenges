const emailRegex =
  /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,6})(\.[A-Za-z]{2,6})?$/;

const emailInput = document.querySelector("#email");

let checkEmail = (e) => {
  emailInput.parentElement.classList.toggle(
    "valid",
    emailRegex.test(e.target.value)
  );
};

emailInput.addEventListener("input", checkEmail);
