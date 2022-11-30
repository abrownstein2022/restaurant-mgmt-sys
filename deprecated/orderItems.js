/*
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

*/

var menuItems = document.getElementById("main");
