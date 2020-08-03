# BackEnd

## Deployed Database URL:
### https://lambda-food-truck-api.herokuapp.com/

## Models

### Users

```
{
    user_first_name:    string
    user_last_name:     string
    username:           string      *REQUIRED*
    password:           string      *REQUIRED*
    user_email:         string      *REQUIRED*
    user_role:          string      *REQUIRED*
    user_radius_size:   int         DEFAULT 10
}
```
### Trucks

```
{
    truck_name:             string  *REQUIRED*
    truck_departure_time:   time
    truck_rating:           int
    truck_price_range:      int
    truck_cuisine_type:     string
    truck_description:      string
}
```

### Locations
#### Note: For ```geography``` type, see https://gisgeography.com/wgs84-world-geodetic-system/
```
{
    location_latitude:  geography
    location_longitude: geography
    location_address:   string
    location_city:      string
    location_state:     string
    location_zip_code:  int     *REQUIRED*

}
```
### Menus

```
{
    menu_item_name:        string  *REQUIRED*
    menu_item_description: string
    menu_item_price:       int     *REQUIRED*

}
```
### Photos

```
{
    photo_image_url:    string  *REQUIRED*
    photo_descrpiton:   string
    photo_alt_text:     string

}
```
### Promotions

```
{
    promotion_name:         string  *REQUIRED*
    promotion_description:  string
    promotion_price:        int

}
```

# Endpoints

## Users

| Request Type | Endpoint                       | Description             |
|:------------:|:------------------------------:|:-----------------------:|
| POST         | /api/user                      | Creates User            |
| POST         | /api/user/login                | Creates JWT             |
| GET          | /api/user/logout               | Ends User Session       |
| GET          | /api/users                     | Get All Users           |
| GET          | /api/user/:id                  | Returns User By ID      |
| PATCH        | /api/user/:id                  | Update User             |
| DELETE       | /api/user/:id                  | Remove User             |

## Trucks
| Request Type | Endpoint                       | Description             |
|:------------:|:------------------------------:|:-----------------------:|
| GET          | api/trucks                     | Get All Trucks          |
| GET          | api/truck/:id                  | Get Specific Truck      |
| POST         | api/truck/:id                  | Add Truck               |
| PATCH        | api/truck/:id                  | Update Truck            |
| DELETE       | api/truck/:id                  | Remove Truck            |

## Locations
| Request Type | Endpoint                           | Description                    |
|:------------:|:----------------------------------:|:------------------------------:|
| GET          | api/location/trucks                | Get Location of All Trucks     |
| GET          | api/location/truck:id              | Get Truck Location             |
| GET          | api/location/user/:id              | Get User Location              |
| PUT          | api/location/trucks:id             | Update Truck Location          |
| PUT          | api/location/user:id               | Update User Location           |
| DELETE       | api/location/truck/:id             | Delete Truck Location          |
| DELETE       | api/location/user/:id              | Delete User Location           |

## Menus
| Request Type | Endpoint                       | Description             |
|:------------:|:------------------------------:|:-----------------------:|
| GET          | api/menu/truck/:id             | Get Specific Truck Menu |
| GET          | api/menu/:id/item/:id          | Get Menu Item           |
| POST         | api/menu/:id/item              | Add Menu Item           |
| PATCH        | api/menu/:id/item              | Update Menu Item        |
| DELETE       | api/menu/:id/item              | Remove Menu Item        |

## Photos
| Request Type | Endpoint                       | Description             |
|:------------:|:------------------------------:|:-----------------------:|
| GET          | api/photo/truck/:id            | Get Truck Photo         |
| GET          | api/photo/menu/:id/item/:id    | Get Menu Item Photo     |
| POST         | api/photo/truck/:id            | Add Truck Photo         |
| POST         | api/photo/menu/:id/item/:id    | Add Menu Item Photo     |
| DELETE       | api/photo/truck/:id            | Delete Truck Photo      |
| DELETE       | api/photo/menu/:id/item/:id    | Delete Menu Item Photo  |

## Promotions
| Request Type | Endpoint                       | Description             |
|:------------:|:------------------------------:|:-----------------------:|
| GET          | api/promotions                 | Get All Promotions      |
| POST         | api/promotions                 | Add New Promotion       |
| PUT          | api/promotions/:id             | Update Promotion        |
| DELETE       | api/promotions/:id             | Delete Promotion        |
