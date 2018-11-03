const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dcsrepenv/upload';
const CLOUDINARY_PRESET = 'ghxq3cx3'
let fileUpload = document.getElementById("image");
let success = document.getElementById("success");
let danger = document.getElementById("danger");
document.getElementById('add_form').addEventListener
('submit', menuPost);

fileUpload.addEventListener('change', imageUpload);
function imageUpload(event){
    let file = event.target.files[0]
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_PRESET);
    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    })
    .then((resp) => {
        console.log(resp);
        console.log(resp.data.secure_url)
    })
    .then((err) => {
        console.log(err);
    });
}
function json(response) {
    return response.json()
}
let token = window.sessionStorage.getItem("token");
if (!token){
    document.getElementById("profile").style.display = "none";
}

function menuPost(e){
    e.preventDefault();
    let dish = document.getElementById("dish").value;
    let price = document.getElementById("price").value;
    let desc = document.getElementById("desc").value;
    let image = document.getElementById("image").files[0].name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ;
    let menu = {
        "meal": dish,
        price: Number(price),
        "description": desc,
        "image": image
    }
    console.log(menu)
    fetch("https://fast-food-fast-db.herokuapp.com/api/v1/menu", {
        method: 'post',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json, text/plain, */*',
            "Content-type": "application/json",
        },
        body: JSON.stringify(menu)
    })
    .then(json)
    .then((res) => {
        console.log(res);
        if (res.status == 'Failed'){
            danger.innerHTML = res.message
            success.style.display = "none";
            danger.style.display = "block";
        }
        else if(res['Failed']){
            danger.innerHTML = res.Failed
            success.style.display = "none";
            danger.style.display = "block";
        }
        else{
            success.innerHTML = res.message;
            danger.style.display = "none";
            success.style.display = "block";
        }
    })
    .catch((err) => console.log(err))
}

