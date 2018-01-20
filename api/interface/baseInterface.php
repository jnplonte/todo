<?php
namespace inter;

interface baseInterface {
    public function getAll($request, $response, $service);
    public function get($request, $response, $service);
    public function post($request, $response, $service);
    public function put($request, $response, $service);
    public function delete($request, $response, $service);
}