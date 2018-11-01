window.addEventListener
('load', menuGet);
function json(response) {
    return response.json()
}
let danger = document.getElementById("danger");
// get items on menu
function menuGet(e){
    e.preventDefault();
    fetch("https://fast-food-fast-fontend-ch4.herokuapp.com/api/v1/menu",{
        method: 'get',
    })
    .then(json)
    .then((response) => {
        console.log(response);
        if(response.error){
            danger.innerHTML = `<h2>sorry, ${response.error}</h2>`
        }
        let menu =''
        let image_url = window.sessionStorage.getItem("image_url");
        console.log(image_url)
        response['Onmenu'].forEach((meal) => {
            Dish = `${meal.meal}`;
            Desc = `${meal.desc}`;
            price = `${meal.price}`;
            ID = `${meal.menu_id}`;
            Image = `${meal.image}`;
            menu += `<div class = "food">
            <img id ="image_${ID}" src="https://res.cloudinary.com/dcsrepenv/image/upload/v1540997420/${Image}">
            <span id ="id"></span>
            <h3>`+Dish+`</h3>`+Desc+` <br>
            <span id ="cost">price: shs.`+price+`k</span>
            <span class="add" ><a onclick="add(\'`+ID+`' )" href="#welcome"><button  id = "add" >Order</button></a></span>
            </div>`; 
        });
        document.getElementById("cost").innerHTML = menu;
    })
}
// create an order
function add(ID){
    let token = window.sessionStorage.getItem("token")
    console.log(ID)
    fetch("https://fast-food-fast-fontend-ch4.herokuapp.com/api/v1/users/orders/",{
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
            let today = new Date().toLocaleDateString()
            window.sessionStorage.setItem("date", today)
            document.getElementById("welcome").innerHTML;
            console.log(result);
        }
        else{
            console.log(result)
        }
        
    })
}