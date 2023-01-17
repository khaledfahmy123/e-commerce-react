# Small e-commerce test app
it essentially consists of four components
  * Add-product-form component
  * Data-Fetching-and-Validation component
  * Home component
  * Product-Card component

## Add-Product-Form Component
it contains the form through which the user submits a new product

## Data-Fetching-and-Validation Component
you can call this the gateway to the backend it contains 4 functions

Function Name         | Description
--------------------- | -------------
FetchData             | used to send a get request to get all products from the database to be displayed 
postData              | used to send post request to the backend with the form data to store a new product
isFormValid           | used to check the validity of the form data the user entered before sending it to the backend
deleteData            | used to send a delete request with the array of products' SKUs, that you've already selected, to the backend to be deleted at once instead of deleting one by one to reduce requests and transactions => **Note**: here the delete request sent as a post request because there the backend forbids using delete requests because of a "CORS" issue. hence my solution is a little bit sneaky in the backend i check a property called "status" if its value "delete" i deal with it as a delete request if not i deal with it as a normal post request


## Home Component
here you will find the structure of the main page
==> it uses the product-card component to display the products fetched in a proper design

## Product-Card Component
here you will find the template for the product card found in the home page and as you have noticed it's a stateless component
