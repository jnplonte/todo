<?php
use todo\todoList;

use PHPUnit\Framework\TestCase;

class todoListTest extends TestCase {

    protected function getDataSet() {
        return new MyApp_DbUnit_ArrayDataSet(
            [
                "status" =>  "success",
                "message" => "",
                'data' => [
                    [
                        'id' => "1",
                        'value' => 'superrrr test',
                        'active' => '1',
                        'create_date' => '2018-01-21 17:03:43'
                    ],
                    [
                        'id' => "2",
                        'value' => 'superrrr test number two',
                        'active' => '1',
                        'create_date' => '2018-01-22 14:53:39'
                    ]
                ],
            ]
        );
    }
    
    public function testTodoList() {
        $todoList = new todoList();

        $this->assertTrue(!empty($todoList));
    }
}