<?php
namespace todo;
use inter;

class todoList implements inter\baseInterface {
    private $queryFunction;
    private $helper;

    function __construct() {
        $this->queryFunction = new \query\queryFunction('todolist');
        $this->helper = new \helper\baseHelper();
    }

    public function getAll($request, $response, $service) {
        $results = $this->queryFunction->_get();  
        return $response->json($this->helper->response($results));
    }

    public function get($request, $response, $service) {
        $results = $this->queryFunction->_get($request->id);  
        return $response->json($this->helper->response($results));
    }

    public function post($request, $response, $service) {
        $service->validateParam('value', 'Invalid Value Parameter')->notNull();
        
        $postParam = Array();
        foreach ($request->paramsPost() as $key => $value) {
            $postParam[$key] = $value;
        }

        $results = $this->queryFunction->_insert($postParam);  
        return $response->json($this->helper->response($results));
    }

    public function put($request, $response, $service) {
        parse_str(file_get_contents('php://input'), $postParam);

        $results = $this->queryFunction->_update($request->id, $postParam);  
        return $response->json($this->helper->response($results));
    }

    public function delete($request, $response, $service) {
        $results = $this->queryFunction->_delete($request->id);  
        return $response->json($this->helper->response($results));
    }
}
