<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
header('Content-Type: application/json');

define('DIR', __DIR__.'/..');

if (!$loader = include DIR.'/vendor/autoload.php') {
    die('You must set up the project dependencies.');
}

foreach (glob('../functions/*.php') as $filename){
    include_once(__DIR__.'/'.$filename);
}

foreach (glob('../interface/*.php') as $filename){
    include_once(__DIR__.'/'.$filename);
}

foreach (glob('../helpers/*.php') as $filename){
    include_once(__DIR__.'/'.$filename);
}

foreach (glob('../application/*.php') as $filename){
    include_once(__DIR__.'/'.$filename);
}

$route = new \Klein\Klein();

$route->onError(function ($route, $message) {
    $helper = new \helper\baseHelper();
    echo json_encode($helper->response($data, $message), true);
});

$route->with('/api/v1/todo-list', function () use ($route) {
    $todoList = new \todo\todoList();
    $route->respond('GET', '/?', function($req, $res, $service) use ($todoList) { return $todoList->getAll($req, $res, $service); });

    $route->respond('GET', '/[:id]', function($req, $res, $service) use ($todoList) { return $todoList->get($req, $res, $service); });

    $route->respond('POST', '/?', function($req, $res, $service) use ($todoList) { return $todoList->post($req, $res, $service); });

    $route->respond('PUT', '/[:id]', function($req, $res, $service) use ($todoList) { return $todoList->put($req, $res, $service); });

    $route->respond('DELETE', '/[:id]', function($req, $res, $service) use ($todoList) { return $todoList->delete($req, $res, $service); });
});

$route->dispatch();

