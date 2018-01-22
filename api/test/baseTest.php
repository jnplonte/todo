<?php
define('DIR', realpath(__DIR__ . '/..'));

if (!$loader = include DIR.'/vendor/autoload.php') {
    die('You must set up the project dependencies.');
}

foreach (glob('functions/*.php') as $filename){
    include_once(DIR.'/'.$filename);
}

foreach (glob('interface/*.php') as $filename){
    include_once(DIR.'/'.$filename);
}

foreach (glob('helpers/*.php') as $filename){
    include_once(DIR.'/'.$filename);
}

foreach (glob('application/*.php') as $filename){
    include_once(DIR.'/'.$filename);
}