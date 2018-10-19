document.getElementById('add_form').addEventListener
('submit', menuPost);
let success = document.getElementById("success");
let danger = document.getElementById("danger");

function json(response) {
    return response.json()
}

function menuPost(e){
    e.preventDefault();
    let dish = document.getElementById("dish").value;
    let price = document.getElementById("price").value;
    let intPrice = parseInt(price)
    let desc = document.getElementById("desc").value;
    let menu = {
        "meal": dish,
        price: Number(price),
        "description": desc
    }
    fetch('http://127.0.0.1:5000/api/v1/menu', {
        method: 'post',
        headers: {
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
        else{
            success.innerHTML = res.message;
            danger.style.display = "none";
            success.style.display = "block";
        }
    })
    .catch((err) => console.log(err))
}
