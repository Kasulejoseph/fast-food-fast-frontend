window.addEventListener
('load', edit); 
window.onload = function(){
    document.getElementById("search").oninput = function(){
        dom_id = document.getElementById("search").value;
        // document.getElementById("12").style.display ="none";
        // console.log(document.location.href)
        return false;
    };
};  
function json(response) {
    return response.json()
}
let danger = document.getElementById("danger");
let success = document.getElementById("success");
let order_id = document.getElementById("search").value;
order_id = Number(order_id)
let data = ''
data= `
    <table>
    <tr>
    <th id ="num_id">NO</th>
    <th>Name</th>
    <th>Description</th>
    <th>Price</th>
    <th></th>
    <th></th>
</tr>

    `
// get items on menu
function edit(e){
    e.preventDefault();
    fetch("https://fast-food-fast-db.herokuapp.com/api/v1/menu",{
        method: 'get',
    })
    .then(json)
    .then((response) => {
        console.log(response);
        response['Onmenu'].forEach((meal) => {
            Dish = `${meal.meal}`;
            Desc = `${meal.desc}`;
            price = `${meal.price}`;
            ID = `${meal.menu_id}`;
            data += ` <tr id = "${ID}">
            <td>${ID}</td>
            <td>${Dish}</td>
            <td>${Desc}</td>
            <td>${price}k</td>
            <td><button class="btn_edit" >Edit</button></td>
            <td><button id = "btn_delete" onclick ="deletee(${ID})" class="btn_delete" >Remove</button></td>
        </tr>`; 
        });
        data +=`</table>`
        document.getElementById("edit").innerHTML = data;

    })
}
function deletee(menu_id){
    let token = window.sessionStorage.getItem("token");
    console.log(menu_id)
    if (token){
        fetch(`https://fast-food-fast-db.herokuapp.com/api/v1/menu/${menu_id}`, {
            method: 'delete',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json, text/plain, */*',
                "Content-type": "application/json",
            },
            mode: 'cors'
        })
        .then(json)
        .then((response) => {
            console.log(response)
            if (response['failed']){
                danger.innerHTML = `<h2>${response['failed']}</h2>`;
                console.log(response['failed'])
            }
            else{
            success.innerHTML = `<h3>${response['success']}</h3>`
            document.getElementById(`${menu_id}`).style.display = 'none';
            console.log(response.success)
            }
        })
        .catch((err) => console.log(err))
    }

}
