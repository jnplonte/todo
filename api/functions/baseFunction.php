<?php
namespace func;

abstract class baseFunction {
    protected $app;

    protected $conn;

    function __construct(){
        // Read JSON file
        $json = json_decode(file_get_contents(DIR.'/config.json'), true);
        $this->app = $json['database'];
    }

    public function _dbConnect(){
        $this->conn = mysqli_connect($this->app['server'], $this->app['user'], $this->app['password'], $this->app['name']);
        if(mysqli_connect_errno()){
            die("Failed to connect to MySQL: " . mysqli_connect_error());
        }
        
        return true;
    }

    public function _parseInsertData($data=null){
        if (empty($data)) { return null; }

        $columns = implode(", ",array_keys($data));
        $escaped_values = array_map(array($this->conn, 'real_escape_string'), array_values($data));
        $values  = sprintf("'%s'", implode("','", $escaped_values ));

        return array('columns' => $columns, 'values' => $values);
    }

    public function _parseUpdateData($data=null){
        if (empty($data)) { return null; }

        $parts = array();
        foreach ($data as $key => $value) {
            if(is_numeric($value)) {
                $parts[] =  $key . " = ".$value;
            } else {
                $parts[] =  $key . " = '".$value."'";
            }
        }
        return implode(",", $parts);
    }
}
