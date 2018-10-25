window.addEventListener
('load', orderAll);     
function json(response) {
    return response.json()
}
let order_id = document.getElementById("search").value;
order_id = Number(order_id)
// if (typeof(order_id) === 'string'){
//     document.getElementById("danger").innerHTML = `<h2>Input should be a number value</h2>`
//     console.log(order_id)
// }
let data = ''
data= `
    <table>
    <tr>
        <th id ="num_id">Order Id</th>
        <th>Name</th>
        <th>Customer </th>
        <th>Location </th>
        <th>Costs</th>
        <th>Date</th>
        <th></th>
        <th></th>
        <th>Completed</th>
    </tr>
    `
// returns all user details registered
function orderAll(e){
    e.preventDefault();
    let token = window.sessionStorage.getItem("token")
    fetch("https://fast-food-fast-db.herokuapp.com/api/v1/users", {
    method: 'get',
    headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json, text/plain, */*',
        "Content-type": "application/json",
    },
    mode: 'cors'
    })
    .then(json)
    .then((res) => {
        if (order_id){
            orderById(res, order_id);
        }
        else{
        call_u(res);
        }
        
    })
}
// fetch all orders made by different users
function call_u(res){
    let token = window.sessionStorage.getItem("token")
    fetch("https://fast-food-fast-db.herokuapp.com/api/v1/orders/", {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json, text/plain, */*',
            "Content-type": "application/json",
        },
        mode: 'cors'
    })
    .then(json)
    .then((response) => {
        if (response['error']){
            data += `</table>`
            message= `<h2>${response['error']}</h2`
            document.getElementById("data").innerHTML = data + message
        }
        console.log(response)
        let order_list = {}
        let date = window.sessionStorage.getItem("date")
        res['users'].forEach(user => {
            response['Orders'].forEach(order => {
                if (user.user_id == order.menu_id){
                    order_list = Object.assign({},user, order)
                    date = date
                    data += `
                    <tr>
                    <td >`+order_list.order_id+`</td>
                    <td>`+order_list.meal+`</td>
                    <td>`+order_list.username+`</td>
                    <td>`+order_list.location+`</td>
                    <td>shs.`+order_list.price+`k</td>
                    <td>`+date+`</td>
                    <td id="btn_edit"><button onclick ="accept(${order_list.order_id})" class="btn_edit" >Accept</button></td>
                    <td id="btn_delete"><button onclick ="decline(${order_list.order_id})" class="btn_delete" >Decline</button></td>
                    <td id = "checked"><input onclick="complete(${order_list.order_id})" type="checkbox" id ="checkbox">
                        <span class="checkmark"></span></td>
                        
                </tr>
                    `
                }
                
            })
    });
    data += `</table>`
    document.getElementById("data").innerHTML = data
});
}
// fetch a specific order by its id
function orderById(res, order_id){
    let token = window.sessionStorage.getItem("token");
    console.log(order_id)
    if (token){
        fetch(`https://fast-food-fast-db.herokuapp.com/api/v1/orders/${order_id}`, {
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json, text/plain, */*',
                "Content-type": "application/json",
            },
            mode: 'cors'
        })
        .then(json)
        .then((result) => {
            if (result.status == 'Failed'){
                data += `</table>`
                message = `
                <h2>No order item found for that id</h2>
                `
                document.getElementById("data").innerHTML = data + message
            }
            else{
                res['users'].forEach(user => {
                    if (user.user_id == result['order'].user_id){
                        order_list = Object.assign({},user, result['order'])
                        console.log(order_list)
                        data += `
                        <tr>
                        <td >`+order_list.order_id+`</td>
                        <td>`+order_list.meal+`</td>
                        <td>`+order_list.username+`</td>
                        <td>`+order_list.location+`</td>
                        <td>shs.`+order_list.price+`k</td>
                        <td>24/03/2018</td>
                        <td id="btn_edit"><button onclick ="accept(${order_list.order_id})" class="btn_edit" >Accept</button></td>
                        <td id="btn_delete"><button onclick ="decline(${order_list.order_id})" class="btn_delete" >Decline</button></td>
                        <td id = "checked"><input onclick="complete(${order_list.order_id})" type="checkbox" id ="checkbox">
                            <span class="checkmark"></span></td>
                    </tr>
                    `
                    }
              
        })
        data += `</table>`
        document.getElementById("data").innerHTML = data

    }
    })
}
}
// update order with processing
function accept(order_id){
    let token = window.sessionStorage.getItem("token");
    console.log(order_id)
    if (token){
        fetch(`https://fast-food-fast-db.herokuapp.com/api/v1/orders/${order_id}`, {
            method: 'put',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json, text/plain, */*',
                "Content-type": "application/json",
            },
            mode: 'cors',
            body: JSON.stringify({'status': "processing"})
        })
        document.getElementById("btn_edit").innerHTML =`
        <td id="btn_edit"><button class="btn_edit" >Accepted</button></td>`
        
    }

}
// update order status with cancelled
function decline(order_id){
    let token = window.sessionStorage.getItem("token");
    console.log(order_id)
    if (token){
        fetch(`https://fast-food-fast-db.herokuapp.com/api/v1/orders/${order_id}`, {
            method: 'put',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json, text/plain, */*',
                "Content-type": "application/json",
            },
            mode: 'cors',
            body: JSON.stringify({'status': "cancelled"})
        })
        document.getElementById("btn_delete").innerHTML = `
        <td id="btn_delete"><button class="btn_delete" >Declined</button></td>`;
    }

}
// update order status with complete
function complete(order_id){
    let token = window.sessionStorage.getItem("token");
    console.log(order_id)
    if (token){
        fetch(`https://fast-food-fast-db.herokuapp.com/api/v1/orders/${order_id}`, {
            method: 'put',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json, text/plain, */*',
                "Content-type": "application/json",
            },
            mode: 'cors',
            body: JSON.stringify({'status': "complete"})
        })
    }

}

