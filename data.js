const users = [
    {id: 1, username: "user101", password: "user101", user_email: "user101@gmail.com", user_first_name: "User", user_last_name: "Doe" , user_role: "operator"},
    {id: 2, username: "user102", password: "user102", user_email: "user102@gmail.com", user_first_name: "User", user_last_name: "Doe" , user_role: "diner"}
]

const trucks = [
    {id: 1, truck_name: "Foodtruck101", truck_departure_time: new Date("December 31, 2100 21:00:00"), truck_arrival_time: new Date("January 1, 2010 08:00:00"), user_id: 1, location_zip_code: "33177", location_city: "Miami", location_address: "14731 SW Truck Ave", location_state: "FL", truck_rating: 4, truck_cuisine_type: "Latin", truck_description: "Very good truck, very tasty food."},
    {id: 2, truck_name: "Foodtruck102", truck_departure_time: new Date("December 31, 2100 23:59:59"), truck_arrival_time: new Date("January 1, 2010 00:00:00"), user_id: 1, location_zip_code: "33177", location_city: "Miami", location_address: "14731 SW Truck Ave", location_state: "FL", truck_rating: 3, truck_cuisine_type: "Vegetarian", truck_description: "Very good truck, very tasty food."}
]

const favorite_trucks = [{
    user_id: 2,
    truck_id: 1
}
]



module.exports = {
    users,  
    trucks,
    favorite_trucks
}
