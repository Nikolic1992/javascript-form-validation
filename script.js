function validateForm() {
  const password = document.getElementById("password").value;
  const subscribe = document.getElementById("subscribe").checked;

  let forbiddenPasswords = ["1111", "0000", "qwerty", "54321", "pass"];

  if (forbiddenPasswords.includes(password)) {
    alert("Your password is too simple!");
    return;
  }

  if (subscribe) {
    alert("Successfully registered and subscribed!");
  } else {
    alert("Successfully registered!");
  }
}
