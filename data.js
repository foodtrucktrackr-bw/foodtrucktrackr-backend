const users = [
    {id: 1, username: "user101", password: "user101", user_email: "user101@gmail.com", user_first_name: "User", user_last_name: "Doe" , user_role: "operator"},
    {id: 2, username: "user102", password: "user102", user_email: "user102@gmail.com", user_first_name: "User", user_last_name: "Doe" , user_role: "diner"}
]

const trucks = [
    {id: 1, truck_name: "Foodtruck101", truck_departure_time: new Date("December 31, 2100 21:00:00"), truck_arrival_time: new Date("January 1, 2010 08:00:00"), user_id: 1, location_zip_code: "33177", location_city: "Miami", location_address: "14731 SW Truck Ave", location_state: "FL", truck_cuisine_type: "Latin", truck_description: "Very good truck, very tasty food."},
    {id: 2, truck_name: "Foodtruck102", truck_departure_time: new Date("December 31, 2100 23:59:59"), truck_arrival_time: new Date("January 1, 2010 00:00:00"), user_id: 1, location_zip_code: "33177", location_city: "Miami", location_address: "14731 SW Truck Ave", location_state: "FL", truck_rating: 3, truck_cuisine_type: "Vegetarian", truck_description: "Very good truck, very tasty food."}
]

const favorite_trucks = [
    {user_id: 2, truck_id: 1}
]

const food_items = [
    {id: 1, menu_item_name: "Rice with chicken", menu_item_description: "Rice with fried chicken, beans and a side of veggies", truck_id: 1},
    {id: 2, menu_item_name: "Rice with steak", menu_item_description: "Rice with steak, beans and a side of veggies", truck_id: 1},
    {id: 3, menu_item_name: "Rice with pork", menu_item_description: "Rice with pork, beans and a side of veggies", truck_id: 1},
    {id: 4, menu_item_name: "Rice with fish", menu_item_description: "Rice with fish, beans and a side of veggies", truck_id: 1},
    {id: 5, menu_item_name: "Something vegetarian 1", menu_item_description: "It's vegetarian but tastes like chiken", truck_id: 2},
    {id: 6, menu_item_name: "Something vegetarian 2", menu_item_description: "It's vegetarian but tastes like steak", truck_id: 2},
    {id: 7, menu_item_name: "Something vegetarian 3", menu_item_description: "It's vegetarian but tastes like fish", truck_id: 2}
]

const truck_ratings = [
    {user_id: 2, truck_id: 1, rating: 5},
    {user_id: 2, truck_id: 2, rating: 3}
]



module.exports = {
    users,  
    trucks,
    favorite_trucks,
    food_items,
    truck_ratings
}
