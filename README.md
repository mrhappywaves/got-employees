# selling-it

## Table of contents
<details>
<summary><strong>Click to see the contents table</strong></summary>

- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Usage Examples](#usage-examples)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Testing](#testing)
- [Contact Me](#contact-me)
</details>

## Description
E-Commerce Back End (server) API.  

## Installation Instructions
To get the project set up locally please follow the following steps:
 1. Make sure you have `node.js` installed 
 2. Make sure you have `mysql` installed and a password set
 3. Make sure you have `Postman` or `Insomnia` installed for testing API calls. 
 4. Clone this repository https://github.com/mrhappywaves/selling-it to your local machine
 5. Open the repository with an IDE of your preference
 6. Switch your current directory to the local repository path (Ex: '..\Desktop\selling-it')
 7. In your IDE console run - `npm i` 
 8. In the selling-it folder create `.env` file 
 9. Fill out the the .env file by providing your mysql details: DB_USER, DB_PW, DB_NAME. (Note: DO NOT USE COMMAS in the file, example formatting: `DB_NAME=ecommerce_db`)
 10. Using your IDE console run command - `mysql -u root -p`. Enter your password and click Enter.
 11. Now under mysql run two commands separately: 1. `DROP DATABASE IF EXISTS ecommerce_db`; 2. `CREATE DATABASE ecommerce_db`; (Alternatively run this command: `SOURCE db/schema.sql`)
 12. Now run `quit` command 
 13. Second to last, in your IDE console run - `node server.js` to launch the application (Alternatively if you have nodemon, you can run nodemon.js). 
 14. Lastly, open up Postman or Insomnia and try to hit some API's. (Ex: http://localhost:3001/api/products)
 
## Usage Examples
Application can be used to track goodies to sell on a backend. Please see application usage videos below. 

Database setup and app launch:

https://user-images.githubusercontent.com/94947579/169232150-4e4e7f7e-7b9d-4b6b-9814-1a2b7bd21804.mp4

Routes demo:

https://user-images.githubusercontent.com/94947579/169257302-5e4e6d0d-2779-40ef-8ac4-323ca7e0d811.mp4

## Credits
 - Me 
 - Myself
 - And I 

 But to be honest, if this project or any other of my projects seem intriguing, please reach out to me and maybe we can build something awesome together.


## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features  
 - This is a server API app.
 - The API can be used to manage products for e-commerce or a physical store.

## Testing
There are no tests written for this application yet. 

## Contact me
Please reach out with any questions regarding the application:
 - My email is mrhappywaves@gmail.com
 - You can find me on Github via my username - mrhappywaves, or just follow this link https://github.com/mrhappywaves

