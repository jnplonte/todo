<?php
namespace query;
use func;

class queryFunction extends func\baseFunction {
    private $tableName;
    
    function __construct($table){
        parent::__construct();

        $this->tableName = $table;
    }

    public function _insert($data=null){
        $this->_dbConnect();

        if (!$this->conn && empty($data)) {
            return false;
        }

        $parseData = $this->_parseInsertData($data);

        $sqlInsertUser = "INSERT INTO ".$this->tableName." (".$parseData['columns'].") VALUES (".$parseData['values'].")";
        $returnValue = false;

        if (mysqli_query($this->conn, $sqlInsertUser)) {
            $last_id = mysqli_insert_id($this->conn);
            $returnValue = array('id' => $last_id, 'data' => $data);
        }

        mysqli_close($this->conn);
        return $returnValue;
    }

    public function _get($id=null){
        $this->_dbConnect();

        if (!$this->conn) {
            return false;
        }

        if(empty($id)){
            $sqlSelect = "SELECT * FROM " .$this->tableName;
        } else {
            $sqlSelect = "SELECT * FROM " .$this->tableName. " WHERE id = ".$id;
        }
        $returnValue = false;

        $result = mysqli_query($this->conn, $sqlSelect);
        if (mysqli_num_rows($result) > 0) {
            while($row = mysqli_fetch_assoc($result)) {
                $returnValue[] = $row;
            }
        }

        mysqli_close($this->conn);
        return $returnValue;
    }

    public function _update($id=null, $data=null){
        $this->_dbConnect();

        if (!$this->conn && (empty($id) && empty($data))) {
            return false;
        }

        $parseData = $this->_parseUpdateData($data);

        $sqlUpdate = "UPDATE ".$this->tableName." SET ".$parseData. " WHERE id = ".$id;;
        $returnValue = false;
        
        if (mysqli_query($this->conn, $sqlUpdate)) {
            if (mysqli_affected_rows($this->conn) > 0) {
                $returnValue = array('id' => $id, 'data' => $data);
            }
        }

        mysqli_close($this->conn);
        return $returnValue;
    }

    public function _delete($id=null){
        $this->_dbConnect();

        if (!$this->conn && empty($id)) {
            return false;
        }

        $sqlDelete = "DELETE FROM " .$this->tableName. " WHERE id = ".$id;
        $returnValue = false;

        if (mysqli_query($this->conn, $sqlDelete)) {
            if (mysqli_affected_rows($this->conn) > 0) {
                $returnValue = array('id' => $id);
            }
        }

        mysqli_close($this->conn);
        return $returnValue;
    }
}
