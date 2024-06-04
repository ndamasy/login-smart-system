
var userEmail = document.getElementById('user-email');
var userPassword = document.getElementById('user-password');
var userName = document.getElementById('user-name');
var submitBtn = document.getElementById('Submit-btn');
var signInBtn = document.getElementById('signin-btn');
var logInBtn = document.getElementById('log-in-btn');
var form = document.getElementById('first-form');
var welcomeScreen = document.querySelector('.welcome');
var logOutBtn = document.getElementById('btn');
var inValid = document.querySelectorAll('.alert');
var welcomeMessage = document.querySelector('.welcome-message');
var myForm = document.forms[0];

var userIndex ;
var userData = [];

if (sessionStorage.getItem('userData') != null) {
    userData = JSON.parse(sessionStorage.getItem('userData'));
}

function addUserData() {
    var user = {
        name: userName.value,
        mail: userEmail.value,
        pass: userPassword.value
    }

    if (userName.value !== '' && userEmail.value !== '' && userPassword.value !== '') {
        userData.push(user);
        saveUserData();
        return true;
    } else {
        alert('Please fill in all fields');
        return false;
    }

}

function saveUserData() {
    sessionStorage.setItem('userData', JSON.stringify(userData));
};

logInBtn.addEventListener('click', function (e) {
    submitBtn.classList.add('d-none');
    var foundUser = false;
    var currentUserName = '';
  
    for (var i = 0; i < userData.length; i++) {
        if (userData[i].mail === userEmail.value && userData[i].pass === userPassword.value) {
            foundUser = true;
            currentUserName = userData[i].name;
            userIndex = i;
            break;
        }
    }
    if (foundUser) {
        form.classList.add('d-none');
        welcomeMessage.innerHTML = 'welcome ' + currentUserName + '!';
        welcomeScreen.classList.remove('d-none');
        console.log('user logged is number' + userIndex);
    } else {
        alert('Invalid email or password');
    
    }
});

signInBtn.addEventListener('click', function (e) {
    signInBtn.innerHTML = 'Sign up';
    userName.classList.add('d-none');
    logInBtn.classList.remove('d-none');
    submitBtn.classList.add('d-none');
})
submitBtn.addEventListener('click', function (e) {
    if (addUserData()) {

        userName.classList.add('d-none');
        logInBtn.classList.add('d-none');
        signInBtn.classList.remove('d-none');
    }
})


logOutBtn.addEventListener('click', function (e) {
    userEmail.value = '';
    userPassword.value = '';
    userName.classList.add('d-none');
    submitBtn.classList.add('d-none');
    welcomeScreen.classList.add('d-none');
    logInBtn.classList.remove('d-none');
    form.classList.remove('d-none');
})
myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('hi')
})

// function vaidateBookmark(element) {
//     var regex = {
//         userNameInput: /^[A-Z].+/,
//         userEmailInput: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//         userPasswordInput: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
//     }

//     if (regex[element.id].test(userData.value)) {
//         element.classList.add('is-valid');
//         element.classList.remove('is-invalid');
//         element.nextElementSibling.classList.add('d-none');


//     } else {
//         element.classList.remove('is-valid');
//         element.classList.add('is-invalid');
//         element.nextElementSibling.classList.remove('d-none');


//     }

// }

















