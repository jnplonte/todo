# TODO API
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

## Dependencies
* php: [http://php.net/](http://php.net/)
* mysql: [https://www.mysql.com/](https://www.mysql.com/)
* docker: [http://docker.com/](http://docker.com/)
* klein: [https://github.com/klein/klein.php](https://github.com/klein/klein.php)
* composer: [https://getcomposer.org/](https://getcomposer.org/)


## Installation
- Intall Docker `https://docs.docker.com/engine/installation/`
- Login to Docker `https://docs.docker.com/engine/reference/commandline/login/`
- Install dependencies by running `docker run --rm -v $(pwd):/app composer/composer:latest install`


## How to Use
- Run Docker `docker-compose up --force-recreate --abort-on-container-exit` it will listen to http://localhost:8088/

#### get todo list
- **[GET]** `http://localhost:8088/api/v1/todo-list/{id}`
- optional params: "id"

#### add toto list
- **[POST]** `http://localhost:8088/api/v1/todo-list/`
- required body: {"value" : "toto number one"}

#### update todo list
- **[PUT]** `http://localhost:8088/api/v1/todo-list/{id}`
- required params: "id"
- optional body: {"value" : "toto number one", "active" : "1"}

#### delete account
- **[PUT]** `http://localhost:8088/api/v1/todo-list/{id}`
- required params: "id"

