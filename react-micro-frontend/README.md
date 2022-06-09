# React.js Micro Frontend Template Project
This project consists of three main components:  
1. A React.js parent container application that hosts the various micro frontends  
2. A React.js micro frontend  
3. A Vue.js micro frontend  


## Template Project Docker Instructions
These are the instructions for launching this solution in Docker. If you prefer to launch the application locally without Docker, proceed to the next section.  

Steps:
1. Visit https://www.docker.com/products/docker-desktop/ and download/install Docker Desktop and Docker Compose  
2. Clone this repository to your local machine.  
3. Navigate to the root directory in a command terminal  
    3.1 Run the following command to build and launch the solution in Docker  
    ```sh
    docker-compose up  
    ```  
4. Navigate your browser to http://localhost:8080/  

This will show the parent container which pulls in the micro front end for react from http://localhost:8081/ and the micro frontend for vue from http://localhost:8082/.  


## Template Project Build and Launch Instructions
These are the instructions for building from source and launching each application locally.  

Steps:  
1. Clone this repository to your local machine.  
2. Install npm  
3. Navigate to the react-micro-frontend folder in a command terminal  
    3.1 Run the following command to download module dependencies  
    ```sh
    npm update  
    ```  
    3.2 Run the following command to launch the react micro frontend  
    ```sh
    npm run start  
    ```  
4. Navigate to the vue-micro-frontend folder in a command terminal  
    4.1 Run the following command to download module dependencies  
    ```sh
    npm update  
    ```  
    4.2 Run the following command to launch the vue micro frontend  
    ```sh
    npm run start  
    ```  
5. Navigate to the parent-container folder in a command terminal  
    5.1 Run the following command to download module dependencies  
    ```sh
    npm update  
    ```  
    5.2 Run the following command to launch the react parent container  
    ```sh
    npm run start  
    ```  
6. Navigate your browser to http://localhost:8080/  

This will show the parent container which pulls in the micro front end for react from http://localhost:8081/ and the micro frontend for vue from http://localhost:8082/.  





