# Setting up the Backend

## Setup the project
to install all the dependencies for this frontend content management tool
### `npm install`

## Setup the Environment Variable (.env)
 
| Name      | value |
| ----------- | ----------- |
|     MONGODB_URL  | **your mongo database url**   |
|     PORT  | **your custom port**   |

## API Endpoints
- **POST** ***/contact***:Accepts a newcontact entry from the frontend and stores it in
 the database.
- **GET** ***/contact***: Retrieves all contact entries to populate the table.
- **GET** ***/contact/:id***: Retrieves one contact entries to populate the table.
- **PUT** ***/contact/:id***: Updates a specific contact’s information.
- **DELETE** ***/contact/:id***: Deletes a contact from the database

### for Development Mode - `npm run dev`
### for Development Mode - `npm start`

