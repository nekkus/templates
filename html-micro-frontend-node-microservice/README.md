# Template: HTML Micro Frontend with Node.js Microservice

## General Information

This is a template that demonstrates how to create custom html elements as micro frontends and connect them to a node.js microservice. It has three components:

1. A node.js microservice.
2. A micro frontend panel that communicates to the node.js microservice, it turns green if 5 or less numbers are passed to the service or yellow if it is greater than 5. 
3. A plain HTML application that would function as the parent container for all micro frontends.


## Run Tempalte Demo

To run the template:
1. Install Docker Desktop for Windows or Mac (https://www.docker.com/products/docker-desktop).
2. Clone the latest repository.
3. Open a command terminal, navigate to the root folder of the template where this README is located, and run the following command:
```sh
docker-compose up
```
4. Open your chrome browser and navigate to https://localhost:4500/app.html


## Detailed Information

Each component is listed below in more detail as to how they work together.


### Node.js Microservice

The microservice has a few constants that can be tweaked or moved into a configuration file if desired. They are listed below:

```js
		this.ALERT = "ALERT"
		this.VALID = "OK"
		this.MAX_SIZE = 5
```
ALERT: Is the default value the service will respond with if the list of numbers provided is above the MAX_SIZE.
VALID: Is the default value the service will respond with if the list of numbers provided is below or equal to the MAX_SIZE.
MAX_SIZE: Is the maximum list size of numbers that can be provided to the service.

Note: Since the example shows how to do it via https, to run the entire solution you will need to navigate to the service in the browser and accept/install the self-signed certificate to get the example to work with https. Otherwise you can modify the example to work with http.


### Micro Frontends
The micro frontend can be embeded in any application. It can be hosted on the same server as seen at /frontend/widgets/example.html, the contents are as follows:

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

	<script src="js/custom-panel.js"></script>

	<title>Custom Panel Testbed</title>
</head>

<body>
	<div id="main">
		<h1>Custom Panel Testbed</h1>
		<div class="card" style="width: 18rem; height: 18rem;" is="custom-panel" numbers="[1,2,3,4,5,6,7,8,9]"></div>
	</div>
</body>

</html>
```

A panel is added using a script tag:
```html 
<script src="js/custom-panel.js.js"></script>
```

A panel can be placed on the page with the following code, the cosmetic attributes class and style are removed for simplicity:
```html
<div is="custom-panel" numbers="[1,2,3,4,5,6,7,8,9]"></div>
```

The panel has one custom attribute "numbers". The numbers attribute is an array of numbers that will be passed to the node.js service. The panel color will change green or yellow depending on the list size.

### Conatiner App

An example of how to embed the panel as a micro frontend into an independent website is below:

```html
    <!-- import scripts from another site that will register the new custom component -->
    <script src="https://localhost:4501/js/custom-panel.js"></script>   

    ...

    <!-- custom component panel -->
    <div class="card" style="width: 18rem; height: 18rem;" is="custom-panel" numbers="[1,2,3,4,5,6,7,8,9]"></div>

```
