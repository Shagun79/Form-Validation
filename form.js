let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let flag = 1;
function validateForm() {
  if (username == "") {
    document.getElementById("userError").innerHTML = "Username is Empty";
    flag = 0;
  } else if (username.length < 3) {
    document.getElementById("userError").innerHTML =
      "Username requires minimimum 3 characters";
    flag = 0;
  } else {
    document.getElementById("userError").innerHTML = "";
    flag = 1;
  }
  if (password == "") {
    document.getElementById("passError").innerHTML = "password is Empty";
    flag = 0;
  } else {
    document.getElementById("passError").innerHTML = "";
    flag = 1;
    
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
}
