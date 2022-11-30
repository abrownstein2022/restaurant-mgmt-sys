const router = require('express').Router();
const { Project, User, Customers } = require('../models');
const withAuth = require('../utils/auth');
const log = require('../utils/logger')
//! homeRoutes.js should only be used for handlebar view routes


// empty routes are treated as an empty path (/) and typically used to show the homepage
// localhost:3001
// same as localhost:3001/
// localhost:3001/profile
// most browser view pages will not be protected by middleware
// they will be visible to anyone
// no "withAuth" needed
router.get('/', async (req, res) => {
  console.log("path: '/'")
  try {
    // Get all projects and JOIN with user data
    // const projectData = await Project.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name'],
    //     },
    //   ],
    // });

    // // Serialize data so the template can read it
    // const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//this open handlebars (html) page for the menu for ordering
router.get('/menu', async (req, res) =>{
  res.render('menu')
})

// router.get('/project/:id', async (req, res) => {
//   try {
//     // const projectData = await Project.findByPk(req.params.id, {
//     //   include: [
//     //     {
//     //       model: User,
//     //       attributes: ['name'],
//     //     },
//     //   ],
//     // });

//     // const project = projectData.get({ plain: true });

//     res.render('project', {
//       // ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
router.get('/orders', withAuth, async (req, res) => {
  try {
    // TODO:
    //* Find the logged in users data, and their list of orders
    //* render orders page with array of order data

    const userData = await Customers.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('orders', {
      ...user,
      //! pass array of orders here
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/orders/:id', withAuth, async (req, res) => {
  try {
    const myVariable = req.params.id
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/register', withAuth, (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }
  //! on the register page, pass the value of "show_register" to the login page, to switch between
  //! register and login pages
  res.render('register', { show_register: true }); // show registration section
  // res.render('login', { show_register: false }); // show login section
});

router.get('/main', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

//  res.render('register', { show_register: false }); 
 res.render('login');
}); 

//route for view orders for logged in customer
// router.get("/view-order", async (req, res) => {
//   try {
//     // const log = logger('/view-order')
//     //do get request to api/orders to return array of orders
//     //alexis will write api abstraction (function) for people in your API
//     //to use your API.  Abstraction functions make it so they only have to call
//     //one function.  They are shared functions. 
//     console.log('Registering user:', req.body)
    
//     //use customerid value stored in session var called "req.session.customer_id"

//     // let userExists = await Customers.findOne(req.body)
//     // create the customer record in Customer model
//     let result = await fetch('/api/orders/view-orders')
//     //- check to see if the user is in the db first

//     //  pass the whole req.body object into the query, because it matches the schema
//     //  this becomes `INSERT INTO Customers (fname, lname, phone) VALUES ('john', 'wick', null)

//     //  if db interaction threw an error, all steps below are skipped
//     // res.status(200).json(updatedUserData)
//     /*
//     100 =>
//     2xx => Success
//     3xx => ----- rare - server side
//     4xx => user input errror
//     5xx => server error
//     */






//     // always return something, at least a status
//     // res.status(200).json('ayo')
//     // let res = {}
//     // .json('')

//     // send is used when the object is already valid json or json-like object
//     // res.status(200).send({
//     //   userData: someData
//     // })
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });


router.get('/view-order', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  //! on the register page, pass the value of "show_register" to the login page, to switch between
  //! register and login pages
  res.render('vieworder', { order_array: 'pass data here' }); // show registration section
  // res.render('login', { show_register: false }); // show login section
});

module.exports = router;
