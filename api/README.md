# TODO API


## Dependencies
* php: [http://php.net/](http://php.net/)
* mysql: [https://www.mysql.com/](https://www.mysql.com/)
* docker: [http://docker.com/](http://docker.com/)
* klein: [https://github.com/klein/klein.php](https://github.com/klein/klein.php)
* composer: [https://getcomposer.org/](https://getcomposer.org/)


## Installation
- Intall Docker `https://docs.docker.com/engine/installation/`
- Install dependencies by running `docker run --rm -v $(pwd):/app composer/composer:latest install`


## How to Use
- Run Docker `docker-compose up` it will listen to http://localhost:8088/

#### get todo list
- **[GET]** `http://localhost:8088/api/v1/todo-list/{id}`
- optional params: "id"

#### add toto list
- **[POST]** `http://localhost:8088/api/v1/todo-list/`
- required body: {"value" : "toto number one"}

#### update todo list
- **[PUT]** `http://localhost:8088/api/v1/todo-list/{id}`
- required params: "id"
- required body: {"value" : "toto number one"}

#### delete account
- **[PUT]** `http://localhost:8088/api/v1/todo-list/{id}`
- required params: "id"

