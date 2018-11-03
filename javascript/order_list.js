window.addEventListener
('load', userHistory);
function json(response) {
    return response.json()
}
function userHistory(e){
    e.preventDefault();
    let token = window.sessionStorage.getItem("token")

    fetch("https://fast-food-fast-db.herokuapp.com/api/v1/users/orders/", {
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
        let username = window.sessionStorage.getItem("username");
        let history = ''
        history=` <table >
            <tr>
                <th id ="num_id">Order Id</th>
                <th>Name</th>
                <th>Customer </th>
                <th>Costs</th>
                <th>Date</th>
                <th>Status</th>
            </tr>`
        
        if (response.error){
            history +=`</table>`
            message = `<h2>`+response.error+`</h2>`
            console.log(response);
            document.getElementById("history").innerHTML = history + message;
        }
        else{
        response['Requested'].forEach(orders => {
            console.log(response)
            order_id = orders.order_id
            meal = orders.meal
            price = orders.price
            status = orders.status
            date = orders.date_created 
            history += `
           
        <tr>
            <td>`+order_id+`</td>
            <td>`+meal+`</td>
            <td>`+username+`</td>
            <td>shs.`+price+`k</td>
            <td>`+date+`</td>
            <td><button class="btn_edit" >`+status+`</button></td>
        </tr>
            `
            console.log(response['Requested'].length)
        });
        history +=`</table>`
        document.getElementById("history").innerHTML = history
    }
    })
}