const carsContainer = document.querySelector("#cars_container");
const usersContainer = document.querySelector("#users_container");

const BASE_URL = "http://localhost:8080";

const fetchData = async (route) => {
    const response = await fetch(BASE_URL + route);
    return await response.json();
};

const postData = async (route, payload) => {
    fetch(
        BASE_URL + route,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: payload
        },
    )
        .then(() => alert("OK"))
        .catch(() => alert("Error sending request"))
};

const drawCars = async () => {
    const cars = await fetchData("/cars");
    const users = await fetchData("/users");

    carsContainer.innerHTML = "";
    usersContainer.innerHTML = "";


    for (const car of cars) {
        carsContainer.innerHTML += `
            <div class="car_item">
                <p>ID: ${car._id}</p>
                <p>Model: ${car.model}</p>
                <p>Color: ${car.color}</p>
                <p>Year: ${car.year}</p>
                <p>Current owner: ${car.owner?.fullName || ""}</p>
                <p>Owners history:</p> 
                ${car.ownersHistory.map(item => `<li> ${item?.fullName}</li>`).join("")}
        
            </div>
               
        `

    }


    for (const user of users) {
        usersContainer.innerHTML += `
            <div class="user_item">
                <p>ID: ${user._id}</p>
                <p>FullName: ${user.fullName}</p>
                <p>Login: ${user.login}</p>
                <p>Password: ${user.password}</p>
        
            </div>
               
        `

    }
};
drawCars()

change_owner.addEventListener("click", () => {
    const newProductsName = document.querySelector("#new_products_name").value;
    const newProductsPrice = document.querySelector("#new_products_price").value;
    const checkboxCategory = document.querySelector(".checkbox");
    
    const payload = {
        name: newProductsName,
        price: newProductsPrice,
        categoryId: checkboxCategory.textContent,
    };
    fetch(BASE_URL + "/products", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "post",
        body: JSON.stringify(payload)
    })
        .then(() => loadData())
        .catch(() => alert("products create error"));
})