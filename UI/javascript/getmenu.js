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
        let ID =''
        response['Onmenu'].forEach((meal) => {
            Dish = `${meal.meal}`;
            Desc = `${meal.desc}`;
            price = `${meal.price}`;
            Image = 'noodles.jpg';

            ID += `<div class = "food">
            <img src="image/`+Image+`">
            <h3>`+Dish+`</h3>`+Desc+` <br>
            <span id ="cost">price: shs.`+price+`k</span>
            <span class="add"><a href="#welcome"><button >Order</button></a></span>
            </div>`; 
        });
        document.getElementById("cost").innerHTML = ID;
        
       
    })
}