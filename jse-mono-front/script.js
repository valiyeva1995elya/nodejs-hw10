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

    carsContainer.innerHTML = "";


    for (const car of cars) {
        carsContainer.innerHTML += `
            <div class="car_item">
                <p>Model: ${car.model}</p>
                <p>Color: ${car.color}</p>
                <p>Year: ${car.year}</p>
                <p>Current owner: ${car.owner?.fullName || ""}</p>
                <p>Owners history:</p> 
                ${car.ownersHistory.map(item => `<li> ${item?.fullName}</li>`).join("")}
        
            </div>
            <hr>
               
        `

    }
};
drawCars()
