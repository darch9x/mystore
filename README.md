# MyStore Project

## Getting Started

This project is about single-page ecommerce application with Angular called MyStore.

### Project features

Product list page, which displays the available products for the user to choose and add to their cart
Product details page, which displays more information about any particular product
Shopping cart, which includes the products that the user has added to their cart
Checkout form, which collects information about the user (e.g., name, address, payment details, etc.)
Order confirmation page, which shows the outcome after the user completes the checkout process (i.e., submits the checkout form)

### The experience and flow of the application

The product list page uses @Input/@Output decorator to share data between 2 parent-child components.
The shopping cart page uses service to get added products from Product list page and Detail page, use template-driven form to get and submit forms that are validated.
The actions (add to cart, remove from cart) uses window alert to give user feedback.
These pages use routing (navigation, routerLink...) to navigate between pages.
Service reads data.json (including product list) to return a product list. Others services (addProductToCart - POST, removeFromCart - PUT...) use variables in service file to store these data TEMPORARILY. These temporary should be covered in api backend.

## Package installation

Run `npm install` to install dependencies

## Launch

Run `ng serve` for a dev server and navigate to `http://localhost:4200/` then you can test.
