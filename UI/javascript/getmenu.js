window.addEventListener
('load', menuGet);
function json(response) {
    return response.json()
}
function menuGet(e){
    e.preventDefault();
    fetch("http://127.0.0.1:5000/api/v1/menu",{
        method: 'get',
    })
    .then(json)
    .then((response) => {
        console.log(response);
        let menu =''
        response['Onmenu'].forEach((meal) => {
            Dish = `${meal.meal}`;
            Desc = `${meal.desc}`;
            price = `${meal.price}`;
            ID = `${meal.menu_id}`;
            Image = 'noodles.jpg';
            menu += `<div class = "food">
            <img src="image/`+Image+`">
            <span id ="id"></span>
            <h3>`+Dish+`</h3>`+Desc+` <br>
            <span id ="cost">price: shs.`+price+`k</span>
            <span class="add" ><a onclick="add(\'`+ID+`' )" href="#welcome"><button  id = "add" >Order</button></a></span>
            </div>`; 
        });
        document.getElementById("cost").innerHTML = menu;

    })
}

function add(ID){
    let token = window.sessionStorage.getItem("token")
    console.log(ID)
    fetch("http://127.0.0.1:5000/api/v1/users/orders/",{
        method: "post",
        headers: {
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json, text/plain, */*',
            "Content-type": "application/json",
        },
        mode: 'cors',
        body: JSON.stringify({meal_id:Number(ID)})
    })
    .then(json)
    .then((result) => {
        if (result.status == "Success"){
            document.getElementById("welcome").innerHTML;
            console.log(result);
        }
        else{
            console.log(result)
        }
        
    })
}