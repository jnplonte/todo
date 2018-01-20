<?php
namespace helper;

class baseHelper {
    private $payload = Array('status' => 'success', 'message' => '', 'data' => '');

    public function response($data, $message=null){
      $this->payload['message'] = !empty($message) ? $message : '';
      
      if(empty($data)){
          $this->payload['status'] = 'failed';
      }else{
          $this->payload['data'] = $data;
      }

      return $this->payload;
    }
}
