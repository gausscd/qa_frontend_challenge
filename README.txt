README 
v1.0 - 27/5/2021


This is an automation testing project using Testcafe and the Page Object Model for the https://www.saucedemo.com/ webpage, an ecommerce.  

- This Repository can be found here: https://github.com/gausscd/wizeline_qa_frontend_challenge

- Setup:
 1. Install Node.js + npm https://nodejs.org/en/
    [You can follow this guide: https://wsvincent.com/install-node-js-npm-windows/]
 2. From the main directory (qa_frontend_challenge/) run the following commands:
	mpm init
	npm install testcafe
 3. Recommended Javascript IDE: Visual Studio Code: https://code.visualstudio.com/
	Atom: https://ide.atom.io/
	
	
- Current available pages with their respective .js files, found in !qa_frontend_challenge/pages/" are:

	(PageName / jsfile.js)
	Login 							/ LoginPage.js
	Products 						/ ProductsPage.js
	Shopping cart or "Your Cart" 	/ ShoppingcartPage.js
	Checkout information 			/ CheckoutInformationPage.js
	Checkout Overview 				/ CheckoutoverviewPage.js
	Checkout Complete Order 		/ CheckoutCompleteOrderPage.js (nothing here yet as of now)


- There is also one test file for each page, current files found in "qa_frontend_challenge/tests/" are:

	(Page Name/testfile.js)
	Login 							/ login.tests.js
	Products 						/ products.tests.js
	Shopping cart or "Your Cart" 	/ shoppingcart.tests.js
	Checkout Information 			/ checkout_information.tests.js
	Checkout Overview 				/ checkout_overview.tests.js
	Checkout Complete Order 		/ checkout_complete_order.tests.js(nothing here yet as of now)

- There is a data folder with a Constants file, currently there is data for Users (valid and invalid) and for the Checkout Information Page

- A roles folder also exists with a roles file, current roles are: validUser and invalidUser

- To run the tests you can execute the following in the terminal while being at your "qa_frontend_challenge" folder:

    All tests: 
	testcafe chrome ./frontend_challenge_pom/tests
    
	Login tests: 
    testcafe chrome './frontend_challenge_pom/tests/login.test.js'
	
	Products tests: 
	testcafe chrome ./frontend_challenge_pom/tests/products.tests.js
    
	
	Shoppingcart tests: 
	testcafe chrome ./frontend_challenge_pom/tests/shoppingcart.tests.js
    
	Checkout information tests: 
	testcafe chrome './frontend_challenge_pom/tests/checkout_information.tests.js'
    
	Checkout overview tests: 
	testcafe chrome './frontend_challenge_pom/tests/checkout_overview.tests.js'

