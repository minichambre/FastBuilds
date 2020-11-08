# FastBuilds

A fast League of Legends build lookup tool.

## Stack
- Docker & Docker Compose
- NodeJS & Express
- MongoDB
- ReactJS 

## Development
1. Install Docker
1. Rename .env.example to .env
1. If you aren't using the docker container for MongoDB, edit the .env MongoDB connection string.
1. Inside the repo folder, run 
    ```
    docker-compose up
    ```
    This will install dependencies, initialise MongoDB and start a web server at port 3000.
1. You won't have any data in the database to begin with. Uncomment route in index.js, and navigate to that url to populate with testing data
1. Make changes & restart docker compose