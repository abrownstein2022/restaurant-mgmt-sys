# Restaurant Management System (Interactive Full-Stack Project)

Link to demo in Heroku:
https://proj2-restaurant-mgmt-sys.herokuapp.com

![license](https://img.shields.io/badge/license-MIT-black)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How-to-Contribute](#how-to-contribute)
- [Tests](#test-instructions)
- [Questions](#questions)

## Description

<!-- this is `inline-code` here -->


```md
This interactive JavaScript full-stack project is a restaurant management system called "Restaurant Mgr". 
The application can be used by a restaurant to allow customers to log in and place online orders.

The following technologies and instructions were used:
• Node.js and Express.js to create a RESTful API.
• Handlebars.js as the template engine.
• MySQL and the Sequelize ORM for the database.
• Both GET and POST routes for retrieving and adding new data.
• At least one new library, package, or technology that we haven’t discussed in class.  This project uses dates-fns to format the order date in vieworder.handlebars (https://date-fns.org/).  We also used Nodemon for testing to automatically restart the local server when it detects changes made to files.
• Have a folder structure that meets the MVC paradigm.
• Include authentication (express-session and cookies).  This project includes register and login pages for customers to login to place online orders from our restaurant "Group 5's Burgers and Fries".
• Protect API keys and sensitive information with environment variables.
• Be deployed using Heroku (with data).
• Have a polished UI.
• Be responsive.  We changed formatting in the handlebars files and tested to ensure the design works on smaller screens, like mobile devices.
• Be interactive (accept and respond to user input).
• Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc).
• Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).

User Story  
As a customer who loves burgers and fries
I want to have a website to order food online
SO THAT I am not hungry

Acceptance Criteria
GIVEN a restaurant ordering system with form inputs
WHEN I log in with my existing login credentials
THEN I am presented with a landing page to either place a new order, view my past orders or logout
WHEN I register as a new customer 
THEN my customer and login data are saved and I am automatically taken to the landing page
WHEN I press the Place Order button to place a new order
THEN I am presented with the menu items, a quantity input field and a button to add amy item to my order
WHEN I am selecting my menu items on the Place Order page
THEN I see a display of my current order and a Place Order button so I can place my order when I am ready 
WHEN I press the Place Order button on the order page to submit my order
THEN my order data is saved in the database
WHEN I am done with my order
THEN I can press the Back to Homepage button to return to the landing page
WHEN I press the View Past Orders button
THEN I see my past orders in a columnar display
WHEN I am done viewing my past orders
THEN I can press the Back to Homepage button to return to the landing page
WHEN I press the logout button on the landing page
THEN I am logged out securely from the application

## Installation
the other developers
To use this application, please read the following steps:

Clone this GitHub repo XXXXXXXXXXXXX link to github repo.
<!-- Check out the gh cli tool from github -->
```bash
$ gh repo clone /username/reponame
```
From the terminal, run 

```bash
$ npm install
```

In package.json, peer dependencies already exist for dotenv, mysql2 and
sequelize so you do not have to install these packages. 

Log into mysql:
```
$ mysql –u[user name] -p[password] -h[hostname] 
```
Create the mysql database on your local machine:
```sql
 mysql> --source './db/schema.sql'
```
[] implies user input
 mysql> *database name* < C:\[filename].sql

5.  Create the tables and seed with data:
    $ npm run './seeds/seed.js


Start the server and watch for file changes to automatically restart server
```bash
$ npm run watch 
```


```

## Usage

```md
After following the installation steps above, please proceed below.

For the purposes of this exercise:
1. This application is used by one restaurant called "Group Five's Burgers and Fries".
2. This restaurant only accepts online orders.
3. A customer called "employee" can view all customer and order information(**to be discussed if we have time).

To use this application, go to the Terminal and type 'npm start' and press enter.

A login screen appears for the customer to enter their login and password, or sign up.  
If a customer forgets their password, they click on the "Forgot my password" link to 
reset it.

Once logged in, the customer lands on the main website page with 3 buttons: "Place Order",
"Update/Delete My Info" and "View My Orders".  

"Place Order' button
1. Customer see a page to select item types, and select an item based on the item type selected. 
2. The item price is then displayed next to the selected item.    
3. Customers can enter as many order lines as they want by clicking on the "Order additional 
items" button.  
4. Customers can also change that line item to something else before confirming the order. 
5. Customers must also enter the item quanity for each item ordered. 
6. When customers are done creating their order, they click the "I'm done" button.  Then, 
their order number, order date, and all their order lines are displayed.  Order lines contain
line item total cost and the order total cost at the bottom.
7. Customers press the "Return To Homepage" button to close this screen and return to the prevous screen.

"Update/Delete My Info" button
1. Customers can change their their first name, last name, business name (optional), phone number,
login and password.
2. All fields are required except for the business name.  Phone number is validated to be 10 numbers.
3. Customers press the "Save My Changes" button to submit the updates to the database.  They see a
message stating that their account info has been updated.
4. Customers may also delete their account by clicking on the "Delete My Account" button.  They see a
message stating that their account has been deleted.
5. Customers press the "Return To Homepage" button to close this screen and return to the prevous screen.

"View My Orders" button
1. Customers see only their past order information.
2. Customers press the "Return To Homepage" button to close this screen and return to the prevous screen.


```

![example image1](./assets/images/proj2-screen1.png)

![example image2](./assets/images/proj2-screen2.png)

![example image3](./assets/images/proj2-screen3.png)

![example image4](./assets/images/proj2-screen4.png)

![example image5](./assets/images/proj2-screen5.png)

![demo video](./assets/video/proj2-restaurant-mgr-demo.gif)

## Credits

```md
Group 5 team members: Kweku Adarkwa, Justin Anderson, Alexis Brownstein, Ryan Dong, Luana Paredes, bootcamp instructor, TAs and bootcamp, Phil, and Wyzant tutor, Mike
```

## License

 ```md
 MIT 
```

Link to license text:
https://opensource.org/licenses/mit-license


![badge](https://img.shields.io/badge/license-mit-black)


## Features

<!-- 
# h1
###### h6
**bold**
*italic*
_underline_

| key | value |
|-|-|
| name | 'bob' |


- listt
- items

1. numberd
1. list
1. all ones - auttomatic numbering
Feattures for *future* development
 -->
```md
The main features in this project are:
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


Future Development Features
With more time, we would like to have made the following enhancements to our project:
Add logic for customers to update their own data
Add logic for employers to use the application to update food and beverage items, and order and customer data
Add logic for the application to handle multiple restaurants
Add logic for phone and delivery orders
Capture more field values in each database table
Check for username already existing before allowing a new username and password to be saved
Add “forgot password” logic
Add “Go to Homepage” button from order page

```

## How-to-Contribute

```md
N/A
```

## Test Instructions

```md
N/A
```

## Questions

```md
Feel free to contact us with any questions.

We can be reached at alexis@drdatabase.com.
```

This GitHub repo can be found at:
  
https://github.com/abrownstein2022/proj2-restaurant-mgmt-sys
 
