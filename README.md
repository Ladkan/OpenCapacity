# OpenCapacity (WIP)
  B2B marketplace pro sdílení nevyužitých kapacit
  ```
  users: user|admin|precisionmanufacturing|metalworks@test.com
  password: 1234567980
  ```
## Stack
- Client
> Vite, React, Tailwind, React Query
- Server
> express
- Database
> MongoDB

## API

Route | Method | Desc
--- | --- | ---
/categories | GET | Get all categories
/users | GET | Get all users
/auth/register | POST | Create new user
/auth/login | POST | Login to account
/bookings | POST | Create new booking
/bookings/:id | GET | Get booking by id
/bookings/:id | DELETE | Delete booking
/bookings/:id | PATCH | Update booking
/bookings/my/:id | GET | Get all users bookings
/bookings/merchant/:id | GET | Get all merchants bookings
/listings | POST | Create new listing
/listings | GET | Get all listings
/listings/:id | GET | Get listing by id
/listings/:id | PATCH | Update listing
/listings/:id | DELETE | Delete listing
/listings/merchant/:id | GET | Get all merchants listings
/messages | POST | Create message 
/messages/:id | GET | Get all messages for a booking by id
/details | POST | Create details for listing
/details/:id | GET | Get listing details by listng id
/details/:id | PATCH | Update details by details id
/details/:id | DELETE | Delete details by details by

