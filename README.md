# Restaurant Management System (Interactive Full-Stack Project)

![license](https://img.shields.io/badge/license-MIT-black)

## Description

```md
This interactive full-stack project is a restaurant management system called Restaurant_Mgr. 
The application can be used by restaurants to manage their food items and orders, and allow customers to log in and place orders.

The following technologies and instructions were used:
• Node.js and Express.js to create a RESTful API.
• Handlebars.js as the template engine.
• MySQL and the Sequelize ORM for the database.
• Both GET and POST routes for retrieving and adding new data.
• At least one new library, package, or technology that we haven’t discussed in class.  This project is using dates-fns to format dates. (https://date-fns.org/)
• Have a folder structure that meets the MVC paradigm.
• Include authentication (express-session and cookies).  This project includes a login page for customers to place online orders from Group Five's Burgers and Fries.
• Protect API keys and sensitive information with environment variables.
• Be deployed using Heroku (with data).
• Have a polished UI.
• Be responsive.
• Be interactive (in other words, accept and respond to user input).
• Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, and so on).
• Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).

Create our own user story??
User Story  (from challenge 6 as an example)  ******
AS A traveler ******
I WANT to see the weather outlook for multiple cities ******
SO THAT I can plan a trip accordingly ******

Acceptance Criteria
GIVEN a weather dashboard with form inputs ******
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history ******
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city  ******

```

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

## Installation

```md
To use this application, please read the following steps:

1.  Clone this GitHub repo.
2.  From the terminal, run 'npm install'.
3.  Run sequelize and seed the database on your local computer:
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

 
```

## Usage

Here's a link to this application in GitHub:
https://abrownstein2022.github.io/proj2-restaurant-mgmt-sys/

```md
For the purposes of this exercise:
1. Although this application can handle different restaurants, we are using one restaurant only
called "Group Five's Burgers and Fries".
2. This restaurant only accepts online orders.
3. A customer called "employee" has access to admin screens to maintain
look-up data that the customers see/use (restaurants, items, itemtypes).
4. The "employee" login also has access to update customer and order information.

After following the steps to install necessary software, please proceed below.

To use this application, go to the Terminal and type 'npm start' and press enter.

A login screen appears for the customer to enter their login and password, or sign up.  
If a customer forgets their password, they click on the "Forgot my password" link to 
reset it.

Once logged in, the customer lands on the main website page with the option to click on a 
'Place Order' button, to enter their new order, or "Update My Info", which allows them to 
update their customer info.

When a customer clicks on the 'Place Order' button, they are sent to a page to select item 
types, and select an item based on the item type selected. The item price is then displayed
next to the selected item.    

Customers can enter as many order lines as they want by clicking on the 
"Order additional items" button.  

The customer can also change that line item to something else before
confirming the order. Customers must also enter the item quanity for each item ordered. 

When the customer is done creating their order, they click the "I'm done" button.  Then, 
their order number, order date, and all their order lines are displayed.  Order lines contain
line item total cost and the order total cost at the bottom.

In the admin area of the website, which is only available to the customer "employee", the lookup
data can be created, updated and viewed.  This functionality works for the following data: 
restaurants, customers, item types and items.  The "employee" login also has access to update 
any orders and orderitems data placed by customers.  

```

![example image1](./assets/images/proj2-screen1.png)

![example image2](./assets/images/proj2-screen2.png)

![example image3](./assets/images/proj2-screen3.png)

![example image4](./assets/images/proj2-screen4.png)

![example image5](./assets/images/proj2-screen5.png)

![demo video](./assets/video/proj2-restaurant-mgr-demo.gif)

## Credits

```md
Group 5 team members: Kweku Adarkwa, Justin Anderson, Alexis Brownstein, Ryan Dong, Luana Paredes, bootcamp instructor, TAs and tutor 
```

## License

 ```md
 MIT 
```

Link to license text:
https://opensource.org/licenses/mit-license


![badge](https://img.shields.io/badge/license-mit-black)


## Features

```md
The main features in this project are:
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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
 
