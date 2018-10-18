document.getElementById('form').addEventListener
('submit', registerUser);
document.getElementById('login_form').addEventListener
('submit', loginUser);
let danger = document.getElementById("danger");
let Success = document.getElementById("success");
let danger2 = document.getElementById("danger2");

function json(response) {
    return response.json()
}
function jwtToken(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64))
}

function registerUser(e){
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    const url = "https://fast-food-fast-db.herokuapp.com/api/v1/auth/signup";
    if (password != confirm){
        danger.innerHTML = 'Password do not match';
    }
    else{
    let userdata = {
        "username": username,
        "password": password,
        "email": email,
        "location": address,
        "role": "admin"     
    }
    fetch('http://127.0.0.1:5000/api/v1/auth/signup',{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            "Content-type": "application/json",
        },
        mode: 'cors',
        body: JSON.stringify(userdata)
    })
    .then(json)
    .then((res) => {
        console.log('Request succeeded with JSON response', res);
        if(res.status !== 'Success'){
            console.log(res.status)
            document.getElementById("success").style.display = 'none';
            danger.innerHTML = res.message;
        }
        else{
            document.getElementById("danger").style.display = 'none';
            success.innerHTML = res.message;
            document.getElementById("logini").style.display = "block";
            document.getElementById("form").style.display = "none";
        }
    })
    .catch((err) => console.log(err))
}
}


function loginUser(e){
    e.preventDefault()
    let username = document.getElementById("login_username").value;
    let password = document.getElementById("login_password").value;
    let loginData = {
        username:username,
        password:password
    }
    fetch('http://127.0.0.1:5000/api/v1/auth/login',
    {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            "Content-type": "application/json",
        },
        mode: 'cors',
        body: JSON.stringify(loginData)  
    })
    .then(json)
    .then((response) => {
        console.log('Request succeeded with JSON response', response);
        if (response.status == 'Failed'){
            console.log(response.message)
            danger2.innerHTML = response.message;
        }
        else{
            window.sessionStorage.setItem("token", response.auth_token)
            let token = window.sessionStorage.getItem("token")
            let tokenDecoded = jwtToken(token)
            let role = tokenDecoded.role
            if(role == 'user'){
                window.location.href = './home.html'
            }
            else if(role == 'admin'){
                window.location.href = './add_food.html'
        }
        else{
            console.log('invalid role')
        }
        }
    })

}


// hide or show login page
function login(){
    if (document.getElementById("logini").style.display = "none"){
        document.getElementById("logini").style.display = "block";
        document.getElementById("form").style.display = "none";
    }
    else {
        document.getElementById("logini").style.display = "none";
    }
}

//define 
// var edit = document.getElementsByClassName("btn_edit")[0];
// //
// var cmpt = document.getElementsByClassName("btn_cpt")[0];

// var elete = document.getElementsByClassName("btn_delete")[0];

// edit.onclick = function(){
//     edit.style.display ="none";
//     elete.style.display ="none";
//     cmpt.style.backgroundColor ="hsl(123, 69%, 41%)";
// }
