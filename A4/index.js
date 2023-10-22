let usersDatabase = [] ;
function signUp(){
let name = document.getElementById("nameb").value;
let email = document.getElementById("emailb").value;
let password = document.getElementById("passwordb").value;
if (usersDatabase.some(user => user.email === email)) {
    alert("Email already exists!");
    console.log("Done");
}
else{
    usersDatabase.push({name,email,password});
    alert("Signup Suecessful Now you can Login!");
    console.log({name,email,password});
 }
}function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    const user = usersDatabase.find(user => user.email === email && user.password === password);
  
    if (user) {
      alert("Login Successful");
    } else {
      alert("Invalid Email or Password!");
    }
  }
  // Save usersDatabase to localStorage
localStorage.setItem('usersDatabase', JSON.stringify(usersDatabase));

// Retrieve usersDatabase from localStorage
const storedUsersDatabase = JSON.parse(localStorage.getItem('usersDatabase')) || [];


let Register = document.getElementById("Register").addEventListener("click" , signUp);
let Login = document.getElementById("Login").addEventListener("click", login);