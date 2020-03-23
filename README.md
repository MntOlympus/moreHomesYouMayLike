# MntOlympus Home/Travel/Booking App

> Recommended listing component for home/travel/reservation application

## Related Projects

  - https://github.com/MntOlympus/reviews
  - https://github.com/MntOlympus/reservations
  - https://github.com/MntOlympus/photos

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

After installing dependencies, execute 'npm run seed' from the command line. This will provide a randomized set of homes to load in the component in your mongoDB database under the db called 'recommendations'.

After that, run 'npm start' to start the server. Point your client browser to 'localhost:3009' to access!

Enjoy.

## Requirements
MongoDB v4.2.3 installed on user's system. To verify this, simply type 'mongo' from your terminal command line and check the version.
This application assumes a no-password access to mongoDB. Further configuation would be required in the ./database/seed.js file to require password access for seeding the database.

Otherwise, refer to [Usage](#Usage)

## Development
You can run the server in development mode by running:
-npm run start-dev (this uses nodemon)

...and develop the react components by simply running:
-npm run react-dev (this runs webpack and related confirguration, watching the files to update in real-time)

### Installing Dependencies

From within the root directory:

```sh
npm install
```

